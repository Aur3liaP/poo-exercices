// STEP 1 ___ DEFINITIONS :

// QU'EST CE QUE L'HERITAGE EN POO :
// Héritage en programmation orientée objet (POO) est un mécanisme qui permet à une classe (appelée classe dérivée ou sous-classe) de hériter des propriétés et des méthodes d'une autre classe (appelée classe de base ou super-classe).

// Métaphore de l'Héritage
// Imaginez une recette de gâteau de base que vous utilisez pour faire un gâteau simple. Cette recette comprend les ingrédients de base et les étapes de préparation.

// Recette de Gâteau de Base :
// Ingrédients : farine, sucre, œufs, beurre
// Étapes : mélanger les ingrédients, cuire au four
// Maintenant, vous voulez faire des variantes de ce gâteau, comme un gâteau au chocolat ou un gâteau aux fruits.

// Recette de Gâteau au Chocolat :
// Hérite de la recette de base
// Ajoute du chocolat
// Modifie certaines étapes pour incorporer le chocolat

// Recette de Gâteau aux Fruits :
// Hérite de la recette de base
// Ajoute des fruits
// Modifie certaines étapes pour incorporer les fruits
// Ces nouvelles recettes héritent des ingrédients et des étapes de la recette de base mais peuvent aussi ajouter leurs propres ingrédients et modifier certaines étapes.

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// STEP 2 ___ EXERCICE :

// Objectif : Utiliser l'héritage pour créer des sous-classes Teacher et Student basées sur une classe parent Person.

// Instructions :
// Créez une classe Person avec des propriétés name et age, et une méthode introduce qui renvoie une présentation qui contient name & age.
// Créez une sous-classe Teacher qui hérite de Person et ajoute une propriété subject et une méthode introduce (qui reprend celle de person et) qui inclut le sujet enseigné.
// Créez une sous-classe Student qui hérite de Person et ajoute une propriété grade et une méthode introduce qui inclut le grade (année scolaire).
// Créez des instances de Teacher et Student et appelez leur méthode introduce.

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getIntroduce() {
        return `Hi my name is ${this.name} and i'm ${this.age} yo.`
    }
}
class Teacher extends Person {
    constructor (name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    getIntroduce() {
        return `Hi my name is ${this.name}, i'm ${this.age} yo and I teach ${this.subject}.`
    }
}

class Student extends Person {
    constructor (name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getIntroduce() {
       return `Hi my name is ${this.name}, i'm ${this.age} yo and i'm in grade ${this.grade}.`
    }
}

const martin = new Teacher ('Martin', 42, 'Javascript');
const marie = new Student ('Marie', 17, 2);

console.log(martin.getIntroduce());
console.log(marie.getIntroduce());