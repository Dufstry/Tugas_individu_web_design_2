var errorName = document.getElementById('name-error')
var errorPhone = document.getElementById('phone-error')
var errorEmail = document.getElementById('email-error')
var errorMessage = document.getElementById('message-error')
var errorSubmit = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        errorName.innerHTML = 'Nama dibutuhkan';
        return false;
    }
    errorName.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        errorPhone.innerHTML = 'Nomer HP dibutuhkan';
        return false;
    }
    if(phone.length < 8){
        errorPhone.innerHTML = 'Nomer HP tidak benar';
        return false;
    }
    if(phone.length > 12){
        errorPhone.innerHTML = 'Nomer HP tidak benar';
        return false;
    }
    if(!phone.match(/^[0-9]{8,12}$/)){
        errorPhone.innerHTML = 'Nomer HP harus angka';
        return false;
    }
    errorPhone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        errorEmail.innerHTML = 'Alamat Email dibutuhkan';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorEmail.innerHTML = 'Alamat Email tidak valid';
        return false;
    }
    errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var Required = 30;
    var left = Required - message.length;

    if(left>0){
        errorMessage.innerHTML = left + ' karakter lagi';
        return false;
    }
    errorMessage.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        errorSubmit.style.display = 'block';
        errorSubmit.innerHTML = 'Ada yang kurang gaes';
        setTimeout(function(){errorSubmit.style.display = 'none';}, 3000);
        return false;
    }
}
