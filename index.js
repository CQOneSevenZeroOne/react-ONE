import ReactDOM from 'react-dom';
import React from 'react'
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//选项卡组件
import Xindex from "./components/tab/xindex.jsx";
<<<<<<< HEAD
import Xreading_detail from "./components/tab/xreading_detail.jsx";
=======
import Xpicturedetail from "./components/tab/xpicturedetail.jsx";
import Xvdetail from "./components/others/xvdetail.jsx";

>>>>>>> 2a4c6291f08d780573c4c3ccb286e24b114a6718

const store = createStore((state={
    name:"测试",
    src:"",
    isShowGallery:false
},action)=>{
    switch(action.type){
    	case "changeName":
    		return {}
    		break;
     	case "changeSrc":
    		return Object.assign({}, state, {
            	src: action.src,
            	isShowGallery: action.isShowGallery
          	})
    		break;
     	default:
     		return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
<<<<<<< HEAD
                <Route path="/index" component={Xindex}></Route>
                <Route path="/reading_detail" component={Xreading_detail}></Route>
=======
                <Route path="/" component={Xindex}></Route>
                <Route path="/picdetail" component={Xpicturedetail}></Route>   
                <Route path="/vdetail" component={Xvdetail}></Route>
>>>>>>> 2a4c6291f08d780573c4c3ccb286e24b114a6718
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))