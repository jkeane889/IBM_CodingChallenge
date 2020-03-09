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

  // Value to store selection from user input
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input
				value={value}
			  onChange={(e) => setValue(e.target.value)}
			/>
      <button onSubmit={() => {
        props.selectCharacter(value)
      }}>Search</button>
      <br></br>
      <select disabled={props.loading}
              value={props.value}
              onChange={(e) => {
                props.selectCharacter(e.currentTarget.value)
              }}
        >
        {props.items.map(item => (
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