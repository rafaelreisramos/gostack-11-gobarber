import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template, variables }: IParseMailTemplateDTO): Promise<string> {
    const parsedTemplate = handlebars.compile(template);

    return parsedTemplate(variables);
  }
}

export default HandlebarsMailMailTemplateProvider;
