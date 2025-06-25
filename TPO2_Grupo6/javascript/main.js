// main.js
// aqui se alejaran los ejercicios y ellos se podran ver dentro de la consola
// Todos los resultados se imprimirán con un identificador de "Solución X:" y separadores.

console.log("=============================================");
console.log(" RESULTADOS DEL TRABAJO PRÁCTICO OBLIGATORIO 2");
console.log("=============================================\n");

// --- EJERCICIOS ---

//////////////////////////////////////////////////
// Solucion 1: Calcular el área de un rectángulo
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La consigna pide crear una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
* Es crucial que la función *retorne* el valor y no lo imprima directamente.
* Luego, el valor retornado debe ser impreso en la consola mediante una llamada a la función dentro de un `console.log()`.
* La fórmula para el área de un rectángulo es muy sencilla: `longitud * ancho`.
* Además, se requieren tres ejemplos distintos para demostrar que la función opera correctamente.
*
* Abordaje de la solución:
* 1. Se define la función `calcularAreaRectangulo` que acepta dos parámetros: `longitud` y `ancho`.
* 2. Dentro de la función, se realiza la multiplicación `longitud * ancho`.
* 3. Se utiliza la palabra clave `return` para enviar el resultado de esta multiplicación fuera de la función.
* 4. Finalmente, se realizan tres llamadas a la función `calcularAreaRectangulo` con diferentes pares de valores (5, 3), (10, 4) y (7, 9),
* encerrando cada llamada en un `console.log()` para que sus resultados sean visibles en la consola, siguiendo las indicaciones del ejercicio.
*/
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solucion 1: Calcular el área de un rectángulo");
console.log(`Área de un rectángulo de 5x3: ${calcularAreaRectangulo(5, 3)}`);   // Resultado esperado: 15
console.log(`Área de un rectángulo de 10x4: ${calcularAreaRectangulo(10, 4)}`); // Ejemplo adicional
console.log(`Área de un rectángulo de 7x9: ${calcularAreaRectangulo(7, 9)}`);   // Ejemplo adicional
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 2: Contar palabras en una cadena
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* El objetivo es contar cuántas palabras hay en una cadena de texto.
* La definición estándar de una palabra en este contexto es una secuencia de caracteres separada por espacios.
* Es importante considerar casos donde pueda haber múltiples espacios consecutivos, o espacios al inicio/final de la cadena,
* ya que estos no deberían generar "palabras" adicionales.
*
* Abordaje de la solución:
* 1. Se define la función `contarPalabras` que recibe un parámetro `cadena`.
* 2. Se utiliza el método `split(' ')` en la cadena para dividirla en un array de subcadenas, usando el espacio como delimitador.
* Esto podría generar cadenas vacías en el array si hay múltiples espacios consecutivos o espacios al principio/final.
* 3. Para manejar esto, se encadena el método `filter(word => word !== '')`. Este método crea un nuevo array que solo incluye los elementos
* (palabras) del array original que no son cadenas vacías, eliminando así los falsos positivos.
* 4. Finalmente, se devuelve la propiedad `length` de este array filtrado, que representa el número exacto de palabras.
* 5. Se proporcionan tres ejemplos, incluyendo uno con espacios extra para demostrar la robustez de la solución.
*/
function contarPalabras(cadena) {
    // Divide la cadena por espacios y filtra cualquier cadena vacía resultante
    const palabras = cadena.split(' ').filter(word => word !== '');
    return palabras.length;
}

