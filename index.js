function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const heading = document.querySelector('h1')
    const divname = document.querySelector('#divname')
    const divage = document.querySelector('#divage')
    heading.textContent = name + "'s Stats"
    divname.textContent = "Name: " + name
    divage.textContent = "Age: " + age
}
  const personForm = document.querySelector('#person-form')
  personForm.addEventListener('submit',changeHeading)