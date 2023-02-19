import Router from "./Router";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/meanmenu.min.css";


function App() {

    
  if (!localStorage.getItem('Database')){
 
    const database =  [{id: 1, nombre: 'Editor del Sitio', logo:'gear', enlace:'/', contenido:{logo:'https://res.cloudinary.com/dfxwg2qk7/image/upload/v1676267925/ImagesRestaurant/cpphdnmktzabevrrm1yg.png',titulo:'100% Pura Carne', cabecera:'CARNE DE LA MEJOR CALIDAD', portada :'https://res.cloudinary.com/dfxwg2qk7/image/upload/q_20/v1676289008/ImagesRestaurant/fwcbdrgxurl0whst4orl.jpg',acercade:'Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',contacto:{Nombre:'El Rico Agucho',telefono:'922 692 354',pais:'Perú',ciudad:'El Agustino',calleNum:' Pjs cahuide N300',correo:'jinfanzonquispe30@gmail.com', redes:{facebook:'',tweeter:'',instagram:''}} }},
                        {id: 2, nombre: 'Menu', logo:'journal', enlace:'/Menu/', categoria : [{id: 'cat1', nombre:'Principales', enlace:'/Menu/Principales', contenido:[
                                                                                                                                                {id:'prin1',nombre:'Hamburguesa simple',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:true,oferta:true,precio:15},
                                                                                                                                                {id:'prin2',nombre:'Hamburguesa con queso',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:true,oferta:true,precio:18},
                                                                                                                                                {id:'prin3',nombre:'Hamburguesa Doble',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:true,oferta:true,precio:22},
                                                                                                                                                {id:'prin4',nombre:'Hamburguesa Parrillera',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:false,oferta:false,precio:22},
                                                                                                                                                {id:'prin5',nombre:'Pechuga de pollo',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:false,oferta:false,precio:20},
                                                                                                                                                {id:'prin6',nombre:'Milanesa con queso',imagen:'https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?w=200',tamaño:'grande',recomendado:false,oferta:false,precio:18},]},
                                                                        {id: 'cat2', nombre:'Bebidas', enlace:'/Menu/Bebidas',contenido :[
                                                                                                                                                {id:'beb1',nombre:'Chicha morada',imagen :'https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :10},
                                                                                                                                                {id:'beb2',nombre:'Maracuyá',imagen :'https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :10},
                                                                                                                                                {id:'beb3',nombre:'Coca Cola de Piña',imagen :'https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :10},
                                                                                                                                                {id:'beb4',nombre:'Inka Cola',imagen :'https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :10},
                                                                                                                                                {id:'beb5',nombre:'Limonada Frozen',imagen :'https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :10},]},
                                                                        {id: 'cat3', nombre:'Complementos', enlace:'/Menu/Complementos',contenido : [
                                                                                                                                                {id:'com1',nombre:'tequeños',imagen :'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2018/12/30092825/RFB-0000-30-tequen%CC%83os.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :15},
                                                                                                                                                {id:'com2',nombre:'Alias clásicas',imagen :'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2018/12/30092825/RFB-0000-30-tequen%CC%83os.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :15},
                                                                                                                                                {id:'com3',nombre:'Alitas crunch',imagen :'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2018/12/30092825/RFB-0000-30-tequen%CC%83os.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :15},
                                                                                                                                                {id:'com4',nombre:'Twister',imagen :'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2018/12/30092825/RFB-0000-30-tequen%CC%83os.jpg',tamaño:'grande',recomendado : false, oferta:false,precio :15},]} 
                                                                          ]},
  {id: 3, nombre: 'Ofertas', logo:'calendar-date', enlace:'/Ofertas'},
  {id: 4, nombre: 'Horarios', logo:'alarm', enlace:'/Horarios',contenido:{lunes:true,martes: true , miercoles : true,jueves : true, viernes : true ,sabado : true, domingo:true, horaini:'10',horafin:'20'}},
  {id: 5, nombre: 'Reportes', logo:'pencil', enlace:'/Reportes/',categoria: [{id: 'cat1', nombre: 'Pedidos Delivery', enlace:'/Reportes/Pedidos-delivery'},
                                                                              {id: 'cat2', nombre: 'Pedidos Local', enlace:'/Reportes/Pedidos-local'},
                                                                              {id: 'cat3', nombre: 'Ventas', enlace:'/Reportes/Ventas'},
                                                                              {id: 'cat4', nombre: 'Lo mas vendido', enlace:'/Reportes/Lo-Mas-Vendido'}
                                                                            ]},
  
  {id: 6, nombre: 'Delivery', logo:'truck', enlace:'/Delivery'},
  {id: 7, nombre: 'Pedidos', logo:'binoculars', enlace:'/Pedidos'}
]
    const Database = JSON.stringify(database);
    localStorage.setItem('Database',Database);
  }
   

  return (
    <div className='App'>
        <Router />
    </div>
  )
}

export default App;
