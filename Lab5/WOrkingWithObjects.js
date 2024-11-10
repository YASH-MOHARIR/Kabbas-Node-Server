const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

let moduleObject = {
    id: "1",
    name: "Introduction to Programming",
    description: "This module covers basic programming concepts.",
    course: "CS101",
    score: 75,
    completed: false,
  };

  
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  ///


// Route to get the full module object
app.get("/lab5/module", (req, res) => {
    res.json(moduleObject);
  });
  
  // Route to get only the module's name
  app.get("/lab5/module/name", (req, res) => {
    res.json({ name: moduleObject.name });
  });
  
//   // Route to update the module's name
//   app.put("/lab5/module/name", (req, res) => {
//     const { name } = req.body;
//     if (name) {
//       moduleObject.name = name;
//       res.json({ message: "Module name updated successfully", moduleObject });
//     } else {
//       res.status(400).json({ error: "Name is required" });
//     }
//   });
  
//   // Route to update module description
//   app.put("/lab5/module/description", (req, res) => {
//     const { description } = req.body;
//     if (description) {
//       moduleObject.description = description;
//       res.json({ message: "Module description updated successfully", moduleObject });
//     } else {
//       res.status(400).json({ error: "Description is required" });
//     }
//   });
  
  // Route to update assignment score
  app.get("/lab5/module/score/:newScore", (req, res) => {
    const { newScore } = req.params;

      moduleObject.score = newScore;
      res.json( moduleObject );

  });
  
  // Route to update assignment completed status
  app.get("/lab5/module/completed/:newCompleteStatus", (req, res) => {
    const { newCompleteStatus } = req.params;

      moduleObject.completed = newCompleteStatus;
      res.json( moduleObject );

  });
  
}
