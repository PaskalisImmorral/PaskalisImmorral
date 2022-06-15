function encodeAndDecodeMessages() {
    let areas = document.querySelectorAll('textarea');
    let firstInput = areas[0];
    let secondInput = areas[1];
    let buttons = Array.from(document.querySelectorAll('button'));
    let firstButton = buttons[0];
    let secondButton = buttons[1];
    firstButton.addEventListener('click', encode);
    secondButton.addEventListener('click',decode);
    function encode(e){
            let newInput = '';
            let input = firstInput.value;
            for (let index = 0; index < input.length; index++) {
                newInput += String.fromCharCode(input[index].charCodeAt(0) + 1);
            }
    
            secondInput.value = newInput;
            firstInput.value = '';
    

    }
    function decode(e){
        let input = secondInput.value;
            let newInput = '';
            for (let index = 0; index < input.length; index++) {
                newInput += String.fromCharCode(input[index].charCodeAt(0) - 1);
            }
        
        firstInput.value = newInput;
        secondInput.value = '';
    }
}
