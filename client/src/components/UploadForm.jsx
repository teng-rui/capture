import React, { useState } from "react";
import axios from 'axios';



function UploadForm() {

    // the main three components are input[type='file' id="upload_file"] that accepts images,
    // input[type='text' id='title'], and input[type='text' id='description'] 
    // function handleUploadChange check the uploaded file type, and only store at most 9 files with extension in ['gif', 'png', 'jpg', 'jpeg']
    // function handleDelete delete corresponding image from imageSRC
    // function handleUpload send formdata to restAPI process.env.REACT_APP_SERVER + "/plog"


    const [errorMessage, set_errorMessage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [show, setShow] = useState(false);
    const [imageSRC, setImageSRC] = useState([]);
    const [imageID, setImageID] = useState(0);


    function Image(props) {

        return (
            <div className='uploaded_image'>
                <img src={props.imageSRC}></img>
                <span name={props.id} className="file_remove" onClick={handleDelete}>X</span>
            </div>
        )
    }

    function createImage(props) {
        return (
            <Image key={props.id} id={props.id} imageSRC={props.src} />

        )
    }



    function handleUploadChange(e) {
        var ext = e.target.value.split('.').pop().toLowerCase();
        if (imageSRC.length >= 9) {
            set_errorMessage('9 Pictures At Most');
        }


        else if (!['gif', 'png', 'jpg', 'jpeg'].includes(ext)) {
            set_errorMessage('Not An Image');
        }

        else {
            set_errorMessage("");
            setUploading(true);
            setTimeout(function () {
                setUploading(false);
            }, 1000);

            setImageSRC(current => [...current, { src: URL.createObjectURL(e.target.files[0]), id: imageID }]);
            setImageID(current => current + 1);
            setTimeout(function () {
                // setImage(true);
                setShow(true);
            }, 500);
        }
    }

    function handleDelete(e) {
        let imageID = e.target.attributes["name"].value;
        setImageSRC(imageSRC.filter(item => String(item.id) !== imageID));
    }

    async function handleUpload(e) {
        // e.preventDefault();
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let imageAmount = imageSRC.length;
        if (!title.length) {
            alert('Please fill in "Titlt"');
        }
        else if (!description.length) {
            alert('Please fill in "Description"');
        }
        else if (!imageAmount) {
            alert('Please upload image');
        }
        else {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('description', description);
            for (let i = 0; i < imageAmount; i++) {
                let originalName = imageSRC[i].src;
                let picFiles = await fetch(imageSRC[i].src).then(r => r.blob()).then(blobFile => new File([blobFile], originalName + ".png", { type: "image/png" }));
                formData.append('picFiles', picFiles);
            }
            // console.log(formData.getAll('picFiles'));

            let token = localStorage.getItem("token");
            if (token) {

                axios.post(process.env.REACT_APP_SERVER + "/plog", formData, {
                    headers: {
                        Authorization: token,
                    },
                }).then(result => result.data)
                    .then((result) => {
                        console.log(result);

                        // alert(result.message);
                        if(result.message=='successfully posted'){
                            window.location.assign('/');
                        }
                        //     window.location.assign('/post/123')
                        // }

                    })
            }
            else {
                window.location.assign('/login');
            }

        }
    }



    return (

        <div className="panel">
            <div className={'button_outer ' + (uploading ? 'file_uploading ' : ' ')}>
                <div className="btn_upload">
                    <input onChange={handleUploadChange} type="file" id="upload_file" name="picFiles" required></input>
                    Upload Image
                </div>
                <div className="processing_bar"></div>
            </div>
            <div className="error_msg">{errorMessage}</div>

            <div className={"uploaded_file_view " + (show ? 'show ' : ' ')} id="uploaded_view">

                {imageSRC.map(createImage)}
                {/* <Image imageSRC={imageSRC[0]} /> */}
                {/* {image ? <img src={imageSRC} /> : <br />} */}
            </div>


            <form className='px-5'>
                <label htmlFor="title">Title</label>
                <input type='text' id='title' className="form-control mb-3" name='title' placeholder="Title" required="required"></input>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" className="form-control mb-3" placeholder="" rows="10" required="required" data-error="Please leave some description :)"></textarea>
                <button type='button' className='rounded' onClick={handleUpload}>Submit</button>
            </form>
        </div>

    )

}

export default UploadForm;

