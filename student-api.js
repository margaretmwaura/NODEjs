const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let students = [];


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/listfile', (req, res) => {
    res.sendFile(path.join(__dirname + '/list.html'));
});

app.post('/student', (req, res) => {
    const student = req.body;

    // Output the book to the console for debugging
    console.log(student);
    students.push(student);

    console.log(students);
    res.send(' A student has been added');
});

app.get('/list', (req, res) => {

    for(let s of students)
    {
        console.log(s);
    }
    res.json(students);

});



app.listen(port, () => console.log('Hello world app listening on port ${port}!'));