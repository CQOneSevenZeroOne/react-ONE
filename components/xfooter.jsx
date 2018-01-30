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
    		left:0,
    		background: "#eee"
    	}}>
    		<a href="#/index/home"><img src={require("../public/img/home.png")} style={{width:"25%"}}/></a>
    		<a href="#/index/reading"><img src={require("../public/img/reading.png")} style={{width:"25%"}} /></a>
    		<a href="#/index/music"><img src={require("../public/img/music.png")} style={{width:"25%"}}/></a>
    		<a href="#/index/video"><img src={require("../public/img/movie.png")} style={{width:"25%"}}/></a>
    	</div>
    )
  }
}
export default Xfooter;
