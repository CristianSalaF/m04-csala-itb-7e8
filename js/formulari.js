const formulari = document.getElementById("formulari");
formulari.addEventListener("submit", startCheck);

function startCheck(event)
{
    let errors = [];
    let valid = true;

    let nom = document.getElementById("text");
    let email = document.getElementById("email");
    let titolin = document.getElementById("titolin");
    let textarea = document.getElementById("textarea");

    //checks
    if(nom.value.length < 2){
        errors.push("El nom no té el format correcte");
        valid = false;
    }

    if(email.value.length < 2){
        errors.push("El email no té el format correcte");
        valid = false;
    }

    if(titolin.value.length < 5){
        errors.push("El títol no té el format correcte");
        valid = false;
    }

    if(textarea.value.length < 4 || textarea.value.length > 250){
        errors.push("El missatge no té el format correcte o és massa llarg");
        valid = false;
    }

    if(!valid) {
        console.log("entra");
        let contenterror = document.getElementById("contenterror");
        if(contenterror != null){
            contenterror.remove();
        }

        let diverrors = document.getElementById("errors");
        diverrors.innerHTML += "<div id='contenterror'></div>";
        let contentError = document.getElementById("contenterror");
        for (let error of errors) {
            contentError.append(error);
            contentError.appendChild(document.createElement("br"));
        }
        event.preventDefault();
    }
}
