

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import React, { useState, useEffect } from 'react';


function createCard(card) {
    return (<Card key={card.id} id={card.id} title={card.title} content={card.description} img={card.img} href={card.href} />)
}

function Main() {

    //send GET request to server to get random plogs,
    //map the received plogs to <Card /> components

    const [plogs, setPlogs] = useState([{id:0}]);

    function responseToPlog(value) {
        return { ...value, img: "data:image/jpeg;base64," + value.imageData, id: value.plogID};
    }

    useEffect(function effectFunction() {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", process.env.REACT_APP_SERVER + "/");
        xhttp.onload = function () {
            let response = JSON.parse(this.response);
            setPlogs(response.map(responseToPlog));
        }
        xhttp.send();
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

export default Main;
