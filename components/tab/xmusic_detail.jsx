import React from 'react';
import Xheader  from '../xheader.jsx';
import Xmdetail  from '../others/xmdetail.jsx';
import Xshare  from '../xshare.jsx';
class Xmusic_detail extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
		return (
            <div>
                <Xheader />
                <Xmdetail />
                <Xshare />
            </div>
        )
	}
}
export default Xmusic_detail