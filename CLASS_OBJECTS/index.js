// Création de Classes et Objets
// Exercice : Gestion d'une bibliothèque

// Objectif : Créer une classe Book pour représenter un livre avec des propriétés comme title, author, year et des méthodes pour obtenir des informations sur le livre.

// Instructions :

// Créez une classe Book.
// Ajoutez un constructeur qui initialise les propriétés title, author, et year.
// Ajoutez une méthode getSummary qui retourne un résumé du livre.
// Créez plusieurs instances de la classe Book et affichez leur résumé.

class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
let harryP = new Book("Harry Potter", "JK Rowling", 1997);
let sDA = new Book("Le Seigneur des Anneaux", "J.R.R Tolkien", 1954)

console.log(harryP.getSummary());
console.log(sDA.getSummary());