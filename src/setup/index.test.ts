import { setup } from '.';

describe('block testing', () => {
  test('custom settings', () => {
    const block = setup({
      namespace: 'ns--',
      elementDelimiter: '+',
      modificatorDelimiter: '!',
      valueDelimiter: '=',
    });
    const b = block('block', []);
    const result = b('element', ['mod', { 'named-mod': 'mod-val' }]);

    expect(result.length).toBe(3);
    expect(result).toContain('ns--block+element');
    expect(result).toContain('ns--block+element!mod');
    expect(result).toContain('ns--block+element!named-mod=mod-val');
  });
});
