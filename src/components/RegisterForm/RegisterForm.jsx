import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../services/api";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    dispatch(
      signupUser({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      })
    );

    form.reset();
  };

  return (
    <section className={classes.container}>
      <h1>Register form</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.entry}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div className={classes.entry}>
          <label htmlFor="email">Your e-mail</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.entry}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Register user</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
