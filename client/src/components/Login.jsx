import React, { useState, useEffect } from 'react';

function Login() {


    //check form input, username and password required
    //send request to server domain, and save token to local storage if get 'tokenSigned' response message
    function handleSubmit(){
        let username = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputPassword').value;
        
        if (!username.length) {
            alert('Please fill in email');
        }
        else if (!password.length) {
            alert('Please fill in password')
        }
        else {

            let formData='username='+username+'&password='+password;

            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", process.env.REACT_APP_SERVER + "/login");
            xhttp.withCredentials = true;
            xhttp.onload = function () {
                console.log(this.response);
                let response=JSON.parse(this.response).message;
                let token=JSON.parse(this.response).token;
                if(token){
                    localStorage.setItem("token", token);
                }
                alert(response);
                if(response=='tokenSigned'){
                    window.location.assign('/');
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
            <form className="form-signin" action="/login" method="POST">
                <img className="mb-4" src="/img/favicon.PNG" alt="Welcome to Capture" width="100"
                    height="100"></img>
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <input type="email" id="inputEmail" name="username" className="form-control" placeholder="Email" required></input>
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required></input>
                <button id='btn_form' onClick={handleSubmit} className="btn btn-lg btn-dark btn-block" type="button">Sign in</button>
            </form>
        </div>

    )
}

export default Login;
