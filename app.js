console.log("I'm connected");
const url = "https://ghibliapi.herokuapp.com/people";
// console.log(apiList);


async function getData() {
  const url = "https://ghibliapi.herokuapp.com/people/"
  try {
    const response = await axios.get(url)
    console.log(response.data)
    const fileData = response.data
    fileData.forEach((characterName) => {
      const character = characterName.name
      console.log(character)
      const dropdown = document.getElementById('select-character')
      // const select = document.querySelector('select')
      const option = document.createElement('option')
      // option.value = `${characterName.name}`
      option.textContent = `${characterName.name}`
      dropdown.append(option)

    })
    // peopleList(fileData)
    return fileData
  } catch (error) {
    // console.log(`Error: ${error}`)
  }
}

getData();

// function peopleList(fileData) {
//   fileData.forEach((character) => {
//     console.log(character.name)
//     const select = document.querySelector('select')
//     const option = document.createElement('option')
//     option.value = `${character.name}`
//     option.textContent = `${character.name}`
//     select.append(option)
//   })
// }

// function peopleList(character) {
//   console.log(character);
// }

// apiList.forEach();

// async function getData() {
//     try {
//       const response = await axios.get(url)
//       console.log(response.data)
//         .then((character) => {
//           let fileData = response.data
//           console.log(fileData)
//         })
//       // const fileData = response.data
//       catch (error) {
//         console.log(`Error: ${error}`)

//       }