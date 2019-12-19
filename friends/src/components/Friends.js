import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsForm from "./FriendsForm";
function Friends() {
  const [friends, setFriends] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res.data, "Friend Data");
        setFriends(res.data);
      })
      .catch(err => console.log("FAAAT ERR", err));
  }, []);

  return (
    <div>
      <h1>My Various Friends!</h1>     
      <FriendsForm friends = {friends} setFriends = {setFriends}/>
      {!friends && <h1>They're real I swear!</h1>}
      {friends &&
        friends.map(friend => {
          return (
          <div>
            <h1>{friend.name}</h1>
            <h1>{friend.age}</h1>
            <h1>{friend.email}</h1>
          </div>)
        })}
    </div>
  );
}

export default Friends;

