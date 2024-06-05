const inputElement = document.getElementById("age");

function checkAge() {
  // debugger;
  const age = inputElement.value;

  // kan vara true eller false
  const isOver20 = age > 20; // age = 30 ger true

  const over20Text = "Du är " + age + " år gammal. Du gå på systemet";
  if (isOver20) {
    alert(over20Text.trim().toUpperCase());
  } else {
    alert("Du får inte gå på systemet".toLowerCase());
  }
}

// Strängar

const s1 = "hej";
const s2 = "hej";
const s3 = "hej";

const MyName = "Jessi";

console.log(s1 + MyName);

// console.log(`hej ${myName}`;
