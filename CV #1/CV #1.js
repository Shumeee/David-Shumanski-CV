let phone = document.getElementById("phone");
let fName = document.getElementById("name");
let lName = document.getElementById("surname");
let table = document.getElementById("table");
let button = document.getElementById("button");
let test = document.getElementById("test");
let edit = document.getElementById("edit");
let i = 0, array = [];

function Person(fName, lName, phone, i) {
    this.name = fName;
    this.surname = lName;
    this.number = phone;
    this.id = i+1;
}

button.addEventListener("click", function(){
    let tr = document.createElement("tr");
    tr.setAttribute("id",`${i+1}`);
    tr.innerHTML += `<td>${i+1}</td><td>${fName.value}</td> <td>${lName.value}</td> <td>${phone.value}</td>`;
    table.appendChild(tr);
    array[i] = new Person(fName.value, lName.value, phone.value, i);
    i++;
})

edit.addEventListener("click", function(){
    let change = +prompt("Enter the id you want to change!");
    let pom = document.getElementById(`${change}`);
    let newName = prompt("Enter new First Name");
    let newSurname = prompt("Enter new Last Name");
    let newPhone = prompt("Enter new phone number");
    pom.innerHTML = '';
    pom.innerHTML += `<td>${change}</td><td>${newName}</td> <td>${newSurname}</td> <td>${newPhone}</td>`;
    array[change-1] = new Person(newName, newSurname, newPhone, change - 1);
})
test.addEventListener("click", function() {
    console.log(array);
})