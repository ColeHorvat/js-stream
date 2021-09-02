function running_late() {
    let date = new Date();
    let time = date.getHours();

    if(time < 18)
        return "It is still early!";
    else
        return "It is late!";
}

exports.running_late = running_late;