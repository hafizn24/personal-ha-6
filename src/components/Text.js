import { Box } from '@mui/material';
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Text() {

    const text = "I dont have anything special to say.\nI know it’s a simple page.\nBut all I want to say is that I miss you.\nI love you so much, Anisha 🤍"

    return (
        <Box sx={{ mt:12, }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(text)
                        .changeDelay("natural")
                        .start();
                }}
            />
        </Box>
    )
}
