import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import {CardInfo, CardProps} from "@/components/ui/Section";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";



export default function CarouselRatio(props : CardProps) {
    return (
        <Box className={"w-full flex flex-col"}>
            <Box className='flex w-full items-center justify-between'
                 display="flex"
                 alignItems="center"
            >
                <Typography className={'text-xl'} component="h4">
                    {props.header}
                </Typography>
                <Button variant="outlined">SEE MORE</Button>
            </Box>
            <Box
                className={"w-full"}
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
                {props.cards.map((item) => (
                    <Link href={item.link} key={item.name}>
                        <Card className={"w-full"} orientation="horizontal" size="sm"  variant="outlined">
                            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                                <img
                                    src={`${item.image}?h=120&fit=crop&auto=format`}
                                    alt={item.name}
                                />
                            </AspectRatio>
                            <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                                <Typography level="title-md">{item.name}</Typography>
                                <Typography level="body-sm">{item.description}</Typography>
                            </Box>
                        </Card>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
