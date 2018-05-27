import React, { Component } from 'react';
import { Input, Layout, Menu, Breadcrumb, Carousel } from 'antd';

// import Slider from 'react-slick';
import axios from 'axios';

import Post from './components/Post';

import logo from './logo.svg';
import './App.css';

const Search = Input.Search;
const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    subredditInput: '',
    subreddit: 'hearthstone',
    posts: [],
  };

  componentDidMount = async () => {
    const { subreddit } = this.state;
    const res = await axios.get(
      `https://www.reddit.com/r/${subreddit}/hot.json`
    );
    this.setState({ posts: res.data.data.children });
  };

  handleSubmit = async subreddit => {
    try {
      // const subreddit = this.state.subredditInput;
      const res = await axios.get(
        `https://www.reddit.com/r/${subreddit}/hot.json`
      );
      // console.log(res);
      this.setState({ posts: res.data.data.children });
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          {/* <form onSubmit={this.handleSubmit}> */}
          <Search
            placeholder="Choose Subreddit"
            onSearch={value => this.handleSubmit(value)}
            enterButton
          />
          {/* </form> */}
        </Header>
        {this.state.posts.length > 0 && (
          <Carousel vertical>
            {this.state.posts.map(post => <Post post={post} />)}
          </Carousel>
        )}
      </Layout>
    );
  }
}

export default App;
