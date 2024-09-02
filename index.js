const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let cartItems = [
  { item: 'Book', price: 30 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 50 },
  { item: 'Bag', price: 125 }
];

let students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'A' },
  { name: 'Jack', grade: 'B' },
  { name: 'Jill', grade: 'C' }
];

let temperatures = [0, 20, 30, 100];

let student_scores = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 70 },
  { name: 'Jill', score: 60 }
];

let sentence = 'The quick brown fox jumps over the lazy dog';

// Exercise 1
app.get('/cart/total', (req, res) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  res.json({ totalPrice });
});

// Exercise 2
app.get('/students/filter', (req, res) => {
  const { grade } = req.query;
  const filteredStudents = students.filter(student => student.grade === grade);
  res.json({ students: filteredStudents });
});

// Exercise 3
app.get('/temperatures/convert', (req, res) => {
  const convertedTemperatures = temperatures.map(temp => (temp * 9) / 5 + 32);
  res.json({ convertedTemperatures });
});

// Exercise 4
app.get('/students/average-score', (req, res) => {
  const totalScore = student_scores.reduce((total, student) => total + student.score, 0);
  const averageScore = totalScore / student_scores.length;
  res.json({ averageScore });
});

// Exercise 5
app.get('/sentence/count-words', (req, res) => {
  const wordCount = sentence.split(' ').length;
  res.json({ wordCount });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});