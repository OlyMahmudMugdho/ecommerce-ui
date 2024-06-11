import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';
import {CardInfo} from "@/components/ui/Section";

// type Props = {
//     image: string,
//     title: string,
//     description: string,
//     link: string
// }

export default function MultiActionAreaCard(props: CardInfo) {
    return (
        <Card className="w-full" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link href={props.link}>
                    <Button size="small" color="primary">
                        View Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
