import React, {useEffect, useState} from 'react'
import {Row, Col, Avatar, Card, List} from 'antd'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const {Meta} = Card;
function VideoDetailPage(props) {
    const [VideoDetails, setVideoDetails] = useState([])
    // App.js에서 라우팅에 videoId를 이용해서 쉽게 읽어올 수 있음
    useEffect(() => {
        axios.post("/api/video/getVideoDetail", variable)
            .then( res => {
                if(!res.data.success) {
                    alert("비디오 가져오기 실패!")
                }
                setVideoDetails(res.data.video);
                console.log(res.data);
            }) 
    }, [])
    
    const videoId = props.match.params.videoId;
    const variable = {videoId}
    return (
        <div>
            {VideoDetails &&
                <Row gutter={[16,32]}>
                    <Col lg={18} xs={24}>
                        <div style={{width: "100%", padding:"3rem 4rem"}}>
                        
                            <video style={{width: "100%"}} src={`http://localhost:5000/${VideoDetails.filePath}`} controls/>
                            <List.Item actions >
                                <List.Item.Meta
                                    avatar={<Avatar src={VideoDetails.writer && VideoDetails.writer.image} />}
                                    title={VideoDetails.title} description={VideoDetails.description}/>
                            </List.Item>
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default withRouter(VideoDetailPage);