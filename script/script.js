// Primer cuatri - Trabajo en clase 

function tabsclick(event){
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);
    for (let i = 0; i < content.lenght; i++){
        content[i].style.display = 'none';
        if(content[i].getAttribute('id') == id){
            content[i].style.display = 'block';
        }
    }
}

const links = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < content.lenght; i++){
    content[i].style.display = 'none';
}

content[0].style.display = 'block';

for(let i = 0; i < links.lenght; i++){
    links[i].addEventListener('click', tabsclick);
}
