import React from 'react';
import $ from 'jquery';
export default class Xonepicture extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dataArr:[]
		}
	}
	render() {
		return(
			<div className="home_content">
				<div className="item-text">                 
					<p className="item-picture-date">2018 / 01 / 29</p>                 
					<p className="issue-no">VOL.1941</p>                 
					<a className="div-link" href=""><img alt="" src={require("../../public/img/home_item1.jpg")} /></a>  
					<p className="picture-author">插画 | 舒然</p>                 
					<p className="picture-content">爱情的到来，其实是件惊天动地的事。那是因为他带着他的过去和现在，还有未来一起到来了。</p>                 
					<p className="picture-author">《今生是第一次》</p>
				</div>
				<div className="item-text">                 
					<p className="item-picture-date">2018 / 01 / 28</p>                 
					<p className="issue-no">VOL.1940</p>                 
					<a className="div-link" href=""><img alt="" src={require("../../public/img/home_item1.jpg")} /></a>                 
					<p className="picture-author">插画 | 舒然</p>                 
					<p className="picture-content">爱情的到来，其实是件惊天动地的事。那是因为他带着他的过去和现在，还有未来一起到来了。</p>                 
					<p className="picture-author">《今生是第一次》</p>
				</div>
			</div>
		)
	}
	getAllPicInfo(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"",
			async:true,
			dataType:'json',
			success(data){
				
			}
		});
	}
}