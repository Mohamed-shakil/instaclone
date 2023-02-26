import React, { useState } from 'react';
import Post_view from './Post_view';
import { Link } from 'react-router-dom';
import Head from './Head'
import axios from 'axios';


export default function Post_page() {
  const [postdata,setpostdata]=useState({name:"",
  location:"",
  description: "",
  PostImage: "",
  likes:0,
  date: ""
  }
  )
  function sub(e)
  {
    e.preventDefault();
    
    axios.post('http://localhost:8080/post', {
      name:postdata.name,
      location:postdata.location,
      likes:postdata.likes,
      description:postdata.description,
      PostImage:postdata.PostImage
      
    }).then(()=>{console.log("posted")})
  }
  function getdata(e)
  {
    const info={...postdata};
    info[e.target.id]=e.target.value;
    setpostdata(info)
  }
  function getdesc(e)
  {
    const info={...postdata};
    info.description=e.target.value;
    setpostdata(info)
   // console.log(info);
  }
  function getimage(e)
  {
    const info={...postdata};
    const reader= new FileReader();
    //info.PostImage=e.target.files[0];
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend=()=>{info.PostImage=reader.result;
      setpostdata(info)};
    // info.PostImage=reader.result;
    
    console.log(info);
  }
  return <div>
  <header>
            <Head/><hr/>
    </header>
  <div id='container2'>
    <form >
      <div>
      <input type="file" placeholder='imageurl' name='PostImage' id='PostImage' onChange={(e)=>getimage(e)}></input></div>
      <div>
      <input type="text" placeholder='Author' name='name' id='name' onChange={(e)=>getdata(e)}/>      
      <input type="text" placeholder='Location' name='location' id='location' onChange={(e)=>getdata(e)}/></div>
      <div><input type="text" placeholder='Description' name='description' id='description:' onChange={(e)=>getdesc(e)}/></div>
      {/* <input type="submit" value="Post"></input> */}
      <button onClick={(e)=>{sub(e)}}>Post</button>
      <Link to="/postview"><button>Goto Posts</button></Link>
    </form>
    
    
</div>
</div>;
}