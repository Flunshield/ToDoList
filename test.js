
var todolist = [];

function Ajout()
{
    // Sélectionner l'élément input et récupérer sa valeur
    let valeur = document.getElementById("ajouter").value;

    todolist.push(valeur);

    const newTache = document.createElement("li");
    let tache = document.getElementById("input1");
    let k = tache.appendChild(newTache);
    let lenght = todolist.length;
    console.log(lenght);
    let b=0;
        for (let i = 0; i < lenght; i++)
        {
        k.innerHTML = todolist[b];
        b++;
        }
}

function Suprimer()
{
    // Sélectionner l'élément input et récupérer sa valeur
    let valeur = document.getElementById("ajouter").value;

    todolist.push(valeur);

    const newTache = document.createElement("li");
    let tache = document.getElementById("input1");
    let k = tache.appendChild(newTache);
    let lenght = todolist.length;
    console.log(lenght);
    let b=0;
        for (let i = 0; i < lenght; i++)
        {
        k.innerHTML = todolist[b];
        b++;
        }
}
