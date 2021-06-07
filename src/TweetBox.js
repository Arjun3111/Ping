import React, { useState } from 'react';
import './TweetBox.css' ;
import { Avatar, Button } from "@material-ui/core";
import firebaseApp from './firebase' ;

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const db = firebaseApp.firestore() ;

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Arjun Dev Singh",
      username: "arjunSSSS",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "S" 
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar>N</Avatar>
          <input
            onChange = {(e) => setTweetMessage(e.target.value)}
            value= { tweetMessage }
            placeholder="What's happening?"
            type="text"
          />

          <input
            onChange = {(e) => setTweetImage(e.target.value) }
            value={ tweetImage }
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} type='submit'>Ping!</Button>
      </form>
    </div>        
  )
}

export default TweetBox ;
