const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Aryan Kumar", email: "aryan@gmail.com" },
  { id: 2, name: "Kumar Aryan", email: "kumar@gmail.com" }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; 
  users.push(newUser);
  res.status(201).json(newUser);  
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  
  let user = users.find(u => u.id == id);
  if (user) {
    Object.assign(user, updatedInfo); 
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  
  const userIndex = users.findIndex(u => u.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1); 
    res.status(204).send();  
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
