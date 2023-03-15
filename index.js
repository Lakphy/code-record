var a =
  document.getElementById("iframeautoheight").contentDocument.Form1
    .childNodes[1].value;
const decodeUTF8FromBase64 = (base64) => {
  const text = atob(base64);
  const length = text.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = text.charCodeAt(i);
  }
  const decoder = new TextDecoder(); // default is utf-8
  return decoder.decode(bytes);
};
let decodedStr = decodeUTF8FromBase64(a);
let arr0 = decodedStr.replace(/[a-zA-Z<>;&\\]/g, "").replace(/\d{20,}/g, "");
let arr1 = arr0.split("-");
let arr2 = [""];
arr1.map((i, index) => {
  let j = 0;
  for (j; j < i.length; j++) {
    if (isNaN(i[j])) {
      arr2[index] = i.slice(j, i.length);
      break;
    }
  }
});
arr2.splice(1, 4);
var course = [""];
var grade = [""];
var user;
arr2.map((item, index) => {
  if (index) {
    for (let i = 0; i < item.length; i++) {
      if (!isNaN(item[i])) break;
      course[index] = item.slice(0, i - 1).toString();
      grade[index] = item.slice(i + 1, item.length).toString();
    }
  } else user = item.slice(0, item.length - 14);
});
grade = grade.map((item, index) => {
  let arr3 = Array.from(item);
  for (let i = 0; i < item.length; i++) {
    if (isNaN(item[i]) && item[i] != ".") {
      arr3 = arr3.slice(0, i);
      break;
    }
  }
  arr3.splice(3, 0, "-");
  arr3.splice(8, 0, "-");
  arr3.pop();
  if (arr3.length < 10) {
    arr3 = [" "];
  }
  return arr3.join("");
});
for (let i = 0; i < grade.length; i++) {
  course[i] += grade[i];
}
console.log(user);
console.log(course);
