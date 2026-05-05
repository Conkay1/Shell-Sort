const COMMON    = ['clam', 'mussel', 'periwinkle', 'limpet', 'cockle']
const UNCOMMON  = ['conch', 'scallop', 'oyster', 'whelk', 'turban_shell']
const RARE      = ['nautilus', 'cowrie', 'cone_shell', 'volute', 'auger']
const VERY_RARE = ['lightning_whelk', 'junonia', 'murex', 'tritons_trumpet', 'helmet_shell']
const LEGENDARY = ['giant_clam', 'venus_comb_murex', 'glory_of_the_sea', 'golden_cowrie', 'paper_nautilus']

function level(id, { timer, shelves, stack, hold, pool, types, combo, hints, seed }) {
  return {
    id,
    timerSeconds: timer,
    shelvesCount: shelves,
    shellsPerShelf: stack,
    holdSlots: hold,
    shellPool: pool,
    shellTypeCount: types,
    comboMultiplierEnabled: combo,
    hintsAllowed: hints,
    shufflesAllowed: 1,
    starThresholds: {
      three: Math.floor(timer * 0.67),
      two: Math.floor(timer * 0.33),
    },
    seed,
  }
}

export const LEVELS = [
  // 1–5: Common only, 3 types
  level(1,  { timer:90, shelves:4, stack:3, hold:7, pool:COMMON, types:3, combo:false, hints:3, seed:11001 }),
  level(2,  { timer:90, shelves:4, stack:3, hold:7, pool:COMMON, types:3, combo:false, hints:3, seed:11002 }),
  level(3,  { timer:90, shelves:4, stack:3, hold:7, pool:COMMON, types:3, combo:false, hints:3, seed:11003 }),
  level(4,  { timer:90, shelves:4, stack:3, hold:7, pool:COMMON, types:3, combo:false, hints:3, seed:11004 }),
  level(5,  { timer:90, shelves:4, stack:3, hold:7, pool:COMMON, types:3, combo:false, hints:3, seed:11005 }),

  // 6–10: Common, 4 types
  level(6,  { timer:80, shelves:4, stack:4, hold:7, pool:COMMON, types:4, combo:true,  hints:2, seed:12001 }),
  level(7,  { timer:80, shelves:4, stack:4, hold:7, pool:COMMON, types:4, combo:true,  hints:2, seed:12002 }),
  level(8,  { timer:80, shelves:4, stack:4, hold:7, pool:COMMON, types:4, combo:true,  hints:2, seed:12003 }),
  level(9,  { timer:80, shelves:4, stack:4, hold:7, pool:COMMON, types:4, combo:true,  hints:2, seed:12004 }),
  level(10, { timer:80, shelves:4, stack:4, hold:7, pool:COMMON, types:4, combo:true,  hints:2, seed:12005 }),

  // 11–15: +Uncommon, 4 types
  level(11, { timer:75, shelves:5, stack:4, hold:8, pool:[...COMMON,...UNCOMMON], types:4, combo:true, hints:2, seed:13001 }),
  level(12, { timer:75, shelves:5, stack:4, hold:8, pool:[...COMMON,...UNCOMMON], types:4, combo:true, hints:2, seed:13002 }),
  level(13, { timer:75, shelves:5, stack:4, hold:8, pool:[...COMMON,...UNCOMMON], types:4, combo:true, hints:2, seed:13003 }),
  level(14, { timer:75, shelves:5, stack:4, hold:8, pool:[...COMMON,...UNCOMMON], types:4, combo:true, hints:2, seed:13004 }),
  level(15, { timer:75, shelves:5, stack:4, hold:8, pool:[...COMMON,...UNCOMMON], types:4, combo:true, hints:2, seed:13005 }),

  // 16–20: +Uncommon, 5 types
  level(16, { timer:70, shelves:5, stack:5, hold:8, pool:[...COMMON,...UNCOMMON], types:5, combo:true, hints:1, seed:14001 }),
  level(17, { timer:70, shelves:5, stack:5, hold:8, pool:[...COMMON,...UNCOMMON], types:5, combo:true, hints:1, seed:14002 }),
  level(18, { timer:70, shelves:5, stack:5, hold:8, pool:[...COMMON,...UNCOMMON], types:5, combo:true, hints:1, seed:14003 }),
  level(19, { timer:70, shelves:5, stack:5, hold:8, pool:[...COMMON,...UNCOMMON], types:5, combo:true, hints:1, seed:14004 }),
  level(20, { timer:70, shelves:5, stack:5, hold:8, pool:[...COMMON,...UNCOMMON], types:5, combo:true, hints:1, seed:14005 }),

  // 21–25: +Rare, 5 types
  level(21, { timer:65, shelves:5, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:5, combo:true, hints:1, seed:15001 }),
  level(22, { timer:65, shelves:5, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:5, combo:true, hints:1, seed:15002 }),
  level(23, { timer:65, shelves:5, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:5, combo:true, hints:1, seed:15003 }),
  level(24, { timer:65, shelves:5, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:5, combo:true, hints:1, seed:15004 }),
  level(25, { timer:65, shelves:5, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:5, combo:true, hints:1, seed:15005 }),

  // 26–30: +Rare, 6 types
  level(26, { timer:60, shelves:6, stack:5, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:6, combo:true, hints:1, seed:16001 }),
  level(27, { timer:60, shelves:6, stack:5, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:6, combo:true, hints:1, seed:16002 }),
  level(28, { timer:60, shelves:6, stack:5, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:6, combo:true, hints:1, seed:16003 }),
  level(29, { timer:60, shelves:6, stack:5, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:6, combo:true, hints:1, seed:16004 }),
  level(30, { timer:60, shelves:6, stack:5, hold:9, pool:[...COMMON,...UNCOMMON,...RARE], types:6, combo:true, hints:1, seed:16005 }),

  // 31–35: +Very Rare, 6 types
  level(31, { timer:55, shelves:6, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:6, combo:true, hints:0, seed:17001 }),
  level(32, { timer:55, shelves:6, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:6, combo:true, hints:0, seed:17002 }),
  level(33, { timer:55, shelves:6, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:6, combo:true, hints:0, seed:17003 }),
  level(34, { timer:55, shelves:6, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:6, combo:true, hints:0, seed:17004 }),
  level(35, { timer:55, shelves:6, stack:6, hold:9, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:6, combo:true, hints:0, seed:17005 }),

  // 36–40: +Very Rare, 7 types
  level(36, { timer:50, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:7, combo:true, hints:0, seed:18001 }),
  level(37, { timer:50, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:7, combo:true, hints:0, seed:18002 }),
  level(38, { timer:50, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:7, combo:true, hints:0, seed:18003 }),
  level(39, { timer:50, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:7, combo:true, hints:0, seed:18004 }),
  level(40, { timer:50, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE], types:7, combo:true, hints:0, seed:18005 }),

  // 41–45: +Legendary, 7 types
  level(41, { timer:45, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:7, combo:true, hints:0, seed:19001 }),
  level(42, { timer:45, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:7, combo:true, hints:0, seed:19002 }),
  level(43, { timer:45, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:7, combo:true, hints:0, seed:19003 }),
  level(44, { timer:45, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:7, combo:true, hints:0, seed:19004 }),
  level(45, { timer:45, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:7, combo:true, hints:0, seed:19005 }),

  // 46–50: +Legendary, 8 types
  level(46, { timer:40, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:8, combo:true, hints:0, seed:20001 }),
  level(47, { timer:40, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:8, combo:true, hints:0, seed:20002 }),
  level(48, { timer:40, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:8, combo:true, hints:0, seed:20003 }),
  level(49, { timer:40, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:8, combo:true, hints:0, seed:20004 }),
  level(50, { timer:40, shelves:6, stack:6, hold:10, pool:[...COMMON,...UNCOMMON,...RARE,...VERY_RARE,...LEGENDARY], types:8, combo:true, hints:0, seed:20005 }),
]
