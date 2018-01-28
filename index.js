function checkValidity() {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const send = document.getElementById('send');

    const valid = !(email.validity) || (email.validity.valid && message.validity.valid);
    if (valid) send.removeAttribute('disabled');
    else send.setAttribute('disabled', '');
    return valid;
}

window.addEventListener('load', checkValidity);

function onLoad() {
    document.getElementById('email').addEventListener('input', checkValidity);
    document.getElementById('message').addEventListener('input', checkValidity);
    setTimeout(checkValidity, 0);
}

function onSubmit(token) {
    if (checkValidity())
        document.getElementById('form').submit();
}
