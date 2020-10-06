import React from 'react';

class BoardTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      emoji: "🌊",
    }
  }
  changeEmoji(){
   
    let newEmoji = "";
    
    if (this.props.ship !== "⚪" && this.props.ship !== "") {
      newEmoji = "🔥";
    } else {
      newEmoji = "⚪"
    }
        
    console.log("Hello!!!", newEmoji);
    return newEmoji;
  }
  render() {

    return(
   
        <td style={{border:'1px solid blue', cursor:'pointer', fontSize:"1.5em"}} onClick={() => {
          let newState = this.changeEmoji();
          if (newState !== "" && this.props.ship !== newState) {
            this.props.parentCallback(this.props.row, this.props.col, newState);
          }
          }}>
        
        {this.props.showShips && this.props.ship ? this.props.ship : this.props.ship === "⚪" || this.props.ship === "🔥" ? this.props.ship : "🌊"}
   
      </td>
    );
  }
}

export default BoardTile;