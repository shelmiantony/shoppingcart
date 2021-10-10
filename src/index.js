const express = require('express')
const mongoose= require('mongoose');
const env = require('dotenv');
const bodyParser = require('body-parser')
const app = express();

const port = process.env.PORT || 4000

// routes
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');




//environment variable or we can say constants
env.config();

//mongodb connection
// mongodb+srv://shelmisajan:<password>@cluster0.r3dvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://shelmisajan:AJLvfvgYz03gJCkO@cluster0.r3dvy.mongodb.net/ShoppingCart?retryWrites=true&w=majority`,
{  
    useNewUrlParser: true,
    useUnifiedTopology:true,
   
}
).then(() => {
    console.log("database is connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser());
// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser());
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',checkoutRoutes);


app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});