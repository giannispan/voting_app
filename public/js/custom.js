function addFields(){

    // Container <div> where dynamic content will be placed
    var container = document.getElementById("choices_container");

    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "choice";
    input.className = "form-control";
    input.placeholder = "Enter choice text";
    container.appendChild(input);
    // Append a line break 
    container.appendChild(document.createElement("br"));
    
}
