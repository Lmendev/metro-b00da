export const network = {
    "trainColors": [
        "Rojo",
        "Verde",
    ],
    "stations": [
        {
            "name": "A",
            "adjacentStations": ["B"]
        },
        {
            "name": "B",
            "adjacentStations": ["A", "C"]
        },
        {
            "name": "C",
            "adjacentStations": ["B", "D", "G"]
        },
        {
            "name": "D",
            "adjacentStations": ["C", "E"]
        },
        {
            "name": "E",
            "adjacentStations": ["D", "F"]
        },
        {
            "name": "F",
            "adjacentStations": ["E", "I"]
        },
        {
            "name": "G",
            "color": "Verde",
            "adjacentStations": ["C", "H"]
        },
        {
            "name": "H",
            "color": "Rojo",
            "adjacentStations": ["G", "I"]
        },
        {
            "name": "I",
            "color": "Verde",
            "adjacentStations": ["H", "F"]
        }
    ]
}