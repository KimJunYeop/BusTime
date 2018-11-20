var timeLgToOsanWeekDay = [820, 910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1730, 1745, 1800, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2130, 2145, 2200, 2210, 2230, 2300, 2310];
var timeOasnToLgWeekDay = [640, 710, 725, 840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];

var timeLgToOsanWeekend = [910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1610, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300];
var timeOsanToLgWeekend = [840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1745, 1815, 1845, 1915, 1945, 2015, 2045, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300, 2315];

var _realTimeInterval;

$(document).ready(function () {
    realTimeBind();
})

function realTimeBind() {
    $("#back").unbind().bind("click", function () {
        window.location.href = "./index.html";
    })

    $("#osanToLg").unbind().bind('click', function () {
        console.log('osanToLg')
        clearInterval(_realTimeInterval);
        displayTimeOsanToLg();
        _realTimeInterval = setInterval(displayTimeOsanToLg, 1000);
    })

    $("#lgToOsan").unbind().bind('click', function () {
        console.log('lgToOsan');
        clearInterval(_realTimeInterval);
        displayTimeLgToOsan();
        _realTimeInterval = setInterval(displayTimeLgToOsan, 1000);
    });
}


function displayTimeOsanToLg() {
    // 일  0 월  1 화  2 수  3 목  4 금  5 토  6
    var day = new Date();
    if (day.getDay() == 0 || day.getDay() == 6) {
        displayTimeModule(timeOsanToLgWeekend);
    } else {
        displayTimeModule(timeOasnToLgWeekDay);
    }
}

function displayTimeLgToOsan() {
    // 일  0 월  1 화  2 수  3 목  4 금  5 토  6
    var day = new Date();

    if (day.getDay() == 0 || day.getDay() == 6) {
        displayTimeModule(timeLgToOsanWeekend);
    } else {
        displayTimeModule(timeLgToOsanWeekDay);
    }
}


function displayTimeModule(busTimeArray) {
    var day = new Date();
    var year = day.getFullYear();
    var month = day.getMonth();
    var today = day.getDate();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var currentTime;
    var findHour;
    var findTime = -1;
    var findDate;
    var todayDate;
    var diffTimeSecond;
    var diffTimeMinute;
    var findValueArray;

    if (minute < 10) {
        currentTime = hour.toString() + '0' + minute.toString();
    } else {
        currentTime = hour.toString() + minute.toString();
    }

    findValueArray = busTimeArray.filter(val => { return val >= currentTime });

    if (findValueArray.length != 0) {
        findTime = findValueArray[0].toString();
    }

    if (findTime == -1) {
        $("#timeDisplay").html('막차가 끊겼습니다.');
        return false;
    } else if (findTime.length == 3) {
        findHour = findTime.substr(0, 1);
        findMinute = findTime.substr(1, 3);
    } else {
        findHour = findTime.substr(0, 2);
        findMinute = findTime.substr(2, 4);
    }

    findDate = new Date(year, month, today, findHour, findMinute, 0);
    todayDate = new Date();
    diffTimeSecond = Math.floor((findDate.getTime() - (todayDate.getTime())) / 1000);
    diffTimeMinute = Math.floor(diffTimeSecond / 60);
    diffTimeSecond = diffTimeSecond - diffTimeMinute * 60;

    if (diffTimeMinute < 0) {
        $("#timeDisplay").html('버스가 출발했어요. 다음차를 이용하세요.');
        $("#rest").hide();
    } else {
        $("#timeDisplay").html(diffTimeMinute + '분 ');
        $("#timeDisplay").append(diffTimeSecond + '초');
        $("#rest").show();
    }
}
