import { RemoveBackslashesPipe } from './remove-backslashes.pipe';

describe('RemoveBackslashesPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveBackslashesPipe();
    expect(pipe).toBeTruthy();
  });
});
