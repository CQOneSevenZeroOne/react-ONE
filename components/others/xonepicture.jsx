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
			{
				function(self){
					return self.state.dataArr.map((item,index)=>{
						return (
							<div className="item-text" key={index} data-id={item.id}>                 
								<p className="item-picture-date">{item.pic_date}</p>                 
								<p className="issue-no">{item.issue}</p>                 
								<a className="div-link" href=""><img alt="" src={item.picture} /></a>  
								<p className="picture-author">{item.author} | {item.sort}</p>                 
								<p className="picture-content">{item.pic_describe}</p>                 
								<p className="picture-author">{item.pic_name}</p>
							</div>
						)
					})
				}(this)
			}
			</div>
		)
	}
	componentDidMount(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://localhost:3000/getAllOne",
			async:true,
			dataType:'json',
			success(data){
				_this.setState({
					dataArr:data
				})
			}
		});
	}
}