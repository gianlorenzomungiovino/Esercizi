// I metodi degli Array - 1

// Implementare la funzione adultFilter che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.

// function adultFilter(persons) {
//     return persons.filter(person => person.age >= 18);
//   }
  
//   const persons = [
//     { name: 'Paul', age: 16 },
//     { name: 'George', age: 17 },
//     { name: 'Lucas', age: 21 },
//     { name: 'Marco', age: 32 },
//     { name: 'Peter', age: 18 },
//     { name: 'Carl', age: 13 },
//     { name: 'Simon', age: 24 },
//     { name: 'Mark', age: 15 },
//     { name: 'Sandra', age: 34 },
//     { name: 'Alice', age: 28 }
//   ];
  
//   const adults = adultFilter(persons);
//   console.log(persons);
//   console.log(adults);



// I metodi degli Array - 2

// Implementare la funzione firstUncompletedNote che, dato un array di note, restituisce la prima nota non completata. Una nota viene considerata completata se tutti i todo presenti hanno il flag done impostato a true.

//  function firstUncompletedNote(notes) {
//   return notes.find(note => note.todos.some(todo => todo.done === false));
// }

// const notes = [
//   {
//     id: 1,
//     description: 'Workout program',
//     todos: [
//       {
//         id: 1,
//         name: 'Push ups - 10 x 3',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Abdominals - 20 x 3',
//         done: true
//       },
//       {
//         id: 3,
//         name: 'Tapis Roulant - 15min',
//         done: true
//       }
//     ]
//   },
//   {
//     id: 2,
//     description: 'Front-end Roadmap',
//     todos: [
//       {
//         id: 1,
//         name: 'Learn HTML',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Learn CSS',
//         done: false
//       },
//       {
//         id: 3,
//         name: 'Learn JavaScript',
//         done: true
//       },
//       {
//         id: 4,
//         name: 'Learn Angular',
//         done: false
//       }
//     ]
//   },
//   {
//     id: 3,
//     description: 'My Movies Library',
//     todos: [
//       {
//         id: 1,
//         name: 'La città incantata',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Avatar',
//         done: true
//       },
//       {
//         id: 3,
//         name: 'Titanic',
//         done: false
//       }
//     ]
//   }
// ]

// const noteInProgress = firstUncompletedNote(notes);
// console.log('All notes: ', notes); 
// console.log('First note in progress: ', noteInProgress);



// I metodi degli Array - 3

// Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.
// Risultato del console.log richiesto:
// Mela! Banana! Kiwi! Fragola!

// const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

// fruits.forEach(fruit => console.log(fruit + "!"));



// I metodi degli Array - 4

// Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: <name>-<age>.
// Esempio:

// { name: 'Paul', age: 21 } => Paul-21

// function nicknameMap(persons) {
//     return persons.map(nick => `${nick.name}-${nick.age}`);
// }

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];

// const nicknames = nicknameMap(persons);
// console.log(persons);
// console.log(nicknames);



// I metodi degli Array - 5

// Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.

// function calculateAverageAge(persons) {
//   const somma = persons.reduce((acc, cur) => acc + cur.age, 0);
//   return (somma / persons.length);
// }

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];

// const average = calculateAverageAge(persons);
// console.log(persons);
// console.log(average);



// I metodi degli Array - Esercizio di Riepilogo (Facoltativo)

// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

function funzionePadre(){
    function nameList(){
        return studenti.forEach(student => console.log(student.nome));
    }
    nameList()

    function findStudent(){
        const foundStudent = studenti.find(studente => studente.voto > 90);
        return console.log(foundStudent);
    }
    findStudent()

    function mediaVoti(){
        const somma = studenti.reduce((acc, cur) => acc + cur.voto, 0);
        return console.log(somma / studenti.length);
    }
    mediaVoti()

    function nomiMaiusc(){
        return console.log(studenti.map(studente => studente.nome.toUpperCase()));
    }
    nomiMaiusc()

    function filterStudents(){
        return console.log(studenti.filter(studente => studente.voto > 85));
    }
    filterStudents()
}

funzionePadre()