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

        <Box sx={{ bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
            <Grid container rowSpacing={1} columnSpacing={1} >
                <Grid item xs={12} md={5} lg={5} sx={{ m: 2 }}>
                    <img src={data.src} alt="Lobby" style={{ width: '100%', height: 450, objectFit: 'fit' }} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h4" sx={{ my: 2 }}>
                        <Button onClick={handleClose} ><KeyboardBackspaceIcon sx={{ color: "black", fontSize: 35 }} /></Button> {data.name}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">

                            <TableBody>

                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">

                                        Business Type
                                    </TableCell>
                                    <TableCell align="right">Manufacturer, Supplier</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography sx={{ mx: 2 }}>
                        <Typography variant="h6" sx={detailStyle}>Description:</Typography>

                    </Typography>
                    <Typography sx={{ mx: 2 }}>
                        <Typography variant="h6" sx={detailStyle}>Preferred Buyer From:</Typography>

                        <span style={{ fontWeight: "bold" }}> Location:</span> Anywhere in India
                    </Typography>

                </Grid>
            </Grid>

        </Box>
    );
};

export default ProductModal;
