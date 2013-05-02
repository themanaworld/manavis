var item = function(){
  var item = {};
  var items = {
    0:"DEFAULT",
    501:"CactusDrink",
    502:"CactusPotion",
    503:"CasinoCoins",
    504:"DecorCandy",
    505:"MaggotSlime",
    506:"CandyCane",
    507:"ScorpionStinger",
    508:"XmasCake",
    509:"ChocolateBar",
    510:"Candy",
    511:"SantaHat",
    512:"GingerBreadMan",
    513:"Cake",
    514:"XmasCandyCane",
    515:"PurplePresentBox",
    516:"BluePresentBox",
    517:"RedScorpionStinger",
    518:"BugLeg",
    519:"CherryCake",
    520:"EasterEgg",
    521:"Dagger",
    522:"SharpKnife",
    523:"LeatherShirt",
    524:"FancyHat",
    525:"MinersHat",
    526:"CoinBag",
    527:"Milk",
    528:"Boots",
    529:"IronArrow",
    530:"ShortBow",
    531:"MinerGloves",
    532:"LeatherGloves",
    533:"RoastedMaggot",
    534:"OrangeCupcake",
    535:"RedApple",
    536:"ShortSword",
    537:"TreasureKey",
    538:"GreenPresentBox",
    539:"Beer",
    540:"EmptyBottle",
    541:"BottleOfWater",
    542:"BottleOfSand",
    543:"StandardHeadband",
    544:"SilkHeadband",
    545:"ForestBow",
    546:"DesertShirt",
    547:"Bardiche",
    548:"Halberd",
    549:"Axe",
    550:"BlacksmithsAxe",
    551:"AquaHint",
    552:"MagentaHint",
    553:"YellowHint",
    554:"GreenHint",
    555:"TealHint",
    556:"PurpleHint",
    557:"RedHint",
    558:"BlueHint",
    559:"OrangeHint",
    560:"GrayHint",
    561:"Sabre",
    562:"ChickenLeg",
    563:"WinterGloves",
    564:"TurtleneckSweater",
    565:"PinkPetal",
    566:"SmallMushroom",
    567:"IronPotion",
    568:"ConcentrationPotion",
    569:"RawLog",
    570:"BoneKnife",
    571:"Setzer",
    572:"Scimitar",
    573:"Falchion",
    574:"Scorpion",
    575:"DesertBow",
    576:"Beheader",
    577:"BoneDarts",
    578:"SandCutter",
    579:"RockKnife",
    580:"StaffOfLife",
    581:"CrescentRod",
    582:"StaffOfFire",
    583:"StaffOfIce",
    584:"Jackal",
    585:"ScarabArmlet",
    586:"CottonShorts",
    587:"Sword",
    594:"Spear",
    601:"SteelShield",
    602:"WoodenShield",
    603:"LeatherShield",
    610:"JeansShorts",
    611:"WhiteFur",
    612:"CaveSnakeLamp",
    613:"HardSpike",
    614:"PinkAntenna",
    615:"PumpkinHelmet",
    616:"AxeHat",
    617:"PirateHat",
    618:"Goggles",
    619:"LeatherGoggles",
    620:"Circlet",
    621:"Eyepatch",
    622:"Bandana",
    623:"Scythe",
    624:"VNeckSweater",
    625:"ChainmailShirt",
    626:"LightPlatemail",
    627:"TopHat",
    628:"FunkyHat",
    629:"MushHat",
    630:"ShroomHat",
    631:"DarkCrystal",
    632:"CottonSkirt",
    633:"ChristmasElfHat",
    634:"FaceMask",
    635:"SantaCookie",
    636:"WarlordHelmet",
    637:"KnightsHelmet",
    638:"InfantryHelmet",
    639:"CrusadeHelmet",
    640:"IronOre",
    641:"SnakeSkin",
    642:"JeansChaps",
    643:"WhiteCowboyHat",
    644:"BlackCowboyHat",
    645:"GoldenPlatemail",
    646:"Crown",
    647:"DevelopersCap",
    648:"CottonTrousers",
    649:"WhiteEvokersRobeBlue",
    650:"BlackEvokersRobeBlue",
    651:"WhiteWizardRobe",
    652:"BlackWizardRobe",
    653:"ApprenticeRobe",
    654:"Cap",
    655:"FurBoots",
    656:"SerfHat",
    657:"Orange",
    658:"WarlordPlate",
    659:"GoldenWarlordPlate",
    660:"CottonCloth",
    661:"RedRose",
    662:"WhiteRose",
    663:"DarkRedRose",
    664:"PinkRose",
    665:"YellowRose",
    666:"BlackRose",
    667:"OrangeRose",
    668:"BlueRose",
    669:"YellowTulip",
    670:"PurpleTulip",
    671:"RedTulip",
    672:"WhiteTulip",
    673:"PinkTulip",
    674:"OrangeTulip",
    675:"GraduationCap",
    676:"Steak",
    677:"HeartNecklace",
    678:"NohMask",
    679:"DemonMask",
    680:"MauveHerb",
    681:"CobaltHerb",
    682:"GambogeHerb",
    683:"AlizarinHerb",
    684:"TinyHealingPotion",
    685:"SmallHealingPotion",
    686:"MediumHealingPotion",
    687:"LargeHealingPotion",
    688:"TankTop",
    689:"ShortTankTop",
    690:"RedDye",
    691:"GreenDye",
    692:"DarkBlueDye",
    693:"YellowDye",
    694:"LightBlueDye",
    695:"PinkDye",
    696:"BlackDye",
    697:"OrangeDye",
    698:"PurpleDye",
    699:"DarkGreenDye",
    700:"Pearl",
    701:"PileOfAsh",
    702:"WeddingRing",
    703:"SulphurPowder",
    704:"IronPowder",
    705:"ManaPotion",
    706:"GoldenScorpionStinger",
    707:"MonsterOilPotion",
    708:"LeatherPatch",
    709:"BlackScorpionStinger",
    710:"SnakeTongue",
    711:"MountainSnakeTongue",
    712:"GrassSnakeTongue",
    713:"CaveSnakeTongue",
    714:"SnakeEgg",
    715:"MountainSnakeEgg",
    716:"GrassSnakeEgg",
    717:"CaveSnakeEgg",
    718:"SilkCocoon",
    719:"GreenApple",
    720:"SilkRobe",
    721:"HighPriestCrown",
    722:"MonsterSkullHelmet",
    723:"DesertHat",
    724:"CottonHeadband",
    725:"GMCap",
    726:"GMRobe",
    727:"Iten",
    728:"MoubooFigurine",
    729:"WarpedLog",
    730:"Lifestone",
    731:"AssassinPants",
    732:"DruidTreeBranch",
    733:"PurificationPotion",
    734:"BlackBoots",
    735:"CottonBoots",
    736:"WhiteCake",
    737:"ChocolateCake",
    738:"OrangeCake",
    739:"AppleCake",
    740:"Root",
    741:"CottonGloves",
    742:"FourLeafClover",
    743:"Acorn",
    744:"DilutedConcentrationPotion",
    745:"DarkConcentrationPotion",
    746:"MopoxCurePotion",
    747:"LacedChocolateCake",
    748:"LacedOrangeCupcake",
    749:"Towel",
    750:"SlowPoisonPotion",
    751:"PinkieHat",
    752:"FluffyHat",
    753:"BatWing",
    754:"BatTeeth",
    755:"AssassinShirt",
    756:"AssassinGloves",
    757:"AssassinBoots",
    758:"WoodenStaff",
    762:"TerraniteArrow",
    763:"TerraniteOre",
    766:"TerraniteHelmet",
    767:"TerraniteChestArmor",
    768:"TerraniteLegs",
    769:"GuyFawkesMask",
    770:"FairyHat",
    771:"Miniskirt",
    772:"WispPowder",
    773:"SpectrePowder",
    774:"PoltergeistPowder",
    775:"Bone",
    776:"Skull",
    777:"RottenRags",
    778:"DiseasedHeart",
    779:"UndeadEar",
    780:"UndeadEye",
    782:"ForestArmor",
    783:"PlatynaRedDress",
    784:"ZombieNachos",
    785:"LadyFingers",
    786:"JellAhh",
    787:"Snapple",
    788:"BeetleJuice",
    789:"GutBuster",
    790:"BloodWine",
    791:"YetiSkinShirt",
    792:"BromenalBoots",
    793:"BromenalChest",
    794:"BromenalGloves",
    795:"BromenalHelmet",
    796:"BromenalLegs",
    797:"BromenalShield",
    798:"SorcererRobeRed",
    799:"MylarinDust",
    800:"BowlerHatBrown",
    801:"PinkieHelmet",
    802:"EasterBasket",
    803:"GrassLiner",
    804:"JellyBeans",
    805:"ChocolateMouboo",
    806:"ReedBundle",
    807:"GrassSeed",
    808:"HitchhikersTowel",
    809:"WhiteHitchhikersTowel",
    810:"RedHitchhikersTowel",
    811:"GreenHitchhikersTowel",
    812:"BlueHitchhikersTowel",
    813:"YellowHitchhikersTowel",
    814:"PurpleHitchhikersTowel",
    815:"OrangeHitchhikersTowel",
    816:"PinkHitchhikersTowel",
    817:"TealHitchhikersTowel",
    818:"LimeHitchhikersTowel",
    819:"DiamondPowder",
    820:"RubyPowder",
    821:"EmeraldPowder",
    822:"SapphirePowder",
    823:"TopazPowder",
    824:"AmethystPowder",
    825:"TinyManaElixir",
    826:"SmallManaElixir",
    827:"MediumManaElixir",
    828:"LargeManaElixir",
    829:"CrozeniteFourLeafAmulet",
    830:"BromenalFourLeafAmulet",
    831:"SilverFourLeafAmulet",
    832:"GoldenFourLeafAmulet",
    833:"BrokenFourLeafAmulet",
    834:"BrokenDoll",
    835:"HyvernStinger",
    836:"GrubSlime",
    838:"CranberryLollipop",
    839:"GrapeLollipop",
    840:"OrangeLollipop",
    841:"RedDottedWrap",
    842:"YellowDottedWrap",
    843:"BlueDottedWrap",
    844:"PurpleStripedWrap",
    845:"RedGoldenStripedWrap",
    846:"GreenRedStripedWrap",
    847:"PlushMouboo",
    848:"Earmuffs",
    849:"OpenPresentBox",
    850:"ClosedChristmasBox",
    851:"StickReinboo",
    852:"LeatherBall",
    853:"Doll",
    854:"ElfNightcap",
    855:"Sunglasses",
    856:"KnitCap",
    857:"LeatherTrousers",
    858:"WolvernTooth",
    859:"WolvernPelt",
    860:"SquirrelPelt",
    861:"WhiteBellTuber",
    862:"IcedWater",
    863:"SilverMirror",
    864:"BookPage",
    865:"Grimoire",
    866:"LeatherSuitcase",
    867:"IceGladius",
    868:"SilkGloves",
    869:"Antlers",
    870:"FineDress",
    871:"SealedSoul",
    872:"LockPicks",
    873:"LazuriteShard",
    874:"LazuriteCrystal",
    875:"HeartOfLazurite",
    876:"WarlordBoots",
    877:"BullHelmet",
    878:"BansheeBow",
    879:"HeartOfIsis",
    880:"LazuriteRobe",
    881:"RaggedShorts",
    882:"RedEggshellHat",
    883:"BlueEggshellHat",
    884:"YellowEggshellHat",
    885:"GreenEggshellHat",
    886:"OrangeEggshellHat",
    887:"DarkEggshellHat",
    888:"MagicGMTopHat",
    889:"MurdererCrown",
    890:"BeanieCopter",
    1198:"JackOSoul",
    1199:"Arrow",
    1200:"Bow",
    1201:"Knife",
    1202:"CottonShirt",
    1203:"RangerHat",
    1204:"AntlerHat",
    1205:"ChristmasTreeHat",
    1206:"SantaBeardHat",
    1207:"RedChristmasStocking",
    1208:"RedEasterEgg",
    1209:"GreenEasterEgg",
    1210:"BlueEasterEgg",
    1211:"YellowEasterEgg",
    1212:"PinkEasterEgg",
    1213:"TealEasterEgg",
    1214:"BunnyEars",
    1215:"ToySabre",
    1216:"MoubooHead",
    1217:"CatEars",
    1218:"PaperBag",
    1219:"MoubootaurHead",
    1220:"BunchOfParsley",
    1221:"SkullMask",
    1228:"LightCrystal",
    1229:"CaramelApple",
    1230:"LollipopColor1",
    1231:"LollipopColor2",
    1232:"LollipopColor3",
    1233:"FakeFangs",
    1234:"RedOrnament",
    1235:"YellowOrnament",
    1236:"GreenOrnament",
    1237:"AquaOrnament",
    1238:"BlueOrnament",
    1239:"MagentaOrnament",
    1240:"SantaSnowGlobe",
    1241:"SnowmanSnowGlobe",
    1242:"SnowGoggles",
    1244:"DarkTalisman",
    1245:"BentNeedle",
    1246:"DarkEasterEgg",
    1247:"HeartGlasses",
    1248:"Blueberries",
    1249:"StrangeCoin",
    1250:"Pear",
    1251:"Plum",
    1252:"Cherry",
    1253:"GoldenDeliciousApple",
    1254:"DarkPetal",
    1255:"WhiteRabbitEars",
    1256:"EggshellHat",
    1257:"FlawedLens",
    1258:"Honey",
    1276:"OperaMask",
    1277:"JesterMask",
    1278:"WitchHat",
    1279:"GoblinMask",
    1280:"Scissors",
    1281:"ShockSweet",
    1282:"BoneArrows",
    2050:"RedCottonShirt",
    2051:"GreenCottonShirt",
    2052:"DarkBlueCottonShirt",
    2053:"YellowCottonShirt",
    2054:"LightBlueCottonShirt",
    2055:"PinkCottonShirt",
    2056:"BlackCottonShirt",
    2057:"OrangeCottonShirt",
    2058:"PurpleCottonShirt",
    2059:"DarkGreenCottonShirt",
    2060:"RedVNeckSweater",
    2061:"GreenVNeckSweater",
    2062:"DarkBlueVNeckSweater",
    2063:"YellowVNeckSweater",
    2064:"LightBlueVNeckSweater",
    2065:"PinkVNeckSweater",
    2066:"BlackVNeckSweater",
    2067:"OrangeVNeckSweater",
    2068:"PurpleVNeckSweater",
    2069:"DarkGreenVNeckSweater",
    2070:"RedTurtleneckSweater",
    2071:"GreenTurtleneckSweater",
    2072:"DarkBlueTurtleneckSweater",
    2073:"YellowTurtleneckSweater",
    2074:"LightBlueTurtleneckSweater",
    2075:"PinkTurtleneckSweater",
    2076:"BlackTurtleneckSweater",
    2077:"OrangeTurtleneckSweater",
    2078:"PurpleTurtleneckSweater",
    2079:"DarkGreenTurtleneckSweater",
    2080:"RedSilkRobe",
    2081:"GreenSilkRobe",
    2082:"DarkBlueSilkRobe",
    2083:"YellowSilkRobe",
    2084:"LightBlueSilkRobe",
    2085:"PinkSilkRobe",
    2086:"BlackSilkRobe",
    2087:"OrangeSilkRobe",
    2088:"PurpleSilkRobe",
    2089:"DarkGreenSilkRobe",
    2090:"RedTankTop",
    2091:"GreenTankTop",
    2092:"DarkBlueTankTop",
    2093:"YellowTankTop",
    2094:"LightBlueTankTop",
    2095:"PinkTankTop",
    2096:"BlackTankTop",
    2097:"OrangeTankTop",
    2098:"PurpleTankTop",
    2099:"DarkGreenTankTop",
    2100:"RedCottonSkirt",
    2101:"GreenCottonSkirt",
    2102:"DarkBlueCottonSkirt",
    2103:"YellowCottonSkirt",
    2104:"LightBlueCottonSkirt",
    2105:"PinkCottonSkirt",
    2106:"BlackCottonSkirt",
    2107:"OrangeCottonSkirt",
    2108:"PurpleCottonSkirt",
    2109:"DarkGreenCottonSkirt",
    2110:"RedCottonShorts",
    2111:"GreenCottonShorts",
    2112:"DarkBlueCottonShorts",
    2113:"YellowCottonShorts",
    2114:"LightBlueCottonShorts",
    2115:"PinkCottonShorts",
    2116:"BlackCottonShorts",
    2117:"OrangeCottonShorts",
    2118:"PurpleCottonShorts",
    2119:"DarkGreenCottonShorts",
    2120:"RedShortTankTop",
    2121:"GreenShortTankTop",
    2122:"DarkBlueShortTankTop",
    2123:"YellowShortTankTop",
    2124:"LightBlueShortTankTop",
    2125:"PinkShortTankTop",
    2126:"BlackShortTankTop",
    2127:"OrangeShortTankTop",
    2128:"PurpleShortTankTop",
    2129:"DarkGreenShortTankTop",
    2130:"RedDesertHat",
    2131:"GreenDesertHat",
    2132:"DarkBlueDesertHat",
    2133:"YellowDesertHat",
    2134:"LightBlueDesertHat",
    2135:"PinkDesertHat",
    2136:"BlackDesertHat",
    2137:"OrangeDesertHat",
    2138:"PurpleDesertHat",
    2139:"DarkGreenDesertHat",
    2140:"RedCottonHeadband",
    2141:"GreenCottonHeadband",
    2142:"DarkBlueCottonHeadband",
    2143:"YellowCottonHeadband",
    2144:"LightBlueCottonHeadband",
    2145:"PinkCottonHeadband",
    2146:"BlackCottonHeadband",
    2147:"OrangeCottonHeadband",
    2148:"PurpleCottonHeadband",
    2149:"DarkGreenCottonHeadband",
    2150:"RedCottonBoots",
    2151:"GreenCottonBoots",
    2152:"DarkBlueCottonBoots",
    2153:"YellowCottonBoots",
    2154:"LightBlueCottonBoots",
    2155:"PinkCottonBoots",
    2156:"BlackCottonBoots",
    2157:"OrangeCottonBoots",
    2158:"PurpleCottonBoots",
    2159:"DarkGreenCottonBoots",
    2160:"RedCottonGloves",
    2161:"GreenCottonGloves",
    2162:"DarkBlueCottonGloves",
    2163:"YellowCottonGloves",
    2164:"LightBlueCottonGloves",
    2165:"PinkCottonGloves",
    2166:"BlackCottonGloves",
    2167:"OrangeCottonGloves",
    2168:"PurpleCottonGloves",
    2169:"DarkGreenCottonGloves",
    2170:"RedMiniskirt",
    2171:"GreenMiniskirt",
    2172:"DarkBlueMiniskirt",
    2173:"YellowMiniskirt",
    2174:"LightBlueMiniskirt",
    2175:"PinkMiniskirt",
    2176:"BlackMiniskirt",
    2177:"OrangeMiniskirt",
    2178:"PurpleMiniskirt",
    2179:"DarkGreenMiniskirt",
    2180:"RedCottonTrousers",
    2181:"GreenCottonTrousers",
    2182:"DarkBlueCottonTrousers",
    2183:"YellowCottonTrousers",
    2184:"LightBlueCottonTrousers",
    2185:"PinkCottonTrousers",
    2186:"BlackCottonTrousers",
    2187:"OrangeCottonTrousers",
    2188:"PurpleCottonTrousers",
    2189:"DarkGreenCottonTrousers",
    2190:"RedRabbitEars",
    2191:"GreenRabbitEars",
    2192:"DarkBlueRabbitEars",
    2193:"YellowRabbitEars",
    2194:"LightBlueRabbitEars",
    2195:"PinkRabbitEars",
    2196:"BlackRabbitEars",
    2197:"OrangeRabbitEars",
    2198:"PurpleRabbitEars",
    2199:"DarkGreenRabbitEars",
    2200:"RedWizardHat",
    2201:"GreenWizardHat",
    2202:"DarkBlueWizardHat",
    2203:"YellowWizardHat",
    2204:"LightBlueWizardHat",
    2205:"PinkWizardHat",
    2206:"BlackWizardHat",
    2207:"OrangeWizardHat",
    2208:"PurpleWizardHat",
    2209:"DarkGreenWizardHat",
    2210:"RedBowlerHat",
    2211:"GreenBowlerHat",
    2212:"DarkBlueBowlerHat",
    2213:"YellowBowlerHat",
    2214:"LightBlueBowlerHat",
    2215:"PinkBowlerHat",
    2216:"BlackBowlerHat",
    2217:"OrangeBowlerHat",
    2218:"PurpleBowlerHat",
    2219:"DarkGreenBowlerHat",
    2220:"RedSorcererRobeRed",
    2221:"GreenSorcererRobeRed",
    2222:"DarkBlueSorcererRobeRed",
    2223:"YellowSorcererRobeRed",
    2224:"LightBlueSorcererRobeRed",
    2225:"PinkSorcererRobeRed",
    2226:"BlackSorcererRobeRed",
    2227:"OrangeSorcererRobeRed",
    2228:"PurpleSorcererRobeRed",
    2229:"DarkGreenSorcererRobeRed",
    2230:"RedBowlerHatBrown",
    2231:"GreenBowlerHatBrown",
    2232:"DarkBlueBowlerHatBrown",
    2233:"YellowBowlerHatBrown",
    2234:"LightBlueBowlerHatBrown",
    2235:"PinkBowlerHatBrown",
    2236:"BlackBowlerHatBrown",
    2237:"OrangeBowlerHatBrown",
    2238:"PurpleBowlerHatBrown",
    2239:"DarkGreenBowlerHatBrown",
    2240:"FineRedDress",
    2241:"FineGreenDress",
    2242:"FineDarkBlueDress",
    2243:"FineYellowDress",
    2244:"FineLightBlueDress",
    2245:"FinePinkDress",
    2246:"FineBlackDress",
    2247:"FineOrangeDress",
    2248:"FinePurpleDress",
    2249:"FineDarkGreenDress",
    2250:"RedCottonCloth",
    2251:"GreenCottonCloth",
    2252:"DarkBlueCottonCloth",
    2253:"YellowCottonCloth",
    2254:"LightBlueCottonCloth",
    2255:"PinkCottonCloth",
    2256:"BlackCottonCloth",
    2257:"OrangeCottonCloth",
    2258:"PurpleCottonCloth",
    2259:"DarkGreenCottonCloth",
    3000:"JackOLantern",
    3001:"RubberBat",
    3002:"RealisticBrain",
    3003:"JarofBlood",
    3004:"Tongue",
    3006:"TonoriDelight",
    3007:"Marshmallow",
    3009:"JellySkull",
    3010:"CandyPumpkin",
    3011:"PumpkinSeeds",
    4000:"AngryScorpionStinger",
    4001:"Coal",
    4002:"Diamond",
    4003:"Ruby",
    4004:"Emerald",
    4005:"Sapphire",
    4006:"Topaz",
    4007:"Amethyst",
    4008:"DiamondRing",
    4009:"RubyRing",
    4010:"EmeraldRing",
    4011:"SapphireRing",
    4012:"TopazRing",
    4013:"AmethystRing",
    4014:"SimpleRing",
    4015:"IronIngot",
    4016:"BanditHood",
    4017:"RedPowder",
    4018:"YellowPowder",
    4019:"BluePowder",
    4020:"CandleHelmet",
    4021:"YellowPresentBox",
    4022:"WhitePresentBox",
    4023:"AnimalBones",
    4024:"FrozenYetiTear",
    4025:"YetiClaw",
    4026:"IceCube",
    4027:"YetiMask",
    4028:"WizardHat",
    4029:"GrimaceOfDementia",
    4030:"BowlerHat",
    4031:"Monocle",
    4032:"PanHat",
    4033:"ChefHat",
    4034:"BlackPearl",
    4035:"PickledBeets",
    4036:"RoastedAcorn",
    4037:"WhiteBlanket",
    4038:"WhiteSaddleRug",
    4039:"RedSaddleRug",
    4040:"RawTalisman",
    4041:"FlightTalisman",
    4042:"RedNose",
    5000:"RedSorcererRobeGreen",
    5001:"GreenSorcererRobeGreen",
    5002:"DarkBlueSorcererRobeGreen",
    5003:"YellowSorcererRobeGreen",
    5004:"LightBlueSorcererRobeGreen",
    5005:"PinkSorcererRobeGreen",
    5006:"BlackSorcererRobeGreen",
    5007:"OrangeSorcererRobeGreen",
    5008:"PurpleSorcererRobeGreen",
    5009:"DarkGreenSorcererRobeGreen",
    5010:"SorcererRobeGreen",
    5011:"RedSorcererRobeDarkBlue",
    5012:"GreenSorcererRobeDarkBlue",
    5013:"DarkBlueSorcererRobeDarkBlue",
    5014:"YellowSorcererRobeDarkBlue",
    5015:"LightBlueSorcererRobeDarkBlue",
    5016:"PinkSorcererRobeDarkBlue",
    5017:"BlackSorcererRobeDarkBlue",
    5018:"OrangeSorcererRobeDarkBlue",
    5019:"PurpleSorcererRobeDarkBlue",
    5020:"DarkGreenSorcererRobeDarkBlue",
    5021:"SorcererRobeDarkBlue",
    5022:"RedSorcererRobeYellow",
    5023:"GreenSorcererRobeYellow",
    5024:"DarkBlueSorcererRobeYellow",
    5025:"YellowSorcererRobeYellow",
    5026:"LightBlueSorcererRobeYellow",
    5027:"PinkSorcererRobeYellow",
    5028:"BlackSorcererRobeYellow",
    5029:"OrangeSorcererRobeYellow",
    5030:"PurpleSorcererRobeYellow",
    5031:"DarkGreenSorcererRobeYellow",
    5032:"SorcererRobeYellow",
    5033:"RedSorcererRobeLightBlue",
    5034:"GreenSorcererRobeLightBlue",
    5035:"DarkBlueSorcererRobeLightBlue",
    5036:"YellowSorcererRobeLightBlue",
    5037:"LightBlueSorcererRobeLightBlue",
    5038:"PinkSorcererRobeLightBlue",
    5039:"BlackSorcererRobeLightBlue",
    5040:"OrangeSorcererRobeLightBlue",
    5041:"PurpleSorcererRobeLightBlue",
    5042:"DarkGreenSorcererRobeLightBlue",
    5043:"SorcererRobeLightBlue",
    5044:"RedSorcererRobePink",
    5045:"GreenSorcererRobePink",
    5046:"DarkBlueSorcererRobePink",
    5047:"YellowSorcererRobePink",
    5048:"LightBlueSorcererRobePink",
    5049:"PinkSorcererRobePink",
    5050:"BlackSorcererRobePink",
    5051:"OrangeSorcererRobePink",
    5052:"PurpleSorcererRobePink",
    5053:"DarkGreenSorcererRobePink",
    5054:"SorcererRobePink",
    5055:"RedSorcererRobeBlack",
    5056:"GreenSorcererRobeBlack",
    5057:"DarkBlueSorcererRobeBlack",
    5058:"YellowSorcererRobeBlack",
    5059:"LightBlueSorcererRobeBlack",
    5060:"PinkSorcererRobeBlack",
    5061:"BlackSorcererRobeBlack",
    5062:"OrangeSorcererRobeBlack",
    5063:"PurpleSorcererRobeBlack",
    5064:"DarkGreenSorcererRobeBlack",
    5065:"SorcererRobeBlack",
    5066:"RedSorcererRobeOrange",
    5067:"GreenSorcererRobeOrange",
    5068:"DarkBlueSorcererRobeOrange",
    5069:"YellowSorcererRobeOrange",
    5070:"LightBlueSorcererRobeOrange",
    5071:"PinkSorcererRobeOrange",
    5072:"BlackSorcererRobeOrange",
    5073:"OrangeSorcererRobeOrange",
    5074:"PurpleSorcererRobeOrange",
    5075:"DarkGreenSorcererRobeOrange",
    5076:"SorcererRobeOrange",
    5077:"RedSorcererRobePurple",
    5078:"GreenSorcererRobePurple",
    5079:"DarkBlueSorcererRobePurple",
    5080:"YellowSorcererRobePurple",
    5081:"LightBlueSorcererRobePurple",
    5082:"PinkSorcererRobePurple",
    5083:"BlackSorcererRobePurple",
    5084:"OrangeSorcererRobePurple",
    5085:"PurpleSorcererRobePurple",
    5086:"DarkGreenSorcererRobePurple",
    5087:"SorcererRobePurple",
    5088:"RedSorcererRobeDarkGreen",
    5089:"GreenSorcererRobeDarkGreen",
    5090:"DarkBlueSorcererRobeDarkGreen",
    5091:"YellowSorcererRobeDarkGreen",
    5092:"LightBlueSorcererRobeDarkGreen",
    5093:"PinkSorcererRobeDarkGreen",
    5094:"BlackSorcererRobeDarkGreen",
    5095:"OrangeSorcererRobeDarkGreen",
    5096:"PurpleSorcererRobeDarkGreen",
    5097:"DarkGreenSorcererRobeDarkGreen",
    5098:"SorcererRobeDarkGreen",
    5099:"RedSorcererRobeWhite",
    5100:"GreenSorcererRobeWhite",
    5101:"DarkBlueSorcererRobeWhite",
    5102:"YellowSorcererRobeWhite",
    5103:"LightBlueSorcererRobeWhite",
    5104:"PinkSorcererRobeWhite",
    5105:"BlackSorcererRobeWhite",
    5106:"OrangeSorcererRobeWhite",
    5107:"PurpleSorcererRobeWhite",
    5108:"DarkGreenSorcererRobeWhite",
    5109:"SorcererRobeWhite",
  };
  item.nameByServerID = function(serverID) {
    return serverID in items ? items[serverID] : "UNDEFINED";
  }
  return item;
}();
