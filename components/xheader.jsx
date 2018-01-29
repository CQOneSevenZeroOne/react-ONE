import React from 'react';

export default class Xheader extends React.Component {
	constructor(props){
		super(props);
		this.state={
			leftVal:"-150px"
		}
	}
  render() {
    return (<div>
      <header style={{
      	display:"flex",
      	justifyContent: "space-between",
		    alignItems: "center",
		    flexDirection: "row",
        height: "50px",
        padding:"0 20px",
        textAlign: "center",
        backgroundColor: "#fff"
        }}>
      			<img src={require("../img/icon_menu.png")}  onClick={this.changeLeft.bind(this)}/>
      			<span>ONE</span>
      			<img src={require("../img/search_min.png")} style={{width:"18px",height:"18px"}} />
      </header>
      <ul className="sideMenu" style={{left:this.state.leftVal}}>
      	<li><a href="#">App下载</a></li>
      	<li><a href="#">关于</a></li>
      </ul>
    </div>)
  }
  changeLeft(){
  	this.setState({
  		leftVal:"0px"
  	})
  }
}
