import React, { Component } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Read from '../Pages/Read';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 700,
        overflow: 'auto'
    },
}

export default class Content extends Component {

    render() {
        return (
            <Grid container>
                <Grid item sm>

                    <Paper style={styles.Paper}>
                        <Typography>
                            List of Categories
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item sm>
                    <Paper style={styles.Paper}>
                    <Read/>
                        <Typography
                            variant='h6'>
                            Title
                    </Typography>
                        <Typography
                            variant='body2'
                            style={{ marginTop: 20 }}>
                            Description
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        )
    }
}
