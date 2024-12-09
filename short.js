//sort()

const people = [{name : "amirshah", age : 37, gpa: 3.0},
                {name : "ali", age : 30, gpa: 2.51},
                {name : "nurin", age : 26, gpa: 3.5},
                {name : "aydin", age : 16, gpa: 4.0}]
                
const shortPeople = [...people].sort((a,b) => a.name.localeCompare(b.name));

console.log(people);
console.log(shortPeople);