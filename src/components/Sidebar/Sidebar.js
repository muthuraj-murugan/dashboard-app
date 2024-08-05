import React, { useState } from 'react'
import './sidebar.css'
import { FaWallet } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { PiDropboxLogoFill } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className='sidebar'>
            <div className='logo'>
                <PiDropboxLogoFill />
            </div>
            <ul>
                <li className={`${activeIndex === 0 ? "active" : 'pad-left'}`}
                    onClick={() => handleClick(0)}> <MdHome /></li>
                <li className={` ${activeIndex === 1 ? "active" : "pad-left"}`}
                    onClick={() => handleClick(1)}> <MdLeaderboard /></li>
                <li className={` ${activeIndex === 2 ? "active" : "pad-left"}`}
                    onClick={() => handleClick(2)}><BsClipboard2CheckFill /></li>
                <li className={` ${activeIndex === 3 ? "active" : "pad-left"}`}
                    onClick={() => handleClick(3)}>  <FaWallet /></li>
                <li className={` ${activeIndex === 4 ? "active" : "pad-left"}`}
                    onClick={() => handleClick(4)}> <RiShoppingBag4Fill /></li>
            </ul>
            <div className='log-out'>
                <RiLogoutCircleRLine />
            </div>
        </div>
    )
}

export default Sidebar