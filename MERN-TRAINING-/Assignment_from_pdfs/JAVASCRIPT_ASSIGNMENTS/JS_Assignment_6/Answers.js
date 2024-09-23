
function fetchData(){
    let data=fetch("https://jsonplaceholder.typicode.com/users");
    return data;
}

let fd=fetchData();
console.log(fd);

document.getElementById("products").addEventListener("click",function(){
    fd
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        data.forEach(item => {
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML=`<p style="margin:30px">${item.id}. ${item.name} ${item.email} ${item.address.street},${item.address.city},${item.address.zipcode}</p>`
                    
                    var container = document.getElementById("myContainer");
                    container.appendChild(newDiv);
                
                    var button = document.querySelector("button");
                    button.style.display = "none";
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error)
});
})
