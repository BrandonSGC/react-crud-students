import sql from "mssql";

const config = {
  user: "BrandonGC",
  password: "Bra122020!",
  server: "tiusr23pl.cuc-carrera-ti.ac.cr.\\MSSQLSERVER2019",
  database: "tiusr26pl_dbStudents",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Functions

export async function spSelectAllUsers() {
  try {
    const pool = await sql.connect(config);

    const result = await pool.request().execute("spStudents_SelectAllStudents");

    return result.recordset;
  } catch (error) {
    console.log(`Error executing spStudents_SelectAllStudents: ${error}`);
    return false;
  }
}

export async function spGetStudentById(id) {
  try {
    const pool = await sql.connect(config);

    const result = await pool
      .request()
      .input("id", id)
      .execute("spStudents_GetStudentById");

    return result.recordset;
  } catch (error) {
    console.log(`Error executing spStudents_GetStudentById: ${error}`);
    return false;
  }
}

export async function spCreateStudent(name, surname, subject) {
  try {
    const pool = await sql.connect(config);

    await pool
      .request()
      .input("name", name)
      .input("surname", surname)
      .input("subject", subject)
      .execute("spStudents_CreateStudent");

    console.log("Student created succesfully");
    return true;
  } catch (error) {
    console.error(`Error executing spStudents_CreateStudent: ${error}.`);
    return false;
  }
}

export async function spModifyStudent(id, name, surname, subject) {
  try {
    const pool = await sql.connect(config);

    await pool
      .request()
      .input("id", id)
      .input("name", name)
      .input("surname", surname)
      .input("subject", subject)
      .execute("spStudents_ModifyStudent");

    console.log("Student modified succesfully");
    return true;
  } catch (error) {
    console.error(`Error executing spStudents_ModifyStudent: ${error}.`);
    return false;
  }
}

export async function spDeleteStudent(id) {
  try {
    const pool = await sql.connect(config);

    await pool.request().input("id", id).execute("spStudents_DeleteStudent");

    console.log("Student deleted succesfully");
    return true;
  } catch (error) {
    console.error(`Error executing spStudents_DeleteStudent: ${error}.`);
    return false;
  }
}
