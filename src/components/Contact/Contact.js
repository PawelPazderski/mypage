import React, {useState, useRef} from 'react';
import { z } from 'zod';
import Success from "./../Success"
import emailjs from '@emailjs/browser';
import './contact.scss'

const Contact = () => {
    const [msgFrom, setMsgFrom] = useState("")
    const [msgFromErr, setMsgFromErr] = useState(false)
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState(false)
    const [msg, setMsg] = useState("")
    const [msgErr, setMsgErr] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const [agreeErr, setAgreeErr] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)

    const form = useRef()

    const preventEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
        }
    }

    const handleChangeName = (e) => {
        const newValueIsValid = !e.target.validity.patternMismatch;

        if (msgFromErr && newValueIsValid) {
            setMsgFromErr(false);
        }
        setMsgFrom(e.target.value)
    }

    const validateMsgFrom = (e) => {
        if (e.target.validity.patternMismatch) {
            setMsgFromErr(true)
        } else {
                setMsgFromErr(false)
                }
    }

    const schema = z.object({
        email: z.string().email(), // Email validation
        });

    const validateEmail = (e) => {
        try {
            // Parse the email value against the Zod schema
            schema.parse({ email: e.target.value });
            setEmailErr(false); // Clear any previous errors if validation succeeds
            // console.log('Email is valid:', email);
            // Here, you can proceed with sending the email or performing other actions
            } catch (err) {
                setEmailErr(true); // Display the validation error message
                // console.error('Email validation error:', err.errors[0]);
            }

    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        if(emailErr) {
            try {
                // Parse the email value against the Zod schema
                schema.parse({ email: e.target.value });
                setEmailErr(false); // Clear any previous errors if validation succeeds
                console.log('Email is valid:', email);
                // Here, you can proceed with sending the email or performing other actions
                } catch (err) {
                    setEmailErr(true); // Display the validation error message
                    console.error('Email validation error:', err.errors[0]);
                }
        }
    }

    const handleChangeMsg = (e) => {
        if (e.target.value.length >= 20) {
            setMsgErr(false);
        }
        setMsg(e.target.value)
    }

    const validateMsg = (e) => {
        if (e.target.value.length >= 20) {
            setMsgErr(false)
        } else {
                setMsgErr(true)
                }
        }

    const handleCheckAgree = (e) => {
        if (e.target.checked) {
            setAgreed(true)
            setAgreeErr(false)
        } else {
            setAgreed(false)
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(!msgFrom.length) {
            setMsgFromErr(true)
        }

        if(!email.length) {
            setEmailErr(true)
        }

        if(!msg.length) {
            setMsgErr(true)
        }

        if (!agreed) {
            setAgreeErr(true)
        }

        if (!msgFromErr && !emailErr && !msgErr && !agreeErr && msgFrom.length && email.length && msg.length && agreed) {
            // console.log(form.current)
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text, "message sent");
        }, (error) => {
            console.log(error.text);
        });
        clearForm()
        setSendSuccess(true)
        } 
    }

    const clearForm = () => {
        setMsgFrom("")
        setEmail("")
        setMsg("")
        setAgreed(false)
    }

    return (
        <>
        <div className='contact-container'>
            {sendSuccess
            ?
            <Success />
            :
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <h2>Napisz do mnie</h2>
                        <label>Imię</label>
                            <input
                                name="name"
                                type="text"
                                value={msgFrom}
                                className={ msgFromErr ? "form-control-alert" : null}
                                onChange={handleChangeName}
                                pattern="^[\S ]{2,}$"
                                onBlur={validateMsgFrom}
                                onKeyPress={preventEnter}
                            />
                            <h6  
                                className={ 
                                msgFromErr 
                                ? 
                                "contact-form-alert" 
                                : 
                                "contact-form-alert d-none"
                            }>
                                Imię musi składać się z conajmniej 2 znaków!
                            </h6>
                        <label>Email</label>
                            <input 
                                name="email"
                                type="email"
                                value={email}
                                className={ emailErr ? "form-control-alert" : null}
                                onChange={handleChangeEmail}
                                onBlur={validateEmail}
                                onKeyPress={preventEnter}
                                // pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$'
                                // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                            />
                            <h6  
                                className={ 
                                emailErr 
                                ? 
                                "contact-form-alert" 
                                : 
                                "contact-form-alert d-none"
                            }>
                                Podany email jest niepoprawny!
                            </h6>
                            <label>Twoja wiadomość</label>
                            <textarea
                                name="msg"
                                value={msg}
                                rows= "4"
                                className={ msgErr ? "form-control-alert" : null }
                                onChange={handleChangeMsg}
                                minLength="20"
                                onBlur={validateMsg}
                                onKeyPress={preventEnter}
                            />
                            <h6  
                                className={ 
                                msgErr 
                                ? 
                                "contact-form-alert" 
                                : 
                                "contact-form-alert d-none"
                            }>
                                Wiadomość musi składać się z conajmniej 20 znaków!
                            </h6>
                            <div className='agree-box'>
                                
                                <input
                                    type="checkbox"
                                    id="agreement-input"
                                    onChange={handleCheckAgree}
                                    >
                                </input>
                                <span className="checkmark"></span>
                                <label>Wyrażam zgodę na przetwarzanie danych wpisanych w formularzu w celu udzielenia odpowiedzi na przesłane zapytanie.</label>
                                
                            </div>
                            <h6  
                                className={ 
                                agreeErr 
                                ? 
                                "contact-form-alert" 
                                : 
                                "contact-form-alert d-none"
                            }>
                                Aby otrzymać odpowiedź potrzebna jest Twoja zgoda na przetwarzanie danych!
                            </h6>
                            
                            <button type="submit">Wyślij</button>
            </form>
            }
        </div>
        </>
    )
}
    
export default Contact;
