async function bored() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    const toDo = await response.json()
    handleJSON(toDo)
}

function handleJSON(data) {
    let p = document.querySelector('p');
    let temp = data.activity.split(" ")
    if (temp.includes('friends')) {
        p.innerText = data.activity + "\nBut you don't have friends, so do it alone :)";
    } else {
        p.innerText = data.activity;
    }
}

bored()

function refresh() {
    bored();
}