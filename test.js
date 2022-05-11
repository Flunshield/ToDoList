
const todolist = [];
let valeur;

function clean ()
{
    document.getElementById("input1").innerHTML = " ";

    let lenght = todolist.length;
    console.log(lenght);

        for (let i = 0 ; i < lenght; i++)
        {
            const newTache = document.createElement("li");
            const tache = document.getElementById("input1");
            let k = tache.appendChild(newTache);
            k.innerHTML = todolist[i];
        }
        
    console.log(todolist);
}

function Ajout()
{
    // Sélectionner l'élément input et récupérer sa valeur
    valeur = document.getElementById("ajouter").value;
    if (valeur == "" || valeur == " " || valeur == "  ")
    {
        console.log("vide");
    }
    else
    {
        todolist.push(valeur);
        clean();
    }
}

function Suprimer()
{
    valeur = document.getElementById("suprimer").value;

    if (valeur == "" || valeur == " " || valeur == "  ")
    {
        console.log("vide");
    }
    else
    {
        let test = todolist.indexOf(valeur);
        console.log(test);
        todolist.splice(test, 1);
        console.log(todolist);
        
        clean();
    }
}
