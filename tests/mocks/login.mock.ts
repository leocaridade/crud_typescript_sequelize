const validUsername = 'Hagar';
const validPassword = 'terrível';
const noUsernameLoginBody = { username: '', password: validPassword };
const noPasswordLoginBody = { username: validUsername, password: '' };

const existingUser = { 
  id: 1, 
  username: validUsername,
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$Ix8q.agP4xFlzj1foCw25uPGEWspBfuB1vEveIIQQ9qSH8vDGj4pW',
};

const noExistingUsernameBody = { username: 'noExistingUsername', password: validPassword };
const validLoginBody = { username: validUsername, password: validPassword };


export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  existingUser,
  noExistingUsernameBody,
  validLoginBody,
};