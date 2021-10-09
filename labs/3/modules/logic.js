var offset = 0;
exports.calcOffset =  function calcOffset() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "localhost:8080", false);
    xmlhttp.send();

    var dateStr = xmlhttp.getResponseHeader('Date');
    var serverTimeMillisGMT = Date.parse(new Date(Date.parse(dateStr)).toUTCString());
    var localMillisUTC = Date.parse(new Date().toUTCString());

    offset = serverTimeMillisGMT -  localMillisUTC;
}

exports.getServerTime =  function getServerTime() {
    var date = new Date();

    date.setTime(date.getTime() + offset);

    return date;
}

