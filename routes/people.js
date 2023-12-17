const express = require("express");
const {getPerson,createPerson,updatePerson,removePerson} = require("../controller.js/people")

const router = express.Router()

router.get("/", getPerson);

// router.post("/", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({
//       success: false,
//       msg: "Enter something",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     person: name,
//   });
// });

// router.post("/api/mary/nana/habib", (req, res) => {
//   const { name, course } = req.body;

//   if (!name && !course) {
//     return res.status(400).json({
//       success: false,
//       msg: "either name or course is not addes",
//     });
//   }

//   people.push({ name, course });

//   return res.status(200).json({
//     success: true,
//     msg: "I miss u guys",
//     data: [...people],
//   });
// });

router.post("/update", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", removePerson);

// router.route("/").get(getPerson);
// router.route("/update").post(createPerson);
// router.route("/:id").put(updatePerson).delete(removePerson);



module.exports = router