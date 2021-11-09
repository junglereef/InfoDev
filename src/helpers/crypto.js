const bcrypt = require("bcryptjs");
const crypto = {
  create(data) {
    // Criar uma hash  - recebe como parametro o dado não criptografado
    return bcrypt.hashSync(data, 12);
  },
  validate(data, hash) {
    // Validar uma hash - recebe como parametro o dado não criptografado e a  hash criptografada
    return bcrypt.compareSync(data, hash);
  },
};

module.exports = crypto;
