export enum E_Films {
  Episode1 = 'The Phantom Menace',
  Episode2 = 'Attack of the Clones',
  Episode3 = 'Revenge of the Sith',
  Episode4 = 'A New Hope',
  Episode5 = 'The Empire Strikes Back',
  Episode6 = 'Return of the Jedi',
}

export enum E_ReleaseDate {
  Episode1 = '1999-05-19',
  Episode2 = '2002-05-16',
  Episode3 = '2005-05-19',
  Episode4 = '1977-05-25',
  Episode5 = '1980-05-17',
  Episode6 = '1983-05-25',
}

export enum E_Director {
  Episode1 = 'George Lucas',
  Episode2 = Episode1,
  Episode3 = Episode1,
  Episode4 = Episode1,
  Episode5 = 'Irvin Kershner',
  Episode6 = 'Richard Marquand',
}

export enum E_Producer {
  Episode1 = 'Rick McCallum',
  Episode2 = Episode1,
  Episode3 = Episode1,
  Episode4 = `Gary Kurtz, ${Episode1}`,
  Episode5 = Episode4,
  Episode6 = `Howard G. Kazanjian, ${E_Director.Episode1}, ${Episode1}`,
}

export enum E_OpeningCrawl {
  Episode1 = `Turmoil has engulfed the\r\n
  Galactic Republic. The taxation\r\n
  of trade routes to outlying star\r\n
  systems is in dispute.\r\n\r\n
  Hoping to resolve the matter\r\n
  with a blockade of deadly\r\n
  battleships, the greedy Trade\r\n
  Federation has stopped all\r\n
  shipping to the small planet\r\n
  of Naboo.\r\n\r\n
  While the Congress of the\r\n
  Republic endlessly debates\r\n
  this alarming chain of events,\r\n
  the Supreme Chancellor has\r\n
  secretly dispatched two Jedi\r\n
  Knights, the guardians of\r\n
  peace and justice in the\r\n
  galaxy, to settle the conflict....`,
  Episode2 = `There is unrest in the Galactic\r\n
  Senate. Several thousand solar\r\n
  systems have declared their\r\n
  intentions to leave the Republic.\r\n\r\n
  This separatist movement,\r\n
  under the leadership of the\r\n
  mysterious Count Dooku, has\r\n
  made it difficult for the limited\r\n
  number of Jedi Knights to maintain \r\n
  peace and order in the galaxy.\r\n\r\n
  Senator Amidala, the former\r\n
  Queen of Naboo, is returning\r\n
  to the Galactic Senate to vote\r\n
  on the critical issue of creating\r\n
  an ARMY OF THE REPUBLIC\r\n
  to assist the overwhelmed\r\n
  Jedi....`,
  Episode3 = `War! The Republic is crumbling\r\n
  under attacks by the ruthless\r\n
  Sith Lord, Count Dooku.\r\n
  There are heroes on both sides.\r\n
  Evil is everywhere.\r\n\r\n
  In a stunning move, the\r\n
  fiendish droid leader, General\r\n
  Grievous, has swept into the\r\n
  Republic capital and kidnapped\r\n
  Chancellor Palpatine, leader of\r\n
  the Galactic Senate.\r\n\r\n
  As the Separatist Droid Army\r\n
  attempts to flee the besieged\r\n
  capital with their valuable\r\n
  hostage, two Jedi Knights lead a\r\n
  desperate mission to rescue the\r\n
  captive Chancellor....`,
  Episode4 = `It is a period of civil war.\r\n
  Rebel spaceships, striking\r\n
  from a hidden base, have won\r\n
  their first victory against\r\n
  the evil Galactic Empire.\r\n\r\n
  During the battle, Rebel\r\n
  spies managed to steal secret\r\n
  plans to the Empire's\r\n
  ultimate weapon, the DEATH\r\n
  STAR, an armored space\r\n
  station with enough power\r\n
  to destroy an entire planet.\r\n\r\n
  Pursued by the Empire's\r\n
  sinister agents, Princess\r\n
  Leia races home aboard her\r\n
  starship, custodian of the\r\n
  stolen plans that can save her\r\n
  people and restore\r\nfreedom to the galaxy....`,
  Episode5 = `It is a dark time for the\r\n
  Rebellion. Although the Death\r\n
  Star has been destroyed,\r\n
  Imperial troops have driven the\r\n
  Rebel forces from their hidden\r\n
  base and pursued them across\r\n
  the galaxy.\r\n\r\n
  Evading the dreaded Imperial\r\n
  Starfleet, a group of freedom\r\n
  fighters led by Luke Skywalker\r\n
  has established a new secret\r\n
  base on the remote ice world\r\n
  of Hoth.\r\n\r\n
  The evil lord Darth Vader,\r\n
  obsessed with finding young\r\n
  Skywalker, has dispatched\r\n
  thousands of remote probes into\r\n
  the far reaches of space....`,
  Episode6 = `Luke Skywalker has returned to\r\n
  his home planet of Tatooine in\r\n
  an attempt to rescue his\r\n
  friend Han Solo from the\r\n
  clutches of the vile gangster\r\n
  Jabba the Hutt.\r\n\r\n
  Little does Luke know that the\r\n
  GALACTIC EMPIRE has secretly\r\n
  begun construction on a new\r\n
  armored space station even\r\n
  more powerful than the first\r\n
  dreaded Death Star.\r\n\r\n
  When completed, this ultimate\r\n
  weapon will spell certain doom\r\n
  for the small band of rebels\r\n
  struggling to restore freedom\r\n
  to the galaxy...",`,
}
