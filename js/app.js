let button_clicked = `yes`;

function buttonclick(details){
    cookies.set(`button_clicked`, `yes`);
    
}
let click_button = document.getElementById(`#click_button`);

click_button.addEventListener(`click`, buttonclick);

let click_value = cookies.get(`button_clicked`);

if(click_value === undefined){
    button_clicked.insertAdjacentHTML(`afterend`, `<h1>Please click the button</h1>`);

}else{
    button_clicked.insertAdjacentHTMl(`afterend`, `<h1>Good job on making a cookie</h1>`);
}

function cookie_delete(details){
     cookies.remove(`button_clicked`);

}

let delete_button = document.getElementById(`#delete_button`);
delete_button.addEventListener(`click`, cookie_delete);