import React from 'react';
import { Box, Typography, Card, CardContent, CardHeader, Avatar, Grid, Container } from '@mui/material';

function Mission() {
  return (
    <Box className="Section" justifyContent="center"
      sx={{
        p: 5,
        backgroundColor: '#00000029',

        display: "flex",
      }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='home-card' >
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
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Mission;

