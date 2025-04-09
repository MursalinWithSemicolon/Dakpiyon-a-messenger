import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      progress:0,
    }
  }

  setProgress = (progress) => { // ✅ Corrected function
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Navbar tittle="Dakpiyon"/>
        <LoadingBar
          color="#9F0000"
          progress={this.state.progress}
        />
        <News setProgress={this.setProgress} />  {/* ✅ Passed as reference */}
      </div>
    );
  }
}
