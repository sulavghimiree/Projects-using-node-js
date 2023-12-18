const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB')
.then(()=>{
    console.log('MongoDB Connected');
}).catch(()=>{
    console.log('Failed to connect');
})

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model('Collection1', userSchema);

module.exports = collection;