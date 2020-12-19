import React, {useState} from "react";

export const ProblemContext = React.createContext(null);

const ProblemProvider = ({children}) => {

    const [state, setState] = useState({
        problemList: [],
        tagSet: new Set(),
        page: 0,
        pages: 0
    });

    return <ProblemContext.Provider value={[state, setState]}>{children}</ProblemContext.Provider>
};

export default ProblemProvider;