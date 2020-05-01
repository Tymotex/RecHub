const initialState = {
    reviews: [
        {
            id: 1,
            gameTitle: "Persona 5",
            reviewContent: "Persona 5 Royal is fucking amazing.",
            imgURL: "https://i.ytimg.com/vi/Rv0cx0vNSWg/maxresdefault.jpg",
            rating: 5,
            colour: "#9770ed",
            timeCreated: 1588307254
        },
        {
            id: 2,  
            gameTitle: "Skyrim",
            reviewContent: "Skyrim is also amazing.",
            imgURL: "https://img-eshop.cdn.nintendo.net/i/3a41386d4b0999365727a21cc5c13853cfc244abca39b689bb79a339601e48c3.jpg?w=1000",
            rating: 4,
            colour: "#9770ed",
            timeCreated: 1588307255
        }
    ],
    sort: "SORT_BY_DATE"
}

export default initialState;