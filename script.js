// Fonction pour générer la Fiche de Paie au format PDF
function genererPDF() {
    // Validation des champs
    if (!validerChamps()) {
        return;
    }

    // Récupérer les valeurs des champs
    const nomSalarie = document.getElementById("nomSalarie").value;
    const dateEntree = document.getElementById("dateEntree").value;
    const posteSalarie = document.getElementById("posteSalarie").value;
    const emailSalarie = document.getElementById("emailSalarie").value;
    const telSalarie = document.getElementById("telSalarie").value;
    const salaireBrut = parseFloat(document.getElementById("salaireBrut").value);
    const nbEnfants = parseInt(document.getElementById("nbEnfants").value);

    // Calcul du nombre de jours dans le mois actuel
    const mois = new Date().getMonth();  // Mois actuel (0-11)
    const annee = new Date().getFullYear(); // Année actuelle
    const joursDansMois = new Date(annee, mois + 1, 0).getDate(); // Nombre de jours du mois

    // Afficher les informations de la fiche de paie (ou générer un PDF)
    alert(\`Fiche de Paie générée pour \${nomSalarie} avec un salaire brut de \${salaireBrut} €\`);
}

// Fonction de validation des champs
function validerChamps() {
    // Validation de la date d'entrée (format JJ/MM/AAAA)
    const dateEntree = document.getElementById("dateEntree").value;
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(dateEntree)) {
        alert("La date d'entrée doit être au format JJ/MM/AAAA.");
        return false;
    }

    // Validation du numéro de téléphone
    const telPattern = /^(\+33|0)[1-9](\d{2}){4}$/;
    const telSalarie = document.getElementById("telSalarie").value;
    if (!telPattern.test(telSalarie)) {
        alert("Le numéro de téléphone doit être valide.");
        return false;
    }

    // Validation du salaire brut
    const salaireBrut = parseFloat(document.getElementById("salaireBrut").value);
    if (isNaN(salaireBrut) || salaireBrut <= 0 || salaireBrut > 100000) {
        alert("Le salaire brut doit être un nombre positif et inférieur à 100000.");
        return false;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailSalarie = document.getElementById("emailSalarie").value;
    if (!emailPattern.test(emailSalarie)) {
        alert("L'email doit être valide.");
        return false;
    }

    // Validation du nombre d'enfants
    const nbEnfants = parseInt(document.getElementById("nbEnfants").value);
    if (isNaN(nbEnfants) || nbEnfants < 0) {
        alert("Le nombre d'enfants doit être un nombre valide et supérieur ou égal à zéro.");
        return false;
    }

    return true;
}