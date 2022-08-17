# www.shoyei.net

I let my ancient Squarespace site expire and wanted to start building a new website for myself. I knew I wanted to make something that was interactive and featured my music, while continuing to practice my 3d web development, so I decided to center the website around a musical experience that users had some ability to control.

## Tech

**Next.js** - not strictly necessary for this type of project, but I wanted to practice using it.

**React-Three-Fiber / React-Three-Drei** - bread and butter.

**Framer Motion** - It's what I'm comfortable with, and I love their implementation of component exit animations.

## Primary Feature

The primary feature is the audio visualizer tracking multiple stems from a song I wrote and recorded previously. The user is presented with a Play prompt that initializes the app, and connects the audio tracks to their respective gain nodes to begin playback in sync. The user is shown a ThreeJS scene, with different 3d elements being manipulated by the Web Audio API's audio analyzer. They are able to mute and unmute each separate track and see how their choices affect the visualization.

## Challenges

The biggest challenge was discovering that rather than simply requiring a click to enable audio playback, Safari specifically requires starting the audio source node to start playback within an onClick event. This required a considerable refactor, since I had already abstracted the start() function.

Another challenge was creating the red mandala in the visualizer. I had to learn some math, and do a lot of experimenting to get it to move and change in a pleasing way. Lots of fun and can't wait to do more.

## Inspiration

I drew inspiration for functionality, movement, and code from the following projects:

[Poimandres Example](https://codesandbox.io/s/simple-audio-analyser-wu51m)
[Paul Henschel's Example](https://codesandbox.io/s/audio-analyser-dvokj)

