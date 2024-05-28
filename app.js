console.log("I'm connected");
const url = "https://api.jsonbin.io/v3/b/665570e2e41b4d34e4fa94ab";

async function getData() {
  const url = "https://api.jsonbin.io/v3/b/665570e2e41b4d34e4fa94ab"
  try {
    const response = await axios.get(url)
    const fileData = response.data
    fileData.forEach((character, i) => {
      const dropdown = document.getElementById('select-character')
      const option = document.createElement('option')
      option.textContent = character.name
      option.value = i
      dropdown.append(option)
    })
    const button = document.getElementById("submit")
    button.addEventListener("click", () => {
      const option = document.querySelector("select").value

      const results = response.data[option]
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
