<script setup lang="ts">
import { ColorScheme } from "#components";
</script>

<template>
  <header
    class="{display:flex} {align-items:center} @media(min-width:48rem){align-items:start} @media(min-width:48rem){flex-direction:column} {gap:0.5rem} {background-color:color-mix(in_srgb,var(--color-background)_90%,transparent)} {border:1px_solid_currentColor} {padding:0.5rem} {position:fixed} {bottom:1.5rem} @media(min-width:48rem){bottom:auto} @media(min-width:48rem){top:1.5rem} {right:1.5rem} {backdrop-filter:blur(1px)}"
  >
    <nav class="{display:flex} {gap:inherit}">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>

    <ColorScheme />
  </header>
</template>
