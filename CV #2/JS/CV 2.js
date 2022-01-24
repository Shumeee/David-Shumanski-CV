/* Declaring variables */
let text = document.getElementById("text");
let add = document.getElementById("add");
let ul = document.getElementById("ul");
let object = document.getElementById("object");
let array = [], i = 0, isCompleted = 0;
/* Functions */
// Function to check if the input is correct
function check(text){
    if(text.length == 0) return alert("You must enter an item on your list!");
    else return 1;
}
// Function to remove the <del> element when unchecked
function removeElement(x){
    let del = document.getElementById(`del ${x}`);
    del.parentNode.removeChild(del);
}
/* Objects */
function Todo(text, isCompleted) {
    this.item = text;
    if(isCompleted == 0){
        this.status = "incomplete";
        this.complete = 0;
    }else{
        this.status = "Complete";
        this.complete = 1;
    }
}
/* Events */
// Event for the 'Add' button
add.addEventListener("click", function (){
    if(check(text.value) == 1){
        array[i] = new Todo(text.value, isCompleted);

        let li = document.createElement("li");
        let label = document.createElement("label");
        let input = document.createElement("input");

        li.setAttribute("style", "display: block");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", `${i}`);
        label.setAttribute("for", `${i}`);
        label.setAttribute("id", `${i}`);

        label.innerHTML += `${text.value}`;

        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
// Event for the checkbox 
        label.addEventListener("click", function(event){
        // This if checks if the checkbox is ticked
            if(array[label.id].complete < 1) {
                array[label.id] = new Todo(event.target.innerHTML, isCompleted + 1);
                event.target.innerHTML = `<del id="del ${label.id}">${event.target.innerHTML}</del>`;
            }else{
                removeElement(label.id);
                array[label.id] = new Todo(event.target.innerHTML, isCompleted, label.id);
                label.innerHTML = `${event.target.innerHTML}`;
                isCompleted = 0;
            }
        });
        i++;
    }
});
// Event for the 'Get Object' button
object.addEventListener("click", function(){
    console.log(array);
})