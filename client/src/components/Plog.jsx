import React,{useEffect,useState} from 'react';
import Header from './Header';
import { useParams,useLocation  } from "react-router-dom";

function Plog() {

    //display specific plog
    //get plog information as JSON response, using GET restAPI process.env.REACT_APP_SERVER + "/plog/:"+params.id.toString()
    // assign to '/' if the plog is missed from database

    const [title, setTitle] = useState(['']);
    const [description, setDescription] = useState(['']);
    const [pics, setPics] = useState([]);
    const [picId,setPicId]=useState(0);

    let params = useParams();

    function createImage(props) {
        return (
            <img key={props.id} src={"data:image/jpeg;base64,"+props.imageData} />
        )
    }

    useEffect(function effectFunction() {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", process.env.REACT_APP_SERVER + "/plog/:"+params.id.toString());
            xhttp.onload = function () {
                let response = JSON.parse(this.response);
                if(response.message){
                    alert("We lost the plog :)");
                    window.location.assign('/');
                }
                else{
                    setTitle(response.title);
                    setDescription(response.description);
                    setPics(response.pics.map(function(value){
                        setPicId((value)=>value+1);
                        return{id:picId,imageData:value}
                    }));
                }
               

            }
            xhttp.send();
    }, []);




    return (
        <div>
            <Header />
            <div className="post_detail_pictures">
                {pics.map(createImage)}
            </div>
            <div className='post_detail_text'>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            


        </div>
    )
}

export default Plog;