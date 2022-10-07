import express from "express";
const router = express.Router();
router.get("user", (req, res) => {
    res.json({ hello: "world" });
});
//# sourceMappingURL=v1.js.map