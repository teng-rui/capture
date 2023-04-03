import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Upload from './components/Upload';
import Post from './components/Post';
import Login from './components/Login';
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}></Route> //get 20 or all post's first picture,title,20 words of description,userid,plogid
        <Route path="/register" element={<Register />}></Route> //ok
        <Route path="/login" element={<Login />}></Route>  //ok
        <Route path="/upload" element={<Upload />}></Route> //ok
        <Route path="/post/:id" element={<Post />}></Route> //send information from / to this link, and ask detail uding plogid
        {/* <Route path='/myPosts' element={<MyPosts />}></Route> //get / for the user's plog */}
        <Route path='*' element={<div>Not Found</div>}></Route>
    </Routes>
    </BrowserRouter>

);
