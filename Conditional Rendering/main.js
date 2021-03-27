var flag = true

function toggle() {
    flag = !flag
    if (flag) {
        document.getElementById('textCard').style.display = 'block'
        document.getElementById('toggleButton').innerText = 'visibility_off'
    }
    else {
        document.getElementById('textCard').style.display = 'none'
        document.getElementById('toggleButton').innerText = 'visibility'
    }
}

function showAlert() {
    document.getElementById('alertDiv').style.display = 'block'
    // setTimeOut --> exec code after a given period of time
    setTimeout(() => {
        document.getElementById('alertDiv').style.display = 'none'
    }, 2000);
}