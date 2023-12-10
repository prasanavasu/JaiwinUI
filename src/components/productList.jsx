import React from 'react';
import { Card, CardMedia, CardHeader, Grid, Typography, Divider, useMediaQuery } from '@mui/material';

import dishwash from '../products/dishwash.jpg'
import liquidhand from '../products/liquid-hand-wash.jpg'
import perfumedphenyl from '../products/perfumed-phenyl.jpg'
import liquiddetergent from '../products/premium-liquid-detergent.jpg'
import disposalnapkin from '../products/sanitary-napkin-disposal-machine.jpg'
import vendingnapkin from '../products/sanitary-napkin-vending-machine.jpg'
import toiletcleaner from '../products/toilet-cleaner.jpg'

function ProductList({ handleopen }) {

  const productMediaQuery = useMediaQuery('(max-width:768px)');


  const products =
  {
    "cleaning": [
      {
        "name": "Dishwash", "src": dishwash, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin", "price": "50",
        "unit": "Litre", "color": "green", "price_note":"More Than 50 litres",
        "product_details": { "Shelf Life": "1 Year", "Form": "Liquid", "Type": ["Dish Wash", "Dish Wash Bar"], "Material": "Aloe Vera Extract", "Certification": "ISO 9001:2008 Certified", "Feature": ["Anti Bacterial", "Antiseptic", "Basic Cleaning", "Skin Friendly"] }

      },
      {
        "name": "Liquid Hand Wash", "src": liquidhand, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin", "price": "50",
        "unit": "Litre", "color": "light yellow","price_note":"More Than 50 litres",
        "product_details": { "Shelf Life": "1 Year", "Packaging Size": "500 ml", "Packaging Type": "Pump Bottle", "Fragrance": "Jasmine", "Form": "Liquid" }

      },
      {
        "name": "Perfumed Phenyl", "src": perfumedphenyl, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin", "price": "25",
        "unit": "Litre", "color": "yellow, White","price_note":"More Than 50 litres",
        "product_details": { "Type": "Scented Phenyl", "Application": "Cleaning", "Form": "Liquid", "Packaging Type": "1litre", "Shelf Life": "1 Year" }

      },
      {
        "name": "Liquid Detergent", "src": liquiddetergent, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin", "price": "80",
        "unit": "Litre", "color": "blue","price_note":"More Than 50 litres",
        "product_details": { "Shelf Life": "1 Year", "Form": "Liquid", "Packaging Type": "Plastic Bottle", "Packaging Size": "2.5 Ltr.", "Usage/Application": "Cloth Washing", "Biodegradable Standard": "OCDE - OECD 301D", "Loads": "100 Brassees Loads" }

      },

      {
        "name": "Toilet Cleaner", "src": toiletcleaner, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin", "price": "40",
        "unit": "Litre", "color": "White, Blue, Dark Blue","price_note":"More Than 50 litres",
        "product_details": { "Shelf Life": "1 Year", "Form": "Liquid", "Type": "Liquid Toilet Cleaner", "Packaging Type": "PET Bottles", "Usage": "Cleaning Toilet, Used For Cleaning, Toilet Bowl Cleaner", "Speaciality": "Removes Hard Stains, Keeps Clean & Fresh, Hygienic, Skin Friendly", "Benefits": "Kills 99.9% Of Germs", "Caution": "Keep Away From Children, Keep It Close After Use", "Storage Conditions": "Store At Room Temperature" }

      }
    ],
    "others": [
      {
        "name": "Sanitary Napkin Disposal Machine", "src": disposalnapkin, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Stay Happy",
        "price": "3000", "unit": "Piece", "color": "blue",
        "product_details": { "Shelf Life": "1 Year", "Packaging Type": "Box", "Usage/Application": "School, Office", "Voltage": "220V", "Capacity": "300 Pads / Hour" }

      },
      {
        "name": "Sanitary Napkin Vending Machine", "src": vendingnapkin, "business_type": "Manufacturer, Supplier", "country_origin": "India", "brand_name": "Jaiwin",
        "price": "15500", "unit": "Piece", "color": "white",
        "product_details": { "CoinSelection": "5 Rs.", "MountingOption": "Wall Mounted", "Voltage": "110V", "Weight": "12 Kg", "Size": "60 x 17 x 35 cm", "AutomationGrade": "Manual", "UsageApplication": "Schools & Colleges", "StorageCapacity": "20 Napkins" }
      }
    ]
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
                <Card sx={{ maxWidth: 250 }} className='product-card' onClick={() => handleopen(card)}>
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
                    style={{ width: '100%', objectFit: 'fill' }}
                  />
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