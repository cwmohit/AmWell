const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

// Apis
router.get("/get-symptoms", (req, res) => {
  console.log("ddd", req.body);
  res.json({ symptoms: ["fever", "cough", "sore throat"] });
});

router.post("/get-diagnosis", controller.predictDiagnosis);

module.exports = router;
