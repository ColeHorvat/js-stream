function running_late(currentDate) {
    let date = new Date(currentDate);
    let time = date.getHours();

    if(time < 22)
        return "It is still early!";
    else
        return "It is late!";
}

exports.running_late = running_late;