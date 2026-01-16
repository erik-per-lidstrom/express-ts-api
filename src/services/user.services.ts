interface User {
  id: number;
  name: string;
  job: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "erik",
    job: "backend dev",
    email: "erik@example.com",
  },
  {
    id: 2,
    name: "jondo",
    job: "none",
    email: "jondo@example.com",
  },
];

export const getAllUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

export const createdUser = async (
  name: string,
  job: string,
  email: string
): Promise<User> => {
  return new Promise((resolve, reject) => {
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      reject(new Error("email alrady exsists in this system"));
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      job,
      email,
    };

    users.push(newUser);
    resolve(newUser);
  });
};
