import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Problems from "../Problems";
import React from "react";
import axios from "axios";

let container = null;

const solvedProblems = {
    data: {
        problems: [
            {problemName: "firstProblem", id: 1},
            {problemName: "secondProblem", id: 2}
        ],
        totalPages: 1
    }
}


beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


it("renders as expected", async () => {
    const axiosSpy = jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve(solvedProblems));

    await act(async () => {
        render(<Problems/>, container);
    });

    let child = container.firstChild;

    expect(child.childElementCount).toBe(1);

    axiosSpy.mockRestore();
});