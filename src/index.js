const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Aravind:LwiZWgfyX5cZvF0O@cluster0.ltwzf.mongodb.net/Aravind", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
    // app.use((req, res, next) => {
    //     var d = new Date();

//     console.log(d.toLocaleDateString(), d.toLocaleTimeString(), req.ip, req.originalUrl)
//     next()
// })
// app.use(function(req, res, next) {
//     console.log('this is global MW')
//     req['current-day'] = 'Wednesday'
//     req['data'] = 'Aru'
//     next()
// })
app.use(function(req, res, next) {
    console.log("This is middilewaare of order and product")
    next()
})
app.use('/createorder', route)
app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});