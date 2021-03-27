var beverages = ['tea', 'coffee', 'milk']

// iterate over the array and put each element under li
function mapBeverages() {

    var listString = ""
    for (var i = 0; i < beverages.length; i++)
        // listString += "<li class='list-group-item'>" + beverages[i] + "</li>"
        listString +=
            `<li class='list-group-item d-flex justify-content-between align-items-center'>
            ${beverages[i]}
            <button class="btn p-0 text-danger material-icons" onclick="deleteBeverage(${i})">clear</button>
        </li>`

    document.getElementById("beverageList").innerHTML = listString
}

function deleteBeverage(index) {
    beverages.splice(index, 1)
    mapBeverages()
}

function addBeverage() {
    var textValue = document.getElementById('newBeverageText').value

    beverages.push(textValue)
    document.getElementById('newBeverageText').value = ''
    mapBeverages()
}

function textChanged() {
    var textValue = document.getElementById('newBeverageText').value

    if (textValue === null || textValue.length == 0) {
        document.getElementById('addButton').disabled = true
    }
    else if (textValue.length > 0) {
        document.getElementById('addButton').disabled = false
    }
}

