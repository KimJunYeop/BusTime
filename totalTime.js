var timeLgToOsanWeekDay = ['8:20', '9:10', '10:10', '11:10', '12:10', '12:40', '13:30', '14:10', '15:10', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:30', '21:45', '22:00', '22:10', '22:30', '23:00', '23:10'];
var timeOasnToLgWeekDay = ['6:40', '7:10', '7:25', '8:40', '9:25', '10:25', '11:25', '12:25', '12:55', '13:45', '14:25', '15:25', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:45', '22:00', '22:15', '22:25', '22:45', '23:15'];

var timeLgToOsanWeekend = ['9:10', '10:10', '11:10', '12:10', '12:40', '13:30', '14:10', '15:10', '16:10', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:15', '21:30', '21:45', '22:00', '22:15', '22:30', '22:45', '23:00'];
var timeOsanToLgWeekend = ['8:40', '9:25', '10:25', '11:25', '12:25', '12:55', '13:45', '14:25', '15:25', '17:45', '18:15', '18:45', '19:15', '19:45', '20:15', '20:45', '21:15', '21:30', '21:45', '22:00', '22:15', '22:30', '22:45', '23:00', '23:15'];

$(document).ready(function () {
    initTotalTimeTable();
    tableColor();
    totalTimeBind();
    // focuseRealTime();
});

function initTotalTimeTable() {
    var html = '';
    var i;

    
    var nextTime;
    var nextTimeOsanToLg;
    var nextTimeLgToOsan;
   

    //week
    for (i = 0; i < 31; i++) {
        html += '<tr>';
        html += '<td>' + timeOasnToLgWeekDay[i] + '</td>'
        html += '<td>' + timeLgToOsanWeekDay[i] + '</td>';
        html += '</tr>'
        $('#weekTable > tbody:last').append(html);
        html = '';
    }

    //weekend
    for (i = 0; i < 25; i++) {
        html += '<tr>';
        html += '<td>' + timeOsanToLgWeekend[i] + '</td>'
        html += '<td>' + timeLgToOsanWeekend[i] + '</td>';
        html += '</tr>'
        $('#weekendTable > tbody:last').append(html);
        html = '';
    }
}

function tableColor() {
    var nextTimeOsanToLgWeek;
    var nextTimeLgToOsanWeek;
    var nextTimeOsanToLgWeekend;
    var nextTimeLgToOsanWeekend;
    var day = new Date();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var currentTime = Number(hour.toString() + minute.toString());

    nextTimeOsanToLgWeek = timeOasnToLgWeekDay.filter(val => {
        var value = val.replace(":", "");
        return value >= currentTime
    });

    nextTimeLgToOsanWeek = timeLgToOsanWeekDay.filter(val => {
        var value = val.replace(":", "");
        return value >= currentTime
    });

    nextTimeOsanToLgWeekend = timeOsanToLgWeekend.filter(val => {
        var value = val.replace(":", "");
        return value >= currentTime
    });

    nextTimeLgToOsanWeekend = timeLgToOsanWeekend.filter(val => {
        var value = val.replace(":", "");
        return value >= currentTime
    });


    $("#weekTable tr").each(function () {
        var tableValue = $(this).find("td:first").html();
        nextTimeOsanToLgWeek.forEach(val => {
            if (tableValue == val) {
                $(this).find("td:first").addClass("w3-blue");
            }
        });
    })

    $("#weekTable tr").each(function () {
        var tableValue = $(this).find("td:nth-child(2)").html();
        nextTimeLgToOsanWeek.forEach(val => {
            if (tableValue == val) {
                $(this).find("td:nth-child(2)").addClass("w3-blue");
            }
        });
    })

    $("#weekendTable tr").each(function () {
        var tableValue = $(this).find("td:nth-child(2)").html();
        nextTimeOsanToLgWeekend.forEach(val => {
            if (tableValue == val) {
                $(this).find("td:nth-child(2)").addClass("w3-blue");
            }
        });
    })

    $("#weekendTable tr").each(function () {
        var tableValue = $(this).find("td:nth-child(2)").html();
        nextTimeLgToOsanWeekend.forEach(val => {
            if (tableValue == val) {
                $(this).find("td:nth-child(2)").addClass("w3-blue");
            }
        });
    })


}

function totalTimeBind() {
    $("#backHome").unbind().bind('click', function () {
        window.location.href = './index.html';
    });

    $("#week").unbind().bind('click', function () {
        $("#noContents").hide();
        displayTable(1);
    })

    $("#weekend").unbind().bind('click', function () {
        $("#noContents").hide();
        displayTable(2);
    })
}

function displayTable(num) {
    if (num == 1) {
        //week
        $("#weekendTableDiv").hide();
        $("#weekTableDiv").show();
    } else if (num == 2) {
        //weekend
        $("#weekTableDiv").hide();
        $("#weekendTableDiv").show();
    }
    focus(num);
}

function focus(num) {
    if (num == 1) {



    } else {



    }
}