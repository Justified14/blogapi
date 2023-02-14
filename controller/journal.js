const Jobs = require('../models/job')



const getJournals = async (req, res) => {
   try {
    const jobs =await Jobs.find({createdBy: req.user.userId});
    res.status(200).json({noOfJobs: jobs.length, jobs});
   } catch (error) {
    console.log(error);
    res.json({error})
   }
};

const getJournal = async (req, res) => {
    const {journalId} = req.params
    try {
        const jobs =await Jobs.findOne({createdBy: req.user.userId , _Id: journalId});
        if (!jobs){
            return res.status(404).json({success: false, message: 'Job not found'})
        }
        res.status(200).json({jobs});
    } catch (error) {
        console.log(error);
        res.json({error})
    }
};

const createJournals = async (req, res) => {
const{company, position} = req.body;
req.body.createdBy = req.user.userId
    if (!company|| !position){
        res.status(400).json({success: false, msg: 'Please provide necessary information'})
    }
    try {
        const job = await Jobs.create(req.body)
        res.status(201).json({success: true, job})
    } catch (error) {
        console.log(error);
        res.json({error})
    }
};

const updateJournal = async (req, res) => {
    const {journalId} = req.params
    const {company, position } = req.body
    try {
        const jobs =await Jobs.findOneAndUpdate({createdBy: req.user.userId , _Id: journalId},  req.body, {new:true, runValidators: true,});
        
        res.status(200).json({jobs});
    } catch (error) {
        console.log(error);
        res.json({error})
    }
};


const deleteJournals = async (req, res) => {
    const {journalId} = req.params
    try {
        const jobs =await Jobs.findOneAndDelete({createdBy: req.user.userId , _Id: journalId});
        if(!jobs){
            res.status(404).json({message: 'Job not found'})
        }
        res.status(200).json({message: 'Job deleted successfully'})
    } catch (error) {
        console.log(error);
        res.json({error})
    }
};
module.exports = {getJournal, createJournals, getJournals, updateJournal, deleteJournals}