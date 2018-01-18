import Triangle from './triangle';

describe('Triangle', () => {
  it('is a thing', () => {
    const triangle = new Triangle();
    expect(triangle).toBeDefined();
  });

  it('can recognize valid triangles', () => {
    const validTriangle = new Triangle(3, 4, 5);
    expect(validTriangle.isValid()).toBeTruthy();
    const invalidTriangle = new Triangle(3, 4, 9);
    expect(invalidTriangle.isValid()).toBeFalsy();
  });

})
