import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import {CardInfo} from "@/components/ui/Section";



export default function CarouselRatio(props : CardInfo[]) {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: 343,
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {props.map((item) => (
                <Card orientation="horizontal" size="sm" key={item.name} variant="outlined">
                    <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                        <img
                            srcSet={`${item.link}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.link}?h=120&fit=crop&auto=format`}
                            alt={item.name}
                        />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                        <Typography level="title-md">{item.name}</Typography>
                        <Typography level="body-sm">{item.description}</Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
}
