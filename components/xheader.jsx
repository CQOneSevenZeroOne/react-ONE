import React from 'react';

export default class Xheader extends React.Component {
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
      			<img src={require("../img/icon_menu.png")} />
      			<span>ONE</span>
      			<img src={require("../img/search_min.png")} style={{width:"18px",height:"18px"}} />
      </header>
    </div>)
  }
}
