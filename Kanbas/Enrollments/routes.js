 
import * as enrollmentsDao from "./dao.js";
 
export default function EnrollmentRoutes(app) {

    app.get("/api/enrollments",(req,res) =>{
        // console.log("enroll");
        const enrollments = enrollmentsDao.findAllEnrollmemnts();
        res.send(enrollments);
    });

    app.post("/api/enrollments/enroll/:userId/:courseId", (req, res) => {

        const { userId, courseId } = req.params;
        const newEnrollment =  enrollmentsDao.enrollUserInCourse(userId,courseId);
        // console.log(newEnrollment);
        res.send(newEnrollment);
      });

      app.delete("/api/enrollments/unenroll/:userId/:courseId" , (req,res)=>{
        // console.log("inside unenroll");
        const { userId, courseId } = req.params;
        enrollmentsDao.unEnrollFromCourse(userId,courseId)
        res.sendStatus(204);
      });

  }
  