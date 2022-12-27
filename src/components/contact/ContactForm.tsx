import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
                input: {
                    color: "white"
                },
                label: {
                    color: "white"
                },
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
                        label: {
                            color: 'var(--colour-primary)',
                        },
                    },
                }
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="name-box"
                    label="Required"
                    defaultValue="Name"
                />
                <TextField
                    id="company-box"
                    defaultValue="Company"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Tell me something!"
                    style={{color: "white"}}
                    inputProps={{style: {color: "white"}}}
                />
            </div>
        </Box>
    );
}
