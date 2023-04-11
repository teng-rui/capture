import React,{useState} from 'react';

function Header() {

    //controlled input
    const [search,setSearch]=useState('');

    function handleChange(e){
        setSearch(e.target.value);
    }

    //assign to /search/:id 
    function handleKeydown(event){
        if (event.key === 'Enter') {
            // Prevent the default behavior of the Enter key
            event.preventDefault();
            if(event.target.value.length){
                window.location.assign('/search/'+search)
            }
            
          }
    }



    return (


        <header className='d-flex'>
            <a href="/">
                <img className='logo' alt='' src='/img/favicon.png'></img>
            </a>
            <h1 >Capture</h1>
            <input type="text" placeholder="Search.." value={search} onChange={handleChange} onKeyDown={handleKeydown}></input>
            <div className="dropleft">
                <button className=' border-0 bg-white my-2' data-toggle="dropdown">
                    <img className='icon' alt='' src='/img/icon.png' ></img>
                </button>
                <div className="dropdown-menu shadow ">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="/myPosts">Posts</a>
                </div>
            </div>

        </header>


    );
}

export default Header;