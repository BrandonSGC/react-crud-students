import express from "express";
const router = express.Router();

import {
  spCreateStudent,
  spSelectAllUsers,
  spGetStudentById,
  spModifyStudent,
  spDeleteStudent
} from "../db/connection.js";

// Define a middleware to add a base path for all routes in this router.
router.use("/students", (req, res, next) => {
  req.baseUrl = "/students";
  next();
});

router.get("/", async (req, res) => {
  try {
    const students = await spSelectAllUsers();
    res.json(students);
  } catch (error) {
    res.json({
      success: false,
      message: "There has been an error requesting the students",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await spGetStudentById(id);
    res.json(student);
  } catch (error) {
    res.json({
      success: false,
      message: "There has been an error requesting the students",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, surname, subject } = req.body;

    if (await spCreateStudent(name, surname, subject)) {
      res.json({ success: true, message: "Student Created Succesfully!" });
    } else {
      res.json({
        success: false,
        message: "There has been an error creating the student.",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Server error: ${error}` });
  }
});

router.put("/edit", async (req, res) => {
  try {
    const { id, name, surname, subject } = req.body;

    if (await spModifyStudent(id, name, surname, subject)) {
      res.json({ success: true, message: "Student Modified Succesfully!" });
    } else {
      res.json({
        success: false,
        message: "There has been an error modifying the student.",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Server error: ${error}` });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (await spDeleteStudent(id)) {
      res.json({ success: true, message: "Student Deleted Succesfully!" });
    } else {
      res.json({
        success: false,
        message: "There has been an error deleting the student.",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Server error: ${error}` });
  }
});


export default router;