const netflix = document.getElementById('netflix');
const amazon = document.getElementById('amazon');
const disney = document.getElementById('disneyplus');
const hbomax = document.getElementById('hbomax');


const CNetflix = document.getElementById('CNetflix');
const CAmazon = document.getElementById('CAmazon');
const CDisney = document.getElementById('CDisney');
const CHBO = document.getElementById('CHBO')


const servicios = [netflix,amazon,disney,hbomax]
servicios.forEach((serv) => {
	serv.addEventListener('change', () => {
		if(serv === netflix){
			CNetflix.classList.toggle('hidden')
		}else if(serv === amazon){
			CAmazon.classList.toggle('hidden')
		} else if(serv === disney){
			CDisney.classList.toggle('hidden')
		} else if(serv === hbomax){
			CHBO.classList.toggle('hidden')
		}
	})
})


const calcularTickets = (peliculas) => {
	const PRECIO_TICKETS = 5.39
	return (PRECIO_TICKETS * peliculas).toFixed(2)
}

const calcularServicios = () => {
	const pDisney = Number(document.getElementById('planDisney').value)
	const pAmazon = Number(document.getElementById('planAmazon').value)
	const pHBO = Number(document.getElementById('planHBO').value)
	const pNetflix = Number(document.getElementById('planNetflix').value)
	const priceService = [pDisney, pAmazon, pNetflix,pHBO]
	return priceService.reduce((p,acc)=> p + acc).toFixed(2)
}


const calcularCostos = () => {
	let CantidadPeliculas = Number(document.getElementById('peliculas').value)
	let precioTickets = Number(calcularTickets(CantidadPeliculas))
	let precioServicios = Number(calcularServicios())
	const resultStream = document.getElementById('resultStream')
	const resultCine = document.getElementById('resultCine')
	const finalResult = document.getElementById('finalResult')
	resultStream.innerText = ''
	resultCine.innerText = ''
	finalResult.innerText = ''

	console.log(precioTickets)
	console.log(precioServicios)
	
	resultStream.innerText = `$${precioServicios}`
	resultCine.innerText = `$${precioTickets}`

	if (precioTickets > precioServicios) {
		console.log('te conviene usar streaming')
		finalResult.innerText = `Te conviene usar los servicios de streaming`
		
	}else if(precioTickets < precioServicios) {
		
		console.log('te conviene ir al cine')
		finalResult.innerText = `Te conviene ir al cine`
		
	}else {	
		console.log('que??')
	}
}
