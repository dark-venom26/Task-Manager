const router = require("express").Router();
const fetchuser = require("../middleware/fetchuser");
const User = require("../models/User");
const Task = require("../models/Task");
const {body, validationResult} = require("express-validator");

// Get a task
router.get("/:id", fetchuser, async (req, res)=>{
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json({"data" : task});
    }catch(err){
        res.status(500).json(err);
    }
})

// Create a task
router.post("/", fetchuser, [
    body("taskname", "Minimum length of task must be atleast 4 characters long").isLength({min: 4}),
], async (req, res)=>{
    const errors = validationResult(req);
    let success = false;
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array()})
    }
    const {taskname} = req.body
    const newTask = new Task({
        userId: req.user.id, task: taskname
    });
    try {
        const savedTask = await newTask.save();
        success = true;
        res.status(200).json({success,"task":savedTask});
    }catch(err){
        res.status(500).json(err);
    }
})

// Update a task
router.put("/:id", fetchuser, [
    body("taskname", "Minimum length of task must be atleast 4 characters long").isLength({min: 4}),
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array()})
    }
    try{
        const task = await Task.findById(req.params.id);
        if(task.userId.toString() === req.user.id){
            await task.updateOne({$set : {task: req.body.taskname}});
            res.status(200).json({"success" : "Task has been updated successfully"});
        }else{
            res.status(403).json({"error" : "You can update only your task"});
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete a task
router.delete("/:id", fetchuser, async (req, res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(task.userId.toString() === req.user.id){
            await task.deleteOne();
            res.status(200).json({"success" : "Task has been deleted successfully"});
        }else{
            res.status(403).json({"error" : "You can delete only your task"});
        }
    }catch(err){
        res.status(500).json(err);
    }
})


// Get timeline tasks
router.get("/timeline/all", fetchuser, async (req, res)=>{
    try{
        const currentUser = await User.findById(req.user.id);
        const userTasks = await Task.find({userId: currentUser._id.toString()});
        res.status(200).json(userTasks);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;