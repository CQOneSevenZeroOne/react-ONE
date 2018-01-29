import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import Xhome from '../container/xhome.jsx';
<<<<<<< HEAD
import Xreading from '../container/xreading.jsx';
=======
import Xvideo from '../container/xvideo.jsx'
>>>>>>> 2a4c6291f08d780573c4c3ccb286e24b114a6718
import Xfooter from '../xfooter.jsx';
export default class Xindex extends React.Component{
	render(){
		return (
			<div>
				<Route path="/index/home" component={Xhome}/>
<<<<<<< HEAD
				<Route path="/index/reading" component={Xreading}/>
=======
				<Route path="/index/video" component={Xvideo}/>
>>>>>>> 2a4c6291f08d780573c4c3ccb286e24b114a6718
				<Xfooter />
			</div>
		)
	}
}