import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Read from '../Pages/Read';

//Styles used for Paper instead of using an entire new css file
const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 800,
        overflow: 'auto'
    },
}

/*  Calls on the Read Component and wraps it in a Grid and Paper tag
    These are easily used to design how the multiple returns from out database
    will be seperated
*/

export default class Content extends Component {

    render() {
        return (
            <Grid container>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        <Read/>
                    </Paper>
                </Grid>

            </Grid>
        )
    }
}
