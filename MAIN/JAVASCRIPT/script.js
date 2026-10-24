/*FORM INPUT WITH CHARACTER COUNTER*/
/*TEXT BOX*/
const textArea = document.querySelector('#userText');
const charCount = document.querySelector('#charCount');
const maxLength = 100;
/*EVENT LISTENER 0_0*/
textArea.addEventListener('input', (e) => {
    const currentLength = e.target.value.length;
    charCounter.textContent = '${maxLength - currentLength} characters left';
});