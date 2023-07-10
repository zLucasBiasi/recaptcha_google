import * as S from "./styles";

export const Form = () => {
  return (
    <>
      <S.Container>
        <S.Title>Registrate</S.Title>
        <S.Form>
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

          <div className="error-captcha">Por favor acepta el captcha</div>

          <S.Button type="submit">Iniciar Sesion</S.Button>
        </S.Form>
      </S.Container>

      {/* <div>
        <h1>Bienvenido</h1>
      </div> */}
    </>
  );
};
