function random(){
    let img=document.getElementById("dice-1");
    let img2=document.getElementById("dice-2");
    let soga=songaunhien1();
    console.log(songaunhien1());
    let newlink1="./img/dice"+soga.toString()+".png";
    img.src=newlink1;
}
function songaunhien1(){
    return Math.floor(Math.random()*(6-1+1))+1;   
};