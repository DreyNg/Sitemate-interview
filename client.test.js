const sinon = require("sinon");
const axios = require("axios");
const readline = require("readline");
const { expect } = require("chai");
const {
    createIssue,
    readIssues,
    updateIssue,
    deleteIssue,
} = require("./client");

describe("Client", () => {
    describe("createIssue", () => {
        it("should create a new issue", async () => {
            const rlStub = sinon.stub(readline, "createInterface").returns({
                question: (question, cb) => cb("Test Title"),
                close: sinon.stub(),
            });
            const axiosStub = sinon.stub(axios, "post").resolves({
                data: {
                    id: 3,
                    title: "Test Title",
                    description: "Test Description",
                },
            });

            await createIssue();

            expect(axiosStub.calledOnce).to.be.true;
            expect(axiosStub.firstCall.args[0]).to.equal(
                "http://localhost:3000/api/issues"
            );
            expect(axiosStub.firstCall.args[1]).to.deep.equal({
                title: "Test Title",
                description: "Test Description",
            });

            rlStub.restore();
            axiosStub.restore();
        });
    });
});
