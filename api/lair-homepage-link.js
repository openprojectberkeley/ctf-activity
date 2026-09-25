const LAIR_URL = "spypage.openprojectberkeley.com/7365637265742d6c616972";

module.exports = (req, res) => {
  const expected = process.env.LAIR_TOKEN;
  const auth = req.headers.authorization || "";

  if (!expected || auth !== `Bearer ${expected}`) {
    res.setHeader("WWW-Authenticate", "Bearer");
    res.status(401).send("Unauthorized\n");
    return;
  }

  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(`${LAIR_URL}\n`);
};
