 shownotes()
 document.getElementById('btn').addEventListener('click', function (event) {
    let text = document.getElementById('txt');
    let title = document.getElementById('title')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let object={
        title:title.value,
        tnotes:text.value
    }
    notesobj.push(object)
    localStorage.setItem('notes',JSON.stringify(notesobj));
    text.value = "";
    title.value="";
   shownotes();
});
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let content = "";
    notesobj.forEach(function(element,index){
        content += ` <div id = 'notcard' class = 'noteCard my-2 mx-2 card' style = 'width : 18rem;'>
         
            <div id='cardbody' class='card-body'>
              <h5>Title:-${element.title}</h5>
                <h5 class='card-title'>Note ${index + 1}</h5>
                <p class='card-text'>${element.tnotes}</p>
                <button id=${index} class='del_btn' onclick="deleteButton(this.id)">Delete Node</button>
            </div>
        </div>`
    });
let display_notes = document.getElementById('notes')
if(notesobj.length!=0)
{
    display_notes.innerHTML=content;
}
else{
    display_notes.innerHTML='Nothing to show so please first keep you note by clicking on <b>ADD NOTE</b>'
}
}

function deleteButton(index){
    console.log("deleting"+index)
    let notes = localStorage.getItem('notes');

    if (notes == null) {
     let   notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
        
    }  
 
    notesobj.splice(index ,1)
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes();
}

let insearch=document.getElementById('insearch')
insearch.addEventListener('input' , function(){
    let inputval = insearch.value;
    let cardbody = document.getElementsByClassName('card-body');
    Array.from(cardbody).forEach(function(element){
        let text = element.getElementsByTagName('p')[0].innerHTML
        if(text.includes(inputval))
        {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
})