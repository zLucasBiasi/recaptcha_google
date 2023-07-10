import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import * as S from "./styles";

export const Form = () => {
  const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <S.Container>
        <S.Title>Registrate</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input type="text" name="user" id="user" placeholder="User" />
          <S.Input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <S.Input
            type="password"
            name="password2"
            id="password2"
            placeholder="Repetir Senha"
          />

          <ReCAPTCHA
            sitekey="6LePWREnAAAAACU4FyZwoKKMRZbIEJ0di4hs1Qiw"
            onChange={handleRecaptchaChange}
          />

          {/* <div className="error-captcha">Por favor acepta el captcha</div> */}

          <S.Button type="submit">Iniciar Sesion</S.Button>
        </S.Form>
      </S.Container>

      {/* <div>
        <h1>Bienvenido</h1>
      </div> */}
    </>
  );
};
