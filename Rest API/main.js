var posts = []

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            posts = data
            document.getElementById('progressSpinner').innerHTML = ''
            mapCards()
        })
}

function mapCards() {
    var cards = ""

    for (let i = 0; i < posts.length; i++) {
        cards +=
            "<div class='card my-2'>" +
            "<div class='card-body'>" +
            "<h4 class='card-title text-primary mb-3'>" + posts[i].title + "</h4>" +
            "<p class='card-text'>" + posts[i].body + "</p>" +
            "</div>" +
            "</div>"
    }
    document.getElementById('cards').innerHTML = cards

}