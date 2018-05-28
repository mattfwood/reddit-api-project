import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, Icon } from 'antd';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';

const { Meta } = Card;

class Post extends Component {
  render() {
    const { post, className } = this.props;
    const image = post.data.preview
      ? post.data.preview.images[0].source.url
      : '';

    return (
      <Card
        title={post.data.title}
        className={className}
        cover={<img alt="example" src={image} />}
        actions={[
          <Icon
            type="message"
          />,
          <Icon
            type="link"
            onClick={() =>
              window.open(`https://reddit.com${post.data.permalink}`)
            }
          />,
        ]}
      >
        {/* <Meta
          description="This is the description"
        /> */}
      </Card>
    );
  }
}

export default styled(Post)`
  height: calc(100vh - 90px);

  h2 {
    // color: #fff;
  }
`;
