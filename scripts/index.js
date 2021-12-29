"use strict";

// Botões
const btnAdvance = document.querySelector("[data-btn-advance]");
const btnNewIngredient = document.querySelector("[data-btn='new-ingredient']");
const btnNewCalc = document.querySelector("[data-btn='refresh']");

//Seleção dos Cards
const card1 = document.querySelector("[data-card='1']");
const card2 = document.querySelector("[data-card='2']");

// Seleção de tabela
let table = document.querySelector("table");

// Alterando valor das caixas de exemplo
const amountText = function () {
  const input1 = document.querySelector("[data-input='1']").value;
  const input2 = document.querySelector("[data-input='2']").value;
  const amountTxt1 = document.querySelector("[data-amount='1' ]");
  const amountTxt2 = document.querySelector("[data-amount='2' ]");
  amountTxt1.innerHTML = `Quantidade para ${input1} pessoas`;
  amountTxt2.innerHTML = `Quantidade para ${input2} pessoas`;
};

// Efeitos de display para os cards
  //FadeOut  card 1
const cardsDisplay1 = function () {
  card1.classList.add("fadeOut");
  card2.classList.remove("fadeOut");
  
  setTimeout(function () {
    card1.classList.toggle("hidden");
  }, 400);
  
  setTimeout(function () {
    card2.classList.toggle("hidden");
  }, 400);
};
  //FadeOut  card 2
const cardsDisplay2 = function () {
    card1.classList.remove("fadeOut");
  card2.classList.add("fadeOut");

  setTimeout(function () {
    card2.classList.toggle("hidden");
  }, 400);
  setTimeout(function () {
    card1.classList.remove("hidden");
  }, 400);
};

// Função para regra de três nos campos do card 2
setInterval(function () {
  const input1 = document.querySelector("[data-input='1']").value;
  const input2 = document.querySelector("[data-input='2']").value;
  const input3 = document.querySelectorAll("[data-input='3']");
  const input4 = document.querySelectorAll("[data-input='4']");

  //Calculo da regra de 3
  let value1 = input1;
  let value2 = input2;
  let value3 = input3;

  for (let i = 0; i < input4.length; i++)
    if (input1 !== "" && input2 !== "" && input3 !== "") {
      input4[i].textContent = `${Math.trunc(
        (value3[i].value * value2) / value1
      )} g/ml`;
    } else {
      input4[i].textContent = "";
    }
}, 100);

// Função pra listar novo ingrediente
const newIngredient = function () {
  const input4 = document.querySelectorAll("[data-input='4']");
  let newTr = `
    <tr class="ingredient-number">
        <tr>
            <td>
            </td>
            <td>
                <p class="table-text ">Ingrediente ${input4.length + 1}: </p>
            </td>
        </tr>
        <tr>
            <td class="table-text">
                <input type="number"class="input-3" data-input='3'  >
            </td>
            <td class="table-arrow">
                <i class="fas fa-arrow-right"></i>
            </td>
            <td>
                <p class="table-text text-box" data-input='4'></p>
            </td>
        </tr>
    </tr>`;
  table.innerHTML += newTr;
};

// Função para resetar a tabela
const resetCard2 = function () {
  document.querySelector("[data-input='1']").value = "";
  document.querySelector("[data-input='2']").value = "";

  // template para zerar a tabela
  let clearTable = `
  <table>
      <tr>
        <td>
          <p class="text-box table-text" data-amount='1'>Quantidade padrão</p>
        </td>
        <td class="table-arrow">
          <i class="fas fa-arrow-right"></i>
        </td>
        <td>
          <p class="text-box table-text" data-amount='2'>quantidade para x pessoas</p>
        </td>
      </tr>
      <tr class="ingredient-number">
      <tr>
          <td></td>
          <td>
              <p class="table-text ">Ingrediente 1 : </p>
          </td>
      </tr>
      <tr>
          <td class="table-text">
            <input type="number" class="input-3" data-input='3' >
          </td>
          <td class="table-arrow">
            <i class="fas fa-arrow-right"></i>
          </td>
          <td>
              <p class="table-text text-box " data-input='4'></p>
          </td>
      </tr>
    </tr>
</table>
  
  `;
  table.innerHTML = clearTable;
  cardsDisplay2();
  amountText();
};

// Ações dos botões
btnAdvance.addEventListener("click", function () {
  // animações de display dos cards
  cardsDisplay1();
  //alteração do texto das caixas de "quantidade para X pessoas"
  amountText();
});
btnNewIngredient.addEventListener("click", newIngredient);
btnNewCalc.addEventListener("click", resetCard2);
