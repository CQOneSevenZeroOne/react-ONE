import React from 'react';
import $ from 'jQuery';
import Xheader from '../xheader.jsx';
import { connect } from 'react-redux';
import '../../template/video.css';
class Xvdetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: []
		}
	}
	render() {

		return(
			<div>
				<Xheader />
				<div className="vdetail">
    	{
    		function(self){
    			return self.state.arr.map((item,index)=>{
		        return (
		        		<div key={index}>
    							<div className="title" >
										<img src={require("../../img/video11.jpg")}/>
										<h3>
											{item.title}
											<em>——关于{item.about}</em>
										</h3>
										<span>文/{item.author}</span>
									</div>
									<div className="cont">
										{item.vcont}
									</div>
    						</div>
		        )
		    	})
    		}(this)
    	}
    	<div className="vfooter">
				<span>上一篇</span>
				<a href="#/index/video">返回</a>
				<span>下一篇</span>
			</div>
    </div>
   </div>
		)
	}
	componentDidMount() {
		var _this = this;
		console.log(this.props.videoId)
		$.ajax({
			type: "post",
			url: "http://localhost:3000/getVideoAll",
			data: {
				id: _this.props.videoId
			},
			success(data) {
				data = JSON.parse(data);
				_this.setState({
					arr: data
				})
			}
		});
	}
}
export default connect((state) => {
	return state
}, (dispatch) => {
	return {

	}
})(Xvdetail);