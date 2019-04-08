import React, {Component} from 'react';

class BlogList extends Component {
  render() {
    return (
      <div className="blogContent">
        <ul>
          <li>
            <div>
              <a href="#">Post 1</a>
              <p>Description</p>
              <i>Author</i>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default BlogList;