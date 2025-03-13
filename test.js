const todolist = [];
let valeur;
let index = 0;

// La fonction clean met à jour l'affichage de la liste à partir du tableau
function clean() {
    const inputList = document.getElementById("input1");
    inputList.innerHTML = ""; // Nettoyage de l'affichage existant
    const length = todolist.length;
    console.log(length);

    for (let i = 0; i < length; i++) {
        // Créer un nouvel élément <li>
        const newTache = document.createElement("li");
        newTache.id = todolist[i].index; // Définir l'id de l'élément

        // Ajouter le contenu avec un bouton "Supprimer"
        newTache.innerHTML = `${todolist[i].value} <button id="delete-${todolist[i].index}">Supprimer</button>`;
        inputList.appendChild(newTache); // Ajouter l'élément à la liste affichée
    }

    addListener(); // Ajouter les écouteurs d'événements de suppression après l'affichage
    document.forms[0].reset(); // Réinitialiser les champs du formulaire
    console.log(todolist);
}

// La fonction ajout permet d'ajouter un nouvel élément au tableau
function Ajout() {
    valeur = document.getElementById("as").value.trim(); // Supprimer les espaces inutiles
    if (valeur === "") {
        console.log("Le champ est vide");
    } else {
        // Ajouter une nouvelle tâche au tableau
        todolist.push({ index: index, value: valeur });
        index++; // Incrémenter l'index

        clean(); // Mettre à jour l'affichage
    }
}

function addListener() {
    // Ajouter les événements "click" pour les boutons de suppression
    todolist.forEach((task, i) => {
        let button = document.getElementById(`delete-${task.index}`);
        // Vérifier si le bouton existe avant d'ajouter un gestionnaire d'événements
        if (button) {
            button.addEventListener('click', function(event) {
                todolist.splice(i, 1); // Supprimer l'élément du tableau
                clean(); // Mettre à jour l'affichage
            });
        }
    });
}
