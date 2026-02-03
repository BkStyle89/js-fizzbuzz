console.log('i can see the file');

//numeri stampati da 1 a 100
// i numeri multipli di 3 stmpati con fizz
// numeri stamptati con multipli di 5 con buzz
// numeri stampati sia con 3 che 5 fizzbuzz


/* ciclo con commento da 1 a 100 */
for (let i=1; i<=100; i++){
    console.log(i);
/* ciclo * 3 Fizz con commento */
    if (i%3 == 0) {
        console.log(i,'Fizz');
    }
/* ciclo * 5 Buzz con commento */
    else if (i%5 == 0) {
        console.log(i, 'buzz');
            
    }
}