console.log("Solucion 2: Contar palabras en una cadena");
console.log(`Palabras en "Humahuaca es un lugar copado": ${contarPalabras("Humahuaca es un lugar copado")}`); // Resultado esperado: 5
console.log(`Palabras en "Hola mundo": ${contarPalabras("Hola mundo")}`); // Ejemplo adicional
console.log(`Palabras en "  Esto  tiene   espacios   extra  ": ${contarPalabras("  Esto  tiene   espacios   extra  ")}`); // Ejemplo con espacios extra
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 3: Contar vocales en una cadena
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La tarea es contar el número de vocales (a, e, i, o, u) en una cadena.
* Es fundamental que el conteo no distinga entre mayúsculas y minúsculas (ej. 'A' debe contar como 'a').
*
* Abordaje de la solución:
* 1. Se define la función `contarVocales` que toma una `cadena`.
* 2. Se convierte la `cadena` a minúsculas usando `toLowerCase()` para simplificar la comparación y hacerla insensible a mayúsculas/minúsculas.
* 3. Se inicializa un contador de vocales a 0.
* 4. Se define un string `vocales` que contiene todas las vocales en minúsculas ('aeiou').
* 5. Se itera sobre cada carácter de la `cadenaMinusculas` utilizando un bucle `for...of`.
* 6. Dentro del bucle, se usa el método `includes()` de la cadena `vocales` para verificar si el carácter actual es una vocal.
* 7. Si el carácter es una vocal, se incrementa el `contador`.
* 8. Finalmente, se devuelve el `contador` total de vocales.
* 9. Se prueban tres ejemplos, incluyendo uno sin vocales en español para confirmar el comportamiento.
*/
function contarVocales(cadena) {
    const cadenaMinusculas = cadena.toLowerCase();
    let contador = 0;
    const vocales = 'aeiou'; // Definición de las vocales a buscar

    for (const char of cadenaMinusculas) {
        if (vocales.includes(char)) { // Comprueba si el carácter actual es una vocal
            contador++;
        }
    }
    return contador;
}

console.log("Solucion 3: Contar vocales en una cadena");
console.log(`Vocales en "JavaScript": ${contarVocales("JavaScript")}`); // Resultado esperado: 3 (a, a, i)
console.log(`Vocales en "Murcielago": ${contarVocales("Murcielago")}`); // Ejemplo adicional (u, i, e, a, o) -> 5
console.log(`Vocales en "Rhythm": ${contarVocales("Rhythm")}`);     // Ejemplo sin vocales en español -> 0
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 4: Encontrar el palíndromo
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La definición de un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
* Para verificar esto, el enfoque principal es comparar la cadena original con su versión invertida.
* Es importante que la comparación sea insensible a mayúsculas y minúsculas para que "Neuquen" y "neuquen" se consideren palíndromos.
*
* Abordaje de la solución:
* 1. Se define la función `esPalindromo` que recibe un `str`.
* 2. Primero, se normaliza la cadena: se convierte a minúsculas usando `toLowerCase()`. Esto asegura que la comparación no dependa de la capitalización.
* 3. Luego, se crea la versión invertida de la cadena normalizada:
* - `split('')`: Divide la cadena en un array de caracteres individuales.
* - `reverse()`: Invierte el orden de los elementos en el array.
* - `join('')`: Une los caracteres invertidos de nuevo en una sola cadena.
* 4. Finalmente, se compara la `cadenaNormalizada` con la `cadenaInvertida` usando el operador de igualdad estricta (`===`).
* Si son idénticas, la función devuelve `true`; de lo contrario, devuelve `false`.
* 5. Se incluyen los ejemplos proporcionados en la consigna (`neuquen`, `reconocer`, `rallar`) y un ejemplo que no es palíndromo (`Hola`) para verificar la función.
*/
function esPalindromo(str) {
    const cadenaNormalizada = str.toLowerCase(); // Convierte a minúsculas para una comparación insensible a mayúsculas/minúsculas
    const cadenaInvertida = cadenaNormalizada.split('').reverse().join(''); // Invierte la cadena
    return cadenaNormalizada === cadenaInvertida; // Compara la cadena normalizada con su versión invertida
}

