import { NoSpacePipe } from './no-space.pipe';

describe('NoSpacePipe', () => {
  let pipe: NoSpacePipe;

  beforeEach(() => {
    pipe = new NoSpacePipe();
  });

  it('should transform a string with spaces to a string without spaces', () => {
    const input = 'Hello World';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('HelloWorld');
  });

  it('should return an empty string when the input is an empty string', () => {
    const input = '';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('');
  });

  it('should return an empty string when the input is null', () => {
    const input = null;
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('');
  });

  it('should transform a string with leading and trailing spaces to a string without spaces', () => {
    const input = '   Angular   ';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('Angular');
  });

  it('should return the same string if it does not contain any spaces', () => {
    const input = 'HelloWorld';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('HelloWorld');
  });
});
