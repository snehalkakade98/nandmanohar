import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AboutImg from '../../../assets/images/about.png';
import redchili from '../../../assets/images/red_chili.png';

import Box from '@mui/material/Box';




const About = () => {
  return (
    
      <>
        <section className='aboutsection'>
        <div class="aniimg1">
          <img src={redchili}/>
        </div>
        <div class="aniimg2">
          <img src={redchili}/>
        </div>
         <Container maxWidth="lg" >
          <div className='sec-title' ><h2>About</h2></div>
         <Grid container spacing={2}>
        <Grid  xs={12} md={6} lg={7} >

              <Box  sx={{ pt: 4 }} className="info">
                <p> <b> "NandManohar Food Products"</b> is a food processing company that has all its processing facilities in-house. It supplies premium products across the global to all segments of market. Our products are formulated and processed under the supervision of a skilled team of professionals by using high quality pure ingredients. Material is procured from reliable and certified vendors of the market in compliance with international quality standards.</p>
              </Box>
        </Grid>
        <Grid   xs={12} md={6} lg={5}>
           <Box sx={{textAlign: 'center'}} >
           <img src={AboutImg} alt="" style={{width:'65%'}}   />
           </Box>
        </Grid>
       
      </Grid>
        </Container>
        </section>
      </>
  )
}

export default About
