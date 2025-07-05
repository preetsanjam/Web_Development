const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

//const first = days[0], second = days[1], third = days[2], fifth = days[4], sixth = days[5];

// Array destructuring
const [first, second, third, ,fifth = 'Holiday', sixth = 'Holiday'] = days; // Comma skips the fourth item in the array
                                                                            // 'Holiday' is the default value
                                                                            // 'Holiday' won't be returned for 'fifth' 
                                                                            // 'Holiday' will be returned for 'sixth'
console.log(first, second, third, fifth, sixth);