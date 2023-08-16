import React, {useState} from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import {
  AiFillWechat
} from "react-icons/ai";
import { socialprofils } from "../../content_option";
import { Modal, Button } from "react-bootstrap";

export const Socialicons = (params) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log("!")
  }
  const handleShow = () => {
    setShow(true) 
    console.log("!");
  };
  return (
    <div className="stick_follow_icon">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WeChat QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"450px"}}>
          <div className="wechat_qr"/>
        </Modal.Body>
      </Modal>
      <ul>
        {socialprofils.github && (
          <li>
            <Button className="wechat_button">
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
            </Button>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <Button className="wechat_button">
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
            </Button>
          </li>
        )}
        {socialprofils.wechat && (
          <li>
            <Button className="wechat_button" onClick={handleShow}>
              < AiFillWechat />
            </Button>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
