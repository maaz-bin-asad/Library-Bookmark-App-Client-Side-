console.log('Welcome')
function Book(title,author,type)
{
    this.name=name;
    this.title=title;
    this.type=type;
}
function Display(){
Display.prototype.add=function(book){
tableBody=document.getElementById('tableBody')
let uistring=`<tr>
<th scope="col">${book.name}</th>
<th scope="col">${book.author}</th>
<th scope="col">${book.type}</th>
</tr>
`
tableBody.innerHTML+=uistring;
}
Display.prototype.clear=function(){
    libraryForm.reset();
}
}
let libraryForm=document.getElementById('libraryForm')
libraryForm.addEventListener('submit',libraryFormSubmit);8
function libraryFormSubmit(e){
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let fiction=document.getElementById('fiction')
    let programming=document.getElementById('programming')
    let cooking=document.getElementById('cooking');
    let type
    if(fiction.checked){
        type=fiction.value
    }
    else if(programming.checked){
       type=programming.value
    }
    else{
        type=cooking.value
    }
    let book=new Book(name,author,type);
    let display=new Display();
    display.add(book);
    display.clear()
    e.preventDefault()
}