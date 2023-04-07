// This function is for altering color of background.
const dark_theme= document.querySelector(".rightbutton")

function bgalter() {
    const header =document.querySelector("header");
    const main= document.querySelector("main");
    const body = document.querySelector("body");
    if (dark_theme.textContent == "Dark Theme") {
         header.classList.add("drkTheme")
        main.classList.add("drk2Theme")
        body.classList.add("drkTheme")
        dark_theme.textContent = "Light Theme"
    }else if(dark_theme.textContent == "Light Theme"){
        header.classList.remove("drkTheme")
        main.classList.remove("drk2Theme")
        body.classList.remove("drkTheme")
        dark_theme.textContent = "Dark Theme"
    };
        
    
    
    
}
dark_theme.addEventListener("click", bgalter)


// This funtion is to implement the use of cancel button.
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

// This function gives  new note a power to remove text or make area visible.
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
  

// This is the array which will store objects containing title and body.
const notesArray = [];
const note1 = {title: "note one", body: "This is the first note."}
const note2 = {title: "note two", body:"This is the second note."}
notesArray.push(note1)
notesArray.push(note2)


// This function is for save button.
function saveNote() {
  const txtbody = txtarea.value;
  if (txtarea.value === "") {
    alert("Please write something before saving.")
  }else{
    while (true) {
      const asktitle = prompt("What is the title of the note?");
      if (asktitle === null) {
        // User clicked "Cancel", don't save the note
        break;
      } else if (asktitle !== "") {
        // User entered a non-empty title, save the note
        notesArray.push({title: asktitle, body: txtbody});
        const noteList = document.querySelector(".notelist")
        const newElement = document.createElement("li")
        newElement.textContent = asktitle
        noteList.appendChild(newElement);
        break;
      } else {
        // User entered an empty title, prompt again
        alert("Please enter a title for your note.");
      }
    }
  }       
  
}

savebtn.addEventListener("click", saveNote)


// This function is getting body of notes in text area.

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
  
