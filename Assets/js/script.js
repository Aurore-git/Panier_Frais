/*Variables*/

var rowConfiture= document.getElementById('part-confitures');
var confitureNone = document.getElementById('confitures');

var rowBoisson= document.getElementById('part-boissons');
var boissonNone = document.getElementById('boissons');

var rowFruit= document.getElementById('part-fruits');
var fruitNone = document.getElementById('fruits');

var rowLegume= document.getElementById('part-legumes');
var legumesNone = document.getElementById('legumes');

var allNone = document.getElementById('all');


/* Magasin complet */

function displayNoneAll() {

rowConfiture.style.display='block';
rowBoisson.style.display='block';
rowFruit.style.display='block';
rowLegume.style.display='block';
}

allNone.addEventListener('click',displayNoneAll);


/*Confitures*/

function displayNoneConfiture() {

rowConfiture.style.display='block';
rowBoisson.style.display='none';
rowFruit.style.display='none';
rowLegume.style.display='none';
}

confitureNone.addEventListener('click',displayNoneConfiture);


/*Boissons*/

function displayNoneBoisson() {

  rowBoisson.style.display='block';
  rowConfiture.style.display='none';
  rowFruit.style.display='none';
  rowLegume.style.display='none';
}

boissonNone.addEventListener('click',displayNoneBoisson);


/*Fruits*/

function displayNoneFruit() {

  rowFruit.style.display='block';
  rowConfiture.style.display='none';
  rowBoisson.style.display='none';
  rowLegume.style.display='none';
}

fruitNone.addEventListener('click',displayNoneFruit);


/*Légumes*/

function displayNoneLegumes() {

rowLegume.style.display='block';
rowConfiture.style.display='none';
rowBoisson.style.display='none';
rowFruit.style.display='none';
}

legumesNone.addEventListener('click',displayNoneLegumes);

