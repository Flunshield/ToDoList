
const todolist = [];
let valeur;

//La fonction clean a pour objectif de mettre à jour l'affichage de la liste à jour du le tableau
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
        document.forms[0].reset();     //Reset les champs input. (evite un bug relou)
        console.log(todolist);
    }

    // La fonction ajout permet d'ajouter un nouvel élément dans le tableau
function Ajout()
    {
        valeur = document.getElementById("as").value;
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
        valeur = document.getElementById("as").value;
        
        if (valeur == "" || valeur == " " || valeur == "  ")
        {
            console.log("vide");
        }
        else
        {
            let test = 0;
            test = todolist.indexOf(valeur);
            console.log(test);
            todolist.splice(test, 1);
            console.log(todolist);
            
            clean();
        }
    }
