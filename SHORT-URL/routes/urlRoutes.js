import express from "express";
import {
  handleGenerateShortUrl,
  handleRedirectUrl,
} from "../controllers/urlController.js";

const router = express.Router();

//route to create short url
router.post("/shorten", handleGenerateShortUrl);

//route to redirect to original url
router.get("/:shortId", handleRedirectUrl);

export default router;
