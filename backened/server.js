const app = require("./app");

//requiring the dotenv
const dotenv = require("dotenv");
//importing the databasefunction
const connectDatabse = require("./config/database");
//config
dotenv.config({ path: "backened/config/config.env" });
//connecting to the database
connectDatabse();
app.listen(process.env.PORT, () => {
  console.log(`the server is up at the port ${process.env.PORT}`);
});
