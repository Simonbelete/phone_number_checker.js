var inputElement = document.getElementById('pnumInput');

inputElement.addEventListener('keyup', function(event) {
    // Accept only numbers
    if(!/^[0-9+]{10,13}$/.test(this.value)) {
        // Invalid phone number
        // Errors:
        //      - Phone number is too large i.e greater than 13 numbers
        //      - Phone number is too low i.e less than 10 numbers
        //      - Contains characters other than 0 to 9
        
        // do something
        console.log('Error');
    }
})

inputElement.addEventListener('blur', function(event){
    this.value = this.value.replace(/^0+(?=\d)/, '+251');
})