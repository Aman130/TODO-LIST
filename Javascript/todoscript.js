function addTasks(data){
    data.forEach(function (arrayItem) {
        var x = arrayItem["task"];
        var li = document.createElement("li");
        var inputValue = x;
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
    })
}

var data=fetch('/getapi')
    .then(response => response.json())
    .then(data => addTasks(data));

console.log(data);
var complist=document.getElementById("myUL");
complist.addEventListener('click',function(event){
    if(event.target.tagName=="LI")
    {
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName=="SPAN")
    {
        var text1=event.target.parentElement.innerText;
        event.target.parentElement.remove();
        console.log(text1);
        var x="";
        for(let i=0;i<=text1.length-3;i++)
        {
            if(text1[i]=='\\')
                break;
            x+=text1[i];
        }
        const data={
            'use': x
        };
        fetch('/api1', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
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
