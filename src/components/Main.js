import React from 'react'
import Flower from './Flower'
import Text from './Text'
import { Grid } from '@mui/material'

export default function Main() {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Flower />
                <Text />
            </Grid>

        </>
    )
}
