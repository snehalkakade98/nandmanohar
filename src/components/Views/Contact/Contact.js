import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Form, Input,InputNumber,message,Spin} from 'antd';
const { TextArea } = Input;



const Contact=()=>{
    const [form] = Form.useForm();

    const onFinish =async (values) => {
        var insertData  = values;
        console.log(insertData);

    }

    const cardData=[
        {
            Icon:'fas fa-globe-asia',
            heading:'Address',
            color:'blue',
            desc1 : 'A/p: Warananagar,Tal: Panhala, Dist : Kolhapur 416113',
            desc2:'',
        },
        {
            Icon:'fas fa-phone-volume',
             heading:'Call Us',
             color:'green',
             desc1 : '+ 91 8421243700',
             desc2:'+ 91 7972434303',
        },
        {
            Icon:'fas fa-envelope-open-text',
             heading:'Mail Us',
             color:'#f39c12',
             desc1 : 'info@nandmanoharfoods.com',
             desc2:'purchase@nandmanoharfoods.com',
             
        },
        {
            Icon:'fas fa-clock',
             heading:'Time',
             color:'red',
             desc1 : 'Mon - Sat: 09AM to 05 PM',
             desc2:'Sunday - Close',
        },
    ]
    return (
         <>
           <section className='contactsection'>
        
         <Container maxWidth="lg" >
          {/* <div className='sec-title' ><h2>Contact</h2></div> */}
         <Grid container spacing={2}>
        <Grid  xs={12} md={6} lg={6} >
        
        <Grid container spacing={2}>
        
        {
            cardData.map((data,i)=>{
                  return(
                     <>
                      <Grid  xs={12} md={6} lg={6}  >
                        <Box   sx={{ m: 1 }}>
                        <Card className='card' key={i}   variant="outlined" >
                           <div><span className={data.Icon} style={{color:data.color}}/></div> 
                            <h4>{data.heading}</h4>
                             <p>{data.desc1} </p>
                             <p>{data.desc2} </p>

                               {/* {
                                 data.desc.map((item)=>
                                    <p>{item.info}</p>
                                 )
                               } */}
                            
                        </Card>
                        </Box>
                        </Grid>
                     </>
                  )
            })
        }
       
        </Grid>
              
        </Grid>
        <Grid   xs={12} md={6} lg={6}>
        <Box  sx={{ ml: 5 ,mt:4}}>
         
        <Form
                form={form}
                labelCol={{ span: 24 }}
                layout="inline"
                name="basic"
                // initialValues={dataedit}
                onFinish={onFinish}
                autoComplete="off"
            >
        <Grid container spacing={2}>
        
        <Grid  xs={12} md={6} lg={12} className='box' >
        <Form.Item 
        
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
          ]}
         >
           <Input allowClear  placeholder="Your Name" className='inputboxs' />
         </Form.Item>
          </Grid>

          <Grid  xs={12} md={6} lg={12} className='box' >
        <Form.Item 
         
            name="Email"
            rules={[
            {
                required: true,
                message: 'Please input your Email!',
            },
          ]}
         >
           <Input allowClear  placeholder="Your Email" className='inputboxs' />
         </Form.Item>
          </Grid>

          <Grid  xs={12} md={6} lg={12} className='box' >
        <Form.Item 
         
            name="Subject"
            rules={[
            {
                required: true,
                message: 'Please input your Subject!',
            },
          ]}
         >
           <Input allowClear  placeholder="Subject" className='inputboxs' />
         </Form.Item>
          </Grid>

        

        <Grid  xs={12} md={6} lg={12} className='box' >
        <Form.Item 
       
        name="Message"
        rules={[
          {
            required: true,
            message: 'Please input your Message!',
          },
          ]}
          >
          <TextArea rows={3} allowClear placeholder="Message" className='textbox'/>
       </Form.Item>
        </Grid>

        <Grid  xs={12} md={6} lg={12} className='box'  >
            <Box sx={{mt:3}}> 
        <Form.Item >
        <Button  className='btn'   type="primary" htmltype="submit">Send Message</Button>
        </Form.Item>
        </Box>
        </Grid>


        </Grid>

        </Form>
         
        </Box>

        </Grid>
       
      </Grid>

     
        </Container>
        <div style={{marginTop:'3%'}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1726621885514!2d74.20041981418035!3d16.867351222035666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a788089554e3%3A0x85f42ca59f7e1df!2sNandManohar%20Food%20Products!5e0!3m2!1sen!2sin!4v1676201152937!5m2!1sen!2sin"  height="450" style={{border:'0',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </section>
         </>
    )
}
export default Contact;