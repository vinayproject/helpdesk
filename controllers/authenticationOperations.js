const dbCon=require('../config/db/mysql-config');
const QUERY=require('../schema/authentication_schema');


this.generate_password=async function(obj,callback){
    try {
        let user_name=obj.email
        let data = await dbCon.query(QUERY.GENERATE_PASSWORD,user_name);
        if(data.length===0 && !data){
            callback(err,{data:"no such user present"})
        }else if(data.length===1){
            return callback(null,data)
        }
    } catch (error) {
        return callback(err,error)
    }
}

this.verify_link=async function(obj,callback){
    try {
        let uname=obj.email;
        let id=obj.link_id;
        let data=await dbCon.query(QUERY.VERIFY_LINK,uname);
        if(data.length===0){
            callback(err,data);
        }else if(data.length===1){
           let _id=data[0].link_id;
           if(id===_id){
               return callback(null,data);
           }else{
               return callback(err,{data:'id missmatch'});
           }
        }else{
            return callback(err,null);
        }
    } catch (error) {
        return callback(err,null);
    }
}

this.getPassword=async (obj,callback)=>{
    try {
        let email=obj.email;
        let password=obj.password;
        let data=await dbCon.query(QUERY.SAVE_PASSWORD,[password,email]);
        if(data[0].affectedrow===1){
            return callback(null,data)
        }else{
            return callback(err,null)
        }
    } catch (error) {
        return callback(err,error)
    }
}

this.Login=async function (obj,callback){
    let user_name=obj.email;
    let password=obj.password;
    try {
        await dbCon.query(QUERY.LOGIN,user_name,function(err,data,fields){
            if(err || data.length===0){
                return callback(true,{data:"user name does not exist"})
            }else if(data && data.length===1){
                if(data[0].password===password){
                    return callback(false,data)
                }else{
                    return callback(true,data="wrong password")
                }
            }else{
                return callback(true,err)
            }
        });
       
    } catch (error) {
        return callback(true,error)
    }
}

module.exports=this;