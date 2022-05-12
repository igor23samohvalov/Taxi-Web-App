import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import RequireAuth from './hoc/RequireAuth.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<RequireAuth><MainPage /></RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
