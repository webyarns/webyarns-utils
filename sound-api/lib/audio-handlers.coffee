(($) ->

  audioController =
    context : new (window.AudioContext || window.webkitAudioContext)()
    bufferMap : {}

    add: (name,soundUrl) ->
      req = new XMLHttpRequest();
      req.open("GET",soundUrl,true);
      req.responseType = "arraybuffer";
      req.onload =  =>
        @context.decodeAudioData req.response , (buffer) =>
          if buffer?
            @bufferMap[name] = buffer
          else
            console.error("cannot decode #{soundUrl}")
      req.send();

    play : (name) ->
      src = @context.createBufferSource()
      console.log(@bufferMap)
      src.buffer = @bufferMap[name]
      src.connect(@context.destination)
      if src.start then src.start(0) else src.noteOn(0)


  #todo make dynamic

  audioController.add("nakedcall","sounds/nakedcall.mp3")
  audioController.add("nakedcall","sounds/nakedcall.mp3")

  fadeIn = (audioId) ->
    audioController.play(audioId)



  fadeOut = (audioId)->
    audioElement = document.getElementById(audioId)
    $(audioElement).stop(false)
    $(audioElement).animate volume: 0, 1500, -> @pause

  audioHandler = (e) ->
    soundData = $(e.currentSlide).data('sounds')
    nextSounds = soundData?.split(",").map((e)->e.trim()) or []
    prevSoundData = $(e.previousSlide).data('sounds')
    currentSounds = prevSoundData?.split(",").map((e)->e.trim()) or []
    nextSounds.forEach (soundId) ->
      fadeIn(soundId) if not (soundId in currentSounds)
      currentSounds = currentSounds.filter (id) -> id isnt soundId
    currentSounds.forEach((soundId) -> fadeOut(soundId))




  Reveal.addEventListener('ready', audioHandler)
  Reveal.addEventListener('slidechanged', audioHandler)

  #test
  $("#test").bind('touchend click', ()-> audioController.play('nakedcall'))

  root = exports ? this
  root.audioHandler = audioHandler) jQuery
