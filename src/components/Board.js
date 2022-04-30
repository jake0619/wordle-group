import React from 'react'
import Square from './Square'
import Input from './Input'
import Rows from './Rows'
import Keyboard from './keyboard'

class Board extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      //keeps track of full words submitted
      attempts: [],
      //word to guess
      word: "maple",
      //keeps track of # of attempts
      attempt: 0, 
      //keeps track of current word
      currWord: ""
    }
  }


  //resets game
  resetGame = () =>{
    this.setState({
      attempts: [],
      attempt: 0, 
      currWord: ""
    })
  }


  //keyboard button presses
  handleKeyClicked = (input) =>{
    if(input === "del"){
      this.setState({
        currWord: this.state.currWord.slice(0, -1)
      })
      console.log("delete clicked! ", this.state.currWord)
    }
    //if enter is clicked and the word is 5 letters long
    else if(input === "enter" && this.state.currWord.length == 5){
      this.setState({
        attempts: this.state.attempts.concat(this.state.currWord),
        attempt: this.state.attempt+1,
        currWord: ""
      })
      console.log("enter clicked! ", this.state.currWord)
      console.log("Attempt increased to ", this.state.attempt)
    }
    //adding letters to currWord
    else{
      if(this.state.currWord.length < 5 && input != "enter"){

        this.setState({
          currWord: this.state.currWord+=input
        })
        
        console.log("letter key clicked! ", this.state.currWord)
      }
      
    }
    
  }

  handleSubmitWord = (input) =>{
    const attempts = this.state.attempts
    if(attempts.length <6){
      if(input.length == 5){
        this.setState({
          attempts: attempts.concat([input])
        })
      }
      
    }
    
    //setTimeout(() => {  console.log(this.state.attempts); }, 1000);
  }

  render(){
    return(
      <div>
        
        <Rows attempts={this.state.attempts} 
              correctWord={this.state.word} 
              attempt={this.state.attempt}
              currWord={this.state.currWord}/>
        <br></br>
        <Input onSubmit={this.handleSubmitWord}/>
        <br></br>
        <Keyboard onKeyClicked={this.handleKeyClicked}/>
      </div>
    )
    
  }
}

export default Board