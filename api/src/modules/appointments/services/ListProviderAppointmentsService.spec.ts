import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list daily appointments', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 8, 29, 13),
      provider_id: 'provider_id',
      user_id: 'user_id',
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 8, 29, 14),
      provider_id: 'provider_id',
      user_id: 'user_id',
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider_id',
      day: 29,
      month: 9,
      year: 2020,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
