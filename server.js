const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

let users = [
  { id: 1, name: 'Ephraim' }
];

app.get('/', (req, res) => {
  res.send('Hello! My backend is LIVE! 🚀');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.json({ message: 'User added successfully!', user: newUser });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});