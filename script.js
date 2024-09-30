window.onload = function() {
  const texts = [
            "Welcome Dude!",
            "Also try Terraria!",
            "Hello Mr. stalker",
            "bro clicked the link",
            "Lorem ipsum dolor",
            "good night",
            "blud shouldn't be here",
            "Curious, are we?",
            "Wrong website dummy",
            "I've been waiting for you",
            "Unexpected stop, huh?",
            "Is this a dead end?",
            "This is not a coincidence",
            "Pizza, pasta, mamma mia",
            "Ciao!",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "i might (am) be stupid"
        ];

        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById('description idk').innerText = texts[randomIndex];
};
