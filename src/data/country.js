// All countries
// length 252
const Alpha3Countries = [
  { name: "Afghanistan", alpha_3: "AFG" },
  { name: "Aland Islands", alpha_3: "ALA" },
  { name: "Albania", alpha_3: "ALB" },
  { name: "Algeria", alpha_3: "DZA" },
  { name: "American Samoa", alpha_3: "ASM" },
  { name: "Andorra", alpha_3: "AND" },
  { name: "Angola", alpha_3: "AGO" },
  { name: "Anguilla", alpha_3: "AIA" },
  { name: "Antarctica", alpha_3: "ATA" },
  { name: "Antigua and Barbuda", alpha_3: "ATG" },
  { name: "Argentina", alpha_3: "ARG" },
  { name: "Armenia", alpha_3: "ARM" },
  { name: "Aruba", alpha_3: "ABW" },
  { name: "Australia", alpha_3: "AUS" },
  { name: "Austria", alpha_3: "AUT" },
  { name: "Azerbaijan", alpha_3: "AZE" },
  { name: "Bahamas", alpha_3: "BHS" },
  { name: "Bahrain", alpha_3: "BHR" },
  { name: "Bangladesh", alpha_3: "BGD" },
  { name: "Barbados", alpha_3: "BRB" },
  { name: "Belarus", alpha_3: "BLR" },
  { name: "Belgium", alpha_3: "BEL" },
  { name: "Belize", alpha_3: "BLZ" },
  { name: "Benin", alpha_3: "BEN" },
  { name: "Bermuda", alpha_3: "BMU" },
  { name: "Bhutan", alpha_3: "BTN" },
  { name: "Bolivia", alpha_3: "BOL" },
  { name: "Bonaire, Sint Eustatius and Saba", alpha_3: "BES" },
  { name: "Bosnia and Herzegovina", alpha_3: "BIH" },
  { name: "Botswana", alpha_3: "BWA" },
  { name: "Bouvet Island", alpha_3: "BVT" },
  { name: "Brazil", alpha_3: "BRA" },
  { name: "British Indian Ocean Territory", alpha_3: "IOT" },
  { name: "Brunei Darussalam", alpha_3: "BRN" },
  { name: "Bulgaria", alpha_3: "BGR" },
  { name: "Burkina Faso", alpha_3: "BFA" },
  { name: "Burundi", alpha_3: "BDI" },
  { name: "Cambodia", alpha_3: "KHM" },
  { name: "Cameroon", alpha_3: "CMR" },
  { name: "Canada", alpha_3: "CAN" },
  { name: "Cape Verde", alpha_3: "CPV" },
  { name: "Cayman Islands", alpha_3: "CYM" },
  { name: "Central African Republic", alpha_3: "CAF" },
  { name: "Chad", alpha_3: "TCD" },
  { name: "Chile", alpha_3: "CHL" },
  { name: "China", alpha_3: "CHN" },
  { name: "Christmas Island", alpha_3: "CXR" },
  { name: "Cocos (Keeling) Islands", alpha_3: "CCK" },
  { name: "Colombia", alpha_3: "COL" },
  { name: "Comoros", alpha_3: "COM" },
  { name: "Congo", alpha_3: "COG" },
  { name: "Congo, Democratic Republic of the Congo", alpha_3: "COD" },
  { name: "Cook Islands", alpha_3: "COK" },
  { name: "Costa Rica", alpha_3: "CRI" },
  { name: "Cote D'Ivoire", alpha_3: "CIV" },
  { name: "Croatia", alpha_3: "HRV" },
  { name: "Cuba", alpha_3: "CUB" },
  { name: "Curacao", alpha_3: "CUW" },
  { name: "Cyprus", alpha_3: "CYP" },
  { name: "Czech Republic", alpha_3: "CZE" },
  { name: "Denmark", alpha_3: "DNK" },
  { name: "Djibouti", alpha_3: "DJI" },
  { name: "Dominica", alpha_3: "DMA" },
  { name: "Dominican Republic", alpha_3: "DOM" },
  { name: "Ecuador", alpha_3: "ECU" },
  { name: "Egypt", alpha_3: "EGY" },
  { name: "El Salvador", alpha_3: "SLV" },
  { name: "Equatorial Guinea", alpha_3: "GNQ" },
  { name: "Eritrea", alpha_3: "ERI" },
  { name: "Estonia", alpha_3: "EST" },
  { name: "Ethiopia", alpha_3: "ETH" },
  { name: "Falkland Islands (Malvinas)", alpha_3: "FLK" },
  { name: "Faroe Islands", alpha_3: "FRO" },
  { name: "Fiji", alpha_3: "FJI" },
  { name: "Finland", alpha_3: "FIN" },
  { name: "France", alpha_3: "FRA" },
  { name: "French Guiana", alpha_3: "GUF" },
  { name: "French Polynesia", alpha_3: "PYF" },
  { name: "French Southern Territories", alpha_3: "ATF" },
  { name: "Gabon", alpha_3: "GAB" },
  { name: "Gambia", alpha_3: "GMB" },
  { name: "Georgia", alpha_3: "GEO" },
  { name: "Germany", alpha_3: "DEU" },
  { name: "Ghana", alpha_3: "GHA" },
  { name: "Gibraltar", alpha_3: "GIB" },
  { name: "Greece", alpha_3: "GRC" },
  { name: "Greenland", alpha_3: "GRL" },
  { name: "Grenada", alpha_3: "GRD" },
  { name: "Guadeloupe", alpha_3: "GLP" },
  { name: "Guam", alpha_3: "GUM" },
  { name: "Guatemala", alpha_3: "GTM" },
  { name: "Guernsey", alpha_3: "GGY" },
  { name: "Guinea", alpha_3: "GIN" },
  { name: "Guinea-Bissau", alpha_3: "GNB" },
  { name: "Guyana", alpha_3: "GUY" },
  { name: "Haiti", alpha_3: "HTI" },
  { name: "Heard Island and McDonald Islands", alpha_3: "HMD" },
  { name: "Holy See (Vatican City State)", alpha_3: "VAT" },
  { name: "Honduras", alpha_3: "HND" },
  { name: "Hong Kong", alpha_3: "HKG" },
  { name: "Hungary", alpha_3: "HUN" },
  { name: "Iceland", alpha_3: "ISL" },
  { name: "India", alpha_3: "IND" },
  { name: "Indonesia", alpha_3: "IDN" },
  { name: "Iran, Islamic Republic of", alpha_3: "IRN" },
  { name: "Iraq", alpha_3: "IRQ" },
  { name: "Ireland", alpha_3: "IRL" },
  { name: "Isle of Man", alpha_3: "IMN" },
  { name: "Israel", alpha_3: "ISR" },
  { name: "Italy", alpha_3: "ITA" },
  { name: "Jamaica", alpha_3: "JAM" },
  { name: "Japan", alpha_3: "JPN" },
  { name: "Jersey", alpha_3: "JEY" },
  { name: "Jordan", alpha_3: "JOR" },
  { name: "Kazakhstan", alpha_3: "KAZ" },
  { name: "Kenya", alpha_3: "KEN" },
  { name: "Kiribati", alpha_3: "KIR" },
  { name: "Korea, Democratic People's Republic of", alpha_3: "PRK" },
  { name: "Korea, Republic of", alpha_3: "KOR" },
  { name: "Kosovo", alpha_3: "XKX" },
  { name: "Kuwait", alpha_3: "KWT" },
  { name: "Kyrgyzstan", alpha_3: "KGZ" },
  { name: "Lao People's Democratic Republic", alpha_3: "LAO" },
  { name: "Latvia", alpha_3: "LVA" },
  { name: "Lebanon", alpha_3: "LBN" },
  { name: "Lesotho", alpha_3: "LSO" },
  { name: "Liberia", alpha_3: "LBR" },
  { name: "Libyan Arab Jamahiriya", alpha_3: "LBY" },
  { name: "Liechtenstein", alpha_3: "LIE" },
  { name: "Lithuania", alpha_3: "LTU" },
  { name: "Luxembourg", alpha_3: "LUX" },
  { name: "Macao", alpha_3: "MAC" },
  { name: "Macedonia, the Former Yugoslav Republic of", alpha_3: "MKD" },
  { name: "Madagascar", alpha_3: "MDG" },
  { name: "Malawi", alpha_3: "MWI" },
  { name: "Malaysia", alpha_3: "MYS" },
  { name: "Maldives", alpha_3: "MDV" },
  { name: "Mali", alpha_3: "MLI" },
  { name: "Malta", alpha_3: "MLT" },
  { name: "Marshall Islands", alpha_3: "MHL" },
  { name: "Martinique", alpha_3: "MTQ" },
  { name: "Mauritania", alpha_3: "MRT" },
  { name: "Mauritius", alpha_3: "MUS" },
  { name: "Mayotte", alpha_3: "MYT" },
  { name: "Mexico", alpha_3: "MEX" },
  { name: "Micronesia, Federated States of", alpha_3: "FSM" },
  { name: "Moldova, Republic of", alpha_3: "MDA" },
  { name: "Monaco", alpha_3: "MCO" },
  { name: "Mongolia", alpha_3: "MNG" },
  { name: "Montenegro", alpha_3: "MNE" },
  { name: "Montserrat", alpha_3: "MSR" },
  { name: "Morocco", alpha_3: "MAR" },
  { name: "Mozambique", alpha_3: "MOZ" },
  { name: "Myanmar", alpha_3: "MMR" },
  { name: "Namibia", alpha_3: "NAM" },
  { name: "Nauru", alpha_3: "NRU" },
  { name: "Nepal", alpha_3: "NPL" },
  { name: "Netherlands", alpha_3: "NLD" },
  { name: "Netherlands Antilles", alpha_3: "ANT" },
  { name: "New Caledonia", alpha_3: "NCL" },
  { name: "New Zealand", alpha_3: "NZL" },
  { name: "Nicaragua", alpha_3: "NIC" },
  { name: "Niger", alpha_3: "NER" },
  { name: "Nigeria", alpha_3: "NGA" },
  { name: "Niue", alpha_3: "NIU" },
  { name: "Norfolk Island", alpha_3: "NFK" },
  { name: "Northern Mariana Islands", alpha_3: "MNP" },
  { name: "Norway", alpha_3: "NOR" },
  { name: "Oman", alpha_3: "OMN" },
  { name: "Pakistan", alpha_3: "PAK" },
  { name: "Palau", alpha_3: "PLW" },
  { name: "Palestinian Territory, Occupied", alpha_3: "PSE" },
  { name: "Panama", alpha_3: "PAN" },
  { name: "Papua New Guinea", alpha_3: "PNG" },
  { name: "Paraguay", alpha_3: "PRY" },
  { name: "Peru", alpha_3: "PER" },
  { name: "Philippines", alpha_3: "PHL" },
  { name: "Pitcairn", alpha_3: "PCN" },
  { name: "Poland", alpha_3: "POL" },
  { name: "Portugal", alpha_3: "PRT" },
  { name: "Puerto Rico", alpha_3: "PRI" },
  { name: "Qatar", alpha_3: "QAT" },
  { name: "Reunion", alpha_3: "REU" },
  { name: "Romania", alpha_3: "ROM" },
  { name: "Russian Federation", alpha_3: "RUS" },
  { name: "Rwanda", alpha_3: "RWA" },
  { name: "Saint Barthelemy", alpha_3: "BLM" },
  { name: "Saint Helena", alpha_3: "SHN" },
  { name: "Saint Kitts and Nevis", alpha_3: "KNA" },
  { name: "Saint Lucia", alpha_3: "LCA" },
  { name: "Saint Martin", alpha_3: "MAF" },
  { name: "Saint Pierre and Miquelon", alpha_3: "SPM" },
  { name: "Saint Vincent and the Grenadines", alpha_3: "VCT" },
  { name: "Samoa", alpha_3: "WSM" },
  { name: "San Marino", alpha_3: "SMR" },
  { name: "Sao Tome and Principe", alpha_3: "STP" },
  { name: "Saudi Arabia", alpha_3: "SAU" },
  { name: "Senegal", alpha_3: "SEN" },
  { name: "Serbia", alpha_3: "SRB" },
  { name: "Serbia and Montenegro", alpha_3: "SCG" },
  { name: "Seychelles", alpha_3: "SYC" },
  { name: "Sierra Leone", alpha_3: "SLE" },
  { name: "Singapore", alpha_3: "SGP" },
  { name: "St Martin", alpha_3: "SXM" },
  { name: "Slovakia", alpha_3: "SVK" },
  { name: "Slovenia", alpha_3: "SVN" },
  { name: "Solomon Islands", alpha_3: "SLB" },
  { name: "Somalia", alpha_3: "SOM" },
  { name: "South Africa", alpha_3: "ZAF" },
  { name: "South Georgia and the South Sandwich Islands", alpha_3: "SGS" },
  { name: "South Sudan", alpha_3: "SSD" },
  { name: "Spain", alpha_3: "ESP" },
  { name: "Sri Lanka", alpha_3: "LKA" },
  { name: "Sudan", alpha_3: "SDN" },
  { name: "Suriname", alpha_3: "SUR" },
  { name: "Svalbard and Jan Mayen", alpha_3: "SJM" },
  { name: "Swaziland", alpha_3: "SWZ" },
  { name: "Sweden", alpha_3: "SWE" },
  { name: "Switzerland", alpha_3: "CHE" },
  { name: "Syrian Arab Republic", alpha_3: "SYR" },
  { name: "Taiwan, Province of China", alpha_3: "TWN" },
  { name: "Tajikistan", alpha_3: "TJK" },
  { name: "Tanzania, United Republic of", alpha_3: "TZA" },
  { name: "Thailand", alpha_3: "THA" },
  { name: "Timor-Leste", alpha_3: "TLS" },
  { name: "Togo", alpha_3: "TGO" },
  { name: "Tokelau", alpha_3: "TKL" },
  { name: "Tonga", alpha_3: "TON" },
  { name: "Trinidad and Tobago", alpha_3: "TTO" },
  { name: "Tunisia", alpha_3: "TUN" },
  { name: "Turkey", alpha_3: "TUR" },
  { name: "Turkmenistan", alpha_3: "TKM" },
  { name: "Turks and Caicos Islands", alpha_3: "TCA" },
  { name: "Tuvalu", alpha_3: "TUV" },
  { name: "Uganda", alpha_3: "UGA" },
  { name: "Ukraine", alpha_3: "UKR" },
  { name: "United Arab Emirates", alpha_3: "ARE" },
  { name: "United Kingdom", alpha_3: "GBR" },
  { name: "United States", alpha_3: "USA" },
  { name: "United States Minor Outlying Islands", alpha_3: "UMI" },
  { name: "Uruguay", alpha_3: "URY" },
  { name: "Uzbekistan", alpha_3: "UZB" },
  { name: "Vanuatu", alpha_3: "VUT" },
  { name: "Venezuela", alpha_3: "VEN" },
  { name: "Viet Nam", alpha_3: "VNM" },
  { name: "Virgin Islands, British", alpha_3: "VGB" },
  { name: "Virgin Islands, U.s.", alpha_3: "VIR" },
  { name: "Wallis and Futuna", alpha_3: "WLF" },
  { name: "Western Sahara", alpha_3: "ESH" },
  { name: "Yemen", alpha_3: "YEM" },
  { name: "Zambia", alpha_3: "ZMB" },
  { name: "Zimbabwe", alpha_3: "ZWE" },
];

export default Alpha3Countries;
