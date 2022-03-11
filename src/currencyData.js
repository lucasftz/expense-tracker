// length 164
const currency_list = {
  "Afghan Afghani": "AFA",
  "Albanian Lek": "ALL",
  "Algerian Dinar": "DZD",
  "Angolan Kwanza": "AOA",
  "Argentine Peso": "ARS",
  "Armenian Dram": "AMD",
  "Aruban Florin": "AWG",
  "Australian Dollar": "AUD",
  "Azerbaijani Manat": "AZN",
  "Bahamian Dollar": "BSD",
  "Bahraini Dinar": "BHD",
  "Bangladeshi Taka": "BDT",
  "Barbadian Dollar": "BBD",
  "Belarusian Ruble": "BYR",
  "Belgian Franc": "BEF",
  "Belize Dollar": "BZD",
  "Bermudan Dollar": "BMD",
  "Bhutanese Ngultrum": "BTN",
  "Bitcoin": "BTC",
  "Bolivian Boliviano": "BOB",
  "Bosnia-Herzegovina Convertible Mark": "BAM",
  "Botswanan Pula": "BWP",
  "Brazilian Real": "BRL",
  "British Pound Sterling": "GBP",
  "Brunei Dollar": "BND",
  "Bulgarian Lev": "BGN",
  "Burundian Franc": "BIF",
  "Cambodian Riel": "KHR",
  "Canadian Dollar": "CAD",
  "Cape Verdean Escudo": "CVE",
  "Cayman Islands Dollar": "KYD",
  "CFA Franc BCEAO": "XOF",
  "CFA Franc BEAC": "XAF",
  "CFP Franc": "XPF",
  "Chilean Peso": "CLP",
  "Chinese Yuan": "CNY",
  "Colombian Peso": "COP",
  "Comorian Franc": "KMF",
  "Congolese Franc": "CDF",
  "Costa Rican ColÃ³n": "CRC",
  "Croatian Kuna": "HRK",
  "Cuban Convertible Peso": "CUC",
  "Czech Republic Koruna": "CZK",
  "Danish Krone": "DKK",
  "Djiboutian Franc": "DJF",
  "Dominican Peso": "DOP",
  "East Caribbean Dollar": "XCD",
  "Egyptian Pound": "EGP",
  "Eritrean Nakfa": "ERN",
  "Estonian Kroon": "EEK",
  "Ethiopian Birr": "ETB",
  "Euro": "EUR",
  "Falkland Islands Pound": "FKP",
  "Fijian Dollar": "FJD",
  "Gambian Dalasi": "GMD",
  "Georgian Lari": "GEL",
  "German Mark": "DEM",
  "Ghanaian Cedi": "GHS",
  "Gibraltar Pound": "GIP",
  "Greek Drachma": "GRD",
  "Guatemalan Quetzal": "GTQ",
  "Guinean Franc": "GNF",
  "Guyanaese Dollar": "GYD",
  "Haitian Gourde": "HTG",
  "Honduran Lempira": "HNL",
  "Hong Kong Dollar": "HKD",
  "Hungarian Forint": "HUF",
  "Icelandic KrÃ³na": "ISK",
  "Indian Rupee": "INR",
  "Indonesian Rupiah": "IDR",
  "Iranian Rial": "IRR",
  "Iraqi Dinar": "IQD",
  "Israeli New Sheqel": "ILS",
  "Italian Lira": "ITL",
  "Jamaican Dollar": "JMD",
  "Japanese Yen": "JPY",
  "Jordanian Dinar": "JOD",
  "Kazakhstani Tenge": "KZT",
  "Kenyan Shilling": "KES",
  "Kuwaiti Dinar": "KWD",
  "Kyrgystani Som": "KGS",
  "Laotian Kip": "LAK",
  "Latvian Lats": "LVL",
  "Lebanese Pound": "LBP",
  "Lesotho Loti": "LSL",
  "Liberian Dollar": "LRD",
  "Libyan Dinar": "LYD",
  "Lithuanian Litas": "LTL",
  "Macanese Pataca": "MOP",
  "Macedonian Denar": "MKD",
  "Malagasy Ariary": "MGA",
  "Malawian Kwacha": "MWK",
  "Malaysian Ringgit": "MYR",
  "Maldivian Rufiyaa": "MVR",
  "Mauritanian Ouguiya": "MRO",
  "Mauritian Rupee": "MUR",
  "Mexican Peso": "MXN",
  "Moldovan Leu": "MDL",
  "Mongolian Tugrik": "MNT",
  "Moroccan Dirham": "MAD",
  "Mozambican Metical": "MZM",
  "Myanmar Kyat": "MMK",
  "Namibian Dollar": "NAD",
  "Nepalese Rupee": "NPR",
  "Netherlands Antillean Guilder": "ANG",
  "New Taiwan Dollar": "TWD",
  "New Zealand Dollar": "NZD",
  "Nicaraguan CÃ³rdoba": "NIO",
  "Nigerian Naira": "NGN",
  "North Korean Won": "KPW",
  "Norwegian Krone": "NOK",
  "Omani Rial": "OMR",
  "Pakistani Rupee": "PKR",
  "Panamanian Balboa": "PAB",
  "Papua New Guinean Kina": "PGK",
  "Paraguayan Guarani": "PYG",
  "Peruvian Nuevo Sol": "PEN",
  "Philippine Peso": "PHP",
  "Polish Zloty": "PLN",
  "Qatari Rial": "QAR",
  "Romanian Leu": "RON",
  "Russian Ruble": "RUB",
  "Rwandan Franc": "RWF",
  "Salvadoran ColÃ³n": "SVC",
  "Samoan Tala": "WST",
  "Saudi Riyal": "SAR",
  "Serbian Dinar": "RSD",
  "Seychellois Rupee": "SCR",
  "Sierra Leonean Leone": "SLL",
  "Singapore Dollar": "SGD",
  "Slovak Koruna": "SKK",
  "Solomon Islands Dollar": "SBD",
  "Somali Shilling": "SOS",
  "South African Rand": "ZAR",
  "South Korean Won": "KRW",
  "Special Drawing Rights": "XDR",
  "Sri Lankan Rupee": "LKR",
  "St. Helena Pound": "SHP",
  "Sudanese Pound": "SDG",
  "Surinamese Dollar": "SRD",
  "Swazi Lilangeni": "SZL",
  "Swedish Krona": "SEK",
  "Swiss Franc": "CHF",
  "Syrian Pound": "SYP",
  "São Tomé and Príncipe Dobra": "STD",
  "Tajikistani Somoni": "TJS",
  "Tanzanian Shilling": "TZS",
  "Thai Baht": "THB",
  "Tongan Pa'anga": "TOP",
  "Trinidad & Tobago Dollar": "TTD",
  "Tunisian Dinar": "TND",
  "Turkish Lira": "TRY",
  "Turkmenistani Manat": "TMT",
  "Ugandan Shilling": "UGX",
  "Ukrainian Hryvnia": "UAH",
  "United Arab Emirates Dirham": "AED",
  "Uruguayan Peso": "UYU",
  "US Dollar": "USD",
  "Uzbekistan Som": "UZS",
  "Vanuatu Vatu": "VUV",
  "Venezuelan BolÃvar": "VEF",
  "Vietnamese Dong": "VND",
  "Yemeni Rial": "YER",
  "Zambian Kwacha": "ZMK"
};

export default currency_list