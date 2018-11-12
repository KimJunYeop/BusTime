var timeLgToOsanWeekDay = [820, 910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1730, 1745, 1800, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];
var timeOasnToLgWeekDay = [640, 710, 725, 840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];

var timeLgToOsanWeekend = [910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1610, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2115, 2130, 2145, 2200, 2215, 2215, 2230, 2245, 2300];
var timeOsanToLgWeekend = [840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1745, 1815, 1845, 1915, 1945, 2015, 2045, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300, 2315];

var count = 0;

var _realTimeInterval;

$(document).ready(function () {
    console.log('hello');
    realTimeBind();

})

function realTimeBind() {
    $("#back").unbind().bind("click", function () {
        window.location.href = "./index.html";
    })

    $("#osanToLg").unbind().bind('click', function () {
        clearInterval(_realTimeInterval);
        _realTimeInterval = setInterval(displayTimeOsanToLg, 1000);
    })

    $("#lgToOsan").unbind().bind('click', function () {
        clearInterval(_realTimeInterval);
        _realTimeInterval = setInterval(displayTimeLgToOsan, 1000);
    });
}


function displayTimeOsanToLg() {
    // 일  0 월  1 화  2 수  3 목  4 금  5 토  6
    var weekend;
    var day = new Date();
    var year = day.getFullYear();
    var month = day.getMonth();
    var today = day.getDate();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var vindex = -1;
    var currentTime = hour.toString() + minute.toString();

    var findHour;
    var fineMinute;
    var findIndex;

    if (day.getDay() == 0 || day.getDay() == 6) {
        weekend = true;
    } else {
        weekend = false;
    }

    currentTime = 2313;

    if (weekend) {
        timeOsanToLgWeekend.every(function (value, index) {
            // Do your thing, then:
            if (currentTime <= value) {
                console.log(value);
                findIndex = index;
                return false;
            } else {
                return true;
            }
        })
        console.log(findIndex);

        var findTime = timeOsanToLgWeekend[findIndex].toString();

        if (findTime.lenght == 3) {
            findHour = findTime.substr(0, 1);
            findMinute = findTime.substr(1, 3);
        } else {
            findHour = findTime.substr(0, 2);
            findMinute = findTime.substr(2, 4);
        }

        var findDate = new Date(year, month, today, findHour, findMinute, 0);
        var testDate = new Date(year, month, today, 23, 13, 0);
        // var toDate = new Date();
        // console.log(findDate);
        // console.log(testDate);
        var diffTimeSecond = Math.floor((findDate.getTime() - (testDate.getTime())) / 1000);
        var diffTimeMinute = Math.floor(diffTimeSecond / 60);
        diffTimeSecond = diffTimeSecond - diffTimeMinute * 60;

        // console.log(diffTimeMinute);
        // console.log(diffTimeSecond);

        if (diffTimeSecond < 0) {
            console.log('버스가 출발했어요 (혹은 막차여서 택시타야되요.)');
        } else {
            $("#timeDisplay").html(diffTimeMinute + '분 ');
            $("#timeDisplay").append(diffTimeSecond + '초 남았습니다');
        }


    } else {
        timeOasnToLgWeekDay.every(function (value, index) {
            // Do your thing, then:
            if (currentTime <= value) {
                console.log(value);
                findIndex = index;
                return false;
            } else {
                return true;
            }
        })

        var findTime = timeOasnToLgWeekDay[findIndex].toString();

        if (findTime.lenght == 3) {
            findHour = findTime.substr(0, 1);
            findMinute = findTime.substr(1, 3);
        } else {
            findHour = findTime.substr(0, 2);
            findMinute = findTime.substr(2, 4);
        }

        var findDate = new Date(year, month, today, findHour, findMinute, 0);
        var testDate = new Date(year, month, today, 23, 13, 0);
        // var toDate = new Date();
        // console.log(findDate);
        // console.log(testDate);
        var diffTimeSecond = Math.floor((findDate.getTime() - (testDate.getTime())) / 1000);
        var diffTimeMinute = Math.floor(diffTimeSecond / 60);
        diffTimeSecond = diffTimeSecond - diffTimeMinute * 60;

        // console.log(diffTimeMinute);
        // console.log(diffTimeSecond);

        if (diffTimeSecond < 0) {
            console.log('버스가 출발했어요 (혹은 막차여서 택시타야되요.)');
        } else {
            $("#timeDisplay").html(diffTimeMinute + '분 ');
            $("#timeDisplay").append(diffTimeSecond + '초 남았습니다');
        }
    }
}


