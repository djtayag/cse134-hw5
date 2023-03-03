const alertBtn = document.getElementById('alert-btn');
alertBtn.addEventListener('click', handleAlert);

function handleAlert() {
    document.getElementById('alert-dialog').showModal();
}

const confirmBtn = document.getElementById('confirm-btn');
confirmBtn.addEventListener('click', handleConfirm);

function handleConfirm() {
    document.getElementById('confirm-dialog').showModal();
}

function confirmCancel() {
    document.getElementById('output').innerHTML = "Confirm result: false"
}

function confirmOK() {
    document.getElementById('output').innerHTML = "Confirm result: true";
}

const promptBtn = document.getElementById('prompt-btn');
promptBtn.addEventListener('click', handlePrompt);

function handlePrompt() {
    document.getElementById('prompt-dialog').showModal();
}

function promptOK() {
    let inputString = document.getElementById('input-text').value;
    let cleanString = DOMPurify.sanitize(inputString);
    if (inputString == null || inputString == "") {
        document.getElementById('output').innerHTML = "Prompt result: User didn't enter anything";
    }
    else {
        document.getElementById('output').innerHTML = "Prompt result: " + `${cleanString}`;
    }
    
}