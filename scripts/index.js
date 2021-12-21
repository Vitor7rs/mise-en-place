"use strict";
const btnAdvance = document.querySelector(".btn-advance");
const btnNewIngredient = document.querySelector(".btn-new-ingredient");
const btnNewCalc = document.querySelector(".btn-refresh");

const input1 = document.querySelector(".input-1").value;
const input2 = document.querySelector(".input-2").value;
const input3 = document.querySelector(".input-3").value;

let table = document.querySelector("table");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

btnAdvance.addEventListener("click", function () {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
});

btnNewCalc.addEventListener("click", function () {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
});

btnNewIngredient.addEventListener("click", function () {
  let newTr = `
    <tr class="ingredient-number">
        <tr>
            <td></td>
            <td>
                <p class="table-text ">Ingrediente: </p>
            </td>
        </tr>
        <tr>
            <td class="table-text">
                <input type="number"class="input-3" >
            </td>
            <td class="table-arrow">
                <i class="fas fa-arrow-right"></i>
            </td>
            <td>
                <p class="table-text text-box input-4"></p>
            </td>
        </tr>
    </tr>`;
  table.innerHTML += newTr;
});
