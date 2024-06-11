import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProductCard from './ProductCard'

type Props = {
  header: string,
  cards: CardInfo[]
}

export type CardInfo = {
  name: string,
  category: string,
  image: string,
    description: string,
    link: string
}

export default function Section(props : Props) {
  return (
    <Box className='flex flex-col justify-between items-center' component="section" >
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

        <Box
            className='flex w-full items-center justify-between'
            display="flex"
            alignItems="center"
        >
            {  props.cards.map(
                item => <ProductCard
                    key={item.link}
                    name={item.name}
                    category={item.category}
                    image={item.image}
                    description={item.description}
                    link={item.link}
                />
            )}
        </Box>


    </Box>
  );
}
