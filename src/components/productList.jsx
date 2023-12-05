import React from 'react';
import { Card, CardActions, CardMedia, CardHeader, Grid, Typography, Divider, Chip, useMediaQuery } from '@mui/material';


import dishwash from '../products/dishwash.jpg'
import liquidhand from '../products/liquid-hand-wash.jpg'
import perfumedphenyl from '../products/perfumed-phenyl.jpg'
import liquiddetergent from '../products/premium-liquid-detergent.jpg'
import disposalnapkin from '../products/sanitary-napkin-disposal-machine.jpg'
import vendingnapkin from '../products/sanitary-napkin-vending-machine.jpg'
import toiletcleaner from '../products/toilet-cleaner.jpg'
import whitephenyl from '../products/white-phenyl.jpg'

function ProductList({handleopen}) {

    const productMediaQuery = useMediaQuery('(max-width:768px)');
  
  
    const products =
    {
      "cleaning": [{ "name": "Dishwash", "src": dishwash },
      { "name": "Liquid Hand Wash", "src": liquidhand },
      { "name": "Perfumed Phenyl", "src": perfumedphenyl },
      { "name": "Liquid Detergent", "src": liquiddetergent },
  
      { "name": "Toilet Cleaner", "src": toiletcleaner },
      { "name": "White Phenyl", "src": whitephenyl }], "others": [{ "name": "Sanitary Napkin Disposal Machine", "src": disposalnapkin },
      { "name": "Sanitary Napkin Vending Machine", "src": vendingnapkin },]
    };
  


    return (
        <div >
        {Object.keys(products).map((category, index) => (
          <div key={index} style={{ marginTop: 10 }}>
            <Divider />
            <Typography sx={{ m: 2, color: "Green" }} variant="h4">{category.charAt(0).toUpperCase() + category.slice(1)} Products</Typography>
            <Grid container spacing={2} justifyContent={productMediaQuery ? 'center' : ''}>
              {products[category].map((card, idx) => (
                <Grid item key={idx}>
                  <Card sx={{ maxWidth: 250 }} className='product-card'>
                    <CardHeader
                      sx={{ fontSize: 10, backgroundColor: "#00000029", height: 60 }}
                      title={
                        <Typography variant="h6" style={{ fontSize: '17px' }}>
                          {card.name}
                        </Typography>

                      }
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={card.src}
                      alt={card.name}
                      style={{ width: '100%', objectFit: 'cover' }}
                    />

                    <CardActions>
                      <Chip variant="filled" color="warning" size="small" label="View More" onClick={() => handleopen(card)}
                        sx={{
                          position: 'absolute',
                          top: 220,
                          right: 10
                        }} />

                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

          </div>
        ))}


      </div>
    );
  }
  export default ProductList;