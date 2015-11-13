(($) ->
    fadeIn = (audioId) ->
        audioElement = document.getElementById(audioId)
        $audioElement = $(audioElement)
        $audioElement.stop(false)
        audioElement.volume = 0
        audioElement.play()
        $audioElement.animate volume: 1, 1500

    fadeOut = (audioId)->
        audioElement = document.getElementById(audioId)
        $(audioElement).stop(false)
        $(audioElement).animate volume: 0, 1500, -> @pause()

    audioHandler = (e) ->
        soundData = $(e.currentSlide).data('sounds')
        nextSounds = soundData?.split(",").map((e)->e.trim()) or []
        prevSoundData = $(e.previousSlide).data('sounds')
        currentSounds = prevSoundData?.split(",").map((e)->e.trim()) or []
        console.log("previous",JSON.stringify(currentSounds),"next",JSON.stringify(nextSounds))
        nextSounds.forEach (soundId) ->
            fadeIn(soundId) if not (soundId in currentSounds)
            currentSounds = currentSounds.filter (id) -> id isnt soundId
        console.log("left sounrds are ",currentSounds)
        currentSounds.forEach((soundId) -> fadeOut(soundId))


    Reveal.addEventListener('ready', audioHandler)
    Reveal.addEventListener('slidechanged', audioHandler)
    root = exports ? this
    root.audioHandler = audioHandler) jQuery