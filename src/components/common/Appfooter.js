import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { BackTop } from 'antd';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const Appfooter = () => {
  return (
    <>
       <section className='footer'>

       <Container maxWidth="xl" >
       <Grid container spacing={2}>
        <Grid  xs={12} md={6} lg={4} >
        <Box  sx={{ px: 4 }} >

        <p className='info'>We have variety of products with a perfect combination and blend of spices to enhance the taste and aroma of the food to be cooked.The purpose of spices as additives is to make food more appetizing for everyone, especially children. Spices act as a good preservative and are rich in antioxidant properties </p>
        </Box>

         </Grid>
        <Grid  xs={12} md={6} lg={3} >
        <Box  sx={{ px: 4 }} >

        <h2 className='title'>Product</h2>
           <ul>
            <li><NavLink className='footlinks' to='/'>Chili Powder</NavLink></li>
            <li><NavLink className='footlinks' to='/'>Consultants</NavLink></li>
            <li><NavLink className='footlinks' to='/'>Consultants</NavLink></li>
            <li><NavLink className='footlinks' to='/'>Consultants</NavLink></li>
           </ul>
        </Box>
        </Grid>

        <Grid  xs={12} md={6} lg={3} >
        <Box  sx={{ px: 4 }} >

        <h2 className='title'>Useful Links</h2>
           <ul>
            <li><NavLink className='footlinks' to='/'>Home</NavLink></li>
            <li><NavLink className='footlinks' to='/'>About</NavLink></li>
            <li><NavLink className='footlinks' to='/'>Product</NavLink></li>
            <li><NavLink className='footlinks' to='/'>Contact</NavLink></li>
           </ul>
        
           {/* <NavLink to="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7996168&style=0006&nbdigits=4&type=page&initCount=0" title="Free Counter" Alt="web counter"   /></NavLink>   */}
        </Box>
        </Grid>

        </Grid>

        <BackTop>
          <div className="goTop"><ExpandLessIcon className='topicon'/></div>
        </BackTop>

       </Container>
       </section>
    </>
  )
}

export default Appfooter
