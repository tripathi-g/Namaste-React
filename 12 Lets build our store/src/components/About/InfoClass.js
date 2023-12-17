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
      <div className="p-4 w-full mt-4 mb-12 mx-auto border border-stone-700 rounded-xl aboutus-info-wrapper">
        <h2>Info</h2>

        <div className="flex justify-around items-center flex-wrap aboutus-info-body">
          <div>
            <h3>Name: {name}</h3>
            <p className="mb-0">Bio: {bio}</p>
            <h4>Github ID: {login}</h4>
          </div>
          <div>
            <img className="max-w-[120px] rounded-sm" src={avatar_url}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoClass;
