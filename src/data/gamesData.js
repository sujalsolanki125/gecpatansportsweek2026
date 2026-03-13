import imgTugOfWar from '../assets/tug-of-war.png';
import imgCricket from '../assets/cricket.png';
import imgKabaddi from '../assets/kabbadi.png';
import imgVolleyball from '../assets/volleyball.png';
import imgKhoKhoBoys from '../assets/kho-kho-boys.png';
import imgKhoKhoGirls from '../assets/kho-kho-girls.png';
import imgBadmintonBoys from '../assets/badminton.png';
import imgBadmintonGirls from '../assets/badminton-girls.png';
import imgTableTennis from '../assets/table-tennis.png';
import imgChess from '../assets/chess.png';
import imgCarrom from '../assets/carrom.png';
import imgGullyCricketGirls from '../assets/gully-cricket-girls.png';

// ── Detail-page background images (full-bleed, separate from card thumbnails) ──
import bgDefault from '../assets/bg1.png';
import bgGullyCricketGirls from '../assets/gully-cricket-girls-bg.png';
import bgCricket from '../assets/cricket-bg.png';
import bgKabaddi from '../assets/kabbadi-bg.png';
import bgVolleyball from '../assets/volleyball-bg.png';
import bgKhoKhoBoys from '../assets/kho-kho-boys-bg.png';
import bgKhoKhoGirls from '../assets/kho-kho-girls-bg.png';
import bgBadminton from '../assets/badminton-bg.png';
import bgBadmintonGirls from '../assets/badminton-girls-bg.png';
import bgTableTennis from '../assets/table-tennis-bg.png';
import bgChess from '../assets/chess-bg.png';
import bgCarrom from '../assets/carrom-bg.png';
import bgTugOfWar from '../assets/tug-of-war-bg.png';

