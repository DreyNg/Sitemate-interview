const sinon = require("sinon");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const { expect } = chai;
const axios = require("axios");
const server = require("./server");

describe("Server API", () => {
    describe("GET /api/issues", () => {
        it("should return all issues", async () => {
            const response = await chai.request(server).get("/api/issues");
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("array");
        });
    });

    describe("POST /api/issues", () => {
        it("should create a new issue", async () => {
            const issueData = {
                title: "Test Issue",
                description: "Test Description",
            };
            const response = await chai
                .request(server)
                .post("/api/issues")
                .send(issueData);
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("id");
            expect(response.body.title).to.equal(issueData.title);
            expect(response.body.description).to.equal(issueData.description);
        });
    });

    describe("PUT /api/issues/:id", () => {
        it("should update an existing issue", async () => {
            const issueData = {
                title: "Updated Test Issue",
                description: "Updated Test Description",
            };
            const response = await chai
                .request(server)
                .put("/api/issues/1")
                .send(issueData);
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("id", 1);
            expect(response.body.title).to.equal(issueData.title);
            expect(response.body.description).to.equal(issueData.description);
        });
    });

    describe("DELETE /api/issues/:id", () => {
        it("should delete an existing issue", async () => {
            const response = await chai.request(server).delete("/api/issues/1");
            expect(response).to.have.status(200);
            expect(response.text).to.equal("Issue with ID 1 deleted.");
        });
    });
});
