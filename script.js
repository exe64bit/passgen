document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const generateStrongBtn = document.getElementById('generateStrongBtn');
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    const copyStrongPasswordBtn = document.getElementById('copyStrongPasswordBtn');

    generateBtn.addEventListener('click', generatePassword);
    generateStrongBtn.addEventListener('click', generateStrongPassword);
    copyPasswordBtn.addEventListener('click', copyPassword);
    copyStrongPasswordBtn.addEventListener('click', copyStrongPassword);

    function generatePassword() {
        const alphabetCount = parseInt(document.getElementById('alphabet').value);
        const symbolCount = parseInt(document.getElementById('symbol').value);
        const numberCount = parseInt(document.getElementById('number').value);

        const alphabetCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbolCharset = "!@#$%^&*()_+{}[]|;:,.<>?";
        const numberCharset = "0123456789";

        let password = '';

        password += generateCharacters(alphabetCount, alphabetCharset);
        password += generateCharacters(symbolCount, symbolCharset);
        password += generateCharacters(numberCount, numberCharset);

        password = shuffleString(password);

        document.getElementById('password').textContent = password;
    }

    function generateStrongPassword() {
        const length = parseInt(document.getElementById('passwordLength').value);
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";

        let password = '';

        password = generateCharacters(length, charset);

        document.getElementById('strongPassword').textContent = password;
    }

    function generateCharacters(count, charset) {
        let characters = '';
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            characters += charset[randomIndex];
        }
        return characters;
    }

    function shuffleString(string) {
        const arr = string.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    function copyPassword() {
        const password = document.getElementById('password').textContent;
        copyToClipboard(password);
    }

    function copyStrongPassword() {
        const strongPassword = document.getElementById('strongPassword').textContent;
        copyToClipboard(strongPassword);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
            });
    }
});