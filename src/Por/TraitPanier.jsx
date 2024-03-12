const initialState = { nbr: 0 };

export default function TraitPanier(state = initialState, action) {
    switch (action.type) {
        case "Ajouter": 
            return { ...state, nbr: state.nbr + 1 };
        case "Supprimer": 
            // Assuming you want to reset the count to 0 when removing
            return { ...state, nbr: 0 };
        default:
            return state;
    }
}
