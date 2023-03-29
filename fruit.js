import React from 'react'
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import "./App.css";
const FRUITS = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function FruitSurvey() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <div id='d1'>
    <form onSubmit={handleSubmit}>
      <div id='d2'>
      <TextField
      
        label="Name"
        data-testid="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      </div>
      <br></br>
      <div id='d2'>
      <Autocomplete
      
        data-testid="autocomplete"
        options={FRUITS}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField 
            {...params}
            label="Choose a fruit"
            variant="outlined"
          />
        )}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
      />
      <br></br>
      <Button 
        data-testid="button"
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      </div>
    </form>
    </div>
  );
}

export default FruitSurvey;