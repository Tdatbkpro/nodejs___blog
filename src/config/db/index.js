const mongoose = require ('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/datBK_pro_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect fale');
    } 
}

module.exports = {connect};