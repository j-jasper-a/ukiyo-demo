export type MenuItem = {
  id: number;
  name: string;
  nameJapanese: string;
  description: string;
  price: number;
};

export type MenuSection = "starters" | "entrees" | "sides" | "beverages";

export type MenuData = Record<MenuSection, MenuItem[]>;

export const menuData: MenuData = {
  starters: [
    {
      id: 1,
      name: "Salmon Tataki",
      nameJapanese: "鮭のたたき",
      description:
        "Lightly seared salmon with house ponzu sauce and daikon garnish",
      price: 1800,
    },
    {
      id: 2,
      name: "Wagyu-style Beef Tataki",
      nameJapanese: "和牛風たたき",
      description: "Seared premium beef slices with citrus soy dressing",
      price: 2200,
    },
    {
      id: 3,
      name: "Scallop Carpaccio with Yuzu",
      nameJapanese: "帆立のカルパッチョ柚子風味",
      description:
        "Thinly sliced scallops dressed with yuzu citrus and olive oil",
      price: 2000,
    },
    {
      id: 4,
      name: "Shrimp Tempura",
      nameJapanese: "海老天ぷら",
      description:
        "Delicately battered shrimp fried to a golden crisp, served with tentsuyu sauce",
      price: 1600,
    },
    {
      id: 5,
      name: "Sesame Crusted Tofu",
      nameJapanese: "ごま豆腐",
      description:
        "Silky tofu coated in toasted sesame crust, served with soy-based dipping sauce",
      price: 1200,
    },
    {
      id: 6,
      name: "Chicken Yakitori Skewers",
      nameJapanese: "焼き鳥",
      description:
        "Charcoal-grilled chicken skewers glazed with sweet soy tare",
      price: 1400,
    },
    {
      id: 7,
      name: "Agedashi Eggplant",
      nameJapanese: "揚げ出し茄子",
      description: "Lightly fried eggplant served in a delicate dashi broth",
      price: 1100,
    },
    {
      id: 8,
      name: "Seasonal Vegetable Tempura",
      nameJapanese: "季節野菜の天ぷら",
      description:
        "Assorted seasonal vegetables tempura with house-made tentsuyu dipping sauce",
      price: 1300,
    },
    {
      id: 9,
      name: "Seasonal Vegetable Gyoza",
      nameJapanese: "季節野菜の餃子",
      description:
        "Pan-fried dumplings filled with a blend of fresh seasonal vegetables",
      price: 1400,
    },
    {
      id: 10,
      name: "Spinach and Mushroom Chawanmushi",
      nameJapanese: "ほうれん草と茸の茶碗蒸し",
      description:
        "Savory steamed egg custard with spinach and shiitake mushrooms",
      price: 1100,
    },
  ],
  entrees: [
    {
      id: 1,
      name: "Chicken Katsu Donburi",
      nameJapanese: "チキンカツ丼",
      description:
        "Crispy chicken cutlet served over steamed rice with egg and onions",
      price: 1600,
    },
    {
      id: 2,
      name: "Vegetable Teriyaki Bowl",
      nameJapanese: "野菜照り焼き丼",
      description:
        "Grilled seasonal vegetables glazed with house teriyaki sauce over steamed rice",
      price: 1900,
    },
    {
      id: 3,
      name: "Tofu Steak with Seasonal Vegetables",
      nameJapanese: "豆腐ステーキと季節野菜",
      description:
        "Pan-seared tofu steak served alongside seasonal vegetables in savory sauce",
      price: 1500,
    },
    {
      id: 4,
      name: "Vegetarian Sukiyaki Hot Pot",
      nameJapanese: "精進すき焼き鍋",
      description:
        "Hot pot with tofu, seasonal vegetables, and shirataki noodles in sweet soy broth",
      price: 2300,
    },
    {
      id: 5,
      name: "Teriyaki Chicken Skewers",
      nameJapanese: "焼き鳥",
      description:
        "Charcoal-grilled chicken skewers glazed with house teriyaki sauce",
      price: 1400,
    },
    {
      id: 6,
      name: "Eggplant Katsu",
      nameJapanese: "茄子カツ",
      description:
        "Crispy breaded and deep-fried eggplant cutlet served with tonkatsu sauce",
      price: 1800,
    },
    {
      id: 7,
      name: "Vegetable Tempura Udon",
      nameJapanese: "野菜天ぷらうどん",
      description:
        "Udon noodles in clear broth served with assorted vegetable tempura",
      price: 1500,
    },
    {
      id: 8,
      name: "Seafood Okonomiyaki",
      nameJapanese: "海鮮お好み焼き",
      description:
        "Savory Japanese pancake with fresh seafood and premium toppings",
      price: 1900,
    },
    {
      id: 9,
      name: "Seasonal Vegetable Sushi Platter",
      nameJapanese: "季節野菜寿司盛り合わせ",
      description:
        "Assortment of artistically prepared vegetarian sushi rolls and nigiri",
      price: 2800,
    },
    {
      id: 10,
      name: "Yasai Ramen with Umami Broth",
      nameJapanese: "旨味野菜ラーメン",
      description:
        "Hand-pulled ramen noodles in a rich vegetable broth with tofu and seasonal vegetables",
      price: 1600,
    },
  ],
  sides: [
    {
      id: 1,
      name: "Edamame",
      nameJapanese: "枝豆",
      description: "Lightly steamed young soybeans, delicately salted",
      price: 600,
    },
    {
      id: 2,
      name: "Miso Soup",
      nameJapanese: "味噌汁",
      description:
        "Traditional miso soup made with homemade dashi and silken tofu",
      price: 400,
    },
    {
      id: 3,
      name: "Tsukemono (Japanese Pickles)",
      nameJapanese: "漬物",
      description: "Assorted seasonal pickled vegetables, house-made",
      price: 500,
    },
    {
      id: 4,
      name: "Vegetarian Chawanmushi",
      nameJapanese: "精進茶碗蒸し",
      description:
        "Steamed savory egg custard with seasonal vegetarian ingredients",
      price: 1000,
    },
    {
      id: 5,
      name: "Steamed Brown Rice",
      nameJapanese: "玄米ご飯",
      description: "Nutty steamed brown rice",
      price: 350,
    },
    {
      id: 6,
      name: "Sunomono (Vinegared Salad)",
      nameJapanese: "酢の物",
      description:
        "Refreshing cucumber and seaweed salad with light vinegar dressing",
      price: 550,
    },
    {
      id: 7,
      name: "Stir-fried Seasonal Vegetables",
      nameJapanese: "季節野菜の炒め物",
      description:
        "Lightly stir-fried mixed vegetables with soy and sesame sauce",
      price: 750,
    },
    {
      id: 8,
      name: "House-Pickled Napa Cabbage",
      nameJapanese: "白菜の漬物",
      description:
        "Mildly fermented napa cabbage with traditional Japanese seasoning",
      price: 850,
    },
    {
      id: 9,
      name: "Wakame Seaweed Salad",
      nameJapanese: "わかめサラダ",
      description: "Fresh wakame seaweed salad with toasted sesame dressing",
      price: 650,
    },
    {
      id: 10,
      name: "Grilled Seasonal Vegetables",
      nameJapanese: "焼き野菜",
      description: "Assortment of seasonal vegetables grilled to perfection",
      price: 1300,
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Green Tea",
      nameJapanese: "緑茶",
      description: "Premium Japanese green tea, served hot",
      price: 600,
    },
    {
      id: 2,
      name: "Non-Alcoholic Plum Tea",
      nameJapanese: "梅茶",
      description: "Refreshing chilled plum tea with natural sweetness",
      price: 900,
    },
    {
      id: 3,
      name: "Hojicha",
      nameJapanese: "ほうじ茶",
      description: "Roasted green tea with a nutty aroma, served hot",
      price: 550,
    },
    {
      id: 4,
      name: "Yuzu Lemonade",
      nameJapanese: "柚子レモネード",
      description: "Fresh lemonade infused with yuzu citrus flavor",
      price: 500,
    },
    {
      id: 5,
      name: "Iced Barley Tea",
      nameJapanese: "麦茶",
      description: "Chilled roasted barley tea, a traditional thirst quencher",
      price: 850,
    },
    {
      id: 6,
      name: "Genmaicha Latte",
      nameJapanese: "玄米茶ラテ",
      description: "Creamy latte blending green tea and roasted brown rice",
      price: 650,
    },
    {
      id: 7,
      name: "Amazake",
      nameJapanese: "甘酒",
      description: "Sweet, non-alcoholic fermented rice drink, served warm",
      price: 700,
    },
    {
      id: 8,
      name: "Yuzu Soda",
      nameJapanese: "柚子ソーダ",
      description: "Sparkling soda flavored with fresh yuzu citrus",
      price: 600,
    },
    {
      id: 9,
      name: "Iced Matcha Latte",
      nameJapanese: "アイス抹茶ラテ",
      description: "Chilled latte made with premium matcha green tea",
      price: 1000,
    },
    {
      id: 10,
      name: "Matcha Soy Latte",
      nameJapanese: "抹茶豆乳ラテ",
      description: "Smooth latte blending matcha and creamy soy milk",
      price: 850,
    },
  ],
};
