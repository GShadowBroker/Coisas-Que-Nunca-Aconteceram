'use strict';

/*TEMPLATE MESSAGE*/

window.onload = setTimeout(function firstMessage() {
    let message = document.createElement('div');

    message.setAttribute('id',"message");
    message.style.border = "1px solid blue";
    message.style.width = "70%";
    message.style.height = "fit-content";
    message.style.height = "-moz-fit-content";
    message.style.padding = "8px";
    message.style.backgroundColor = "blue";
    message.style.color = "white";
    message.style.borderRadius = "16px";
    message.style.margin = "5px";
    message.style.boxShadow = "1px 1px 4px black";
    message.style.display = "flex";
    message.style.justifyContent = "space-around";
    message.style.alignItems = "center";

    message.innerHTML = "<div class='profile_pic'><img src='Images/girl_profile.jpg'></div><div class='mensagem_manu'><p>Oieee!!</p></div>";

    document.getElementById('chat_area').appendChild(message);

    let picBox = document.querySelector('.profile_pic');
    let manuMessage = document.querySelector('.mensagem_manu');
    let image = document.querySelector('.profile_pic img');

    image.style.maxWidth = "50px";
    image.style.borderRadius = "80px"
}
,5000);

setTimeout(function secondMessage() {
    let message2 = document.createElement('div');

    message2.setAttribute('id',"message2");
    message2.style.border = "1px solid blue";
    message2.style.width = "70%";
    message2.style.height = "fit-content";
    message2.style.height = "-moz-fit-content";
    message2.style.padding = "8px";
    message2.style.backgroundColor = "blue";
    message2.style.color = "white";
    message2.style.borderRadius = "16px";
    message2.style.margin = "5px";
    message2.style.boxShadow = "1px 1px 4px black";
    message2.style.display = "flex";
    message2.style.justifyContent = "space-around";
    message2.style.alignItems = "center";
    
    message2.innerHTML = "<div class='profile_pic2'><img src='Images/girl_profile.jpg'></div><div class='mensagem_manu2'><p>Tudo bem?</p></div>";

    document.getElementById('chat_area').appendChild(message2);

    let picBox = document.querySelector('.profile_pic2');
    let manuMessage = document.querySelector('.mensagem_manu2');
    let image2 = document.querySelector('.profile_pic2 img');

    image2.style.maxWidth = "50px";
    image2.style.borderRadius = "80px"
}
,7500);

/*Mouseover*/

let enviar = document.querySelector('#enviar');
let fechar = document.querySelector('#fechar_chat button');

enviar.addEventListener('mouseenter',mouseEnter(enviar));
fechar.addEventListener('mouseenter',mouseEnter(fechar));

function mouseEnter(element) {
    element.style.cursor = 'pointer';
}

/*Abrir e Fechar janela do chat*/
let chat = document.querySelector('.chat');

setTimeout(() => chat.style.visibility = 'visible', 4000);

function abrirChat() {
    if (chat.style.visibility == 'hidden') {
        chat.style.visibility = 'visible';
    }
}

function fecharChat() {
    document.querySelector('#fechar_chat button').style.transition = 'all 0s';
    document.querySelector('#text_box #enviar').style.transition = 'all 0s';

    chat.style.visibility = 'hidden';
}

/*CHAT BLINK EFFECT*/

let title = document.querySelector('#título');

setInterval(() => {
    if (title.style.color != 'yellow') {
        title.style.color = 'yellow';
    } else {
        title.style.color = 'white';
    }
}, 500);

function blinkTitle() {
    if (!title.style.color === 'yellow') {
        title.style.color = 'yellow';
    } else {
        title.style.color = 'white';
    }
}

/*MENSAGENS DO USUÁRIO*/

let input = document.querySelector('#texto');

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('#enviar').click();
    }
});

function sendMessage() {
    if (document.querySelector('#texto').value == '' || document.querySelector('#texto').value == 'Digite sua mensagem aqui') {
        alert(`Você iludidamente disse: porra nenhuma`);
    } else {
        alert(`Você iludidamente disse: ${document.querySelector('#texto').value}`);
    }
}
/*PRACTICE*/

let header = document.querySelector('.mensagem_título');

setInterval(() => {
    if (header.style.fontSize <= '32pt') {
        header.style.transition = 'all 10s';
        header.style.fontSize = '38pt';
    } else {
        header.style.transition = 'all 10s';
        header.style.fontSize = '32pt';
    }
}, 10000);