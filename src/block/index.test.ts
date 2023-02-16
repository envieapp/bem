import { block } from '.';
import { DEFAULT_OPTIONS } from '../default-options';

const {
  namespace: n,
  elementDelimiter: e,
  modificatorDelimiter: m,
  valueDelimiter: v,
} = DEFAULT_OPTIONS;

describe('block testing', () => {
  test('custom settings', () => {
    const b = block('block', [], {
      namespace: 'ns--',
      elementDelimiter: '+',
      modificatorDelimiter: '!',
      valueDelimiter: '=',
    });
    const result = b('element', ['mod', { 'named-mod': 'mod-val' }]);

    expect(result.length).toBe(3);
    expect(result).toContain('ns--block+element');
    expect(result).toContain('ns--block+element!mod');
    expect(result).toContain('ns--block+element!named-mod=mod-val');
  });

  test('only block', () => {
    const b = block('block');
    const result = b();

    expect(result.length).toBe(1);
    expect(result).toContain(`${n}block`);
  });

  test('block with modificators', () => {
    const b = block('block', ['mod', { 'named-mod': 'mod-val' }]);
    const result = b();

    expect(result.length).toBe(3);
    expect(result).toContain(`${n}block`);
    expect(result).toContain(`${n}block${m}mod`);
    expect(result).toContain(`${n}block${m}named-mod${v}mod-val`);
  });

  test('block element', () => {
    const b = block('block');
    const result = b('element');

    expect(result.length).toBe(1);
    expect(result).toContain(`${n}block${e}element`);
  });

  test('block element with modificators', () => {
    const b = block('block');
    const result = b('element', ['mod', { 'named-mod': 'mod-val' }]);

    expect(result.length).toBe(3);
    expect(result).toContain(`${n}block${e}element`);
    expect(result).toContain(`${n}block${e}element${m}mod`);
    expect(result).toContain(`${n}block${e}element${m}named-mod${v}mod-val`);
  });
});
