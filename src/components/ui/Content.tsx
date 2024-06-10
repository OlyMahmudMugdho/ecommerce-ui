import * as React from 'react';
import Box from '@mui/material/Box';
import Section from "./Section"

export default function Content() {
  return (
    <Box className='w-full px-5' component="section">
      <Section />
    </Box>
  );
}
