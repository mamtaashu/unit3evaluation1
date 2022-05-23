//store the products array in localstorage as "products"

var array=JSON.parse(localStorage.getItem("product")) || []
document.querySelector("#add_product").addEventListener("click",function(){
   event.preventDefault();
   var obj={

    
    type: document.querySelector("#type").value,
    desc: document.querySelector("#desc").value,
    price: document.querySelector("#price").value,
    image: document.querySelector("#image").value,
    

}
console.log(obj)


   array.push(obj);

   localStorage.setItem("product",JSON.stringify(array))
})



    




