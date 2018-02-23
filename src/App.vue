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
     <div class="container mt-5">
      <form class="mb-5">
        <input class="mr-5 text-center" type="text" placeholder="Escribe Tú Tarea">
      <input type="submit" value="Añadir tarea" class="btn btn-success">
       </form>
          <div class="row">
            <div class="col">
             <table class="table">
            <thead class="table-bordered">
              <tr>
                <th>¡Hecho!</th>
                <th>Tarea</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody class="">
              <tr>
                <td><input type="checkbox"></td>
                <td class="">Primer tarea</td>
                <td><button class="btn btn-danger ">Eliminar</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td class="">segunda tarea</td>
                <td><button class="btn btn-danger ">Eliminar</button></td>
              </tr>
              <tr>
                  <td><input type="checkbox"></td>
                  <td class="">tercera tarea</td>
                  <td><button class="btn btn-danger ">Eliminar</button></td>
              </tr>
            </tbody>
           </table>
            </div>
          </div>
        </div>
    <!--Fin de las tablas-->
    <!--Footer-->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col mt-5">
            <p>Todos los derechos reservados &reg; Northerchild-2018</p>
          </div>
        </div>
      </div>
    </footer>
     <!--Fin Footer-->
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
th,td,p{
  color: #fff;
}
</style>
