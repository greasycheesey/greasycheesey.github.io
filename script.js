const purchaseBanana = document.getElementById("bananaButton");
const bananaPurchasedText = document.getElementById("bananaPurchased");
let bananaPurchased = 0;

purchaseBanana.onclick = function() {
    bananaPurchased++;
    bananaPurchasedText.innerHTML = `you have bought ${bananaPurchased} bananas.`;
};
