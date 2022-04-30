import React from 'react'
import Square from './Square'

class WordRow extends React.Component{
  render(){
    const squares = []
    console.log(this.props.word)
    //no letters for row, all blank
    if(!this.props.word){
      {console.log('undefined word')}
      for(let i = 0; i<5; i++){
        
        squares.push(
          <Square value = {""}/>
        )
      }
    }
    //letters submitted for the row
    else{
      {console.log('!!defined word', this.props.word )}
      const word = this.props.word
      const correctWord = this.props.correctWord

      if(word.length == 5 && !this.props.checkSubmission){
        console.log("checking submission! ",word)
        for(let i = 0; i<word.length; i++){

          if(word.charAt(i) == correctWord.charAt(i)){
            squares.push(
              <Square value={word.charAt(i)} color={"green"}/>
            )
          }
          else if(correctWord.includes(word.charAt(i))){
            squares.push(
              <Square value={word.charAt(i)} color={"orange"}/>
            )
          }
          else{
            squares.push(
              <Square value={word.charAt(i)} color={"gray"}/>
            )
          }
          
        }
      }
      else{
        for(let i = 0; i<5; i++){
          if(word.charAt(i) === null){
            squares.push(
              <Square value = {""}/>
            )
          }
          else{
            squares.push(
              <Square value={word.charAt(i)}/>
            )
          }
        }
      }
      console.log('found word: '+word)
      
    }
    
    return(
      squares
      
    )
  }
}

export default WordRow