var coll = document.getElementsByClassName("collapser");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var content = document.getElementsByClassName("section-content-collapsee")[0];
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var btns = document.getElementsByTagName("button"); 
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("active", function() {
      setTimeout(() => {
        console.log("waiting");
      }, 2000);
    });
  }

var services = document.getElementById("services");
services.addEventListener("click", function() {
    var st = document.getElementById("services-text");
    if (st.innerHTML === "Mostrar servicios")
        st.innerHTML = "Ocultar servicios";
    else
        st.innerHTML = "Mostrar servicios"
  });