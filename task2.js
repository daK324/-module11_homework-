function notOneThousand(number) {
    if( number > 1000 || number <= 1 ) {
        return "Данные не верны"
    } else  {
        for( let i = 2; i < number; i++ ) {
            if( number % i === 0 ) {
                return "Составное число"
            }
        }
        return "Простое число"
    }  
}
console.log(notOneThousand(11))
