import React from "react";
import { Link } from "react-router-dom";
import icon from './../images/icon.jpg';
import camera from './../images/camera.jpg';
import Post_page from "./Post_page";


export default function Header_page() {
    return <div id='head'>
    <div id='headinsta'><img src={icon} width="100" height="100"></img>
    <h1>Instaclone</h1></div>
    <Link to="/postpage">
    <button id='camera'><img  src={camera} width="70" height="70"></img></button></Link>
  </div>;
  }
  