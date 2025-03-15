import React from "react";
import "./NammaKumta.css"
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiHome} from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineBulb } from "react-icons/ai";
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
                        <div className="catogary-title">Hospitals</div>
                    </div>
                    <div className="box2">
                        <div className="catogary-title">Departments</div>
                    </div>
                    <div className="box3">
                        <div className="catogary-title">Assocations</div>
                    </div>
                    <div className="box4">
                        <div className="catogary-title">Banks</div>
                    </div>
                    <div className="box5">
                        <div className="catogary-title">Tourism</div>
                    </div>
                    <div className="box6">
                        <div className="catogary-title">Hotels</div>
                    </div>
                    <div className="box7">
                        <div className="catogary-title">Rent vehicals</div>
                    </div>
                    <div className="box8">
                        <div className="catogary-title">Wedding planning</div>
                    </div>
                    <div className="box9">
                        <div className="catogary-title">Shops</div>
                    </div>
                    <div className="box10">
                        <div className="catogary-title">services</div>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="box11">
                        <div className="catogary-title">Emergency</div>

                    </div>
                    <div className="box12">
                        <div className="catogary-title">Schools & colleges</div>

                    </div>
                    <div className="box13">
                        <div className="catogary-title">Cultural programs</div>

                    </div>
                    <div className="box14">
                        <div className="catogary-title">Sports and Equipment</div>
                    </div>
                    <div className="box15">
                        <div className="box16"><HiOutlineDotsHorizontal className="dots" /></div>
                    </div>
                </div>
            </div>
            <footer className="footer-section">
                <nav>
                    <div className="footer-item">
                    <FiHome className="Home-icon" />
                    <div className="Home">Home</div>
                    </div>
                    <div className="footer-item">
                    <IoSearchSharp className="Search-icon"/>
                    <div className="Search">Search</div>
                    </div>
                    <div className="footer-item">
                    <FiPlusCircle className="addjoin-icon"/>
                    <div className="addjoin">Add/Join</div>
                    </div>
                    <div className="footer-item">
                    <AiOutlineBulb className="alerts-icon"/>
                    <div className="alerts">Alerts</div>
                    </div>
                </nav>

            </footer>

        </>

    );
};

export default NammaKumta;
