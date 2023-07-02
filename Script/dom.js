// creating a function to target the on click button for calculating age

function calculateAge() {

    //create a variable to store dob of person

    var dob = document.getElementById('dob').value;
    
    //create a function to store current date
    var today= new Date();

    //store dob in birthdate new date and get full year are inbuild javascript function
    var birthDate= new Date(dob);

    //apply logic to get age in years,months,days,hours,minutes,seconds
    var ageInYears= today.getFullYear()-birthDate.getFullYear();
    var ageInMonths= (ageInYears*12)+ (today.getMonth()-birthDate.getMonth());
    var ageInDays= ageInYears*365;
    var ageInHours=ageInYears*365*24;
    var ageInMinutes= ageInYears*365*24*60;
    var ageInSeconds= ageInYears*365*24*60*60;


    //link the variables to their corresponding functions and outputs
    document.getElementById('Years').textContent=ageInYears +" "+"years" + " "+  "or " ;
    document.getElementById('Months').textContent=ageInMonths+" "+"months" +" "+   "or ";
    document.getElementById('Days').textContent=ageInDays+" "+"days" + " "+  "or ";
    document.getElementById('Hours').textContent=ageInHours+" "+"hours" + " "+  "or ";
    document.getElementById('Minutes').textContent=ageInMinutes+" "+"minutes" + " "+  "or ";
    document.getElementById('Seconds').textContent=ageInSeconds+" "+"seconds" + " "+  "or ";



}