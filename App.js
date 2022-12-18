import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('name')
  const [email, setEmail] = useState('email')
  const [desc, setDesc] = useState('desc')
  const submitForm = async (e) => {
    e.preventDefault()
    setName(document.querySelector('#name').value)
    setEmail(document.querySelector('#email').value)
    setDesc(document.querySelector('#desc').value)
    const res = await fetch("https://fir-5aaa9-default-rtdb.firebaseio.com/check.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "desc": desc
        })
      })
    console.log(res)
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#desc').value = ''

  }
  return (
    <div className="App">
      <h1>This is form</h1>
      {/* <form action="https://fir-5aaa9-default-rtdb.firebaseio.com/" method='POST'> */}
      Name : <input type="text" name='text' onChange={(e)=>{setName(e.target.value)}} autoComplete='off' id='name' placeholder='Enter your name' /><br /><br />
      Email : <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email' /><br /><br />
      Description : <input type="text" id="desc" name='desc' onChange={(e)=>{setDesc(e.target.value)}} placeholder='Enter your Description' /><br /><br />
      <button onClick={submitForm}> Submit </button>
      {/* </form> */}
    </div>
  );
}

export default App;
