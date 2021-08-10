var person = {
  firstName: 'Jian',
  lastName: 'Huang',
  hobby: 'tennis'
};
console.log(person);
var fullname = (person.firstName) + ' ' + (person.lastName);
console.log("The person's name is:", fullname + '.');
person.job = 'Logistics Management Specialist';
console.log("The person's current job is:", person.job + '.');
person.previousJob = 'Fron Desk';
console.log("The person's previous job is:", person.previousJob + '.');
console.log('The complete person object:', (person));
