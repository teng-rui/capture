import React from 'react';

function Header() {
    return (


        <header className='d-flex'>
            <img className='logo' alt=''  src='/img/favicon.png'></img>
            <h1 >Capture</h1>
            <input type="text" placeholder="Search.."></input>
            <div className="dropleft">
                <button className=' border-0 bg-white my-2' data-toggle="dropdown">
                    <img className='icon' alt='' src='/img/icon.png' ></img>
                </button>
                <div className="dropdown-menu shadow ">
                    <span className="dropdown-item">tengrui1003@gmail.com</span>
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Posts</a>
                </div>
            </div>

        </header>


    );
}

export default Header;