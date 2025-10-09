import { userList } from "../model/usermodel.js";

export function userHandler(req, resp)  {
    const userData = userList();
    console.log(userList())
  resp.render("users",{users: userData});
};

 