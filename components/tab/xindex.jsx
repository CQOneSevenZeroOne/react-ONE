import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import Xhome from '../container/xhome.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
import Xmusic from '../container/xmusic.jsx';
=======
import Xreading from '../container/xreading.jsx';
>>>>>>> fc6517a6dfbb9343427e17f742696b35f91e9827
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
<<<<<<< HEAD
				<Route path="/index/music" component={Xmusic}/>
=======
				<Route path="/index/reading" component={Xreading}/>
>>>>>>> fc6517a6dfbb9343427e17f742696b35f91e9827
=======
				<Route path="/index/video" component={Xvideo}/>
>>>>>>> 2a4c6291f08d780573c4c3ccb286e24b114a6718
				<Xfooter />
			</div>
		)
	}
}