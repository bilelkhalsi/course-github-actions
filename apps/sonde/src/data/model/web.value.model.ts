import { ApiProperty } from "@nestjs/swagger";

/**
 * Web value model
 */
export class WebValueMono {
    @ApiProperty({
        description: 'Value source web page url',
        example: 'https://github.com/',
    })
    source: string;
    @ApiProperty({
        description: 'CSS3 selector in the web page',
        example: 'a#pull-requests-tab > #pull-requests-repo-tab-count',
    })
    selector: string;
    @ApiProperty({
        description: 'Timestamp of the execution (Zoned)',
        example: 'Sat Dec 17 2022 12:44:24 GMT-0500 ',
    })
    timestamp: Date;
    @ApiProperty({
        description: 'Value returned by the given selector',
        example: "6",
    })
    value : string;
}

/**
 * Web value set model
 */
export class WebValueSet {
    @ApiProperty({
        description: 'Value source web page url',
        example: 'https://github.com/',
    })
    source: string;
    @ApiProperty({
        description: 'CSS3 selector in the web page',
        example: 'a#pull-requests-tab > #pull-requests-repo-tab-count',
    })
    selector: string;
    @ApiProperty({
        description: 'Timestamp of the execution (Zoned)',
        example: 'Sat Dec 17 2022 12:44:24 GMT-0500 ',
    })
    timestamp: Date;
    @ApiProperty({
        description: 'Values returned by the given selector',
        example: "['1', '5', '16']",
        default: '[]'
    })
    value : string[];
}

/**
 * Web value selector model
 */
export class WebValueFailure {
    @ApiProperty({
        description: 'Value source web page url',
        example: 'https://github.com/',
    })
    source: string;
    @ApiProperty({
        description: 'CSS3 selector in the web page',
        example: 'a#pull-requests-tab > #pull-requests-repo-tab-count',
    })
    selector: string;
    @ApiProperty({
        description: 'Timestamp of the execution (Zoned)',
        example: 'Sat Dec 17 2022 12:44:24 GMT-0500 ',
    })
    timestamp: Date;
    @ApiProperty({
        description: 'Value (empty for the reason indicated in erro field)',
        example: '',
        nullable: true
    })
    value = '';
    @ApiProperty({
        description: 'Error message',
        example: 'Invalid page url',
    })
    error: any;
}

export declare type WebValue = WebValueMono | WebValueSet | WebValueFailure;

/**
 * Web value selector model
 */
export class WebValueSelector {
    @ApiProperty({
        description: 'Value source web page url',
        example: 'https://github.com/',
    })
    source: string;
    @ApiProperty({
        description: 'CSS3 selector in the web page',
        example: 'a#pull-requests-tab > #pull-requests-repo-tab-count',
    })
    selector: string;
    @ApiProperty({
        description: 'Schedule to run the value extraction (ex: end of every day)',
        example: '0 0 * * *',
    })
    schedule: string;
}

