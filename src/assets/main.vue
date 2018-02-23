new Vue({
	el:'#taskApp',
	data:{
	 nameApp: 'GrabiTask',
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
},methods:{
	eliminarTarea:function(tarea){
	this.tareas.splice(this.tareas.indexOf(tarea),1),
	swal("¡Felicidades terminaste la tarea!", "¡Recuerda tomar un descanso!", "success");
},
	agregarTarea: function(){
	this.tareas.push({
	titulo:this.tareas.titulo,
	hecho: false,

})
	swal({
	  title: "Creaste la tarea: " + this.tareas.titulo,
	  text: "¡Vamos con todo, creemos en ti!",
	})
	this.tareas.titulo = ' '
}
}
})
