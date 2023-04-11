

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import React, { useState, useEffect } from 'react';


function createCard(card) {
    return (<Card key={card.id} id={card.id} title={card.title} content={card.description} img={card.img} href={card.href} />)
}



function MyPosts() {

    const [plogs, setPlogs] = useState([{id:0}]);

    function responseToPlog(value) {
        return { ...value, img: "data:image/jpeg;base64," + value.imageData, id: value.plogID };
    }

    useEffect(function effectFunction() {
        let token = localStorage.getItem("token");
        if (token) {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", process.env.REACT_APP_SERVER + "/myPosts");
            xhttp.withCredentials = true;
            xhttp.setRequestHeader("Authorization", token);
            xhttp.onload = function () {
                let response = JSON.parse(this.response);
                if(response.message){
                    setPlogs([{id:0,title:"You haven't posted a Capture :)"}]);
                }
                else{
                    setPlogs(response.map(responseToPlog));
                }
               

            }
            xhttp.send();
        }
        else {
            window.location.assign('/login');
        }
    }, []);

    return (
        <div>


            <Header />
            <div className='d-flex flex-wrap  p-5'>
                {plogs.map(createCard)}
            </div>
            <Footer />
        </div>
    );
}

export default MyPosts;
