import React, { Component } from "react";
import "./style.css";
const os = require("os");

class App extends Component {
  constructor(){
    super()
    this.state = {
      cpu: {
        model: "",
        cores: 0,
        speed: 0,
      },
      mem: {
        free: 0,
        total: 0
      }
    }
  }

  componentDidMount(){
    this.setState({
      cpu: {
        model:  os.cpus()[0].model,
        cores:  os.cpus().length,
        speed: os.cpus()[0].speed
      }
    })

    setInterval(() => {
      this.setState({
        mem: {
          free: os.freemem(),
          total: os.totalmem(),
        }
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello {os.userInfo().username} 👋</h1>

        <div className="infos">
          <p>{this.state.cpu.model} ({this.state.cpu.cores} cores) {this.state.cpu.speed}Mhz</p>
          <p>{Math.floor(this.state.mem.total / 1024 / 1024)}Mbps ({Math.floor(this.state.mem.free / 1024 / 1024)}Mbps free)</p>
        </div>
      </div>
    );
  }
}

export default App;
