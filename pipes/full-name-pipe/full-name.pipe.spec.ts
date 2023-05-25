import { EmployeeBasic } from '@shared/interfaces';
import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;

  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is undefined', () => {
    const value = undefined;
    expect(pipe.transform(value)).toEqual('');
  });

  it('should return empty string if firstName is undefined', () => {
    const value = { lastName: 'Last' } as EmployeeBasic;
    expect(pipe.transform(value)).toEqual('');
  });

  it('should return empty string if lastName is undefined', () => {
    const value = { firstName: 'First' } as EmployeeBasic;
    expect(pipe.transform(value)).toEqual('');
  });

  it('should concatenate firstName and lastName with a space in between', () => {
    const value = { firstName: 'First', lastName: 'Last' } as EmployeeBasic;
    expect(pipe.transform(value)).toEqual('First Last');
  });
});
