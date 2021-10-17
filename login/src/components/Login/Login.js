import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const  emailReducer = (state,action) => {
  if (action.type === 'USER_INPUT') {
    return { value:action.value, isValid: action.value.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return { value:state.value, isValid: action.value.includes('@')};
  }
  return{ value:'', isValid:false };
}

// const  passwordReducer = (state,action) => {
//   if (action.type === 'USER_INPUT') {
//     return { value:action.value, isValid: action.value.trim().length > 6};
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return { value:state.value, isValid: action.value.trim().length > 6};
//   }
//   return{ value:'', isValid:false };
// }

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value:"",
    isValid:null
  })

  // Usado para abaixar o numero de codigo e realizar a atualizacao de dados sendo inceridos mutualmente no form (email/pass)
  // useEffect(()=>{
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 200);

  //   return () => {
  //     clearTimeout(identifier);
  //   }
  // },[enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    emailDispatch({type:'USER_INPUT',value:event.target.value})
    
    setFormIsValid(
      emailState.isValid && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const emailHandler = (event) => {
    emailDispatch({type:'INPUT_BLUR',value:event.target.value})
    // setEmailIsValid(emailState.isvalid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={emailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
