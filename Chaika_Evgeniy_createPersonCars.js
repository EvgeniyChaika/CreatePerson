/**
 * Created by Evgeniy Chaika on 09.10.2015.
 */
function CustomError(m) {
    this.message = m;
}
CustomError.prototype = new Error();

// -------creating arrays for the random selection of machine parameters------
var arrCarBrand = ["bmw", "opel", "toyota", "ferrari", "honda", "ford"];
var arrCarType = ["sedan", "kupe", "cabriolet", "jeep"];
var arrCarColor = ["red", "brown", "black", "white", "blue", "gray"];

//--------create a constructor for future cars----------

function Car() {
    this.carbrand = createCarBrand();
    this.cartype = createCarType();
    this.carcolor = createCarColor();

}

Car.prototype.getCarBrand = function () {
    return this.carbrand;
};

Car.prototype.getCarType = function () {
    return this.cartype;
};
Car.prototype.getCarColor = function () {
    return this.carcolor;
};

//-------random selection of parameters for machines----------

function createCarBrand() {
    for (var u = 0; u < arrCarBrand.length; u++) {
        var pos = Math.floor(Math.random() * arrCarBrand.length);
        var brandNew = arrCarBrand[pos];
    }
    return brandNew;
}

function createCarType() {
    for (var u = 0; u < arrCarType.length; u++) {
        var pos = Math.floor(Math.random() * arrCarType.length);
        var typeNew = arrCarType[pos];
    }
    return typeNew;
}

function createCarColor() {
    for (var u = 0; u < arrCarColor.length; u++) {
        var pos = Math.floor(Math.random() * arrCarColor.length);
        var colorNew = arrCarColor[pos];
    }
    return colorNew;
}

//------display information about the winning car--------

Car.prototype.getCarInfo = function () {
    console.log("Information about the winning car :");
    console.log("    Lucky : " + firstName + " " + lastName);
    console.log("    Brand : " + this.getCarBrand());
    console.log("    Body type : " + this.getCarType());
    console.log("    Color : " + this.getCarColor());
};

//----------Sorting an array of names of people--------

function sortArrayPersons() {
    for (var barrier = arrayPeople.length - 1; barrier >= 0; barrier--) {
        for (var a = 0; a < barrier; a++) {
            if (arrayPeople[a].getPersonLastName().charAt(0) >
                arrayPeople[a + 1].getPersonLastName().charAt(0)) {
                var tmp = arrayPeople[a];
                arrayPeople[a] = arrayPeople[a + 1];
                arrayPeople[a + 1] = tmp;
            }
        }
    }
}

//----------the separation of people on the array of children working pensioners-------

var filterNow;

function filterPersons() {
    if (ageNow <= 18) {
        filterNow = "child";
        return filterNow;
    } else if (ageNow > 18 && ageNow <= 55 && sexNew == "woman") {
        filterNow = "working";
        return filterNow;
    } else if (ageNow > 18 && ageNow <= 60 && sexNew == "man") {
        filterNow = "working";
        return filterNow;
    } else if (ageNow > 55 && sexNew == "woman") {
        filterNow = "pensioner";
        return filterNow;
    } else if (ageNow > 60 && sexNew == "man") {
        filterNow = "pensioner";
        return filterNow;
    }
}

//--------creating email to each person---------

var arrayEmail = ["@mail.ru", "@rambler.ru", "@gmail.ru", "@yandex.ru"];
var EmailLength = arrayEmail.length;

function createPersonEmail() {

    var position = Math.floor(Math.random() * EmailLength);
    var mail = arrayEmail[position];
    return firstName + lastName + mail;// using first and last name
}

//----------split by sex--------

var arraySex = ["woman", "man"];
var arraySexLength = arraySex.length;
var sexNew;

function createPersonSex() {
    for (var u = 0; u < arraySexLength; u++) {
        var positionInArraySex = Math.floor(Math.random() * arraySexLength);
        sexNew = arraySex[positionInArraySex];
    }
    return sexNew;
}

//----------creation date of birth, age, the definition of birthday

var randYear;
var ageNow;
var growUpNow;
var randDay;
var dayBirthday;
var dateNow;
var getDayNow;

function createYearBirthday() {
    var minYear = 1940;
    var maxYear = 2010;
    randYear = minYear + Math.random() * (maxYear + 1 - minYear);
    randYear = Math.floor(randYear);
    return randYear;
}

function createDay() {
    var minDay = 1;
    var maxDay = 31;
    randDay = minDay + Math.random() * (maxDay + 1 - minDay);
    randDay = Math.floor(randDay);
    return randDay;
}

