function submit() {
    var data = document.getElementById("input").value
    if (data == String.fromCharCode(72, 66, 67, 84, 70, 123, 70, 76, 52, 71, 95, 70, 48, 82, 95, 87, 51, 66, 125 )) {
        alert("Great");
    } else {
        alert("Incorrect Password");
    }
}