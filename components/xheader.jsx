import React from 'react';

export default class Xheader extends React.Component {
  render() {
    return (<div>
      <header style={{
          height: "50px",
          lineHeight: "50px",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "red"
        }}>今日头条</header>
    </div>)
  }
}
