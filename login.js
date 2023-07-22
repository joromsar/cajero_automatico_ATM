const Users = [
    {nombre: "Peter Parker", username: "peter@gmail.com", password: "123", saldo: 20},
    {nombre: "Bruce Wayne", username: "bruce@gmail.com", password: "123", saldo: 50},
    {nombre: "Carlos Ramirez", username: "carlos@gmail.com", password: "123", saldo: 80}
];


const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    // Obtener los datos ingresados por el usuario
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
     // buscar en el arreglo el usuario que intenta ingresar
     for (const cuenta of Users) {

        if (cuenta.username === username && cuenta.password === password) {
            
            // guardar el usuario actual en el local storage
            
           localStorage.setItem('cuenta', JSON.stringify(cuenta));
           alert(`Welcome Back! ${cuenta.nombre}`)

           //mandar al cajero
           window.location = 'cajero.html'

           return;
            

        }

        else {
            alert("Acceso Denegado, datos inválidos")
            return

        }

    }

})




