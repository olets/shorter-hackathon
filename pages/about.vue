<script setup>
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
  <h1>NVIDIA X Vercel Hackathon</h1>

  <section>
    <p>
      6 weeks ago, we attempted an experiment to use AI and throw the “Worlds
      Shortest Hackathon.” The experiment worked. In just 2 hours, we were
      floored with what hackers were able to accomplish, including everything
      from giving code editors automated computer-wide context to finding a
      severe vulnerability in a major publication.
    </p>

    <p>We’re running the experiment back.</p>

    <p>
      NVIDIA and Vercel are teaming up again for another fast-paced hackathon to
      see what you can accomplish with AI. Practice your prompting and come let
      it rip…. Or come cook, as Guillermo would say
    </p>

    <dl>
      <dt></dt>
      <dt>Date</dt>
      :
      <dd>January 16, 5:00 p.m. PT</dd>
      <dt>Location</dt>
      :
      <dd>San Francisco (Exact location shared to confirmed attendees)</dd>
      <dt>Prize</dt>
      :
      <dd>
        Winning team (of 1 or 2) will receive a GeForce RTX 4080 signed by
        Jensen Huang + more prizes to come
      </dd>
    </dl>

    <a href="#">Register Now</a>
  </section>
  <section>
    <h2>FAQ</h2>

    <div v-for="item in faqItems">
      <p>
        <em>{{ item.question }}</em>

        {{ item.answer }}
      </p>
    </div>
  </section>

  <section>
    <h2>Terms and Conditions</h2>

    <p v-for="item in termsAndConditions">
      {{ item }}
    </p>
  </section>
</template>
