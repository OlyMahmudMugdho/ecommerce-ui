import * as React from 'react';
import Box from '@mui/material/Box';

type Props = {
  header: string,
  name: string,
  category: string,
  image: string
}


export default function Section(props: Props) {
  return (
    <Box className='flex justify-between items-center' component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
