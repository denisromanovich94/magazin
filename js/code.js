document.querySelectorAll('.code-input').forEach((input, index, array) => {
    input.addEventListener('input', (event) => {
        if (event.target.value.length >= 4 && index < array.length - 1) {
            array[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && event.target.value === '' && index > 0) {
            array[index - 1].focus();
        }
    });
});
