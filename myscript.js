function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name" + userName +
    "<br/> phone" + phone +
    "<br/> email" + email;

    Email.send({
    Host : "s1.maildns.net",
    Username : "cryptohack010@gmail.com",
    Password : "84450ADDB2BCCF62DA13DA66A46D054F2465",
    To : 'chiemmanuelugochukwu007@gmail.com',
    From : "cryptohack010@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
})
    .then(
    message => {
        if(message == 'OK'){
            swal("Successful", "You've registered as a Student", "success");
        }else{
            swal("error", "You clicked the button!", "error");
        }
    }
    );
}