function displayTimeLgToOsan() {
    // 일  0 월  1 화  2 수  3 목  4 금  5 토  6
    var weekend;
    var day = new Date();
    var year = day.getFullYear();
    var month = day.getMonth();
    var today = day.getDate();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var vindex = -1;
    var currentTime = hour.toString() + minute.toString();

    var findHour;
    var fineMinute;
    var findIndex;

    if (day.getDay() == 0 || day.getDay() == 6) {
        weekend = true;
    } else {
        weekend = false;
    }

    currentTime = 10000;

    if (weekend) {
        timeLgToOsanWeekend.every(function (value, index) {
            // Do your thing, then:
            if (currentTime <= value) {
                console.log(value);
                findIndex = index;
                return false;
            } else {
                return true;
            }
        })
        console.log(findIndex);

        var findTime = timeLgToOsanWeekend[findIndex].toString();

        if (findTime.lenght == 3) {
            findHour = findTime.substr(0, 1);
            findMinute = findTime.substr(1, 3);
        } else {
            findHour = findTime.substr(0, 2);
            findMinute = findTime.substr(2, 4);
        }

        var findDate = new Date(year, month, today, findHour, findMinute, 0);
        var testDate = new Date(year, month, today, 23, 13, 0);
        // var toDate = new Date();
        // console.log(findDate);
        // console.log(testDate);
        var diffTimeSecond = Math.floor((findDate.getTime() - (testDate.getTime())) / 1000);
        var diffTimeMinute = Math.floor(diffTimeSecond / 60);
        diffTimeSecond = diffTimeSecond - diffTimeMinute * 60;

        // console.log(diffTimeMinute);
        // console.log(diffTimeSecond);

        if (diffTimeSecond < 0) {
            console.log('버스가 출발했어요 (혹은 막차여서 택시타야되요.)');
        } else {
            $("#timeDisplay").html(diffTimeMinute + '분 ');
            $("#timeDisplay").append(diffTimeSecond + '초 남았습니다');
        }


    } else {
        timeLgToOsanWeekDay.every(function (value, index) {
            // Do your thing, then:
            if (currentTime <= value) {
                console.log(value);
                findIndex = index;
                return false;
            } else {
                return true;
            }
        })
        console.log(findIndex);
        if(findIndex == undefined) {
            findIndex = 0;
        }
        var findTime = timeLgToOsanWeekDay[findIndex].toString();
        console.log(findTime);
        if (findTime.lenght == 3) {
            findHour = findTime.substr(0, 1);
            findMinute = findTime.substr(1, 3);
        } else {
            findHour = findTime.substr(0, 2);
            findMinute = findTime.substr(2, 4);
        }

        var findDate = new Date(year, month, today, findHour, findMinute, 0);
        var testDate = new Date(year, month, today, 23, 13, count++);
        // var toDate = new Date();
        // console.log(findDate);
        // console.log(testDate);
        var diffTimeSecond = Math.floor((findDate.getTime() - (testDate.getTime())) / 1000);
        var diffTimeMinute = Math.floor(diffTimeSecond / 60);
        diffTimeSecond = diffTimeSecond - diffTimeMinute * 60;

        // console.log(diffTimeMinute);
        // console.log(diffTimeSecond);

        if (diffTimeSecond < 0) {
            console.log('버스가 출발했어요 (혹은 막차여서 택시타야되요.)');
        } else {
            $("#timeDisplay").html(diffTimeMinute + '분 ');
            $("#timeDisplay").append(diffTimeSecond + '초 남았습니다');
        }
    }
}


// function displayTimeOsanToLg() {
//     //일  0 월  1 화  2 수  3 목  4 금  5 토  6
//     var weekend;
//     var day = new Date();
//     var year = day.getFullYear();
//     var month = day.getMonth();
//     var today = day.getDate();
//     var hour = day.getHours();
//     var minute = day.getMinutes();
//     var vindex = -1;
//     var aa = hour.toString() + minute.toString();

//     if (day.getDay() == 0 || day.getDay() == 6) {
//         weekend = true;
//     } else {
//         weekend = false;
//     }

//     if (weekend) {
//         timeLgToOsanWeekend.some(function (value, index) {
//             if (Number(aa) < value) {
//                 vindex = index;
//             }
//             return (Number(aa) < value);
//         })
//         if (timeLgToOsanWeekend[vindex].toString().length == 3) {
//             var timeNextHour = timeLgToOsanWeekend[vindex].toString().substr(0, 1);
//             var timeNextMinute = timeLgToOsanWeekend[vindex].toString().substr(1, 2);
//         } else {
//             var timeNextHour = timeLgToOsanWeekend[vindex].toString().substr(0, 2);
//             var timeNextMinute = timeLgToOsanWeekend[vindex].toString().substr(2, 2);
//         }
//         var nextDate = new Date(year, month, today, timeNextHour, timeNextMinute, 0);
//     } else {
//         timeLgToOsanWeekDay.some(function (value, index) {
//             if (Number(aa) < value) {
//                 vindex = index;
//             }
//             return (Number(aa) < value);
//         })
//         if (timeLgToOsanWeekDay[vindex].toString().length == 3) {
//             var timeNextHour = timeLgToOsanWeekDay[vindex].toString().substr(0, 1);
//             var timeNextMinute = timeLgToOsanWeekDay[vindex].toString().substr(1, 2);
//         } else {
//             var timeNextHour = timeLgToOsanWeekDay[vindex].toString().substr(0, 2);
//             var timeNextMinute = timeLgToOsanWeekDay[vindex].toString().substr(2, 2);
//         }
//         var nextDate = new Date(year, month, today, timeNextHour, timeNextMinute, 0);
//     }
//     var diffTime = Math.floor((nextDate.getTime() - (new Date().getTime())) / 1000);
//     var diffTimeMinute = Math.floor(diffTime / 60);
//     // console.log(diffTimeMinute)
//     //3600으로 나누면 이게 초다
//     $("#timeDisplay").html(diffTimeMinute + '분 ');
//     $("#timeDisplay").append((diffTime - diffTimeMinute * 60) + '초 남았습니다');
// }
