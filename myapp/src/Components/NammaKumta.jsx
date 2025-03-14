import React from "react";
import "./NammaKumta.css"
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";




const NammaKumta = () => {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img className="logo" src="https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-beach-logo-design-inspiration-sunset-coconut-trees-palms-on-the-vector-png-image_13564239.png" alt="Logo" />
                    <h1>Namma Kumta</h1>
                    <div className="icons">
                        <AiOutlineBell className="bell-icon" />
                        <LuUserRound className="user-icon" />
                        <AiOutlineGlobal className="global-icon" />
                    </div>
                </div>
            </header>
            <div className="search-bar">
                <div className="search-container">
                    <IoIosSearch className="search-icon" />
                    <input type="text" placeholder="Search here..." />
                    <IoMicOutline className="mic-icon" />
                </div>
            </div>
            <div className="boxes">
                <div className="top-row">
                    <div className="box1">
                        <p>Hospitals</p>
                    </div>
                    <div className="box2">
                        <p>Departments</p>
                    </div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                    <div className="box5"></div>
                    <div className="box6"></div>
                    <div className="box7"></div>
                    <div className="box8"></div>
                    <div className="box9"></div>
                    <div className="box10"></div>
                </div>
                <div className="bottom-row">
                    <div className="box11"></div>
                    <div className="box12"></div>
                    <div className="box13"></div>
                    <div className="box14"></div>
                    <div className="box15"></div>
                </div>
            </div>

        </>

    );
};

export default NammaKumta;
