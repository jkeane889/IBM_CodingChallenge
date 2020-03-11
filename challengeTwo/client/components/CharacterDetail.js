import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CharacterDetail = props => {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography display='block'>
                        Name: {props.details.name ? props.details.name : ''}
                    </Typography>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}