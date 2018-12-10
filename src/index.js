import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import "./styles.css";

import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 3,
          avatar: "assets/images/avatar.png",
          author: "Antônio Sousa",
          date: "2 min",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 2,
          avatar: "assets/images/avatar.png",
          author: "Felipe",
          date: "3 min",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 1,
          avatar: "assets/images/avatar.png",
          author: "Joseph",
          date: "5 min",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post-wrapper">
          {this.state.posts.map(post => (
            <Post data={post} key={post.id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
