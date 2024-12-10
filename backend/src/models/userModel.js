const db = require("../config/dbConfig");


// Create a new user
exports.createUser = (username, password) => {
  const sql = "INSERT INTO users_cred(username, password) VALUES (?, ?)";
  return db.execute(sql, [username, password]);
};

// Find a user by username
exports.findUserByUsername = (username) => {
  const sql = "SELECT * FROM users_cred WHERE username = ?";
  return db.execute(sql, [username]).then(([rows]) => rows[0]);
};

// Find a user by user_id
exports.findUserById = (userId) => {
  const sql = "SELECT * FROM users_cred WHERE user_id = ?";
  return db.execute(sql, [userId]).then(([rows]) => rows[0]);
};
