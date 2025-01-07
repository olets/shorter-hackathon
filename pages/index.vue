<script setup>
import {
  ButtonLink,
  Heading,
  List,
  QuickFacts,
  Subheading,
  Wrapper,
} from "#components";
const DynamicBox = resolveComponent("DynamicBox");
import title from "#shared/title";
</script>

<!-- @TODO fancy background effect -->

<template>
  <Wrapper>
    <div
      class="{display:grid} {grid-template-columns:repeat(2,1fr)} {grid-template-rows:repeat(4,1fr)}"
    >
      <DynamicBox
        class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {transform:translate3d(-1rem,-1rem,0)} {grid-area:1_/_1_/_4_/_2} {gap:2rem}"
      >
        <Heading>
          {{ title }}
        </Heading>

        <QuickFacts></QuickFacts>

        <p>There's context should know about:</p>

        <ButtonLink to="/about">Learn More</ButtonLink>
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
  </Wrapper>
</template>
