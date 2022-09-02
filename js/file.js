document.addEventListener('DOMContentLoaded', () => {
  const inputFile = document.querySelectorAll('.upload-file__input');

  inputFile.forEach(function (el) {
    let textSelector = document.querySelector('.upload-file__text');
    let fileList;

    el.addEventListener('change', function (e) {
      fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        fileList.push(el.files[i]);
      }

      fileList.forEach((file) => {
        uploadFile(file);
      });
    });

    const uploadFile = (file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert('Файл должен быть не более 5 МБ.');
        return;
      }

      if (file && file.length > 1) {
        if (file.length <= 4) {
          textSelector.textContent = `Выбрано ${file.length} файла`;
        }
        if (file.length > 4) {
          textSelector.textContent = `Выбрано ${file.length} файлов`;
        }
      } else {
        textSelector.textContent = file.name;
      }
    };
  });
});
