// Define the Tarot deck as an array of objects
const tarotDeck = [
    { name: "The Fool", prediction: "A new journey awaits, filled with excitement and unknown opportunities." },
    { name: "The Magician", prediction: "You have the power to create your desired future—take bold actions now." },
    { name: "The High Priestess", prediction: "Secrets will soon be revealed; trust your intuition to guide you." },
    { name: "The Empress", prediction: "Abundance and fertility will come your way; expect growth and prosperity." },
    { name: "The Emperor", prediction: "A period of stability and leadership is approaching; take control of your path." },
    { name: "The Hierophant", prediction: "A teacher or mentor will enter your life, offering wisdom and guidance." },
    { name: "The Lovers", prediction: "A powerful relationship is on the horizon, bringing choices and passion." },
    { name: "The Chariot", prediction: "Victory and forward momentum will be yours; focus and determination will lead to success." },
    { name: "Strength", prediction: "You will overcome upcoming challenges with courage and inner strength." },
    { name: "The Hermit", prediction: "A period of introspection and solitude will reveal new insights for the future." },
    { name: "Wheel of Fortune", prediction: "Your luck is about to change—prepare for a shift in your circumstances." },
    { name: "Justice", prediction: "Fair outcomes will prevail; the truth will come to light and balance will be restored." },
    { name: "The Hanged Man", prediction: "A temporary pause is necessary to gain a new perspective; wait before taking action." },
    { name: "Death", prediction: "Major transformations lie ahead; embrace the endings for new beginnings." },
    { name: "Temperance", prediction: "Harmony and balance are in your future; patience will bring what you seek." },
    { name: "The Devil", prediction: "Beware of temptations and unhealthy patterns; breaking free will lead to a better path." },
    { name: "The Tower", prediction: "Sudden changes will shake your foundations; what falls apart will clear the way for new growth." },
    { name: "The Star", prediction: "A hopeful future awaits; wish upon a star, as your dreams are within reach." },
    { name: "The Moon", prediction: "Uncertainty and illusions may cloud the path ahead; trust your instincts to see clearly." },
    { name: "The Sun", prediction: "Happiness, success, and clarity will shine on your path; expect joyful times ahead." },
    { name: "Judgement", prediction: "A time of reckoning and renewal is coming; past efforts will bear fruit." },
    { name: "The World", prediction: "Completion and fulfillment will soon be yours; a cycle comes to a successful end." },

    // Suit of Cups
    { name: "Ace of Cups", prediction: "New love or deep emotional connections are coming your way." },
    { name: "Two of Cups", prediction: "A meaningful partnership will form, bringing harmony and mutual support." },
    { name: "Three of Cups", prediction: "Celebration and reunions with loved ones will bring joy and good times." },
    { name: "Four of Cups", prediction: "You may miss out on an opportunity if you remain lost in contemplation." },
    { name: "Five of Cups", prediction: "A loss or disappointment may occur, but a brighter future lies just ahead." },
    { name: "Six of Cups", prediction: "Someone from your past will return, rekindling old memories and connections." },
    { name: "Seven of Cups", prediction: "Many options and fantasies will cloud your vision; choose wisely to shape your future." },
    { name: "Eight of Cups", prediction: "You’ll leave behind what no longer serves you in search of a deeper purpose." },
    { name: "Nine of Cups", prediction: "Your wishes will come true; expect happiness and satisfaction in the near future." },
    { name: "Ten of Cups", prediction: "A time of emotional fulfillment and family harmony is ahead; enjoy the happiness." },
    { name: "Page of Cups", prediction: "A surprise message or offer of love will brighten your day." },
    { name: "Knight of Cups", prediction: "A romantic proposal or a creative opportunity will come sweeping into your life." },
    { name: "Queen of Cups", prediction: "Someone caring and compassionate will offer guidance and emotional support." },
    { name: "King of Cups", prediction: "Emotional mastery will help you navigate turbulent waters and achieve stability." },

    // Suit of Pentacles
    { name: "Ace of Pentacles", prediction: "A new financial opportunity or windfall is on its way." },
    { name: "Two of Pentacles", prediction: "You will successfully juggle multiple priorities, but be cautious of overcommitting." },
    { name: "Three of Pentacles", prediction: "Collaboration and teamwork will lead to recognition and advancement." },
    { name: "Four of Pentacles", prediction: "Holding on too tightly to resources may limit future growth; consider where you can share." },
    { name: "Five of Pentacles", prediction: "Financial challenges may arise, but support will appear when least expected." },
    { name: "Six of Pentacles", prediction: "Generosity will be repaid; expect support or gifts from unexpected sources." },
    { name: "Seven of Pentacles", prediction: "Your hard work will bear fruit soon, but patience is needed for full results." },
    { name: "Eight of Pentacles", prediction: "Your dedication to your craft will bring long-term success and mastery." },
    { name: "Nine of Pentacles", prediction: "Financial independence and luxury will soon be yours; enjoy the fruits of your labor." },
    { name: "Ten of Pentacles", prediction: "A legacy of wealth and family security will be established; long-term prosperity is in your future." },
    { name: "Page of Pentacles", prediction: "A new opportunity for learning and growth in your career or finances will appear." },
    { name: "Knight of Pentacles", prediction: "Steady progress and dedication will lead to tangible success." },
    { name: "Queen of Pentacles", prediction: "Comfort, security, and domestic stability will be achieved through practical efforts." },
    { name: "King of Pentacles", prediction: "Financial leadership and business success are within your reach." },
  
    // Suit of Wands
    { name: "Ace of Wands", prediction: "A new creative project or inspiration is on the horizon." },
    { name: "Two of Wands", prediction: "Plans are forming, and the world is in your hands—choose your path wisely." },
    { name: "Three of Wands", prediction: "Success is within reach; your efforts will soon be rewarded." },
    { name: "Four of Wands", prediction: "Celebration and achievement are near; embrace moments of joy." },
    { name: "Five of Wands", prediction: "Competition and conflict are on the way; stay strong to come out on top." },
    { name: "Six of Wands", prediction: "Victory and public recognition are in your future; enjoy the accolades." },
    { name: "Seven of Wands", prediction: "You’ll face opposition, but stand your ground; your position is strong." },
    { name: "Eight of Wands", prediction: "Events will move quickly; expect news or changes to come rapidly." },
    { name: "Nine of Wands", prediction: "Persevere through hardships; resilience will bring eventual success." },
    { name: "Ten of Wands", prediction: "A heavy burden is being carried; take care to avoid burnout." },
    { name: "Page of Wands", prediction: "A message of exciting opportunities or new ventures is coming your way." },
    { name: "Knight of Wands", prediction: "Bold action and adventure are ahead; embrace your passion and move forward." },
    { name: "Queen of Wands", prediction: "Confidence and determination will help you achieve your goals; trust in your abilities." },
    { name: "King of Wands", prediction: "Leadership and vision are called for; step up and take charge to manifest your ideas." },
   
    // Suit of Swords
    { name: "Ace of Swords", prediction: "A breakthrough or moment of clarity will guide you forward." },
    { name: "Two of Swords", prediction: "A difficult decision must be made; weigh your options carefully." },
    { name: "Three of Swords", prediction: "Heartbreak or sorrow may come, but healing will follow." },
    { name: "Four of Swords", prediction: "Rest and recovery are necessary; take time to rejuvenate." },
    { name: "Five of Swords", prediction: "Conflict and defeat may arise; choose your battles wisely." },
    { name: "Six of Swords", prediction: "A journey or transition will bring you to calmer waters." },
    { name: "Seven of Swords", prediction: "Deception or betrayal may be at play; stay alert and protect yourself." },
    { name: "Eight of Swords", prediction: "You may feel trapped, but the solution lies within your own mindset." },
    { name: "Nine of Swords", prediction: "Anxiety or nightmares will trouble you, but facing fears will bring release." },
    { name: "Ten of Swords", prediction: "An ending is near; let go of what’s finished for new beginnings." },
    { name: "Page of Swords", prediction: "Curiosity and new ideas will lead to fresh perspectives and intellectual growth." },
    { name: "Knight of Swords", prediction: "A fast-moving situation will require quick decisions; act with clarity and purpose." },
    { name: "Queen of Swords", prediction: "Sharp intellect and clear communication will help you cut through confusion." },
    { name: "King of Swords", prediction: "Authority and wisdom are needed; use your experience to make fair and just decisions." }

];

// Function to draw a random card
function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const randomCard = tarotDeck[randomIndex];

    // Animate the card reveal
    const cardTitle = document.getElementById("cardName");
    const cardMeaning = document.getElementById("cardMeaning");

    cardTitle.classList.add("fade-out");
    cardMeaning.classList.add("fade-out");

    setTimeout(() => {
        // Display the card and its meaning
        cardTitle.textContent = randomCard.name;
        cardMeaning.textContent = randomCard.prediction;

        cardTitle.classList.remove("fade-out");
        cardMeaning.classList.remove("fade-out");
        cardTitle.classList.add("fade-in");
        cardMeaning.classList.add("fade-in");
    }, 300);
}

// Set up event listener for the button
document.getElementById("drawButton").addEventListener("click", drawCard);