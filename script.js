const paintingDialog = document.querySelector('#painting-dialog');
document.querySelector('#open-painting').addEventListener('click', () => paintingDialog.showModal());
document.querySelector('#close-painting').addEventListener('click', () => paintingDialog.close());
paintingDialog.addEventListener('click', (event) => {
  if (event.target === paintingDialog) {
    const bounds = paintingDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) paintingDialog.close();
  }
});
