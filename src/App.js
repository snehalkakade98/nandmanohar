import React from 'react';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
import './assets/style.css';
import Appheader from './components/common/Appheader';
import Appfooter from './components/common/Appfooter';

import Homes from './components/Views/Home/Home';
import About from './components/Views/Home/About';
import Gallery from './components/Views/Gallery/Gallery';
import Product from './components/Views/Product/Product';
import Contact from './components/Views/Contact/Contact';





import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const { Header,Content,Footer} = Layout;

function App() {
  return (
   <>
    <Layout className="mainLayout">
    
      <BrowserRouter>
      <Header>
    
       <Appheader/>
        </Header>

      <Routes>
        
        <Route path='/' element={<Homes/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>

        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>

    
    <Appfooter/>

     </BrowserRouter>
    </Layout>

  
   </>
  );
}

export default App;
