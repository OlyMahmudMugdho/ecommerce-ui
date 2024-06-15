// components/Footer.tsx
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#f8f8f8', // Static background color
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Company
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Support
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Legal
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Follow Us
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'© '}
                        <Link color="inherit" href="/">
                            Your E-commerce Platform
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'. All rights reserved.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
