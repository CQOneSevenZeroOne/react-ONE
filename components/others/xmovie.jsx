import React from 'react';
import $ from 'jQuery';
import Xheader from '../xheader.jsx';
import '../../template/video.css';
export default class Xmovie extends React.Component {
	constructor(){
		super();
		this.state = {
			arr:[]
		}
	}
  render() {
    return (
    <div>
    <Xheader />
    {
	  	function(self){
	  		return self.state.arr.map((item,index)=>{
	        return (
	        	<a className="videos" href="#/vdetail" key={index} data-id={item.video_id}>
				  		<header>-影视-</header>
				  		<p className="title">
				  			{item.title}
				  		</p>
				  		<b>文/{item.author}</b>
				  		<p className="img-bg">
				  			<img src={item.imgs}/>
				  		</p>
				  		<p className="cont">
				  			<span>{item.describ}</span>
				  			<em>——关于{item.about}</em>
				  		</p>
				  		<p className="times">2017/10/31</p>
				  	</a>
	        )
	      })
	    }(this)
    }
    </div>)
  }
  componentDidMount(){
  	var _this = this;
  	$.ajax({
				type:"post",
				url:"http://localhost:3000/getVideo",
				success(data){
					data = JSON.parse(data);
					_this.setState({
						arr:data
					})
					console.log(_this.state.arr)
				},
				error(){
					console.log('error');
				}
			});
	}
}
