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
    name:"测试",
    src:"",
    isShowGallery:false,
<<<<<<< HEAD
    reading_id:""
    
=======
    videoId:"",
    vlength:0,
    music_id:0,
    src:'',
	isShow:false
>>>>>>> 0f621648a70fcac23634bbf4945bbb80f2e24548
},action)=>{
    switch(action.type){
     	case "changeSrc":
			return Object.assign({},state,{
				src:action.src,
				isShow:action.isShow
			})
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
<<<<<<< HEAD
    	case "readingId":
    		return Object.assign({}, state, {
            	reading_id: action.id
            })
    		break;
    		case "Next":
    		return Object.assign({}, state, {
            	reading_id: action.reading_id
            })
    		break;
    		case "Prev":
    		return Object.assign({}, state, {
            	reading_id: action.reading_id
            })
=======
    	case "SaveMusic_id":
    		return Object.assign({}, state, {
            	music_id: action.music_id            	
			})
>>>>>>> 0f621648a70fcac23634bbf4945bbb80f2e24548
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
<<<<<<< HEAD
                <Route path="/picdetail" component={Xpicturedetail}></Route>   
=======
                <Route path="/picdetail/:id" component={Xpicturedetail}></Route>   
>>>>>>> 0f621648a70fcac23634bbf4945bbb80f2e24548
>>>>>>> b6ce5548c659ee1f8c453f256ae53d0693dfaba8
                <Route path="/vdetail" component={Xvdetail}></Route>
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))