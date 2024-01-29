import mongoose from 'mongoose'
import { MongoClient } from "mongodb";
export const connectDB = async()=> {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/PelisMike') 
        await mongoose.connect('mongodb+srv://porrasmichael882:Michael_777555@cluster0.iludv5c.mongodb.net/pelisMike');

        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
}

// console.log('ddd');

// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Get the database and collection on which to run the operation
    // const database = client.db("PelisMike");
//     const foods = database.collection("movies");
//     const generesCollection = database.collection('genres')
//     // Create an array of documents to insert
//     // console.log(foods)

//     // const actionGnereID = await generesCollection.findOne({ genres: 'action' })
//     // const actionGnereID = await generesCollection.findOne({ genres: 'comedy' })
//     // const actionGnereID = await generesCollection.findOne({ genres: 'fantasy' })
//     // const actionGnereID = await generesCollection.findOne({ genres: 'romance' })
//     const actionGnereID = await generesCollection.findOne({ genres: 'terror' })
//     console.log(actionGnereID._id);
//     const docs = [
        // {
        //    "title": "Deapool 1",
        //     "img": "/src/assets/img/fondo/deapool.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre": "65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Avengers",
        //     "img": "/src/assets/img/fondo/avengers.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre": "65afffe955d91b2a710c3ccc"

        //   },
        //   {
        //     "title": "Depredadro",
        //     "img": "/src/assets/img/fondo/depredadro.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Godzilla",
        //     "img": "/src/assets/img/fondo/godzilla.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Jhon Wick",
        //     "img": "/src/assets/img/fondo/jhonWick.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Rambo",
        //     "img": "/src/assets/img/fondo/rambo.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Los juegos del hambre",
        //     "img": "/src/assets/img/fondo/sinsajo.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "Terminator",
        //     "img": "/src/assets/img/fondo/terminator.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },{
        //     "title": "Transformes",
        //     "img": "/src/assets/img/fondo/trasnformers.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "X-men",
        //     "img": "/src/assets/img/fondo/x-men.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe955d91b2a710c3ccc"
        //   },
        //   {
        //     "title": "17 otra vez",
        //     "img": "/src/assets/img/fondo/17Otravez.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Donde estan las rubias",
        //     "img": "/src/assets/img/fondo/lasRubias.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "La mascara",
        //     "img": "/src/assets/img/fondo/mascara.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "misterio Abordo",
        //     "img": "/src/assets/img/fondo/misterioAbordo.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Mi pobre Angelito",
        //     "img": "/src/assets/img/fondo/pobreAngelito.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Que pasó ayer",
        //     "img": "/src/assets/img/fondo/quePasoayer.jpeg",
        //     "type":"serie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Que pasó ayer 2",
        //     "img": "/src/assets/img/fondo/quePasoAyer2.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Son como niños",
        //     "img": "/src/assets/img/fondo/sonComoninos.jpg",
        //     "type":"Movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },{
        //     "title": "Son como niños 2",
        //     "img": "/src/assets/img/fondo/sonComoninos2.jpg",
        //     "type":"serie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },{
        //     "title": "Virgen a los 40",
        //     "img": "/src/assets/img/fondo/virgen40.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffb255d91b2a710c3cc6"
        //   },
        //   {
        //     "title": "Alicia en el pais de las maravillas",
        //     "img": "/src/assets/img/fondo/aliciaMaravillas.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":actionGnereID
        //   },
        //   {
        //     "title": "Harry Potter y el caliz de fuego",
        //     "img": "/src/assets/img/fondo/Harry Potter y el caliz de fuego.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Coraline",
        //     "img": "/src/assets/img/fondo/coraline.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },{
        //     "title": "Como entrenar a tu dragon",
        //     "img": "/src/assets/img/fondo/entrenarDragon.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Como entrenar a tu dragon 2",
        //     "img": "/src/assets/img/fondo/entrenarDragon2.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Como entrenar a tu dragon 3",
        //     "img": "/src/assets/img/fondo/entrenarDragon3.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Kun Fu Panda",
        //     "img": "/src/assets/img/fondo/kunfu.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Kun Fu Panda 2",
        //     "img": "/src/assets/img/fondo/kunfu2.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Kun Fu Panda 3",
        //     "img": "/src/assets/img/fondo/kunfu3.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "El señor de los anillos",
        //     "img": "/src/assets/img/fondo/senorAnillos.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffe355d91b2a710c3cca"
        //   },
        //   {
        //     "title": "Como Si fuera la primera vez",
        //     "img": "/src/assets/img/fondo/comosiFuera.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "El diario de Noa",
        //     "img": "/src/assets/img/fondo/eldiario.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Un espacio entre nosotros",
        //     "img": "/src/assets/img/fondo/espacioEntre.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Stand de lo besos",
        //     "img": "/src/assets/img/fondo/standBesos.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "La propuesta",
        //     "img": "/src/assets/img/fondo/laPropuesta.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Mi primer beso",
        //     "img": "/src/assets/img/fondo/miPrimerBeso.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Orgullo y prejucio",
        //     "img": "/src/assets/img/fondo/Orgullo_y_prejucio.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Recuerdame",
        //     "img": "/src/assets/img/fondo/recuerdame.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Las venyajas de ser invisible",
        //     "img": "/src/assets/img/fondo/venyajaInvisible.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Yo antes de ti",
        //     "img": "/src/assets/img/fondo/yoAntesTi.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffdc55d91b2a710c3cc8"
        //   },
        //   {
        //     "title": "Anabelle",
        //     "img": "/src/assets/img/fondo/annabelle.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "El conjuro",
        //     "img": "/src/assets/img/fondo/elConjuro.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "Le Conjuro 2",
        //     "img": "/src/assets/img/fondo/elConjuro2.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "El conjuro 3",
        //     "img": "/src/assets/img/fondo/elConjuro3.png",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "It",
        //     "img": "/src/assets/img/fondo/it.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "It 2",
        //     "img": "/src/assets/img/fondo/it2.jpeg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "la Llorona",
        //     "img": "/src/assets/img/fondo/laLlorona.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "La monja",
        //     "img": "/src/assets/img/fondo/monja.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "La monja 2",
        //     "img": "/src/assets/img/fondo/moja2.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
        //   {
        //     "title": "La ouija",
        //     "img": "/src/assets/img/fondo/ouija.jpg",
        //     "type":"movie",
        //     "vide":"/src/",
        //     "genre":"65afffee55d91b2a710c3cce"
        //   },
          

          
//     ];
//     // Prevent additional documents from being inserted if one fails
//     const options = { ordered: true };
//     // Execute insert operation
//     const result = await foods.insertMany(docs, options);
   
//     // Print result
//     console.log(`${result.insertedCount} documents were inserted`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
