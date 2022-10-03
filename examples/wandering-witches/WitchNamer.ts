import INamer from '../../src/interfaces/INamer'
import random from 'random'

const baseNames: string[] = [
    "Abutilon",
    "Acacia",
    "Aconite",
    "Agapanthus",
    "Alchemilla",
    "Alstroemeria",
    "Amaryllis",
    "Amaranth",
    "Amsonia",
    "Anenome",
    "Anise",
    "Aquilegia",
    "Armeria",
    "Asagao",
    "Aster",
    "Azalea",
    "Ballota",
    "Begonia",
    "Bellflower",
    "Bergamot",
    "Bergenia",
    "Billbergia",
    "Blazing Star",
    "Bleeding Heart",
    "Bletilla",
    "Bluebell",
    "Bluebonnet",
    "Bluestar",
    "Bottlebrush",
    "Bouvardia",
    "Brachyscome",
    "Brassica",
    "Buttercup",
    "Calceolaria",
    "Calendula",
    "Camellia",
    "Candytuft",
    "Cannabis",
    "Cardinal",
    "Carnation",
    "Catmint",
    "Catnip",
    "Celosia",
    "Cerastium",
    "Cherry",
    "Chicory",
    "Chionodoxa",
    "Chrysanthemum",
    "Cinquefoil",
    "Clarkia",
    "Clematis",
    "Clover",
    "Coneflower",
    "Coral",
    "Cornflower",
    "Corydalis",
    "Cosmos",
    "Cotoneaster",
    "Crabgrass",
    "Crocosmia",
    "Crocus",
    "Cyclamen",
    "Daffodil",
    "Dahlia",
    "Daisy",
    "Dandelion",
    "Daphne",
    "Daylily",
    "Decumaria",
    "Delphinium",
    "Deutzia",
    "Dianella",
    "Dianthus",
    "Diascia",
    "Dicentra",
    "Dogwood",
    "Echinacea",
    "Erica",
    "Erigeron",
    "Euphorbia",
    "Eustoma",
    "Feverfew",
    "Firethorn",
    "Flax",
    "Forget-Me-Not",
    "Forsythia",
    "Foxglove",
    "Freesia",
    "Fuchsia",
    "Gaillardia",
    "Gardenia",
    "Gazania",
    "Geranium",
    "Gladiolas",
    "Goldenrod",
    "Guzmania",
    "Hawthorn",
    "Heliotrope",
    "Helichrysum",
    "Hellebore",
    "Hibiscus",
    "Holly",
    "Hollyhock",
    "Honeysuckle",
    "Hosta",
    "Hyacinth",
    "Hydrangea",
    "Hyssop",
    "Iberis",
    "Impatiens",
    "Indica",
    "Ipomoea",
    "Iris",
    "Ivy",
    "Ixia",
    "Ixora",
    "Jasmine",
    "Kalmia",
    "Kinmokusei",
    "Knautia",
    "Kniphofia",
    "Kudzu",
    "Lantana",
    "Larkspur",
    "Lavatera",
    "Lavender",
    "Leadwort",
    "Lewesia",
    "Lilac",
    "Lily",
    "Lotus",
    "Linaria",
    "Lunaria",
    "Magnolia",
    "Mandevilla",
    "Matthiola",
    "Marigold",
    "Mimosa",
    "Mirabilis",
    "Momo",
    "Moonflower",
    "Moraea",
    "Morning Glory",
    "Narcissus",
    "Nasturtium",
    "Nemesia",
    "Nemophila",
    "Nerine",
    "Nierembergia",
    "Nightshade",
    "Nolana",
    "Oleander",
    "Olearia",
    "Orchid",
    "Ornithogalum",
    "Oxalis",
    "Oxeye",
    "Pansy",
    "Parodia",
    "Parsley",
    "Passionflower",
    "Peony",
    "Pelargonium",
    "Pennyroyal",
    "Periwinkle",
    "Petunia",
    "Phlox",
    "Photinia",
    "Physostegia",
    "Poinsettia",
    "Polyanthus",
    "Poppy",
    "Potentilla",
    "Primrose",
    "Quince",
    "Rose",
    "Rosemary",
    "Sage",
    "Sakura",
    "Sapling",
    "Sativa",
    "Scaevola",
    "Scilla",
    "Silene",
    "Snapdragon",
    "Snowdrop",
    "Snowflake",
    "Soapwort",
    "Statice",
    "Starflower",
    "Sunflower",
    "Sweet Pea",
    "Thalia",
    "Thistle",
    "Tithonia",
    "Toadflax",
    "Triteleia",
    "Tritonia",
    "Tulip",
    "Ume",
    "Ursinia",
    "Valerian",
    "Verbena",
    "Viola",
    "Wallflower",
    "Watsonia",
    "Wedelia",
    "Weigela",
    "Wishbone",
    "Xanthoceras",
    "Xerophyllum",
    "Xylosma",
    "Yarrow",
    "Zenobia",
    "Zinnia"
]

