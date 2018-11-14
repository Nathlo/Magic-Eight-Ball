let userName = "";
userName ? console.log(`Hello ${userName} !`) : console.log("Hello");

let userQuestion = "Who I will marry to?";
//console.log(userQuestion);

console.log(`Who ${userName} will marry to?`);

console.log("");

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

/*randomNumber === 0 ? console.log("it is certain") : console.log("it is decidedly so");*/

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
 }

console.log(`Magic Eight Ball says: "${eightBall}"`);
