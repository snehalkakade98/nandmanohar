import React from 'react'
import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';





import Button from '@mui/material/Button';
import { Card } from 'antd';
import FeedbackArray from './FeedbackArray';



const { Meta } = Card;


const Feedback = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <>
   
       <section className='feedsection'>
       <Container maxWidth="lg" >
         
       <Carousel 
       responsive={responsive}
        autoPlay={true} 
        autoPlaySpeed={5000} 
         showDots={true}
         slidesToSlide={1}
         swipeable
         keyBoardControl
         infinite
        //  centerMode={true}
         arrows
       >
      
      

       {
     FeedbackArray.map((val,index)=>{
       return (
        <>
     
      
     {/* cover={<img alt="product1" src={val.Images} style={{height:'150px'}} />} */}
          <Grid key={index}  xs={12} md={12} lg={12} >
          <Box  sx={{ px: 1 }} >
           <Card className='card'
            hoverable >
            <div className="box_icon">
              <img src={val.Quote} alt="" />

            </div>
             <p className='box_text'>{val.description}</p>
              <div className='feedbox'>
                <div>
                  <img src={val.Images} alt="" />
                </div>
                <div>
                  <h4>{val.user}</h4>
                  <span>dfdfd</span>
                
                </div>
              </div>
                <div className='box_img'>
                  <img src={val.reviewbox} alt="" />
                </div>
            {/* <Meta title={val.title} description={val.description} /> */}
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

export default Feedback;
