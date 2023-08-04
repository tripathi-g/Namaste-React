import React from "react";
import { GITHUB_USER_API } from "../../utils/constants";

class InfoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    // API call
    const data = await fetch(GITHUB_USER_API + "tripathi-g");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, avatar_url, login } = this.state.userInfo;
    console.log(this.state);
    return (
      <div className="aboutus-info-wrapper">
        <h2>Info</h2>

        <div className="aboutus-info-body">
          <div>
            <h3>Name: {name}</h3>
            <p>Bio: {bio}</p>
            <h4>Github ID: {login}</h4>
          </div>
          <div>
            <img src={avatar_url}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoClass;
