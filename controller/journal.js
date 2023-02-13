const getJournals = async (req, res) => {
    res.send('get all journal')
};

const getJournal = async (req, res) => {
    res.send('get journal')
};

const createJournals = async (req, res) => {
    res.send('create journal')
};

const updateJournal = async (req, res) => {
    res.send('update journal')
};

const deleteJournals = async (req, res) => {
    res.send('delete journal')
};
module.exports = {getJournal, createJournals, getJournals, updateJournal, deleteJournals}