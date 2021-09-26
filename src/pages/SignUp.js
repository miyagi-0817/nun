// lib
import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import firebase from "../config/firebase";

// @material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// components

import { AuthContext } from "../AuthService";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn"));
  }, []);

  const user = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.sendEmailVerification();
        user.updateProfile({
          displayName: name,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(
          "登録できませんでした。もう一度よく確認して登録をお願い致します。"
        );
      });
  };

  return (
    <SContainer>
      <Box
        sx={{
          paddingTop: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          新規登録
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            marginBottom: 15,
          }}
        >
          <TextField
            margin="normal"
            required
            fullwidth="true"
            variant="outlined"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullwidth="true"
            variant="outlined"
            label="E-mail"
            name="e-mail"
            autoComplete="e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type="password"
            margin="normal"
            required
            fullwidth="true"
            variant="outlined"
            label="Password(6文字以上)"
            name="password"
            autoComplete="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button type="submit" variant="contained" color="secondary">
            登録
          </Button>
        </Box>
        <br />
        <p>
          アカウントをお持ちですか？ &nbsp;
          <Link to="/login">ログイン</Link>
        </p>
        <br />
        <p>
          メール認証がお済みでない方はこちら→ &nbsp;
          <Link to="/signincheck">メール認証</Link>
        </p>
      </Box>
    </SContainer>
  );
};
const SContainer = styled.div`
  background-image: url("https://www.beiz.jp/images_M/sky/sky_00359.jpg");
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
