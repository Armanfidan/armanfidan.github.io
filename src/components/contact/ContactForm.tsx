import * as React from 'react';
import {Button, TextField} from "@mui/material";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {useState} from "react";

const SERVICE_ID = 'armanfidan.github.io';
const TEMPLATE_ID = 'armanfidan_template';
const USER_ID = 'X6_Apga4rS300eM7s';

export default function ContactForm() {
    const [state, setState] = useState({name: "", email: "", company: "", message: ""})
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, state, USER_ID)
                .then((result) => {
                    console.log(result.text);
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent Successfully'
                    })
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops, something went wrong',
                        text: error.text,
                    })
                });
        } catch (e: any) {
            console.log(e);
        }
        e.target.reset()
    };

    const text_sx = {
        input: {color: "white"},
        label: {color: "white"},
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: "0.8rem"
            },
            '&:hover fieldset': {
                borderWidth: '2px',
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--colour-primary)',
                label: {color: 'var(--colour-primary)'},
            },
        },
        "& label.Mui-focused": {
            color: "var(--colour-primary)"
        },
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="contact-form-left">
                    <TextField
                        required
                        fullWidth
                        id="name-box"
                        label="Required"
                        helperText="Name"
                        placeholder="Your Name"
                        onChange={e => setState({...state, name: e.target.value})}
                        sx={text_sx}
                        style={{flex: 1}}
                    />
                    <TextField
                        required
                        fullWidth
                        id="email-box"
                        type="email"
                        label="Required"
                        helperText="Email Address"
                        placeholder="Your Email Address"
                        onChange={e => setState({...state, email: e.target.value})}
                        sx={text_sx}
                        style={{flex: 1}}
                    />
                    <TextField
                        fullWidth
                        id="company-box"
                        placeholder="Your Company"
                        helperText="Company"
                        onChange={e => setState({...state, company: e.target.value})}
                        sx={text_sx}
                        style={{flex: 1}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        fullWidth
                        id="message"
                        label="Required"
                        multiline
                        rows={5}
                        helperText="Message"
                        placeholder="Tell me something!"
                        style={{color: "white", flex: 1}}
                        inputProps={{style: {color: "white"}}}
                        onChange={e => setState({...state, message: e.target.value})}
                        sx={text_sx}
                    />
                    <Button type="submit" variant="outlined" fullWidth
                            sx={{
                                height: "2.55rem",
                                borderRadius: "0.7rem",
                                borderColor: "white",
                                color: "white",
                                "&:hover": {
                                    borderWidth: "2px",
                                    borderColor: "var(--colour-primary)",
                                    color: "var(--colour-primary)"
                                }
                            }}
                    >Send Message</Button>
                </div>
            </form>
        </div>
    );
}
