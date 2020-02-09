import React from "react";
import Header from "../components/Header";
import { getTokenForBrowser, getTokenForServer } from "../static/auth";

export default Page =>
  class Template extends React.Component {
    static async getInitialProps({ req }) {
      process.browser
        ? ""
        : console.log("Template req object:", Object.keys(req));
      //wtf is process.browser? https://nolanlawson.com/2017/01/09/how-to-write-a-javascript-package-for-both-node-and-the-browser/
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
      return (
        <div>
          <Header {...this.props} />
          <Page {...this.props} />
        </div>
      );
    }
  };
