import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ChooseImg from '../../../assets/images/chooseus.jpg';
import ChooseIcon1 from '../../../assets/images/chooseicon1.svg';
import ChooseIcon2 from '../../../assets/images/chooseicon2.svg';
import Chooseusbg from '../../../assets/images/why_1_2.png';




import Box from '@mui/material/Box';

const  items=[
    {
         image:ChooseIcon1,
         head:'Buffet Service',
         info:'Distinctively unleash client-base portals after cross platform information.',
    },
    {
        image:ChooseIcon2,
        head:'Cook & Sarve Faster',
        info:'Distinctively unleash client-base portals after cross platform information.',
   }
]

const WhyChoose=()=>{
     
    return(
        <>
         <section className='chooseus'>
         <Container maxWidth="lg" >
         <Grid container spacing={2}>
        <Grid  xs={12} md={6} lg={6} >

              <Box  sx={{ pt: 4 }} className="info">
            <div className='sec-titles' ><h2>We Make The Best Food In Our <span className="font-style text-theme">Restaurant</span>
            </h2></div>

            <p>We have variety of products with a perfect combination and blend of spices to enhance the taste and aroma of the food to be cooked.The purpose of spices as additives is to make food more appetizing for everyone, especially children. Spices act as a good preservative and are rich in antioxidant properties. Spices were a major attraction for European settlers in our country several years ago.We procure raw materials from the best fields in India, and quality control checks are regularly carried out under our personal supervision.</p>


        {
             items.map((item,index)=>{
                  return(
                     <>
                      <div className="servicebox">
                      <div className='childbox1'>
                        <img src={item.image} alt="" />
                     </div>
                     <div className='childbox2'>
                     <h3>{item.head}</h3>
                     <p>{item.info}</p>
                 </div>

            </div>
                     </>
                  )
             })
        }
                
              </Box>
        </Grid>
        <Grid   xs={12} md={6} lg={6} >
           <Box sx={{textAlign: 'center'}}  className='chooseimgs'  >
           <img src={ChooseImg} alt="" style={{width:'100%'}} />
           <div className="shape1">
            <img src={Chooseusbg} alt="About" style={{width:'100%'}}/></div>
           </Box>
        </Grid>
       
      </Grid>
        </Container>
         </section>
        </>
    )
}
export default WhyChoose;