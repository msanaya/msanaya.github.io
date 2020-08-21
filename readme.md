
<span style="font-family:Advent Pro; ">
  
# Project Overview

## Project Name

Studio Ghibli Fun

## Project Description

This site has a character lookup for the user that displays stats.

## API and Data Sample

I'm going to be using a RESTful API that does not requiere a key or auth. Here is a sample of the JSON:

https://ghibliapi.herokuapp.com/people


```
[
{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "rt_score": "95"
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "release_date": "1988",
  "rt_score": "97"
}
]
```

## Wireframes

<div>
<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597698746/landingPageNew_wmcgri.png" width="550">

<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597687737/characterlookup_bzjndi.png" width="550">

<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597698747/lookupResult_hixbhg.png" width="550">
</div>
<div>
<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597698747/mobileLandingPage_nkargp.png" width="250">

<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597698745/lookup1_f3iq3s.png" width="250">

<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597698745/lookupResults_n3dxyf.png" width="250">
</div>


### MVP/PostMVP

#### MVP 
* Character Lookup: user is able to choose a character name from a drop-down menu and character stats will display.
#### POST-MVP
* Successful usage of quiz: user can complete form to determine Studio Ghibli character name and stats.
* Display character image along with character name and stats in both quiz results and character look up.

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597681045/studioGhibliFunPriorityMatrix.png" width="400">
<img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597681198/Tasks_Table_q6ydof.png" width="400">

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create basic html | H | 3hrs| N/A | 2hrs |
| Create basic CSS | H | 5.6hrs| N/A | 1.5hrs  |
| Link API | H | 5.6hrs| N/A | 7hrs |
| Create drop-down menu with character list | M | 5.6hrs| N/A | 8hrs |
| Create results from selected option | H | 5.6hrs| N/A | 7hrs |
| Create button for character lookup | M | 5.6hrs| N/A | 1hrs |
| Total |  | 37hrs| N/A | 26.5hrs |

## Code Snippet

This code snippet is my project holy grail :star2:. It's basically the forEach loop to be able to go through the array of object and grab a specific property value and append it to a select dropdown. 

```
fileData.forEach((character, i) => {
      const dropdown = document.getElementById('select-character')
      const option = document.createElement('option')
      option.textContent = character.name
      option.value = i
      dropdown.append(option)
    })

```

## Change Log

* First commit. 8/16/2020 _"First version of homework."_
