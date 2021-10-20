const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from change node first');
});
const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmail.com' },
    { id: 2, name: 'shabnur', email: 'shabanur@gmail.com' },
    { id: 3, name: 'karim', email: 'karim@gmail.com' },
    { id: 4, name: 'abdul', email: 'abdul@gmail.com' },
    { id: 5, name: 'rahim', email: 'rahim@gmail.com' },

]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

});
app.get('/fruits/magoes/fazli', (req, res) => {

    req.send('Yiummy');

});
app.listen(port, () => {
    console.log('Listening port', port);
});