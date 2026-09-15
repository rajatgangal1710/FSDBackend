const http = require("http");
const fs = require("fs");
const path = require("path");


const dataFile = path.join(__dirname, "students.json");


if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]");
}


const formHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Student Record Form</title>
</head>
<body>
  <h1>Student Record Form</h1>
  <form method="POST" action="/add">
    <label>Student Name:</label><br>
    <input type="text" name="name" required><br><br>
    
    <label>Roll Number:</label><br>
    <input type="text" name="roll" required><br><br>
    
    <label>Course:</label><br>
    <input type="text" name="course" required><br><br>
    
    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>
    
    <button type="submit">Add Student</button>
  </form>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(formHTML);

  } else if (req.url === "/add" && req.method === "POST") {
    
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const student = {
        name: params.get("name"),
        roll: params.get("roll"),
        course: params.get("course"),
        email: params.get("email")
      };

      
      const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
      data.push(student);

      
      fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h2>Student added successfully!</h2><a href='/'>Go Back</a>");
    });

  } else if (req.url === "/students" && req.method === "GET") {
    
    const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data, null, 2));

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});


server.listen(3000, () => {
  console.log(" Server running at http://localhost:3000/");
});