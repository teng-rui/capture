

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import React, { useState, useEffect } from 'react';


function createCard(card) {
    return (<Card key={card.id} id={card.id} title={card.title} content={card.content} img={card.img} href={card.href} />)
}

function Main() {

    const [name, setName] = useState("");
    // fetch("http://localhost:4000/")
    //     .then(function(res) { return res.text(); })
    //     .then(data=>{console.log(data)});



    let cardList = [{ id: "0", title: name, content: "How are you?", img: '/img/amsterdam.jpeg', href: '#' },
    { id: 1, title: "Hi", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.", img: '/img/ramen.jpeg', href: '#' },
    { id: 2, title: "Hi", content: "How are you?", img: '/img/amsterdam.jpeg', href: '#' },
    { id: 3, title: "Hi", content: "How are you?", img: '/img/ramen.jpeg', href: '#' },
    { id: 4, title: "Hi", content: "How are you?", img: '/img/amsterdam.jpeg', href: '#' },
    { id: 5, title: "Hi", content: "How are you?", img: '/img/ramen.jpeg', href: '#' },
    { id: 6, title: "Hi", content: "How are you?", img: '/img/amsterdam.jpeg', href: '#' },
    { id: 7, title: "Hi", content: "How are you?", img: '/img/ramen.jpeg', href: '#' },
    { id: 8, title: "Hi", content: "How are you?", img: '/img/amsterdam.jpeg', href: '#' },
    { id: 9, title: "Hi", content: "How are you?", img: '/img/ramen.jpeg', href: '#' }];

    return (
        <div>


            <Header />
            <div className='d-flex flex-wrap  p-5'>
                {cardList.map(createCard)}
            </div>
            <Footer />
        </div>
    );
}

export default Main;
