let dbcon=require('../config/db/mysql-config');
let QUERY=require('../schema/admin_schema');


this.adduser =async (obj,callback)=> {
    
    try {
        console.log('from operations')
        var data=await dbcon.query(QUERY.SAVE_USER,obj);
        console.log(data)
        if(data){
            callback(null,data)
        }
    } catch (error) {
        console.log(error)
        callback(err,null)
    }
}

this.b=async (callback)=> {
    try {
        var data=await dbcon.query("select * from users");
        if(data){
            callback(data)
        }
    } catch (error) {
        callback(null,error)
    }
}



module.exports=this;
