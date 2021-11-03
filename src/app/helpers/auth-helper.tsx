const TOKEN = "token";
const USER = "user";

const setToken = <T extends Object>(token: T) =>
  localStorage.setItem(TOKEN, JSON.stringify(token));

const getToken = () => localStorage.getItem(TOKEN);

const setCurrentUser = <T extends Object>(user: T) =>
  localStorage.setItem(USER, JSON.stringify(user));

const getCurrentUser = () => localStorage.getItem(USER);

const logOut = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);
};

export { setToken, getToken, setCurrentUser, getCurrentUser, logOut };
