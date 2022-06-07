interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const koreanObj :IKorean = {
    name: '유지민',
    city: 'incheon',
}

