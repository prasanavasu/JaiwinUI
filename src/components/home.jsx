import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUserTie, faBuilding, faBriefcase, faUserFriends, faShoppingCart, faIdCard, faBalanceScale, faDollarSign, faMapMarkerAlt, faMobileAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import JaiNavbar from './navbar';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, Paper, Grid, Link } from '@mui/material';
import './home.css'
import enquiry from '../enquiry.jpg'
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
    { "name": "Dishwash", "src": dishwash, "link": "" },
    { "name": "Liquid Hand Wash", "src": liquidhand, "link": "" },
    { "name": "Perfumed Phenyl", "src": perfumedphenyl, "link": "" },
    { "name": "Liquid Detergent", "src": liquiddetergent, "link": "" },
    { "name": "Sanitary Napkin Disposal Machine", "src": disposalnapkin, "link": "" },
    { "name": "Sanitary Napkin Vending Machine", "src": vendingnapkin, "link": "" },
    { "name": "Toilet Cleaner", "src": toiletcleaner, "link": "" },
    { "name": "White Phenyl", "src": whitephenyl, "link": "" }

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


  return (
    <>
    
      <JaiNavbar />
      <Box className="Section"
        sx={{
          p: 2,
          height: "600px",
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${home})`,
          backgroundSize: "cover"
        }}>
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
                      <Typography gutterBottom variant="h6" >
                        {card.name}
                      </Typography>

                    </CardContent>
                    <CardActions>
                      <Button size="small">View More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              ))}
            </div>
            <button className='arrow-btn' onClick={scrollRight} style={{ display: isRightArrowVisible ? 'block' : 'none' }}><FontAwesomeIcon icon={faChevronRight} /> </button>
          </div>
        </Grid>
      </Box>


      <Box className="Section" sx={{ backgroundColor: '#f1abff5c', p: 5, m: 5 }}>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={16} >
          <Grid xs className='welcome-card' display="flex" justifyContent="center" alignItems="center">
            <img src='https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg' alt="About" style={{
              width: "100%",
              height: "450px",
              borderRadius: "15px"
            }} />
          </Grid>
          <Grid item xs sx={{ p: 3, m: 5 }} display="flex" justifyContent="center" alignItems="center">
            <Typography variant='h4' align='center' sx={{ color: "black" }}>Welcome to our Website
              <Typography variant="body2" color="textSecondary" component="p" sx={{ m: 5 }}>

                A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

                Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business. This technology was made possible by our enthusiasm for innovation and dedication to research and development.

                Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously.
              </Typography>
              <Button variant="outlined" href="/about" color="primary" className='mx-5'>Read More</Button>

            </Typography>

          </Grid>
        </Grid>
      </Box>
      <Mission></Mission>
      <Box className="Section"
        sx={{
          p: 3,
          m: 3,


        }}
      >
        <Typography variant='h4' align='center'><span style={{ color: "#5bec9c" }} >GLIMPSE </span>
          <span style={{ color: "#911ad9" }}>OF OUR COMPANY</span>
        </Typography>
        <Grid className='' justifyContent="center" container>
          {glimpse.map((glim) => (
            <Grid item >
              <Card className='m-3 p-2 glimp-card'>

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

      </Box>

      <Box className="Section" justifyContent="center"
        sx={{ p: 5, backgroundColor: '#b6c1bb29', display: "flex", flexDirection: 'column', alignItems: 'center' }}>

        <Card sx={{ display: 'flex', maxWidth: "max-content", width: "75%" }} className='welcome-card'>
          <CardMedia
            component="img"
            sx={{
              maxWidth: "100%",
              width: "48%",
              height: "400px",
              borderRadius: "15px",

            }}
            image={enquiry}
            alt="Enquiry"
          />
          <Enquiry title="Quick Enquiry"></Enquiry>

        </Card>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3} className='enquiry-detail'>
            <Paper variant="elevation" >
              <Box textAlign="center" p={2}>
                <Typography component="p" variant="h4" >
                  <FontAwesomeIcon icon={faMapMarkerAlt} sx={{ width: 70, margin: '0 auto' }} />
                </Typography>

                <Typography component="p">
                  Location
                </Typography>
                <Typography color="text.secondary">
                  Chennai
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className='enquiry-detail'>
            <Paper variant="elevation">
              <Box textAlign="center" p={2}>
                <Typography component="p" variant="h4" >
                  <FontAwesomeIcon icon={faMobileAlt} sx={{ width: 70, margin: '0 auto' }} />
                </Typography>

                <Typography component="p">
                  Mobile
                </Typography>
                <Typography color="text.secondary">

                  <Link href="tel:+91-9894832012" underline="hover">
                    +91-9894832012
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className='enquiry-detail'>

            <Paper variant="elevation" >
              <Box textAlign="center" p={2}>
                <Typography component="p" variant="h4" >
                  <FontAwesomeIcon icon={faEnvelope} sx={{ width: 70, margin: '0 auto' }} />
                </Typography>

                <Typography component="p">
                  Email
                </Typography>
                <Typography color="text.secondary">

                  <Link href="mailto:jaiwinenterprises@gmail.com" underline="hover">
                    jaiwinenterprises@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className='enquiry-detail'>
            <Paper variant="elevation" >
              <Box textAlign="center" p={2}>
                <Typography component="p" variant="h4">
                  <FontAwesomeIcon icon={faGlobe} sx={{ width: 70, margin: '0 auto' }} />
                </Typography>

                <Typography component="p">
                  Web
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                  <Link href="http://www.jaiwin.co.in" target="_blank" underline="hover">
                    Jaiwin Enterprises
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

      </Box >
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinHome;