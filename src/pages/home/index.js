import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";


export const Home = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100"/>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                        introdata.animated.seventh,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a href="Resume_des.pdf" download="Shang Gao's Resume.pdf">
                    <button id="button_h" className="ac_btn btn">
                      Download Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </button>
                  </a>
                  <div style={{width:"100%", position:"relative"}}>
                    <button id="button_h" style={{marginTop:"1rem", fontSize:"30px", position:"absolute", right:"0"}} className="btn more_info_btn" onClick={handleToggle}>
                      More Info...
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </button>
                  </div>
                </div>
                <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
                {/* menu */}
                <div className="bg__menu h-100">
                  <div className="menu__wrapper">
                    <div className="menu__container p-3">
                      <ul className="the_menu">
                        <li className="menu_item ">
                        <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                        </li>
                        <li className="menu_item">
                          <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                        </li>
                        <li className="menu_item">
                        <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                        </li>
                        <li className="menu_item">
                        <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
