/* eslint-env jest */
import { HEADER, reason, flow } from '../index';

describe('printer', () => {
  it('prints given tokens to flow def', () => {
    const result = flow(['btn1', 'btn2']);
    expect(result).toBe(
      `${HEADER}
declare module.exports: {|
  +'btn1': string;
  +'btn2': string;
|};
`
    );
  });
  it('prints given tokens to reason interface', () => {
    const result = reason('myStyle.css', ['btn1', 'btn2']);
    expect(result).toBe(
      `[@bs.module] external style : Js.t({
  'btn1': string,
  'btn2': string
}) = "./myStyle.css";
`
    );
  });
});
