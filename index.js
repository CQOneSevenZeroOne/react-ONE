import ReactDOM from 'react-dom';
import React from 'react'
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//选项卡组件
import Xindex from "./components/tab/xindex.jsx";
import Xmusic_detail from "./components/tab/xmusic_detail.jsx";
import Xreading_detail from "./components/tab/xreading_detail.jsx";
import Xpicturedetail from "./components/tab/xpicturedetail.jsx";
import Xvdetail from "./components/others/xvdetail.jsx";

const store = createStore((state={
<<<<<<< HEAD
    src:'',
	isShow:false
},action)=>{
    switch(action.type){
     	case "changeSrc":
			return Object.assign({},state,{
				src:action.src,
				isShow:action.isShow
			})
			break;
		default:
			return state;
=======
    name:"测试",
    src:"",
    isShowGallery:false,
    videoId:"",
    vlength:0
},action)=>{
    switch(action.type){
    	case "changeName":
    		return {}
    		break;
     	case "changeVid":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
            	vlength: action.vlength
          	})
    		break;
     	case "toNext":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
          	})
    		break;
    	case "toPrev":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
          	})
    		break;
     	default:
     		return state
>>>>>>> 88b8bf461d8e5faa315c3ea27cab0b25c3e963de
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
				<Route path="/music_detail" component={Xmusic_detail}></Route>
                <Route path="/reading_detail" component={Xreading_detail}></Route>
                <Route path="/index" component={Xindex}></Route>
<<<<<<< HEAD
                <Route path="/picdetail/:id" component={Xpicturedetail}></Route>   
=======
                <Route path="/picdetail" component={Xpicturedetail}></Route>   
>>>>>>> 88b8bf461d8e5faa315c3ea27cab0b25c3e963de
                <Route path="/vdetail" component={Xvdetail}></Route>
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))