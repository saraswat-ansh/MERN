const mongoose = require('mongoose');
const readline = require('readline');

mongoose.connect('mongodb://localhost:27017/jims')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection Error:", err));

const userSchema = new mongoose.Schema({
  studentCode: { type: String, required: true, unique: true },
  studentName: { type: String, required: false },
  courseName: { type: String, required: false },
  skillSet: [String]
});

const JimsUser = mongoose.model('users', userSchema);

// CRUD functions
async function createUser() {
  rl.question('Student Code: ', (code) => {
    rl.question('Student Name: ', (name) => {
      rl.question('Course Name: ', (course) => {
        rl.question('Skills (comma-separated): ', async (skills) => {
          const skillSet = skills.split(',').map(s => s.trim());
          const user = new JimsUser({
            studentCode: code,
            studentName: name,
            courseName: course,
            skillSet
          });

          try {
            await user.save();
            console.log("User created:", user);
          } catch (err) {
            console.error("Error creating user:", err.message);
          }
          showMenu();
        });
      });
    });
  });
}

async function readUsers() {
  const users = await JimsUser.find({}, { studentName: 1, courseName: 1, _id: 0 });
  console.log("All users:");
  console.table(users);
  showMenu();
}

async function readUsersSpecific() {
  rl.question("Enter starting letter of name: ", async (letter) => {
    const regex = new RegExp('^' + letter, 'i');
    const users = await JimsUser.find({ studentName: regex });
    console.log(`Users starting with "${letter}":`);
    console.table(users);
    showMenu();
  });
}

async function updateUser() {
  rl.question("Enter student code to update: ", (code) => {
    rl.question("Enter new course name: ", async (course) => {
      const user = await JimsUser.findOneAndUpdate(
        { studentCode: code },
        { $set: { courseName: course } },
        { new: true }
      );
      if (user) {
        console.log("Updated user:", user);
      } else {
        console.log("User not found.");
      }
      showMenu();
    });
  });
}

async function deleteUser() {
  rl.question("Enter student code to delete: ", async (code) => {
    const result = await JimsUser.deleteOne({ studentCode: code });
    console.log("Delete result:", result);
    showMenu();
  });
}

// Menu
function showMenu() {
  console.log(`\n--- MENU ---
1. Create User
2. Read All Users
3. Filter Users by Name Start
4. Update User Course
5. Delete User
6. Exit`);

  rl.question("Choose an option: ", async (choice) => {
    switch (choice) {
      case '1': await createUser(); break;
      case '2': await readUsers(); break;
      case '3': await readUsersSpecific(); break;
      case '4': await updateUser(); break;
      case '5': await deleteUser(); break;
      case '6':
        rl.close();
        mongoose.connection.close();
        break;
      default:
        console.log("Invalid choice.");
        showMenu();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

showMenu();