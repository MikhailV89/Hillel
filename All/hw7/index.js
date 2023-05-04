birthYear = prompt('What is your year of birth?');
city = prompt('What city do you live in?');
sport = prompt('What is your favorite sport?');

age = new Date().getFullYear() - birthYear;


if (birthYear === null || city=== null || sport === null){
    alert(`Шкода, що Ви не захотіли ввести свій ${city}`)
} else if (city === 'Kyiv') {
    alert('You live in the capital of Ukraine, Kyiv');
} else if (city === 'London') {
    alert('You live in the capital of Great Brittain, London');
 } else if (ciy === 'Vashington'){
    alert('You live in the capital of USA, Vashington');
} else{ 
   alert (`You live at the ciy ${city}`);
}

   
alert(`Result:
       Age ${age};
       Sport ${sport};
`);


if (sport === 'football'){
    alert('Круто! Хочеш стати Рональдо?');
}else if (sport === 'basketball'){
    alert('Круто! Хочеш стати Майклом Джорданом?');
}else if (sport === 'swimming'){
    alert('Круто! Хочеш стати Майклом Фелпсом?');
}



