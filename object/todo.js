let list=[{
    check:true,
    title:"Complete website"
}];


const container = document.getElementById("container");
function fetchlist(){
    const htmlCode = list
        .map((item,index)=>`<div>
            <input type="checkbox" onchange="changeCheck(${index},this.value)" ${item.check ? "checked" : ""} />
            <input type="text" onchange="changeTitle(${index}, this.value)" value="${item.title}" ${item.check ? "class='checked'" : ""} />
            <button onclick="remove(${index})">Delete</button>
        </div>`)
        .join("")
    container.innerHTML=htmlCode;
}
function add(){
    list.push({
        check: false,
        title: ""  
    });
    fetchlist();
}
fetchlist();

function remove(index){
    list.splice(index, 1)
    fetchlist();
}

function changeCheck(index, value){
    list[index].check = !(list[index].check)
    fetchlist();
}

function changeTitle(index, value){
    list[index].title = value
    fetchlist();
}

fetchlist();