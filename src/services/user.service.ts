import { pool } from "../config/db";
import { AppError } from "../utils/app.error";

export const createUserService = async (name: string, email: string) => {
  const query = ` INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *; `;

  const result = await pool.query(query, [name, email]);
  return result.rows[0];
};

export const getUsersService = async () => {
  const result = await pool.query("SELECT * FROM users");

  if (!result) {
    throw new AppError("Users not found", 404);
  }
  return result.rows;
};

export const getUserByIdService = async (id: number) => {
  const query = `SELECT * FROM users WHERE id = $1`;

  const result = await pool.query(query, [id]);
  if (!result) {
    throw new AppError("User not found", 404);
  }
  return result.rows[0] || null;
};

export const updateUserService = async (name: string, id: number) => {
  const query = ` UPDATE users SET name = $1 WHERE id = $2 RETURNING *; `;

  const result = await pool.query(query, [name, id]);

  if (result.rowCount === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteUserService = async (id: number) => {
  const query = "DELETE FROM users WHERE id = $1";
  const res = await pool.query(query, [id]);
  if (res.rowCount === 0) {
    throw new Error("User not found");
  }
  return true;
};
