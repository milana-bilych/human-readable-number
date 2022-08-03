module.exports = function toReadable (number) {
  const firstDigNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const secDigNum = [' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thirdDigNum = [' hundred'];

  let str = String(number);
  let arr = str.split('');

  if (number >= 0 && number <= 19) {
    return (firstDigNum[number]);
  } else if (arr.length == 2 && arr[1] == 0) {
    return (secDigNum[arr[0] - 1]);
  } else if (number >= 21 && number <= 99) {
    return (secDigNum[arr[0] - 1] + secDigNum[0] + firstDigNum[arr[1]]);
  } else if (arr[1] == 0 && arr[2] == 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0]);
  } else if (arr[1] == 1 && arr[2] == 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + firstDigNum[10]);
  } else if (arr[1] !== 0 && arr[2] == 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + secDigNum[arr[1] - 1]);
  } else if (arr[1] == 0 && arr[2] !== 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + firstDigNum[arr[2]]);
  } else if (arr[1] == 1 && arr[2] !== 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + firstDigNum[1 + arr[2]]);
  } else if (arr[1] !== 0 && arr[2] !== 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + secDigNum[arr[1] - 1] + secDigNum[0] + firstDigNum[arr[2]]);
  } else if (number > 99 && number <= 999) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + firstDigNum[arr[2]]);
  } else if (number > 109 && number <= 119) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + firstDigNum[arr[1] + arr[2]]);
  } else if (number > 119 && arr[2] + secDigNum[0] == 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + secDigNum[arr[1] - 1]);
  } else if (number > 119 && arr[2] !== 0) {
    return (firstDigNum[arr[0]] + thirdDigNum[0] + secDigNum[0] + secDigNum[arr[1] - 1] + secDigNum[0] + firstDigNum[arr[2]]);
  }
}