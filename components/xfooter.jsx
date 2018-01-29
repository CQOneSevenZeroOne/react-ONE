import React from "react";
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div style={{
    		position:"fixed",
    		bottom:0,
    		left:0
    	}}>
    		<img src={require("../img/home.png")} style={{width:"25%"}}/>
    		<img src={require("../img/reading.png")} style={{width:"25%"}} />
    		<img src={require("../img/music.png")} style={{width:"25%"}}/>
    		<img src={require("../img/movie.png")} style={{width:"25%"}}/>
    	</div>
    )
  }
}
export default Xfooter;
