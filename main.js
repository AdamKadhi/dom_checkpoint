let heartButt = document.getElementsByClassName("heart");
let deleteButt = document.getElementsByClassName("delete");
let item = document.getElementsByClassName("item");
let titles = document.getElementsByClassName("titles");
let empty = document.getElementById("empty");

let qte_num = document.getElementsByClassName("qte_num");
let minus = document.getElementsByClassName("minus");
let plus = document.getElementsByClassName("plus");

let total = document.getElementsByClassName("total");
let price = document.getElementById("price");

let items_removed = 0;

for (let i = 0; i <= 2; i++) {
  let c = 0;
  heartButt[i].onclick = function () {
    if (c == 0) {
      heartButt[i].style.color = "red";
      c = 1;
    } else {
      heartButt[i].style.color = "grey";
      c = 0;
    }
  };

  deleteButt[i].onclick = function () {
    item[i].style.display = "none";
    items_removed += 1;
    price.innerHTML = Number(price.textContent) - Number(total[i].textContent);
    if (items_removed == 3) {
      titles[0].style.display = "none";
      empty.style.visibility = "visible";
    }
  };

  plus[i].onclick = function () {
    qte_num[i].innerHTML = Number(qte_num[i].textContent) + 1;
    if (i == 0) {
      total[i].innerHTML = Number(total[i].textContent) + 150;
      price.innerHTML = Number(price.textContent) + 150;
    } else if (i == 1) {
      total[i].innerHTML = Number(total[i].textContent) + 90;
      price.innerHTML = Number(price.textContent) + 90;
    } else {
      total[i].innerHTML = Number(total[i].textContent) + 60;
      price.innerHTML = Number(price.textContent) + 60;
    }
  };
  minus[i].onclick = function () {
    if (!(qte_num[i].textContent == "0")) {
      qte_num[i].innerHTML = Number(qte_num[i].textContent) - 1;
      if (i == 0) {
        total[i].innerHTML = Number(total[i].textContent) - 150;
        price.innerHTML = Number(price.textContent) - 150;
      } else if (i == 1) {
        total[i].innerHTML = Number(total[i].textContent) - 90;
        price.innerHTML = Number(price.textContent) - 90;
      } else {
        total[i].innerHTML = Number(total[i].textContent) - 60;
        price.innerHTML = Number(price.textContent) - 60;
      }
    }
  };
}
