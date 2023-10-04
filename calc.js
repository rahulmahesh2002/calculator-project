var screen = document.getElementById('screen');
function btnclick(value){
screen.value+=value;

}
function clrscreen(){
    screen.value='';
}
function result(value){
    var res = eval(screen.value);
    screen.value=res;
}
