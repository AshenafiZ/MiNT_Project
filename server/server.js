const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock Data (Replace with a database in production)
let plans = [
  { id: 1, name: "Plan A", kpas: [{ name: "KPA 1" }], kpis: [{ name: "KPI 1", target: 90 }] },
  { id: 2, name: "Plan B", kpas: [{ name: "KPA 2" }], kpis: [{ name: "KPI 2", target: 80 }] },
];

// API Routes
app.get('/api/plans', (req, res) => {
  res.json(plans);
});

app.post('/api/plans', (req, res) => {
  const newPlan = req.body;
  newPlan.id = plans.length + 1;
  plans.push(newPlan);
  res.status(201).json(newPlan);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));