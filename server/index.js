// Import express
import express from 'express';
const app = express();

import cors from 'cors'; // Importa el módulo 'cors'

// Middleware para habilitar CORS
app.use(cors());

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Absolute Path
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import Routers
import studentRoutes from './routes/students.js'

// Server
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
})

// API
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Routers
app.use('/students', studentRoutes);