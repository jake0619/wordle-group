import React from 'react'
import Square from './Square'

class WordRow extends React.Component{
  render(){
    const squares = []
    console.log(this.props.word)
    if(!this.props.word){
      {console.log('undefined word')}
      for(let i = 0; i<5; i++){
        
        squares.push(
          <Square value = {""}/>
        )
      }
    }
    else{
      const word = this.props.word
      console.log('found word: '+word)
      for(let c of word){
        squares.push(
          <Square value={c}/>
        )
      }
    }
    
    return(
      squares
      
    )
  }
}

export default WordRow