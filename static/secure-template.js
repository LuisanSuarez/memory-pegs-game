import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { Service } from "../utils/DBService";
import { getTokenForBrowser, getTokenForServer } from "../static/auth";
import { productionUrlServer, devUrlServer } from "../globalVariables";

const url =
  process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;

export default Page =>
  class SecureTemplate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: "",
        collection: ""
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
        isLoggedIn: !!loggedInUser
      };
    }

    async isDatabaseComplete(storeName) {
      const ans = await Service.storeComplete(storeName)
        .then(res => res)
        .catch(err => {
          console.log("Error requesting IDB store completion:", err);
          return true;
        });
      return ans;
    }

    loadPegImages = storeName => {
      let data;
      for (let id = 0; id < 110; id++) {
        data = { peg: id };
        let pegNumberStr = id.toString();
        pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;
        axios
          .get(url + "getPeg", {
            params: data
          })
          .then(res => {
            Service.setFileToIndexedDB(
              pegNumberStr,
              res.data.data[0] ? res.data.data[0].imageURL : placeholderImage,
              res.data.data[0]
                ? res.data.data[0].pegName
                : "add a name to this peg",
              storeName
            );
          })
          .catch(err => {
            console.assert(id === 0, "Error getting image URL:", err);
          });
      }
    };

    extractCollectionFromEmail = user => {
      return user ? /.*@/.exec(user.email)[0].slice(0, -1) : "";
    };

    async setCollection(collection) {
      if (this.state.collection !== collection) {
        const isComplete = await this.isDatabaseComplete(collection);
        axios
          .post(url + "setCollection", { collection })
          .then(res => {
            !isComplete
              ? this.loadPegImages(collection, "setCollection")
              : console.log("database is complete, no need to reload");
            this.setState({ ...this.state, collection });
          })
          .catch(err => {
            console.error("Error setting collection:", err);
            alert("Error changing your peg collection. Please try again!");
          });
      } else {
        console.log("you're clicking the same collection");
      }
    }

    componentWillMount() {
      //Get collection from the server and load it
      (async () => {
        const collection = await axios
          .get(url + "getCurrentCollection")
          .then(res => {
            res.data.modelName;
          })
          .catch(err => {
            console.log("get collection error:", err);
            return false;
          });
        if (collection) {
          (await this.isDatabaseComplete(collection))
            ? console.log("database complete!")
            : this.loadPegImages(collection, "secTempl CompWillMount");
          this.setState({ ...this.state, collection });
        } else {
          console.log("Error: didn't get a collection back from the server");
          this.setState({
            ...this.state,
            collection: this.extractCollectionFromEmail(this.props.loggedInUser)
          });
        }
      })();
      this.setState({ image: "../../../assets/css/img/Background.jpg" });
    }

    render() {
      if (!this.props.isLoggedIn) {
        return (
          <div className="template">
            <Header {...this.props} extraProps={"something bra"} />
            <p>
              You're not authorised. Try to <a href="/login">Login</a>
            </p>
          </div>
        );
      }
      return (
        <div className="template">
          <div className="template-background"></div>
          {/* <img
            src={
              "https://res.cloudinary.com/luisan/image/upload/v1582779420/Background_t6jy6n.jpg"
            }
            className=
          /> */}
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
