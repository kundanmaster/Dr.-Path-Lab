import pool from '../config/dbconfig';

const User = {
  findByEmail: (email, callback) => {
    pool.query('SELECT * FROM users WHERE email = ?', [email], callback);
  }
};

export default User;
