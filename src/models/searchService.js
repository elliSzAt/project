import DBConnection from "../configs/DBConnection";

let searchUserByEmail = async (email) => {
//   return new Promise((resolve, reject) => {
//     try {
//       DBConnection.query(
//         'SELECT * FROM `users` WHERE `email` = ?', email,
//         function(err, rows) {
//           if (err) {
//             reject(err);
//           }
//           let user = rows[0];
//           resolve(user);
//         }
//       );
//     } catch (err) {
//       reject(err);
//     }
//   });
};

module.exports = {
  searchUserByEmail: searchUserByEmail
};