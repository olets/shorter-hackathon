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
      class="{display:grid} @media(min-width:calc(768rem_/_16)){grid-template-columns:repeat(2,1fr)} {gap:2rem}"
    >
      <div class="{display:flex} {flex-direction:column} {gap:2rem}">
        <DynamicBox
          class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {gap:2rem}"
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
          class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {gap:1rem}"
        >
          <Subheading>Instigator</Subheading>

          Henry Bley-Vroman
        </DynamicBox>
      </div>

      <div class="{display:flex} {align-items:center}">
        <DynamicBox
          is="section"
          class="{display:flex} {flex-direction:column} {justify-content:center} {padding:2rem} {gap:2rem}"
        >
          <Subheading>From idea to however far you get</Subheading>

          <p>
            Join other developers in an hour-fifty-minute coding challenge for
            the fun of it.
          </p>

          <List
            :items="[
              'Take part as an individual, or as a group.',
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
