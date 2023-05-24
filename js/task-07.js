const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');
textElement.style.fontSize = fontSizeControl.value + 'px';
    const fontSize = ({ currentTarget }) =>
  (textElement.style.fontSize = `${currentTarget.value}px`);
 
  fontSizeControl.addEventListener('input', fontSize);

