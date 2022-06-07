// async & await

// 1. async
// async function fetchUser() {
//     return 'front';
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// 2. await
function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getHappy() {
    await delay(3000);
    return '🥰🤣😊😆';
}

async function getMeat() {
    await delay(1000);
    return '🥩🍗🍖';
}

// function happyCollector() {
//     return getHappy()
//     .then (happy => {
//         return getMeat()
//         .then(meat => `${happy} + ${meat}`);
//     });
// }

async function happyCollector() {
    const happyPromise = getHappy();
    const meatPromise = getMeat();
    const happy = await happyPromise;
    const meat = await meatPromise;
    return `${happy} + ${meat}`;
}

// happyCollector().then(console.log);

// 3. Useful Promise APIs
// function happyMeatCollector() {
//     return Promise.all([getHappy(), getMeat()])
//     .then(item => item.join(' + '));
// }

// happyMeatCollector().then(console.log);

function onlyHappy() {
    return Promise.race([getHappy(), getMeat()]);
}

onlyHappy().then(console.log);