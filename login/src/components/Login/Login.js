import React, { useEffect, useState, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const  emailReducer = (state,action) => {
  if (action.type === 'USER_EMAIL_INPUT') {
    return { value:action.value, isValid: action.value.includes('@')};
  }
  if (action.type === 'EMAIL_INPUT_BLUR') {
    return { value:state.value, isValid: action.value.includes('@')};
  }
  return{ value:'', isValid:false };
}

const  passReducer = (state,action) => {
  if (action.type === 'USER_PASS_INPUT') {
    return { value:action.value, isValid: action.value.trim().length > 6};
  }
  if (action.type === 'PASS_INPUT_BLUR') {
    return { value:state.value, isValid: action.value.trim().length > 6};
  }
  return{ value:'', isValid:false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value:"",
    isValid:null
  });

  const [passState, passDispatch] = useReducer(passReducer, {
    value:"",
    isValid:null
  });

  // destructuring do valor unico necessario (isValid) e criando um alias para ele. (basicamente, eles vao servir de ponteiro) 
  // com esse metodo, vai tornar menor o custo de performance, no caso nao sera refeito evaluacoes desnecessarias.
  const {isValid:emailStateValidate} = emailState
  const {isValid:passStateValidate} = passState

  // Usado para abaixar o numero de codigo e realizar a atualizacao de dados sendo inseridos mutualmente no form (email/pass)
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailStateValidate && passStateValidate
      );
    }, 200);

    return () => {
      clearTimeout(identifier);
    }
  },[emailStateValidate,passStateValidate]);

  const emailChangeHandler = (event) => {
    emailDispatch({type:'USER_EMAIL_INPUT',value:event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passState.isValid
    // );
  };

  const passChangeHandler = (event) => {
    passDispatch({type:'USER_PASS_INPUT',value:event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passState.isValid
    // );
  };

  const validateEmailHandler = (event) => {
    emailDispatch({type:'EMAIL_INPUT_BLUR',value:event.target.value});
  };

  const validatePassHandler = (event) => {
    passDispatch({type:'PASS_INPUT_BLUR',value:event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    AuthCtx.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          isValid={emailStateValidate} 
          label='Email'
          htmlFor="email" 
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}/>
        <Input 
          isValid={passStateValidate} 
          label='Password'
          htmlFor="password" 
          type="password"
          id="password"
          value={passState.value}
          onChange={passChangeHandler}
          onBlur={validatePassHandler}/>
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
