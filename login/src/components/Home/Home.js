import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const [appLink, appLinkState] = useState();

  const appLinkHandler = (event) => {
    console.log(event);
  }
  
  return (
    <Card className={classes.home}>
      <h1>Welcome back! it's been too long, we've missed you</h1>
      <Button type="submit" className={classes.btn} onClick={appLinkHandler}>Go to app</Button>
    </Card>
  );
};

export default Home;
