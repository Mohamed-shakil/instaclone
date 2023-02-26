import React from 'react';
import Post_view from '../PostView/Post_view';
import { Link } from 'react-router-dom';


export default function Landing_page() {
  return <div id='container'>
  <img src='http://wallpapercave.com/wp/yyShBpF.jpg' width="500" height="600"></img>
  <div id='text'><h1>10X Team</h1><Link to="/postview"><button>Enter</button></Link></div>
</div>;
}
