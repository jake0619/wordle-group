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
    const currAttempt = this.props.attempt
    const currWord = this.props.currWord

    //generate rows
    for(let i = 0; i<6; i++){
      //generating row for current guess
      console.log("comparing attempt ", this.props.attempt, " to current row iter ", i)
      if(i == currAttempt){
        divs.push(
          <div key={i} className='rowOfSquares'>
          {console.log("pushing currAttempt")}
          <WordRow checkSubmission={true} word={currWord} correctWord={this.props.correctWord}/>
          </div>
        )
        
      }
      //populating old submitted words or non submitted words
      else{
        divs.push(
          <div key={i} className='rowOfSquares'>
          {console.log("pushing non currAttempt")}
          <WordRow checkSubmission={false} word={arrOfAttempts[i]} correctWord={this.props.correctWord}/>
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