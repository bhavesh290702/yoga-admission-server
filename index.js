const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoUrl = "mongodb+srv://yoga:yoga@cluster0.kzfsupa.mongodb.net/yoga-db?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


app.use(require('./router/login'));
app.use(require('./router/enroll'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
