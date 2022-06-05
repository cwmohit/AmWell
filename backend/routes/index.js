const express = require("express");

const router = express.Router();

// Apis
router.get("/get-symptoms", (req, res) => {
  res.json({ symptoms: ["fever", "cough", "sore throat"] });
});

router.post("/get-diagnosis", (req, res) => {
  const { symptoms } = req.body;
  // Add your logic here
  res.json({ diagnosis: "flu" });
});

module.exports = router;