export const allGames = [
  {
    id: 'tugofwar',
    title: 'Tug Of War',
    category: 'Team',
    image: imgTugOfWar,
    bgImage: bgTugOfWar,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLScgPYlA4PF5u-9iQY1cYFgapr6ixhco_8Hb3M_gjJbrwOOy0w/viewform?usp=publish-editor',
    teamSize: '8 players',
    eventDate: 'March 12, 2026',
    venue: 'infront of Administrative Block',
    coordinator: 'Sujal Solanki',
    phone: '6353525412',
    studentCoordinators: [
      { name: 'Sujal Solanki', phone: '6353525412' },
      { name: 'Purav Modi', phone: '9925963711' },
      { name: 'Patel Aryan', phone: '8799151636' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_bar',
    about: 'Test your team strength and coordination in this classic battle of power and strategy.',
    details: 'Tug of War is an ancient sport that tests the collective strength and stamina of a team. This year we follow international specifications with proper ground preparation and safety equipment.',
    rules: [
      'Participation to GECP SPORTS TUG OF WAR TOURNAMENT is only for GEC Patan Students',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Team must consist of 8 players',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'cricket',
    title: 'Cricket',
    category: 'Team',
    image: imgCricket,
    bgImage: bgCricket,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfkwijelbGR_d9kVrtruc3SjM0-KX_TBQSD65H0fA6Cl8M3vw/viewform',
    teamSize: '11 Players',
    eventDate: 'March 12, 2026',
    venue: 'Cricket Ground',
    coordinator: 'Imdad Ali',
    phone: '8866416429',
    studentCoordinators: [
      { name: 'Imdad Ali', phone: '8866416429' },
      { name: 'Janish Patel', phone: '9328681889' },
      { name: 'Gaurav Raj', phone: '7984269154' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_cricket',
    about: 'Experience the thrill of international cricket format. Our T20 tournament ensures fast-paced and exciting gameplay.',
    details: 'Cricket is a bat-and-ball sport played between two teams of 11 players. The batting side scores runs while the fielding side tries to dismiss the batters. Our inter-college tournament follows T20 format.',
    rules: [
       'Participation to GECP SPORTS CRICKET TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at college cricket ground',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Umpires decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'kabaddi',
    title: 'Kabaddi',
    category: 'Team',
    image: imgKabaddi,
    bgImage: bgKabaddi,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLScU_z3eufO6hEaOoeO8E8nt1st6RmKK4iQ8Mztq4M6OVZx91Q/viewform',
    teamSize: '7 Players',
    eventDate: 'March 14, 2026',
    venue: 'Kabaddi Ground',
    coordinator: 'Mangoliya Sanket',
    phone: '9160544023',
    studentCoordinators: [
      { name: 'Mangoliya Sanket', phone: '9160544023' },
      { name: 'Abhi Sharma', phone: '7226977805' },
      { name: 'Shiram Chaudhary', phone: '9427889940' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_rugby',
    about: 'A traditional Indian sport that combines skill, strength, and strategy. Test your raiding and defending abilities.',
    details: 'Kabaddi is an ancient contact team sport that requires balance, coordination, and team spirit. Players take turns raiding the opposing side while teammates defend.',
    rules: [
       'Participation to GECP SPORTS KABADDI TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at College Kabaddi ground Infront of Admin Block',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Umpires decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'volleyball',
    title: 'Volleyball',
    category: 'Team',
    image: imgVolleyball,
    bgImage: bgVolleyball,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfzWenuE2gwsXrgQU9kI5pMRtGQfwLuvmy1Pm3tzN1jO6HXrg/viewform',
    teamSize: '6 Players',
    eventDate: 'March 15, 2026',
    venue: 'infront of Administrative Block',
    coordinator: 'Devang Pagi',
    phone: '9106499408',
    studentCoordinators: [
      { name: 'Devang Pagi', phone: '9106499408' },
      { name: 'Hussain Ali', phone: '8128769031' },
      { name: 'Bayad Mayank', phone: '8347537517' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_volleyball',
    about: 'A dynamic team sport requiring coordination, speed, and precision ball control.',
    details: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by hitting a ball over the net.',
    rules: [
      'Participation to GECP SPORTS VOLLEYBALL TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at College VOLLEYBALL Ground',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Teams have to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Game consists of 1 set having 21 points',
   'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'khokho-boys',
    title: 'Kho Kho (Boys)',
    category: 'Team',
    image: imgKhoKhoBoys,
    bgImage: bgKhoKhoBoys,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc8qf8olMQDs1vcOtXFS9YMRIrq3yLYzo1DIaRqpc4gjdkEXA/viewform',
    teamSize: '9 Players',
    eventDate: 'March 16, 2026',
    venue: 'Kho Kho Court',
    coordinator: 'KaustukSharma',
    phone: '8238522021',
    studentCoordinators: [
      { name: 'KaustukSharma', phone: '8238522021' },
      { name: 'Dakshdeep Pawar', phone: '9662249477' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_soccer',
    about: 'A high-speed chasing game that tests agility, speed, and tactical abilities.',
    details: 'Kho Kho is an ancient Indian sport that requires tremendous physical agility and tactical skills. It is played between two teams that try to chase and tag.',
    rules: [
      'Participation to GECP SPORTS KHO-KHO TOURNAMENT is only for GEC Patan Students',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Team must consist of 10 players',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'khokho-girls',
    title: 'Kho Kho (Girls)',
    category: 'Team',
    image: imgKhoKhoGirls,
    bgImage: bgKhoKhoGirls,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfhorT-v6qhauNBU7cL__t2-qiSWqT1_dCkmP7EIit9tL_v3A/viewform',
    teamSize: '9 Players',
    eventDate: 'March 16, 2026',
    venue: 'Kho Kho Court',
    coordinator: 'Paraliya Minal',
    phone: '8849742550',
    studentCoordinators: [
      { name: 'Paraliya Minal', phone: '8849742550' },
      { name: 'Desai Prinsi', phone: '6354360493' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_soccer',
    about: 'A thrilling display of speed, agility and strategic gameplay for girls.',
    details: 'Kho Kho for girls follows the official rules with same standards as boys event, providing equal opportunities.',
    rules: [
      'Participation to GECP SPORTS KHO-KHO TOURNAMENT is only for GEC Patan Students',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Team must consist of 10 players',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'badminton-boys',
    title: 'Badminton (Boys)',
    category: 'Racquet',
    image: imgBadmintonBoys,
    bgImage: bgBadminton,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLScoE8uaBJ_I1gF019UVmTrX7ymqJ--EtLrDJiq-TK-5JyWucA/viewform',
    teamSize: 'Single/Double',
    eventDate: 'March 17, 2026',
    venue: 'In EE Department',
    coordinator: 'Shingrakhia Keval',
    phone: '6355638221',
    studentCoordinators: [
      { name: 'Shingrakhia Keval', phone: '6355638221' },
      { name: 'Patel Harsh', phone: '9913721928' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_ping_pong',
    about: 'A precision sport that demands skill, speed, and strategic racket play.',
    details: 'Badminton is played with a lightweight racket and a shuttlecock. Matches can be singles (1v1) or doubles (2v2).',
    rules: [
      'Participation to GECP BADMINTON TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at street between EC and CSE Department',
  'Rules will be informed before the match',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'badminton-girls',
    title: 'Badminton (Girls)',
    category: 'Racquet',
    image: imgBadmintonGirls,
    bgImage: bgBadmintonGirls,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc-rNK2m5kuthR-lRuiP8WgajNzm_RuuN9f8qzvPrxdSLheQg/viewform',
    teamSize: 'Single/Double',
    eventDate: 'March 17, 2026',
    venue: 'In EE Department',
    coordinator: 'Aashka Arya',
    phone: '8866354896',
    studentCoordinators: [
      { name: 'Aashka Arya', phone: '8866354896' },
      { name: 'Ishika Dave', phone: '8799639436' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_ping_pong',
    about: 'Girls badminton championship with exciting rallies and competitive spirit.',
    details: 'Girls badminton tournament following international standards with equal opportunities.',
    rules: [
      'Participation to GECP BADMINTON TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at street between EC and CSE Department',
  'Rules will be informed before the match',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'tabletennis',
    title: 'Table Tennis',
    category: 'Racquet',
    image: imgTableTennis,
    bgImage: bgTableTennis,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeGPCw-TbR6n_SEtm9n5zrr2hDWid4_Mf-3Z1_OkMvADOSC1g/viewform',
    teamSize: 'Single',
    eventDate: 'March 18, 2026',
    venue: 'TT Hall, New Amenity Block',
    coordinator: 'Kavya Chaudhary',
    phone: '9378934614',
    studentCoordinators: [
      { name: 'Kavya Chaudhary', phone: '9378934614' },
      { name: 'Aryan Singh', phone: '7091720101' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_ping_pong',
    about: 'A fast-paced indoor sport demanding quick reflexes and precision.',
    details: 'Table tennis is a fast-paced sport played on a hard table divided by a net. Players use small paddles to hit the ball.',
    rules: [
      'Participation to GECP TABLE-TENNIS TOURNAMENT is only for GEC Patan Students',
  'All participants have to report at TT Hall, New Amenity Block',
  'Rules will be informed before the match',
  'Referee decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'chess',
    title: 'Chess',
    category: 'Board',
    image: imgChess,
    bgImage: bgChess,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfK7yahIaeO24qNwSedD7Yv4D_Cf5H_NF90i4oLKecwCQBUsw/viewform',
    teamSize: 'Individual',
    eventDate: 'March 19, 2026',
    venue: 'seminar hall of EC department',
    coordinator: 'Rana Dev',
    phone: '9016381937',
    studentCoordinators: [
      { name: 'Rana Dev', phone: '9016381937' },
      { name: 'Rana Yuvraj', phone: '9978720031' },
      { name: 'Ludumor Priyank', phone: '7984450657' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_esports',
    about: 'A timeless game of strategy and intellect that challenges master minds.',
    details: 'Chess is an ancient board game that tests strategic thinking, planning, and tactical skills.',
    rules: [
       'Participation to GECP CHESS TOURNAMENT is only for GEC Patan Students',
  'All participants should have to report at seminar hall of EC department',
  'Before the match starts, a coin will be flipped to determine which player gets to choose their color. The player who wins the toss will get to decide which color they want to play with',
  'Each match will be of 10 min with no increment',
  'If a match ends in a draw, then the way to determine the winner will be through a 3-minute match with no increment',
  'Stalemate will be considered as draw',
  'The touch and move rule applies to all player',
  'Invigilators decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the players or its supporter shall lead to disqualification from the tournament',
  'Players has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover (opponent will be promoted to next round)',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'carrom',
    title: 'Carrom',
    category: 'Board',
    image: imgCarrom,
    bgImage: bgCarrom,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdr8f_dJfX6sya-cL-lNHX4GmOAy5bu7K5OR7ED3Nhd8nTp5w/viewform',
    teamSize: 'Single/Double',
    eventDate: 'March 20, 2026',
    venue: 'Civil department corridor',
    coordinator: 'Parv Joshi',
    phone: '8866415588',
    studentCoordinators: [
      { name: 'Parv Joshi', phone: '8866415588' },
      { name: 'Utkarsh Sukla', phone: '8429899563' },
      { name: 'Niraj Singh', phone: '8140909063' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_baseball',
    about: 'A classic board sport that tests striking accuracy and strategic planning.',
    details: 'Carrom is a tabletop game played with coins and a striker on a square board.',
    rules: [
      'Participation to GECP CARROM TOURNAMENT is only for GEC PATAN Students',
  'All participants should have to report at Civil department corridor',
  'Four players will play at a time',
  'Invigilators decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the players or its supporter shall lead to disqualification from the tournament',
  'Players has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'Other rules will be declared on the game day'
    ]
  },
  {
    id: 'gullycricket-girls',
    title: 'Gully Cricket (Girls)',
    category: 'Team',
    image: imgGullyCricketGirls,
    bgImage: bgGullyCricketGirls,
    registerationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc9bOdIWfoAm2bglZQmjC95dpEys15FfmVDLO1RwUp8mFDQ4A/viewform',
    teamSize: '6-8 Players',
    eventDate: 'March 21, 2026',
    venue: 'near college workshop',
    coordinator: 'Khamma Madhar',
    phone: '8160537881',
    studentCoordinators: [
      { name: 'Khamma Madhar', phone: '8160537881' },
      { name: 'Neeti Patel', phone: '6352332630' },
      { name: 'Rawat Bhavya', phone: '9327184036' }
    ],
    email: 'student.coordinator@sportsweek.local',
    icon: 'sports_cricket',
    about: 'A fun and fast-paced version of cricket adapted for mixed urban spaces.',
    details: 'Gully cricket is a casual form of cricket with 5 players per side, perfect for fun competition.',
    rules: [
      'Participation to GECP SPORTS GULLY CRICKET TOURNAMENT is only for GEC Patan Students',
  'All participants have to report near college workshop',
  'It is required that every team has only girls',
  'Team must consist of 6 players',
  'Each inning will be of 6 overs (Each player has to bowl one over)',
  'Captain has to ensure each member of his team should be from GEC Patan and from same semester and branch',
  'Note: If not followed the team will be considered disqualified from the tournament',
  'The tournament is organized on a knock-out basis',
  'Teams has to report at least half an hour before the commencement of the game, failing which the match shall be considered a walkover',
  'If the match is interrupted due to unavoidable circumstances, the rest of the game will be continued at suitable time fixed by the coordinators',
  'Umpires decision will be final in all aspects pertaining to the games',
  'Inappropriate behavior by the teams players or its supporter shall lead to disqualification from the tournament',
  'Other rules will be declared on the game day'
    ]
  }
];

