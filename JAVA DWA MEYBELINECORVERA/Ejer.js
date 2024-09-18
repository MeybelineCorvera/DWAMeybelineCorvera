

//EJERCICIO 1
const persona = { 
    nombre: "Meybeline" , 
    apellido: "Corvera"
  }
  
  persona.nombre = "Abigail"
  console.log(persona.nombre);
  
  
  //EJERCICIO 2
  //Objetos literales y optional chaining operator
  
  const frutas = ["pera", "manzana", "sandia"];
  
  console.log(frutas[2]);
  
  
  //Objetos literales, no indexados
  const animal = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true
  }
  
  console.log("Este leon es de color " + animal.color);
  console.log("Y su nombre es: " + animal.nombre);
  
  console.log(animal["rugiendo"]);
  
  
  //EJERCICIO 3
  //Objetos literales, no indexados
  const animales = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true,
    favorito: {
      dia: {
        ok: true,
      },
      noche:{
        ok: false
      }
    }
  }
  
  
  console.log(animales.favoritos?.luna?.ok);
  
  //EJERCICIO 4
      
  //destructuring
   const animale = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true,
    favorito: {
      dia: {
        ok: true,
      },
      noche:{
        ok: false
      }
    }
  }
  
  //Guardar el valor de la propiedad olor en una constante
  const color= animale.color;
  const nombre = animale.nombre;
  
  console.log("color:" + color + ", animal: " + nombre);
  
  //EJERCICIO 5
  
  const anima = {
    colores:"azul",
    name:"Torogoz",
    volando: true
  }
  
  //destructuring objectos literales...
  
  const {colores, name, volando} = anima;
  console.log("El " + name + " es de color: " + colores);
  
  //arrays indexados
  
  const fruta = ["uva", "mango", "fresa"];
  
  //destructuring arrays
  
  const [uva, mango, fresa] = fruta;
  console.log("A mi me gusta mucho la " + fresa);
  
  //Interpolacion, Operador ternario
  
  