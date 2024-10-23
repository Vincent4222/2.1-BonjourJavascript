// Crée une variable message dans lequel on va stocker le message : Bonjour !
//let message = "Bonjour!"+firstname

// Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
//console.log(message)

// Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
//Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
//Attention, ici il s’agit bien de modifier la variable messageet non le console.log()

// Étape 3 : dans une fonction Encapsule ton code précédent dans une fonction nommée sayHello()
//Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
//Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
//Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
//Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 
//???????????Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !


//Ajoute un second paramètre hour à la fonction sayHello()
//Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H, on dise Bonsoir plutôt que Bonjour dans le message
//Voici quelques tests que tu peux faire :

//sayHello(`Beyonce`, 11);
//sayHello(`Beyonce`, 18);
//sayHello(`Beyonce`, 17);
//Tu devrais voir afficher :

//Bonjour Beyonce !
//Bonsoir Beyonce !
//Bonjour Beyonce !

//opérateurs de comparaison de booléens
//Opérateur  	Expression	Signification
//==	        x==y	      Égal
//!=	        x!=y	      Non égal
//> 	        x>y	        Plus grand que
//<	          x	          Plus petit que
//>=	        x>=y	      Plus grand ou égal
//<=	        x<=y	      Plus petit ou égal


signe = window.prompt()
let heure = Number
function sayHello(){
    let firstname = "Beyonce"  
    let message = "Bonjour"+" " +firstname+"!"
    document.querySelector('h1').innerText = signe
    return message

//    if (heure>=18){
//        console.log("Bonsoir"+firstname)
//    } 
//    else {
//        console.log("Bonjour"+firstname)
//    }
}
sayHello();
//sayHello(`Beyonce`, 18);
//sayHello(`Beyonce`, 17);
;






