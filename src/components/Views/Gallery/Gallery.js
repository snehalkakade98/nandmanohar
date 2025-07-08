import React,{useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AboutImg from '../../../assets/images/about.png';

import Box from '@mui/material/Box';
import GalleryArray from './GalleryArray';
import CloseIcon from '@mui/icons-material/Close';

import { Card } from 'antd';
// import CropEasy from '../Home/CropEasy';
// import Profile from '../Home/Profile';




const Gallery = () => {

  const [imgModel, setImgModel]=useState(false);
  const [tempimgSrc, setTempimgSrc]=useState('');

  const getImg=(ImgSrc)=>{
    setTempimgSrc(ImgSrc);
    setImgModel(true);

  }
 



  return (
    
      <>




        <section className='gallerysection'> 
       
         <Container maxWidth="lg" >
          <div className='sec-title' ><h2>Gallery</h2></div>


          <div className={imgModel? "imgModel open" : "imgModel"}>
            <img src={tempimgSrc} alt="" />
            <CloseIcon onClick={()=> setImgModel(false)}/>
          </div>

          <Grid container>
          {
     GalleryArray.map((val,index)=>{
       return (
        <>
     
    
          <Grid   xs={6} md={4} lg={3} onClick={()=>getImg(val.ImgSrc)} >
         
           <Card key={index} className='card' 
            hoverable  cover={<img alt="product1" src={val.ImgSrc} style={{height:'180px'}}  />} >
            
          </Card>
 
          
          </Grid>

           

        </>
       )
     })
   }
          </Grid>

        </Container>

       
        </section>



      </>
  )
}

export default Gallery;
