const app = require("./app");
//create a port like server

//dotenv setup
require("dotenv").config();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
