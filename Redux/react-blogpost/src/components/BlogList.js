import React, {Component} from 'react';

class BlogList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="blogContent">
        <ul>
          {this.props.dataList.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <a href="#">{item.post}</a>
                  <p>{item.description}</p>
                  <i>{item.author}</i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BlogList;