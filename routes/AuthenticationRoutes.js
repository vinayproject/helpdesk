const httputil = require('../utils/HttpUtil');
const authOperation = require('../controllers/authenticationOperations');
const sessCheck = require('../middlewares/SessionCkeck');



function SignupRoute(prefixLink, app) {

    /** 
     * @param {string} - email-id
     * @returns {object} - http response
     */
    app.post(prefixLink + '/generate_password', (req, res) => {
        try {
            let obj = req.body;
            authOperation.generate_password(obj, (err, data) => {
                if (err === null) {
                    //send the verification_link to email , call the mail function
                    httputil.getSuccess(data)
                } else {
                    httputil.getError(data)
                }
            });
        } catch (error) {
            httputil.getError(data);
        }
    });

    app.get(prefixLink + '/verify_link/:email/:link_id', function (req, res) {
        try {
            let obj = req.params
            authOperation.verify_link(obj, (err, data) => {
                if (err === null) {
                    //redirect to password generation page
                } else {
                    httputil.getError(data)
                }
            })
        } catch (error) {
            httputil.getError(data)
        }
    });

    app.post(prefixLink + '/save_password', function (req, res) {
        let obj = req.body;
        authOperation.getPassword(obj, (err, data) => {
            if (err === null) {
                //redirect to dashboard
                return httputil.getSuccess(data)
            } else {
                return httputil.getError(data)
            }
        });

    });

    app.post(prefixLink + '/login', function (req, res) {
        try {
            let obj = req.body;
            authOperation.Login(obj, (err, data) => {
                if (!err) {
                    //set the session
                    req.session.user = data[0].user_name;
                    res.json(httputil.getSuccess(data));
                } else if(err){
                    return res.json(httputil.getError(data))
                }
            });
        } catch (error) {
            return httputil.getError(error)
        }
    });

    app.get(prefixLink + '/dashboard', sessCheck, function (req, res) {

    })
}

module.exports = SignupRoute;