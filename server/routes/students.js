import express from 'express'
const router = express.Router();

import { spCreateStudent, spSelectAllUsers } from '../db/connection.js'

// Define a middleware to add a base path for all routes in this router.
router.use('/students', (req, res, next) => {
  req.baseUrl = '/students';
  next();
})


router.get('/', async (req, res) => {
  try {
    const students = await spSelectAllUsers();
    res.json(students);
  } catch (error) {
    res.json({success: false, message: "There has been an error requesting the students"});
  }
});

router.post('/register', async (req, res) => {
    try {
      const { name, surname, subject } = req.body;

        if (await spCreateStudent(name, surname, subject)) {
            res.json({success: true, message:'Estudiante registrado correctamente!'});
        } else {
            res.json({success: false, message:'Ha ocurrido un error registrando el estudiante.'});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message:'Ha ocurrido un error en el servidor.'});
    }
});

export default router;
