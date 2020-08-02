import {render, unmountComponentAtNode} from "react-dom";
import Problem from "../Problem";
import {act} from "react-dom/test-utils";
import React from "react";


const problem = {
    problemUrl: "https://www.problemurl.com",
    problemName: "test problem",
    id: 100
};

let container = null;

beforeEach(() => {
    //Setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("renders as expected with no previously solved problems", () => {
    let solved = new Set();

    act(() => {
        render(<Problem key={1} problem={problem} solvedProblems={solved}/>, container);
    });

    commonAssertions();
    expect(container.getElementsByClassName("greenCheckMark").length).toBe(1);

});

it("renders as expected with previously solved problem", () => {
    let solved = new Set();
    solved.add({
        problemUrl: "https://www.problemurl.com",
        problemName: "test problem",
        id: 100
    });

    act(() => {
        render(<Problem key={1} problem={problem} solvedProblems={solved}/>, container);
    });

    commonAssertions();
    expect(container.getElementsByClassName("greenCheckMark").length).toBe(1);

});

const commonAssertions = () => {
    let child = container.firstChild;
    let url = container.getElementsByTagName("a")[0].href;

    expect(container.textContent).toBe("test problem");
    expect(child.childElementCount).toBe(4);
    expect(url).toBe("https://www.problemurl.com/");
    expect(container.getElementsByClassName("codeforcesIcon").length).toBe(1);
    expect(container.getElementsByClassName("starIcon").length).toBe(6);
}
