const express = require('express');
const app = express();
const PORT = 3000;


const portfolioPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rajat's Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f9;
    }
    header {
      background: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    section {
      padding: 20px;
    }
    h2 {
      color: #333;
    }
    footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Rajat's Portfolio</h1>
    <p>Engineering Student | Developer | Learner</p>
  </header>

  <section>
    <h2>About Me</h2>
    <p>I am an engineering student passionate about electrical engineering, computer science, and programming.</p>
  </section>

  <section>
    <h2>Projects</h2>
    <ul>
      <li>Student Records Management System (Node.js)</li>
      <li>Sorting Algorithms in C++</li>
      <li>JavaScript Basics Practice</li>
    </ul>
  </section>

  <footer>
    <p>Contact: rajat@example.com</p>
  </footer>
</body>
</html>
`;


app.get('/', (req, res) => {
  res.send(portfolioPage);
});


server.listen(3000, () => {
  console.log(" Server running at http://localhost:3000/");
});
