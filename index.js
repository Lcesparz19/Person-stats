function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.color.value
    const heading = document.querySelector('h1')
    const divname = document.querySelector('#divname')
    const divage = document.querySelector('#divage')
    heading.textContent = name + "'s Stats"
    divname.textContent = "Name: " + name
    divage.textContent = "Age: " + age
    document.getElementById("stats").style.color = color
}
  const personForm = document.querySelector('#person-form')
  personForm.addEventListener('submit',changeHeading)