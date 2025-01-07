<script setup>
import { ButtonLink, Share, Wrapper } from "#components";
const DynamicSrOnly = resolveComponent("DynamicSrOnly");
import title from "#shared/title";
const runtimeConfig = useRuntimeConfig();

const faqItems = [
  {
    question: "When will I be notified?",
    answer:
      "By January 11, 2025, when you will be emailed instructions and location for the event.",
  },
  {
    question: "My attendance was not confirmed. Can I still go?",
    answer: "Due to limited space, this event is invite only.",
  },
  {
    question: "What technologies am I allowed to use?",
    answer: "Anything that helps you code faster.",
  },
  {
    question: "I’m not from the SF/Bay Area. Can I participate?",
    answer: "Yes, as long as you’re able to attend in person.",
  },
  {
    question: "How will submissions be judged?",
    answer:
      "Judges will review submissions for real-world novel application as well as how highly leveraged gen AI tooling was used. Vibes will also matter.",
  },
  {
    question: "Will food and drink be available at the event?",
    answer: "Yes.",
  },
  {
    question: "Can you ship me my prize?",
    answer: "No.",
  },
];

const termsAndConditions = [
  "You must be a confirmed attendee of the event.",
  "Only individuals or teams of two can compete in the event.",
  "You must complete the registration form to be entered into the sweepstakes.",
  "You must be 21 years or older to participate.",
];
</script>

<template>
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
          6 weeks ago, we attempted an experiment to use AI and throw the
          “Worlds Shortest Hackathon.” The experiment worked. In just 2 hours,
          we were floored with what hackers were able to accomplish, including
          everything from giving code editors automated computer-wide context to
          finding a severe vulnerability in a major publication.
        </p>

        <p>We’re running the experiment back.</p>

        <p>
          NVIDIA and Vercel are teaming up again for another fast-paced
          hackathon to see what you can accomplish with AI. Practice your
          prompting and come let it rip…. Or come cook, as Guillermo would say
        </p>
      </section>

      <section class="{font-weight:300} {font-size:1.5rem}">
        <DynamicSrOnly is="h2">Quick facts</DynamicSrOnly>

        <dl class="{display:flex} {flex-direction:column} {gap:1rem}">
          <div>
            <dt class="{display:inline} {font-weight:600}">Date:</dt>
            <dd class="{display:inline}">January 16, 5:00 p.m. PT</dd>
          </div>

          <div>
            <dt class="{display:inline} {font-weight:600}">Location:</dt>
            <dd class="{display:inline}">
              San Francisco (Exact location shared to confirmed attendees)
            </dd>
          </div>

          <div>
            <dt class="{display:inline} {font-weight:600}">Prize:</dt>
            <dd class="{display:inline}">
              Winning team (of 1 or 2) will receive a GeForce RTX 4080 signed by
              Jensen Huang + more prizes to come
            </dd>
          </div>
        </dl>

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
      </section>

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
