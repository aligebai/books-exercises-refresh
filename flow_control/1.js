false || (true && false): false
true || (1 + 2): true
(1 + 2) || true: true/error. 3
true && (1 + 2); true/error. 3
false && (1 + 2); false
(1 + 2) && true; true
(32 * 4) >= 129; false
false !== !true; false
true === 4; true/error. false
false === (847 === '847'); true
false === (847 == '847'); false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false:
true
