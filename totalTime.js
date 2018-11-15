var timeLgToOsanWeekDay = [820, 910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1730, 1745, 1800, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2130, 2145, 2200, 2210, 2230, 2300, 2310];
var timeOasnToLgWeekDay = [640, 710, 725, 840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1815, 1830, 1845, 1900, 1915, 1930, 1945, 2000, 2015, 2030, 2045, 2100, 2115, 2145, 2200, 2215, 2225, 2245, 2315];

var timeLgToOsanWeekend = [910, 1010, 1110, 1210, 1240, 1330, 1410, 1510, 1610, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300];
var timeOsanToLgWeekend = [840, 925, 1025, 1125, 1225, 1255, 1345, 1425, 1525, 1745, 1815, 1845, 1915, 1945, 2015, 2045, 2115, 2130, 2145, 2200, 2215, 2230, 2245, 2300, 2315];

$(document).ready(function () {
    initTotalTimeTable();
    totalTimeBind();
});

function initTotalTimeTable() {
    var html = '';
    var i;
    //week
    for (i = 0; i < 31; i++) {
        html += '<tr>';
        html += '<td>'+timeOasnToLgWeekDay[i]+'</td>'
        html += '<td>'+timeLgToOsanWeekDay[i]+'</td>';
        html += '</tr>'
        $('#weekTable > tbody:last').append(html);
        html = '';
    }

    //weekend
    for (i = 0; i < 25; i++) {
        html += '<tr>';
        html += '<td>'+timeOsanToLgWeekend[i]+'</td>'
        html += '<td>'+timeLgToOsanWeekend[i]+'</td>';
        html += '</tr>'
        $('#weekendTable > tbody:last').append(html);
        html = '';
    }
}

function totalTimeBind() {
    $("#backHome").unbind().bind('click', function () {
        window.location.href = './index.html';
    });

    $("#week").unbind().bind('click', function () {
        displayTable(1);
    })

    $("#weekend").unbind().bind('click', function () {
        displayTable(2);
    })
}

function displayTable(num) {
    if(num == 1) {
        $("#weekendTable").hide();
        $("#weekTable").show();
    } else if(num == 2) {
        $("#weekTable").hide();
        $("#weekendTable").show();
    }
}