require("dotenv").config();
require("./config/passport")
require("./config/database");


const app = require("./app")
const port = process.env.PORT || 5000;




// listen the app on a port
app.listen(port, () => {
    console.log(`Server is running ot port ${port}`)
})