

var data=JSON.parse(localStorage.getItem("product"))

console.log(data);

displayData(data)

function displayData(allData)
{
allData.forEach((element,index)=> {

    document.querySelector("#all_products").innerHTML="";
    var div=document.createElement("div")
    div.setAttribute("id","container")

    var type=document.createElement("p")
    type.innerText=element.type

    var desc=document.createElement("p")
    desc.innerText=element.desc

    var price=document.createElement("p")
    price.innerText=element.price

    var image=document.createElement("img")
    image.src=element.image

    var remove=document.createElement("button")
    remove.innerText="remove"
    remove.addEventListener("click",function(){
        remove(element,index)
    })
    





    div.append(type,desc,price,image,remove)
    document.querySelector("#all_products").append(div)

});

}
function remove(element,index){
allData.splice(index,1)
localStorage.setItem("pro",JSON.stringify(allData))
window.location.reload();

}
