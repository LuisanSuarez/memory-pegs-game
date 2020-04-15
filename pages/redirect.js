import React from "react";
import Router from "next/router";
import { parseHash } from "../static/auth0";
import { saveToken, verifyToken } from "../static/auth";
import { devLoginUri, productionLoginUri } from "../globalVariables";

export default class extends React.Component {
  handlePush = (route = "") => {
    const uri =
      process.env.NODE_ENV === "production" ? productionLoginUri : devLoginUri;
    window.location = uri + "/" + route;
  };
  componentDidMount() {
    console.log("mounted");
    parseHash((err, result) => {
      if (err) {
        console.error("Error signing in", err);
        return;
      }
      verifyToken(result.idToken).then((valid) => {
        if (valid) {
          saveToken(result.idToken, result.accessToken);
          this.handlePush();
        } else {
          Router.push("/");
        }
      });
    });
  }
  render() {
    return null;
  }
}
