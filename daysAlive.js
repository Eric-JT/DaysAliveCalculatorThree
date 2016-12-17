
function isLeapYear(year){
  /* Takes a single argument, year. Calculates whether or not
  the year is a Leap Year. Returns either true or false */

  if (year % 400 === 0){ return true; }
  if (year % 100 === 0){ return false; }
  if (year % 4 === 0){ return true; }
  else { return false; }
}

function daysInMonth(year, month){
  /* Takes two arguments, year and month. checks how many days there
  are in the current month. Returns number of days in month */

  var days = 0;
  switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 04:
    case 06:
    case 09:
    case 11:
      days = 30;
      break;
    case 02:
      if (isLeapYear(year)){
        days = 29;
      } else {
        days = 28;
      }
      break;
    default:
      alert("Sorry, but you fucked up the date somehow.");
  }
  return days;
}

function nextDay(date){
  /* takes a single argument called date. moves the date to the next
  day. Returns the new date. */

  if (date[2] < daysInMonth(date[0], date[1])){
    date[0] = date[0];
    date[1] = date[1];
    date[2] = ++date[2];
    return date;
  } else {
    if (date[1] == 12){
      date[0] = ++date[0];
      date[1] = 1;
      date[2] = 1;
      return date;
    } else {
      date[0] = date[0];
        date[1] = ++date[1];
        date[2] = 1;
        return date;
    }
  }
}

function isDateBefore(dateOne, dateTwo){
  /* Takes two arguments, dateOne and dateTwo. Checks if dates
  are valid. Returns true or false */

  if (dateOne[0] < dateTwo[0]){
    return true;
  }
  else if (dateOne[0] == dateTwo[0]){
    if (dateOne[1] < dateTwo[1]){
      return true;
    }
    else if (dateOne[1] == dateTwo[1]){
      return dateOne[2] < dateTwo[2];
    }
  }
  return false;
}

function daysBetweenDates(dateOne, dateTwo){
  /* takes two arguments, dateOne and dateTwo. calculates the number
  of days between dates. returns the number of days.*/

  var days = 0;
  while(isDateBefore(dateOne, dateTwo)){
    dateOne = nextDay(dateOne);
    days += 1;
  }
  return days;
}

var dateOne = [1989, 01, 24];
var dateTwo = [2016, 12, 16];

console.log(daysBetweenDates(dateOne, dateTwo));
