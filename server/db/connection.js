import sql from 'mssql'

const config = {
  user: "sa",
  password: "root",
  server: "localhost",
  database: "Students",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}


// Functions

export async function spSelectAllUsers() {
  try {
    const pool = await sql.connect(config);

    const result = await pool
      .request()
      .execute("spStudents_SelectAllStudents");
      
    return result.recordset;

  } catch (error) {
    console.log(`Error executing spStudents_SelectAllStudents: ${error}`);
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