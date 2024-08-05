import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    return (
        <Navbar expand="lg" className="header" >
            <Container fluid>
                <div className="search-input">
                    <FiSearch />
                    <input
                        placeholder="Search"
                    />
                </div>
                <div className="header-right-container">
                    <div className="header-right">
                        <div className="icon">
                            <CiMail />
                        </div>
                        <div className="icon">
                            <CiSettings />
                        </div>
                        <div className="icon">
                            <div></div>
                            <GoBell />
                        </div>
                        <div className="icon">
                            <FaUserLarge />
                        </div>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll">
                    <RxHamburgerMenu />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <div className="header-right-collapse">
                        <div className="icon">
                            <CiMail />
                        </div>
                        <div className="icon">
                            <CiSettings />
                        </div>
                        <div className="icon">
                            <div></div>
                            <GoBell />
                        </div>
                        <div className="icon">
                            <FaUserLarge />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
