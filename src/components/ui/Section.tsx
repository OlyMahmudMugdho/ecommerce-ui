import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  header: string,
  cards: CardInfo[]
}

type CardInfo = {
  name: string,
  category: string,
  image: string
}

export default function Section() {
  return (
    <Box className='flex justify-between items-center' component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Box
          className='flex w-full items-center justify-between'
          display="flex"
          alignItems="center"
      >
          <Typography variant="h4" component="h4">
              h1. Heading
          </Typography>

          <Typography variant="h4" component="h4">
              h1. Heading
          </Typography>
      </Box>
    </Box>
  );
}
