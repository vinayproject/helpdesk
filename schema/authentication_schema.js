module.exports={
    GENERATE_PASSWORD:"select * from tbl_user where user_name = ?",
    VERIFY_LINK:"select link_id from tbl_user where user_name = ?",
    SAVE_PASSWORD:"update tbl_user set password = ? where user_name=?",
    LOGIN:"select * from tbl_user where user_name = ?"
}