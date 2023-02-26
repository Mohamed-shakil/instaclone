import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Landing_page from './LandingPage/Landing_page';
import Post_page from './PostView/Post_page';
import Post_view from './PostView/Post_view';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
      
      <Routes>
      <Route path='/' element={<Landing_page/>}/>
      <Route path='/postview' element={<Post_view/>}/>
      <Route path='/postpage' element={<Post_page/>}/>
      </Routes>
      
      </div>

    </div>
  );
}

export default App;
