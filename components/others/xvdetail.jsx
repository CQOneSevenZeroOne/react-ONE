import React from 'react';
import Xheader from '../xheader.jsx';
import '../../template/video.css';
export default class Xvdetail extends React.Component {
  render() {
    return (
    <div>
    	<Xheader />
    	<div className="vdetail">
				<div className="title">
					<img src={require("../../img/video11.jpg")}/>
					<h3>
						豆瓣9.9，再也找不到比它评价更牛的剧了
						<em>——关于《瑞克和莫蒂 第三季》</em>
					</h3>
					<span>文/鱼叔</span>
				</div>
				<div className="cont">
					<p>所谓九分神剧，就是大家喜欢把评分9分以上的剧，封为神剧。</p>
					<p>这样的剧，其实还不少。</p>
					<p>《请回答1998》《权力的游戏》《毒枭》《我们这一天》《秘密森林》……都在九分神剧的范畴内。</p>
					<p>但一部剧的评分想要达到9.9，那就少的可怜。</p>
					<p>鱼叔只找到这一部——瑞克和莫迪 第三季 </p>
					<img src={require("../../img/video11.jpg")}/>
					<p>两年前的这个时候，鱼叔向大家推荐过这部剧。</p>
					<p>那时，正好是第二季结尾的时候。</p>
				</div>
			</div>
			<div className="vfooter">
				<span>上一篇</span>
				<a href="#/index/video">返回</a>
				<span>下一篇</span>
			</div>
    </div>)
  }
}
