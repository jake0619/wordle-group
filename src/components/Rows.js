import React from "react";
import Square from './Square'
import WordRow from './WordRow'

class Rows extends React.Component{


  initFilledRow = (paramDivs) =>{
    
  }


  initEmptyRow = () =>{

  }

  render(){
    const divs = []
    const arrOfAttempts = this.props.attempts
    const currAttempt = this.props.currAttempt
    const currWord = this.props.currWord

    //if an attempt has been made
    for(let i = 0; i<6; i++){

      if(i == currAttempt){
        divs.push(
          <div key={i} className='rowOfSquares'>
          {console.log("pushing currAttempt")}
          <WordRow word={currWord} correctWord={this.props.correctWord}/>
          </div>
        )
        
      }
      else{
        divs.push(
          <div key={i} className='rowOfSquares'>
          {console.log("pushing non currAttempt")}
          <WordRow word={arrOfAttempts[i]} correctWord={this.props.correctWord}/>
          </div>
        )
      }
      
      
    }
    


    return(
      divs
    )
  }
}

export default Rows