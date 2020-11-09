var a = [12, 1, 2, 7, 9, 11, 4, 5, 10, 0];

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(a));//[0, 1,  2,  4,  5,7, 9, 10, 11, 12]
