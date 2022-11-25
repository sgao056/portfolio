import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };
  
    return (
      <div>
        <ScreenHeading
          title={"A Bit of My Project"}
          subHeading={"Frontend - React & Vue "}
        />
        <section className="project-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="project-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Based on Web3.js API and 3rd party plugin built full-stack system containing admin-management pages and client-side pages. Main usage is for NFT publishing and claiming with simple blog publishing system.                        
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>NFT claim Full-Stack System</h5>
                      <p>React, Web3 Related</p>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Developed a back-end management system in Vue.js, encompassing the Login page, Home page, and User page and classified authorization.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Backend management system</h5>
                      <p>Vue Related</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        An app using restful api to add, minus, update and delete data of shoes, but just deployed the front-end part.
                        <i className="fa fa-quote-right" />
                      </p>
                      <p>
                        <i className="fa fa-quote-left" />
                        A clone layout of Amazon online shop homepage, using basic functions including function of shopping cart and card payment format.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Amazon clone & Shoes management system</h5>
                      <p>React Related</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

      </div>
    );
  }