import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"


function Login(props) {
  const [friends, setFriends] = useState({
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  });

  function handleChange(e) {
    setFriends({
      ...friends,
      credentials: {
        ...friends.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  function login(e){
    e.preventDefault()
    setFriends({...friends, isFetching: true}) 
    axiosWithAuth()
    .post("/login", friends.credentials)
    .then(res => {
        console.log("res.data", res.data)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/friends")
 
    })
    .catch(err => console.log("FAT ERROR", err))
    .finally(() => {
      setFriends({
        ...friends,
        credentials: {
          ...friends.credentials,
          username: "",
          password: ""
        }
      })
    })
  }

  return (
    <div>
      <form onSubmit = {login}>
        <input
          type="text"
          name="username"
          placeholder="login..."
          onChange={handleChange}
          value = {friends.credentials.username}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password..."
          onChange={handleChange}
          value = {friends.credentials.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
