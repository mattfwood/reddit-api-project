import React, { Component } from 'react';
import styled from 'styled-components';

class Post extends Component {
  render() {
    const { post, className } = this.props;
    const image = post.data.preview ? post.data.preview.images[0].source.url : ''
    return (
      <div className={className}>
        {post.data.title}
        {image !== '' && (
          <img src={image} />
        )}
      </div>
    )
  }
}

export default styled(Post)`
  height: calc(100vh - 75px);
`;
