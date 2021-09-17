<template>
  <div class="container pt-7">
    <form class="form" action="#">
      <div class="input-wrapper">
        <label for="avatar" required>Choose a profile picture:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg, image/gif,.pdf" />
      </div>
      <div class="input-wrapper">
        <label for="title" required>Title</label>
        <input placeholder="Enter Title" type="text" />
      </div>
      <div class="input-wrapper">
        <label for="caption" required> Caption</label>
        <input placeholder="Enter Caption" type="text" />
      </div>
      <div class="flex">
        <input type="submit" class="button button--grey button--form " value="Cancel"/>
        <input type="submit" class="button button--yellow button--form " value="Save"/>
      </div>
    </form>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
</style>
