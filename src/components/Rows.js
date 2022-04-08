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
    

    //if an attempt has been made
    for(let i = 0; i<6; i++){
      divs.push(
        <div key={i} className='rowOfSquares'>
        {console.log(arrOfAttempts[i])}
        <WordRow word={arrOfAttempts[i]}/>
        </div>
      )
      
    }
    


    return(
      divs
    )
  }
}

export default Rows