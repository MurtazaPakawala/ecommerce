const app = require("./app");

//requiring the dotenv
const dotenv = require("dotenv");
//config
dotenv.config({ path: "backened/config/config.env" });
app.listen(process.env.PORT, () => {
  console.log(`the server is up at the port ${process.env.PORT}`);
});
