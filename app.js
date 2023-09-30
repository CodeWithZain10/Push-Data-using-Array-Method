const arr = []

const inputElement = document.getElementById('inputElement');
const pushBtn = document.getElementById('pushBtn');
const arrayData = document.getElementById('arrayData')

pushBtn.addEventListener('click',()=>{
    const data = inputElement.value

    if(data.trim() !== ""){
        arr.push(data)
    }

    arrayData.textContent = "Data : " + arr.join(', ');

    inputElement.value = "";
})