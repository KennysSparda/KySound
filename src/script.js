function playAudio(buttonNumber) {
  let audioId = "audio" + buttonNumber
  let audio = document.getElementById(audioId)

  if (!audio.loop) {
    audio.currentTime = 0
  }

  audio.play()
}

function toggleLoop(buttonNumber) {
  let audioId = "audio" + buttonNumber
  let audio = document.getElementById(audioId)
  let repeatButton = document.getElementById("repeat-button-" + buttonNumber)

  if (audio.loop) {
    audio.loop = false
    repeatButton.textContent = "Repetir " + buttonNumber
  } else {
    audio.loop = true
    repeatButton.textContent = "Repetindo " buttonNumber
  }

  repeatButton.classList.toggle("active", audio.loop)
}

function addButtonListeners() {
  const buttons = document.getElementsByClassName("btn")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let buttonNumber = this.id.split("-"[1])
      playAudio(buttonNumber)
    })
  }
}

function addRepeatButtons() {
  const buttons = document.getElementsByClassName("btn")
  const repeatBar = document.getElementById("repeatBar")

  for (let i = 0; i < buttons.length; i++) {
    let buttonNumber = buttons[i].id.split("-"[1])
    let repeatButton = document.createElement("button")
    repeatButton.id = "repeat-button-" + buttonNumber
    repeatButton.className = "repeat-button"
    repeatButton.textContent = "Repetir " + buttonNumber
    repeatButton.addEventListener("click", function() {
      toggleLoop(buttonNumber)
    })
    repeatBar.appendChild(repeatButton)
  }
}

addButtonListeners()
addRepeatButtons()
