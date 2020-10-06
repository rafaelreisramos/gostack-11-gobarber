import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to show the providers', async () => {
    const loggedUser = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '123456',
    });

    const user1 = await fakeUsersRepository.create({
      name: 'Richard Roe',
      email: 'richard.roe@email.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Mark Moe',
      email: 'mark.moe@email.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
