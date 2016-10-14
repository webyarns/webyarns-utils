(($) ->
    getId = (s) ->
        if s.startsWith("!") then s.substring(1) else s

    fadeIn = (audioId) ->
        audioElement = document.getElementById(audioId)
        if (audioElement == null)
            console.error('cannot load audio for id ' + audioId)
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
        nextSounds.forEach (soundId) ->
            if (soundId.startsWith("!"))
                soundIdAlwaysRestart = getId(soundId)
                fadeIn(soundIdAlwaysRestart)
                currentSounds = currentSounds.filter (id) -> id isnt soundIdAlwaysRestart
            else
                fadeIn(soundId) if not (soundId in currentSounds)
                currentSounds = currentSounds.filter (id) -> id isnt soundId
        currentSounds.map((s) -> getId(s)).forEach((soundId) -> fadeOut(soundId))

    Reveal.addEventListener('ready', audioHandler)
    Reveal.addEventListener('slidechanged', audioHandler)
    root = exports ? this
    root.audioHandler = audioHandler) jQuery