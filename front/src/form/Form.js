import * as F from "./Form.styled";
import bg from "../static/bg.png"
import axios from "axios";
import validator from "validator/es";
import {useState} from "react";

function Form() {
  const [emailWarning, setEmailWarning] = useState();

  function validateEmail(e) {
    validator.isEmail(e.target.value) ? setEmailWarning('') :
      setEmailWarning('Email must be valid');
  }

  function sendForm(e) {
    e.preventDefault();
    const data = {
      name: e.target['name'].value,
      email: e.target['email'].value,
      msg: e.target['message'].value
    }
    axios.post('http://localhost:3001/api/', data)
      .then(res => res.data.result ? alert('Thank you for your patronage!') : 'Oops! Something went wrong!');
  }

  return (
    <F.Main src={bg}>
      <F.Title>Reach out to us!</F.Title>
      <F.Form onSubmit={sendForm}>
        <F.Input id={'name'} type={"text"} placeholder={"Your name*"} required={true}/>
        <F.Input onChange={e => validateEmail(e)} id={'email'} type={"text"} placeholder={"Your e-mail*"} required={true}/>
        {emailWarning ? <F.Warning>{emailWarning}</F.Warning> : <></>}
        <F.Message id={'message'} type={"text"} placeholder={"Your message*"} required={true}/>
        <F.Button>Send message</F.Button>
      </F.Form>
    </F.Main>
  )
}

export default Form;