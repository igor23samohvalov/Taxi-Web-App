import { Navigate, Route, Routes } from 'react-router';
import { AuthProvider } from './hoc/AuthProvider.jsx';
import MainPage from './pages/MainPage';
import RequireAuth from './hoc/RequireAuth.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/signupForm.jsx';

const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
        <Route path="main/*" element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
