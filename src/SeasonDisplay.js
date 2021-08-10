/*
Make sure to import CSS file if u use CSS in the returned JSX
NOTE: when we import a CSS file into a JS file, Webpack(which is an opensource dependency inside of our project, takes all these different files and join them together) is going to see that we are importing CSS file. It's going to take the contents out of there and then stick it into the index.html. So we dont have to define this CSS link it the HTML file.
*/
import "./SeasonDisplay.css";
import React from "react";
// This is an object
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

/*
We use Northern Hemisphere && Sounthern Hemisphere to define the season
Northern : April - Sept(month 3-8) = summer : Jan - Mar & Nov - Dec = winter
Southern : April - Sept(month 3-8) = winter : Jan - Mar & Nov - Dec = summer

If lat > 0, means that we must be in Northern Hemisphere
 */
// Helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
/**
 *
 * @param {Object} props = state object
 * NOTE:
 * => Date.getMonth() is a zero base month : means Jan = 0, Feb = 1 ...
 * => We can also put any type JS expression in {}
 *
 */
// A component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // return {text, iconName}

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
