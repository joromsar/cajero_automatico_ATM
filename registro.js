const Users = [
    {nombre: "Peter Parker", username: "peter@gmail.com", password: "123", saldo: 20},
    {nombre: "Bruce Wayne", username: "bruce@gmail.com", password: "123", saldo: 50},
    {nombre: "Carlos Ramirez", username: "carlos@gmail.com", password: "123", saldo: 80}
];


const registerForm = document.querySelector('#register_form');


registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector("#nombre").value;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const saldo = document.querySelector("#saldo").value;

    const usuarioRegistrado = Users.find(user => user.username === username)


    if (usuarioRegistrado) {
        return alert('User registered previously and created');
    }

    alert('Account Created Successfully');

    window.location.href = 'index.html'


})