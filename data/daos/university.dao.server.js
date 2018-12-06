
    const studentModel = require('../models/student.model.server');
    const questionModel = require('../models/question.model.server');
    const answerModel = require('../models/answer.model.server');

    const truncateDatabase = () => {
        return Promise.all([
            studentModel.deleteMany({}),
            questionModel.deleteMany({}),
            answerModel.deleteMany({})
        ]);
    };

    const createStudent = student => {
        return studentModel.create(student)
    };

    const createQuestion = question => questionModel.create(question);

//const createAnswer = answer=>answerModel.create(answer);
    const answerQuestion = (studentId, questionId, answer) => {
        const student = studentModel.findOne({_id: studentId});
        const question = questionModel.findOne({_id: questionId});

        return Promise.all([student, question])
            .then(([student, question]) => {
                if (question.questionType == "TRUE_FALSE") {
                    const newAnswer = {
                        _id: answer._id,
                        trueFalseAnswer: answer.studentAnswer,
                        student: student._id,
                        question: question._id
                    };
                    answerModel.create(newAnswer);
                } else {
                    const newAnswer = {
                        _id: answer._id,
                        multipleChoiceAnswer: answer.studentAnswer,
                        student: student._id,
                        question: question._id
                    };
                    answerModel.create(newAnswer);
                }
            })
            .catch(err => console.log(err));
    };

    const updateStudentById = (sid, s) => {
        return studentModel.updateOne({_id: sid}, {$set: s}).exec();
    }

    const deleteAllStudents = () => {
        return studentModel.deleteMany({}).exec();
    };

    const deleteStudentById = (sid) => {
        return studentModel.deleteOne({_id: sid}).exec();
    };

    const updateQuestionById = (qid, q) => {
        return questionModel.updateOne({_id: qid}, {$set: q}).exec();
    };

    const deleteAllQuestions = () => {
        return questionModel.deleteMany({}).exec();
    };


    const deleteQuestionById = (qid) => {
        return questionModel.deleteOne({_id: qid}).exec();
    };

    const findAllStudents = () => studentModel.find({});

    const findStudentById = id => studentModel.findOne({_id: id});

    const findAllQuestions = () => questionModel.find({});

    const findAllAnswers = () => answerModel.find({}).populate('student').populate('question').exec();

    const findAnswerById = id => answerModel.findOne({_id: id}).populate('student').populate('question').exec();

    const findAnswerByStudent = (studentId) => answerModel.find({student: studentId}).populate('student').populate('question').exec();

    const findQuestionById = id => questionModel.findOne({_id: id});

    const findAnswerByQuestion = (questionId) => answerModel.find({question: questionId}).populate('student').populate('question').exec();

    const getAnswerByStudent = (sid, qid) => {return answerModel.find({student: sid, question: qid}).populate('student').populate('question').exec();};

    const populateDatabase = () => {
        return createStudent({
            _id: 123,
            username: 'alice',
            password: 'alice',
            firstName: 'Alice',
            lastName: 'Wonderland',
            gradYear: 2020,
            scholarship: 15000
        }).then(createStudent({
            _id: 234,
            username: 'bob',
            password: 'bob',
            firstName: 'Bob',
            lastName: 'Hope',
            gradYear: 2021,
            scholarship: 12000
        })).then(createQuestion({
            _id: 321,
            question: 'Is the following schema valid?',
            points: 10,
            questionType:'TRUE_FALSE',
            trueFalse:{isTrue:false}
        })).then(createQuestion({
            _id:432,
            question:'DAO stands for Dynamic Access Object',
            points:10,
            questionType: 'TRUE_FALSE',
            trueFalse:{isTrue:false}
        })).then(createQuestion({
            _id:543,
            question:'What does JPA stand for ?',
            points: 10,
            questionType: 'MULTIPLE_CHOICE',
            multipleChoice:{
                choices:[
                    "Java Persistence API",
                    "Java Persisted Application",
                    "JavaScript Persistence API",
                    "JSON Persistent Associations"
                ],
                correct: 1
            }
        })).then(createQuestion({
            _id: 654,
            question: 'What does ORM stand for?',
            points: 10,
            questionType: 'MULTIPLE_CHOICE',
            multipleChoice: {
                choices: [
                    "Object Relational Model",
                    "Object Relative Markup",
                    "Object Reflexive Model",
                    "Object Relational Mapping"
                ],
                correct: 4
            }
        })).then(answerQuestion(123, 321, {_id: 123, studentAnswer: true}))
            .then(answerQuestion(123, 432, {_id: 234, studentAnswer: false}))
            .then(answerQuestion(123, 543, {_id: 345, studentAnswer:1}))
            .then(answerQuestion(123,654, {_id: 456, studentAnswer: 2}))
            .then(answerQuestion(234, 321, {_id: 567, studentAnswer: false}))
            .then(answerQuestion(234,432, {_id: 678, studentAnswer: true}))
            .then(answerQuestion(234, 543, {_id: 789, studentAnswer: 3}))
            .then(answerQuestion(234,654, {_id: 890, studentAnswer: 4}));

};

module.exports = {
    createQuestion,
    createStudent,
    truncateDatabase,
    populateDatabase,
    findAllAnswers,
    findAllQuestions,
    findAllStudents,
    answerQuestion,
    findAnswerById,
    findAnswerByQuestion,
    findAnswerByStudent,
    findQuestionById,
    findStudentById,
    updateStudentById,
    deleteAllStudents,
    deleteStudentById,
    updateQuestionById,
    deleteAllQuestions,
    deleteQuestionById,
    getAnswerByStudent
};
// npm run dev