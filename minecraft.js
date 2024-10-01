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

const randomIndex = Math.floor(Math.random() * texts.length);
                
        document.getElementById('mquotes').innerText = mtexts[randomIndex]; 
};
