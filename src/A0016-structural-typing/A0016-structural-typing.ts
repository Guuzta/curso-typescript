type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: "Gustavo", password: "123456" };
const sentValue = { username: "Gustavo", password: "123456" };
const isLogged = verifyUser(dbUser, sentValue);

console.log(isLogged);
