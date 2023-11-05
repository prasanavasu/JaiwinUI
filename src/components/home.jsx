import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUserTie, faBuilding, faBriefcase, faUserFriends, faShoppingCart, faIdCard, faBalanceScale, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import JaiNavbar from './navbar';
import { Box, Typography, Card, CardActions, CardContent, CardHeader, CardMedia, Button, Paper, Avatar, Grid, Input, TextField, FormControl } from '@mui/material';
import './home.css'


function JaiwinHome() {

  const cards = [{ "name": "Product1" }, { "name": "Product2" }, { "name": "Product3" }, { "name": "Product4" }, { "name": "Product5" }, { "name": "Product6" }, { "name": "Product7" }, { "name": "Product8" }, { "name": "Product9" }, { "name": "Product10" }];
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
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg")'
        }}>
      </Box>
      <Box className="Section" my={1}
        sx={{
          
          backgroundColor: '#007ae51f'

        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
          width: '70%', maxWidth: '100%', display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          p: 5,
        }}>
          <Grid className='home-card'>
            <img src='https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg' alt="About" style={{
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              borderRadius: "15px"
            }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4' align='center'>Welcome to our Website
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">

              A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

              Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business. This technology was made possible by our enthusiasm for innovation and dedication to research and development.

              Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously.
            </Typography>
            <Button variant="outlined" href="#outlined-buttons" color="primary" className='my-3'>Read More</Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="Section"

      >
        <div className="m-auto" style={{ width: "70%" }}>
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
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the
                        content.
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
        </div>
      </Box>

      <Box className="Section home-background-color " justifyContent="center"
        sx={{
          p: 5,

          display: "flex",
        }}>
        <Card className='home-card'>
          <CardHeader
            avatar={
              <Avatar aria-label="icon">
                <img
                  src="https://tuning-mania.com/pub/media/wysiwyg/mission-icon.png"
                  alt="Mission Icon"
                  width="40px"
                  height="40px"
                />
              </Avatar>
            }
            title={<span className="card-header-title">Mission</span>}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business.
            </Typography>
          </CardContent>
        </Card>

        <Card className='home-card'>
          <CardHeader
            avatar={
              <Avatar aria-label="icon">
                <img
                  src="https://tuning-mania.com/pub/media/wysiwyg/vision-icon.png"
                  alt="Vision Icon"
                  width="40px"
                  height="40px"
                />
              </Avatar>
            }
            title={<span className="card-header-title">Vision</span>}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously. Our well-equipped production facility, which is updated with the newest technology, is where we make our products. Additionally, to safeguard our items from harm of any type, we have a sizable storage facility.
            </Typography>
          </CardContent>
        </Card>

        <Card className='home-card'>
          <CardHeader

            avatar={
              <Avatar aria-label="icon">
                <img
                  src="https://tuning-mania.com/pub/media/wysiwyg/values-icon.png"
                  alt="Values Icon"
                  width="40px"
                  height="40px"
                />
              </Avatar>
            }
            title={<span className="card-header-title">Our Excellence</span>}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Programs to raise awareness of basic hygiene concerns, from the choice of napkins to correct disposal, are being implemented in organisations including schools, colleges, and businesses.For self-examination of vaginal health, utilise the vaginal inflammation testing card.            </Typography>
          </CardContent>
        </Card>
      </Box>

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
      {/* <Box className="Section"
        sx={{

          backgroundColor: '#911ad92b'

        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
          width: '70%', maxWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          p: 5,
        }}>
          <Grid className='home-card'>
            <img src='https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg' alt="About" style={{
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              borderRadius: "15px"
            }} />
          </Grid>
          <Grid>
            <Typography variant='h4' align='center' sx={{ color: "#911ad9" }}>Quick Enquiry
            </Typography>

            <FormControl>
              <Input placeholder="Enter your Name"  />
              <Input placeholder="Email" />
            </FormControl>
            <FormControl>
              <Input placeholder="Country" />
              <Input placeholder="Mobile Number" />
            </FormControl>
            <FormControl>
              <TextField placeholder="Message for us" />
            </FormControl>
          <Button variant="outlined" href="#outlined-buttons" color="primary" className='my-3'>Enquiry</Button>
        </Grid>
      </Grid>
    </Box > */}

    </>
  );
}
export default JaiwinHome;