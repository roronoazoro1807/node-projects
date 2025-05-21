import Url from "../models/url.js";
import shortid from "shortid";

//Post -create short url
export const handleGenerateShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }
  const shortId = shortid.generate();

  try {
    await Url.create({
      shortId,
      originalUrl,
      createdAt: new Date(),
    });
    return res.status(201).json({
      message: "Short URL created successfully",
      data: { shortId },
    });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// GET - Redirect using short ID
export const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;

  try {
    const entry = await Url.findOne({ shortId });

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Optional: Increase visit count here
    return res.redirect(entry.originalUrl);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
