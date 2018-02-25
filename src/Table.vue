<template>
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
              <tr v-for="tarea in tareas">
                <td><input type="checkbox"></td>
                <td class="">{{tarea.titulo}}</td>
                <td><button class="btn btn-danger ">Eliminar</button></td>
              </tr>
            </tbody>
           </table>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  name: 'vueTable',
  data () {
    return {
      tareas:[
      {
        titulo: 'tareas',
        hecho: false
      },
      {
        titulo: 'tareas 2',
        hecho: false
      },
      {
        titulo: 'tareas 3',
        hecho: false
      },
      ]
    }
  },methods:{

  }
}
</script>

