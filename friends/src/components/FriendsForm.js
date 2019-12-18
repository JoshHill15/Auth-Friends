import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"


function FriendsForm(props) {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    age: ""
  });
//   console.log("props", props.friends)
  function change(e) {
    return setvalues({ ...values, [e.target.name]: e.target.value });
  }

  function submit(e){
    e.preventDefault()
    console.log(values)

    axiosWithAuth()
    .post("/friends", values)
    .then(res => {
        console.log("form res",res)
        props.setFriends([...props.friends, values])
    })
    .catch(err => console.log("fattt err", err))
    .finally(() => {
        setvalues({
            ...values,
            name: "",
            email: "",
            age: ""
        })
    })
  }

  return (
    <div>
      <form onSubmit = {submit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={change}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={change}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={values.age}
          onChange={change}
        />
        <button type = "submit">Add Friend!</button>
        {/* {!props.friends && <h1>They're real I swear!</h1>}
        {props.friends &&
        props.friends.map(friend => {
          return (
          <div>
            <h1>{friend.name}</h1>
            <h1>{friend.age}</h1>
            <h1>{friend.email}</h1>
          </div>)
        })} */}
      </form>
    </div>
  );
}

export default FriendsForm;
