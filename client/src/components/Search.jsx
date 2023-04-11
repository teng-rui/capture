

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import React, { useState, useEffect } from 'react';
import { useParams,useLocation  } from "react-router-dom";


function createCard(card) {
    return (<Card key={card.id} id={card.id} title={card.title} content={card.description} img={card.img} href={card.href} />)
}

function Search() {

    //request to restful API process.env.REACT_APP_SERVER + "/search/:" + params.id.toString()
    //if no result is fount, assign to '/'

    let params = useParams();
    console.log(params.id);

    const [plogs, setPlogs] = useState([{id:0}]);

    function responseToPlog(value) {
        return { ...value, img: "data:image/jpeg;base64," + value.imageData, id: value.plogID };
    }

    useEffect(function effectFunction() {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", process.env.REACT_APP_SERVER + "/search/:" + params.id.toString());
        xhttp.onload = function () {
            let response = JSON.parse(this.response);
            console.log(response);
            if (response.message) {
                alert(response.message);
                window.location.assign('/');
            }
            else {
                setPlogs(response.map(responseToPlog));
            }

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

export default Search;
