const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

// Apis
router.get("/get-symptoms", (req, res) => {
  console.log("ddd", req.body);
  res.json({
    symptoms: [
      "Itching",
      "Skin Rash",
      "Nodal Skin Eruptions",
      "Continuous Sneezing",
      "Headache",
      "Mild Fever",
    ],
  });
});

router.post("/get-diagnosis", controller.predictDiagnosis);

module.exports = router;
