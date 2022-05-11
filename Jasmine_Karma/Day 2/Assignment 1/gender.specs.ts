import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });
  it('Should check for "Male" gender with "m" ', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform("m")).toBe("Male");
  });
  it('Should check for "Male" gender with "M" ', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform("M")).toBe("Male");
  });
  it('Should check for "Female" gender with "f" ', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform("f")).toBe("Female");
  });
  it('Should check for "Female" gender with "F" ', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform("F")).toBe("Female");
  });
  it('Should check for invlaid gender value with "any" ', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform("s")).toBe("");
  });
});
