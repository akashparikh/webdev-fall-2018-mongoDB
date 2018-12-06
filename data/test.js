const uniDao = require('./daos/university.dao.server');
uniDao.truncateDatabase();

const createAlice = uniDao.createStudent({
    _id: 123,
    username: 'alice',
    password: 'alice',
    firstName: 'Alice',
    lastName: 'Wonderland',
    gradYear: 2020,
    scholarship: 15000
}).then(newStudent => console.log(newStudent))
  .catch(err => console.log(err));

const createQuest = uniDao.createQuestion({
    _id:121,
    question: 'what is name',
    points:2,
    questionType: 'multipleChoice',
    multipleChoice:{
    choices:['A','B','C'],
        correct:1,
}
}).then(newQuestion => console.log(newQuestion))
    .catch(err=>console.log(err));

