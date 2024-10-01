window.onload = function() {
  
                const mtexts = [
            "To reach the end, you must go through hell",
            "You can't expect to get diamonds if you don't even mine",
            "Even if it's rare doesn't mean it's useful",
            "A wooden pickaxe doesn't look useful, but without it nothing is possible",
            "You can give them everything you have but they'll disappear",
            "A heart is like bedrock, the only way you can break it is by cheating",
            "You can try it again but it'll always end up giving you damage",
            "The shield is like your motivation, if it breaks, you start losing",
            "You can't put loyalty on a hoe",
            "Pain is only temporary just respawn and get everything back",
            "Animals follow you, but only because you have food for them",
            "You can own the world, but still end up alone",
            "Cheating might make the process easier, but it takes away all the fun",
            "In the end, it was just you and your dog",
            "Creepers are evil despite their helpless eyes",
            "a world where anything is possible",
            "Even in the deepest cave, there's always a way out",
            "Don't look for diamonds in a cave where torches have been placed",
            "Even obsidian can cry",
            "Never waste gold on a hoe",
            "You can't control where you start in the world, but you can change where you end",
            "True friends are like diamonds, valuable, bright and rare to find",
            "You only need a crafting table and a furnace to call it home",
            "It takes one tree to make 1000 matches, but one match can burn 1000 trees",
        ];

  const ftexts = [
            "You can have 100 bandages, but they will never get you to 100hp, but one medkit will",
            "Even at 1hp you can still do 200 damage",
            "Only you can edit your wall, if others can, well, it's not your wall",
            "if your duo loots first and revives later, it's clear where their priorities lie",
            "No matter how high you build, it takes only one person to take you down",
            "Even with bad loot, you try to win",
            "Just because it's legendary, doesn't mean it's worth it",
            "Sometimes even the best get lost in the storm",
            "Used chests don't glow",
            "Not everyone that rides the battle bus with you, is ready to jump when you do",
            "Metal takes olger to build but is stronger in the end",
            "The smaller the circle, the better the people",
            "No one spectates you in the beginning, but they do when you're close to winning",
            "Some people start on high ground, others have to build up",
            "Remember to thank the bus driver, they're the one that got you there",
            "Playing solo is the scariest, winning a solo is the hardest, but winning a solo feels the best",
            "Don't just focus on winning the match, enjoy it too, because even winners go back to the lobby",
            "You don't get mats from breaking other people's builds",
            "How do you expect to get high ground if you don't take the time to build",
            "Everyone starts with different loot, it's just a matter of how you use it",
            "You can have a full friends list but still have an empty party",
            "In order to heal, you gotta take some damage first",
            "Just because you're in storm, doesn't mean its game over",
        ];

const randomIndex = Math.floor(Math.random() * texts.length);
                
        document.getElementById('mquotes').innerText = mtexts[randomIndex]; 
        document.getElementById('fquotes').innerText = ftexts[randomIndex];
};
