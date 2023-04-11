import React from "react";
import axios from 'axios';


function Footer() {

    //check if request is authenticated, in other words valid token is stored in cookie/local storage.
    //assign to /upload id authenticated, otherwise assign to /login.
    async function handleClick() {

        let token = localStorage.getItem("token");
        if (token) {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", process.env.REACT_APP_SERVER + "/isAuthenticated");
            xhttp.withCredentials = true;
            xhttp.setRequestHeader("Authorization", token);
            xhttp.onload = function () {
                let response = JSON.parse(this.response).message;
                if (response == 'Valid token') {
                    window.location.assign('/upload');
                }
                else {
                    window.location.assign('/login');
                }
            }
            xhttp.send();
        }
        else {
            window.location.assign('/login');
        }
    }

    let myDate = new Date();
    let year = myDate.getFullYear();

    return (
        <footer>
            <p>Copyright {year}</p>
            <img src='/img/post.png' alt='' onClick={handleClick}></img>
            <p>Post a Capture</p>
        </footer>)
}

export default Footer;