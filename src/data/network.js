export const network = {
    "trainColors": [
        "Rojo",
        "Verde",
    ],
    "stations": [
        {
            "name": "A",
            "adjacentStations": [
                {
                    "name": "B",
                    "weight": 1
                }
            ]
        },
        {
            "name": "B",
            "time": 260,
            "adjacentStations": [
                {
                    "name": "A",
                    "weight": 1
                }, 
                {
                    "name": "C",
                    "weight": 1
                }
            ]
        },
        {
            "name": "C",
            "adjacentStations": [
                {
                    "name": "B",
                    "weight": 1
                },
                {
                    "name": "D",
                    "weight": 1
                },
                {
                    "name": "G",
                    "weight": 1
                }
            ]
        },
        {
            "name": "D",
            "adjacentStations": [
                {
                    "name": "C",
                    "weight": 1
                },
                {
                    "name": "E",
                    "weight": 1
                }
            ]
        },
        {
            "name": "E",
            "time": 10,
            "adjacentStations": [
                {
                    "name": "D",
                    "weight": 1
                },
                {
                    "name": "F",
                    "weight": 1
                }
            ]
        },
        {
            "name": "F",
            "adjacentStations": [
                {
                    "name": "E",
                    "weight": 1
                },
                {
                    "name": "I",
                    "weight": 1
                }
            ]
        },
        {
            "name": "G",
            "color": "Verde",
            "adjacentStations": [
                {
                    "name": "C",
                    "weight": 1
                },
                {
                    "name": "H",
                    "weight": 1
                }
            ]
        },
        {
            "name": "H",
            "color": "Rojo",
            "adjacentStations": [
                {
                    "name": "G",
                    "weight": 1
                },
                {
                    "name": "I",
                    "weight": 1
                }
            ]
        },
        {
            "name": "I",
            "color": "Verde",
            "time": 50,
            "adjacentStations": [
                {
                    "name": "H",
                    "weight": 1
                },
                {
                    "name": "F",
                    "weight": 1
                }
            ]
        }
    ]
}