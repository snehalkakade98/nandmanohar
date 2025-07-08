import React,{useRef} from 'react'
import { Carousel } from 'antd';
import Container from '@mui/material/Container';
import image1 from '../../../assets/images/slider/slider1.jpg';
import image2 from '../../../assets/images/slider/slider2.jpg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Slider = () => {
  const slider = useRef(null);
  return (
   <>
         <Container className='slidercontent' maxWidth="xl" sx={{padding:'0px!important'}}>
          <ChevronLeftIcon className='prev' onClick={() => slider.current.next()}/>

         <Carousel autoplay ref={slider}>
    <div>
    <img src={image1} />
    </div>
    <div>
    <img src={image2} />

    </div>
    <div>
    <img src={image1} />

    </div>
    <div>
    <img src={image2} />

    </div>
  </Carousel>
  <ChevronRightIcon className='next' onClick={() => slider.current.next()}/>

         </Container>
   </>
  )
}

export default Slider
