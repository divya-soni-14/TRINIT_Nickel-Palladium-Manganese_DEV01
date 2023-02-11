const NGO = require("../Model/NGO");
const mongoose = require("mongoose");
const Project = require("../Model/Project");
const User = require("../Model/User");

exports.getAllProjects = async (req, res) => {
  let projects;
  try {
    projects = await Project.find({});
  } catch (err) {
    res.status(450).json({
      success: false,
      message: "Error getting projects",
    });
  }
  res.status(200).json({ success: true, projects: projects });
};

exports.createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    target: req.body.target,
    type: req.body.type,
    city: req.body.city,
    country: req.body.country,
    category: req.body.category,
    by: mongoose.Types.ObjectId(req.body._id),
  });
  if (req.dp) project.dp = req.dp;
  else {
    let newString = req.body.name.replace(/\s+/g, " ").trim();
    let finalString = newString.split(" ").join("+");
    const url =
      "https://www.designmantic.com/logo-images/172807.png?company=REPLACE&slogan=&verify=1";
    project.dp = url.replace("REPLACE", finalString);
  }
  return project
    .save()
    .then((project) => {
      console.log(project);
      if (project.type == "ngo")
        NGO.findOne({ _id: mongoose.Types.ObjectId(req.body._id) }).then(
          (ngo) => {
            ngo.projects.push(project._id);
            ngo.save();
          }
        );
      else
        User.findOne({ _id: mongoose.Types.ObjectId(req.body._id) }).then(
          (user) => {
            user.projects.push(project._id);
            user.save();
          }
        );
      res.status(200).json({ success: true, project: project });
    })
    .catch((err) => {
      res.status(450).json({
        success: false,
        message: "Error creating project",
      });
    });
};

// exports.fillDB = async(req,res) => {
//     let e = 0;
//     req.body.forEach(async (aproject) => {
//         const project = new Project({
//             name: aproject.name,
//             description: aproject.description,
//             target: aproject.target,
//             type: aproject.type,
//             city: aproject.city,
//             country: aproject.country,
//             category: aproject.category,
//             by: mongoose.Types.ObjectId(aproject._id)
//         });
//         if (aproject.dp)
//                 project.dp = aproject.dp;
//             else{
//                     let newString = aproject.name.replace(/\s+/g,' ').trim();
//                     let finalString = newString.split(' ').join('+');
//                     const url = 'https://www.designmantic.com/logo-images/172807.png?company=REPLACE&slogan=&verify=1';
//                     project.dp = url.replace('REPLACE',finalString);
//                 }
//         return project.save().then((project) => {
//             console.log(project);
//             if(project.type == 'ngo')
//                 NGO.findOne({_id : mongoose.Types.ObjectId(aproject._id)}).then(ngo => {
//                     ngo.projects.push(project._id);
//                     ngo.save();
//                 });
//             else
//                 User.findOne({_id : mongoose.Types.ObjectId(aproject._id)}).then(user => {
//                     user.projects.push(project._id);
//                     user.save();
//                 });
//         }).catch((err) => {
//             e++;
//             console.log("Error");
//         });
//     }).then(() => {
//         res.status(200).json({e:e});
//     })
// }
