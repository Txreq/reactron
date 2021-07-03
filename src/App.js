import React, { Component } from 'react';

const os = require("os")

function App() {
  return (
    <div>
      <h1>Hello {os.userInfo().username}</h1>
    </div>
  );
}

export default App;