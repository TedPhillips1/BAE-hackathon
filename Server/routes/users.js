import express from "express";
import { addJournalEntry } from "../models/models.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});
// post request for journal entry
router.post('/entries/entry', async (req, res) => {
  res.json({
      success: true,
      payload: await addJournalEntry(req.body),
  })
})

export default router;
