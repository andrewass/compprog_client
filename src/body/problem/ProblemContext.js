import React, {useState} from "react";

export const ProblemContext = React.createContext(null);


const ProblemProvider = ({children}) => {

    const [state, setState] = useState({
        problemList: [],
        page: 0,
        pages: 0
    });

    return <ProblemContext.Provider value={[state, setState]}>{children}</ProblemContext.Provider>
};

export default ProblemProvider;