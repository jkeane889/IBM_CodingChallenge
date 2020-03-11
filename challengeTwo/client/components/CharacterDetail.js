import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CharacterDetail = props => {
    console.log("These are the props.details: ", props.details)
    return (
        <React.Fragment>
        <Grid item xs={4}>
            <Paper>
                <Typography display='block'>
                    {props.details[0]}: {props.details[1]}
                </Typography>
            </Paper>
        </Grid>
        </React.Fragment>
    );
}

export default memo(CharacterDetail);