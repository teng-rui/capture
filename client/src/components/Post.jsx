import React from 'react';
import Header from './Header';
import { useParams,useLocation  } from "react-router-dom";


let images = [{ id: 0, imageSRC: '/img/ramen.jpeg' },
{ id: 1, imageSRC: '/img/icon.png' },
{ id: 2, imageSRC: '/img/icon.png' },
{ id: 3, imageSRC: '/img/icon.png' },
{ id: 4, imageSRC: '/img/icon.png' },
{ id: 5, imageSRC: '/img/icon.png' },
{ id: 6, imageSRC: '/img/icon.png' },
{ id: 7, imageSRC: '/img/icon.png' },
{ id: 8, imageSRC: '/img/icon.png' }];
let username='tengrui';
let uploadtime=new Date();
let title = 'Hi dshfuhv djidj';
let description = "Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

function Post() {
    // let imagesSRCs=props.imageSRCs;
    //props should contain list of imagesrcs(id and src), title, description

    let params = useParams();
    const search  = useLocation();
    console.log(params.id);
    console.log(search.search);

    function Image(props) {
        return (
                <img src={props.imageSRC}></img>
        )
    }

    function createImage(props) {
        return (
            <Image key={props.id} imageSRC={props.imageSRC} />

        )
    }


    return (
        <div>
            <Header />
            <div className="post_detail_pictures">
                {images.map(createImage)}
            </div>
            <div className='post_detail_text'>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            


        </div>
    )
}

export default Post;