import React from "react";
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="weui-tab">
      <div className="weui-tab__panel"></div>
      <div className="weui-tabbar" style={{
          position: "fixed"
        }}>
        <a href="#/index/wechat" className="weui-tabbar__item weui-bar__item_on">
          <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon"/>
          <p className="weui-tabbar__label">微信</p>
        </a>
        <a href="#/index/contact" className="weui-tabbar__item">
          <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon"/>
          <p className="weui-tabbar__label">通讯录</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
          <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon"/>
          <p className="weui-tabbar__label">发现</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
          <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon"/>
          <p className="weui-tabbar__label">我</p>
        </a>
      </div>
    </div>)
  }
}
export default Xfooter;
