import React from 'react'
import Square from './Square'
import Input from './Input'
import Rows from './Rows'

class Board extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      attempts: [],
      word: "maple",

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
        
        <Rows attempts={this.state.attempts} correctWord={this.state.word}/>
        <Input onSubmit={this.handleSubmitWord}/>
      </div>
    )
    
  }
}

export default Board