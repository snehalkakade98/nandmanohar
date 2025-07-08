import React,{useState} from 'react'
import Image1 from '../../../assets/images/bg-hero.jpg';
import Image2 from '../../../assets/images/bg-works.jpg';
import ImageCropDialog from './ImageCropDialog';

const initData = [

    {
        id:1,
        imageUrl :Image1,
        croppedImageUrl:null,
   },
   {
    id:2,
    imageUrl :Image2,
    croppedImageUrl:null,

   },
]

const Profile=()=>{
    const [imgs, setimg] =useState(initData);
    const [selectedImg , setSelectedImg] = useState(null);
    
     const onCancel=()=>{
        selectedImg(null);  
     }

    return(
        <>
        {selectedImg ? 
        (<ImageCropDialog id={selectedImg.id} 
          imageUrl={selectedImg.imageUrl}
          cropInit={selectedImg.crop}
          zoomInit={selectedImg.zoom}
          aspectInit={selectedImg.aspect}
          onCancel={onCancel}
        />
         ) : null
         }


         {
            imgs.map((item)=>(
                <div key={item.id}>
                    <img src={item.imageUrl}  height={150} width={600} onClick={()=>setSelectedImg(item)} />
                </div>
            ))
         }
        </>
    )
}
export default Profile;