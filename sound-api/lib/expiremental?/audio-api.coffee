(($) ->

    class AudioController
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
        src.noteOn(0)


    root = exports ? this
    root.AudioController = AudioController) jQuery
