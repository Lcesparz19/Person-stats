function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = renderList(name,age,favoriteColor)
  const stats = document.querySelector('#stats')
  stats.appendChild(list)
}
function renderColor(favoriteColor){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}
function renderListItem(itemName,value){
    const listItem = document.createElement('li')
  listItem.textContent = `${itemName}: ${value}` 
return listItem 
}
function renderList(name,age,favoriteColor){
 const list = document.createElement('ul')

  const nameItem = renderListItem('name',name)

  const ageItem = renderListItem('age',age)
  
  const colorItem = renderListItem('favoriteColor',favoriteColor)
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  

  const colorDiv = renderColor(favoriteColor)
  colorItem.appendChild(colorDiv)

  

  list.appendChild(colorItem)
return list 
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)