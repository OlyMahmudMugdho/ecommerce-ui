import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  header: string,
  //cards: CardInfo[]
}

export type CardInfo = {
  name: string,
  category: string,
  image: string
}

export default function Section(props : Props) {
  return (
    <Box className='flex justify-between items-center' component="section" sx={{ p: 2}}>
      <Box
          className='flex w-full items-center justify-between'
          display="flex"
          alignItems="center"
      >
          <Typography className={'text-2xl'} variant="h4" component="h4">
              {props.header}
          </Typography>

          <Button variant="outlined">SEE MORE</Button>
      </Box>
    </Box>
  );
}
