import { uuid } from 'uuidv4';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokensRepository implements IUserTokensRepository {
  private tokens: UserToken[] = [];

  public async generate(userId: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id: userId,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.tokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.tokens.find(eachToken => eachToken.token === token);

    return userToken;
  }
}

export default FakeUserTokensRepository;
