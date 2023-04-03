import React from "react";
import axios from 'axios';


function Footer() {

    async function handleClick() {

        // fetch(process.env.REACT_APP_SERVER + '/isAuthenticated', {
        //     method: 'GET',
        //     credentials: 'include'})
        // .then(result => result.data.message)
        // .then((message)=>{
        //     console.log(message);
        //     if(message){
        //         window.location.assign('/upload');
        //     }
        //     else{
        //         window.location.assign('/login');
        //     }

        // })


        let token=localStorage.getItem("token");
        if(token){
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", process.env.REACT_APP_SERVER + "/isAuthenticated");
            xhttp.withCredentials = true;
            xhttp.setRequestHeader("Authorization", token);
            xhttp.onload = function () {


                let response=JSON.parse(this.response).message;
                console.log(JSON.parse(this.response));
                if(response=='Valid token'){
                    window.location.assign('/upload');
                }
                else{
                    window.location.assign('/login');
                }

            }
            // xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send();

        }
        else{
            window.location.assign('/login');
        }
       






        // axios.get(process.env.REACT_APP_SERVER + "/isAuthenticated")
        // .then(result => result.data.message)
        // .then((message)=>{
        //     console.log(message);
        //     if(message){
        //         window.location.assign('/upload');
        //     }
        //     else{
        //         window.location.assign('/login');
        //     }

        // })
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