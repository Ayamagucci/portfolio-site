import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from'@mui/icons-material/Close';

export default function ImageModal({ open, handleClose, imageURL }) {

  const [ imageLoaded, setImageLoaded ] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Dialog open={ open } onClose={ handleClose }>
      <DialogTitle>
        <IconButton
          edge='end'
          onClick={ handleClose }
          sx={{ position: 'absolute', top: 1, right: 8 }}
          aria-label='Close'
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        { !imageLoaded ? (
          <CircularProgress /> // display loading indicator while image loads
        ) : (
          <img
            src={ imageURL }
            alt='Project'
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 150px)',
              margin: '0 auto'
            }}
            onLoad={ handleImageLoad }
          />
        ) }
      </DialogContent>
    </Dialog>
  );
}