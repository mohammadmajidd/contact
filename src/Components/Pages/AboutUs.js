import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from "@mui/material/Box";

export default function AboutUs() {
    return (
        <Box sx={{width:'1000px',display:'flex',margin:'auto'}}>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.w3schools.com/w3images/team1.jpg"
                        alt=" Jane Doe"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jane Doe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            CEO & Founder
                        </Typography>
                        <Typography variant='p'>
                            Some text that describes me lorem ipsum ipsum lorem.
                        </Typography>
                        <Typography>
                            jane@example.com
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 345, margin: 'auto'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.w3schools.com/w3images/team2.jpg"
                        alt="Alex"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Alex
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Designer
                        </Typography>
                        <Typography variant='p'>
                            Some text that describes me lorem ipsum ipsum lorem.
                        </Typography>
                        <Typography>
                            alex@example.com
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 345, margin: 'auto'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.w3schools.com/w3images/team3.jpg"
                        alt="Mike Ross"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mike Ross
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Art Director
                        </Typography>
                        <Typography variant='p'>
                            Some text that describes me lorem ipsum ipsum lorem.
                        </Typography>
                        <Typography>
                            mike@example.com
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}
