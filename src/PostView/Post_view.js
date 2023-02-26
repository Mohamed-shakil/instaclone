import React, { useEffect, useState } from 'react';
import Head from './Head'

export default function Post_view() {
    // const data=[
    //     {name:"Siva",
    //     location:"Bengaluru",
    //     likes:64,
    //     description: "Kick start your career",
    //     PostImage: "http://wallpapercave.com/wp/yyShBpF.jpg",
    //     date: new Date(),
    //     },
    //     {name:"Neeraj",
    //     location:"Pune",
    //     likes:30,
    //     description: "Sample Description",
    //     PostImage: "http://wallpapercave.com/wp/yyShBpF.jpg",
    //     date: new Date(),
    //     },
    //     {name:"Rahul",
    //     location:"Hyderabad",
    //     likes:30,
    //     description: "Sample Description for Post",
    //     PostImage: "http://wallpapercave.com/wp/yyShBpF.jpg",
    //     date: new Date(),
    //     }
    //     ]
    let [data,setdata]=useState(null);
    function getdata()
    {
      fetch('http://localhost:8080').then((res)=>{  
      return res.json();}).then((res)=>{
      console.log(res)
      setdata(res);  
      });
     // console.log(data)
    }
      useEffect(()=>{
        getdata();
      },[])
  return <div>
    <header>
            <Head/><hr/>
    </header>
    
    {data&&data.map(Element=>{
        
        return <div class='boxcontainer'>
            <article>
            <div>
            <h3 id="name">{Element.name}</h3>
            <h6 id="location">{Element.location}</h6></div>
            <div>...</div></article>
            <img src={Element.PostImage} width="600" height="400"></img>
            <div id='like'><h6>Likes:{Element.likes}</h6>
            <h6>{Element.date.toLocaleString()}</h6></div>
            <h3>{Element.description}</h3>
        </div>
    })}
  </div>;
}
