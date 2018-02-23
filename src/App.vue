<template>
  <div id="app">
  <header class="header">
  <div id="particles-js"></div>
    <div class="container">
      <nav class="text-center">
        <h1 v-text="nameApp"></h1>
      </nav>
    </div>
  </header>

   <!--Estructura de las tablas-->   
     <div class="container mt-4">
      <form class="mb-3">
        <input class="mr-4" type="text" placeholder="Escribe Tú Tarea">
      <input type="submit" value="Añadir tarea" class="btn btn-success">
       </form>
          <div class="row">
            <div class="col">
             <table class="table">
            <thead>
              <tr>
                <th>¡Hecho!</th>
                <th>Tarea</th>
                <th>Borrar</th>
              </tr>
            </thead>
           </table>
            </div>
          </div>
        </div>
    <!--Fin de las tablas-->
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      nameApp: 'Norther-Task'
    }
  }
}
</script>

<style lang="scss">
body{
    background: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
th{
  color: #fff;
}
</style>
