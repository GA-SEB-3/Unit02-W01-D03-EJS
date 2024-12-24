const express = require('express');
const app = express();
const morgan = require("morgan")

app.use(morgan('dev'))

const students = [
  { id: 1, studentName: "Abdulrahman", course: "Software Engineering", country: "Bahrain" },
  { id: 2, studentName: "Sara", course: "Software Engineering", country: "Bahrain" },
  { id: 3, studentName: "Loai", course: "Software Engineering", country: "Bahrain" },
  { id: 4, studentName: "Fatema", course: "Software Engineering", country: "Bahrain" },
  { id: 5, studentName: "Ali Dashti", course: "Software Engineering", country: "Bahrain" },
  { id: 6, studentName: "SHARIFA", course: "Software Engineering", country: "Bahrain" },
  { id: 7, studentName: "Hasan", course: "Software Engineering", country: "Bahrain" },
  { id: 8, studentName: "Adel", course: "Software Engineering", country: "Bahrain" },
  { id: 9, studentName: "Murtadha", course: "Software Engineering", country: "Bahrain" },
  { id: 10, studentName: "Abdulaziz", course: "Software Engineering", country: "Bahrain" },
  { id: 11, studentName: "Marwa", course: "Software Engineering", country: "Bahrain" },
  { id: 12, studentName: "Hussain", course: "Software Engineering", country: "Bahrain" },
  { id: 13, studentName: "Ali Abdulrasool", course: "Software Engineering", country: "Bahrain" },
  { id: 14, studentName: "Sayed", course: "Software Engineering", country: "Bahrain" },
  { id: 15, studentName: "Salman", course: "Software Engineering", country: "Bahrain" },
  { id: 16, studentName: "Rashid", course: "Software Engineering", country: "Bahrain" },
  { id: 17, studentName: "Faisal", course: "Software Engineering", country: "Bahrain" },
  { id: 18, studentName: "Ahmed Aljaber", course: "Software Engineering", country: "Bahrain" },
  { id: 19, studentName: "Ebrahim", course: "Software Engineering", country: "Bahrain" },
  { id: 20, studentName: "Walaa", course: "Software Engineering", country: "Bahrain" },
  { id: 21, studentName: "Ahmed Abdulwahab", course: "Software Engineering", country: "Bahrain" },
  { id: 22, studentName: "Abdulla Hasan", course: "Software Engineering", country: "Bahrain" },
  { id: 23, studentName: "Noora", course: "Software Engineering", country: "Bahrain" },
  { id: 24, studentName: "Abdulla Naser", course: "Software Engineering", country: "Bahrain" },
  { id: 25, studentName: "Omar", course: "Data Analytics", country: "Saudi Arabia"}
]



// // middleware
// app.use((req,res,next)=>{
//   let loggedIn= false
//   console.log("MIDDLEWARE")
//   if(loggedIn=== false){
//     res.send("PLEASE LOG IN")
//   }
//   else{
//     next()
//   }
  
// })

app.get("/students",(req,res)=>{
  res.render("students.ejs",{
    students : students
  })
})

app.get('/students/:id',(req,res)=>{
  let foundStudent = students.find((oneStudent)=>{
    return oneStudent.id == req.params.id
  })
  console.log(foundStudent)
  res.render("oneStudent.ejs",{student: foundStudent})
})


app.get('/', (req, res) => {
  res.render('home.ejs',{
    course: "Software Engineering"
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
