//  function add()
//  {
//      var list2 =document.getElementByid("list2");
//      var item1 = prompt("Enter the element")
//      //list2.style.display = "inline-block";
//       //const x = prompt('Enter Name','Note');
//       if (x !=null)
     
//           var enrty=document.createElement("li")/*.innerHTML = "x"*/;
//           enrty.appendChild(document.createTextNode(Element1));
//           list2.appendChild(enrty);
//  }
//  function Delete()
//  {
//      var list2=document.getElementByid("list2");
//      list2.style.display="none";
//  }
 //static getElementById()
    // let Name = prompt ("What is your name","Guest");
 
    // var list = document.getElementById('list');
    // var item1 = window.prompt("Enter first item:");
    //   if (item1 != null) {
    //       var entry = document.createElement('li');
    //       entry.appendChild(document.createTextNode(item1));
    //       list.appendChild(entry);       
    // }
const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("container"));

if(container){
  notes.forEach((note) =>{
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () =>{
  addNewNote();
});

function addNewNote(text = ""){
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="notes">
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>
  `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () =>{
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () =>{
    note.remove();

    updateLocalStorage();
  });

  textArea.addEventListener("input", (e) =>{
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLocalStorage();
  });

  document.body.appendChild(note);
}

function updateLocalStorage(){
  const notesTxt = document.querySelectorAll("textarea");
  const notes = [];

  notesTxt.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}