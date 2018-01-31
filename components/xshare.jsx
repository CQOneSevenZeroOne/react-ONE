/*import React from "react";
import $ from 'jQuery';
import {connect} from "react-redux";
import "../template/reading.css";
class Xshare extends React.Component {
  constructor(props) {
    super(props);
    	this.state = {
			arr:[]
		}
  }
  render() {
    return (<div className="vfooter">
			<span onClick={this.props.toPrev.bind(this)}>上一篇</span>
			<a href="#/index/reading">返回</a>
			<span onClick={this.props.toNext.bind(this)}>上一篇</span>
		</div>
	)
  }
   readList(){
  	var _this = this;
  	console.log("ajax",_this.props.reading_id)
  	$.ajax({
			type:"post",
			url:"http://localhost:3000/getReading_detail",
			dataType:"json",
			data:{
				readId:_this.props.reading_id
			},
			success(data){
				if(data.length!=0){
					_this.setState({
						arr: data
					})
				}
			},
			error(){
				console.log('error');
			}
		});
  }
  componentDidMount(){
  	this.readList();
	}
}
export default connect((state)=>{
	console.log(state)
	return state
},(dispatch,props)=>{
	return {
			toNext(){
			console.log("tonext",this.props.reading_id)
			if(this.props.reading_id<this.props.rlength){
				dispatch({
					type:"toNext",
					reading_id:Number(this.props.reading_id)+1
				})
				console.log("success",this.props.reading_id)
				this.readList()
			}else if(this.props.reading_id==this.props.rlength){
				this.readList()
			}
		},
		toPrev(){
			console.log("toprev",this.props.reading_id)
			if(this.props.reading_id>1){
				dispatch({
					type:"toPrev",
					reading_id:Number(this.props.reading_id)-1
				})
				console.log("success",this.props.reading_id)
				this.readList()
			}else if(this.props.reading_id==1){
				this.readList()
			}
		}
	}
}) (Xshare);
*/