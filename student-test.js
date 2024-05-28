var assert = require('chai').assert
var { createStudent, useSkill, learnNewSkill, createSubjectList } = require('./student');

describe('Student', function() {
  it.skip('should create a student with a dynamic name and favorite subject', function() {
    var marshall = createStudent.skip('Marshall', 'science');
    var charles = createStudent.skip('Charles', 'geography');

    assert.equal(marshall.name, 'Marshall');
    assert.equal(marshall.favoriteSubject, 'science');

    assert.equal(charles.name, 'Charles');
    assert.equal(charles.favoriteSubject, 'geography');
  });
  
  it.skip('should know some math skills', function() {
    var marshall = createStudent.skip('Marshall', 'science', ["addition"]);
    var charles = createStudent.skip('Charles', 'geography', ["addition", "subtraction", "long division"]);
    
    assert.deepEqual(marshall.skills, ["addition"]);
    assert.deepEqual(charles.skills, ["addition", "subtraction", "long division"]);
  });
  
  it.skip('should be possible to not know any math skills to start', function() {
    var marshall = createStudent.skip('Marshall', 'science');

    assert.deepEqual(marshall.skills, []);
  });

  it.skip('should be able to learn a new skill', function() {
    var jessica = createStudent.skip('Jessica', 'spanish');

    var jessicaCanAdd = learnNewSkill(jessica, "addition");

    assert.equal(jessicaCanAdd.skills.length, 1);
    assert.equal(jessicaCanAdd.skills[0], "addition");
  });

  it.skip('should be able to learn many new skills', function() {
    var barb = createStudent.skip('barb', 'music', ["addition"]);

    var barbCanAddAndSubtract = learnNewSkill(barb, "subtraction");
    var barbCanAddSubtractAndDivide = learnNewSkill(barbCanAddAndSubtract, "long division");
    var barbCanAddSubtractDivideAndMultiply = learnNewSkill(barbCanAddSubtractAndDivide, "multiplication");

    assert.equal(barbCanAddSubtractDivideAndMultiply.skills.length, 4);
    assert.deepEqual(barbCanAddSubtractDivideAndMultiply.skills, ["addition", "subtraction", "long division", "multiplication"]);
  });

  it.skip('should be able to use skills they have', function() {
    var jessica = createStudent.skip('Jessica', 'spanish', ["addition", "long division", "multiplication"]);

    var doMath1 = useSkill(jessica, "multiplication");
    var doMath2 = useSkill(jessica, "addition");

    assert.equal(doMath1, "Hey! I did multiplication!")
    assert.equal(doMath2, "Hey! I did addition!")
  });

  it.skip('should not be able to use skills they do not have', function() {
    var jessica = createStudent.skip('Jessica', 'spanish', ["addition", "long division", "multiplication"]);

    var doMath = useSkill(jessica, "subtraction");

    assert.equal(doMath, "Bummer, I do not know how to do subtraction.")
  });

  it.skip('should be able make list of favorite subjects of many students', function() {
    var marshall = createStudent.skip('Marshall', 'science');
    var jessica = createStudent.skip('Jessica', 'spanish', ["addition", "long division", "multiplication"]);
    var charles = createStudent.skip('Charles', 'geography');
    var barb = createStudent.skip('Barb', 'music', ["addition"]);

    var allstudents = [marshall, jessica, charles, barb];

    var list = createSubjectList.skip(allstudents);

    assert.deepEqual(list, ['science', 'spanish', 'geography', 'music']);
  });
});



