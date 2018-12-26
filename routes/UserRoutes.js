const httputil = require('../utils/HttpUtil');
const sessCheck = require('../middlewares/SessionCkeck');
const UserController=require('../controllers/UserControlers')


function userRoutes(prefixLink, app) {

    /** 
     * @param {string} - request details
     * @param { int }  - user_id
     * @returns {object} - saved request details http response
     */
    app.post(prefixLink +'/dashboard/submit', (req, res) => {
        try {
            let obj = req.body;
            UserController.save_req(obj,(err,data)=>{
                if(!err){
                    res.json(httputil.getSuccess(data))
                }
                else{
                    res.json(httputil.getError(data))
                }
            })

        } catch (error) {
            res.json(httputil.getError(data));
        }
    });

     /** 
     * @param { int }  - user_id
     * @returns { object } - all request details http response
     */
    app.get(prefixLink +'/:uid/dashboard/all_request', (req, res) => {
        try {
            
        } catch (error) {
            httputil.getError(data);
        }
    });

      /** 
     * @param { int }  - user_id
     * @returns { object } - logout http response
     */
    app.get(prefixLink +'/:uid/dashboard/logout', (req, res) => {
        try {
            
        } catch (error) {
            httputil.getError(data);
        }
    });

}

module.exports=userRoutes;