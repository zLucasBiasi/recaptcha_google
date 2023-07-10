import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.form`
  padding: 50px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 42px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 3px;
  transition: 0.3s ease all;

  &:focus {
    border: 1px solid #4d77ff;
  }
`;
export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  background: #4d77ff;
  border-radius: 3px;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease all;
  outline: none;

  &:hover {
    background: #1f45c4;
  }
`;