console.log("Solucion 4: Encontrar el palíndromo");
console.log(`"neuquen" es palíndromo: ${esPalindromo("neuquen")}`);     // Resultado esperado: true
console.log(`"reconocer" es palíndromo: ${esPalindromo("reconocer")}`); // Ejemplo adicional: true
console.log(`"rallar" es palíndromo: ${esPalindromo("rallar")}`);      // Ejemplo adicional: true
console.log(`"Hola" es palíndromo: ${esPalindromo("Hola")}`);          // Ejemplo: false
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 5: Convertir la edad de un perro a años humanos
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La tarea es convertir la edad de un perro a su equivalente en años humanos, sabiendo que 1 año canino = 7 años humanos.
* La función debe tomar la edad del perro y *mostrar un mensaje por consola*, no retornar un valor.
* Se menciona el uso de `prompt` para obtener la edad del usuario, lo cual se simulará en las llamadas de ejemplo.
*
* Abordaje de la solución:
* 1. Se define la función `edadCanina` que recibe un parámetro `edadPerro`.
* 2. Dentro de la función, se calcula la `edadHumana` multiplicando `edadPerro` por 7.
* 3. Se utiliza un `console.log()` con un template literal para imprimir el mensaje "Tu perro tiene X años humanos",
* donde X es la `edadHumana` calculada.
* 4. Para la demostración, se llama a la función `edadCanina` directamente con valores numéricos (7, 3, 10).
* Se incluye un comentario para recordar cómo se podría integrar el `prompt` si fuera un entorno interactivo de navegador,
* pero para el propósito del ejercicio y la salida por consola, las llamadas directas son suficientes.
*/
function edadCanina(edadPerro) {
    const edadHumana = edadPerro * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos`);
}

console.log("Solucion 5: Convertir la edad de un perro a años humanos");
edadCanina(7);  // Ejemplo del ejercicio: Tu perro tiene 49 años humanos
edadCanina(3);  // Ejemplo adicional: Tu perro tiene 21 años humanos
edadCanina(10); // Ejemplo adicional: Tu perro tiene 70 años humanos
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 6: Convertir la primera letra de cada palabra en mayúscula
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La tarea es tomar una cadena de texto y capitalizar la primera letra de cada palabra en ella.
* Esto implica varios pasos: dividir la cadena en palabras, capitalizar cada palabra individualmente y luego unir las palabras de nuevo.
* Debe manejarse correctamente el caso de palabras vacías o múltiples espacios.
*
* Abordaje de la solución:
* 1. Se define la función `capitalizarPalabras` que recibe una `cadena`.
* 2. Se divide la `cadena` en un array de `palabras` usando `split(' ')`.
* 3. Se utiliza el método `map()` sobre este array de `palabras`. `map` es ideal porque transforma cada elemento
* del array original en un nuevo elemento y devuelve un nuevo array con los resultados.
* 4. Dentro de la función de callback de `map`:
* - Se verifica si `palabra.length === 0` (es decir, si la "palabra" es una cadena vacía, lo cual ocurre con `split` si hay múltiples espacios). Si es así, se devuelve una cadena vacía.
* - Si la palabra no está vacía, se toma la primera letra (`palabra.charAt(0)`), se convierte a mayúscula (`toUpperCase()`),
* y se concatena con el resto de la palabra (desde el segundo carácter en adelante, `palabra.slice(1)`).
* 5. Finalmente, el array de `palabrasCapitalizadas` (el resultado de `map`) se une de nuevo en una sola cadena usando `join(' ')`.
* 6. Se prueban tres ejemplos diferentes para validar la función.
*/
function capitalizarPalabras(cadena) {
    const palabras = cadena.split(' '); // Divide la cadena en un array de palabras

    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length === 0) {
            return ''; // Maneja el caso de cadenas vacías resultantes de múltiples espacios
        }
        // Capitaliza la primera letra y concatena con el resto de la palabra
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    return palabrasCapitalizadas.join(' '); // Une las palabras capitalizadas de nuevo en una cadena
}

console.log("Solucion 6: Convertir la primera letra de cada palabra en mayúscula");
console.log(`"hola mundo desde javascript" -> "${capitalizarPalabras("hola mundo desde javascript")}"`); // Resultado esperado: "Hola Mundo Desde Javascript"
console.log(`"este es un ejemplo" -> "${capitalizarPalabras("este es un ejemplo")}"`);             // Ejemplo adicional
console.log(`"una frase con MAYUSCULAS" -> "${capitalizarPalabras("una frase con MAYUSCULAS")}"`);   // Ejemplo adicional
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 7: Generar los primeros N números de la sucesión de Fibonacci
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* La sucesión de Fibonacci es una secuencia donde cada número es la suma de los dos anteriores, comenzando con 0 y 1.
* La función debe devolver un array con los primeros `n` números de esta sucesión.
* Necesito manejar cuidadosamente los casos base: cuando `n` es 0, 1 o 2.
*
* Abordaje de la solución:
* 1. Se define la función `fibonacci` que recibe un número `n`.
* 2. Se manejan los casos base:
* - Si `n` es 0, se devuelve un array vacío `[]`.
* - Si `n` es 1, se devuelve un array con solo el primer número `[0]`.
* 3. Para `n` mayor que 1, se inicializa `fibSequence` con los dos primeros números: `[0, 1]`.
* 4. Se utiliza un bucle `for` que comienza desde `i = 2` (ya que los índices 0 y 1 ya están ocupados).
* El bucle continúa mientras `i < n`.
* 5. En cada iteración, el siguiente número de Fibonacci se calcula sumando los dos números anteriores en el array:
* `fibSequence[i - 1] + fibSequence[i - 2]`.
* 6. Este nuevo número se agrega al final del array `fibSequence` usando `push()`.
* 7. Finalmente, se devuelve el array `fibSequence` completo.
* 8. Se incluyen ejemplos para `n=5`, `n=0`, `n=1` y `n=8` para demostrar la funcionalidad en diferentes escenarios.
*/
function fibonacci(n) {
    if (n <= 0) {
        return []; // Si n es 0 o menos, devuelve un array vacío
    }
    if (n === 1) {
        return [0]; // Si n es 1, devuelve solo el primer número
    }

    const fibSequence = [0, 1]; // Inicializa la secuencia con los dos primeros números

    // Genera los números restantes hasta n
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

console.log("Solucion 7: Generar los primeros N números de la sucesión de Fibonacci");
console.log(`Primeros 5 números de Fibonacci: ${fibonacci(5)}`); // Resultado esperado: [0, 1, 1, 2, 3]
console.log(`Primeros 0 números de Fibonacci: ${fibonacci(0)}`); // Ejemplo adicional: []
console.log(`Primeros 1 número de Fibonacci: ${fibonacci(1)}`); // Ejemplo adicional: [0]
console.log(`Primeros 8 números de Fibonacci: ${fibonacci(8)}`); // Ejemplo adicional: [0, 1, 1, 2, 3, 5, 8, 13]
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 8: Lista de Productos (Usando HOFs)
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* Este ejercicio presenta un array de objetos `productos` y requiere la aplicación de Higher-Order Functions (HOFs)
* específicas: `forEach`, `map`, `filter`, `find` y `reduce`. Cada sub-ejercicio tiene un objetivo claro.
*
* Abordaje de la solución:
* Se define el array `productos` tal como se proporciona en la consigna.
* 1. **forEach (Mostrar nombre y precio):** Se itera sobre cada `producto` y se utiliza un `console.log()`
* con un template literal para mostrar el `nombre` y `precio`. `forEach` es ideal para efectos secundarios como imprimir.
* 2. **map (Crear array de nombres):** Se utiliza `map` para transformar cada objeto `producto` en una cadena que es su `nombre`.
* Esto resulta en un nuevo array que contiene solo los nombres.
* 3. **filter (Productos electrónicos con stock > 20):** Se usa `filter` para crear un nuevo array que contenga solo los
* productos que cumplen dos condiciones: su `categoria` es 'electrónica' Y su `stock` es mayor que 20.
* 4. **find (Producto con id 3):** Se emplea `find` para buscar el primer (y en este caso único) `producto`
* cuyo `id` sea igual a 3. `find` devuelve el objeto completo o `undefined` si no lo encuentra.
* 5. **reduce (Calcular valor total del inventario):** Se utiliza `reduce` para acumular un único valor (el total del inventario).
* El `acumulador` se inicializa en 0. En cada iteración, se suma al `acumulador` el producto de `precio * stock` del `producto` actual.
* Todos los resultados se imprimen en la consola con descripciones claras.
*/
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("Solucion 8: Lista de Productos");

console.log("\n--- 8.1: Nombre y Precio de cada producto (forEach) ---");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n--- 8.2: Nombres de los productos (map) ---");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

console.log("\n--- 8.3: Productos electrónicos con stock > 20 (filter) ---");
const productosElectronicosConStockAlto = productos.filter(producto =>
    producto.categoria === 'electrónica' && producto.stock > 20
);
productosElectronicosConStockAlto.forEach(p => console.log(JSON.stringify(p))); // Usar JSON.stringify para mostrar objetos

console.log("\n--- 8.4: Producto con id 3 (find) ---");
const productoId3 = productos.find(producto => producto.id === 3);
console.log(JSON.stringify(productoId3)); // Usar JSON.stringify para mostrar el objeto

console.log("\n--- 8.5: Valor total del inventario (reduce) ---");
const valorTotalInventario = productos.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.stock);
}, 0); // El 0 es el valor inicial del acumulador
console.log(`Valor total del inventario: $${valorTotalInventario}`);
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 9: Estudiantes y Calificaciones (Usando HOFs)
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* Este ejercicio es similar al anterior, pero con un array de `estudiantes` y sus `calificaciones`.
* De nuevo, se requieren HOFs: `forEach`, `map`, `filter`, `find` y `reduce`.
* Un punto clave es que varios ejercicios requieren calcular el promedio de calificaciones, por lo que es útil
* tener una función auxiliar para esto.
*
* Abordaje de la solución:
* Se define el array `estudiantes` tal como se proporciona.
* Se crea una función auxiliar `calcularPromedio` para reutilizar la lógica de cálculo de promedio.
* 1. **forEach (Mostrar nombre y edad):** Simplemente se itera y se imprime el `nombre` y la `edad` de cada estudiante.
* 2. **map (Nombre y promedio de calificaciones):** Para cada estudiante, se usa `map` para crear un nuevo objeto que
* contenga el `nombre` del estudiante y el `promedio` de sus `calificaciones` (calculado con la función auxiliar).
* 3. **filter (Estudiantes con promedio > 7.5):** Se usa `filter` para seleccionar solo los estudiantes cuyo
* `calcularPromedio` de sus `calificaciones` sea mayor que 7.5.
* 4. **find (Estudiante llamado 'Maria'):** Se usa `find` para localizar el objeto `estudiante` cuyo `nombre` es 'Maria'.
* 5. **reduce (Edad promedio):** Se usa `reduce` para calcular la suma total de las `edades` de todos los estudiantes.
* Luego, se divide esta suma por la cantidad total de estudiantes (`array.length` dentro del `reduce`)
* para obtener el promedio final. Es importante que la división se realice solo una vez, al final.
* Todos los resultados se imprimen en la consola.
*/
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'Maria', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("Solucion 9: Estudiantes y Calificaciones");

// Función auxiliar para calcular el promedio de calificaciones (reutilizable)
const calcularPromedio = (calificaciones) => {
    if (calificaciones.length === 0) {
        return 0; // Evita división por cero si no hay calificaciones
    }
    const suma = calificaciones.reduce((acc, cal) => acc + cal, 0);
    return suma / calificaciones.length;
};

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
console.log("\n--- 9.1: Nombre y edad de cada estudiante (forEach) ---");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}, ${estudiante.edad} años`);
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
console.log("\n--- 9.2: Nombre y promedio de calificaciones (map) ---");
const estudiantesConPromedio = estudiantes.map(estudiante => ({
    nombre: estudiante.nombre,
    promedio: parseFloat(calcularPromedio(estudiante.calificaciones).toFixed(2)) // Usa la función auxiliar y formatea
}));
estudiantesConPromedio.forEach(s => console.log(JSON.stringify(s))); // Usar JSON.stringify para mostrar objetos

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
console.log("\n--- 9.3: Estudiantes con promedio > 7.5 (filter) ---");
const estudiantesConPromedioAlto = estudiantes.filter(estudiante =>
    calcularPromedio(estudiante.calificaciones) > 7.5 // Usa la función auxiliar
);
estudiantesConPromedioAlto.forEach(s => console.log(JSON.stringify(s))); // Usar JSON.stringify para mostrar objetos

