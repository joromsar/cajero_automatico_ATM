const input = document.querySelector('#consignacion');
const consult = document.querySelector('#consult');
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');
const saludo = document.querySelector('#saludo');
const saldoConsulta = document.querySelector('#saldo_current');
const saldoActual = document.querySelector('#saldo_actual');
const notification = document.querySelector('#notification');
const notificationp = document.querySelector('#notification p');
const notificationConsult = document.querySelector('#notificationConsult');
const notificationConsultp = document.querySelector('#notificationConsult p');
const notificationMinValue = document.querySelector('#notificationminvalue');
const notificationMinValuep = document.querySelector('#notificationminvalue p');
const transactionValue = document.querySelector('#transaction_value');
const saldoMax = 990;
const saldoMin = 10;

let cuentas = null;


addEventListener('DOMContentLoaded', function(){

    //Hidratar el estado
    const userAttempt = localStorage.getItem('cuenta');
    const cuentaParse = JSON.parse(userAttempt)
    cuentas = cuentaParse
    
    saludo.innerHTML = "Hola!," + " " + "<span>" + cuentaParse.nombre + "</span>";

   // Cuando se ejecuta cuando se cargue el DOM
   const saldoGuardado = localStorage.getItem('saldo');
   // guardarlo eb ek objeto de la cuenta
   cuentas.saldo = Number(saldoGuardado)
   // mostrarlo en el saldo Actual
   saldoActual.innerHTML = saldoGuardado

  
})





// evento click deposito
deposit.addEventListener('click', function(e){
   
//Obtener el valor ingresado por el usuario en el input
const deposito = input.value;
//convertir de string a int
const num_deposito = parseInt(deposito)
transactionValue.innerHTML = num_deposito
const saldo = cuentas.saldo
if(num_deposito >= saldoMax || saldo >= saldoMax){
    notification.classList.remove('hidden')
    notificationp.innerHTML = "<h4>El monto a retirar supera el saldo máximo permitido</h4>"
    resetNotification()
    return
} 

const resultado = saldo + num_deposito
saldoActual.innerText = resultado
//Actualizar el resultado del saldo al objeto cuentas
cuentas.saldo = resultado
localStorage.setItem('saldo', resultado)


});

// evento click retiro
withdraw.addEventListener('click', function(e){
    //Obtener el valor ingresado por el usuario para hacer el retiro
    const retiro = input.value;
    // convertir tipo de dato de string a entero
    const num_retiro = parseInt(retiro);
    transactionValue.innerHTML = num_retiro
    // mostrar el saldo actual
    const saldo = cuentas.saldo;
    

    if(num_retiro > saldo || saldo <= saldoMin){
        notification.classList.remove('hidden')
        notificationp.innerHTML = "<h4>El monto a retirar supera el saldo mínimo permitido</h4>"
        resetNotification()
        return
    } 
     // Restar el resultado con el saldo
     const resultado = saldo - num_retiro;
     saldoActual.innerText = resultado

    //Actualizar el resultado del saldo al objeto
    cuentas.saldo = resultado
    localStorage.setItem('saldo', resultado)
    

})

function resetNotification(){
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000)
}

// evento click consulta de saldo
consult.addEventListener('click', function (e) {
    console.log(e);
    // Mostrar el saldo actual
    const saldo = cuentas.saldo

    if(saldo){
        notificationConsult.classList.remove('hidden')
        notificationConsultp.innerHTML = "<h4 class='uk-alert-success'>Current Balance: </h4>" + cuentas.saldo
        resetNotificationSaldo()
        return
    }
    

});

function resetNotificationSaldo(){
    setTimeout(() => {
        notificationConsult.classList.add('hidden');
    }, 3000)
}

function updateBalance(oldbalance, newbalance){
    for (const i of Users) {
        if(i.nombre.includes(oldbalance)){
            newbalance = i.saldo + num_deposito  
        }
    }

}