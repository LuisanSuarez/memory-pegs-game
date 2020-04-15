import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { Service } from "../utils/DBService";
import { getTokenForBrowser, getTokenForServer } from "../static/auth";
import {
  productionUrlServer,
  devUrlServer,
  placeholderImage,
} from "../globalVariables";

const url =
  process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
console.log({ url });
export default (Page) =>
  class SecureTemplate extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        collection: "",
      };

      this.setCollection = this.setCollection.bind(this);
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
        isLoggedIn: !!loggedInUser,
      };
    }

    async isDatabaseComplete(storeName) {
      try {
        const ans = await Service.storeComplete(storeName);
        return ans;
      } catch (err) {
        console.error("Error requesting IDB store completion:", err);
        return true; //if there's an error, don't overwrite
      }
    }

    loadPegImages = async (storeName, runningFrom) => {
      console.log({ runningFrom });
      const isComplete = await this.isDatabaseComplete(storeName);
      console.log({ isComplete });
      if (!isComplete) {
        let data;
        [...Array(110)].forEach((item, id) => {
          // for (let id = 0; id < 110; id++) {
          data = { peg: id };
          let pegNumberStr = id.toString();
          pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;
          axios
            .get(url + "getPeg", {
              params: data,
            })
            .then((res) => {
              Service.setFileToIndexedDB(
                pegNumberStr,
                res.data.data[0] ? res.data.data[0].imageURL : placeholderImage,
                res.data.data[0]
                  ? res.data.data[0].pegName
                  : "add a name to this peg",
                storeName
              );
            })
            .catch((err) => {
              console.assert(id === 0, "Error getting image URL:", err);
            });
          // }
        });
      } else {
        console.log("Database is complete. No need to reload");
      }
    };

    extractCollectionFromEmail = (user) => {
      return user ? /.*@/.exec(user.email)[0].slice(0, -1) : "";
    };

    async setCollection(collection) {
      // const setIt = axios.post(url + "setCollection", { collection });
      // this.setState({ ...this.state, collection });

      if (this.state.collection !== collection) {
        try {
          const setIt = axios.post(url + "setCollection", { collection });
          this.setState({ ...this.state, collection });
          this.loadPegImages(collection, "setCollection");
        } catch (err) {
          console.error(
            "Error setting collection in server. " + err + "Please try again."
          );
        }
      } else {
        console.log(
          "handle this. user is clicking on collection already set. what if the user clicked on the collection they wanted but there was an error and didn't load?"
        );
        alert(
          "if your collection didn' load, please choose another collection before trying yours again (for now)"
        );
      }
    }

    componentWillMount() {
      //Get collection from the server and load it
      (async () => {
        let collection;
        try {
          collection = await axios.get(url + "getCurrentCollection");
          collection = collection.data.modelName;
          console.log("ALL IS GOOD:", collection);
        } catch (err) {
          console.error("Server failed to send collection. Setting fallback");
          console.error(err);
          collection = this.extractCollectionFromEmail(this.props.loggedInUser);
        } finally {
          console.log({ collection });
          this.setCollection(collection);
        }
      })();
    }

    render() {
      if (!this.props.isLoggedIn) {
        return (
          <div className="template">
            <Header {...this.props} />
            <p>
              You're not authorised. Try to <a href="/login">Login</a>
            </p>
          </div>
        );
      }
      return (
        <div className="template">
          <div className="template-background"></div>
          <Header
            {...this.props}
            collection={this.state.collection}
            setCollection={this.setCollection}
            availableCollections={["test1", "test2", "test3", "luisangelsc"]}
          />
          <Page {...this.props} collection={this.state.collection} />
        </div>
      );
    }
  };
