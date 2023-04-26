let clashCards = document.getElementsByClassName('clash-card__unit-stats');
clashCards = [...clashCards];
let text = document.getElementsByClassName("one-third");
text = [...text];
text.forEach(text => {
    text.style.color = "#ffffff";
})
clashCards.forEach(card => {
    let cardClasses = Array.from(card.classList)
    if (cardClasses.includes("clash-card__unit-stats--barbarian")) {
        card.style.backgroundColor = "#ec9b3b";
    } else if (cardClasses.includes("clash-card__unit-stats--archer")) {
        card.style.backgroundColor = "#ee5487";
    } else if (cardClasses.includes("clash-card__unit-stats--giant")) {
        card.style.backgroundColor = "#f6901a";
    } else if (cardClasses.includes("clash-card__unit-stats--goblin")) {
        card.style.backgroundColor = "#82bb30";
    } else if (cardClasses.includes("clash-card__unit-stats--wizard")) {
        card.style.backgroundColor = "#4facff";
    }
});