// 4. Usando find: Encontrar estudiante llamado 'Maria'
console.log("\n--- 9.4: Estudiante llamado 'Maria' (find) ---");
const maria = estudiantes.find(estudiante => estudiante.nombre === 'Maria');
console.log(JSON.stringify(maria)); // Usar JSON.stringify para mostrar el objeto

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
console.log("\n--- 9.5: Edad promedio de los estudiantes (reduce) ---");
const edadPromedioEstudiantes = estudiantes.reduce((acumulador, estudiante, index, array) => {
    acumulador += estudiante.edad;
    // Si es el último elemento del array, calcula y retorna el promedio final
    if (index === array.length - 1) {
        return acumulador / array.length;
    }
    return acumulador; // Continúa acumulando si no es el último
}, 0); // El 0 es el valor inicial del acumulador
console.log(`Edad promedio de los estudiantes: ${edadPromedioEstudiantes.toFixed(2)} años`); // .toFixed(2) para 2 decimales
console.log("\n//////////////////////////////////////////////////\n");


//////////////////////////////////////////////////
// Solucion 10: Películas (Usando HOFs)
//////////////////////////////////////////////////

/*
* Proceso de pensamiento:
* El último ejercicio también implica manipular un array de objetos (`peliculas`) usando las mismas HOFs:
* `forEach`, `map`, `filter`, `find` y `reduce`. La lógica es similar a los ejercicios 8 y 9, pero adaptada
* a las propiedades específicas de los objetos `pelicula`.
*
* Abordaje de la solución:
* Se define el array `peliculas` tal como se proporciona en la consigna.
* 1. **forEach (Mostrar título y año):** Se itera sobre cada `pelicula` y se imprime su `titulo` y `año` de estreno.
* 2. **map (Títulos en mayúsculas):** Se usa `map` para transformar cada objeto `pelicula` en una cadena
* que es su `titulo` convertido a mayúsculas usando `toUpperCase()`.
* 3. **filter (Películas de drama con rating > 8.5):** Se utiliza `filter` para seleccionar películas
* cuya `genero` sea 'drama' Y cuyo `rating` sea mayor que 8.5.
* 4. **find (Película estrenada en 2014):** Se usa `find` para localizar la `pelicula` cuyo `año` de estreno es 2014.
* 5. **reduce (Duración total):** Se usa `reduce` para sumar la propiedad `duracion` de cada `pelicula`
* y obtener la `duracionTotalPeliculas`. El acumulador se inicializa en 0.
* Todos los resultados se imprimen en la consola con sus respectivos encabezados.
*/
const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("Solucion 10: Películas");

