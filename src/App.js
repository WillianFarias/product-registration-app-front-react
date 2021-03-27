import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  return (
    <div className="App">

      const [movieName, setMovieName] = useState("");
      const [review, setReview] = useState("");

      const submitReview = () => {
        Axios.post('http://localhost:3001/api/insert', { 
          movieName: movieName,
          movieReview: review,
         }).then(() => {
           alert("sucessful insert");
         })
      };

      <h1>Product Registration</h1>

      <div className="form">
        <label>Name</label>
        <input type="text" name="movieName" onChange={
          (e) => {
            setMovieName(e.target.value)
          }} />

        <label>Description</label>

        <input
          type="text"
          name="review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />

        <button onClick={submitReview}>Submit</button>
      </div>

    </div>
  );
}

export default App;
