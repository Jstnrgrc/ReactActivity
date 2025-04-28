const express = require("express")
const {addUser, viewUsers, viewUser, deleteUser, updateUser, login} = require ("./userController");

const router = express.Router();

router.post("/addUser",addUser);
router.get("/viewUsers",viewUsers);
router.get("/viewUser/:SID",viewUser);
router.delete("/deleteUser/:SID",deleteUser);
router.put("/updateUser/:SID",updateUser);
router.post("/login",login);

module.exports= router;