// 1. Usando forEach: Mostrar titulo y año de cada pelicula
console.log("\n--- 10.1: Título y año de cada película (forEach) ---");
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo} (${pelicula.año})`);
});

// 2. Usando map: Crear array de titulos en mayúsculas
console.log("\n--- 10.2: Títulos en mayúsculas (map) ---");
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);

// 3. Usando filter: Obtener peliculas de drama con rating mayor a 8.5
console.log("\n--- 10.3: Películas de drama con rating > 8.5 (filter) ---");
const peliculasDramaRatingAlto = peliculas.filter(pelicula =>
    pelicula.genero === 'drama' && pelicula.rating > 8.5
);
peliculasDramaRatingAlto.forEach(p => console.log(JSON.stringify(p))); // Usar JSON.stringify para mostrar objetos

// 4. Usando find: Encontrar pelicula estrenada en 2014
console.log("\n--- 10.4: Película estrenada en 2014 (find) ---");
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(JSON.stringify(pelicula2014)); // Usar JSON.stringify para mostrar el objeto

// 5. Usando reduce: Calcular la duración total de todas las películas
console.log("\n--- 10.5: Duración total de todas las películas (reduce) ---");
const duracionTotalPeliculas = peliculas.reduce((acumulador, pelicula) => {
    return acumulador + pelicula.duracion;
}, 0); // El 0 es el valor inicial del acumulador
console.log(`Duración total de todas las películas: ${duracionTotalPeliculas} minutos`);
console.log("\n=============================================");
console.log(" FIN DE LOS RESULTADOS");
console.log("=============================================\n");