console.log("I'm connected");
// const url = "https://api.jsonbin.io/v3/b/665570e2e41b4d34e4fa94ab";
 let req = new XMLHttpRequest();

async function getData() {
  const url = "https://api.jsonbin.io/v3/b/665570e2e41b4d34e4fa94ab"
  try {
    const response = await axios.get(url)
    const fileData = response.data
    console.log(fileData.record.people)
    const peopleArray = fileData.record.people
    var dataArray = Object.values(peopleArray); //this is not working, converts to array but no data
    // var dataArray2=dataArray.map(el=>Object.values(el));
    // dataArray = JSON.parse(dataArray);
    console.log(dataArray)
    dataArray.forEach((character, i) => {
      const dropdown = document.getElementById('select-character') 
      console.log (dropdown)
      const option = document.createElement('option')
      option.textContent = character.name
      option.value = i
      dropdown.append(option)
    })
    const button = document.getElementById("submit")
    button.addEventListener("click", () => {
      const option = document.querySelector("select").value

      const results = peopleArray[option]
      let name = results.name
      let gender = results.gender
      let eyeColor = results.eye_color
      console.log(eyeColor)
      document.getElementById('name').textContent = name
      document.getElementById('gender').textContent = gender
      document.getElementById('eyeColor').textContent = eyeColor
    })
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getData()


function takeMeToDiv() {
  const div = document.getElementById("characterPage");
  div.scrollIntoView();

};

function takeMeHome() {
  const div = document.getElementById("homePage");
  div.scrollIntoView();

};
