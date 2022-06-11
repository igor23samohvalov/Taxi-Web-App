import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

function SubmittingButton() {
  return (
    <LoadingButton
      loading
      variant="contained"
      sx={{ borderRadius: '40px' }}
      fullWidth
      className="loadingButton"
    >
      Submit
    </LoadingButton>
  )
}

export default SubmittingButton;
