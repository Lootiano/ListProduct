function getItemInput() {
  var item = document.getElementById('item')
  item = item.value
  addItemOnList(item)
}

function addItemOnList(item) {
  let list = document.getElementById('list')
  list.innerHTML = `<li>${item}</li>`
  console.log(item)
  registerItemOnData(item)
}

function registerItemOnData(item) {
  if (((i = 0), i < 0, i++)) {
    console.log(item)
    localStorage.setItem('item' + i, item)
  }
}
