<script setup>
import {
  ButtonLink,
  Heading,
  List,
  QuickFacts,
  Share,
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
      class="{display:grid} @media(min-width:48rem){grid-template-columns:repeat(2,1fr)} {gap:2rem}"
    >
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

    <section
      class="{display:flex} {flex-direction:column} {gap:1rem} {text-align:center} {margin-top:3rem}"
    >
      <Subheading>Spread the word</Subheading>
      <Share
        :text="`${title} is a hour-fifty-minute AI-free remote hackathon anyone can join on January 16!`"
      ></Share>
    </section>
  </Wrapper>
</template>
