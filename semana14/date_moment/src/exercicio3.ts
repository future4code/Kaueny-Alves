import * as moment from 'moment';

moment.locale('pt-br');

/*const date1: moment.Moment = moment('20/10/2019', 'DD/MM/YYYY');
const date2: moment.Moment = moment('10/10/2010', 'DD/MM/YYYY');
const date3: moment.Moment = moment('31/12/2019', 'DD/MM/YYYY');
const date4: moment.Moment = moment('01/01/2019', 'DD/MM/YYYY');
const date5: moment.Moment = moment('19/08/2011', 'DD/MM/YYYY');
const date6: moment.Moment = moment('10/11/1995', 'DD/MM/YYYY');


function getInformation(firstDate: moment.Moment, secondDate: moment.Moment, unitOfTime: moment.unitOfTime.Diff ): void {
console.log('Difrença: ', firstDate.diff(secondDate, unitOfTime))
console.log('O dia da semana da primeira data é: ', firstDate.format('dddd'));
console.log('O dia da semana da segunda data é: ', secondDate.format('dddd'));
}

getInformation(date1, date2, 'years');
getInformation(date3, date4, 'hours');
getInformation(date5, date6, 'years');*/

//Nome: Festa de aniversário
//Horário de início: Segunda-feira, 25 de Junho de 2020, 12:00
//Horário de fim: 25 de Junho de 2020, 18:30
//Descrição: Festa super animada! Sua presença já é um presente.
//Duração: 390 minutos
//Dias até o evento: 1


moment.locale("pt")

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
			Nome: ${item.name}
			Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.description}
			Duração: ${duration} minutos
			Dias até o evento: ${daysUntilEvent}
		`);
  });
};
