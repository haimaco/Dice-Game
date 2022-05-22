import React from "react"
// import App from "."
import "./Game.css"
export default class Game extends React.Component{
    state = {dice1:null,dice2:null};

      componentDidMount() {
    const rand1 = Math.ceil(Math.random() * 6);
    const rand2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${rand1}`, dice2: `dice${rand2}` });
  }

  onRollDiceClick2 = () => {
    const rand1 = Math.ceil(Math.random() * 6);
    const rand2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${rand1}`, dice2: `dice${rand2}` });
  };
    render(){
        return (
            <div className="container">
              <Player name="player 1" scoreTotal ="200" scoreCurrent="0" classStyle="show" />
            <Controller diceA={this.state.dice1}diceB={this.state.dice2} onRollDiceClickProp={this.onRollDiceClick2}/>
              <Player name="player 2" scoreTotal ="130" scoreCurrent="0" classStyle="shine" />
            </div>
        )  ;      
    }
}
    function Player(props){
        return (
        <div className={`Player ${props.classStyle}`} >
            <h1>{props.name}</h1>
            <h2>Total:{props.scoreTotal}</h2>
            <div className="current-score">Current:{props.scoreCurrent}</div>
        </div>
        );
    }
    function Controller(props){
        return(
        <div className="controller2">
            <button >+NEW GAME</button>
            <div className={`Dice-11= ${props.diceA}`}></div>
            <div className={`Dice-11= ${props.diceB}`}></div>
            <button onClick={props.onRollDiceClickProp}>ROLL DICE</button>
            <button >HOLD</button>
            <input />
        </div>
        );
    }