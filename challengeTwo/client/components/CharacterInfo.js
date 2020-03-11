import axios from 'axios';
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import HeightIcon from '@material-ui/icons/Height';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CakeIcon from '@material-ui/icons/Cake';
import WcIcon from '@material-ui/icons/Wc';
import LanguageIcon from '@material-ui/icons/Language';

const CharacterInfo = props => {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '2%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  if (props.details) {
    const classes = useStyles();

    console.log("These are the details: ", props.details)
    let name = props.details.name;
    let height = props.details.height;
    let mass = props.details.mass;
    let hair_color = props.details.hair_color;
    let skin_color = props.details.skin_color;
    let eye_color = props.details.eye_color;
    let birth_year = props.details.birth_year;
    let gender = props.details.gender;
    let homeworld = props.details.homeworld;

    return (
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HeightIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Height" secondary={height} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Mass" secondary={mass} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InvertColorsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Hair Color" secondary={hair_color} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Skin Color" secondary={skin_color} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <VisibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Eye Color" secondary={eye_color} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CakeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Birthday" secondary={birth_year} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Gender" secondary={gender} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LanguageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Home World" secondary={homeworld} />
        </ListItem>
      </List>
    );
  }
}

export default memo(CharacterInfo);