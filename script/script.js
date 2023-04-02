const dark_theme= document.querySelector(".rightbutton")

function bgalter() {
    const header =document.querySelector("header");
    const main= document.querySelector("main");
    if (dark_theme.textContent == "Dark Theme") {
         header.classList.add("drkTheme")
        main.classList.add("drk2Theme")
        dark_theme.textContent = "Light Theme"
    }else if(dark_theme.textContent == "Light Theme"){
        header.classList.remove("drkTheme")
        main.classList.remove("drk2Theme")
        dark_theme.textContent = "Dark Theme"
    };
        
    
    
    
}
dark_theme.addEventListener("click", bgalter)

const cancelbtn = document.querySelector(".cancel")
const savebtn= document.querySelector(".save")
const txtarea = document.querySelector("textarea")

function hidearea(){
    
    dark_theme.classList.add("nodisplay")
    cancelbtn.classList.add("nodisplay")
    savebtn.classList.add("nodisplay")
    txtarea.classList.add("nodisplay")
}

cancelbtn.addEventListener("click", hidearea)

const newNote= document.querySelector(".leftbutton")
function makevisible() {
    if (dark_theme.classList.contains("nodisplay")) {
      dark_theme.classList.remove("nodisplay");
      cancelbtn.classList.remove("nodisplay");
      savebtn.classList.remove("nodisplay");
      txtarea.classList.remove("nodisplay");
    } else {
      txtarea.value = "";
    }
  }
  
  newNote.addEventListener("click", makevisible);
  


const notesArray = [];
const note1 = {title: "note one", body: "This is the first note."}
const note2 = {title: "note two", body:"This is the second note."}
notesArray.push(note1)
notesArray.push(note2)



function saveNote() {
  const asktitle = prompt("What is the title of the note?");
  const txtbody = txtarea.value;
  notesArray.push({title: asktitle, body: txtbody});
  const noteList = document.querySelector(".notelist")
  const newElement = document.createElement("li")
  newElement.textContent = asktitle
  noteList.appendChild(newElement)
}

savebtn.addEventListener("click", saveNote)

const noteList = document.querySelector('.notelist');

noteList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const clickedTitle = event.target.textContent;
    
      let note;
      for (const n of notesArray) {
        if (n.title === clickedTitle) {
          note = n;
          break;
        }
      }
      if (note) {
        txtarea.value = note.body;
      }
    }
  });
  
