const db = require("./db");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//API for Adding Users
exports.addUser = async (req,res) => {
    const {FullName, Email, Username, Password} = req.body;

    const hashedPassword = await bcrypt.hash(Password,10);

    if(!FullName || !Email || !Username){
        return res.status(400).json({ message: "All Fields are required"});
    }

    db.query("Insert into students(Fullname, Email, Username, Password) values (?,?,?,?)" , [FullName, Email, Username, hashedPassword],
        (err) => {
            if(err) return res.status(500).json({message: err.message});
            res.status(200).json({message: "User added sucessfully"});
        })};
//============================================================================//
//API for View All Users
exports.viewUsers = (req,res) => {

    const sql = "SELECT StudentID, FullName, Email, Username from students";

    db.query(sql, (err, results) => { 
        if(err) return res.status(500).json({message: err.message});
        res.status(200).json(results);
    })};

//============================================================================//
//API for View Single User
exports.viewUser = (req,res) => {
    const { SID } = req.params;

    db.query("SELECT StudentID, Fullname, Email, Username from Students where StudentID = ?", [SID],
        (err, results)  => {
            if(err) return res.status(500).json({ message: err.message });
            if(results.length === 0) return res.status(400).json({ message: "User not found!" });

            res.status(200).json(results[0]);
        }
    )
}
//============================================================================//
//API for Delete Single User

exports.deleteUser = (req,res) => {
    const { SID } = req.params;

    db.query("Delete from students where StudentID = ?",
        [SID],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message});
            if (results.affectedRows === 0)
            {
                return res.status(404).json({ message: "User not found!" });
            }
            res.status(200).json({message: "User deleted Successfully"});  
        }       
    )
}

//============================================================================//
//API for Update user

exports.updateUser = async(req, res) => {
    const { SID } = req.params;
    const {Fullname, Username, Email, Password} = req.body;
    const hashedPassword = Password? await bcrypt.hash(Password,10): null;

    db.query("Update Students Set Fullname=?, Email=?, Username=?, Password=COALESCE(?,Password) where StudentID=?",
        [Fullname, Email, Username, hashedPassword, SID],
        (err) =>{
            if(err) return res.status(500).json({message: err.message});
            res.status(200).json({message: "User updated succesfully"})
        });

}
//============================================================================//
//API for login user

exports.login = (req, res) => {
    const { Username, Password } = req.body;
  
    db.query("SELECT * FROM Students WHERE Username = ?", [Username], async (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      if (results.length === 0) return res.status(401).json({ message: "Invalid Credentials" });
  
      const user = results[0];
      console.log("Fullname from database:", user.Fullname); // Debugging
  
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) return res.status(401).json({ message: "Invalid Credentials" });
  
      const token = jwt.sign(
        { StudentID: user.StudentID, Fullname: user.Fullname },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
      );
  
      res.status(200).json({ message: "Login Successful", token });
    });
  };
