import React, { useState, useEffect } from "react";
import './topbar.css'

export default function Topbar() {

        const [hamburguer, setHamburguer] = useState(false);
        const [close, setClose] = useState(false);

        function closeMenu() {
                setClose(false)
                setHamburguer(true);
        }
        return (
                <div className="top">
                        <nav className="navbar">
                                <div className="content">
                                        <div className="top-left">
                                                <div className="logo">
                                                        <img className="logo-img"
                                                                src="https://icons-for-free.com/iconfiles/png/512/cookie-1319971784454690183.png"
                                                                alt="" />
                                                        <a className="logo-text" href="#">Omagine</a>
                                                </div>
                                        </div>

                                        <div className="top-right">
                                                <ul className={`${close ? "menu-list active" : "menu-list"}`}>
                                                        <div className="logo-menu-responsive">
                                                                <div className="resposive-itens" >
                                                                        <img className="logo-img"
                                                                                src="https://icons-for-free.com/iconfiles/png/512/cookie-1319971784454690183.png"
                                                                                alt="" />
                                                                        <a className="logo-text" href="#">Omagine</a>
                                                                </div>
                                                        </div>
                                                        <div className="icon cancel-btn"
                                                                onClick={() => {
                                                                        setClose(false)
                                                                        setHamburguer(true);
                                                                }}>
                                                                <i className="fas fa-times"></i>
                                                        </div>


                                                        <li>
                                                                <a onClick={closeMenu}
                                                                        className="menu-list-item"
                                                                        href="#header">
                                                                        <i class="iconRes fas fa-home" />Home
                                                                </a>
                                                        </li>

                                                        <li>
                                                                <a onClick={closeMenu}
                                                                        className="menu-list-item"
                                                                        href="#posts">
                                                                        <i class="iconRes fas fa-cookie-bite" />Produtos
                                                                </a>
                                                        </li>

                                                        <li>
                                                                <a onClick={closeMenu}
                                                                        className="menu-list-item"
                                                                        href="#about">
                                                                        <i class="iconRes fas fa-info" />Quem somos
                                                                </a>
                                                        </li>

                                                        <li>
                                                                <a onClick={closeMenu}
                                                                        className="menu-list-item"
                                                                        href="#photo">
                                                                        <i class="iconRes fas fa-image" />Fotos
                                                                </a>
                                                        </li>

                                                        <li>
                                                                <a onClick={closeMenu}
                                                                        className="menu-list-item"
                                                                        href="#footer">
                                                                        <i class="iconRes fas fa-question" />Duvidas
                                                                </a>
                                                        </li>

                                                        <img className="wave" width="90%"
                                                                src="https://www.pngkey.com/png/full/432-4325647_cute-cookie-png-clipart-cute-stuff-cookie-cute.png"
                                                                alt="" />
                                                </ul>

                                        </div>
                                        <div className={`${close ? "icon menu-btn hide" : "icon menu-btn"}`}
                                                onClick={() => {
                                                        setClose(true)
                                                        setHamburguer(true);
                                                }}>
                                                <i className="fas fa-bars"></i>
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}
