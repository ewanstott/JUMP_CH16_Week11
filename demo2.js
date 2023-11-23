// short circuit

const one = true;
const two = 100;
const three = [];

const result = one && two && three; //if one and two are true, box three is returned

console.log(result);

if (one && two && three) {
  //do something
}
