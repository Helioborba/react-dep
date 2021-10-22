import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const [appLink, appLinkState] = useState();

  const appLinkHandler = (event) => {
    console.log(event);
    appLinkState('')
  }
  
  return (
    <Card className={classes.home}>
      <h1>Bem-vindo de volta! Faz tanto tempo, sentimos sua falta.</h1>
      {/* Aqui devera ser redirecionado para o app Memorias */}
      <Button type="submit" className={classes.btn} onClick={appLinkHandler}>{'>Para o APP<'}</Button>
      <p>{appLink}</p>
    </Card>
  );
};

export default Home;
