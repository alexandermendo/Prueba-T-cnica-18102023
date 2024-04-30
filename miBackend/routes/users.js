const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express.Router(); 

const users = [
  { id: 1, name: 'Usuario 1'},
  { id: 2, name: 'Usuario 2'},
  { id: 3, name: 'Usuario 3'},
]

app.get('/', (req, res) => {
  res.json(users);
});


app.post('/addUser', (req, res) => {
  const { name } = req.body;
  if(!name) return res.status(400).json({error: 'El nombre es obligatorio'});
  const newUser = {
    id: users.length + 1,
    name: name,
  }
  users.push(newUser);
  res.status(201).json(newUser);
})


app.put('/editUsers/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;
  const user = users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });
  if (!name) return res.status(400).json({ error: 'El nombre es obligatorio.' });
  user.name = name;
  res.json(user);
});


app.delete('/deleteUsers/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado.' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});


module.exports = app;