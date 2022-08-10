function searchInput() {
  let input = document.getElementById('search-input');
  function search() {
    let filter = input.value.toUpperCase();
    let list = document.getElementById('list');
    let jsSearchField = list.querySelectorAll(
      '.directory-content__filter-field'
    );
    for (let i = 0; i < jsSearchField.length; i++) {
      let label = jsSearchField[i].getElementsByTagName('label')[0];
      if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
        jsSearchField[i].style.display = '';
      } else {
        jsSearchField[i].style.display = 'none';
      }
    }
  }
  document.addEventListener('keyup', search);

  input.addEventListener('input', (evt) => {
    if (!evt.inputType && input.value === '') {
      search();
    }
  });
}
searchInput();

function searchBrand() {
  let searchInput = document.getElementById('search-brand');
  function search() {
    let filter = searchInput.value.toUpperCase();
    let list = document.getElementById('list-brand');
    let jsSearchField = list.querySelectorAll(
      '.directory-content__filter-field'
    );
    for (let i = 0; i < jsSearchField.length; i++) {
      let label = jsSearchField[i].getElementsByTagName('label')[0];
      if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
        jsSearchField[i].style.display = '';
      } else {
        jsSearchField[i].style.display = 'none';
      }
    }
  }
  document.addEventListener('keyup', search);

  searchInput.addEventListener('input', (evt) => {
    if (!evt.inputType && searchInput.value === '') {
      search();
    }
  });
}
searchBrand();

function searchCountry() {
  let searchInput = document.getElementById('search-country');
  function search() {
    let filter = searchInput.value.toUpperCase();
    let list = document.getElementById('list-country');
    let jsSearchField = list.querySelectorAll(
      '.directory-content__filter-field'
    );
    for (let i = 0; i < jsSearchField.length; i++) {
      let label = jsSearchField[i].getElementsByTagName('label')[0];
      if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
        jsSearchField[i].style.display = '';
      } else {
        jsSearchField[i].style.display = 'none';
      }
    }
  }
  document.addEventListener('keyup', search);

  searchInput.addEventListener('input', (evt) => {
    if (!evt.inputType && searchInput.value === '') {
      search();
    }
  });
}

searchCountry();
function searchIngredients() {
  let searchInput = document.getElementById('search-ingredients');
  function search() {
    let filter = searchInput.value.toUpperCase();
    let list = document.getElementById('list-ingredients');
    let jsSearchField = list.querySelectorAll(
      '.directory-content__filter-field'
    );
    for (let i = 0; i < jsSearchField.length; i++) {
      let label = jsSearchField[i].getElementsByTagName('label')[0];
      if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
        jsSearchField[i].style.display = '';
      } else {
        jsSearchField[i].style.display = 'none';
      }
    }
  }
  document.addEventListener('keyup', search);

  searchInput.addEventListener('input', (evt) => {
    if (!evt.inputType && searchInput.value === '') {
      search();
    }
  });
}
searchIngredients();
