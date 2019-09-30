function generateAdventure() {

var Adjective1 = [
    
    'The Bleak ',
    'The Ruined ',
    'The Infernal ',
    'The Shadow ',
    'The Impenetrable ',
    'The Crystalline ',
    'The Crimson ',
    'The Invisible ',
    'The Frozen ',
    'The Sunken ',
    'The Delirious ',
    'The Colossal ',
    'The Vengeful ',
    'The Solemn ',
    'The Luminous ',
    'The Mocking ',
    'The Baffling ',
    'The Scorched ',
    'The Infested ',
    'The Silent '
];

var Location = [
    
    'Ziggurat ',
    'Shrine ',
    'Manse ',
    'Woods ',
    'Domain ',
    'Plane ',
    'Crypt ',
    'Keep ',
    'Fortress ',
    'City ',
    'Swamp ',
    'Maze ',
    'Dome ',
    'Spire ',
    'Oubliette ',
    'Hell ',
    'Wreckage ',
    'Hamlet ',
    'Cavern ',
    'Corridore '

];

var Adjective2 = [
   
    'of the Twisted ',
    'of the Ashen ',
    'of the Unknowable ',
    'of the Immaculate ',
    'of the Desperate ',
    'of the Forsaken ',
    'of the Mutant ',
    'of the Burning ',
    'of the Stone ',
    'of the Dreaming ',
    'of the Beast ',
    'of the Excommunicated ',
    'of the Lustful ',
    'of the Doomed ',
    'of the Nightmare ',
    'of the Esoteric ',
    'of the Tormented ',
    'of the Spectral ',
    'of the Bloodthirsty ',
    'of the Malicious '

];

var Noun = [
    
    'Witch',
    'Necromancer',
    'Cult',
    'Regiment',
    'Druid',
    'Throne',
    'Horror',
    'Basilisk',
    'Ork',
    'Warlord',
    'Reavers',
    'Godling',
    'Coward',
    'Reptile',
    'Golem',
    'Wastes',
    'Imp',
    'Wraith',
    'Gem',
    'Mother'

];

var randomAdjective1 = Math.floor(Math.random() * Adjective1.length);

var randomLocation = Math.floor(Math.random() * Location.length);

var randomAdjective2 = Math.floor(Math.random() * Adjective2.length);

var randomNoun = Math.floor(Math.random() * Noun.length);

var adventure = Adjective1[randomAdjective1].concat(Location[randomLocation], Adjective2[randomAdjective2], Noun[randomNoun]);

document.getElementById("adventure-space").innerText = adventure;
}