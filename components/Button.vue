<script>
const Box = resolveComponent("Box");
</script>

<template>
  <Box
    tag="a"
    class="{align-self:start} {border:1px_solid_currentColor} {padding:.8rem_1.5rem} {--width-fancy-corners:10px} {font-family:monospace} {text-transform:uppercase} {font-weight:700} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)} {transition:background-color_400ms}"
    ><slot></slot
  ></Box>
</template>
