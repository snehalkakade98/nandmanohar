import React,{useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import { Card } from 'antd';


import ProductArray from '../Home/ProductArray';


const Product = () => {

 



  return (
    
      <>




        <section className='section'> 
       
         <Container maxWidth="lg" >
          {/* <div className='sec-title' ><h2>Gallery</h2></div> */}

          <Grid container spaceing={3}>
          {
      ProductArray.map((val,index)=>{
       return (
        <>
     
    
          <Grid   xs={6} md={4} lg={3} >
         
           <Card key={index} className='card' 
            hoverable  cover={<img alt="product" src={val.product_img} style={{height:'210px'}}  />} >
                  
            <h3 className='productnms'>{val.productnm}</h3>
            
          </Card>
 
          
          </Grid>

           

        </>
       )
     })
   }
          </Grid>

        </Container>

        {/* <Profile/> */}
    
        </section>



      </>
  )
}

export default Product;
