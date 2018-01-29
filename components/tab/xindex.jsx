import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import Xhome from '../container/xhome.jsx';
import Xvideo from '../container/xvideo.jsx'
import Xfooter from '../xfooter.jsx';
export default class Xindex extends React.Component{
	render(){
		return (
			<div>
				<Route path="/index/home" component={Xhome}/>
				<Route path="/index/video" component={Xvideo}/>
				<Xfooter />
			</div>
		)
	}
}