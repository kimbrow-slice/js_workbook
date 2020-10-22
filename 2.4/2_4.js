let webDevAdmin;

let uName;

uName = "jeffery";

webDevAdmin = uName;

alert(webDevAdmin);

let myPlanet = "Earth";

let currentGuestName = " Willie ";

const BIRTHDAY = '04.03.1996';

const age = getAge(BIRTHDAY);


function getAge(BIRTHDAY) {
    var today = new Date();
    var birthDate = new Date(BIRTHDAY);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

alert(getAge('03.04.1996'));