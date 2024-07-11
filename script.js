let box = document.getElementById("Box");
let colorArray = [ "pink", "purple", "skyblue", " yellow", "blue"];

const changeColor = () =>{
    const randomnum = parseInt(Math.random()*5);
    console.log(Math.random());

    box.style.backgroundColor = colorArray[2]
};

changeColor();