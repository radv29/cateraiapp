import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { Observable, filter, from, map } from 'rxjs';
import { apiKey } from '../shared/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoCalculationService {

  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: apiKey
  });

  constructor() { 
    this.openai = new OpenAIApi(this.configuration);
  }

  getDataFromOpenAI(text: string): Observable<string> {
    return from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 2000
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map((resp: { data: any; }) => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    );
  }

}
