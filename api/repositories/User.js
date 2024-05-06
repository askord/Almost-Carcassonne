import pool from "../db.js";

class UserRepository {
  static async createUser({ userName, hashedPassword, email, phone, gender, date }) {
    const response = await pool.query(
      "INSERT INTO users (name, password, email, phone, gender, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [userName, hashedPassword, email, phone, gender, date]
    );

    return response.rows[0];
  }

  static async getUserData(userName) {
    const response = await pool.query("SELECT * FROM users WHERE name=$1", [
      userName,
    ]);

    if (!response.rows.length) {
      return null;
    }

    return response.rows[0];
  }
}

export default UserRepository;
