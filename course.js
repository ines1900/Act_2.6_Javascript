'use strict';
var shoppingList = new Array();
shoppingList = ['Chips', 'Cola', 'Olives', 'Café', 'Pommes'];
for (var i = 0; i < shoppingList.length; i++) {
  shoppingList[i] = shoppingList[i].toUpperCase();
}

function addItem() {
  var item = window.prompt("Entrez le nom de votre produit");
  item = item.toUpperCase();
  shoppingList.push(item);
  displayList();
}

function removeItem(itemName) {

  var index = shoppingList.indexOf(itemName);

  if (index == -1) {
    console.log("l'élément " + itemName + " est introuvable");
    return;
  }

  shoppingList.splice(index, 1);
  console.log("l'élément " + itemName + " a été supprimé");
  showTotalItems();
  displayList();
}




function showList() {
  displayList();
}


function displayList() {
  console.clear();
  var divSuperList = document.getElementById('superList');
  showTotalItems();
  console.log(shoppingList);

  if (shoppingList == '') {
    divSuperList.innerHTML = ''
  } else {
    var html = '<ul>';
    for (var i = 0; i < shoppingList.length; i++) {
      html += '<li><button title="supprimer" onClick="javascript: removeItem(\'' + shoppingList[i] +
        '\')" class="crossButton" id="' + i + '">x</button>' + shoppingList[i] + '</li>';
    };
    html += '</ul>';
    divSuperList.innerHTML = html;
  }
}




function showTotalItems() {
  console.log("la liste contient " + shoppingList.length + " produits");
  var text = "La liste contient " + shoppingList.length + " produits";
  document.getElementById('nombreProduits').textContent = text;
}

function clearList() {
  shoppingList = [];
  console.clear();
  displayList();
  window.alert('Votre liste de course a été vidée !');
}
