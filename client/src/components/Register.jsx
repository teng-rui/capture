import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {


    async function handleSubmit() {
        let username = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputPassword').value;
        
        if (!username.length) {
            alert('Please fill in email');
        }
        else if (password.length < 6) {
            alert('password should contain at least 6 characters')
        }
        else {

            let formData='username='+username+'&password='+password;


            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", process.env.REACT_APP_SERVER + "/register");
            xhttp.onload = function () {
                console.log(this.response);
                let response=JSON.parse(this.response).message;
                let token=JSON.parse(this.response).token;
                if(token){
                    localStorage.setItem("token", token);
                }
                alert(response);
                if(response=='tokenSigned'){
                    window.location.assign('/login');
                }
            }
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send(formData);

            // axios.post(process.env.REACT_APP_SERVER+"/register", formData, {})
            // .then(res => {console.log(res); return res.data})
            // .then(data=>{alert(data);})
            // .catch(err=>{alert(err);});
        }

    }

    return (
        <div className="container mt-5 p-5 text-center">
            <form className="form-signin" >
                <img className="mb-4" src="/img/favicon.PNG" alt="Welcome to Capture" width="100"
                    height="100"></img>
                <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                <input type="email" id="inputEmail" name="username" className="form-control" placeholder="Email" required></input>
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required></input>
                <button id='btn_form' onClick={handleSubmit} className="btn btn-lg btn-dark btn-block" type="button">Sign Up</button>
            </form>
        </div>

    )
}

export default Register;