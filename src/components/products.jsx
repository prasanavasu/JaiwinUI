import React, { useState } from 'react';
import JaiNavbar from './navbar';
import ColorInversionFooter from './footer'
import {Container, Grid, Breadcrumbs, Link, Box } from '@mui/material';
import './products.css'
import ProductModal from './productDetails'
import ProductList from './productList'

function JaiwinProduct() {



  const [modalData, setModalData] = useState(null);
  const [linkHref, setlinkHref] = useState('#');


  const handleOpenModal = (data) => {
    // setModalData(data)
    // setlinkHref('/products')
  };

  const handleCloseModal = () => {
    setModalData(null)
    setlinkHref('#')
  };


  return (
    <>
      <JaiNavbar />
      <Box sx={{ marginTop: 10 }}>

        <Container>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href={linkHref}>
            Products
            </Link>
           
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