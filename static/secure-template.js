import React from "react";
import Header from "../components/Header";
import { getTokenForBrowser, getTokenForServer } from "../static/auth";
import { COLOR } from "../assets/css/globalStyles";

const templateCSS = {
  background: COLOR.mainColorDark,
  width: "100%",
  minHeight: "100vh",
  position: "absolute",
  left: 0
};

export default Page =>
  class SecureTemplate extends React.Component {
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
          <Header {...this.props} />
          <Page {...this.props} />
        </div>
      );
    }
  };
