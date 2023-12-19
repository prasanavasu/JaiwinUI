import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductModal = ({ data, handleClose }) => {

    const detailStyle = {
        my: 1, fontWeight: "bold", color: "Green", fontSize: "15px"
    }

    return (

        <Box sx={{ bgcolor: 'background.paper', border: '2px solid #000' }}>
            <Grid container rowSpacing={1} columnSpacing={1} >

                <Grid item xs={12} md={4} lg={4}>
                    <Typography variant="h5" sx={{ my: 2 }}>
                        <Button onClick={handleClose} ><KeyboardBackspaceIcon sx={{ color: "black", fontSize: 35 }} /></Button> {data.name}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">

                            <TableBody>

                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">Business Type</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{data.business_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">Brand Name</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{data.brand_name}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}><div>
                                        ₹ {data.price}/{data.unit}
                                    </div>
                                        <div>
                                            <span style={{ fontWeight: "lighter", color: "#7b7e81", fontSize: "smaller" }}>
                                                {data.price_note}
                                            </span>
                                        </div></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">Color</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{data.color}`</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">Made In</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{data.country_origin}</TableCell>
                                </TableRow>


                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography sx={{ mx: 2, my: 4 }}>
                        <Typography variant="h6" sx={detailStyle}>Preferred Buyer From:</Typography>
                        <span style={{ fontWeight: "bold", marginLeft: 50 }}> Location:</span> Anywhere in India
                    </Typography>


                    {/*<Button variant='contained' sx={{ backgroundColor: '#d45e81', marginLeft: 16 }}>Enquiry Now</Button>*/}

                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ m: 2 }}>
                    <img src={data.src} alt="Lobby" style={{ width: '100%', height: 500, objectFit: 'fit' }} />

                </Grid>
                <Grid item xs={12} md={4} lg={4} sx={{ mx: 2 }}>
                    <Typography sx={{ my: 2 }}>
                        <Typography variant="h6" sx={detailStyle}>Product Details:</Typography>

                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">

                                <TableBody>

                                    {Object.entries(data.product_details).map(([key, value]) => (
                                        <TableRow key={key}>
                                            <TableCell component="th" scope="row">{key}</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold" }}>{value}</TableCell>
                                        </TableRow>
                                    ))}


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    );
};

export default ProductModal;
