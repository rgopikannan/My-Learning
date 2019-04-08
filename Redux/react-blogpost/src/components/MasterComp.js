import React, {Component} from 'react';
import NavList from "./NavList";
import BlogList from "./BlogList";

class MasterComp extends Component {
  render() {
    return (
    <div>
        <h1 className="titleTxt">Hello world..!</h1>
        <div>
            <NavList />
            <BlogList />
        </div>
    </div>
    );
  }
}

export default MasterComp;