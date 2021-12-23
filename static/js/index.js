let inverted = false;
let lofi = 'https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg/live';
let canvas = 'https://ocps.instructure.com/?login_success=1';
let drive = 'https://drive.google.com/drive/u/1/my-drive';
let socket = null;

function disappear() {
    var x = document.getElementById("click-btn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openTab(url) {
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.dispatchEvent(new MouseEvent("click", {ctrlKey: true}));    

}

function openMultipleTabs(urls) {
    for (let i = 0; i < urls.length; i++) {
        openTab(urls[i])
    }
}

function openTabs() {

    let urls = [lofi, canvas, drive];
    openMultipleTabs(urls);
    
}

function firstPeriod() {
    let urls = [
        'https://ocps.instructure.com/courses/1590282',
        'https://docs.google.com/document/d/1A0bqCeRSY59u6lkQVFCW1W1lxqCzgjXXeneKheUUbRU/edit#heading=h.rvzdl2odbq2x'
    ]

    openMultipleTabs(urls);
}

function testing() {
    let urls = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ]

    openMultipleTabs(urls);
}
function mathhomework() {
    let urls = [
        'https://ocps.instructure.com/courses/1445166/pages/second-quarter-calendar?module_item_id=44643959'
    ]

    openMultipleTabs(urls);
}

function bellSchedule() {
    let urls = [
        'https://drphillipshs.ocps.net/school_information/bell_schedule'
    ]

    openMultipleTabs(urls);
}

function saveText(varname) {
    let text = document.getElementById(varname).value;

    let data = {
        'name': varname,
        'content': text
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/update_note/' + varname + '/' + text);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({'content': text}))
}

function setup() {
    let textareas = ['apush', 'aplang', 'marsci', 'apcalc', 'theatre'];

    for (let i = 0; i < textareas.length; i++) {
        const areaname = textareas[i];    

        document.getElementById(areaname).addEventListener("input", (event) => saveText(areaname));
        
        // Load notes
        $.get('/get_note/' + areaname, function(responseText) {
            document.getElementById(areaname).value = responseText;        
        });
    }

    // Get the modal
    var modal = document.getElementById("bellScheduleModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
