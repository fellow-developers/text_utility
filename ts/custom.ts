const btn = document.getElementById('btnCopy');
btn!.addEventListener('click', () => {
  const copyText = document.getElementById('result') as HTMLTextAreaElement;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});
