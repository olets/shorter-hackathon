<script setup>
import { ButtonLink, QuickFacts, Share, Wrapper } from "#components";
const DynamicSrOnly = resolveComponent("DynamicSrOnly");
import title from "#shared/title";
const runtimeConfig = useRuntimeConfig();

const faqItems = [
  {
    question: "Do I need to register?",
    answer: "Nope!",
  },
  {
    question: "What technologies am I allowed to use?",
    answer: "Anything but AI. Disable Codepilot/Tabnine/etc before you start.",
  },
  {
    question: "I exist in a location. Can I participate?",
    answer: "Yes! This is a remote event.",
  },
  {
    question: "Will submissions be judged?",
    answer: "Nope!",
  },
  {
    question: "Will food and drink be available at the event?",
    answer: "If you have some!",
  },
  {
    question: "Will I get anything for participation?",
    answer: "Yes! Some fun something TBD.",
  },
];

const termsAndConditions = [
  "Anyone of any age in any location can join.",
  "You can work solo or in a group.",
];
</script>

<template>
  <NuxtLink
    class="{background:var(--color-background)} {border:1px_solid_currentColor} {padding:1rem} {position:fixed} {top:20px} {right:20px} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)}"
    to="/"
  >
    Homepage 🏠
  </NuxtLink>

  <Wrapper>
    <div class="{display:flex} {flex-direction:column} {gap:4rem}">
      <h1
        class="{font-size:4rem} {line-height:1} {text-align:center} {text-transform:uppercase} {font-weight:700}"
      >
        {{ title }}
      </h1>

      <section
        class="{font-weight:300} {font-size:1.5rem} {text-align:center} {display:flex} {flex-direction:column} {gap:1rem}"
      >
        <DynamicSrOnly is="h2">Introduction</DynamicSrOnly>

        <p>
          People can code cool things in a short period of time, without a
          monetarily valuable reward, without AI, regardless of where they live
          and can afford to travel to, regardless of how many people they'd like
          to work with, regardless of when in the day can make time.

          <br />
          <br />

          In the spirit of
          <a href="https://www.youtube.com/watch?v=tkg858APzFk"
            >The Academy of Movies Shot During the Oscars Awards</a
          >,

          <br />
          <br />

          on January 16, the same day as
          <a href="https://shortest-hackathon.vercel.app/"
            >The World’s Shortest Hackathon</a
          >, a 2-hour in-person AI-focused event in which a select few
          developers compete for a chance to win a computer part signed by the
          9th wealthiest person in the world, reserve an hour and fifty minutes
          to code something without AI.
        </p>
      </section>

      <div class="{font-weight:300} {font-size:1.5rem}">
        <QuickFacts></QuickFacts>

        <div
          class="{display:flex} {flex-direction:column} {gap:1.5rem} {align-items:center} {margin-top:3rem}"
        >
          Tell your networks that you intend to participate!

          <Share
            :hashtags="['ShorterHackathon', 'hackathon']"
            :text="`On January 16 I'm going to take part in ${title}, the hour-fifty-minute AI-free remote hackathon anyone can join.`"
            :title
            :url="runtimeConfig.public.cdnURL"
          ></Share>
        </div>
      </div>

      <section>
        <h2 class="{font-size:2rem} {font-weight:700}">FAQ</h2>

        <div
          class="{display:flex} {flex-direction:column} {gap:1rem} {margin-top:1rem}"
        >
          <div v-for="item in faqItems">
            <p>
              <em
                class="{display:block} {font-weight:700} {font-style:initial}"
                >{{ item.question }}</em
              >

              {{ item.answer }}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="{font-size:2rem} {font-weight:700}">Terms and Conditions</h2>

        <div
          class="{display:flex} {flex-direction:column} {gap:1rem} {margin-top:1rem}"
        >
          <p v-for="item in termsAndConditions">
            {{ item }}
          </p>
        </div>
      </section>
    </div>
  </Wrapper>
</template>
