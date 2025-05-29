import { huggingfaceApi } from './huggingface-api.js';

describe('huggingfaceApi', () => {
  it('should work', () => {
    expect(huggingfaceApi()).toEqual('huggingface_api');
  });
});
