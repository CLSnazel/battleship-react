import React from 'react';

class BoardTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      emoji: "🌊",
    }
  }
  cycleEmoji(){
    console.log("Hello!!!");
    if (this.state.emoji === "🌊") {
      // this.state.emoji = "🔥";
      this.setState({emoji:"🔥"});
    } else if (this.state.emoji === "🔥") {
      // this.state.emoji = "⚪";
      this.setState({emoji:"⚪"});
    } else {
      // this.state.emoji = "🌊";
      this.setState({emoji:"🌊"});
    }
  }
  render() {
    //console.log(this.props, this.props.whateverProps);
    // if(this.props.boardState === undefined) {

    // }
    return(
   
        <td style={{border:'1px solid blue', cursor:'pointer'}} onClick={() => this.cycleEmoji()}>
          {this.state.emoji}
        </td>
     
    );
  }
}

export default BoardTile;