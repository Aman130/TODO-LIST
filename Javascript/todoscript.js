var complist=document.getElementById("myUL");
complist.addEventListener('click',function(event){
    if(event.target.tagName=="LI")
    {
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName=="SPAN")
    {
        event.target.parentElement.remove();
    }
},false);

var mylist = document.getElementsByClassName("list-item");
var i;
for (i = 0; i < mylist.length; i++) {
  var make_span= document.createElement("SPAN");
  var make_txt= document.createTextNode("\u00D7");
  make_span.className = "close";
  make_span.appendChild(make_txt);
  mylist[i].appendChild(make_span);
}

var add=document.getElementById("add");
add.addEventListener('click',function(ev){
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-text").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("input-text").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
},false);