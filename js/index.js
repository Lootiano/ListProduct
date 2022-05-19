function getItemInput() {
  let item = document.getElementById('item')
  item = item.value
  addItemOnList(item)
}

function addItemOnList(item) {
  let list = document.getElementById('list')
  list.innerHTML = `<li>${item}</li>`
}
