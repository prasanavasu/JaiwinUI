import React, { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import JaiNavbar from './navbar';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, Paper } from '@mui/material';
import './home.css'

function JaiwinHome() {

  const cards = [{ "name": "Product1" }, { "name": "Product2" }, { "name": "Product3" }, { "name": "Product4" }, { "name": "Product5" }, { "name": "Product6" }, { "name": "Product7" }, { "name": "Product8" }, { "name": "Product9" }, { "name": "Product10" }];

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
      setIsRightArrowVisible(scrollLeft + clientWidth < scrollWidth-1);
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
          border: '1px dashed grey',
          height: "700px",
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg")'
        }}>
        <Typography>testing</Typography>
      </Box>
      <Box
        className="Section"
        sx={{
          border: '1px dashed grey',
        }}
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
            <button className='arrow-btn' onClick={scrollLeft} style={{ display: isLeftArrowVisible ? 'block' : 'none' }}><FontAwesomeIcon icon={faChevronLeft}/></button>
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
      <Box className="Section"
        sx={{
          p: 2,
          border: '1px dashed grey',
          height: "700px",
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg")'
        }}>
        <Typography>testing</Typography>
      </Box>
    </>
  );
}
export default JaiwinHome;