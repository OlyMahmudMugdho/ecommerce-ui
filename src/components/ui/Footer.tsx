// components/Footer.tsx
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: '#282c34',
                color: '#fff',
                boxShadow: '0px -2px 5px rgba(0,0,0,0.2)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Company
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Support
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Legal
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Follow Us
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" variant="subtitle1" color="inherit">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="inherit" align="center">
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
