import express from "express";

const app = express();
const port = 3010;

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/resources", (req, res) => {
  res.render("resources.ejs");
});

app.get("/links", (req, res) => {
  res.render("links.ejs");
});

app.get("/nodejs/node_guidelines", (req, res) => {
    res.render("nodejs/node_guidelines.ejs");
  });

  app.get("/git/git_start", (req, res) => {
    res.render("git/git_start.ejs");
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



