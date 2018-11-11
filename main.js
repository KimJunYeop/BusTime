var timeLgToOsanWeekDay = [0820, 0910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1730, 1745, 1800, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];
var timeOasnToLGWeekDay = [0640, 0710, 0725, 0840, 0925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];

var timeLgToOsanWeekend = [0910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1610, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2115, 2130, 2145, 2200, 2215, 2215, 2230, 2245, 2300];
var timeOsanToLgWeekend = [0840, 0925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1745, 1815, 1845, 1915, 1945, 2015, 2045, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300, 2315];

$(document).ready(function () {
    busTimeInit();
    busBind();
})

function busTimeInit() {
    $(".realTimePage").hide();
}

function busBind() {
    $("#realTime").unbind().bind('click', function () {
        $("#mainPage").hide();
        $(".realTimePage").show();
        setInterval(function () {
            displayTime();
        }, 1000);
    });

    $("#totalTime").unbind().bind('click', function () {

    });

    $("#backHome").unbind().bind('click', function () {
        window.location.reload();
    });

    $("#osanToLg").unbind().bind('click', function () {
        displayTime();
    });

    $("#lgToOsan").unbind().bind('click', function () {

    })
}

function displayTime() {
    //일  0 월  1 화  2 수  3 목  4 금  5 토  6
    var weekend;
    var day = new Date();
    var year = day.getFullYear();
    var month = day.getMonth();
    var today = day.getDate();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var vindex = -1;
    var aa = hour.toString() + minute.toString();

    if (day.getDay() == 0 || day.getDay() == 6) {
        weekend = true;
    } else {
        weekend = false;
    }
    
    if (weekend) {
        timeLgToOsanWeekend.some(function (value, index) {
            if (Number(aa) < value) {
                vindex = index;
            }
            return (Number(aa) < value);
        })
        if (timeLgToOsanWeekend[vindex].toString().length == 3) {
            var timeNextHour = timeLgToOsanWeekend[vindex].toString().substr(0, 1);
            var timeNextMinute = timeLgToOsanWeekend[vindex].toString().substr(1, 2);
        } else {
            var timeNextHour = timeLgToOsanWeekend[vindex].toString().substr(0, 2);
            var timeNextMinute = timeLgToOsanWeekend[vindex].toString().substr(2, 2);
        }
        var nextDate = new Date(year, month, today, timeNextHour, timeNextMinute, 0);
    } else {
        timeLgToOsanWeekDay.some(function (value, index) {
            if (Number(aa) < value) {
                vindex = index;
            }
            return (Number(aa) < value);
        })
        if (timeLgToOsanWeekDay[vindex].toString().length == 3) {
            var timeNextHour = timeLgToOsanWeekDay[vindex].toString().substr(0, 1);
            var timeNextMinute = timeLgToOsanWeekDay[vindex].toString().substr(1, 2);
        } else {
            var timeNextHour = timeLgToOsanWeekDay[vindex].toString().substr(0, 2);
            var timeNextMinute = timeLgToOsanWeekDay[vindex].toString().substr(2, 2);
        }
        var nextDate = new Date(year, month, today, timeNextHour, timeNextMinute, 0);
    }
    var diffTime = Math.floor((nextDate.getTime() - (new Date().getTime())) / 1000);
    var diffTimeMinute = Math.floor(diffTime / 60);
    // console.log(diffTimeMinute)
    //3600으로 나누면 이게 초다
    $("#timeDisplay").html(diffTimeMinute + '분 ');
    $("#timeDisplay").append((diffTime - diffTimeMinute * 60) + '초 남았습니다');
}