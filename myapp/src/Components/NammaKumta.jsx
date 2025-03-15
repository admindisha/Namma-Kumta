import React from "react";
import "./NammaKumta.css"
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";




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
                    <div className="box3">
                        <p>Assocations</p>
                    </div>
                    <div className="box4">
                        <p>Banks</p>
                    </div>
                    <div className="box5">
                        <p>Tourism</p>
                    </div>
                    <div className="box6">
                        <p>Hotels</p>
                    </div>
                    <div className="box7">
                        <p>Rent Vehicles</p>
                    </div>
                    <div className="box8">
                        <p>Wedding Planning</p>
                    </div>
                    <div className="box9">
                        <p>Shops</p>
                    </div>
                    <div className="box10">
                        <p>Services</p>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="box11"></div>
                    <div className="box12"></div>
                    <div className="box13"></div>
                    <div className="box14"></div>
                    <div className="box15">
                        <div className="box16"><HiOutlineDotsHorizontal className="dots"/></div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default NammaKumta;
