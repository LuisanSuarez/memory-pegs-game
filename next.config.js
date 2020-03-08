// const Dotenv = require('dotenv-webpack');

// module.exports = {
//   plugins: [
//     new Dotenv()
//   ]
// };

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
});
node: {
  child_process: "empty";
}
