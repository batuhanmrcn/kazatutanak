export default function (state: any, action: { type: any; payload: any; }){
    switch (action.type) {

        case 'adSoyadA':
            return {...state, onBoard: action.payload};

        case 'tcA':
            return {...state, onBoard: action.payload};
        
            case 'belgeNoA':
            return {...state, onBoard: action.payload};

            case 'alindigiYerA':
            return {...state, onBoard: action.payload};

            case 'cepTelA':
            return {...state, onBoard: action.payload};
            
            case 'sasiNoA':
            return {...state, onBoard: action.payload};
            
            case 'markaModelA':
            return {...state, onBoard: action.payload};
            
            case 'plakaA':
            return {...state, onBoard: action.payload};
            
            case 'kullanimSekliA':
            return {...state, onBoard: action.payload};

            case 'sigortalininAdSoyadA':
            return {...state, onBoard: action.payload};

            case 'tcVergiNoA':
            return {...state, onBoard: action.payload};

            case 'sigortaUnvanA':
            return {...state, onBoard: action.payload};
            
            case 'acenteNoA':
            return {...state, onBoard: action.payload};

            case 'tramerBelgeNoA':
            return {...state, onBoard: action.payload};

            case 'hizDurumuA':
            return {...state, onBoard: action.payload};

            case 'frenUzunluguA':
            return {...state, onBoard: action.payload};

            case 'yesilKartNoA':
            return {...state, onBoard: action.payload};

            case 'ulkeA':
            return {...state, onBoard: action.payload};

            case 'pasaportA':
            return {...state, onBoard: action.payload};

            case 'surucuGorusA':
            return {...state, onBoard: action.payload};



            case 'adsoyadB':
            return {...state, onBoard: action.payload};
            
            case 'tcB':
            return {...state, onBoard: action.payload};

            case 'belgeNoB':
            return {...state, onBoard: action.payload};

            case 'alindigiYerB':
            return {...state, onBoard: action.payload};

            case 'adresB':
            return {...state, onBoard: action.payload};

            case 'cepTelB':
            return {...state, onBoard: action.payload};

            case 'sasiNoB':
            return {...state, onBoard: action.payload};

            case 'markaModelB':
            return {...state, onBoard: action.payload};

            case 'plakaB':
            return {...state, onBoard: action.payload};

            case 'surucuGorusA':
            return {...state, onBoard: action.payload};

            case 'kullanimSekliB':
            return {...state, onBoard: action.payload};

            case 'sigortalininAdSoyadB':
            return {...state, onBoard: action.payload};

            
            case 'tcVergiNoB':
            return {...state, onBoard: action.payload};

            case 'sigortaUnvanB':
            return {...state, onBoard: action.payload};


            case 'acenteNoB':
            return {...state, onBoard: action.payload};

            case 'tramerBelgeNoB':
            return {...state, onBoard: action.payload};

            case 'hizDurumuB':
            return {...state, onBoard: action.payload};

            case 'frenUzunluguB':
            return {...state, onBoard: action.payload};

            case 'yesilKartNoB':
            return {...state, onBoard: action.payload};

            case 'ulkeB':
            return {...state, onBoard: action.payload};

            case 'pasaportB':
            return {...state, onBoard: action.payload};

            case 'surucuGorusB':
            return {...state, onBoard: action.payload};


            
            
            case 'kazaTarihi':
            return {...state, onBoard: action.payload};

            case 'kazaSaati':
            return {...state, onBoard: action.payload};

            case 'il':
            return {...state, onBoard: action.payload};

            case 'ilce':
            return {...state, onBoard: action.payload};

            case 'mahalle':
            return {...state, onBoard: action.payload};

            case 'cadde':
            return {...state, onBoard: action.payload};

            case 'semt':
            return {...state, onBoard: action.payload};

            case 'sokak':
            return {...state, onBoard: action.payload};

            case 'adSoyad':
            return {...state, onBoard: action.payload};

            case 'adres':
            return {...state, onBoard: action.payload};

            case 'telNo':
            return {...state, onBoard: action.payload};

        default:
            return state;

    }
}
