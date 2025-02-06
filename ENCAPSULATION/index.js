// DEFINITION

// L'encapsulation en POO est une technique qui consiste à regrouper des données (les propriétés) et des comportements (les méthodes) au sein d'un même objet. Cela permet de protéger ces données en les rendant accessibles uniquement par le biais de ces méthodes, et non directement.

// Image :
// Imagine que l'objet est une boîte. À l'intérieur de cette boîte, il y a des trésors (les propriétés) et des outils (les méthodes). La boîte a un couvercle avec une serrure. Pour accéder aux trésors ou utiliser les outils, il faut passer par une clé spéciale (les méthodes). Cette clé contrôle ce que vous pouvez voir ou modifier à l'intérieur de la boîte, empêchant ainsi les accès non autorisés.

// Exercice : Gestion de comptes bancaires

// Objectif : Illustrer le concept d'encapsulation en limitant l'accès direct aux propriétés d'une classe.
// Instructions :
// Créez une classe BankAccount avec des propriétés privées balance et accountNumber.
// indice: dans le constructor tu vas devoir affilier ces données privées pour
// pouvoir les utiliser, déclare des propriétés accountNumber & initialBalance
// dans ton constructor ! 😍
// Ajoutez des méthodes publiques deposit et withdraw pour modifier le solde.
// Ajoutez une méthode getBalance pour afficher le solde.
// Utilisez des symboles (#) pour indiquer les propriétés privées.

class BankAccount {
    #balance;
    #accountNumber;

    constructor (accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount
        } else {
            console.log("You don't have enough money !");
        }
    }
    getBalance() {
        return `Your balance is ${this.#balance}`
    }
}

const account1 = new BankAccount('123344566', 100);
account1.deposit(50);
account1.withdraw(175);

console.log(account1.getBalance());