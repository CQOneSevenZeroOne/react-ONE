import React from 'react';
import "../../template/base.css";
class Xmusic_content extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
		return (
        <div className='music_list'>
            <div className='music_box'>
                <div className="item-text link-div">
                    <p className="text-tag">- 音乐 -</p>
                    <p className="text-title ellipsis-row2">
                        <a className="div-link" href="http://m.wufazhuce.com/music/2361">这个世界未必所有事都如你所愿，但总有它的意思</a>
                    </p>
                    <p className="text-author ellipsis-row1">文／馆长Jeekit</p>
                    <div className="text-music-cover">
                        <div className="text-music-cover-background">&nbsp;</div>
                        <div className="text-music-cover-img">
                            <img className="lazy_img resize_img img_center_y" src="http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig" style={{display:'inline'}}/>
                        </div>
                        <div className="music-play music-detail-status">
                            <img className="play-btn" src="http://image.wufazhuce.com/play_btn_empty.png"/> 
                        </div>
                            <img src="http://image.wufazhuce.com/music_copyright_1.png" width="100%" className="platform-icon"/>
                    </div>
                    <p className="text-music-author ellipsis-row1">替你高兴 · 谢安琪 | Slowness</p>
                    <p className="text-content-short ellipsis-row2">上路去，别太挂念这里。</p>
                    <p className="date">2017/8/20</p>
                </div>
            </div>
        </div>
        )
	}
}
export default Xmusic_content