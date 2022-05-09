
function emailCheck() {
    var email = document.getElementById("emailID").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
        alert("Must enter a valid email address");
        return false;
    }
}
function dateCheck() {
    var dateTime = document.getElementById("dateID").value;
    if (dateTime === "" || dateTime === null) {
        alert("Please enter a date");
        return false;
    }
    //get current date from system
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    var date = dateTime.split('T')[0];
    if (date <= today) {
        alert("Date must be after today");
        return false;
    }


}
function capcheck() {
    var cap1 = document.getElementById("capID").value;
    var cap2 = document.getElementById("capID1").value;
    if (cap1 === "" || cap1 === null || cap2 === "" || cap2 === null) {
        alert("Please solve to submit");
        return false;
    }
    let cap = cap1 * cap2;
    //get current date from system

    if (cap !== 25) {
        alert("Incorrect, try again");
        return false;
    }
}
