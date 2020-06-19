// String.prototype.toTitleCase = function () {
//     return this.replace(/\w\S*/g, function (add) {
//         return add.charAt(0).toUpperCase() + add.substr(1).toLowerCase();
//     });
// };

String.prototype.toTitleCase = function () {
    return this.split(" ")
        .map((txt) => txt[0].toUpperCase() + txt.substr(1).toLowerCase())
        .join(" ");
};

// let test1 = "aku belum sarapan";

// console.log(test1.toTitleCase());

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    let text1 = document.getElementById("inputText").value;
    let display = document.getElementById("display");
    display.innerHTML = text1.toTitleCase();
});
