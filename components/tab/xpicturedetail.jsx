import React from 'react';
import Xheader from '../xheader.jsx';
import "../../template/home.css";
export default class Xpicturedetail extends React.Component {
	render(){
		return (
			<div className="detail-content">
				<Xheader />
				<img src={require("../../img/home_item1.jpg")} style={{width:"100%"}}/>
				<p className="text-author"><span className="picture-detail-issue-no">VOL.1941</span>插画 | 舒然</p>
				<p className="day">29</p>
				<p className="month">Jan. 2018</p>
				<div className="separate-line"></div>
				<p className="text-content">爱情的到来，其实是件惊天动地的事。那是因为他带着他的过去和现在，还有未来一起到来了。</p>
				<div className="download">
				    <a href="http://m.wufazhuce.com/download" className="ui-link">
				        <img alt="「ONE · 一个」" className="one-image-exclude logo-img" src={require("../../img/app_download.png")} /></a>
				    <p className="download-text">下载「一个」APP
				    </p>
				</div>
			</div>
		)
	}
}