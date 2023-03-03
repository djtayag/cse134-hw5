let inputTitle = document.getElementById('enter-title');
let inputDate = document.getElementById('enter-date');
let inputSummary = document.getElementById('enter-summary');
document.getElementById('add-button').addEventListener('click', addPost);

function addPost () {
    if (inputTitle.value == "" || inputDate.value == "" || inputSummary.value == "") {
        document.getElementById('add-empty-field').showModal();
    }
    else {
        var temp = document.getElementById('template-post').content;
        var postToAdd = document.importNode(temp, true);
        postToAdd.getElementById('title').innerHTML = inputTitle.value;
        postToAdd.getElementById('date').innerHTML = inputDate.value;
        postToAdd.getElementById('summary').innerHTML = inputSummary.value;
        
        let post = {
            title: inputTitle.value,
            date: inputDate.value,
            summary: inputSummary.value
        };

        let post_serialized = JSON.stringify(post);
        if (localStorage.getItem(inputTitle.value) === null) {
            localStorage.setItem(inputTitle.value, post_serialized);
            document.body.appendChild(postToAdd);
        }
        else {
            document.getElementById('already-exists').showModal();
        }
    }
}

function editPost (parent) {
    document.getElementById('enter-title-dialog').value = parent.children[0].innerHTML;
    document.getElementById('enter-date-dialog').value = parent.children[1].innerHTML;
    document.getElementById('enter-summary-dialog').value = parent.children[2].innerHTML;
    document.getElementById('edit-dialog').showModal();
}

function editOK (parent) {
    let titleEdit = document.getElementById('enter-title-dialog').value;
    let dateEdit = document.getElementById('enter-date-dialog').value;
    let summaryEdit = document.getElementById('enter-summary-dialog').value;

    let currentTitle = parent.children[0].innerHTML;
    let currentDate = parent.children[1].innerHTML;
    let currentSummary = parent.children[2].innerHTML;
    
    if (titleEdit != currentTitle || dateEdit != currentDate || summaryEdit != currentSummary) {

        parent.children[0].innerHTML = titleEdit;
        parent.children[1].innerHTML = dateEdit;
        parent.children[2].innerHTML = summaryEdit;

        localStorage.removeItem(currentTitle);
        
        let post = {
            title: titleEdit,
            date: dateEdit,
            summary: summaryEdit
        };

        let post_serialized = JSON.stringify(post);
        localStorage.setItem(titleEdit, post_serialized);

    }
}

function deletePost() {
    document.getElementById('delete-dialog').showModal();
}

function deleteOK(parent) {

}