const router = require('express').Router();

const {getJournal, createJournals, getJournals, updateJournal, deleteJournals} = require('../controller/journal')

router.route('/').get(getJournals).post(createJournals);
router.route('/:journalId').get(getJournal).patch(updateJournal).delete(deleteJournals);

module.exports = router