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
    // if (this.state.emoji === "🌊") {
    //   // this.state.emoji = "🔥";
    //   this.setState({emoji:"🔥"});
    // } else if (this.state.emoji === "🔥") {
    //   // this.state.emoji = "⚪";
    //   this.setState({emoji:"⚪"});
    // } else {
    //   // this.state.emoji = "🌊";
    //   this.setState({emoji:"🌊"});
    // }
    if (this.props.ship) {

    }
  }
  render() {
    //console.log(this.props, this.props.whateverProps);
    // if(this.props.boardState === undefined) {

    // }
    return(
   
        // <td style={{border:'1px solid blue', cursor:'pointer'}} onClick={() => this.cycleEmoji()}>
        //   {/* {this.showShips ? this.props.ship : this.state.emoji} */}
        //   {this.props.showShips && this.props.ship ? this.props.ship : this.state.emoji}
        //   {/* {this.props.emoji} */}
        //   {/* {this.showShip ?} */}
        // </td>
        <td style={{border:'1px solid blue', cursor:'pointer'}} onClick={() => {
          //let newState = ;
          this.props.parentCallback(this.props.row, this.props.col, "🔥")
          }}>
        {/* {this.showShips ? this.props.ship : this.state.emoji} */}
        {this.props.showShips && this.props.ship ? this.props.ship : this.state.emoji}
        {/* {this.props.emoji} */}
        {/* {this.showShip ?} */}
      </td>
    );
  }
}

export default BoardTile;