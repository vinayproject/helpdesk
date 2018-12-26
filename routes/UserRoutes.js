const httputil = require('../utils/HttpUtil');
const authOperation = require('../operations/authenticationOperations');
const sessCheck = require('../middlewares/SessionCkeck');



function userRoutes(prefixLink, app) {

    /** 
     * @param {string} - request details
     * @param { int }  - user_id
     * @returns {object} - saved request details http response
     */
    app.post(prefixLink +'/:uid/dashboard/submit', (req, res) => {
        try {
            
        } catch (error) {
            httputil.getError(data);
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