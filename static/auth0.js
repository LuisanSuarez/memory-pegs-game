//This file is solely responsible for handling the Auth0 specific functions
//login(), logout(), parseHash()
import auth0 from "auth0-js";
import * as settings from "../settings";
import { devLoginUri, productionLoginUri } from "../globalVariables";

const clientID = settings.clientID;
const domain = settings.domain;

function webAuth(clientID, domain) {
  return new auth0.WebAuth({
    clientID,
    domain,
  });
}

function login() {
  console.log("login:", process.env.NODE_ENV !== "production");
  const options = {
    responseType: "id_token code token",
    redirectUri: `${
      process.env.NODE_ENV !== "production" ? devLoginUri : productionLoginUri
    }/redirect`,
    scope: "openid profile email",
  };

  console.log("options:", options);

  return webAuth(clientID, domain).authorize(options);
}

function parseHash(cb) {
  return webAuth(clientID, domain).parseHash(cb);
}

function logout() {
  return webAuth(clientID, domain).logout();
}

export { login, parseHash, logout };
