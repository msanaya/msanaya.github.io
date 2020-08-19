console.log("I'm connected");
const url = "https://ghibliapi.herokuapp.com/people";
// console.log(apiList);

async function getData() {
  const url = "https://ghibliapi.herokuapp.com/people/"
  try {
    let name = document.getElementById("name")
    let gender = document.getElementById("gender")
    let eyeColor = document.getElementById("eyeColor")
    const response = await axios.get(url)
    console.log(response.data)
    const fileData = response.data
    fileData.forEach((character) => {
      // name.innerText = character.name
      // console.log(character.name)
      // console.log(character)
      const dropdown = document.getElementById('select-character')
      // const select = document.querySelector('select')
      const option = document.createElement('option')
      // option.value = `${characterName.name}`
      option.textContent = `${character.name}`
      dropdown.append(option)
      console.log(option.textContent)

    })
    //!Create function to remove character result from dom
    //*Create function to show results in the dom

    showResults(fileData)
    // console.log(showResults);
    // peopleList(fileData)
    let opt = sel.options[sel.selectedIndex];
    console.log(opt)

    return fileData


  } catch (error) {
    // console.log(`Error: ${error}`)
  }
}

getData()


function display() {
  var index = document.getElementById("select-character").selectedIndex;
  console.log(index)
}

display()


function showResults(fileData) {
  // console.log(fileData)
  characters = fileData

  // `${characterName.name}`
  let name = document.getElementById("name")
  let gender = document.getElementById("gender")
  let eyeColor = document.getElementById("eyeColor")
  let index = characters.indexOf("Yuki")
  name.innerText = characters[index].name
}

const button = document.getElementById("submit").addEventListener("click", () => {

  // console.log(results);
})

// const submit = document.querySelector('#resultsDiv')
// // Write eventHandler here
// submit.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const inputValue = document.querySelector('#select-character').value
//   document.querySelector('#select-character').value = ''
//   // console.log(inputValue)
//   fetchData(inputValue)
// })
const results = document.getElementById("select-character");
// console.log(results.options.index)
// let selectedText = results.options[results.index].text;
// console.log(selectedText)
// ? Console log to get specific values mentioning both the index and the key
// ? console.log(characters[0].gender) 