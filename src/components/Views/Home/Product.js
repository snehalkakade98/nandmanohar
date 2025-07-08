import React from 'react'
import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';






import Button from '@mui/material/Button';
import { Card } from 'antd';
import ProductArray from './ProductArray';



const { Meta } = Card;


const Product = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <>
   
       <section className='productsection'>
       <div className='sec-title' ><h2>Our Product</h2></div>
       <Container maxWidth="lg" >
           
       <Carousel 
       responsive={responsive}
        autoPlay={true} 
        autoPlaySpeed={5000} 
        //  showDots={true}
         slidesToSlide={1}
         swipeable
         keyBoardControl
         infinite
         arrows={false}
       >
      
      

       {
     ProductArray.map((val,index)=>{
       return (
        <>
     
      
          <Grid key={index}  xs={12} md={12} lg={12} >
          <Box  sx={{ px: 1 }} >
          <div className='menu_img'>
                <img src={val.product_img} alt="" />
             </div>
           <Card className='card'
            hoverable >
           
             <div className='box'>
             
             <h3 className="productnm">{val.productnm}</h3>
             <p className='productdec'>{val.description}</p>
             <Button className='productbtn' variant="contained">Read More</Button>
             </div>
               
            </Card>
 
          </Box>
          </Grid>

           

        </>
       )
     })
   }
       
          
      
      
        </Carousel>
        </Container>
       </section>
    </>
  )
}

export default Product;
