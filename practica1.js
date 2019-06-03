const fs = require('fs');
const express = require('express')
const app = express()

let curso = [
	{
		id : 1,
		nom :'Node js',
		dur : 32,
		val : 0
	},
	{
		id:2,
		nom:'matematicas',
		dur : 100,
		val : 35
	},
	{
		id:3,
		nom:'ingles',
		dur : 24,
		val : 50
	},
	{
		id:4,
		nom:'arte',
		dur: 23,
		val: 68
	}
];

const ins ={
	id:{
		demand : true,
		alias :'i'
	},
	nombre:{
		demand :true,
		alias : 'n'
	},
	cedula:{
		demand : true,
		alias : 'x'
	}

}
const argv = require('yargs')
  .command('inscribir','realizar inscripcion',ins)
  .argv


let estudianteNota =()=> curso.find(function(notaEst ) {
	return (notaEst.id === argv.i);
})

let est=()=> {
	    d = estudianteNota();
        if  (d!=undefined){
           	texto ='el estudiante '+argv.n+' con Cedula '+argv.x+'\n'+
           	       'Se ha matriculado en el curso llamado curso '+d.nom+'\n'+
           	       'tiene una duracion de '+d.dur+' y un valor de '+d.val; 
        }else{
        	console.log('ha ingresado un ID que no corresponde a ningun curso');
        	mostar();
        }
    }

let mostar=()=>{
let cursos1=(id,nom,dur,val)=>{
	setTimeout(function(){
	let resultado=('el y id es '+id+' el curso se llama '+nom+' tiene un duracion de '+dur+' horas '+' y un valor de '+val+' pesos');
	console.log(resultado);
},2000);
}
cursos1(curso[0].id,curso[0].nom,curso[0].dur,curso[0].val);
let cursos2=(id,nom,dur,val)=>{
	setTimeout(function(){
	let res=('el y id es '+id+' el curso se llama '+nom+' tiene un duracion de '+dur+' horas '+' y un valor de '+val+' pesos');
	console.log(res);
},4000);
}
cursos2(curso[1].id,curso[1].nom,curso[1].dur,curso[1].val);

let cursos3=(id,nom,dur,val)=>{
	setTimeout(function(){
	let resu=('el y id es '+id+' el curso se llama '+nom+' tiene un duracion de '+dur+' horas '+' y un valor de '+val+' pesos');
	console.log (resu);
},6000);
}
cursos3(curso[2].id,curso[2].nom,curso[2].dur,curso[2].val);
let cursos4=(id,nom,dur,val)=>{
	setTimeout(function(){
	let resul=('el y id es '+id+' el curso se llama '+nom+' tiene un duracion de '+dur+' horas '+' y un valor de '+val+' pesos');
	console.log (resul);
},8000);
}

cursos4(curso[3].id,curso[3].nom,curso[3].dur,curso[3].val);
}

//llamamos al archivo .practica.js
if(argv._ == "inscribir"){
    est();
}else{
	mostar();
}

app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)

//para verificar que que esta imprimiendo la iscripcion del estudinte en algun curso escribimos en el navegadot

//http://localhost:3000/