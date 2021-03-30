var users = []
var posts = []
var todos = []
var albums = []

var userId = 0

function setUserId(id) {
    userId = id
}

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            users = data
            mapUsers()
        })
}

function mapUsers() {
    var postsListItems = ""
    for (let i = 0; i < users.length; i++) {
        postsListItems += `<button class="list-group-item list-group-item-action text-primary" onclick="setUserId(${users[i].id})">${users[i].name}</button>`
    }
    document.getElementById('usersList').innerHTML = postsListItems
}

function getPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(data => {
            posts = data
            mapPosts()
        })
}

function mapPosts() {
    var cards = ""

    for (let i = 0; i < posts.length; i++) {
        cards +=
            "<div class='card my-2'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title text-primary mb-3'>" + posts[i].title + "</h5>" +
            "<p class='card-text'>" + posts[i].body + "</p>" +
            "</div>" +
            "</div>"
    }
    document.getElementById('postCards').innerHTML = cards
}

function getTodos() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(data => {
            todos = data
            mapTodos()
        })
}

function mapTodos() {
    var todosListItems = ""
    for (let i = 0; i < todos.length; i++) {
        todosListItems += `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${todos[i].title}
        <span class="material-icons ${(todos[i].completed) ? 'text-success' : 'text-warning'}">${(todos[i].completed) ? 'task' : 'pending_actions' }</span>
      </li>`
    }
    document.getElementById('todosList').innerHTML = todosListItems
}

function getAlbums() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(data => {
            albums = data
            mapAlbums()
        })
}

function mapAlbums() {
    var albumsListItems = ""
    for (let i = 0; i < albums.length; i++) {
        albumsListItems += `<li class="list-group-item">${albums[i].title}</li>`
    }
    document.getElementById('albumsList').innerHTML = albumsListItems

}