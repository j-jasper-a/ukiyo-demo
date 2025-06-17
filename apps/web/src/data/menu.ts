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
      description: "Seared salmon slices with ponzu sauce",
      price: 1500,
    },
    {
      id: 2,
      name: "Seaweed Salad",
      nameJapanese: "海藻サラダ",
      description: "Mixed seaweed salad with sesame dressing",
      price: 800,
    },
    {
      id: 3,
      name: "Shrimp Tempura",
      nameJapanese: "海老天ぷら",
      description: "Lightly battered and deep-fried shrimp",
      price: 1200,
    },
    {
      id: 4,
      name: "Sesame Crusted Tofu",
      nameJapanese: "ごま豆腐",
      description:
        "Deep-fried tofu with sesame crust, served with soy-based dipping sauce",
      price: 950,
    },
    {
      id: 5,
      name: "Chicken Yakitori",
      nameJapanese: "焼き鳥",
      description: "Skewered and grilled chicken with teriyaki glaze",
      price: 1000,
    },
    {
      id: 6,
      name: "Agedashi Eggplant",
      nameJapanese: "揚げだし茄子",
      description: "Deep-fried eggplant served with a savory dashi-based sauce",
      price: 850,
    },
    {
      id: 7,
      name: "Tuna Sashimi",
      nameJapanese: "鮪の刺身",
      description: "Fresh tuna slices served with soy sauce and wasabi",
      price: 1300,
    },
    {
      id: 8,
      name: "Vegetable Tempura",
      nameJapanese: "野菜天ぷら",
      description:
        "Assorted tempura-fried vegetables with tentsuyu dipping sauce",
      price: 900,
    },
    {
      id: 9,
      name: "Vegetarian Gyoza",
      nameJapanese: "ベジタリアン餃子",
      description: "Pan-fried dumplings filled with mixed vegetables",
      price: 1100,
    },
    {
      id: 10,
      name: "Spinach and Mushroom Chawanmushi",
      nameJapanese: "ほうれん草とキノコの茶碗蒸し",
      description:
        "Savory steamed egg custard with spinach, mushrooms, and shrimp",
      price: 700,
    },
  ],
  entrees: [
    {
      id: 1,
      name: "Chicken Katsu Donburi",
      nameJapanese: "チキンカツ丼",
      description: "Rice bowl topped with chicken cutlet, egg, and onions",
      price: 1200,
    },
    {
      id: 2,
      name: "Vegetable Teriyaki Bowl",
      nameJapanese: "野菜照り焼き丼",
      description:
        "Grilled vegetables with teriyaki sauce served over a bed of rice",
      price: 1800,
    },
    {
      id: 3,
      name: "Tofu and Vegetable Stir Fry",
      nameJapanese: "豆腐と野菜の炒め物",
      description: "Stir-fried tofu and mixed vegetables in a savory sauce",
      price: 1100,
    },
    {
      id: 4,
      name: "Vegetarian Sukiyaki",
      nameJapanese: "ベジタリアンすき焼き",
      description:
        "Hot pot dish with tofu, vegetables, and glass noodles in a sweet soy-based broth",
      price: 2000,
    },
    {
      id: 5,
      name: "Teriyaki Chicken Skewers",
      nameJapanese: "焼き鳥",
      description: "Skewered and grilled teriyaki chicken",
      price: 1000,
    },
    {
      id: 6,
      name: "Eggplant Katsu",
      nameJapanese: "ナスカツ",
      description: "Breaded and deep-fried eggplant cutlet",
      price: 1600,
    },
    {
      id: 7,
      name: "Vegetarian Tempura Udon",
      nameJapanese: "ベジタリアン天ぷらうどん",
      description:
        "Udon noodles served in a hot broth with vegetable tempura on the side",
      price: 1300,
    },
    {
      id: 8,
      name: "Okonomiyaki with Seafood",
      nameJapanese: "シーフードお好み焼き",
      description: "Japanese savory pancake with various seafood and toppings",
      price: 1100,
    },
    {
      id: 9,
      name: "Vegetarian Sushi Platter",
      nameJapanese: "ベジタリアン寿司盛り合わせ",
      description: "Assorted vegetarian sushi rolls and nigiri",
      price: 2500,
    },
    {
      id: 10,
      name: "Vegetarian Ramen",
      nameJapanese: "ベジタリアンラーメン",
      description:
        "Ramen noodles in a flavorful vegetable broth with tofu and vegetables",
      price: 1200,
    },
  ],
  sides: [
    {
      id: 1,
      name: "Edamame",
      nameJapanese: "枝豆",
      description: "Steamed and salted young soybeans",
      price: 500,
    },
    {
      id: 2,
      name: "Miso Soup",
      nameJapanese: "味噌汁",
      description:
        "Traditional Japanese soup made with dashi stock and miso paste",
      price: 300,
    },
    {
      id: 3,
      name: "Tsukemono",
      nameJapanese: "漬物",
      description: "Assorted Japanese pickles made with various vegetables",
      price: 400,
    },
    {
      id: 4,
      name: "Vegetarian Chawanmushi",
      nameJapanese: "ベジタリアン茶碗蒸し",
      description:
        "Savory steamed egg custard with various vegetarian ingredients",
      price: 700,
    },
    {
      id: 5,
      name: "Steamed Brown Rice",
      nameJapanese: "玄米ご飯",
      description: "Steamed brown rice",
      price: 200,
    },
    {
      id: 6,
      name: "Sunomono",
      nameJapanese: "酢の物",
      description: "Cucumber salad with vinegar dressing",
      price: 450,
    },
    {
      id: 7,
      name: "Stir-fried Vegetables",
      nameJapanese: "野菜炒め",
      description: "Stir-fried mixed vegetables with soy-based sauce",
      price: 650,
    },
    {
      id: 8,
      name: "Vegetarian Kimchi",
      nameJapanese: "ベジタリアンキムチ",
      description: "Spicy stir-fried vegetables with kimchi seasoning",
      price: 850,
    },
    {
      id: 9,
      name: "Wakame Salad",
      nameJapanese: "わかめサラダ",
      description: "Seaweed salad with sesame dressing",
      price: 600,
    },
    {
      id: 10,
      name: "Grilled Vegetables",
      nameJapanese: "焼き野菜",
      description: "Assorted grilled vegetables",
      price: 1200,
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Green Tea",
      nameJapanese: "緑茶",
      description: "Traditional Japanese green tea",
      price: 500,
    },
    {
      id: 2,
      name: "Non-Alcoholic Plum Tea",
      nameJapanese: "梅茶",
      description: "Non-alcoholic version of Japanese plum tea",
      price: 800,
    },
    {
      id: 3,
      name: "Hojicha",
      nameJapanese: "ほうじ茶",
      description: "Roasted green tea",
      price: 400,
    },
    {
      id: 4,
      name: "Yuzu Lemonade",
      nameJapanese: "柚子レモネード",
      description: "Refreshing lemonade with yuzu citrus flavor",
      price: 350,
    },
    {
      id: 5,
      name: "Iced Barley Tea",
      nameJapanese: "麦茶",
      description: "Barley tea served over ice",
      price: 900,
    },
    {
      id: 6,
      name: "Genmaicha Latte",
      nameJapanese: "玄米茶ラテ",
      description: "Latte made with green tea and roasted brown rice",
      price: 450,
    },
    {
      id: 7,
      name: "Amazake",
      nameJapanese: "甘酒",
      description: "Sweet, low-alcohol Japanese drink made from fermented rice",
      price: 550,
    },
    {
      id: 8,
      name: "Yuzu Soda",
      nameJapanese: "柚子ソーダ",
      description: "Sparkling soda with yuzu citrus flavor",
      price: 500,
    },
    {
      id: 9,
      name: "Iced Matcha Latte",
      nameJapanese: "アイス抹茶ラテ",
      description: "Iced latte made with matcha green tea",
      price: 850,
    },
    {
      id: 10,
      name: "Soy Milk Chai",
      nameJapanese: "豆乳チャイ",
      description: "Chai tea made with soy milk",
      price: 300,
    },
  ],
};
