const app = require("./app");
//create a port like server

//dotenv setup
const connectDB = require("./config/db");
connectDB()

require("dotenv").config();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
