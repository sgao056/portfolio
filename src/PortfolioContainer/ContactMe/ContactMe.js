import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios'
import {toast} from 'react-toastify'

import imgBack from '../../../src/images/mailz.png';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./ContactMe.css";

export default function Contactme(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    console.log(name);
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post('/contact', data)
            if(name.length === 0 || email.length === 0 || message.length === 0){
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool (false)
            }else if(res.status === 200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool (false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error)
            
        }
    };

    return (
        <div className='main-container fade-in' id={props.id || ""}>
            <ScreenHeading subHeading={"Lets keep in Touch"} title={"Contact Me"}/>
            <div className='central-form'>
                <div className='col'>
                <h2 className='title'>
                    <Typical
                        loop={Infinity}
                        steps={[
                        "Have a discussion..",
                        1000,
                        "Share experience",
                        1000,
                        "Share knowledge..",
                        1000,                                               
                        ]}
                    />
                </h2>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4 className='wrap'>
                            Please contact me as soon as possible!
                            <p></p>
                            <img className='wraps' src={imgBack} alt='image is missing'/>
                        </h4>
                    </div>
                    <div style={{display:"flex", alignItems:"center", position:"relative", bottom:0}}>
                        <form className='contact-form' style={{height:"100%"}}>
                            <label htmlFor='email' style={{margin:"30px 0 0 0"}}>
                                <div style={{fontSize:"30px", fontWeight:"bold"}}>
                                    Email: 
                                </div>
                                <button style={{width:"400px"}} type="button" onClick={()=>{window.location.href = "mailto:sgao056@outlook.com"}}>
                                    Send email to sgao056@outlook.com
                                </button>
                            </label>
                            <label htmlFor='linkedin' style={{margin:"30px 0 0 0"}}>
                                <div style={{margin:"0 0 20px 0", fontSize:"30px", fontWeight:"bold"}}>
                                    Linkedin:
                                </div>
                                <a href='https://www.linkedin.com/in/shang-gao-0853b8197/'>
                                    https://www.linkedin.com/in/shang-gao-0853b8197/
                                </a>
                            </label>   
                        </form>
                    </div>        
                </div>
            </div>
        </div>
    );
}

