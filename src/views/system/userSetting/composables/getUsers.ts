interface UserResponse {
  data: User[];
}
interface User {
  name: string;
  sex: string;
}

function getUsers(): Array<User> {
  const userList: User[] = [];
  return userList;
}

export default getUsers;
