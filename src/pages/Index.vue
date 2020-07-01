<template>
  <q-page class="q-pa-xl">
      <h1>Welcome to the test page</h1>
      <p>Here I will add a bunch of components and see how they work and if I can style them to what I want/need.</p>
      <h2>Then what?</h2>
      <p>Not sure</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr/>
      <div class="text-overline">Let's try:</div>
      <h4>Typography</h4>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p class="text-body1">Paragraph of body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="text-body2">Paragraph of body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr/>
      <div class="q-py-md q-gutter-sm">
        <q-btn color="blue-grey-1" icon="fal fa-duck" text-color="black" label="Standard" />
        <q-btn color="primary" icon="fal fa-print" label="Primary" />
        <q-btn color="secondary" icon="fas fa-adjust" label="Secondary" />
        <q-btn color="blue-grey-8" icon="fal fa-unicorn" outline glossy label="Grey" />
        <q-btn color="positive" icon="fal fa-thumbs-up" flat label="Good" />
        <q-btn color="negative" icon="fal fa-trash-alt"  label="Delete" />
        <q-btn color="dark" label="Black" />
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
