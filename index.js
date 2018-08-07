const express = require('express');
const app = express();

app.use(express.json());

let issues = [
    {"id": 1, "CreatedDate": "14/15/2018", "description": "dhfggfghjghgjhjhhj hg g ghghg"}
];
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('Hello World!');
});

app.get('/issues', (req,res)=> {
    res.send(issues);
});

app.get('/issues/:id', (req,res)=> {
    const issue = issues.find(c => c.id == req.params.id);
    if(!issue) return res.status(404).send("<h3>No issues are found for the given id.</h3>")
    res.send(issue);
});

app.get('/*', (req,res)=> {
    res.status(400).send(`<h1>Bad Request</h1>`);
});

app.post('/issues', (req,res)=> {
    const issue = { "id": req.body.id,
        "CreatedDate": req.body.createdDate,
        "Description": req.body.Description
        //complete this
    };
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is listening on port ${port}....`);