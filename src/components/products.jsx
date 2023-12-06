import React, { useState } from 'react';
import JaiNavbar from './navbar';
import ColorInversionFooter from './footer'
import {Container, Grid, Breadcrumbs, Link, Box,Typography } from '@mui/material';
import './products.css'
import ProductModal from './productDetails'
import ProductList from './productList'

function JaiwinProduct() {



  const [modalData, setModalData] = useState(null);
  const [linkHref, setlinkHref] = useState(null);
  const [breadLink, setbreadLink] = useState(null);


  const handleOpenModal = (data) => {
    setModalData(data)
    setbreadLink(data.name)
    setlinkHref('/products')
  };

  const handleCloseModal = () => {
    setModalData(null)
    setbreadLink(null)
    setlinkHref(null)
  };


  return (
    <>
      <JaiNavbar />
      <Box sx={{ marginTop: 10, mx:2 }}>

        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            {linkHref ? <Link underline="hover" color="inherit" href={linkHref}>Products </Link> :<Typography color="text.primary">Products</Typography>}
            {breadLink && <Typography color="text.primary">{breadLink}</Typography>}
            
           
           
          </Breadcrumbs>

          <Grid container rowSpacing={1} columnSpacing={1}  sx={{ m: 1, my:3 }}>
             
              {modalData ? <ProductModal data={modalData} handleClose={handleCloseModal} /> : <ProductList data={modalData} handleopen={handleOpenModal} />}
           
          </Grid>

        </Container>
      </Box>
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinProduct;