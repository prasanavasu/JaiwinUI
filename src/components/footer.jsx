import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import { Box, Grid, Link } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ColorInversionFooter = () => {
  let footerData = {};
  const footer = {
    footer_product: ['Sanitary Pads', 'Phenyl', 'Premium Liquid Detergent', 'Dishwash', 'Liquid Hand Wash','Sanitary Napkin Vending Machine','Sanitary Napkin Disposal Machine','Toilet Cleaner'],
     general : [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Products', href: '/products' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Return & Refund Policy', href: '/refund-policy' }
    ]
  };

  for (const key in footer) {
    if (footer.hasOwnProperty(key)) {
      let array = footer[key];
      footerData[key] = [];
      for (let i = 0; i < array.length; i += 4) {
        footerData[key].push(array.slice(i, i + 4));
      }
    }
  }

  return (

    <Sheet
      variant="solid"
      color='neutral'
      invertedColors
      sx={{

        flexGrow: 1,

        borderRadius: { xs: 0, sm: 'sm' },

      }}
    >
      <Box justifyContent="center" sx={{ p: 5, backgroundColor: '#636b74', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'flex-start' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >

          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
          >
            {footerData.general.map((general, index) => (
              <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                <h4 sx={{ fontWeight: 'xl' }}> {index === 0 ? 'Sitemap' : <br></br>}</h4>
                <List>

                  {general.map((product) => (
                    <ListItem>
                      <ListItemButton>
                        <Link component={RouterLink} to={product.href} sx={{color:"white"}}>
                            {product.name}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ))}
          </List>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px', mx: 3 }}
          >
            {footerData.footer_product.map((general, index) => (
              <ListItem nested sx={{ width: { xs: '50%', md: 150 } }}>
                <h4 sx={{ fontWeight: 'xl' }}> {index === 0 ? 'Products' : <br></br>}</h4>
                <List>

                  {general.map((product) => (
                    <ListItem>
                      <ArrowRightIcon/> {product}
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ))}

          </List>
          <Grid sx={{ width: "200px" }}>

            <div className="">
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <FontAwesomeIcon icon={faMobileAlt} />
                <Link href="tel:+91-9894832012" underline="hover">
                  <span> +91-9894832012</span>

                </Link>
              </div>
              <div className="d-flex info_single align-items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href="mailto:jaiwinenterprises@gmail.com" underline="hover">
                  <span> jaiwinenterprises@gmail.com</span>
                </Link>
              </div>
              <div className="d-flex info_single align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>No.25,shanmathi avenue, iyyankulam,paruthipattu,avadi, Chennai-71, India - 600071</span>
              </div>
            </div>

          </Grid>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Divider orientation="vertical" />
          <IconButton variant="plain">
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton variant="plain">
            <InstagramIcon />
          </IconButton>
          <Typography sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
          > <IconButton variant="plain">
              <CopyrightIcon />&ensp; Developed & Managed By Jaiwin.
            </IconButton>
          </Typography>


        </Box>
      </Box>
    </Sheet>

  );
}

export default ColorInversionFooter;