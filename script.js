const text = document.querySelector("input");
const output = document.querySelector("#output");
const addBtn = document.querySelector("#submit");

const arr = [];

function check(val, arr) {
    if (val === '') {
        return false
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].content === val) {
            alert("Already exist")
            text.value = ''
            return false
        }
    }
    return true
}

function display(array) {
    output.innerHTML = ""
    for (let i = 0; i < array.length; i++) {

        const div = document.createElement('div');

        const span = document.createElement('span');
        span.textContent = array[i].content;
        span.setAttribute("class", array[i].completed ? 'line' : '')

        const doneBtn = document.createElement('button');    
        doneBtn.innerHTML = `<span>&#10004</span>`;
        doneBtn.setAttribute("onclick", `doneTask('${i}')`)

        const delBtn = document.createElement('button');    
        delBtn.innerHTML = 'Del';
        delBtn.setAttribute("onclick", `delTask('${i}')`)
        
        div.appendChild(span)
        div.appendChild(doneBtn)
        div.appendChild(delBtn)

        output.appendChild(div)
    }
}

function delTask(i) {
    console.log(i);
    arr.splice(i, 1)
    console.log(arr);
    display(arr)
}

function doneTask(i) {
    console.log(i);
    arr[i].completed = !arr[i].completed;
    display(arr)
    console.log(arr);


}

function addItem() {
    const inputVal = text.value.trim();
    if (check(inputVal, arr)) {
        arr.push({
            content: inputVal,
            completed: false
        })
    }
    display(arr)
    text.value = ''
    console.log(arr);
}

addBtn.addEventListener('click', addItem)

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
})