import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Login,Register } from "./Components/login/index";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      isLogginActive:true
    }
  }

  changeState(){
    const {isLogginActive} =this.state;
    if(isLogginActive){
      this.TopSide.classList.remove("right");
      this.TopSide.classList.add("left");
    }else{
      this.TopSide.classList.remove("left");
      this.TopSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));

  }

  render(){
    const {isLogginActive} =this.state;
    const current = isLogginActive ? "Register" : "Login";
    const CurrentActive = isLogginActive ? "login" : "register";

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login containerRef={ (ref) => this.current = ref} />}
          {!isLogginActive && <Register containerRef={ (ref) => this.current = ref} />}
        </div>
        <TopSide current={current} containerRef={ref => this.TopSide = ref} onClick={this.changeState.bind(this)} />
      </div>
    </div>
  );
  }
}

const TopSide = props =>{
  return <div
  className="top-side" ref={props.containerRef} onClick={props.onClick}>
  <div className="inner-container">
    <div className="text">{props.current}</div>
  </div>
</div>
}


export default App;
