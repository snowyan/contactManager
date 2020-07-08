import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function TableSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([2, 96]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    var output = document.getElementById("demo");
    output.innerHTML = newValue;
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        vCpu range:
      </Typography> */}
      <p>vCpu range:<span id="demo"></span></p>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
