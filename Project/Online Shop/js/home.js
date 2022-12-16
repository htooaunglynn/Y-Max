const services = [
    {
        img: "../image/skate-board.png",
        h2: "SKATE FOR BEGINNER",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
    {
        img: "../image/skateboard1.png",
        h2: "PERSONAL TRAINING",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
    {
        img: "../image/skateboard.png",
        h2: "BEST SKATER",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
    {
        img: "../image/ice-skates.png",
        h2: "ADVANCE SKATER",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
    {
        img: "../image/skateboard2.png",
        h2: "NOVICE TO PRO SKATER",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
    {
        img: "../image/skater1.png",
        h2: "SKATE BOARDING",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
    },
];

for (let i = 0; i < services.length; i++) {
    document.getElementById("service_box").innerHTML += `
        <div class="ser_item">
            <div class="ser_cont">
                <img src="${services[i].img}" alt="stake">
                <h2>${services[i].h2}</h2>
                <p>${services[i].p}</p>
            </div>
        </div>
    `;
}
