import express from "express";
const router = express.Router();

// signup
router.get("/signup", (reg, res) => {
  res.send("signup route");
});

//login
router.get("/login", (reg, res) => {
  res.send("login route");
});

//logout
router.get("/logout ", (reg, res) => {
  res.send("logout  route");
});

export default router;
