import { Injectable } from "@nestjs/common";
import { PuppeteerNode } from "puppeteer";
import { WebValueMono, WebValueSelector, WebValueSet } from "../model/web.value.model";

/**
 * Web data repository
 */
@Injectable()
export class WebDataRepository {

    constructor(private readonly puppeteer: PuppeteerNode){}

    async selectOne(selector: WebValueSelector): Promise<WebValueMono> {
        const browser = await this.puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(selector.source);
        await page.waitForSelector(selector.selector);
        return Promise.reject();
    }  

    async selectAll(selector: WebValueSelector): Promise<WebValueSet> {
        return Promise.reject();
    }  

}