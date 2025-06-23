
const express = require("express");
const router = express.Router();
const { askOpenRouter } = require("../utils/openrouterClient");

router.post("/ask", async (req, res) => {
    const { question } = req.body;
    try {
        const response = await askOpenRouter(question);
        res.json({ answer: response });
    } catch (err) {
        res.status(500).json({ error: "Failed to get answer" });
    }
});

module.exports = router;
