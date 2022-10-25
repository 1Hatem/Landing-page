//determining them number of section by using array to know number loop which will used


const navList = document.getElementById("navbar__list");

const sections = Array.from(document.querySelectorAll("section"));

//createElement li and link data-nav and menu__link

function createListItems(){
for(section in sections){
listItems=document.createElement("li");
listItems.innerHTML=`<li><a href="#${sections[section].id} data-nav="${sections[section].id}" class="menu__link">${sections[section].dataset.nav}</a>`;
navList.appendChild(listItems);

 }
 
}

//calling function


createListItems();


//put the properties of animation on the page


window.onscroll = function() {

 document.querySelectorAll("section").forEach(function(active) {
 
	if(
       
      !active.classList.contains("your-active-class")

    ){

    active.classList.add("your-active-class");

    } else{
         active.classList.remove("your-active-class");
    }
 });
};


//make function to be when I click a section in navlist going paragraph section

navList.addEventListener("click", (sec) => {
    sec.preventDefault();
    if (sec.target.dataset.nav) {
      document.getElementById(`${sec.target.dataset.nav}`)
      document.scrollIntoView({ behavior: "smooth" });
  //determining speed go to page
    setTimeout(() => {

    location.hash = `${sec.target.dataset.nav}`;
   },250);
  }
});

