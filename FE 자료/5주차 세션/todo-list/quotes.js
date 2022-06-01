const quotes = [
    {
        quote: "고난의 시기에 동요하지 않는 것,<br/> 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤"
    },

    {
        quote: "인생에는 서두르는 것 말고도 더 많은 것들이 있다.",
        author: "마하트마 간디"
    },

    {
        quote: "나만이 내 인생을 바꿀 수 있다.<br/> 아무도 날 대신해 해줄 수 없다.",
        author: "캐롤 버넷"
    },

    {
        quote: "긴 인생은 충분히 좋지 않을 수 있다.<br/> 그러나 좋은 인생은 충분히 길다.",
        author: "벤자민 프랭클린"
    },

    {
        quote: "인생이란 네가 다른 계획을 세우느라 바쁠 때,<br/> 너에게 일어나는 것이다.",
        author: "존 레논"
    },

    {
        quote: "인생은 자전거를 타는 것과 같다.<br/> 균형을 잡으려면 움직여야 하기 때문이다.",
        author: "알버트 아인슈타인"
    },

    {
        quote: "바람이 불지 않을 때 바람개비를 돌리는 방법.<br/> '내가 앞으로 달려 나가는 것'",
        author: "데일 카네기"
    },

    {
        quote: "인생은 자전거를 타는 것과 같다.<br/> 계속 페달을 밟는 한 넘어질 염려는 없다.",
        author: "클라우드 페퍼"
    },

    {
        quote: "히루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
        author: "사무엘 존슨"
    },

    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스 다윈"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;