

module.exports = function toReadable (number) {
    let test = "";
    let numerals = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine "];
    let tens= ["", "ten ", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    let tensTens = ["", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
    let numeralsCut = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let zero = ["zero"];

    number = String(number);

    if (number.length == 1) {
        if (number[0] == 0) {
        return zero;
    }
    }

    if (number.length == 1) {
       test = (numeralsCut [Number(number)]);
       return test;
    }
    if (number.length == 2) {
        if (number[0] == 1 && number[1] != 0){
            test = (tensTens[Number(number[1])]);
            return test.trim();
    } else {

        test = (tens[Number(number[0])] + numerals[Number(number[1])]);
        return test.trim();
    }
}
    if (number.length == 3) {
            if (number[1] == 1 && number[2] != 0) {
                test = (numerals[Number(number[0])]  + 'hundred ' + tensTens[Number(number[2])]);
                return test.trim();
            }else {


                test = (numerals[Number(number[0])] + 'hundred ' + tens[Number(number[1])] + numeralsCut[Number(number[2])]);
                return test.trim();
    }

   
}

}
