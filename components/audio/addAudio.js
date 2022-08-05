
const addAudio = async (context, url) => {
  let ready = false;
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  const source = context.createBufferSource();
  source.buffer = await new Promise((res) =>
    context.decodeAudioData(buffer, res)
  ).then(ready = true)
  source.loop = true;

  const gain = context.createGain();
  gain.gain.setTargetAtTime(0, context.currentTime, 0)
  const analyser = context.createAnalyser();
  analyser.fftSize = 64;
  source.connect(analyser);
  analyser.connect(gain);

  const data = new Uint8Array(analyser.frequencyBinCount);
  
  return {
    context,
    source,
    gain,
    data,
    ready,
    // This function gets called every frame per audio source
    update: () => {
      analyser.getByteFrequencyData(data);
      // Calculate a frequency average
      return (data.avg = data.reduce(
        (prev, cur) => prev + cur / data.length,
        0
      ));
    },
  };
};

export default addAudio;
