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
    name:"测试",
    src:"",
    isShowGallery:false,
    videoId:"",
    vlength:0,
    music_id:0,
    src:'',
	isShow:false
},action)=>{
    switch(action.type){
    	case "changeName":
    		return {}
    		break;
     	case "SaveMusic_id":
    		return Object.assign({}, state, {
            	music_id: action.music_id            	
			})
    		break;
=======
    src:'',
	isShow:false,
    isShowGallery:false,
    videoId:"",
    vlength:0
},action)=>{
    switch(action.type){
     	case "changeSrc":
			return Object.assign({},state,{
				src:action.src,
				isShow:action.isShow
			})
			break;
>>>>>>> 1d45e5c3756aa7bad49938e322a19d2aeef00052
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
    	case "changeSrc":
			return Object.assign({},state,{
				src:action.src,
				isShow:action.isShow
			})
			break;
     	default:
     		return state
    }
})

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
                <Route path="/picdetail/:id" component={Xpicturedetail}></Route>
>>>>>>> 1d45e5c3756aa7bad49938e322a19d2aeef00052
                <Route path="/picdetail" component={Xpicturedetail}></Route>   
                <Route path="/vdetail" component={Xvdetail}></Route>
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))