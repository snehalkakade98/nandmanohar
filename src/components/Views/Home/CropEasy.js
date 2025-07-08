import { Cancel } from '@mui/icons-material';
import CropIcon from '@mui/icons-material/Crop';

import { DialogActions, DialogContent } from '@mui/material';
import { Box } from '@mui/system';
import { Button, Slider, Typography } from 'antd';

import React, { useState } from 'react'
import Cropper from 'react-easy-crop';

const CropEasy = ({photoURL, setOpenCrop}) => {
    const [crop, setCrop] = useState({x:0, y:0});
    const [rotation, setRotation] = useState(0)
   const [zoom, setZoom] = useState(1)
   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
   const [croppedImage, setCroppedImage] = useState(null)

   const cropComplete =(croppedArea, croppedAreaPixels)=>{
     setCroppedAreaPixels(croppedAreaPixels)
   }

   const cropImage= async ()=>{
    
   }

  return (
    <>
      <DialogContent dividers
       sx={{
          background:'#333',
          position:'relative',
          height:'400',
          width:'auto',
          minHeight:{sm:500},
       }}
      >
        <Cropper
         image={photoURL}
         crop={crop}
         rotation={rotation}
         zoom={zoom}
         aspect={4 / 3}
         onCropChange={setCrop}
         onRotationChange={setRotation}
        //  onCropComplete={cropComplete}
         onZoomChange={setZoom}
         />

      </DialogContent>
      <DialogActions sx={{flexDirection:'column',mx:3,my:2}}>
        <Box sx={{width:'100%',mb:1}}>
          <Box>
            <Typography>Zoom:{zoomPercent(zoom)}</Typography>
            <Slider valueLabelDisplay='auto'
             valueLabelFormat={zoomPercent}
             min={1}
             max={3}
             step={0.1}
             value={zoom}
             onChange={(e, zoom)=>setZoom(zoom)}
            >

            </Slider>
          </Box>

          <Box>
            <Typography>Rotation:{rotation}</Typography>
            <Slider valueLabelDisplay='auto'
             min={0}
             max={360}
             step={0.1}
             value={rotation}
             onChange={(e, rotation)=>setRotation(rotation)}
            >

            </Slider>
          </Box>
        </Box>
        <Box sx={{
            display:'flex',
            gap:2,
            flexWrap:'wrap'
        }}>
            <Button
              variant='outlined'
              startIcon={<Cancel/>}
              onClick={()=>setOpenCrop(false)}
            > Cancel</Button>

            <Button
             variant='contained'
             startIcon={<CropIcon/>}
              onClick={cropImage}


            >

            </Button>
        </Box>
      </DialogActions>
    </>
  )
}

export default CropEasy;

const zoomPercent=(value)=>{
    return `${Math.round(value*100)}%`
}
