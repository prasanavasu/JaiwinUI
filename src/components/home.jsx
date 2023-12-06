import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUserTie, faBuilding, faBriefcase, faUserFriends, faShoppingCart, faIdCard, faBalanceScale, faDollarSign, faMapMarkerAlt, faMobileAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import JaiNavbar from './navbar';
import { Box, Typography, Card, CardContent, CardMedia, Paper, Grid, Link, Container, useMediaQuery } from '@mui/material';
import './home.css'
import enquiry from '../enquiry.jpg'
import welcome from '../welcome.jpg'
import home from '../home.jpg'
import ColorInversionFooter from './footer'
import Mission from './mission';
import Enquiry from './enquiry';

import dishwash from '../products/dishwash.jpg'
import liquidhand from '../products/liquid-hand-wash.jpg'
import perfumedphenyl from '../products/perfumed-phenyl.jpg'
import liquiddetergent from '../products/premium-liquid-detergent.jpg'
import disposalnapkin from '../products/sanitary-napkin-disposal-machine.jpg'
import vendingnapkin from '../products/sanitary-napkin-vending-machine.jpg'
import toiletcleaner from '../products/toilet-cleaner.jpg'
import whitephenyl from '../products/white-phenyl.jpg'

function JaiwinHome() {

  const cards = [
    { "name": "Dishwash", "src": dishwash},
    { "name": "Liquid Hand Wash", "src": liquidhand},
    { "name": "Perfumed Phenyl", "src": perfumedphenyl},
    { "name": "Liquid Detergent", "src": liquiddetergent},
    { "name": "Sanitary Napkin Disposal Machine", "src": disposalnapkin},
    { "name": "Sanitary Napkin Vending Machine", "src": vendingnapkin},
    { "name": "Toilet Cleaner", "src": toiletcleaner},
    { "name": "White Phenyl", "src": whitephenyl}

  ];
  const glimpse = [{ "logo": faUserTie, "title": "Name of CEO", "name": "Mr. Venkatraman R" },
  { "logo": faBuilding, "title": "Year of Establishment", "name": "2019" },
  { "logo": faBriefcase, "title": "Nature of Business", "name": "Manufacturers, Wholesaler, Trader" },
  { "logo": faUserFriends, "title": "Number of Employees", "name": "Upto 10 People" },
  { "logo": faShoppingCart, "title": "Market Covered", "name": "India" },
  { "logo": faIdCard, "title": "GST No", "name": "33AIGPV4827J1ZW" },
  { "logo": faDollarSign, "title": "Annual Turnover", "name": "Rs. 0.5 to 2.5 Crore Approx" },
  { "logo": faBalanceScale, "title": "Legal Status of Firm", "name": "Individual (Sole proprietorship)" }
  ]

  const containerRef = useRef(null);
  const cardWidth = 500; // Adjust the card width based on your design
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true); // Initially visible

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= cardWidth;
      updateArrowVisibility();
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += cardWidth;
      updateArrowVisibility();
    }
  };

  const updateArrowVisibility = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      setIsLeftArrowVisible(scrollLeft > 0);
      setIsRightArrowVisible(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    const currentContainerRef = containerRef.current; // Copy the ref value to a local variable

    if (currentContainerRef) {
      currentContainerRef.addEventListener('scroll', updateArrowVisibility);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener('scroll', updateArrowVisibility);
      }
    };
  }, []);

  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <>

      <JaiNavbar />
      <Box className="Section">
        <img src={home} alt="About" style={{
          width: "100%",
          height: isSmallScreen ? '300px' : 'auto',
        }} />
      </Box>

      <Box
        className="Section" justifyContent="center" sx={{ m: 2, display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <Grid className="m-auto" sx={{ width: "70%" }}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            className='mt-3'
          >
            Popular Products
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",

            }}
          >
            <button className='arrow-btn' onClick={scrollLeft} style={{ display: isLeftArrowVisible ? 'block' : 'none' }}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div
              style={{
                width: "100%",
                display: "flex",
                overflowX: "scroll",
                scrollBehavior: "smooth"
              }}
              ref={containerRef}
            >
              {cards.map((card) => (
                <Paper item={true.toString()} key={card.name} style={{ margin: "16px", minWidth: "250px" }}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '56.25%',
                        height: "inherit"
                      }}
                      image={card.src}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" >
                        {card.name}
                      </Typography>

                    </CardContent>
                    
                  </Card>
                </Paper>
              ))}
            </div>
            <button className='arrow-btn' onClick={scrollRight} style={{ display: isRightArrowVisible ? 'block' : 'none' }}><FontAwesomeIcon icon={faChevronRight} /> </button>
          </div>
        </Grid>
      </Box>


      <Box className="Section" sx={{ backgroundColor: '#f1abff5c' }}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12} md={5} lg={6} sx={{ mx: 2 }} className='welcome-card' display="flex" justifyContent="center" alignItems="center">
            <img src={welcome} alt="About" style={{
              width: "100%",
              height: "70%",
              borderRadius: "15px"
            }} />          </Grid>
          <Grid item xs={12} md={6} lg={5} sx={{ my: 5,mx:2 }}>
            <Typography variant="h3" >
              Welcome to our Website</Typography>
            <Typography sx={{ mx: 2, fontSize:"17px" }}>
              A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

              Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business. This technology was made possible by our enthusiasm for innovation and dedication to research and development.

              Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Mission></Mission>
      <Box className="Section" >
        <Container sx={{ my: 2 }}>
          <Typography variant='h4' align='center'><span style={{ color: "#5bec9c" }} >GLIMPSE </span>
            <span style={{ color: "#911ad9" }}>OF OUR COMPANY</span>
          </Typography>
          <Grid className='' justifyContent="center" container >
            {glimpse.map((glim) => (
              <Grid item sx={{ m: 1 }}>
                <Card className='glimp-card'>

                  <CardContent>
                    <Typography variant="span" color="textSecondary" sx={{ fontSize: "50px" }}>
                      <FontAwesomeIcon icon={glim.logo} sx={{ width: 70, margin: '0 auto' }} />
                    </Typography><br></br>
                    <Typography variant="span" color="textSecondary">
                      {glim.title}<br></br>
                    </Typography>
                    <Typography variant='p' color="textSecondary" sx={{ fontWeight: "bolder" }}>
                      {glim.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>

      </Box>

      <Box className="Section" justifyContent="center"
        sx={{ backgroundColor: '#b6c1bb29', display: "flex", flexDirection: 'column', alignItems: 'center' }}>

        <Card sx={{ display: 'flex', maxWidth: "max-content", m: isSmallScreen ? 2 : 5, }} className='welcome-card'>
          <Grid container spacing={4} >
            <Grid item xs={12} sm={12} md={6}>
              <CardMedia
                component="img"
                sx={{
                  maxWidth: "100%",
                  // width: "48%",
                  height: "400px",
                  borderRadius: "15px",

                }}
                image={enquiry}
                alt="Enquiry"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Enquiry title="Quick Enquiry"></Enquiry>
            </Grid>
          </Grid>
        </Card>
        <Container sx={{ my: 2 }}>
          <Grid container justifyContent="center">
            <Grid item sx={{ m: 1 }} sm={12} xs={12} md={4} lg={3} className='enquiry-detail'>

              <Card >

                <CardContent>
                  <Typography variant="span" sx={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} sx={{ width: 70, margin: '0 auto' }} />
                  </Typography><br></br>
                  <Typography variant="span" color="textSecondary">
                    Location<br></br>
                  </Typography>
                  <Typography variant='p' sx={{ fontWeight: "bolder" }}>
                    Chennai
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={{ m: 1 }} sm={12} xs={12} md={4} lg={3} className='enquiry-detail'>
              <Card >

                <CardContent>
                  <Typography variant="span" sx={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faMobileAlt} sx={{ width: 70, margin: '0 auto' }} />
                  </Typography><br></br>
                  <Typography variant="span" color="textSecondary">
                    Mobile<br></br>
                  </Typography>
                  <Typography variant='p' sx={{ fontWeight: "bolder" }}>
                    <Link href="tel:+91-9894832012" underline="hover">
                      +91-9894832012
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={{ m: 1 }} sm={12} xs={12} md={4} lg={3} className='enquiry-detail'>

              <Card >
                <CardContent>
                  <Typography variant="span" sx={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faGlobe} sx={{ width: 70, margin: '0 auto' }} />
                  </Typography><br></br>
                  <Typography variant="span" color="textSecondary">
                    Web<br></br>
                  </Typography>
                  <Typography variant='p' sx={{ fontWeight: "bolder" }}>
                    <Link href="https://www.jaiwin.co.in" target="_blank" underline="hover">
                      Jaiwin Enterprises
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={{ m: 1 }} sm={12} xs={12} md={4} lg={3} className='enquiry-detail'>
              <Card >
                <CardContent>
                  <Typography variant="span" sx={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faEnvelope} sx={{ width: 70, margin: '0 auto' }} />
                  </Typography><br></br>
                  <Typography variant="span" color="textSecondary">
                    Email<br></br>
                  </Typography>
                  <Typography variant='p' sx={{ fontWeight: "bolder" }}>
                    <Link href="mailto:jaiwinenterprises@gmail.com" underline="hover">
                      jaiwinenterprises@gmail.com
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>

      </Box >
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinHome;