import React, { useState, memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import charIDs from './characterIDs.js'

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

  // Value to store selection from search
  const [value, setValue] = React.useState('');

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
    <div>
      <input
				value={value}
			  onChange={(e) => setValue(e.target.value)}
			/>
      <button onClick={() => {
        props.selectCharacter(value)
      }}>Search</button>
      <br></br>
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
    </div>
  );
}

export default memo(DropDown);