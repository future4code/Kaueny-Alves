/*const quedaConstantinopla: Date = new Date('1452-05-29');
console.log('Queda de Constantinopla', quedaConstantinopla.getTime());
const revolucaoFrancesa: Date = new Date(1789, 6, 14);
console.log('Revolução France', revolucaoFrancesa.getTime());
const proclamacaoRepublica: Date = new Date('1889-11-15');
console.log('Proclamação da República', proclamacaoRepublica.getTime());
const niverGolindo: Date = new Date(1996, 7, 15);
console.log('Niver Golindo', niverGolindo.getTime());*/


type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
	{
		name: "",
		description: "",
		startAt: moment("/ /  00:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("/ /  00:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "",
		description: "",
		startAt: moment("/ /  00:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("/ /  00:00", "DD/MM/YYYY HH:mm")
	}
]