document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.resetpassword_code1');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function () {
            var maxLength = parseInt(this.getAttribute('maxlength'));
            var currentLength = this.value.length;
            if (currentLength >= maxLength) {
                var nextInput = this.nextElementSibling;
                if (nextInput && nextInput.tagName.toLowerCase() === 'input') {
                    nextInput.focus();
                }
            }
        });
    }
});