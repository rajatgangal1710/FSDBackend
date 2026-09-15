const http = require("http");
const fs = require("fs");

const PORT = 3000;

// Create students.json if it does not exist
if (!fs.existsSync("students.json")) {
    fs.writeFileSync("students.json", "[]");
}

const server = http.createServer((req, res) => {

    // Home page
    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Student Record System</title>
            </head>

            <body>
                <h1>Welcome to Student Record System</h1>

                <h2>Add Student</h2>

                <form action="/add-student" method="POST">

                    <label>Student Name:</label><br>
                    <input type="text" name="name" required>
                    <br><br>

                    <label>Roll Number:</label><br>
                    <input type="text" name="rollNumber" required>
                    <br><br>

                    <label>Course:</label><br>
                    <input type="text" name="course" required>
                    <br><br>

                    <label>Email:</label><br>
                    <input type="email" name="email" required>
                    <br><br>

                    <button type="submit">Add Student</button>

                </form>

                <br>

                <a href="/students">View All Students</a>

            </body>
            </html>
        `);
    }


    // Add student
    else if (req.url === "/add-student" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const formData = new URLSearchParams(body);

            const student = {
                name: formData.get("name"),
                rollNumber: formData.get("rollNumber"),
                course: formData.get("course"),
                email: formData.get("email")
            };

            fs.readFile("students.json", "utf8", (err, data) => {

                let students = [];

                if (!err && data) {
                    students = JSON.parse(data);
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    (err) => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/html"
                            });

                            res.end("<h1>Error saving student data</h1>");
                            return;
                        }

                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });
    }


    // Display all students
    else if (req.url === "/students" && req.method === "GET") {

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/html"
                });

                res.end("<h1>Error reading student data</h1>");
                return;
            }

            const students = JSON.parse(data || "[]");

            let studentRows = "";

            students.forEach((student, index) => {

                studentRows += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${student.name}</td>
                        <td>${student.rollNumber}</td>
                        <td>${student.course}</td>
                        <td>${student.email}</td>
                    </tr>
                `;
            });

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Student Records</title>

                    <style>
                        table {
                            border-collapse: collapse;
                            width: 80%;
                        }

                        th, td {
                            border: 1px solid black;
                            padding: 10px;
                            text-align: left;
                        }

                        th {
                            background-color: lightgray;
                        }
                    </style>
                </head>

                <body>

                    <h1>Student Records</h1>

                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Roll Number</th>
                            <th>Course</th>
                            <th>Email</th>
                        </tr>

                        ${studentRows}
                    </table>

                    <br>

                    <a href="/">Add Another Student</a>

                </body>
                </html>
            `);
        });
    }


    // Page not found
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");
    }
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});