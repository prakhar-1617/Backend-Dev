const rawUsers = [
  { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
  { id: 2, name: "Sanya", password: "123_password", role: "user" },
  { id: 3, name: "Amit", password: "secret_password", role: "user" }
];

// Remove password
const safeUsers = rawUsers.map(({ password, ...rest }) => rest);

// Get only admins
const admins = safeUsers.filter(user => user.role === "admin");

console.log(safeUsers);
console.log(admins);
