import React, {Component} from 'react';
import NavList from "./NavList";
import BlogList from "./BlogList";

class MasterComp extends Component {
   constructor(props){
    super(props);
    this.state = {
      navList: [],
      blogList: [
        {
          post: "What is react?",
          description: "About reactJS libs",
          author: "Dan"
        },
        {
          post: "Why is react?",
          description: "About reactJS libs",
          author: "Dan"
        },
        {
          post: "How react works?",
          description: "About reactJS libs",
          author: "Dan"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1 className="titleTxt">Hello world..!</h1>
        <div>
          <NavList dataList={this.state.navList} />
          <BlogList dataList={this.state.blogList} />
        </div>
      </div>
    );
  }
}

export default MasterComp;