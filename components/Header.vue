<script setup lang="ts">
import { ColorScheme } from "#components";
</script>

<template>
  <header
    class="{display:flex} {gap:0.5rem} {background:var(--color-background)} {border:1px_solid_currentColor} {padding:0.5rem} {position:fixed} {bottom:1.5rem} @media(min-width:48rem){bottom:auto} @media(min-width:48rem){top:1.5rem} {right:1.5rem} {align-items:end} @media(min-width:48rem){flex-direction:column}"
  >
    <nav class="{display:inherit} {gap:inherit} {flex-direction:inherit}">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>

    <ColorScheme />
  </header>
</template>