function createAge() {
    if (growUpNow == "Birthday today!") {
        ageNow = dateNow.getFullYear() - randYear;
        return ageNow;
    } else if (dayBirthday.getDate() <= getDayNow) {
        ageNow = dateNow.getFullYear() - randYear;
        return ageNow;
    } else {
        ageNow = dateNow.getFullYear() - 1 - randYear;
        return ageNow;
    }
}

function dateBirthday() {
    randYear = createYearBirthday();
    randDay = createDay();
    var arrMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var arrMonthLength = arrMonth.length;
    var num = Math.floor(Math.random() * arrMonthLength);
    dayBirthday = new Date(randYear, num, randDay);// to select the month put random selection
    return dayBirthday.toDateString();
}


function growUp() {
    dateNow = new Date();
    getDayNow = dateNow.getDate();
    if (getDayNow == dayBirthday.getDate()) {
        growUpNow = "Birthday today!";
    } else {
        growUpNow = "--";
    }
    return growUpNow;
}

//------the creation of firstame and lastname for a person---------

var letters = 'abcdefghijklnmopqrstuvwxyz';
var lettersAmount = letters.length;
var randomPositionInLetters = 0;
var firstName;
var lastName;

function createSyllable() {
    var s = '';
    var arrSyl = [1, 2, 3, 4];
    var arrSylLength = arrSyl.length;
    var len = Math.floor(Math.random() * arrSylLength);
    while (s.length <= len) {
        randomPositionInLetters = Math.floor(Math.random() * lettersAmount);
        s += letters.charAt(randomPositionInLetters);
    }
    return s;
}

function createFirstName() {
    var first = '';
    for (var i = 0; i < 3; i++) {
        first += createSyllable();
        firstName = first.charAt(0).toUpperCase() + first.substring(1);
    }
    return firstName;
}

function createLastName() {
    var last = '';
    for (var i = 0; i < 3; i++) {
        last += createSyllable();
        lastName = last.charAt(0).toUpperCase() + last.substring(1);
    }
    return lastName;
}

//----create 20 person---------

var arrayPeople = [];

function Person() {
    this.firstname = createFirstName();
    this.lastname = createLastName();
    this.sex = createPersonSex();
    this.email = createPersonEmail();
    this.year = dateBirthday();
    this.growup = growUp();
    this.age = createAge();
    this.status = filterPersons();
    this.winner = this.winCar();
}
Person.prototype.getPersonFirstName = function () {
    return this.firstname;
};

Person.prototype.getPersonLastName = function () {
    return this.lastname;
};
Person.prototype.getPersonSex = function () {
    return this.sex;
};
Person.prototype.getPersonEmail = function () {
    return this.email;
};
Person.prototype.getPersonYear = function () {
    return this.year;
};
Person.prototype.getPersonAge = function () {
    return this.age;
};
Person.prototype.getPersonStatus = function () {
    return this.status;
};
Person.prototype.getGrowUp = function () {
    return this.growup;
};
Person.prototype.getWinCar = function () {
    return this.winner;
};

//------Lottery among workers-------

Person.prototype.winCar = function () {
    if (filterNow == "working") {
        var chance = randomChance(0, 100);
        if (chance <= 20) {
            new Car().getCarInfo();
            return "Win!";
        }
    }
    return "--";
};

Person.prototype.getPersonInfo = function () {
    console.log("The information of a registered person :");
    console.log("  LastName : " + this.getPersonLastName());
    console.log("  FirstName : " + this.getPersonFirstName());
    console.log("  Male : " + this.getPersonSex());
    console.log("  E-mail: " + this.getPersonEmail());
    console.log("  Year of birth: " + this.getPersonYear());
    console.log("  Birthday: " + this.getGrowUp());
    console.log("  Age: " + this.getPersonAge());
    console.log("  Status: " + this.getPersonStatus());
    console.log("  Win: " + this.getWinCar());

};


function createPersons() {
    var people;
    try {
        for (var a = 0; a < 20; a++) {
            people = new Person();
            arrayPeople.push(people);
        }
    } catch (e) {
        if (e instanceof CustomError) {
            console.log(e);
            console.log(e.message);
        } else {
            console.log(e);
        }
    }
}

createPersons();
sortArrayPersons();

function randomChance(min, max) {
    var randomChance = min + Math.random() * (max + 1 - min);
    randomChance = Math.floor(randomChance);
    return randomChance;
}

//----console output------

for (var u = 0; u < arrayPeople.length; u++) {
    arrayPeople[u].getPersonInfo();
}