var wrapperEle = document.body.querySelector(".wrapper")
var counterEle = document.body.querySelector(".counter")
var randomList = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];


for(var i=0; i<randomList.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var ageEle = document.createElement("h2");


    if(randomList[i].name){
        nameEle.innerHTML = randomList[i].name;
        ageEle.innerHTML = randomList[i].age;
        if(randomList[i].age > 25){
            ageEle.style.color = "green";
            nameEle.style.color = "green";
        }

    }
    wrapperEle.appendChild(ele);
    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
}

var i=5;

function counterFunction(){
    i++;
    counterEle.innerHTML = "counter: " + i;
}

document.body.querySelector(".button").addEventListener("click", function(){
    counterFunction();
})





