
const todolist = [];

function clean ()
{
    const newTache = document.createElement("li");
    const tache = document.getElementById("input1");
    let k = tache.appendChild(newTache);

    let lenght = todolist.length;
    console.log(lenght);

    let b=0;
        for (let i = 0; i < lenght; i++)
        {
        k.innerHTML = todolist[b];
        b++;
        }
        
    console.log(todolist);
}

function Ajout()
{
    // Sélectionner l'élément input et récupérer sa valeur
    let valeur = document.getElementById("ajouter").value;

    todolist.push(valeur);
    clean();

}

function Suprimer()
{
    let valeur = document.getElementById("suprimer").value;
    let test = todolist.indexOf(valeur);
    console.log(test);
    todolist.splice(test, 1);
    console.log(todolist);
    
    document.getElementById("input1").innerHTML = "";
    
    clean();

}
