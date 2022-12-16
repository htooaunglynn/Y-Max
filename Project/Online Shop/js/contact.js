let statEmail,
    statPhone,
    statFName,
    statSName,
    statMessage = false;

const user = {
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    day: "",
};

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const information = (_) => {
    let firstName = document.getElementById("firstName").value.trim();
    let secondName = document.getElementById("secondName").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value;

    let now = new Date();

    let date = now.getDay();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = days[now.getDay()];

    let errorMessage = "";

    if (firstName === "") {
        errorMessage += "First Name Error\n";
        document.getElementById("firstName").style.border = "1px solid red";
    } else {
        user.firstName = firstName;
        statFName = true;
    }

    if (secondName === "") {
        errorMessage += "Second Name Error\n";
        document.getElementById("secondName").style.border = "1px solid red";
    } else {
        user.secondName = secondName;
        statSName = true;
    }

    if (email.includes("@") == true) {
        user.email = email;
        statEmail = true;
    } else {
        errorMessage += "Email error\n";
        document.getElementById("email").style.border = "1px solid red";
    }

    if (phone == "") {
        errorMessage += "Phone Error\n";
        document.getElementById("phone").style.border = "1px solid red";
    } else {
        user.phone = phone;
        statPhone = true;
    }

    if (message === "") {
        errorMessage += "Message Error\n";
        document.getElementById("message").style.border = "1px solid red";
    } else {
        user.message = message;
        statMessage = true;
    }

    user.date = `${month}-${date}-${year}`;
    user.time = `${hour}:${minute}:${second}`;
    user.day = day;

    if (
        statEmail === true &&
        statPhone === true &&
        statMessage === true &&
        statFName === true &&
        statSName === true
    ) {
        document.getElementById("form_section").style.display = "none";
        document.getElementById("result_section").style.display = "block";

        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>First Name :</span> <span>${user.firstName}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Second Name :</span> <span>${user.secondName}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Email :</span> <span>${user.email}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Phone :</span> <span>${user.phone}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Date :</span> <span>${user.date}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Time :</span> <span>${user.time}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Day :</span> <span>${user.day}</span></h1>`;
        document.getElementById(
            "information"
        ).innerHTML += `<h1><span>Message :</span> <span>${user.message}</span></h1>`;
    } else {
        Swal.fire({
            icon: "error",
            title: errorMessage,
        });
    }
};

const cursor = (e) => {
    document.getElementById(e).style.border = "0.5px solid var(--text-color)";
};

const notCursor = (a) => {
    document.getElementById(a).style.border = "none";
};
