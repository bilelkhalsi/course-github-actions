import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { catchError, Observable, of } from 'rxjs';
import { WebValue, WebValueFailure, WebValueMono, WebValueSelector, WebValueSet } from '../data/model/web.value.model';
import { WebDataService } from '../service/web.data.service';

@ApiTags('Web')
@Controller('/web')
export class WebDataController {

  constructor(private readonly dataService: WebDataService) {}

  @ApiResponse({
    status: 200,
    type: WebValueMono
  })
  @ApiResponse({
    status: 400,
    type: WebValueFailure
  })
  @Post('/one')
  selectOne(@Body()selector: WebValueSelector): Observable<WebValue> {
    return this.dataService.selectOne(selector);
  }

  @ApiResponse({
    status: 200,
    type: WebValueSet
  })
  @ApiResponse({
    status: 400,
    type: WebValueFailure
  })
  @Post('/all')
  selectAll(@Body()selector: WebValueSelector): Observable<WebValue> {
    return this.dataService.selectAll(selector);
  }

}
