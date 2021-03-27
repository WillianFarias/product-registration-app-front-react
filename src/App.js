import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Product Registration</h1>

      <div className="form">
        <label>Name</label>
        <input type="text" name="productName" />

        <label>Description</label>
        <input type="text" name="productDescrition" />

        <button>Submit</button>
      </div>

    </div>
  );
}

export default App;
