import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PuppeteerNode, Browser } from "puppeteer";
import { WebValueMono, WebValueSelector, WebValueSet } from "../model/web.value.model";

/**
 * Web data repository
 */
@Injectable()
export class WebDataRepository implements OnModuleInit, OnModuleDestroy {

    private browser : Browser;

    constructor(private readonly puppeteer: PuppeteerNode){}

    async onModuleInit() {
        this.browser = await this.puppeteer.launch();
    }

    async selectOne(selector: WebValueSelector): Promise<WebValueMono> {
        const page = await this.browser.newPage();
        await page.goto(selector.source);
        await page.waitForSelector(selector.selector);
        return page.evaluate(selector => {
            const elem = document.querySelector(selector);
            return (elem && elem.textContent)? elem.textContent : '';
        }, selector.selector).then(value => {
            return {
                source: selector.source,
                selector: selector.selector,
                timestamp: new Date(),
                value
            };
        });
    }  

    async selectAll(selector: WebValueSelector): Promise<WebValueSet> {
        const page = await this.browser.newPage();
        await page.goto(selector.source);
        await page.waitForSelector(selector.selector);
        return page.evaluate(selector => {
            return [...document.querySelectorAll(selector)].map(elem => {
                return (elem && elem.textContent)? elem.textContent : '';
            });
        }, selector.selector).then(value => {
            return {
                source: selector.source,
                selector: selector.selector,
                timestamp: new Date(),
                value
            };
        });
    }  
    
    async onModuleDestroy() {
        await this.browser.close();
    }

}