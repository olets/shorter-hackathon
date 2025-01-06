<script setup>
import { ButtonLink, Heading, List, Subheading } from "#components";
const DynamicBox = resolveComponent("DynamicBox");
</script>

<!-- @TODO fancy background effect -->

<template>
  <div
    class="{display:grid} {min-height:100dvh} {padding:3.5rem} {justify-content:center} {align-items:center}"
  >
    <div
      class="{display:grid} {grid-template-columns:repeat(2,1fr)} {grid-template-rows:repeat(4,1fr)} {width:90vw} {max-width:900px}"
    >
      <DynamicBox
        class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {transform:translate3d(-1rem,-1rem,0)} {grid-area:1_/_1_/_4_/_2} {gap:2rem}"
      >
        <Heading>
          The Hackathon Shorter Than The World’s “Shortest” Hackathon
        </Heading>

        <section class="{display:flex} {flex-direction:column} {gap:1rem}">
          <Subheading>Quick Facts</Subheading>

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

        <div class="{align-self:start}">
          <ButtonLink to="/about">Learn More</ButtonLink>
        </div>
      </DynamicBox>

      <DynamicBox
        is="section"
        class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {transform:translate3d(-1rem,1rem,0)} {grid-area:4_/_1_/_5_/_2} {gap:1rem}"
      >
        <Subheading>Instigator</Subheading>

        Henry Bley-Vroman
      </DynamicBox>

      <div
        class="{display:flex} {align-items:center} {grid-area:1_/_2_/_5_/_3} {transform:translateX(1rem)}"
      >
        <DynamicBox
          is="section"
          class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {margin:1rem_0} {gap:2rem}"
        >
          <Subheading>From idea to however far you get</Subheading>

          <p>
            Join other developers in an hour-fifty-minute coding challenge for
            the fun of it.
          </p>

          <List
            :items="[
              'Take part as an individual, or as a group.',
              'Try not to get misled by Stackoverflow.',
              'All participants will get some good TBD something or other.',
              'Everyone is welcome.',
            ]"
          ></List>

          <!-- @TODO fancy effect -->
          <p>Happy hacking!</p>
        </DynamicBox>
      </div>
    </div>
  </div>
</template>
