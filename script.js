/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map (arr => {
    if (arr.profession === "developer") {
      console.log(`Name : ${arr.name} , Profession ${arr.profession}`);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr =>{
    if (arr.profession === "developer") {
      console.log(`Name : ${arr.name} , Profession ${arr.profession}`);
    }
  })
}

PrintDeveloperbyForEach()

function addData() {
  //Write your code here, just console.log
const addEmployee= (arr , employee) =>{
  arr.push(employee);
  console.log(arr);
}
const newEmployee = {id: 4, name: "Susan", age: "20", profession: "intern"};
addEmployee(arr , newEmployee);

}


function removeAdmin() {
  //Write your code here, just console.log
  const removeEmployee = () => {
    arr = arr.filter((item) => item.profession !== "admin");
    console.log(arr);
  }
  removeEmployee();
}

function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    { id: 5, name: "vijay", age: "21", profession: 'Teacher' },
    { id: 6, name: "saurab", age: "25", profession: 'Engineer' },
    { id: 7, name: "ufo", age: "50", profession: 'Astronaut' },
  ]
  console.log(arr.concat(arr2))
}
