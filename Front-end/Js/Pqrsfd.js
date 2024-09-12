const textarea = document.getElementById('mensaje');
    const charCount = document.getElementById('char-count');

    textarea.addEventListener('input', () => {
      const remaining = 5000 - textarea.value.length;
      charCount.textContent = `Máximo ${remaining} caracteres restantes`;
      if (remaining < 0) {
        charCount.style.color = 'red';
      } else {
        charCount.style.color = '#ffffff';
      }
    });