const adjectives: string[] = [
    "Adept",
    "Ambitious",
    "Amicable",
    "Approachable",
    "Azure",
    "Bright",
    "Charming",
    "Courageous",
    "Creative",
    "Determined",
    "Devoted",
    "Diligent",
    "Diplomatic",
    "Dynamic",
    "Educated",
    "Efficient",
    "Endless",
    "Fabulous",
    "Faithful",
    "Fearless",
    "Generous",
    "Glimmering",
    "Gleaming",
    "Glistening",
    "Gorgeous",
    "Helpful",
    "Imaginative",
    "Inquisitive",
    "Insightful",
    "Incredible",
    "Loving",
    "Lustrous",
    "Marvelous",
    "Passionate",
    "Persistent",
    "Plucky",
    "Philosophical",
    "Polite",
    "Powerful",
    "Proficient",
    "Remarkable",
    "Resourceful",
    "Romantic",
    "Rousing",
    "Sensible",
    "Sincere",
    "Splendid",
    "Spectacular",
    "Spellbinding",
    "Stunning",
    "Stupendous",
    "Thoughtful",
    "Twinkling",
    "Unique",
    "Valiant",
    "Verdant",
    "Vibrant",
    "Vivacious",
    "Vivid",
    "Warmhearted",
    "Willing",
    "Wise",
    "Wondrous",
    "Youthful",
]

const nameAppendages: string[] = [
    ", the {ADJ} Bard",
    ", the {ADJ} Bearer",
    ", the {ADJ} Caster",
    ", the {ADJ} Healer",
    ", the {ADJ} Jester",
    ", the {ADJ} Joker",
    ", the {ADJ} Mage",
    ", the {ADJ} Ronin",
    ", the {ADJ} Weaver",
    ", the {ADJ} Thief",
    ", the {ADJ} Duelist",
    ", the {ADJ} Champion",
    ", the {ADJ} Gladiator",
    ", the {ADJ} Hero",
    ", the {ADJ} Legend",
    ", the {ADJ} Flower",
    ", the {ADJ} Butterfly",
    ", the {ADJ} Dragon",
    ", the {ADJ} Phoenix",
    
    " of the {ADJ} Autumn",
    " of the {ADJ} Cyclone",
    " of the {ADJ} Hailstorm",
    " of the {ADJ} Rain",
    " of the {ADJ} Snow",
    " of the {ADJ} Spring",
    " of the {ADJ} Summer",
    " of the {ADJ} Thunder",
    " of the {ADJ} Thunderstorm",
    " of the {ADJ} Tornado",
    " of the {ADJ} Void",
    " of the {ADJ} Wind",
    " of the {ADJ} Volcano",
    " of the {ADJ} Hurricane",
    " of the {ADJ} Blizzard",
    " of the {ADJ} Arctic",
    " of the {ADJ} Freeze",
    " of the {ADJ} Frost",
    " of the {ADJ} Glacier",
    " of the {ADJ} Island",
    " of the {ADJ} Jungle",
    " of the {ADJ} Mountain",
    " of the {ADJ} Plains",
    " of the {ADJ} Swamp",
    " of the {ADJ} Desert",
    " of the {ADJ} Coast",
    " of the {ADJ} Sky",
    " of the {ADJ} Sea",
    " of the {ADJ} Forest",
    " of the {ADJ} Land",
    " of the {ADJ} Sky",
    " of the {ADJ} Stars",
    " of the {ADJ} Sun",
    " of the {ADJ} Moon",
    " of the {ADJ} Night",
    " of the {ADJ} Day",
    " of the {ADJ} Twilight",
    " of the {ADJ} Dawn",
    " of the {ADJ} Dusk",
    " of the {ADJ} Darkness",
    " of the {ADJ} Light",
    " of the {ADJ} Earth",
    " of the {ADJ} World"
]

export default class WitchNamer implements INamer {
    
    name(tokenId: number) {
        let name = baseNames[random.int(0,baseNames.length-1)]

        if(random.int(1,100) > 5) {
            // 95% chance to have a name appendange

            let appendage = nameAppendages[random.int(0,nameAppendages.length-1)]

            if(appendage.indexOf("ADJ") > -1) {
                appendage = appendage.replace("{ADJ}", adjectives[random.int(0, adjectives.length-1)])
            }

            name += appendage
        }

        return name
    }

    testBatch(size: number) {
        let names: string[] = []

        for(let i=0; i<size; i++) {
            names.push(this.name(i))
        }

        console.log(names)
    }
}