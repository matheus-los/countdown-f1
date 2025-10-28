import mexImage from './components/GpInfo/Mexican-Grand-Prix-1.png';
import brImage from './components/GpInfo/interlagos.jpg';
import euaImage from './components/GpInfo/lasvegas-gp.jpg';

export const RACE_DATA = [
    {
        id: 'mex',
        name: 'GP do México',
        raceDate: '2025-10-26T17:00:00',
        info: {
            title: 'Sobre o Grand Prix do México',
            image: mexImage,
            text: 'O GP do México é a etapa de maior altitude no calendário atual da Fórmula 1, localizado a 2.240 metros acima do nível do mar. Essa altitude tem um impacto significativo no desempenho dos carros, afetando tanto a aerodinâmica como a mecânica, e até mesmo o desempenho dos pilotos.',
        },
        schedule: {
            isSprintWeekend: false,
            sessions: [
                {name: 'TL1', datetime: '24/10 - 15:30'},
                {name: 'TL2', datetime: '24/10 - 19:00'},
                {name: 'TL3', datetime: '25/10 - 14:30'},
                {name: 'Qualifying', datetime: '25/10 - 18:00'},
                {name: 'Corrida', datetime: '26/10 - 17:00'},
            ]
        }
    },
    
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
        name: 'GP de Los Angeles',
        raceDate: '2025-11-23T01:00:00',
        info: {
            title: 'Sobre o Grand Prix de Las Vegas',
            image: euaImage,
            text: '',
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
]