import styled from "styled-components";
import { Form as FormikForm, Field as FormilField, ErrorMessage as ErrorMessageFormik } from 'formik';

export const Form = styled(FormikForm)`
width: 300px;
height: 200px;
padding: 50px;
maegin-right: 20px;
border: 10px solid #F0F8FF;
border-radius: 10px;
margin: 0 auto;
display: flex;
flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 0 auto;
`;

export const Field = styled(FormilField)`
width: 200px;
height: 20px;
margin-bottom: 20px;
`

export const ErrorMessage = styled(ErrorMessageFormik)`
font-size: 14px;
color: red;
`

export const ContainerBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Btn = styled.button`
margin-top: 20px;
width: 200px;
height: 40px;
background: light-blue;
border: solid 1px rgba(155, 111, 232, 0.8);
border-radius: 10px;

`
