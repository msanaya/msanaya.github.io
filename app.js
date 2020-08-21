console.log("I'm connected");
const url = "https://ghibliapi.herokuapp.com/people";
// console.log(apiList);

async function getData() {
  const url = "https://ghibliapi.herokuapp.com/people/"
  try {
    // let name = document.getElementById("name")
    // let gender = document.getElementById("gender")
    // let eyeColor = document.getElementById("eyeColor")
    const response = await axios.get(url)
    console.log(response.data)
    const fileData = response.data
    fileData.forEach((character, i) => {
      // name.innerText = character.name
      // console.log(character.name)
      // console.log(character)
      const dropdown = document.getElementById('select-character')
      // const select = document.querySelector('select')
      const option = document.createElement('option')
      // option.value = `${characterName.name}`
      option.textContent = character.name
      option.value = i
      dropdown.append(option)
      console.log(option.textContent)
      console.log(option);
    })
    const button = document.getElementById("submit")
    button.addEventListener("click", () => {
      // console.log(change);
      const option = document.querySelector("select").value
      console.log(option);
      // const container = document.querySelector("#characterPage")
      // // container.stlyes.display = "none"
      // const test = fileData[option];

      const results = response.data[option]
      // console.log(fileData[option])
      // let test = fileData[option]
      console.log(results);
      let name = results.name
      let gender = results.gender
      let eyeColor = results.eye_color
      console.log(eyeColor)
      document.getElementById('name').textContent = name
      document.getElementById('gender').textContent = gender
      document.getElementById('eyeColor').textContent = eyeColor
    })

    // myNewFunction(opti
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getData()

function takeMeToDiv() {
  const div = document.getElementById("characterPage");
  div.scrollIntoView();

};

// const change = document.querySelector("select")
// change.addEventListener("change", () => {
//   const option = document.querySelector("option")
//   console.log(option);
//   myNewFunction(option)
// })



// const button = document.getElementById("submit")
// button.addEventListener("click", () => {
//   // console.log(change);
//   const option = document.querySelector("select").value
//   console.log(option);
// myNewFunction(option)
// })

// function myNewFunction(optionSelected) {

//   console.log(optionSelected.options[optionSelected.selectedIndex].index);
//   return optionSelected.options[optionSelected.selectedIndex].index;
//   eturn option.value
// }


// Function displays index of first option loaded but shows -1 
// function display() {
//   var index = document.getElementById("select-character").selectedIndex;
//   console.log(index)
// }

// display()



function showResults(fileData) {
  // console.log(fileData)
  characters = fileData

  // `${characterName.name}`
  // let name = document.getElementById("name")
  // let gender = document.getElementById("gender")
  // let eyeColor = document.getElementById("eyeColor")
  let index = characters.indexOf("Yuki")
  name.innerText = characters[index].name
}





// })
// const results = document.getElementById("select-character");
// console.log(results.options.index)
// let selectedText = results.options[results.index].text;
// console.log(selectedText)
//  Console log to get specific values mentioning both the index and the key
//  console.log(characters[0].gender) 
// console.log(showResults);
// peopleList(fileData)
// let opt = sel.options[sel.selectedIndex];
// console.log(opt) return fileData