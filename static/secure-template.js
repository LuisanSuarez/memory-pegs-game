import React from "react";
import Header from "../components/Header";
import { getTokenForBrowser, getTokenForServer } from "../static/auth";
import { COLOR, CSS_IMG } from "../assets/css/globalStyles";

const templateCSS = {
  backgroundImage: `u rl("../../../assets/css/img/Background.jpg")`,
  width: "100%",
  minHeight: "100vh",
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const backgroundImageCSS = {
  position: "fixed"
};

export default Page =>
  class SecureTemplate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: ""
      };
    }
    static async getInitialProps({ req }) {
      const loggedInUser = process.browser
        ? await getTokenForBrowser()
        : await getTokenForServer(req);
      const pageProperties =
        (await Page.getInitialProps) && (await Page.getInitialProps(req));
      return {
        ...pageProperties,
        loggedInUser,
        isLoggedIn: !!loggedInUser
      };
    }

    componentDidMount() {
      this.setState({ image: "../../../assets/css/img/Background.jpg" });
    }

    render() {
      if (!this.props.isLoggedIn) {
        return (
          <div style={templateCSS}>
            <Header {...this.props} />
            <p>
              You're not authorised. Try to <a href="/login">Login</a>
            </p>
          </div>
        );
      }
      return (
        <div style={templateCSS}>
          <img
            src={
              "https://res.cloudinary.com/luisan/image/upload/v1582779420/Background_t6jy6n.jpg"
            }
            style={backgroundImageCSS}
          />
          <Header {...this.props} />
          <Page {...this.props} />
        </div>
      );
    }
  };
