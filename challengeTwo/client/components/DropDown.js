import React, { useState, memo, useEffect } from 'react';
// import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const DropDown = props => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: "Loading ...", value: "" }
  ]);
  const [value, setValue] = React.useState("R2-D2");

  // Get all people from API, parse JSON data, then iterate over
  //  final data and create object for each label and name
  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://swapi.co/api/people");
      const body = await response.json();
      setItems(body.results.map(({ name }) => ({ label: name, value: name })));
      setLoading(false);
    }
    getCharacters();
  }, []);

  return (
    <select disabled={loading}
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
              props.selectCharacter(e.currentTarget.value)
            }}
      >
      {items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default memo(DropDown);