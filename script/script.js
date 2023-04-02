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