import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 700,
        overflow: 'auto'
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome',
        description = 'Please select an exercise from the list on the left.'
    }
}) =>

        <Grid container>
            <Grid item sm>

                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group
                            ? <div className="Wrapper" key={group}>
                                <Typography
                                    variant='h4'
                                    style={{ textTransform: 'capitalize' }}
                                    align='left'
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) =>
                                        <ListItem
                                            key={id}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    )}
                                </List>
                            </div>
                            : null
                    )}
                </Paper>
            </Grid>

            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography
                        variant='h6'>
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        style={{ marginTop: 20 }}>
                        {description}
                    </Typography>
                    <Typography
                        variant='h6'>
                        {id}
                    </Typography>
                </Paper>
            </Grid>

        </Grid>