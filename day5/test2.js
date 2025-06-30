const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jims')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection Error:", err));

const userSchema = new mongoose.Schema({
  studentCode: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  courseName: { type: String, required: true },
  skillSet: [String]
});

const JimsUser = mongoose.model('users', userSchema);

async function createUser() {
  const user = new JimsUser({
    studentCode: 'STU1003',
    studentName: 'Aman',
    courseName: 'Full Stack Development',
    skillSet: ['Node.js', 'MongoDB', 'React']
  });

  await user.save();
  console.log("User created:", user);
}

async function readUsers() {
  const users = await JimsUser.find({},{studentName:1});
  console.table(users);
  //console.log("All users:", users);
}

async function updateUser(code) {
  const user = await JimsUser.findOneAndUpdate(
    { studentCode: code },
    { $set: { courseName: 'Advanced MERN Stack' } },
    { new: true }
  );
  console.log("Updated user:", user);
}

async function deleteUser(code) {
  const result = await JimsUser.deleteOne({ studentCode: code });
  console.log("Delete result:", result);
}

async function runCRUD() {
//   await createUser();
  await readUsers();
//   await updateUser('STU1001');
//  await deleteUser('STU1001');
  mongoose.connection.close(); // Close after all operations
}

runCRUD();