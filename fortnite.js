{
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
        document.getElementById('fquotes').innerText = ftexts[randomIndex];
}
