<style scoped>
h2 {
  text-transform: uppercase;
  font-weight: 700;
  font-family: monospace;
}
.fancy-corners {
  border: var(--border-width) solid currentColor;
  position: relative;

  &::before,
  &::after {
    background: var(--color-background);
    content: "";
    position: absolute;
    border-width: 1px;
    border-style: solid;
    width: var(--width-fancy-corners);
    aspect-ratio: 1 / 1;
  }

  &::before {
    top: -1px;
    left: -1px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: currentColor;
    border-bottom-color: currentColor;
  }

  &::after {
    bottom: -1px;
    right: -1px;
    border-top-color: currentColor;
    border-left-color: currentColor;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
}
</style>

<template>
  <div
    class="{display:grid} {min-height:100dvh} {padding:3.5rem} {justify-content:center} {align-items:center}"
  >
    <div
      class="{display:grid} {grid-template-columns:repeat(2,1fr)} {grid-template-rows:repeat(4,1fr)} {width:90vw} {max-width:900px}"
    >
      <div
        class="{display:flex} {flex-direction:column} {justify-content:center} fancy-corners {padding:2rem} {transform:translate3d(-1rem,-1rem,0)} {grid-area:1_/_1_/_4_/_2} {gap:2rem}"
      >
        <h1
          class="{font-size:2.5rem} {font-weight:500} {line-height:1} {text-transform:uppercase} {word-spacing:.5ch}"
        >
          The Hackathon Shorter Than The World’s “Shortest” Hackathon
        </h1>

        <section class="{display:flex} {flex-direction:column} {gap:1rem}">
          <h2>Quick Facts</h2>

          <dl>
            <div>
              <dt class="{display:inline}">When:&nbsp;</dt>
              <dd class="{display:inline}">
                An hour and fifty minutes at any time(s) on
                <time datetime="2025-01-16">Thursday, January 16th </time>
              </dd>
            </div>

            <div class="{margin-top:.5rem}">
              <dt class="{display:inline}">Where:&nbsp;</dt>
              <dd class="{display:inline}">Whereever you are</dd>
            </div>
          </dl>
        </section>

        <a
          class="{align-self:start} {border:1px_solid_currentColor} {padding:.8rem_1.5rem} {--width-fancy-corners:10px} {font-family:monospace} {text-transform:uppercase} {font-weight:700} fancy-corners :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)} {transition:background-color_400ms}"
          href="#"
          >Share your intention to participate</a
        >
      </div>

      <section
        class="{display:flex} {flex-direction:column} {justify-content:center} fancy-corners {padding:2rem} {transform:translate3d(-1rem,1rem,0)} {grid-area:4_/_1_/_5_/_2} {gap:1rem}"
      >
        <h2>Instigator</h2>

        Henry Bley-Vroman
      </section>

      <div
        class="{display:flex} {align-items:center} {grid-area:1_/_2_/_5_/_3} {transform:translateX(1rem)}"
      >
        <section
          class="{display:flex} {flex-direction:column} {justify-content:center} fancy-corners {padding:2rem} {margin:1rem_0} {gap:2rem}"
        >
          <h2>From idea to however far you get</h2>

          <p>
            Join other developers in an hour-fifty-minute coding challenge for
            the fun of it.
          </p>

          <ul class="{margin-left:2rem}">
            <li
              class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)}"
            >
              Take part as an individual, or as a group.
            </li>
            <li
              class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)} {margin-top:1rem}"
            >
              Try not to get misled by Stackoverflow.
            </li>
            <li
              class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)} {margin-top:1rem}"
            >
              All participants will get some good TBD something or other.
            </li>
            <li
              class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)} {margin-top:1rem}"
            >
              Everyone is welcome.
            </li>
          </ul>

          <p>Happy hacking!</p>
        </section>
      </div>
    </div>
  </div>
</template>
