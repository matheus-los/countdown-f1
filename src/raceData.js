import brImage from './components/GpInfo/interlagos.jpg';
import euaImage from './components/GpInfo/lasvegas-gp.jpg';
import qatarImage from './components/GpInfo/lusail.jpg';
import abuImage from './components/GpInfo/yas-marina.jpg';

export const RACE_DATA = [
    {
        id: 'bra',
        name: 'GP do Brasil',
        raceDate: '2025-11-09T14:00:00',
        info: {
            title: 'Sobre o Grand Prix do Brasil',
            image: brImage,
            text: 'Na cidade de São Paulo, encontra-se o Autódromo José Carlos Pace, popularmente chamado de Autódromo de Interlagos por sua proximidade ao bairro paulistano. O circuito foi inaugurado em 1940 e sediou o Grande Prêmio do Brasil de Fórmula 1 de 1972 a 1977, 1979 a 1980 e de 1990 a 2019 e, desde 2021, sedia o Grande Prêmio de São Paulo',
        },
        schedule: {
            isSprintWeekend: true,
            sessions: [
                {name: 'TL1', datetime: '07/11 - 11:30'},
                {name: 'Sprint Shootout', datetime: '07/11 - 15:30'},
                {name: 'Corrida Sprint', datetime: '08/11 - 11:00'},
                {name: 'Qualifying', datetime: '08/11 - 15:00'},
                {name: 'Corrida', datetime: '09/11 - 14:00'},
            ]
        }
    },

    {
        id: 'eua',
        name: 'GP de Las Vegas',
        raceDate: '2025-11-23T01:00:00',
        info: {
            title: 'Sobre o Grand Prix de Las Vegas',
            image: euaImage,
            text: 'O GP de Las Vegas se destaca pela pista de 6,12 km que percorre a famosa Las Vegas Strip, a corrida noturna que aproveita as luzes da cidade, e o grande espetáculo que envolve shows e festas.',
        },
        schedule: {
            isSprintWeekend: false,
            sessions: [
                {name: 'TL1', datetime: '20/11 - 21:30'},
                {name: 'TL2', datetime: '21/11 - 01:00'},
                {name: 'TL3', datetime: '21/11 - 21:30'},
                {name: 'Qualifying', datetime: '22/11 - 01:00'},
                {name: 'Corrida', datetime: '23/11 - 01:00'},
            ]
        }
    },

    {
        id: 'qta',
        name: 'GP do Qatar',
        raceDate: '2025-11-30T13:00:00',
        info: {
            title: 'Sobre o Grand Prix do Qatar',
            image: qatarImage,
            text: 'O GP do Catar é conhecido por ser uma pista tecnicamente desafiadora, projetada originalmente para a MotoGP, o que a torna mais estreita que outras pistas modernas de F1. O Circuito Internacional de Lusail, que fica perto de Doha, também apresenta uma reta principal longa que favorece ultrapassagens e é famoso pela gestão de pneus devido ao asfalto abrasivo, exigindo estratégia dos pilotos. Além disso, o GP foi introduzido na F1 em 2021 e o país assinou um acordo de longo prazo para sediar o evento a partir de 2023.',
        },
        schedule: {
            isSprintWeekend: true,
            sessions: [
                {name: 'TL1', datetime: '28/11 - 10:30'},
                {name: 'Sprint Shootout', datetime: '28/11 - 14:30'},
                {name: 'Corrida Sprint', datetime: '29/11 - 11:00'},
                {name: 'Qualifying', datetime: '29/11 - 15:00'},
                {name: 'Corrida', datetime: '30/11 - 13:00'},
            ]
        }
    },

    {
        id: 'abu',
        name: 'GP de Abu Dhabi',
        raceDate: '2025-12-07T10:00:00',
        info: {
            title: 'Sobre o Grand Prix de Abu Dhabi',
            image: abuImage,
            text: 'O GP de Abu Dhabi é famoso por seu circuito moderno no Yas Marina, que possui um design único com um túnel no pit lane e o Hotel Yas, além de ser a única corrida atual nomeada apenas pela cidade. A corrida de 2009 foi a primeira da F1 a começar de dia e terminar à noite, e a corrida de 2021 é lembrada pela polêmica decisão que decidiu o campeonato de forma dramática. ',
        },
        schedule: {
            isSprintWeekend: false,
            sessions: [
                {name: 'TL1', datetime: '05/12 - 06:30'},
                {name: 'TL2', datetime: '05/12 - 10:00'},
                {name: 'TL3', datetime: '06/12 - 07:30'},
                {name: 'Qualifying', datetime: '06/12 - 11:00'},
                {name: 'Corrida', datetime: '07/12 - 10:00'},
            ]
        }
    },
]