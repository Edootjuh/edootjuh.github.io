if (document.location.search && document.location.search.indexOf('sent') !== -1)
    document.getElementById('div').innerHTML = `
    <h1>Edo Mangelaars</h1>
    <h3 id="thanks">Thanks</h3>`;
else {
    document.getElementById('div').innerHTML = `
<h1>Edo Mangelaars</h1>
<div id="bottom">
    <a id="linkedin" href="//www.linkedin.com/in/edo-mangelaars-88649555/">in</a>
    <form id="form" action="//formcarry.com/s/HJUO3Yirf" method="POST" accept-charset="UTF-8">
        <p id="emailme">E-mail me</p>
        <input id="email" type="email" name="email" placeholder="Your e-mail address" required>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <button id="send" class="g-recaptcha"
                data-sitekey="6LeM70IUAAAAAIoGoFzrI967MuYAzAmgwkeU0Hqs"
                data-callback="onSubmit">
            Send
        </button>
    </form>
</div>`;
    window.addEventListener('load', checkValidity);
    const script = document.createElement('script');
    script.src = '//www.google.com/recaptcha/api.js?onload=onLoad';
    document.body.appendChild(script);
}

function checkValidity() {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const send = document.getElementById('send');

    const valid = !(email.validity) || (email.validity.valid && message.validity.valid);
    if (valid) send.removeAttribute('disabled');
    else send.setAttribute('disabled', '');
    return valid;
}

function onLoad() {
    document.getElementById('email').addEventListener('input', checkValidity);
    document.getElementById('message').addEventListener('input', checkValidity);
    setTimeout(checkValidity, 0);
}

function onSubmit(token) {
    if (checkValidity())
        document.getElementById('form').submit();
}

