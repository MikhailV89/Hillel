numOrStr = prompt('input number or string');
 console.log(isNaN(+numOrStr));

 switch (isNaN(+numOrStr) || numOrStr && numOrStr.trim()) {
   case null:
         console.log('ви скасували')
        break;
     case '':
        console.log('Empty String')
         break;
       case true:
       console.log(' number is Ba_NaN')
      break;
    default:
       console.log('OK!')
 }