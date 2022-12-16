const play = (_) => {
    window.document.getElementById("video").play();
};

const teams = [
    {
        img: "../image/ali-pazani.jpg",
        h1: "JEAN SMITH",
        p: "SKATEBOARD TRAINER",
    },
    {
        img: "../image/min-an.jpg",
        h1: "BOB CARRY",
        p: "SKATEBOARD TRAINER",
    },
    {
        img: "../image/mahdi.jpg",
        h1: "RICKY FISHER",
        p: "SKATEBOARD TRAINER",
    },
];

teams.forEach((i) => {
    document.getElementById("team_group").innerHTML += `
    <div>
        <section>
            <img src="${i.img}" alt="profile1">
            <h1>${i.h1}</h1>
            <p>${i.p}</p>
        </section>
    </div>
    `;
});
