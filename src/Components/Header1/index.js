/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Link, useLocation } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../Img/logoTransparent.png";
import "./header.css";

const Menu = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <a href="#">Serviços</a>
          <ul>
            <li>
              <a href="/agro">Agro</a>
            </li>
            <li>
              <a href="/Comercial">Comercial</a>
            </li>
            <li>
              <a href="/residencial">Residencial</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/instalacoes">Instalações</Link>
        </li>
        <li>
          <Link to="/usina">Alugue</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>

        <li>
          <div className="btn">(37)9999-8888</div>
        </li>
        <li>
          <a target="blank" href="https://www.instagram.com/enerjuzsolar/">
            <InstagramIcon color="warning" />
          </a>
        </li>
      </ul>
    </nav>
  </>
);

const Header1 = () => {
  /// state={clicked:false};
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const posicaoScroll = () => {
      //console.log("chegou aqui " + window.location.href+' eh home: '+ window.location.href.endsWith("/"));
      const isHomePage = location.pathname.endsWith("/");
      //const isHomePage = true;
      const isScrollDown = window.scrollY > 200;

      if (isHomePage && isScrollDown) {
        // Change this value according to when you want the header to become sticky
        setIsSticky(true);
      } else if (isHomePage && !isScrollDown) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", posicaoScroll);

    return () => {
      window.removeEventListener("scroll", posicaoScroll);
    };
  }, [location]);

  useEffect(() => {
    const isHomePage = location.pathname.endsWith("/");
    setIsSticky(!isHomePage);
  }, [location]);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      {/* Your header content */}
      <div className="links">
        <div className="links_logo">
          <Logo imagem={logo} />
        </div>
        <div className="links_wrapper">
          <Menu />
        </div>
      </div>
      <div className="nav_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav_menu_wrapper">
            <div className="nav_menu_wrapper_links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
