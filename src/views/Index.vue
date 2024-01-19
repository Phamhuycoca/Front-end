<template>
  <div class="container">
    <h1 class="title">Inside Open Art</h1>
    <div class="parent">
      <div class="child">
        <i class="fa-solid fa-border-all child-icon"></i>
        <p>4pt grid system</p>
        <p>Base on 4pt grid system. Our UI kit help you create
          perfect white space</p>
      </div>
      <div class="child">
        <i class="fa-solid fa-eye-dropper child-icon"></i>
        <p>Color style</p>
        <p>All color in OpenArt are styled. You can change all
          design color with one click</p>
      </div>
      <div class="child">
        <i class="fa-solid fa-font child-icon"></i>
        <p>4pt grid system</p>
        <p>Base on 4pt grid system. Our UI kit help you create
          perfect white space</p>
      </div>
      <div class="child">
        <i class="fa-solid fa-toggle-on child-icon"></i>
        <p>4pt grid system</p>
        <p>Base on 4pt grid system. Our UI kit help you create
          perfect white space</p>
      </div>
      <div class="child">
        <i class="fa-solid fa-pen-ruler child-icon"></i>
        <p>4pt grid system</p>
        <p>Base on 4pt grid system. Our UI kit help you create
          perfect white space</p>
      </div>
      <div class="child">
        <i class="fa-solid fa-bars child-icon"></i>
        <p>4pt grid system</p>
        <p>Base on 4pt grid system. Our UI kit help you create
          perfect white space</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/Image.png');
  width: 100%;
  height: 100vh;
}

.title {
  margin-bottom: 100px;
  font-size: 4rem;
  text-align: center;
}

.parent {
  margin: 0px 40px 0 40px;
  display: flex;
  justify-content: center;
  align-content: stretch;
  flex-wrap: wrap;
}

.child {
  width: 493px;
  margin: 10px;
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 16px;
}

.child p:last-child {
  opacity: 0.8;
}

.child-icon {
  font-size: 30px;
  margin: 30px 0 20px 30px;
}

p {
  font-size: 20px;
  margin: 0px 0px 10px 30px;
  font-weight: 300;
}
</style>