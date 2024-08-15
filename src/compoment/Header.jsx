import React from 'react'
import images from "../images/tree.png"
import "../css/Header.css"
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Header() {
    return (
        <div className='header , flex-row'  >
            <div className='flex-row' style={{ alignContent: "center", justifyContent: "center" }}>
                <img src={images} alt='images' className='img' />
                <h1 className='title'>E-Ticaret</h1>
            </div>
            <div className='input'>
                <input className='search' placeholder='Bir şeyler ara.' />
                <FaHeart className='icon'/>
                <FaShoppingBasket className='icon' />
            </div>
        </div>
    )
}

export default Header
