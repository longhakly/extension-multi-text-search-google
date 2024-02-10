import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import valentineGif from '../public/giphy.gif';
import valentineGif2 from '../public/giphy2.gif';


const ValentineCard = () => {
  const [fontSize, setFontSize] = useState(16);
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState('block');
  const [state, setState] = useState(true);

  const handleNoClick = () => {
    setFontSize((prevSize) => prevSize + 10);
    setCount((prevCount) => prevCount + 1);
    if (count == 10){
      setDisplay('none');
    }
  };

  const handleYesClick = () => {
    setFontSize(16);
    setCount(0);
    setDisplay('block');
    setState(false);
  };

  return (
    <Container>
      { (state) ? (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          height: '100vh',
        }}
      >
        <img
          src={valentineGif2.src}
          alt="Valentine GIF"
          style={{ width: '200px', height: '200px', marginBottom: '20px' }}
        />
        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 3 }}>
          Will you be my Valentine?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            size='large'
            style={{ fontSize: `${fontSize}px` }}
            onClick={handleYesClick}
            sx={{
              marginX: '5px',
            }}
          >
            Yes
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size= 'large'
            onClick={handleNoClick}
            style={{ display: `${display}` }}
            sx={{
              marginX: '5px',
              fontSize: '16px',
            }}
          >
            No
          </Button>
        </Box>
      </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            height: '100vh',
          }}
        >
          <img
          src={valentineGif.src}
          alt="Valentine GIF"
          style={{ width: '200px', height: '200px', marginBottom: '20px' }}
          />
          <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 3 }}>
            You are mine!
          </Typography>
        </Box>
      )
      }
    </Container>
  );
};

export default ValentineCard;
