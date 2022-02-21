module.exports = function toReadable (num) {
    let arrOfNum = num.toString().split('');
  if (num <= 20 || num == 0) {
  	if (num == 0) return 'zero';
  	if (num == 1) return 'one'; 
    if (num == 2) return 'two'; 
    if (num == 3) return 'three'; 
    if (num == 4) return 'four'; 
    if (num == 5) return 'five'; 
    if (num == 6) return 'six'; 
    if (num == 7) return 'seven'; 
    if (num == 8) return 'eight'; 
    if (num == 9) return 'nine'; 
    if (num == 10) return 'ten'; 
    if (num == 11) return 'eleven';
    if (num == 12) return 'twelve'; 
    if (num == 13) return 'thirteen'; 
    if (num == 14) return 'fourteen'; 
    if (num == 15) return 'fifteen'; 
    if (num == 16) return 'sixteen'; 
    if (num == 17) return 'seventeen'; 
    if (num == 18) return 'eighteen'; 
    if (num == 19) return 'nineteen'; 
    if (num == 20) return 'twenty'
   }
   if (num > 20 && num < 100) {
   	if (arrOfNum[1] == 1) arrOfNum[1] = 'one'; 
    if (arrOfNum[1] == 2) arrOfNum[1] = 'two'; 
    if (arrOfNum[1] == 3) arrOfNum[1] = 'three'; 
    if (arrOfNum[1] == 4) arrOfNum[1] = 'four'; 
    if (arrOfNum[1] == 5) arrOfNum[1] = 'five'; 
    if (arrOfNum[1] == 6) arrOfNum[1] = 'six'; 
    if (arrOfNum[1] == 7) arrOfNum[1] = 'seven'; 
    if (arrOfNum[1] == 8) arrOfNum[1] = 'eight'; 
    if (arrOfNum[1] == 9) arrOfNum[1] = 'nine'; 
    if (arrOfNum[1] == 0 && arrOfNum[0] == 3) {
        return 'thirty'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 4) {
        return 'forty'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 5) {
        return 'fifty'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 6) {
        return 'sixty'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 7) {
        return 'seventy'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 8) {
        return 'eighty'
    }
    if (arrOfNum[1] == 0 && arrOfNum[0] == 9) {
        return 'ninety'
    }

    if (arrOfNum[0] == 2) arrOfNum[0] = 'twenty';
    if (arrOfNum[0] == 3) arrOfNum[0] = 'thirty';
    if (arrOfNum[0] == 4) arrOfNum[0] = 'forty';
    if (arrOfNum[0] == 5) arrOfNum[0] = 'fifty';
    if (arrOfNum[0] == 6) arrOfNum[0] = 'sixty';
    if (arrOfNum[0] == 7) arrOfNum[0] = 'seventy';
    if (arrOfNum[0] == 8) arrOfNum[0] = 'eighty';
    if (arrOfNum[0] == 9) arrOfNum[0] = 'ninety';
   	let result = arrOfNum[0] + ' ' + arrOfNum[1];
    return result
   }
   if (num >= 100) {
   	if (arrOfNum[0] == 1 && arrOfNum[1] == 0 && arrOfNum[2] == 0) {
        return 'one hundred'
    }
    if (arrOfNum[2] == 0) {
        arrOfNum[2] = '';
    }
    if (arrOfNum[1] == 0) {
        arrOfNum[1] = '';
    }
   	if (arrOfNum[2] == 1 && arrOfNum[1] != 1) arrOfNum[2] = 'one'; 
    if (arrOfNum[2] == 2 && arrOfNum[1] != 1) arrOfNum[2] = 'two'; 
    if (arrOfNum[2] == 3 && arrOfNum[1] != 1) arrOfNum[2] = 'three'; 
    if (arrOfNum[2] == 4 && arrOfNum[1] != 1) arrOfNum[2] = 'four'; 
    if (arrOfNum[2] == 5 && arrOfNum[1] != 1) arrOfNum[2] = 'five'; 
    if (arrOfNum[2] == 6 && arrOfNum[1] != 1) arrOfNum[2] = 'six'; 
    if (arrOfNum[2] == 7 && arrOfNum[1] != 1) arrOfNum[2] = 'seven'; 
    if (arrOfNum[2] == 8 && arrOfNum[1] != 1) arrOfNum[2] = 'eight'; 
    if (arrOfNum[2] == 9 && arrOfNum[1] != 1) arrOfNum[2] = 'nine'; 
    if (arrOfNum[1] == 1 && arrOfNum[2] == 0) {
        arrOfNum[1] = 'ten';
        arrOfNum[2] = '';
    } 
    if (arrOfNum[1] == 1 && arrOfNum[2] == 1) {
        arrOfNum[1] = 'eleven';
        arrOfNum[2] = '';
    } 
    if (arrOfNum[1] == 1 && arrOfNum[2] == 2) {
        arrOfNum[1] = 'twelve';
        arrOfNum[2] = '';
    } 
    if (arrOfNum[1] == 1 && arrOfNum[2] == 3) {
        arrOfNum[1] = 'thirteen';
        arrOfNum[2] = '';
    } 
    if (arrOfNum[1] == 1 && arrOfNum[2] == 4) {
        arrOfNum[1] = 'fourteen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 1 && arrOfNum[2] == 5) {
        arrOfNum[1] = 'fifteen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 1 && arrOfNum[2] == 6) {
        arrOfNum[1] = 'sixteen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 1 && arrOfNum[2] == 7) {
        arrOfNum[1] = 'seventeen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 1 && arrOfNum[2] == 8) {
        arrOfNum[1] = 'eighteen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 1 && arrOfNum[2] == 9) {
        arrOfNum[1] = 'nineteen';
        arrOfNum[2] = '';
    }  
    if (arrOfNum[1] == 2) arrOfNum[1] = 'twenty ';
    if (arrOfNum[1] == 3) arrOfNum[1] = 'thirty ';
    if (arrOfNum[1] == 4) arrOfNum[1] = 'forty ';
    if (arrOfNum[1] == 5) arrOfNum[1] = 'fifty ';
    if (arrOfNum[1] == 6) arrOfNum[1] = 'sixty ';
    if (arrOfNum[1] == 7) arrOfNum[1] = 'seventy ';
    if (arrOfNum[1] == 8) arrOfNum[1] = 'eighty ';
    if (arrOfNum[1] == 9) arrOfNum[1] = 'ninety ';
    if (arrOfNum[0] == 1) arrOfNum[0] = 'one hundred '
    if (arrOfNum[0] == 2) arrOfNum[0] = 'two hundred '
    if (arrOfNum[0] == 3) arrOfNum[0] = 'three hundred '
    if (arrOfNum[0] == 4) arrOfNum[0] = 'four hundred '
    if (arrOfNum[0] == 5) arrOfNum[0] = 'five hundred '
    if (arrOfNum[0] == 6) arrOfNum[0] = 'six hundred '
    if (arrOfNum[0] == 7) arrOfNum[0] = 'seven hundred '
    if (arrOfNum[0] == 8) arrOfNum[0] = 'eight hundred '
    if (arrOfNum[0] == 9) arrOfNum[0] = 'nine hundred '
    let result1 = arrOfNum[0] + arrOfNum[1] + arrOfNum[2];
    if (result1[result1.length - 1] == ' ') {
      let bi = result1.slice(0, (result1.length - 1))
      return bi
    } return result1
    

   }
}