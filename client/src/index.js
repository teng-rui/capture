import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Upload from './components/Upload';
import Plog from './components/Plog';
import Login from './components/Login';
import Register from './components/Register';
import MyPosts from './components/MyPosts';
import Search from './components/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}></Route>  
        <Route path="/register" element={<Register />}></Route> 
        <Route path="/login" element={<Login />}></Route>  
        <Route path="/upload" element={<Upload />}></Route> 
        <Route path="/plog/:id" element={<Plog />}></Route> 
        <Route path='/myPosts' element={<MyPosts />}></Route> 
        <Route path='/search/:id' element={<Search />}></Route>
        <Route path='*' element={<div>Not Found</div>}></Route>
    </Routes>
    </BrowserRouter>

);
