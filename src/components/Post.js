import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'

class Post extends Component {
  render() {
    const { post, className } = this.props;
    const image = post.data.preview
      ? post.data.preview.images[0].source.url
      : '';

    // let video = '';
    // if (post.data.media) {
    //   video = decodeURI(post.data.media.oembed.html.split('src="')[1].split('" width')[0]);
    //   console.log(video);
    // }
    return (
      <div className={className}>
        <Row>
          <Col span={24}>
          <h2>{post.data.title}</h2>
          </Col>
          <ReactPlayer url="https://imgur.com/fpCXK0t" playing />
        </Row>
        {image !== '' && <img src={image} />}
      </div>
    );
  }
}

export default styled(Post)`
  height: calc(100vh - 90px);

  h2 {
    color: #fff;
  }
`;
