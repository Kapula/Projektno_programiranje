const date = new Date();

function otvori() { document.getElementById("myForm").style.display = "flex"; };

function zatvori() { document.getElementById("myForm").style.display = "none"; };

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Siječanj",
        "Veljača",
        "Ožujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div id="dan" class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {

            days += `<div id="dan" class="extra"><a href="../zadace/zadace.html">${i}</a></div>`;
        } else {
            days += `<div id="dan">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div id="dan" class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }


    var dani = document.querySelectorAll("#dan");
    for (let z = 0; z <= dani.length; z++) {
        dani[z].onclick = function() {
            dani[z].classList.add('select');
            dani[z].classList.add('imaEvent');
            otvori();
        }
        dani[z].addEventListener('dblclick', function() {
            dani[z].classList.remove('imaEvent');
            zatvori();
        })

    };

};



document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});


document.querySelector("#gumb").addEventListener("click", function() {
    document.getElementsByClassName(".select").classList.add('imaEvent');
    renderCalendar();
});
document.querySelector("#gumb2").addEventListener("click", function() {
    document.getElementsByClassName(".select").classList.add('imaEvent');
    renderCalendar();
});







renderCalendar();
