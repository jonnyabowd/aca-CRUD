
  export function listUsers(users) {
    console.log("list users", users);
    return {
      type: "LIST_USERS",
      value: users
    };
  }
  
  export function createUser(user) {
    // console.log("create user", user);
    return {
      type: "CREATE_USER",
      value: user
    };
  }
  
  export function deleteUser(id) {
    // console.log("delete user", id);
    return {
      type: "DELETE_USER",
      value: id
    };
  }