var title = document.getElementById ("title");
var boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
<!--This is the password--!>
var password = "0010111011010001";
<!--Fucntion for selectin box--!>
function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}
<!--Fucntion for checking if it it right--!>
function checkSelection(){
  var selectedText = getSelectedText();
  if (selectedText == "Blue highlighter") {
    Hint.innerHTML = password;
  }
}

document.onmouseup = checkSelection;
<!--Function to make sure box can be clicked--!>
function boxClicked(id){
  var box = document.getElementById(id);
    box.innerHTML = "1";
    boxes[id-1] = 1;
    if (listToString(boxes) == password){
      title.innerHTML = "Enter this link to continue: https://github.com/JoeyParisi1/Escaperoom/index2.html !";
    }
}

function listToString(list){
  var boxesString = "";
  for (i = 0; i < list.length; i += 1){
    boxesString = boxesString + list[i];
  }
  return boxesString;
}
