import ReactDOM from 'react-dom';
import React from 'react'
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import "weui";
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//选项卡组件
import Xindex from "./components/tab/xindex.jsx";
import Xdetail from "./components/tab/xdetail.jsx";

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
                <Route path="/index" component={Xindex}></Route>
                <Route path="/detail" component={Xdetail}></Route>
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))