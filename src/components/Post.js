import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

class Post extends Component {
  render() {
    const { post, className } = this.props;
    const image = post.data.preview
      ? post.data.preview.images[0].source.url
      : '';
    return (
      <div className={className}>
        <Row>
          <Col span={24}>
          <h2>{post.data.title}</h2>
          </Col>
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
