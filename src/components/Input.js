import React from "react";

class Input extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      input:"",
    }
  }

  handleInputChange = (event) =>{
    this.setState({input: event.target.value})
    //console.log(this.state.input)
  }

  handleSubmit = (event) =>{
    //console.log("submitting")
    event.preventDefault()
    this.props.onSubmit(this.state.input)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Input</label>
        <input type="text" onChange={this.handleInputChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default Input