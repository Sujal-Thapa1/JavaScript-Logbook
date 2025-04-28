const button = document.querySelector('button.bt');
const main= document.querySelector('.main');
const inputField = document.querySelector('input.in');
function create_elements(){

    const divLeft = document.createElement('div');
    console.log("div has been created");
    divLeft.className = 'divLeft'
    main.append(divLeft);

    const divRight = document.createElement('div');
    divRight.className = 'btnList';
    divLeft.append(divRight)

    const input = document.createElement('input');
    input.type = 'checkbox';
    divLeft.append(input);    

    const span = document.createElement('span');
    span.innerText = inputField.value;
    span.className = 'span';
    divLeft.append(span);

    const btt_add = document.createElement('button');
    btt_add.textContent = "Replace";
    btt_add.className = 'add'
    divRight.appendChild(btt_add);

    const btt_delete = document.createElement('button');
    btt_delete.textContent = "Delete";
    btt_delete.className = 'del'
    divRight.appendChild(btt_delete);
    btt_delete.addEventListener('click', function(){
        main.removeChild(divLeft)
    })
    button.addEventListener('click', function () {
        inputField.value = '';
    })

}