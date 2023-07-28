import { Component } from "react";
import Post from "./Post";

class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:5000/api/v1/posts")
      .then((resp) => resp.json())
      .then((data) => {
        that.setState({ posts: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="posts-section">
        {this.state.posts.map((post, idx) => (
          <Post post={post} key={idx} />
        ))}
      </div>
    );
  }
}

export default PostSection;
