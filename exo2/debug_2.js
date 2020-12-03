let main = document.getElementById('main');
main.id = "le-premier-div";
main.style.display = "none";
main.innerHTML = "Mon nouveau texte !";

let html = document.getElementById('troisieme');
alert(html.innerHTML = "blabla");

if(html) {
    console.log(html);
}

else {
    let test = document.getElementById('test').innerHTML = "Test";
    alert(test);
}

let main2 = document.getElementById('quatrieme');
main2.style.display = "block";


