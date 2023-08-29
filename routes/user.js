const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.delete("/deleteUser/:id", userCtrl.deleteUser);
router.get("/getUsers", userCtrl.getUsers);
router.get("/searchUser/:query", userCtrl.searchUser);
router.patch("/editUser/:id", userCtrl.editUser);
router.post("/addUser", userCtrl.addUser);

module.exports = router;
