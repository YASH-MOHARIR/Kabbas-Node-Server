import * as assignmentsDao from "./dao.js";
 
export default function AssignmentRoutes(app) {

    app.get("/api/assignments/:courseID",(req,res) =>{
        const { courseID } = req.params;
        const assignments = assignmentsDao.findCourseAssignment(courseID);
        res.send(assignments);
    });

    app.get("/api/assignments/:courseID/:assignmentID",(req,res) =>{
        const { courseID , assignmentID } = req.params;
        const assignment = assignmentsDao.findAssignmentByID(courseID,assignmentID);
        res.send(assignment);
    });

    app.delete("/api/assignments/:courseID/:assignmentID",(req,res) =>{
        const { courseID ,assignmentID} = req.params;
        const assignments = assignmentsDao.deleteAssignment(courseID,assignmentID);
        res.send(assignments);
    });

    app.post("/api/assignments/new",(req,res) =>{
        const newAssignment = req.body 
        const assignments = assignmentsDao.createAssignmetn(newAssignment);
        res.send(assignments);
    });

    app.put("/api/assignments/update",(req,res) =>{
        const assignment = req.body;
        const aid = assignment._id; 
        const assignments = assignmentsDao.updateAssignment(aid,assignment);
        res.send(assignments);
    });

   
 

  }