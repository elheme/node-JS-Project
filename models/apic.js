var mongo=require("mongoose");   

const schema = mongo.Schema;    
const Client = new schema({              
        name:String, 
    }); 
    module.exports=mongo.model("client",Client)  