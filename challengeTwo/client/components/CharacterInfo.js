import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import PersonIcon from '@material-ui/icons/Person';
import HeightIcon from '@material-ui/icons/Height';
import ListItem from '@material-ui/core/ListItem';
import grey from '@material-ui/core/colors/grey';
import CakeIcon from '@material-ui/icons/Cake';
import Avatar from '@material-ui/core/Avatar';
import WcIcon from '@material-ui/icons/Wc';
import List from '@material-ui/core/List';
import React, { memo } from 'react';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#f5f5f5',
        main: grey[900],
        dark: '#424242'
      },
      secondary: {
        light: '#ffff8d',
        main: '#ffea00',
        dark: '#ffd600'
    }
  }
});

const CharacterInfo = props => {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '2%',
      backgroundColor: theme.palette.primary.dark,
    },
    text: {}
  }));
  
  if (props.details) {
    const classes = useStyles();

    // console.log("These are the details: ", props.details)
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
          <ListItemText/>
            <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Name: {name}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HeightIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Height: {height}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Mass: {mass}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InvertColorsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Hair Color: {hair_color}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Skin Color: {skin_color}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <VisibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText />
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Eye Color: {eye_color}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CakeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Birthday: {birth_year}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Gender: {gender}
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LanguageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText/>
          <Typography gutterBottom variant="h5" component="h6" color="secondary">
              Homeworld: {homeworld}
            </Typography>
        </ListItem>
      </List>
    );
  }
}

export default memo(CharacterInfo);