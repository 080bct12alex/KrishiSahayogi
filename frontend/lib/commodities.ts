export const PRICE_COMMODITIES = [
    'Tomato Big(Nepali)', 'Tomato Small(Local)', 'Potato Red', 'Potato White', 'Onion Dry (Indian)',
    'Carrot(Local)', 'Cabbage(Local)', 'Cauli Local', 'Raddish Red', 'Raddish White(Local)',
    'Brinjal Long', 'Brinjal Round', 'Cow pea(Long)', 'Green Peas', 'French Bean(Local)',
    'Soyabean Green', 'Bitter Gourd', 'Bottle Gourd', 'Pointed Gourd(Local)', 'Snake Gourd',
    'Smooth Gourd', 'Sponge Gourd', 'Pumpkin', 'Squash(Long)', 'Turnip', 'Okara', 'Christophine',
    'Brd Leaf Mustard', 'Spinach Leaf', 'Cress Leaf', 'Mustard Leaf', 'Fenugreek Leaf',
    'Onion Green', 'Mushroom(Kanya)', 'Asparagus', 'Neuro', 'Brocauli', 'Sugarbeet', 'Drumstick',
    'Red Cabbbage', 'Lettuce', 'Celery', 'Parseley', 'Fennel Leaf', 'Mint', 'Turnip A',
    'Tamarind', 'Bamboo Shoot', 'Tofu', 'Gundruk', 'Apple(Jholey)', 'Banana', 'Lime',
    'Pomegranate', 'Mango(Maldah)', 'Grapes(Green)', 'Water Melon(Green)', 'Sweet Orange',
    'Pineapple', 'Cucumber(Local)', 'Jack Fruit', 'Papaya(Nepali)', 'Sugarcane', 'Ginger',
    'Chilli Dry', 'Chilli Green', 'Capsicum', 'Garlic Green', 'Coriander Green',
    'Garlic Dry Chinese', 'Garlic Dry Nepali', 'Clive Dry', 'Clive Green', 'Fish Fresh',
    'Arum', 'Maize', 'Sweet Lime', 'Guava', 'Mombin', 'Barela', 'Lemon', 'Sword Bean',
    'Orange(Nepali)', 'Bakula', 'Yam', 'Sweet Potato', 'Mandarin', 'Knolkhol', 'Cauli Terai',
    'Kinnow', 'Strawberry', 'Bauhania flower', 'Pear(Local)', 'Litchi(Local)', 'Musk Melon',
    'Tomato Small(Tunnel)', 'Potato Red(Indian)', 'Mushroom(Button)', 'Apple(Fuji)',
    'Cucumber(Hybrid)', 'Chilli Green(Bullet)', 'Chilli Green(Machhe)', 'Chilli Green(Akbare)',
    'Fish Fresh(Rahu)', 'Fish Fresh(Bachuwa)', 'Fish Fresh(Chhadi)', 'Fish Fresh(Mungari)',
    'Raddish White(Hybrid)', 'Cowpea(Short)', 'French Bean(Hybrid)', 'French Bean(Rajma)',
    'Squash(Round)', 'Mango(Dushari)', 'Water Melon(Dotted)', 'Papaya(Indian)', 'Litchi(Indian)',
    'Cabbage', 'Potato Red(Mude)', 'Tomato Big(Indian)', 'Pear(Chinese)', 'Tomato Small(Indian)',
    'Orange(Indian)', 'Carrot(Terai)', 'Tomato Small(Terai)', 'Onion Dry (Chinese)',
    'Cabbage(Terai)', 'Cauli Local(Jyapu)', 'Pointed Gourd(Terai)', 'Grapes(Black)', 'Kiwi',
    'Mango(Calcutte)', 'Mango(Chousa)', 'Sarifa', 'Avocado', 'Amla', 'Tree Tomato'
];

// Map crop prediction to valid price commodity with defaults
export const mapToPriceCommodity = (predictedCrop: string): string => {
    const cropLower = predictedCrop.toLowerCase();

    // 1. Direct Explicit Mappings (Priority Overrides)
    const explicitMappings: Record<string, string> = {
        // Fruits
        'papaya': 'Papaya(Nepali)',
        'apple': 'Apple(Jholey)',
        'banana': 'Banana',
        'grapes': 'Grapes(Green)',
        'pomegranate': 'Pomegranate',
        'mango': 'Mango(Maldah)',
        'muskmelon': 'Musk Melon',
        'watermelon': 'Water Melon(Green)',
        'orange': 'Orange(Nepali)',
        'coconut': 'Sugarcane',

        'garlic': 'Garlic Dry Nepali',
        'ginger': 'Ginger',
        'onion': 'Onion Dry (Indian)',
        'potato': 'Potato Red',
        'tomato': 'Tomato Big(Nepali)',

        'chickpea': 'Cow pea(Long)',
        'kidneybeans': 'French Bean(Rajma)',
        'pigeonpeas': 'Cow pea(Long)',
        'mungbean': 'Soyabean Green',
        'blackgram': 'Soyabean Green',
        'lentil': 'Cow pea(Long)',
        'mothbeans': 'Cow pea(Long)',

        // Cash Crops
        'sugarcane': 'Sugarcane',
        'maize': 'Maize',

        // Note: Rice/Paddy, Wheat, Cotton, Jute, Coffee are NOT in the standard dataset
        // and will default to unavailable or fuzzy matches if added later.
    };

    if (explicitMappings[cropLower]) {
        return explicitMappings[cropLower];
    }

    const match = PRICE_COMMODITIES.find(c => c.toLowerCase().includes(cropLower));
    if (match) return match;

    return predictedCrop;
};
