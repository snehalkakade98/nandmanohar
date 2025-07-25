import { AspectRatio } from '@mui/icons-material';
import React,{useState,useEffect} from 'react';
import Cropper from 'react-easy-crop';

const aspectRatios =[
    {value:4/3,text:"4/3"},
    {value:16/9,text:"16/9"},
    {value:1/2,text:"1/2"},

]

const ImageCropDialog = ({id,imageUrl,cropInit,zoomInit,aspectInit,onCancel}) => {
    if(zoomInit == null){
        zoomInit =1;
    }
    if(cropInit == null){
        cropInit = {x:0, y:0}
    }
    if(aspectInit ==null){
        aspectInit = aspectRatios[0];
    }

     const [zoom, setZoom] = useState(zoomInit);
     const [crop, setCrop] = useState(cropInit);
     const [aspect, setAspect] = useState(aspectInit);
     const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

     const onCropChange=(crop)=>{
        setCrop(crop);  
     }
     const onZoomChange=(zoom)=>{
        setZoom(zoom);  
     }
    
     const onAspectChange=(e)=>{
        const value = e.target.value;
        const ratio = aspectRatios.find(ratio=>ratio.value == value);
        setAspect(ratio);
         
     }

     const onCropComplete=(croppedArea, croppedAreaPixels )=>{
        setCroppedAreaPixels()
     }
    

  return (
     <>
       <div className='backdrop'> </div>
    <div className='crop_container'>
        <Cropper 
        image={imageUrl} 
        zoom={zoom}
        crop={crop}
        aspect={aspect.value}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange} 
        onCropComplete={onCropComplete}
        />
    </div>
     <div className="controls">
        <div className='control_upper_area'>
            <input type="range" min={1}
             max={3} 
             step={0.1}
              value={zoom} 
              onInput={(e)=>{onZoomChange(e.target.value)}}
              className='slider'
              />
              <select onChange={onAspectChange}>
                {
                    aspectRatios.map(ratio=>
                    <option 
                    key={ratio.text}
                    value={ratio.value}
                    selected={ratio.value ===aspect.value}> {ratio.text} </option>)
                }
              </select>
       
        </div>
          <div className="button_area">
            <button onClick={onCancel}>Cancel</button>
            <button>Reset</button>
            <button>Crop</button>

          </div>
     </div>
     </>
  )
}

export default ImageCropDialog
