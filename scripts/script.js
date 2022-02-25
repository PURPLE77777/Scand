import levelsData from "../dataset.js";

class Levels {
    constructor(level) {
        this.title = level.title;
        this.requirements = level.requirements;
        this.turnover = level.turnover;
        this.currency = level.currency;

        //level-header
        let header = document.createElement("div");
        header.classList.add("level-header");

        let star = document.createElement("span");
        this.requirements.every((requirement) => {
            return requirement.status;
        })
            ? star.classList.add("star", "star-completed")
            : star.classList.add("star");
        star.classList.add("star");
        star.innerHTML = "&#9734;";

        let levelHeader = document.createElement("p");
        levelHeader.classList.add("level-header_p");
        levelHeader.innerHTML = this.title;

        header.append(star, levelHeader);

        //requirements
        let require = document.createElement("div");
        require.classList.add("require");

        let h3 = document.createElement("h3");
        h3.classList.add("require-title");
        h3.innerHTML = "Requirements";

        let ul = document.createElement("ul");
        ul.classList.add("require-list");

        this.requirements.forEach((requirement) => {
            let li = document.createElement("li");
            li.classList.add("require-item");

            let p = document.createElement("p");
            p.classList.add("require-text");
            p.innerHTML = requirement.name;

            let img = document.createElement("img");
            img.classList.add("require-status");
            img.src = this.requirements.every((requirement) => {
                return requirement.status;
            })
                ? "../img/completed-ful.svg"
                : requirement.status
                ? "../img/completed.svg"
                : "../img/checking.svg";
            li.append(p, img);
            ul.append(li);
        });

        require.append(h3, ul);

        //turnover
        let turnover = document.createElement("div");
        turnover.classList.add("turnover");

        let sum = document.createElement("span");
        sum.classList.add("sum");
        sum.innerHTML = `${this.turnover} ${this.currency}`;

        let p = document.createElement("p");
        p.innerHTML = "Annual turnover - up to ";
        p.append(sum);

        turnover.append(p);

        //create a level card
        let levelCard = document.createElement("div");
        this.requirements.every((requirement) => {
            return requirement.status;
        })
            ? levelCard.classList.add("level", "completed")
            : levelCard.classList.add("level");
        levelCard.append(header, require, turnover);
        this.levelCard = levelCard;

        let containerLevels = document.getElementsByClassName("levels")[0];
        containerLevels.append(levelCard);
    }
}

let levels = levelsData.levels;

let levelList = [];
levels.forEach((item) => {
    let level = new Levels(item);
    levelList.push(level);
});
