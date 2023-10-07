import * as React from 'react';
import JaiNavbar from './navbar';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, Grid } from '@mui/material';


function JaiwinHome() {

  const cards = [{"name":"Product1"},{"name":"Product2"},{"name":"Product2"},{"name":"Product4"},{"name":"Product5"}];
  return (
    <>
      <JaiNavbar />
      <Box component="Section"
        sx={{
          p: 2,
          border: '1px dashed grey',
          height: "500px",
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-sevenstorm-juhaszimrus-425160.jpg")'
        }}>
        <Typography>testing</Typography>
      </Box>
      <Box component="Section"
        sx={{
          p: 8,
          border: '1px dashed grey',
        }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Popular Products
        </Typography>
        <Grid container spacing={5} px={5} >
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
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
                  <Button size="small" >View More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default JaiwinHome;