import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListProviderService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const listProviders = container.resolve(ListProviderService);

    const providers = await listProviders.execute({
      user_id: userId,
    });

    return response.json(classToClass(providers));
  }
}
