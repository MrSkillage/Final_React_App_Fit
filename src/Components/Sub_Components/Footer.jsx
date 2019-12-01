import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
/* Simple Function call used to create a Footer
    No implementation was used so no functionality just asectic
*/
export default props => {

    return (
        <Paper >
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label='Chest'/>
                <Tab label='Arms'/>
                <Tab label='Shoulders'/>
                <Tab label='Legs'/>
                <Tab label='Back'/>
                <Tab label='Abs'/>
                
            </Tabs>
        </Paper>
    )
}