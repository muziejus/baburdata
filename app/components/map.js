import Component from '@glimmer/component';

export default class MapComponent extends Component {

  places = [
    {
      name: "Kābul",
      "index_name": "Kabul",
      "canonical_name": "Kabul",
      "status": "x",
      "count": 268,
      lat: 34.52813,
      lon: 69.17233
    },
    {
      name: "Samarkand",
      "index_name": "Samarkand",
      "canonical_name": "Samarkand",
      "status": "x",
      "count": 266,
      lat: 39.65417,
      lon: 66.95972
    },
    {
      name: "Hindūstān",
      "index_name": "Hindustan",
      "canonical_name": "Republic of India",
      "status": "x",
      "count": 177,
      lat: 22,
      lon: 79
    },
    {
      name: "Andijān",
      "index_name": "Andizhan",
      "canonical_name": "Andijon",
      "status": "x",
      "count": 132,
      lat: 40.78206,
      lon: 72.34424
    },
    {
      name: "Ḥiṣār",
      "index_name": "Hissar",
      "canonical_name": "Hisor",
      "status": "x",
      "count": 86,
      lat: 38.52504,
      lon: 68.55124
    },
    {
      name: "Akhsī",
      "index_name": "Akhsi",
      "canonical_name": "Akhsi",
      "status": "?",
      "count": 72,
      lat: 40.85,
      lon: 71.3666666667
    },
    {
      name: "Āgra",
      "index_name": "Agra",
      "canonical_name": "Agra",
      "status": "x",
      "count": 65,
      lat: 27.18333,
      lon: 78.01667
    },
    {
      name: "Herāt",
      "index_name": "Herat",
      "canonical_name": "Herāt Province",
      "status": "x",
      "count": 62,
      lat: 34.5,
      lon: 62
    },
    {
      name: "Ghaznī",
      "index_name": "Ghazni",
      "canonical_name": "Ghazni",
      "status": "x",
      "count": 56,
      lat: 33.55391,
      lon: 68.42096
    },
    {
      name: "Bhīra",
      "index_name": "Bhera",
      "canonical_name": "Bhera",
      "status": "x",
      "count": 54,
      lat: 32.48318,
      lon: 72.9097
    },
    {
      name: "Balkh",
      "index_name": "Balkh",
      "canonical_name": "Balkh",
      "status": "x",
      "count": 51,
      lat: 36.75635,
      lon: 66.8972
    },
    {
      name: "Bukhārā",
      "index_name": "Bukhara",
      "canonical_name": "Bukhara",
      "status": "x",
      "count": 44,
      lat: 39.77472,
      lon: 64.42861
    },
    {
      name: "Aūsh",
      "index_name": "Osh",
      "canonical_name": "Osh",
      "status": "x",
      "count": 44,
      lat: 40.52828,
      lon: 72.7985
    },
    {
      name: "Khujand",
      "index_name": "Khodzhent",
      "canonical_name": "Khŭjand",
      "status": "x",
      "count": 43,
      lat: 40.28256,
      lon: 69.62216
    },
    {
      name: "Qūndūz",
      "index_name": "Konduz",
      "canonical_name": "Kunduz",
      "status": "x",
      "count": 43,
      lat: 36.72895,
      lon: 68.857
    },
    {
      name: "Qandahār",
      "index_name": "Kandahar",
      "canonical_name": "Kandahār",
      "status": "x",
      "count": 42,
      lat: 31.61332,
      lon: 65.71013
    },
    {
      name: "Gūālīār",
      "index_name": "Gwalior",
      "canonical_name": "Gwalior",
      "status": "x",
      "count": 40,
      lat: 26.22983,
      lon: 78.17337
    },
    {
      name: "Tāshkīnt",
      "index_name": "Tashkent",
      "canonical_name": "Tashkent",
      "status": "x",
      "count": 35,
      lat: 41.26465,
      lon: 69.21627
    },
    {
      name: "Dihlī",
      "index_name": "Delhi",
      "canonical_name": "Delhi",
      "status": "x",
      "count": 34,
      lat: 28.65195,
      lon: 77.23149
    },
    {
      name: "Sind-daryā",
      "index_name": "Indus",
      "canonical_name": "Indus River",
      "status": "x",
      "count": 30,
      lat: 30.84336,
      lon: 70.82233
    },
    {
      name: "Aūrā-Tīpā",
      "index_name": "Ura-Tyube",
      "canonical_name": "Istaravshan",
      "status": "x",
      "count": 30,
      lat: 39.9142,
      lon: 69.00328
    },
    {
      name: "Lāhūr",
      "index_name": "Lahore",
      "canonical_name": "Lahore",
      "status": "x",
      "count": 27,
      lat: 31.54972,
      lon: 74.34361
    },
    {
      name: "Marghīnān",
      "index_name": "Margilan",
      "canonical_name": "Marg‘ilon",
      "status": "x",
      "count": 27,
      lat: 40.47237,
      lon: 71.72463
    },
    {
      name: "Chandīrī",
      "index_name": "Chanderi",
      "canonical_name": "Chanderi",
      "status": "x",
      "count": 26,
      lat: 24.71312,
      lon: 78.13809
    },
    {
      name: "Saṃbhal",
      "index_name": "Sambhal",
      "canonical_name": "Sambhal",
      "status": "x",
      "count": 26,
      lat: 28.58498,
      lon: 78.56959
    },
    {
      name: "`Irāq",
      "index_name": "Iraq",
      "canonical_name": "Republic of Iraq",
      "status": "x",
      "count": 25,
      lat: 33,
      lon: 44
    },
    {
      name: "Dūlpūr",
      "index_name": "Dholpur",
      "canonical_name": "Dholpur",
      "status": "x",
      "count": 24,
      lat: 26.69286,
      lon: 77.87968
    },
    {
      name: "Merv",
      "index_name": "Merv",
      "canonical_name": "Merv",
      "status": "x",
      "count": 19,
      lat: 37.59378,
      lon: 61.83031
    },
    {
      name: "Qanauj",
      "index_name": "Kannauj",
      "canonical_name": "Kannauj",
      "status": "x",
      "count": 18,
      lat: 27.05524,
      lon: 79.9188
    },
    {
      name: "Bengal",
      "index_name": "Bengal",
      "canonical_name": "Bengal",
      "status": "x",
      "count": 17,
      lat: 24.327067,
      lon: 88.374009
    },
    {
      name: "Jaunpūr",
      "index_name": "Jaunpur",
      "canonical_name": "Jaunpur",
      "status": "x",
      "count": 17,
      lat: 25.75356,
      lon: 82.68689
    },
    {
      name: "Nijr-aū",
      "index_name": "Nijrao",
      "canonical_name": "Nijrāb",
      "status": "x",
      "count": 17,
      lat: 35.04628,
      lon: 69.64598
    },
    {
      name: "Tīrmīẕ",
      "index_name": "Termez",
      "canonical_name": "Tirmiz",
      "status": "x",
      "count": 17,
      lat: 37.22417,
      lon: 67.27833
    },
    {
      name: "Kāsān",
      "index_name": "Kassan",
      "canonical_name": "Kosonsoy",
      "status": "x",
      "count": 16,
      lat: 41.24944,
      lon: 71.54738
    },
    {
      name: "Kohik",
      "index_name": "Kohak",
      "canonical_name": "Zeravshan River Basin",
      "status": "x",
      "count": 16,
      lat: 39.69976,
      lon: 67.03147
    },
    {
      name: "Hindū-kush",
      "index_name": "Hindu Kush",
      "canonical_name": "Hindū Kush",
      "status": "",
      "count": 15,
      lat: 35,
      lon: 71
    },
    {
      name: "Kāhmard",
      "index_name": "Kahmard",
      "canonical_name": "Kahmard",
      "status": "x",
      "count": 14,
      lat: 35.35695,
      lon: 67.77567
    },
    {
      name: "Karnān",
      "index_name": "Karnon",
      "canonical_name": "Qarnon",
      "status": "x",
      "count": 14,
      lat: 41.04173,
      lon: 71.19572
    },
    {
      name: "Kohāt",
      "index_name": "Kohat",
      "canonical_name": "Kohāt",
      "status": "x",
      "count": 13,
      lat: 33.58196,
      lon: 71.44929
    },
    {
      name: "Turkistān",
      "index_name": "Turkistan",
      "canonical_name": "Turkestan (region)",
      "status": "x",
      "count": 13,
      lat: 43.29733,
      lon: 68.25175
    },
    {
      name: "Aūz-kīnt",
      "index_name": "Uzgen",
      "canonical_name": "Uzgen",
      "status": "x",
      "count": 13,
      lat: 40.76994,
      lon: 73.30068
    },
    {
      name: "Alwār",
      "index_name": "Alwar",
      "canonical_name": "Alwar",
      "status": "x",
      "count": 12,
      lat: 27.56246,
      lon: 76.625
    },
    {
      name: "Gang-river",
      "index_name": "Ganges",
      "canonical_name": "Ganges River",
      "status": "x",
      "count": 11,
      lat: 23.83347,
      lon: 89.75
    },
    {
      name: "Sīālkot",
      "index_name": "Sialkot",
      "canonical_name": "Sialkot",
      "status": "x",
      "count": 11,
      lat: 32.49268,
      lon: 74.53134
    },
    {
      name: "Gīrdīz",
      "index_name": "Gardez",
      "canonical_name": "Gardez",
      "status": "x",
      "count": 10,
      lat: 33.59744,
      lon: 69.22592
    },
    {
      name: "Istālif",
      "index_name": "Istalif",
      "canonical_name": "Istālif",
      "status": "x",
      "count": 10,
      lat: 34.84213,
      lon: 69.10138
    },
    {
      name: "Kalpī",
      "index_name": "Kalpi",
      "canonical_name": "Kālpi",
      "status": "x",
      "count": 10,
      lat: 26.11667,
      lon: 79.73333
    },
    {
      name: "Amū",
      "index_name": "Oxus",
      "canonical_name": "Amu Darya",
      "status": "x",
      "count": 10,
      lat: 43.66667,
      lon: 59.01667
    },
    {
      name: "Sīkrī",
      "index_name": "Sikri",
      "canonical_name": "Fatehpur Sīkri",
      "status": "x",
      "count": 10,
      lat: 27.0937,
      lon: 77.66003
    },
  ]
}
