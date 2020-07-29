import * as moment from 'moment';

/*moment.locale('pt-br');

const date: moment.Moment = moment('28/07/2019 15:30', 'DD/MM/YYYY HH:mm');
console.log('Formato inicial: ', date.format('DD/MM/YYYY [às] HH:mm'));
console.log('Timestamp: ', date.unix());
console.log('Formato inicial: ', date.format("MM/DD/YYYY hh:mm a"));
console.log('Formato inicial: ', date.format('DD/MM/YYYY [é] dddd'));*/

//Nome: Festa de aniversário
//Horário de início: Segunda-feira, 25 de Junho de 2020, 12:00
//Horário de fim: 25 de Junho de 2020, 18:30
//Descrição: Festa super animada! Sua presença já é um presente.

moment.locale("pt-br")

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
		`);
  });
};