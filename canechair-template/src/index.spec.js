import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';

describe("Test environment testing", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("Should display 'CaneChair Starter Kit' title", (done) => {
    const indexFile = fs.readFileSync('./src/index.html', 'utf-8');
    const indexHtml = new JSDOM(indexFile);
    const h1 = indexHtml.window.document.getElementsByTagName('title')[0];
    expect(h1.innerHTML).to.equal("CaneChair Starter Kit");
    done();
    window.close();
  })
});

