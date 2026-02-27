const $64$moonbitlang$47$core$47$builtin$46$Json$Null = { $tag: 0, $name: "Null" };
const $64$moonbitlang$47$core$47$builtin$46$Json$True = { $tag: 1, $name: "True" };
const $64$moonbitlang$47$core$47$builtin$46$Json$False = { $tag: 2, $name: "False" };
function $64$moonbitlang$47$core$47$builtin$46$Json$Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$name = "Number";
function $64$moonbitlang$47$core$47$builtin$46$Json$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$name = "String";
function $64$moonbitlang$47$core$47$builtin$46$Json$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$tag = 5;
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$name = "Array";
function $64$moonbitlang$47$core$47$builtin$46$Json$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$tag = 6;
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$name = "Object";
const $_1L = { hi: -1, lo: -1 };
const $1000000000000000000L = { hi: 232830643, lo: -1486618624 };
const $0L = { hi: 0, lo: 0 };
const $1L = { hi: 0, lo: 1 };
const $10L = { hi: 0, lo: 10 };
const $100L = { hi: 0, lo: 100 };
const $1000L = { hi: 0, lo: 1000 };
const $10000L = { hi: 0, lo: 10000 };
const $100000L = { hi: 0, lo: 100000 };
const $1000000L = { hi: 0, lo: 1000000 };
const $10000000L = { hi: 0, lo: 10000000 };
const $100000000L = { hi: 0, lo: 100000000 };
const $1000000000L = { hi: 0, lo: 1000000000 };
const $10000000000L = { hi: 2, lo: 1410065408 };
const $100000000000L = { hi: 23, lo: 1215752192 };
const $1000000000000L = { hi: 232, lo: -727379968 };
const $10000000000000L = { hi: 2328, lo: 1316134912 };
const $100000000000000L = { hi: 23283, lo: 276447232 };
const $1000000000000000L = { hi: 232830, lo: -1530494976 };
const $22L = { hi: 0, lo: 22 };
const $37L = { hi: 0, lo: 37 };
const $_22L = { hi: -1, lo: -22 };
const $bytes_literal$0 = new Uint8Array([105,99,112,52]);
const $bytes_literal$1 = new Uint8Array([105,99,112,53]);
const $bytes_literal$2 = new Uint8Array([105,99,112,54]);
const $bytes_literal$3 = new Uint8Array([105,99,48,55]);
const $bytes_literal$4 = new Uint8Array([105,99,48,56]);
const $bytes_literal$5 = new Uint8Array([105,99,48,57]);
const $bytes_literal$6 = new Uint8Array([105,99,49,48]);
const $bytes_literal$7 = new Uint8Array([105,99,110,115]);
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $2L = { hi: 0, lo: 2 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FP311moonbitlang4core7builtin12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
Result$Err$0$.prototype.$name = "Err";
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
Result$Ok$0$.prototype.$name = "Ok";
function Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(param0) {
  this._0 = param0;
}
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest.prototype.$tag = 13;
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest.prototype.$name = "trkbt10/iconset/types.IconsetError.InvalidManifest";
function Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize.prototype.$tag = 12;
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize.prototype.$name = "trkbt10/iconset/types.IconsetError.InvalidImageSize";
const Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EmptySizeList = { $tag: 11, $name: "trkbt10/iconset/types.IconsetError.EmptySizeList" };
function Error$trkbt10$47$iconset$47$types$46$IconsetError$46$UnsupportedFormat(param0) {
  this._0 = param0;
}
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$UnsupportedFormat.prototype.$tag = 10;
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$UnsupportedFormat.prototype.$name = "trkbt10/iconset/types.IconsetError.UnsupportedFormat";
function Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EncodingError(param0) {
  this._0 = param0;
}
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EncodingError.prototype.$tag = 9;
Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EncodingError.prototype.$name = "trkbt10/iconset/types.IconsetError.EncodingError";
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 8;
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$name = "moonbitlang/core/strconv.StrConvError.StrConvError";
function Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError.prototype.$tag = 7;
Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError.prototype.$name = "moonbitlang/core/json.JsonDecodeError.JsonDecodeError";
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar.prototype.$tag = 6;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar.prototype.$name = "moonbitlang/core/json.ParseError.InvalidChar";
const Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof = { $tag: 5, $name: "moonbitlang/core/json.ParseError.InvalidEof" };
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber.prototype.$tag = 4;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber.prototype.$name = "moonbitlang/core/json.ParseError.InvalidNumber";
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape.prototype.$tag = 3;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape.prototype.$name = "moonbitlang/core/json.ParseError.InvalidIdentEscape";
const Error$moonbitlang$47$core$47$json$46$ParseError$46$DepthLimitExceeded = { $tag: 2, $name: "moonbitlang/core/json.ParseError.DepthLimitExceeded" };
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds = { $tag: 1, $name: "moonbitlang/core/builtin.CreatingViewError.IndexOutOfBounds" };
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex = { $tag: 0, $name: "moonbitlang/core/builtin.CreatingViewError.InvalidIndex" };
const _M0FP311moonbitlang4core7builtin19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MP311moonbitlang4core7builtin7JSArray4push = (arr, val) => { arr.push(val); };
const _M0MP311moonbitlang4core7builtin7MyInt6422convert__to__double__u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const _M0MP311moonbitlang4core7builtin7MyInt6423reinterpret__as__double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
const _M0FP311moonbitlang4core7builtin23try__init__wasm__helper = function() {
  try {
    return new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {
    return undefined;
  }
};
const _M0MP311moonbitlang4core7builtin7MyInt6411div__bigint = (a, b) => {
  const aVal = (BigInt(a.hi) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MP311moonbitlang4core7builtin7MyInt6414div__u__bigint = (a, b) => {
  const aVal = (BigInt(a.hi >>> 0) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi >>> 0) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MP311moonbitlang4core7builtin7MyInt647compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const _M0MP311moonbitlang4core7builtin7MyInt6410compare__u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const _M0MP311moonbitlang4core7builtin7MyInt6419convert__to__double = (a) => a.hi * 4294967296.0 + (a.lo >>> 0);
const _M0FP311moonbitlang4core7builtin15ryu__to__string = (number) => number.toString();
const $bytes_literal$8 = new Uint8Array();
const _M0MP311moonbitlang4core7builtin7JSArray3pop = (arr) => arr.pop();
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
Result$Err$1$.prototype.$name = "Err";
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
Result$Ok$1$.prototype.$name = "Ok";
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
Result$Err$2$.prototype.$name = "Err";
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
Result$Ok$2$.prototype.$name = "Ok";
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
Result$Err$3$.prototype.$name = "Err";
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
Result$Ok$3$.prototype.$name = "Ok";
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
Result$Err$4$.prototype.$name = "Err";
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
Result$Ok$4$.prototype.$name = "Ok";
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
Result$Err$5$.prototype.$name = "Err";
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
Result$Ok$5$.prototype.$name = "Ok";
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
Result$Err$6$.prototype.$name = "Err";
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
Result$Ok$6$.prototype.$name = "Ok";
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
Result$Err$7$.prototype.$name = "Err";
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
Result$Ok$7$.prototype.$name = "Ok";
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
Result$Err$8$.prototype.$name = "Err";
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
Result$Ok$8$.prototype.$name = "Ok";
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
Result$Err$9$.prototype.$name = "Err";
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
Result$Ok$9$.prototype.$name = "Ok";
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
Result$Err$10$.prototype.$name = "Err";
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
Result$Ok$10$.prototype.$name = "Ok";
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $65536L = { hi: 0, lo: 65536 };
const Option$None$11$ = { $tag: 0, $name: "None" };
function Option$Some$11$(param0) {
  this._0 = param0;
}
Option$Some$11$.prototype.$tag = 1;
Option$Some$11$.prototype.$name = "Some";
function Result$Err$12$(param0) {
  this._0 = param0;
}
Result$Err$12$.prototype.$tag = 0;
Result$Err$12$.prototype.$name = "Err";
function Result$Ok$12$(param0) {
  this._0 = param0;
}
Result$Ok$12$.prototype.$tag = 1;
Result$Ok$12$.prototype.$name = "Ok";
function Result$Err$13$(param0) {
  this._0 = param0;
}
Result$Err$13$.prototype.$tag = 0;
Result$Err$13$.prototype.$name = "Err";
function Result$Ok$13$(param0) {
  this._0 = param0;
}
Result$Ok$13$.prototype.$tag = 1;
Result$Ok$13$.prototype.$name = "Ok";
function Result$Err$14$(param0) {
  this._0 = param0;
}
Result$Err$14$.prototype.$tag = 0;
Result$Err$14$.prototype.$name = "Err";
function Result$Ok$14$(param0) {
  this._0 = param0;
}
Result$Ok$14$.prototype.$tag = 1;
Result$Ok$14$.prototype.$name = "Ok";
function Result$Err$15$(param0) {
  this._0 = param0;
}
Result$Err$15$.prototype.$tag = 0;
Result$Err$15$.prototype.$name = "Err";
function Result$Ok$15$(param0) {
  this._0 = param0;
}
Result$Ok$15$.prototype.$tag = 1;
Result$Ok$15$.prototype.$name = "Ok";
function Result$Err$16$(param0) {
  this._0 = param0;
}
Result$Err$16$.prototype.$tag = 0;
Result$Err$16$.prototype.$name = "Err";
function Result$Ok$16$(param0) {
  this._0 = param0;
}
Result$Ok$16$.prototype.$tag = 1;
Result$Ok$16$.prototype.$name = "Ok";
function Result$Err$17$(param0) {
  this._0 = param0;
}
Result$Err$17$.prototype.$tag = 0;
Result$Err$17$.prototype.$name = "Err";
function Result$Ok$17$(param0) {
  this._0 = param0;
}
Result$Ok$17$.prototype.$tag = 1;
Result$Ok$17$.prototype.$name = "Ok";
function Result$Err$18$(param0) {
  this._0 = param0;
}
Result$Err$18$.prototype.$tag = 0;
Result$Err$18$.prototype.$name = "Err";
function Result$Ok$18$(param0) {
  this._0 = param0;
}
Result$Ok$18$.prototype.$tag = 1;
Result$Ok$18$.prototype.$name = "Ok";
const $9007199254740991L = { hi: 2097151, lo: -1 };
const $_9007199254740991L = { hi: -2097152, lo: 1 };
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
Result$Err$19$.prototype.$name = "Err";
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
Result$Ok$19$.prototype.$name = "Ok";
function Result$Err$20$(param0) {
  this._0 = param0;
}
Result$Err$20$.prototype.$tag = 0;
Result$Err$20$.prototype.$name = "Err";
function Result$Ok$20$(param0) {
  this._0 = param0;
}
Result$Ok$20$.prototype.$tag = 1;
Result$Ok$20$.prototype.$name = "Ok";
const $64$moonbitlang$47$core$47$json$46$Token$Null = { $tag: 0, $name: "Null" };
const $64$moonbitlang$47$core$47$json$46$Token$True = { $tag: 1, $name: "True" };
const $64$moonbitlang$47$core$47$json$46$Token$False = { $tag: 2, $name: "False" };
function $64$moonbitlang$47$core$47$json$46$Token$Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$Token$Number.prototype.$tag = 3;
$64$moonbitlang$47$core$47$json$46$Token$Number.prototype.$name = "Number";
function $64$moonbitlang$47$core$47$json$46$Token$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$Token$String.prototype.$tag = 4;
$64$moonbitlang$47$core$47$json$46$Token$String.prototype.$name = "String";
const $64$moonbitlang$47$core$47$json$46$Token$LBrace = { $tag: 5, $name: "LBrace" };
const $64$moonbitlang$47$core$47$json$46$Token$RBrace = { $tag: 6, $name: "RBrace" };
const $64$moonbitlang$47$core$47$json$46$Token$LBracket = { $tag: 7, $name: "LBracket" };
const $64$moonbitlang$47$core$47$json$46$Token$RBracket = { $tag: 8, $name: "RBracket" };
const $64$moonbitlang$47$core$47$json$46$Token$Comma = { $tag: 9, $name: "Comma" };
function $64$moonbitlang$47$core$47$json$46$WriteFrame$Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$WriteFrame$Array.prototype.$tag = 0;
$64$moonbitlang$47$core$47$json$46$WriteFrame$Array.prototype.$name = "Array";
function $64$moonbitlang$47$core$47$json$46$WriteFrame$Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$WriteFrame$Object.prototype.$tag = 1;
$64$moonbitlang$47$core$47$json$46$WriteFrame$Object.prototype.$name = "Object";
const $64$moonbitlang$47$core$47$json$46$JsonPath$Root = { $tag: 0, $name: "Root" };
function $64$moonbitlang$47$core$47$json$46$JsonPath$Key(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$JsonPath$Key.prototype.$tag = 1;
$64$moonbitlang$47$core$47$json$46$JsonPath$Key.prototype.$name = "Key";
function $64$moonbitlang$47$core$47$json$46$JsonPath$Index(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$JsonPath$Index.prototype.$tag = 2;
$64$moonbitlang$47$core$47$json$46$JsonPath$Index.prototype.$name = "Index";
const Option$None$21$ = { $tag: 0, $name: "None" };
function Option$Some$21$(param0) {
  this._0 = param0;
}
Option$Some$21$.prototype.$tag = 1;
Option$Some$21$.prototype.$name = "Some";
function Result$Err$22$(param0) {
  this._0 = param0;
}
Result$Err$22$.prototype.$tag = 0;
Result$Err$22$.prototype.$name = "Err";
function Result$Ok$22$(param0) {
  this._0 = param0;
}
Result$Ok$22$.prototype.$tag = 1;
Result$Ok$22$.prototype.$name = "Ok";
const Option$None$23$ = { $tag: 0, $name: "None" };
function Option$Some$23$(param0) {
  this._0 = param0;
}
Option$Some$23$.prototype.$tag = 1;
Option$Some$23$.prototype.$name = "Some";
function Result$Err$24$(param0) {
  this._0 = param0;
}
Result$Err$24$.prototype.$tag = 0;
Result$Err$24$.prototype.$name = "Err";
function Result$Ok$24$(param0) {
  this._0 = param0;
}
Result$Ok$24$.prototype.$tag = 1;
Result$Ok$24$.prototype.$name = "Ok";
function Result$Err$25$(param0) {
  this._0 = param0;
}
Result$Err$25$.prototype.$tag = 0;
Result$Err$25$.prototype.$name = "Err";
function Result$Ok$25$(param0) {
  this._0 = param0;
}
Result$Ok$25$.prototype.$tag = 1;
Result$Ok$25$.prototype.$name = "Ok";
function Result$Err$26$(param0) {
  this._0 = param0;
}
Result$Err$26$.prototype.$tag = 0;
Result$Err$26$.prototype.$name = "Err";
function Result$Ok$26$(param0) {
  this._0 = param0;
}
Result$Ok$26$.prototype.$tag = 1;
Result$Ok$26$.prototype.$name = "Ok";
function Result$Err$27$(param0) {
  this._0 = param0;
}
Result$Err$27$.prototype.$tag = 0;
Result$Err$27$.prototype.$name = "Err";
function Result$Ok$27$(param0) {
  this._0 = param0;
}
Result$Ok$27$.prototype.$tag = 1;
Result$Ok$27$.prototype.$name = "Ok";
function Result$Err$28$(param0) {
  this._0 = param0;
}
Result$Err$28$.prototype.$tag = 0;
Result$Err$28$.prototype.$name = "Err";
function Result$Ok$28$(param0) {
  this._0 = param0;
}
Result$Ok$28$.prototype.$tag = 1;
Result$Ok$28$.prototype.$name = "Ok";
function Result$Err$29$(param0) {
  this._0 = param0;
}
Result$Err$29$.prototype.$tag = 0;
Result$Err$29$.prototype.$name = "Err";
function Result$Ok$29$(param0) {
  this._0 = param0;
}
Result$Ok$29$.prototype.$tag = 1;
Result$Ok$29$.prototype.$name = "Ok";
function Result$Err$30$(param0) {
  this._0 = param0;
}
Result$Err$30$.prototype.$tag = 0;
Result$Err$30$.prototype.$name = "Err";
function Result$Ok$30$(param0) {
  this._0 = param0;
}
Result$Ok$30$.prototype.$tag = 1;
Result$Ok$30$.prototype.$name = "Ok";
function Result$Err$31$(param0) {
  this._0 = param0;
}
Result$Err$31$.prototype.$tag = 0;
Result$Err$31$.prototype.$name = "Err";
function Result$Ok$31$(param0) {
  this._0 = param0;
}
Result$Ok$31$.prototype.$tag = 1;
Result$Ok$31$.prototype.$name = "Ok";
function Result$Err$32$(param0) {
  this._0 = param0;
}
Result$Err$32$.prototype.$tag = 0;
Result$Err$32$.prototype.$name = "Err";
function Result$Ok$32$(param0) {
  this._0 = param0;
}
Result$Ok$32$.prototype.$tag = 1;
Result$Ok$32$.prototype.$name = "Ok";
function Result$Err$33$(param0) {
  this._0 = param0;
}
Result$Err$33$.prototype.$tag = 0;
Result$Err$33$.prototype.$name = "Err";
function Result$Ok$33$(param0) {
  this._0 = param0;
}
Result$Ok$33$.prototype.$tag = 1;
Result$Ok$33$.prototype.$name = "Ok";
const _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string, method_1: _M0IP016_24default__implP311moonbitlang4core7builtin6Logger16write__substringGRP311moonbitlang4core7builtin13StringBuilderE, method_2: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view, method_3: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char };
const _M0FP311moonbitlang4core7builtin4null = $64$moonbitlang$47$core$47$builtin$46$Json$Null;
const _M0FP311moonbitlang4core7builtin19wasm__helper__cache = { tried: false, exports: undefined };
const _M0FP311moonbitlang4core6uint6410max__value = $_1L;
const _M0FP311moonbitlang4core7strconv14base__err__str = "invalid base";
const _M0FP311moonbitlang4core7strconv15range__err__str = "value out of range";
const _M0FP311moonbitlang4core7strconv16syntax__err__str = "invalid syntax";
const _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603 = "";
const _M0FP311moonbitlang4core7strconv17min__19digit__int = $1000000000000000000L;
const _M0FP311moonbitlang4core7strconv34parse__scientific_2eexp__num_7c279 = $0L;
const _M0FP311moonbitlang4core7strconv33parse__number_2eexp__number_7c260 = $0L;
const _M0FP311moonbitlang4core7strconv12double__info = { mantissa_bits: 52, exponent_bits: 11, bias: -1023 };
const _M0FP311moonbitlang4core7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1247 = { _0: 0, _1: "" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1248 = { _0: 1, _1: "5" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1249 = { _0: 1, _1: "25" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1250 = { _0: 1, _1: "125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1251 = { _0: 2, _1: "625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1252 = { _0: 2, _1: "3125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1253 = { _0: 2, _1: "15625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1254 = { _0: 3, _1: "78125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1255 = { _0: 3, _1: "390625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1256 = { _0: 3, _1: "1953125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1257 = { _0: 4, _1: "9765625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1258 = { _0: 4, _1: "48828125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1259 = { _0: 4, _1: "244140625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1260 = { _0: 4, _1: "1220703125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1261 = { _0: 5, _1: "6103515625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1262 = { _0: 5, _1: "30517578125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1263 = { _0: 5, _1: "152587890625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1264 = { _0: 6, _1: "762939453125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1265 = { _0: 6, _1: "3814697265625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1266 = { _0: 6, _1: "19073486328125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1267 = { _0: 7, _1: "95367431640625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1268 = { _0: 7, _1: "476837158203125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1269 = { _0: 7, _1: "2384185791015625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1270 = { _0: 7, _1: "11920928955078125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1271 = { _0: 8, _1: "59604644775390625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1272 = { _0: 8, _1: "298023223876953125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1273 = { _0: 8, _1: "1490116119384765625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1274 = { _0: 9, _1: "7450580596923828125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1275 = { _0: 9, _1: "37252902984619140625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1276 = { _0: 9, _1: "186264514923095703125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1277 = { _0: 10, _1: "931322574615478515625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1278 = { _0: 10, _1: "4656612873077392578125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1279 = { _0: 10, _1: "23283064365386962890625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1280 = { _0: 10, _1: "116415321826934814453125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1281 = { _0: 11, _1: "582076609134674072265625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1282 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1283 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1284 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1285 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1286 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1287 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1288 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1289 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1290 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1291 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1292 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1293 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1294 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1295 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1296 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1297 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1298 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1299 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1300 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1301 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1302 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1303 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1304 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1305 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1306 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1307 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FP311moonbitlang4core7strconv19left__shift__cheats = [_M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1247, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1248, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1249, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1250, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1251, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1252, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1253, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1254, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1255, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1256, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1257, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1258, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1259, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1260, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1261, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1262, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1263, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1264, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1265, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1266, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1267, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1268, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1269, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1270, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1271, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1272, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1273, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1274, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1275, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1276, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1277, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1278, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1279, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1280, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1281, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1282, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1283, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1284, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1285, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1286, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1287, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1288, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1289, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1290, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1291, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1292, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1293, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1294, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1295, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1296, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1297, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1298, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1299, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1300, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1301, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1302, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1303, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1304, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1305, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1306, _M0FP311moonbitlang4core7strconv34left__shift__cheats_2etuple_2f1307];
const _M0FP311moonbitlang4core7strconv10int__pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const _M0FP311moonbitlang4core7strconv25max__exponent__fast__path = $22L;
const _M0FP311moonbitlang4core7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FP311moonbitlang4core7strconv36max__exponent__disguised__fast__path = $37L;
const _M0FP311moonbitlang4core7strconv25min__exponent__fast__path = $_22L;
const _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1072 = ".";
const _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1073 = "e";
const _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1074 = "E";
const _M0FP311moonbitlang4core4json23output_2e_2abind_7c1389 = "~/";
const _M0FP37trkbt107iconset4icns15standard__types = [{ code: $bytes_literal$0, pixel_size: 16, description: "16x16" }, { code: $bytes_literal$1, pixel_size: 32, description: "32x32" }, { code: $bytes_literal$2, pixel_size: 64, description: "64x64" }, { code: $bytes_literal$3, pixel_size: 128, description: "128x128" }, { code: $bytes_literal$4, pixel_size: 256, description: "256x256" }, { code: $bytes_literal$5, pixel_size: 512, description: "512x512" }, { code: $bytes_literal$6, pixel_size: 1024, description: "1024x1024 (512@2x)" }];
const _M0FP37trkbt107iconset4icns11icns__magic = $bytes_literal$7;
const _M0FP37trkbt107iconset8manifest17valid__ico__sizes = [16, 24, 32, 48, 64, 128, 256];
const _M0FP37trkbt107iconset8manifest18valid__icns__sizes = [16, 32, 64, 128, 256, 512, 1024];
const _M0FP47trkbt107iconset3cmd4wasm8sessions = [];
const _M0FP311moonbitlang4core7builtin33brute__force__find_2econstr_2f408 = 0;
const _M0FP311moonbitlang4core7builtin43boyer__moore__horspool__find_2econstr_2f394 = 0;
const _M0FP311moonbitlang4core6double13neg__infinity = _M0MP311moonbitlang4core5int645Int6423reinterpret__as__double($_4503599627370496L);
const _M0FP311moonbitlang4core6double14not__a__number = _M0MP311moonbitlang4core5int645Int6423reinterpret__as__double($9221120237041090561L);
const _M0FP311moonbitlang4core6double8infinity = _M0MP311moonbitlang4core5int645Int6423reinterpret__as__double($9218868437227405312L);
const _M0FP311moonbitlang4core7strconv25max__mantissa__fast__path = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shl3shl($2L, 52);
const _M0FP311moonbitlang4core7strconv28checked__mul_2econstr_2f1731 = $0L;
const _M0FP311moonbitlang4core7builtin4seed = _M0FP311moonbitlang4core7builtin12random__seed();
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin12MutArrayViewGiEE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin9ArrayViewGyEE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin4JsonE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core6string10StringViewE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGyE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGiE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGuE(msg) {
  $panic();
}
function _M0FP311moonbitlang4core5abort5abortGOiE(msg) {
  return $panic();
}
function _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(self, obj) {
  _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Show6output(obj, self);
}
function _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core4json8JsonPathE(self, obj) {
  _M0IP311moonbitlang4core4json8JsonPathP311moonbitlang4core7builtin4Show6output(obj, self);
}
function _M0MP311moonbitlang4core7builtin6Logger13write__objectGsE(self, obj) {
  _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show6output(obj, self);
}
function _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core7builtin4JsonE(self, obj) {
  _M0IP311moonbitlang4core4json4JsonP311moonbitlang4core7builtin4Show6output(obj, self);
}
function _M0MP311moonbitlang4core4json4Json5array(array) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(array);
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$String(self);
}
function _M0FP311moonbitlang4core7builtin4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0MP311moonbitlang4core7builtin6Hasher8consume4(self, input) {
  self.acc = Math.imul(_M0FP311moonbitlang4core7builtin4rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MP311moonbitlang4core7builtin6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MP311moonbitlang4core7builtin6Hasher8consume4(self, value);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin12MutArrayViewGiEE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin12MutArrayViewGiEE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin9ArrayViewGyEE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin9ArrayViewGyEE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin4JsonE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin4JsonE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core6string10StringViewE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core6string10StringViewE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGyE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGyE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGiE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGiE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGuE(string, loc) {
  _M0FP311moonbitlang4core5abort5abortGuE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGOiE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGOiE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0MP311moonbitlang4core5array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP311moonbitlang4core4byte4Byte8to__char(self) {
  return self;
}
function _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(size_hint) {
  return { val: "" };
}
function _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function _M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(self, 56319);
}
function _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(self, 57343);
}
function _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MP311moonbitlang4core6string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0MP311moonbitlang4core5array5Array2atGRP311moonbitlang4core7builtin3MapGizEE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core5array5Array2atGRP311moonbitlang4core7builtin4JsonE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin13SourceLocRepr5parse(repr) {
  const _bind = { str: repr, start: 0, end: repr.length };
  const _data = _M0MP311moonbitlang4core6string10StringView4data(_bind);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(_bind);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(_bind) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let match_tag_saver_1 = -1;
  let match_tag_saver_2 = -1;
  let match_tag_saver_3 = -1;
  let match_tag_saver_4 = -1;
  let tag_0 = -1;
  let tag_1 = -1;
  let tag_1_1 = -1;
  let tag_1_2 = -1;
  let tag_3 = -1;
  let tag_2 = -1;
  let tag_2_1 = -1;
  let tag_4 = -1;
  _L: {
    if (_cursor < _end) {
      const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
      _cursor = _cursor + 1 | 0;
      if (next_char === 64) {
        _L$2: while (true) {
          tag_0 = _cursor;
          if (_cursor < _end) {
            const next_char$2 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char$2 === 58) {
              if (_cursor < _end) {
                _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                let _tmp = 0;
                _L$3: while (true) {
                  const dispatch_15 = _tmp;
                  _L$4: {
                    _L$5: {
                      switch (dispatch_15) {
                        case 3: {
                          tag_1_2 = tag_1_1;
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  tag_1 = _cursor;
                                  tag_2_1 = tag_2;
                                  tag_2 = _cursor;
                                  tag_3 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$4 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$4 < 48) {
                                        if (next_char$4 === 45) {
                                          break _L$4;
                                        } else {
                                          break _L$7;
                                        }
                                      } else {
                                        if (next_char$4 > 57) {
                                          if (next_char$4 < 59) {
                                            _tmp = 3;
                                            continue _L$3;
                                          } else {
                                            break _L$7;
                                          }
                                        } else {
                                          _tmp = 6;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 2: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 0: {
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$3 === 58) {
                              _tmp = 1;
                              continue _L$3;
                            } else {
                              _tmp = 0;
                              continue _L$3;
                            }
                          } else {
                            break _L;
                          }
                        }
                        case 4: {
                          tag_1 = _cursor;
                          tag_4 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 4;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  tag_1_2 = tag_1_1;
                                  tag_1_1 = tag_1;
                                  tag_1 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$4 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$4 < 58) {
                                        if (next_char$4 < 48) {
                                          break _L$7;
                                        } else {
                                          tag_1 = _cursor;
                                          tag_2_1 = tag_2;
                                          tag_2 = _cursor;
                                          if (_cursor < _end) {
                                            _L$8: {
                                              const next_char$5 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                              _cursor = _cursor + 1 | 0;
                                              if (next_char$5 < 58) {
                                                if (next_char$5 < 48) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 5;
                                                  continue _L$3;
                                                }
                                              } else {
                                                if (next_char$5 > 58) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 3;
                                                  continue _L$3;
                                                }
                                              }
                                            }
                                            _tmp = 0;
                                            continue _L$3;
                                          } else {
                                            break _L$5;
                                          }
                                        }
                                      } else {
                                        if (next_char$4 > 58) {
                                          break _L$7;
                                        } else {
                                          _tmp = 1;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 5: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 5;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L$5;
                          }
                        }
                        case 6: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          tag_3 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 48) {
                                if (next_char$3 === 45) {
                                  break _L$4;
                                } else {
                                  break _L$6;
                                }
                              } else {
                                if (next_char$3 > 57) {
                                  if (next_char$3 < 59) {
                                    _tmp = 3;
                                    continue _L$3;
                                  } else {
                                    break _L$6;
                                  }
                                } else {
                                  _tmp = 6;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 1: {
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        default: {
                          break _L;
                        }
                      }
                    }
                    tag_1 = tag_1_2;
                    tag_2 = tag_2_1;
                    match_tag_saver_0 = tag_0;
                    match_tag_saver_1 = tag_1;
                    match_tag_saver_2 = tag_2;
                    match_tag_saver_3 = tag_3;
                    match_tag_saver_4 = tag_4;
                    accept_state = 0;
                    match_end = _cursor;
                    break _L;
                  }
                  tag_1_1 = tag_1_2;
                  tag_1 = _cursor;
                  tag_2 = tag_2_1;
                  if (_cursor < _end) {
                    _L$5: {
                      const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char$3 < 58) {
                        if (next_char$3 < 48) {
                          break _L$5;
                        } else {
                          _tmp = 4;
                          continue;
                        }
                      } else {
                        if (next_char$3 > 58) {
                          break _L$5;
                        } else {
                          _tmp = 1;
                          continue;
                        }
                      }
                    }
                    _tmp = 0;
                    continue;
                  } else {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              continue;
            }
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    let start_line;
    let _try_err;
    _L$2: {
      _L$3: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_1 + 1 | 0, match_tag_saver_2);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          start_line = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err = _err._0;
          break _L$3;
        }
        break _L$2;
      }
      start_line = $panic();
    }
    let start_column;
    let _try_err$2;
    _L$3: {
      _L$4: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_2 + 1 | 0, match_tag_saver_3);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          start_column = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$2 = _err._0;
          break _L$4;
        }
        break _L$3;
      }
      start_column = $panic();
    }
    let pkg;
    let _try_err$3;
    _L$4: {
      _L$5: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, _start + 1 | 0, match_tag_saver_0);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          pkg = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$3 = _err._0;
          break _L$5;
        }
        break _L$4;
      }
      pkg = $panic();
    }
    let filename;
    let _try_err$4;
    _L$5: {
      _L$6: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_0 + 1 | 0, match_tag_saver_1);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          filename = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$4 = _err._0;
          break _L$6;
        }
        break _L$5;
      }
      filename = $panic();
    }
    let end_line;
    let _try_err$5;
    _L$6: {
      _L$7: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_3 + 1 | 0, match_tag_saver_4);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          end_line = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$5 = _err._0;
          break _L$7;
        }
        break _L$6;
      }
      end_line = $panic();
    }
    let end_column;
    let _try_err$6;
    _L$7: {
      _L$8: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_4 + 1 | 0, match_end);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          end_column = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$6 = _err._0;
          break _L$8;
        }
        break _L$7;
      }
      end_column = $panic();
    }
    return { pkg: pkg, filename: filename, start_line: start_line, start_column: start_column, end_line: end_line, end_column: end_column };
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin13StringBuilder13write__objectGdE(self, obj) {
  _M0IP311moonbitlang4core6double6DoubleP311moonbitlang4core7builtin4Show6output(obj, { self: self, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function _M0MP311moonbitlang4core7builtin7MyInt647to__int(self) {
  return self.lo;
}
function _M0MP311moonbitlang4core6uint646UInt647to__int(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt647to__int(self);
}
function _M0MP311moonbitlang4core6uint646UInt648to__byte(self) {
  return _M0MP311moonbitlang4core6uint646UInt647to__int(self) & 255;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq5equal(self, that) {
  return self === that;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MP311moonbitlang4core7builtin6Hasher12combine__int(self, value) {
  _M0MP311moonbitlang4core7builtin6Hasher13combine__uint(self, value);
}
function _M0MP311moonbitlang4core4json4Json6number(number, repr) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Number(number, repr);
}
function _M0MP311moonbitlang4core7builtin7MyInt649from__int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function _M0MP311moonbitlang4core3int3Int9to__int64(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt649from__int(self);
}
function _M0MP311moonbitlang4core7builtin6Hasher7combineGiE(self, value) {
  _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Hash13hash__combine(value, self);
}
function _M0MP311moonbitlang4core7builtin6Hasher7combineGsE(self, value) {
  _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP311moonbitlang4core6string10StringViewE(x, y) {
  return !_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin2Eq5equal(x, y);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGkE(x, y) {
  return _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGmE(x, y) {
  return _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGmE(x, y) {
  return _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(x, y) {
  return _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGmE(x, y) {
  return _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(x, y) {
  return _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGmE(x, y) {
  return _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin7Compare7compare(x, y) >= 0;
}
function _M0MP311moonbitlang4core7builtin6Hasher9avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function _M0MP311moonbitlang4core7builtin6Hasher8finalize(self) {
  return _M0MP311moonbitlang4core7builtin6Hasher9avalanche(self);
}
function _M0MP311moonbitlang4core7builtin6Hasher11new_2einner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function _M0MP311moonbitlang4core7builtin6Hasher3new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FP311moonbitlang4core7builtin4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MP311moonbitlang4core7builtin6Hasher11new_2einner(seed);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGiE(self) {
  const h = _M0MP311moonbitlang4core7builtin6Hasher3new(undefined);
  _M0MP311moonbitlang4core7builtin6Hasher7combineGiE(h, self);
  return _M0MP311moonbitlang4core7builtin6Hasher8finalize(h);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(self) {
  const h = _M0MP311moonbitlang4core7builtin6Hasher3new(undefined);
  _M0MP311moonbitlang4core7builtin6Hasher7combineGsE(h, self);
  return _M0MP311moonbitlang4core7builtin6Hasher8finalize(h);
}
function _M0MP311moonbitlang4core6string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    if (end$2 < len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$0$({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function _M0MP311moonbitlang4core6string6String3sub(self, start$46$opt, end) {
  let start;
  if (start$46$opt === undefined) {
    start = 0;
  } else {
    const _Some = start$46$opt;
    start = _Some;
  }
  return _M0MP311moonbitlang4core6string6String11sub_2einner(self, start, end);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin6Logger16write__substringGRP311moonbitlang4core7builtin13StringBuilderE(self, value, start, len) {
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0MP311moonbitlang4core6string6String11sub_2einner(value, start, start + len | 0);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    _tmp = $panic();
  }
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(self, _tmp);
}
function _M0MP311moonbitlang4core6string10StringView4data(self) {
  return self.str;
}
function _M0MP311moonbitlang4core6string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core6string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core4json10ParseErrorE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core4json10ParseErrorP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core4json15JsonDecodeErrorE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core4json15JsonDecodeErrorP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin4JsonE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core4json4JsonP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin9SourceLocP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGUsRP311moonbitlang4core7builtin4JsonEE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGcE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core7builtin4JsonE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin6Logger19write__iter_2einnerGRP311moonbitlang4core7builtin4JsonE(self, iter, prefix, suffix, sep, trailing) {
  self.method_table.method_0(self.self, prefix);
  if (trailing) {
    while (true) {
      const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core7builtin4JsonE(iter);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core7builtin4JsonE(self, _x);
        self.method_table.method_0(self.self, sep);
        continue;
      }
    }
  } else {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core7builtin4JsonE(iter);
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core7builtin4JsonE(self, _x);
      while (true) {
        const _bind$2 = _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core7builtin4JsonE(iter);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$2;
          const _x$2 = _Some$2;
          self.method_table.method_0(self.self, sep);
          _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core7builtin4JsonE(self, _x$2);
          continue;
        }
      }
    }
  }
  self.method_table.method_0(self.self, suffix);
}
function _M0FP311moonbitlang4core7builtin4reprGcE(t) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core4char4CharP311moonbitlang4core7builtin4Show6output(t, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0MP311moonbitlang4core3int3Int18to__string_2einner(self, radix) {
  return _M0FP311moonbitlang4core7builtin19int__to__string__js(self, radix);
}
function _M0MP311moonbitlang4core6string10StringView11unsafe__get(self, index) {
  return self.str.charCodeAt(self.start + index | 0);
}
function _M0MP311moonbitlang4core7builtin4Iter3newGUsRP311moonbitlang4core7builtin4JsonEE(f) {
  return f;
}
function _M0MP311moonbitlang4core7builtin4Iter3newGcE(f) {
  return f;
}
function _M0MP311moonbitlang4core7builtin4Iter3newGRP311moonbitlang4core7builtin4JsonE(f) {
  return f;
}
function _M0MP311moonbitlang4core6string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = _M0MP311moonbitlang4core6string10StringView6length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MP311moonbitlang4core6string10StringView6length(self)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core6string10StringViewE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:113:5-113:36");
}
function _M0MP311moonbitlang4core4uint4UInt8to__byte(self) {
  return self & 255;
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin7Default7default() {
  return 0;
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0FP311moonbitlang4core7builtin31to__hex_2eto__hex__digit_7c3855(i) {
  return i < 10 ? _M0MP311moonbitlang4core4byte4Byte8to__char(_M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Add3add(i, 48)) : _M0MP311moonbitlang4core4byte4Byte8to__char(_M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Sub3sub(_M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Add3add(i, 97), 10));
}
function _M0MP311moonbitlang4core4byte4Byte7to__hex(b) {
  const _self = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(_self, _M0FP311moonbitlang4core7builtin31to__hex_2eto__hex__digit_7c3855(_M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Div3div(b, 16)));
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(_self, _M0FP311moonbitlang4core7builtin31to__hex_2eto__hex__digit_7c3855(_M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin3Mod3mod(b, 16)));
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(_self);
}
function _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_table.method_1(logger.self, self, seg, i - seg | 0);
    return;
  } else {
    return;
  }
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show6output(self, logger) {
  logger.method_table.method_3(logger.self, 34);
  const _env = { _0: logger, _1: self };
  const len = self.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
      break;
    }
    const code = self.charCodeAt(i);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGkE(code, 32)) {
            _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MP311moonbitlang4core4byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0FP311moonbitlang4core7builtin30output_2eflush__segment_7c3845(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  logger.method_table.method_3(logger.self, 34);
}
function _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MP311moonbitlang4core6string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  return _M0MP311moonbitlang4core7builtin4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin2Eq5equal(self, other) {
  const len = _M0MP311moonbitlang4core6string10StringView6length(self);
  if (len === _M0MP311moonbitlang4core6string10StringView6length(other)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGUizEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGUiuEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP311moonbitlang4core7builtin4JsonEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGyE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGRP311moonbitlang4core7builtin4JsonE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core6string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = _end < 0 ? self.end + _end | 0 : self.start + _end | 0;
  }
  const abs_start = start < 0 ? self.end + start | 0 : self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    if (abs_end < str_len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$0$({ str: self.str, start: abs_start, end: abs_end });
  } else {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function _M0MP311moonbitlang4core6string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FP311moonbitlang4core7builtin5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:424:9-424:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0MP311moonbitlang4core6string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FP311moonbitlang4core7builtin5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:452:9-452:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MP311moonbitlang4core6string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function _M0MP311moonbitlang4core6string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGOiE("Invalid start index", "@moonbitlang/core/builtin:string.mbt:327:5-327:33");
  }
}
function _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MP311moonbitlang4core6string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MP311moonbitlang4core6string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(str)}`;
}
function _M0FP311moonbitlang4core7builtin28boyer__moore__horspool__find(haystack, needle) {
  const haystack_len = _M0MP311moonbitlang4core6string10StringView6length(haystack);
  const needle_len = _M0MP311moonbitlang4core6string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end4308 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end4308) {
          const _tmp$2 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, i) & 255;
          $bound_check(skip_table, _tmp$2);
          skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end4314 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end4314) {
              if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i + j | 0), _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, (i + needle_len | 0) - 1 | 0) & 255;
          $bound_check(skip_table, _tmp$4);
          _tmp$2 = i + skip_table[_tmp$4] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FP311moonbitlang4core7builtin43boyer__moore__horspool__find_2econstr_2f394;
  }
}
function _M0FP311moonbitlang4core7builtin18brute__force__find(haystack, needle) {
  const haystack_len = _M0MP311moonbitlang4core6string10StringView6length(haystack);
  const needle_len = _M0MP311moonbitlang4core6string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            if (i <= forward_len && _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i), needle_first)) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp = 1;
            while (true) {
              const j = _tmp;
              if (j < needle_len) {
                if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i + j | 0), _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, j))) {
                  break;
                }
                _tmp = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FP311moonbitlang4core7builtin33brute__force__find_2econstr_2f408;
  }
}
function _M0MP311moonbitlang4core6string10StringView4find(self, str) {
  return _M0MP311moonbitlang4core6string10StringView6length(str) <= 4 ? _M0FP311moonbitlang4core7builtin18brute__force__find(self, str) : _M0FP311moonbitlang4core7builtin28boyer__moore__horspool__find(self, str);
}
function _M0MP311moonbitlang4core6string6String6repeat(self, n) {
  if (n <= 0) {
    return "";
  } else {
    if (n === 1) {
      return self;
    } else {
      const len = self.length;
      const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(Math.imul(len, n) | 0);
      const str = self;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < n) {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, str);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
    }
  }
}
function _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core7builtin3MapGizEE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset5types10SizedImageE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core4json10WriteFrameE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset7catalog8PlatformE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGiE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset3ico8IcoEntryE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset4icns9IcnsEntryE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core7builtin4JsonE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core6string10StringView8contains(self, str) {
  const _bind = _M0MP311moonbitlang4core6string10StringView4find(self, str);
  return !(_bind === undefined);
}
function _M0MP311moonbitlang4core6string10StringView14contains__char(self, c) {
  const len = _M0MP311moonbitlang4core6string10StringView6length(self);
  if (len > 0) {
    const c$2 = c;
    if (c$2 <= 65535) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          if (_M0MP311moonbitlang4core6string10StringView11unsafe__get(self, i) === c$2) {
            return true;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (len >= 2) {
        const adj = c$2 - 65536 | 0;
        const high = 55296 + (adj >> 10) | 0;
        const low = 56320 + (adj & 1023) | 0;
        let i = 0;
        while (true) {
          if (i < (len - 1 | 0)) {
            if (_M0MP311moonbitlang4core6string10StringView11unsafe__get(self, i) === high) {
              i = i + 1 | 0;
              if (_M0MP311moonbitlang4core6string10StringView11unsafe__get(self, i) === low) {
                return true;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MP311moonbitlang4core6string10StringView13contains__any(self, chars) {
  if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(chars.str, 0, chars.start, chars.end)) {
    return false;
  } else {
    if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(chars.str, 1, chars.start, chars.end)) {
      const _c = _M0MP311moonbitlang4core6string6String16unsafe__char__at(chars.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(chars.str, 0, chars.start, chars.end));
      return _M0MP311moonbitlang4core6string10StringView14contains__char(self, _c);
    } else {
      const _it = _M0MP311moonbitlang4core6string10StringView4iter(self);
      while (true) {
        const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGcE(_it);
        if (_bind === -1) {
          return false;
        } else {
          const _Some = _bind;
          const _c = _Some;
          if (_M0MP311moonbitlang4core6string10StringView14contains__char(chars, _c)) {
            return true;
          }
          continue;
        }
      }
    }
  }
}
function _M0MP311moonbitlang4core6string6String13contains__any(self, chars) {
  return _M0MP311moonbitlang4core6string10StringView13contains__any({ str: self, start: 0, end: self.length }, chars);
}
function _M0MP311moonbitlang4core6string10StringView9is__empty(self) {
  return _M0MP311moonbitlang4core6string10StringView6length(self) === 0;
}
function _M0MP311moonbitlang4core6string6String4iter(self) {
  const len = self.length;
  const index = { val: 0 };
  return _M0MP311moonbitlang4core7builtin4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0MP311moonbitlang4core6string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < _M0MP311moonbitlang4core6string10StringView6length(self)) {
    const c = _M0MP311moonbitlang4core6string10StringView11unsafe__get(self, idx);
    if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < _M0MP311moonbitlang4core6string10StringView6length(self)) {
        const next = _M0MP311moonbitlang4core6string10StringView11unsafe__get(self, idx + 1 | 0);
        return _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(next) ? _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MP311moonbitlang4core3int3Int18to__string_2einner(self, 10));
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(self) {
  return self;
}
function _M0IP311moonbitlang4core6option6OptionP311moonbitlang4core7builtin4Show6outputGsE(self, logger) {
  if (self === undefined) {
    logger.method_table.method_0(logger.self, "None");
    return;
  } else {
    const _Some = self;
    const _arg = _Some;
    logger.method_table.method_0(logger.self, "Some(");
    _M0MP311moonbitlang4core7builtin6Logger13write__objectGsE(logger, _arg);
    logger.method_table.method_0(logger.self, ")");
    return;
  }
}
function _M0MP311moonbitlang4core5array9ArrayView4iterGRP311moonbitlang4core7builtin4JsonE(self) {
  const i = { val: 0 };
  return _M0MP311moonbitlang4core7builtin4Iter3newGRP311moonbitlang4core7builtin4JsonE(() => {
    if (i.val < _M0MP311moonbitlang4core5array9ArrayView6lengthGRP311moonbitlang4core7builtin4JsonE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MP311moonbitlang4core5array5Array4iterGRP311moonbitlang4core7builtin4JsonE(self) {
  return _M0MP311moonbitlang4core5array9ArrayView4iterGRP311moonbitlang4core7builtin4JsonE({ buf: self, start: 0, end: self.length });
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin4Show6outputGRP311moonbitlang4core7builtin4JsonE(self, logger) {
  _M0MP311moonbitlang4core7builtin6Logger19write__iter_2einnerGRP311moonbitlang4core7builtin4JsonE(logger, _M0MP311moonbitlang4core5array5Array4iterGRP311moonbitlang4core7builtin4JsonE(self), "[", "]", ", ", false);
}
function _M0MP311moonbitlang4core5array13ReadOnlyArray2atGmE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MP311moonbitlang4core5array13ReadOnlyArray2atGiE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MP311moonbitlang4core5array13ReadOnlyArray2atGdE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MP311moonbitlang4core5array13ReadOnlyArray2atGUisEE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MP311moonbitlang4core5array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MP311moonbitlang4core5array9ArrayView2atGyE(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGyE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:arrayview.mbt:124:5-126:6");
  }
}
function _M0MP311moonbitlang4core5array10FixedArray12view_2einnerGyE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start$2 | 0;
    return { buf: _bind, start: start$2, end: start$2 + _bind$2 | 0 };
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin9ArrayViewGyEE("View index out of bounds", "@moonbitlang/core/builtin:arrayview.mbt:440:5-440:38");
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGizEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGiuEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGsRP311moonbitlang4core7builtin4JsonEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MP311moonbitlang4core6option6Option10unwrap__orGcE(self, default_) {
  return self === -1 ? default_ : self;
}
function _M0MP311moonbitlang4core6option6Option3mapGRP311moonbitlang4core6string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array12MutArrayView2atGiE(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGiE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:118:5-120:6");
  }
}
function _M0MP311moonbitlang4core5array12MutArrayView3setGiE(self, index, value) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2] = value;
    return;
  } else {
    _M0FP311moonbitlang4core7builtin5abortGuE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:182:5-184:6");
    return;
  }
}
function _M0MP311moonbitlang4core5array5Array17mut__view_2einnerGiE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start$2 | 0;
    return { buf: _bind, start: start$2, end: start$2 + _bind$2 | 0 };
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin12MutArrayViewGiEE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:258:5-258:38");
  }
}
function _M0MP311moonbitlang4core5array12MutArrayView17mut__view_2einnerGiE(self, start, end) {
  const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(self);
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind = self.buf;
    const _bind$2 = self.start + start$2 | 0;
    const _bind$3 = end$2 - start$2 | 0;
    return { buf: _bind, start: _bind$2, end: _bind$2 + _bind$3 | 0 };
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin12MutArrayViewGiEE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:307:5-307:38");
  }
}
function _M0MP311moonbitlang4core5array5Array3setGRP311moonbitlang4core7builtin3MapGizEE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MP311moonbitlang4core3int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin3Map11new_2einnerGizE(capacity) {
  const capacity$2 = _M0MP311moonbitlang4core3int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function _M0MP311moonbitlang4core7builtin3Map11new_2einnerGiuE(capacity) {
  const capacity$2 = _M0MP311moonbitlang4core3int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function _M0MP311moonbitlang4core7builtin3Map11new_2einnerGsRP311moonbitlang4core7builtin4JsonE(capacity) {
  const capacity$2 = _M0MP311moonbitlang4core3int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGizE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGizEE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGiuE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGiuEE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP311moonbitlang4core7builtin4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGsRP311moonbitlang4core7builtin4JsonEE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MP311moonbitlang4core7builtin3Map10set__entryGizE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MP311moonbitlang4core7builtin3Map10set__entryGiuE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP311moonbitlang4core7builtin4JsonE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MP311moonbitlang4core7builtin3Map10push__awayGizE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MP311moonbitlang4core7builtin3Map10set__entryGizE(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MP311moonbitlang4core7builtin3Map10set__entryGizE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map10push__awayGiuE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MP311moonbitlang4core7builtin3Map10set__entryGiuE(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MP311moonbitlang4core7builtin3Map10set__entryGiuE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map10push__awayGsRP311moonbitlang4core7builtin4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP311moonbitlang4core7builtin4JsonE(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP311moonbitlang4core7builtin4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map15set__with__hashGizE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MP311moonbitlang4core7builtin3Map4growGizE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
      _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGizE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MP311moonbitlang4core7builtin3Map4growGizE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MP311moonbitlang4core7builtin3Map10push__awayGizE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
        _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGizE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map15set__with__hashGiuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MP311moonbitlang4core7builtin3Map4growGiuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
      _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGiuE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MP311moonbitlang4core7builtin3Map4growGiuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MP311moonbitlang4core7builtin3Map10push__awayGiuE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
        _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGiuE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP311moonbitlang4core7builtin4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MP311moonbitlang4core7builtin3Map4growGsRP311moonbitlang4core7builtin4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
      _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP311moonbitlang4core7builtin4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MP311moonbitlang4core7builtin3Map4growGsRP311moonbitlang4core7builtin4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MP311moonbitlang4core7builtin3Map10push__awayGsRP311moonbitlang4core7builtin4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
        _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP311moonbitlang4core7builtin4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map4growGizE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MP311moonbitlang4core7builtin3Map15set__with__hashGizE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map4growGiuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MP311moonbitlang4core7builtin3Map15set__with__hashGiuE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map4growGsRP311moonbitlang4core7builtin4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP311moonbitlang4core7builtin4JsonE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map3setGizE(self, key, value) {
  _M0MP311moonbitlang4core7builtin3Map15set__with__hashGizE(self, key, value, _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGiE(key));
}
function _M0MP311moonbitlang4core7builtin3Map3setGiuE(self, key, value) {
  _M0MP311moonbitlang4core7builtin3Map15set__with__hashGiuE(self, key, value, _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGiE(key));
}
function _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE(self, key, value) {
  _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP311moonbitlang4core7builtin4JsonE(self, key, value, _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(key));
}
function _M0MP311moonbitlang4core7builtin3Map11from__arrayGizE(arr) {
  const length = _M0MP311moonbitlang4core5array9ArrayView6lengthGUizEE(arr);
  let capacity = _M0MP311moonbitlang4core3int3Int20next__power__of__two(length);
  if (length > _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MP311moonbitlang4core7builtin3Map11new_2einnerGizE(capacity);
  const _len = _M0MP311moonbitlang4core5array9ArrayView6lengthGUizEE(arr);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      _M0MP311moonbitlang4core7builtin3Map3setGizE(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MP311moonbitlang4core7builtin3Map11from__arrayGiuE(arr) {
  const length = _M0MP311moonbitlang4core5array9ArrayView6lengthGUiuEE(arr);
  let capacity = _M0MP311moonbitlang4core3int3Int20next__power__of__two(length);
  if (length > _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MP311moonbitlang4core7builtin3Map11new_2einnerGiuE(capacity);
  const _len = _M0MP311moonbitlang4core5array9ArrayView6lengthGUiuEE(arr);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      _M0MP311moonbitlang4core7builtin3Map3setGiuE(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP311moonbitlang4core7builtin4JsonE(arr) {
  const length = _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP311moonbitlang4core7builtin4JsonEE(arr);
  let capacity = _M0MP311moonbitlang4core3int3Int20next__power__of__two(length);
  if (length > _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MP311moonbitlang4core7builtin3Map11new_2einnerGsRP311moonbitlang4core7builtin4JsonE(capacity);
  const _len = _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP311moonbitlang4core7builtin4JsonEE(arr);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MP311moonbitlang4core7builtin3Map3getGizE(self, key) {
  const hash = _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map3getGsRP311moonbitlang4core7builtin4JsonE(self, key) {
  const hash = _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map8containsGiuE(self, key) {
  const hash = _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0IP311moonbitlang4core7builtin3MapP311moonbitlang4core7builtin4Show6outputGsRP311moonbitlang4core7builtin4JsonE(self, logger) {
  logger.method_table.method_0(logger.self, "{");
  let _tmp = 0;
  let _tmp$2 = self.head;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_1 === undefined) {
      logger.method_table.method_0(logger.self, "}");
      return;
    } else {
      const _Some = _param_1;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      if (_param_0 > 0) {
        logger.method_table.method_0(logger.self, ", ");
      }
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGsE(logger, _key);
      logger.method_table.method_0(logger.self, ": ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core7builtin4JsonE(logger, _value);
      _tmp = _param_0 + 1 | 0;
      _tmp$2 = _next;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map9is__emptyGsRP311moonbitlang4core7builtin4JsonE(self) {
  return self.size === 0;
}
function _M0MP311moonbitlang4core7builtin3Map4iterGsRP311moonbitlang4core7builtin4JsonE(self) {
  const curr_entry = { val: self.head };
  return _M0MP311moonbitlang4core7builtin4Iter3newGUsRP311moonbitlang4core7builtin4JsonEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin2Eq5equal(self, that) {
  return self === that;
}
function _M0MP311moonbitlang4core4json4Json6string(string) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$String(string);
}
function _M0MP311moonbitlang4core4json4Json7boolean(boolean) {
  return boolean ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False;
}
function _M0MP311moonbitlang4core4json4Json6object(object) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(object);
}
function _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin6ToJson8to__json(self) {
  return _M0MP311moonbitlang4core4json4Json6number(self + 0, undefined);
}
function _M0MP311moonbitlang4core7builtin7MyInt6414extend__i32__u(value) {
  return { hi: 0, lo: value };
}
function _M0MP311moonbitlang4core6uint646UInt6412extend__uint(value) {
  return _M0MP311moonbitlang4core7builtin7MyInt6414extend__i32__u(value);
}
function _M0MP311moonbitlang4core6double6Double15convert__uint64(value) {
  return _M0MP311moonbitlang4core7builtin7MyInt6422convert__to__double__u(value);
}
function _M0MP311moonbitlang4core5int645Int6423reinterpret__as__double(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt6423reinterpret__as__double(self);
}
function _M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog8PlatformRP311moonbitlang4core7builtin4JsonE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MP311moonbitlang4core5array5Array3mapGiRP311moonbitlang4core7builtin4JsonE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog13ContainerSpecRP311moonbitlang4core7builtin4JsonE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog9IconEntryRP311moonbitlang4core7builtin4JsonE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog8PlatformE(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog8PlatformRP311moonbitlang4core7builtin4JsonE(self, _M0IP37trkbt107iconset7catalog8PlatformP311moonbitlang4core7builtin6ToJson8to__json));
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGiE(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_M0MP311moonbitlang4core5array5Array3mapGiRP311moonbitlang4core7builtin4JsonE(self, _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin6ToJson8to__json));
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog13ContainerSpecE(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog13ContainerSpecRP311moonbitlang4core7builtin4JsonE(self, _M0IP37trkbt107iconset7catalog13ContainerSpecP311moonbitlang4core7builtin6ToJson8to__json));
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog9IconEntryE(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(_M0MP311moonbitlang4core5array5Array3mapGRP37trkbt107iconset7catalog9IconEntryRP311moonbitlang4core7builtin4JsonE(self, _M0IP37trkbt107iconset7catalog9IconEntryP311moonbitlang4core7builtin6ToJson8to__json));
}
function _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(self, idx) {
  return self.charCodeAt(idx);
}
function _M0MP311moonbitlang4core4byte4Byte9to__int64(self) {
  return _M0MP311moonbitlang4core3int3Int9to__int64(self);
}
function _M0MP311moonbitlang4core4uint4UInt10to__uint16(self) {
  return self & 65535;
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Neg3neg(self) {
  return self.lo === 0 ? { hi: ~self.hi + 1 | 0, lo: 0 } : { hi: ~self.hi, lo: ~self.lo + 1 | 0 };
}
function _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Add3add(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, other.hi, other.lo);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Sub3sub(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Mul3mul(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function _M0FP311moonbitlang4core7builtin29try__get__int64__wasm__helper() {
  if (_M0FP311moonbitlang4core7builtin19wasm__helper__cache.tried) {
    const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
    return !(_bind === undefined);
  }
  _M0FP311moonbitlang4core7builtin19wasm__helper__cache.tried = true;
  _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports = _M0FP311moonbitlang4core7builtin23try__init__wasm__helper();
  const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
  return !(_bind === undefined);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Div3div(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FP311moonbitlang4core7builtin29try__get__int64__wasm__helper()) {
      return _M0MP311moonbitlang4core7builtin7MyInt6411div__bigint(self, other);
    }
    const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
    if (_bind === undefined) {
      return $panic();
    } else {
      const _Some = _bind;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_s;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return { hi: hi, lo: lo };
    }
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin7MyInt646div__u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FP311moonbitlang4core7builtin29try__get__int64__wasm__helper()) {
      return _M0MP311moonbitlang4core7builtin7MyInt6414div__u__bigint(self, other);
    }
    const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
    if (_bind === undefined) {
      return $panic();
    } else {
      const _Some = _bind;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_u;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return { hi: hi, lo: lo };
    }
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin7MyInt644land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function _M0MP311moonbitlang4core7builtin7MyInt643lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function _M0MP311moonbitlang4core7builtin7MyInt643lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function _M0MP311moonbitlang4core7builtin7MyInt643lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function _M0MP311moonbitlang4core7builtin7MyInt643asr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >> shift$2, lo: self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0) } : { hi: self.hi >> 31, lo: self.hi >> (shift$2 - 32 | 0) };
}
function _M0MP311moonbitlang4core7builtin7MyInt643clz(self) {
  return self.hi !== 0 ? Math.clz32(self.hi) : 32 + Math.clz32(self.lo) | 0;
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin2Eq5equal(self, other) {
  return self.hi === other.hi && self.lo === other.lo;
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Neg3neg(self) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Neg3neg(self);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Add3add(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Sub3sub(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Mul3mul(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Div3div(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin6BitAnd4land(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt644land(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin5BitOr3lor(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt643lor(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shr3shr(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt643asr(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt643lsl(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin2Eq5equal(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin2Eq5equal(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt647compare(self, other);
}
function _M0MP311moonbitlang4core5int645Int647to__int(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt647to__int(self);
}
function _M0MP311moonbitlang4core6double6Double14convert__int64(value) {
  return _M0MP311moonbitlang4core7builtin7MyInt6419convert__to__double(value);
}
function _M0MP311moonbitlang4core5int645Int6410to__double(self) {
  return _M0MP311moonbitlang4core6double6Double14convert__int64(self);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Add3add(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Add3add(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Sub3sub(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Sub3sub(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Mul3mul(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Div3div(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt646div__u(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin7Compare7compare(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt6410compare__u(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin2Eq5equal(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin6BitAnd4land(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt644land(self, other);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shl3shl(self, shift) {
  return _M0MP311moonbitlang4core7builtin7MyInt643lsl(self, shift);
}
function _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shr3shr(self, shift) {
  return _M0MP311moonbitlang4core7builtin7MyInt643lsr(self, shift);
}
function _M0MP311moonbitlang4core6uint646UInt643clz(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt643clz(self);
}
function _M0MP311moonbitlang4core3int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0MP311moonbitlang4core7builtin6Hasher15combine__string(self, value) {
  const _end2501 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end2501) {
      _M0MP311moonbitlang4core7builtin6Hasher13combine__uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Hash13hash__combine(self, hasher) {
  _M0MP311moonbitlang4core7builtin6Hasher15combine__string(hasher, self);
}
function _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Hash13hash__combine(self, hasher) {
  _M0MP311moonbitlang4core7builtin6Hasher12combine__int(hasher, self);
}
function _M0MP311moonbitlang4core6double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MP311moonbitlang4core6double6Double10to__string(self) {
  return _M0FP311moonbitlang4core7builtin15ryu__to__string(self);
}
function _M0IP311moonbitlang4core6double6DoubleP311moonbitlang4core7builtin4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MP311moonbitlang4core6double6Double10to__string(self));
}
function _M0MP311moonbitlang4core5bytes5Bytes5makei(length, value) {
  if (length <= 0) {
    return $bytes_literal$8;
  }
  const arr = $makebytes(length, value(0));
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < length) {
      $bound_check(arr, i);
      arr[i] = value(i);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0FP311moonbitlang4core7builtin7printlnGsE(input) {
  console.log(_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(input));
}
function _M0MP311moonbitlang4core4char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MP311moonbitlang4core4byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MP311moonbitlang4core4byte4Byte7to__hex(code >> 8 & 255)}${_M0MP311moonbitlang4core4byte4Byte7to__hex(code & 255)}` : `${_M0MP311moonbitlang4core4byte4Byte7to__hex(code >> 16 & 255)}${_M0MP311moonbitlang4core4byte4Byte7to__hex(code >> 8 & 255)}${_M0MP311moonbitlang4core4byte4Byte7to__hex(code & 255)}`;
}
function _M0MP311moonbitlang4core4char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MP311moonbitlang4core4char4Char13is__printable(self) {
  if (_M0MP311moonbitlang4core4char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MP311moonbitlang4core3int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0IP311moonbitlang4core4char4CharP311moonbitlang4core7builtin4Show6output(self, logger) {
  logger.method_table.method_3(logger.self, 39);
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MP311moonbitlang4core4char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MP311moonbitlang4core4char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  logger.method_table.method_3(logger.self, 39);
}
function _M0MP311moonbitlang4core4char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MP311moonbitlang4core5array10FixedArray17blit__from__bytes(self, bytes_offset, src, src_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (src_offset >= 0 && e2 < len2)))) {
    _M0MP311moonbitlang4core5array10FixedArray12unsafe__blitGyE(self, bytes_offset, src, src_offset, length);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MP311moonbitlang4core5bytes5Bytes11from__array(arr) {
  return _M0MP311moonbitlang4core5bytes5Bytes5makei(_M0MP311moonbitlang4core5array9ArrayView6lengthGyE(arr), (i) => _M0MP311moonbitlang4core5array9ArrayView2atGyE(arr, i));
}
function _M0IP311moonbitlang4core7builtin13SourceLocReprP311moonbitlang4core7builtin4Show6output(self, logger) {
  const pkg = self.pkg;
  const _data = _M0MP311moonbitlang4core6string10StringView4data(pkg);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(pkg);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(pkg) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let tag_0 = -1;
  let _bind;
  _L: {
    _L$2: {
      _L$3: while (true) {
        if (_cursor < _end) {
          const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char === 47) {
            _L$4: while (true) {
              tag_0 = _cursor;
              if (_cursor < _end) {
                const next_char$2 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char$2 === 47) {
                  while (true) {
                    if (_cursor < _end) {
                      _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      continue;
                    } else {
                      match_tag_saver_0 = tag_0;
                      accept_state = 0;
                      match_end = _cursor;
                      break _L$2;
                    }
                  }
                } else {
                  continue;
                }
              } else {
                break _L$2;
              }
            }
          } else {
            continue;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    if (accept_state === 0) {
      let package_name;
      let _try_err;
      _L$3: {
        _L$4: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_0 + 1 | 0, match_end);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            package_name = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err = _err._0;
            break _L$4;
          }
          break _L$3;
        }
        package_name = $panic();
      }
      let module_name;
      let _try_err$2;
      _L$4: {
        _L$5: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, _start, match_tag_saver_0);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            module_name = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err$2 = _err._0;
            break _L$5;
          }
          break _L$4;
        }
        module_name = $panic();
      }
      _bind = { _0: module_name, _1: package_name };
    } else {
      _bind = { _0: pkg, _1: undefined };
    }
  }
  const _module_name = _bind._0;
  const _package_name = _bind._1;
  if (_package_name === undefined) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_table.method_2(logger.self, _pkg_name);
    logger.method_table.method_3(logger.self, 47);
  }
  logger.method_table.method_2(logger.self, self.filename);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_column);
  logger.method_table.method_3(logger.self, 45);
  logger.method_table.method_2(logger.self, self.end_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.end_column);
  logger.method_table.method_3(logger.self, 64);
  logger.method_table.method_2(logger.self, _module_name);
}
function _M0IP311moonbitlang4core7builtin9SourceLocP311moonbitlang4core7builtin4Show6output(self, logger) {
  _M0IP311moonbitlang4core7builtin13SourceLocReprP311moonbitlang4core7builtin4Show6output(_M0MP311moonbitlang4core7builtin13SourceLocRepr5parse(self), logger);
}
function _M0MP311moonbitlang4core5array5Array11unsafe__popGRP311moonbitlang4core4json10WriteFrameE(self) {
  return _M0MP311moonbitlang4core7builtin7JSArray3pop(self);
}
function _M0MP311moonbitlang4core5array5Array3popGRP311moonbitlang4core4json10WriteFrameE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MP311moonbitlang4core5array5Array11unsafe__popGRP311moonbitlang4core4json10WriteFrameE(self);
    return v;
  }
}
function _M0FP311moonbitlang4core7builtin7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, i, j) {
  const temp = _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, i);
  _M0MP311moonbitlang4core5array12MutArrayView3setGiE(arr, i, _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j));
  _M0MP311moonbitlang4core5array12MutArrayView3setGiE(arr, j, temp);
}
function _M0MP311moonbitlang4core5array12MutArrayView5sliceGiE(arr, start, end) {
  return _M0MP311moonbitlang4core5array12MutArrayView17mut__view_2einnerGiE(arr, start, end);
}
function _M0MP311moonbitlang4core5array12MutArrayView14rev__in__placeGiE(arr) {
  const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, i);
      _M0MP311moonbitlang4core5array12MutArrayView3setGiE(arr, i, _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j));
      _M0MP311moonbitlang4core5array12MutArrayView3setGiE(arr, j, temp);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP311moonbitlang4core7builtin17fixed__get__limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function _M0FP311moonbitlang4core7builtin19fixed__bubble__sortGiE(arr) {
  const _end702 = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end702) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j - 1 | 0) > _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j)) {
          _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__2_2f1126(_env, a, b) {
  const swaps = _env._1;
  const arr = _env._0;
  if (_M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, a) > _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, b)) {
    _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__3_2f1127(_env, a, b, c) {
  _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__2_2f1126(_env, a, b);
  _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__2_2f1126(_env, b, c);
  _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__2_2f1126(_env, a, b);
}
function _M0FP311moonbitlang4core7builtin20fixed__choose__pivotGiE(arr) {
  const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  const swaps = { val: 0 };
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps };
    if (len > 50) {
      _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__3_2f1127(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__3_2f1127(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__3_2f1127(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FP311moonbitlang4core7builtin37fixed__choose__pivot_2esort__3_2f1127(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MP311moonbitlang4core5array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FP311moonbitlang4core7builtin17fixed__sift__downGiE(arr, index) {
  let index$2 = index;
  const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, child) < _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, child + 1 | 0)) {
        child = child + 1 | 0;
      }
      if (_M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, index$2) >= _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, child)) {
        return undefined;
      }
      _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP311moonbitlang4core7builtin17fixed__heap__sortGiE(arr) {
  const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  if (2 === 0) {
    $panic();
  }
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FP311moonbitlang4core7builtin17fixed__sift__downGiE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, 0, i);
      _M0FP311moonbitlang4core7builtin17fixed__sift__downGiE(_M0MP311moonbitlang4core5array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP311moonbitlang4core7builtin16fixed__partitionGiE(arr, pivot_index) {
  _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, pivot_index, _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr) - 1 | 0);
  const pivot = _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr) - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end694 = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr) - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end694) {
      if (_M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j) < pivot) {
        if (i !== j) {
          _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, i, _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr) - 1 | 0);
  return { _0: i, _1: partitioned };
}
function _M0FP311moonbitlang4core7builtin24fixed__try__bubble__sortGiE(arr) {
  let tries = 0;
  const _end711 = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end711) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j - 1 | 0) > _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr, j)) {
          sorted = false;
          _M0MP311moonbitlang4core5array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP311moonbitlang4core7builtin18fixed__quick__sortGiE(arr, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(arr$2);
    if (len <= 16) {
      if (len >= 2) {
        _M0FP311moonbitlang4core7builtin19fixed__bubble__sortGiE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FP311moonbitlang4core7builtin17fixed__heap__sortGiE(arr$2);
      return undefined;
    }
    const _bind = _M0FP311moonbitlang4core7builtin20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FP311moonbitlang4core7builtin24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FP311moonbitlang4core7builtin16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    const _tmp = _M0FP311moonbitlang4core7builtin7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    balanced = _tmp >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (_pred === _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr$2, _pivot)) {
        let i = _pivot;
        while (true) {
          if (i < len && _pred === _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr$2, i)) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = _M0MP311moonbitlang4core5array12MutArrayView5sliceGiE(arr$2, i, len);
        continue;
      }
    }
    const left = _M0MP311moonbitlang4core5array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MP311moonbitlang4core5array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if (_M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(left) < _M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(right)) {
      _M0FP311moonbitlang4core7builtin18fixed__quick__sortGiE(left, pred$2, limit$2);
      pred$2 = _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr$2, _pivot);
      arr$2 = right;
    } else {
      _M0FP311moonbitlang4core7builtin18fixed__quick__sortGiE(right, _M0MP311moonbitlang4core5array12MutArrayView2atGiE(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function _M0MP311moonbitlang4core5array12MutArrayView4sortGiE(self) {
  _M0FP311moonbitlang4core7builtin18fixed__quick__sortGiE(self, undefined, _M0FP311moonbitlang4core7builtin17fixed__get__limit(_M0MP311moonbitlang4core5array12MutArrayView6lengthGiE(self)));
}
function _M0MP311moonbitlang4core5array5Array4sortGiE(self) {
  _M0MP311moonbitlang4core5array12MutArrayView4sortGiE(_M0MP311moonbitlang4core5array5Array17mut__view_2einnerGiE(self, 0, undefined));
}
function _M0MP311moonbitlang4core5array5Array4mapiGRP311moonbitlang4core7builtin4JsonRP37trkbt107iconset5types10OutputSpecEHRP311moonbitlang4core4json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new Result$Ok$1$([]);
  }
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      const _bind = f(_i, v);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        return _bind;
      }
      arr[_i] = _tmp$2;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$1$(arr);
}
function _M0MP311moonbitlang4core5array5Array4mapiGRP311moonbitlang4core7builtin4JsoniEHRP311moonbitlang4core4json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new Result$Ok$2$([]);
  }
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      const _bind = f(_i, v);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        return _bind;
      }
      arr[_i] = _tmp$2;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$2$(arr);
}
function _M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset5types10OutputSpecE(self) {
  return self.length === 0;
}
function _M0MP311moonbitlang4core5array5Array9is__emptyGiE(self) {
  return self.length === 0;
}
function _M0MP311moonbitlang4core5array5Array9is__emptyGRP311moonbitlang4core7builtin4JsonE(self) {
  return self.length === 0;
}
function _M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset3ico8IcoEntryE(self) {
  return self.length === 0;
}
function _M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset4icns9IcnsEntryE(self) {
  return self.length === 0;
}
function _M0MP311moonbitlang4core5array5Array8containsGiE(self, value) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, required) {
  const start = self.data.length <= 0 ? 1 : self.data.length;
  let enough_space;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      enough_space = space;
      break;
    }
    _tmp = Math.imul(space, 2) | 0;
    continue;
  }
  if (enough_space !== self.data.length) {
    const new_data = $makebytes(enough_space, _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin7Default7default());
    _M0MP311moonbitlang4core5array10FixedArray12unsafe__blitGyE(new_data, 0, self.data, 0, self.len);
    self.data = new_data;
    return;
  } else {
    return;
  }
}
function _M0MP311moonbitlang4core6buffer6Buffer11write__byte(self, value) {
  _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, self.len + 1 | 0);
  const _tmp = self.data;
  const _tmp$2 = self.len;
  $bound_check(_tmp, _tmp$2);
  _tmp[_tmp$2] = value;
  self.len = self.len + 1 | 0;
}
function _M0FP311moonbitlang4core6buffer11new_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin7Default7default());
  return { data: data, len: 0 };
}
function _M0MP311moonbitlang4core6buffer6Buffer15write__uint__be(self, value) {
  _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, self.len + 4 | 0);
  const offset = self.len;
  const _tmp = self.data;
  $bound_check(_tmp, offset);
  _tmp[offset] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 24 | 0);
  const _tmp$2 = self.data;
  const _tmp$3 = offset + 1 | 0;
  $bound_check(_tmp$2, _tmp$3);
  _tmp$2[_tmp$3] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 16 | 0);
  const _tmp$4 = self.data;
  const _tmp$5 = offset + 2 | 0;
  $bound_check(_tmp$4, _tmp$5);
  _tmp$4[_tmp$5] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 8 | 0);
  const _tmp$6 = self.data;
  const _tmp$7 = offset + 3 | 0;
  $bound_check(_tmp$6, _tmp$7);
  _tmp$6[_tmp$7] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value);
  self.len = self.len + 4 | 0;
}
function _M0MP311moonbitlang4core6buffer6Buffer15write__uint__le(self, value) {
  _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, self.len + 4 | 0);
  const offset = self.len;
  const _tmp = self.data;
  $bound_check(_tmp, offset);
  _tmp[offset] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value);
  const _tmp$2 = self.data;
  const _tmp$3 = offset + 1 | 0;
  $bound_check(_tmp$2, _tmp$3);
  _tmp$2[_tmp$3] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 8 | 0);
  const _tmp$4 = self.data;
  const _tmp$5 = offset + 2 | 0;
  $bound_check(_tmp$4, _tmp$5);
  _tmp$4[_tmp$5] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 16 | 0);
  const _tmp$6 = self.data;
  const _tmp$7 = offset + 3 | 0;
  $bound_check(_tmp$6, _tmp$7);
  _tmp$6[_tmp$7] = _M0MP311moonbitlang4core4uint4UInt8to__byte(value >>> 24 | 0);
  self.len = self.len + 4 | 0;
}
function _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(self, value) {
  _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, self.len + 2 | 0);
  const offset = self.len;
  const _tmp = self.data;
  $bound_check(_tmp, offset);
  _tmp[offset] = value & 255;
  const _tmp$2 = self.data;
  const _tmp$3 = offset + 1 | 0;
  $bound_check(_tmp$2, _tmp$3);
  _tmp$2[_tmp$3] = value >> 8 & 255;
  self.len = self.len + 2 | 0;
}
function _M0MP311moonbitlang4core6buffer6Buffer12write__bytes(self, value) {
  const val_len = value.length;
  _M0MP311moonbitlang4core6buffer6Buffer19grow__if__necessary(self, self.len + val_len | 0);
  _M0MP311moonbitlang4core5array10FixedArray17blit__from__bytes(self.data, self.len, value, 0, val_len);
  self.len = self.len + val_len | 0;
}
function _M0MP311moonbitlang4core6buffer6Buffer9to__bytes(self) {
  return _M0MP311moonbitlang4core5bytes5Bytes11from__array(_M0MP311moonbitlang4core5array10FixedArray12view_2einnerGyE(self.data, 0, self.len));
}
function _M0FP311moonbitlang4core7strconv9base__errGUiRP311moonbitlang4core6string10StringViewbEE() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv14base__err__str));
}
function _M0FP311moonbitlang4core7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = { str: _tmp, start: _tmp$2, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = { str: _tmp$3, start: _tmp$4, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = { str: _tmp$5, start: _tmp$6, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = { str: _tmp$7, start: _tmp$8, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = { str: _tmp$9, start: _tmp$10, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = { str: _tmp$11, start: _tmp$12, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$3$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$3$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$3$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$3$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = { str: _tmp, start: _tmp$2, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = { str: _tmp$3, start: _tmp$4, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = { str: _tmp$5, start: _tmp$6, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = { str: _tmp$7, start: _tmp$8, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = { str: _tmp$9, start: _tmp$10, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = { str: _tmp$11, start: _tmp$12, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$3$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$3$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$3$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$3$({ _0: base, _1: view, _2: false }) : _M0FP311moonbitlang4core7strconv9base__errGUiRP311moonbitlang4core6string10StringViewbEE();
  }
}
function _M0FP311moonbitlang4core7strconv10range__errGlE() {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv15range__err__str));
}
function _M0FP311moonbitlang4core7strconv10range__errGuE() {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv15range__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGiE() {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGlE() {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGdE() {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGORP311moonbitlang4core7strconv6NumberE() {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core6string10StringViewE() {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core7strconv7DecimalE() {
  return new Result$Err$10$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv19overflow__threshold(base, neg) {
  return !neg ? (base === 10 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, $10L), $1L) : base === 16 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, $16L), $1L) : _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, _M0MP311moonbitlang4core3int3Int9to__int64(base)), $1L)) : base === 10 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, $10L) : base === 16 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, $16L) : _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, _M0MP311moonbitlang4core3int3Int9to__int64(base));
}
function _M0FP311moonbitlang4core7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP311moonbitlang4core6string10StringViewE(str, { str: _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603, start: 0, end: _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603.length })) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = _M0MP311moonbitlang4core6string10StringView12view_2einner(str, 0, undefined);
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _x$2 = { str: _tmp, start: _tmp$2, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$3 = _bind$2.str;
              const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$4;
              if (_bind$4 === undefined) {
                _tmp$4 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$4 = _Some;
              }
              const _x$3 = { str: _tmp$3, start: _tmp$4, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = _M0FP311moonbitlang4core7strconv25check__and__consume__base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = _M0FP311moonbitlang4core7strconv19overflow__threshold(_num_base, _neg);
    let has_digit;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_rest$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_rest$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGiE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(acc, overflow_threshold)) {
              const next_acc = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(acc, _M0MP311moonbitlang4core3int3Int9to__int64(_num_base)), _M0MP311moonbitlang4core3int3Int9to__int64(d));
              if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(acc, overflow_threshold)) {
              const next_acc = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(acc, _M0MP311moonbitlang4core3int3Int9to__int64(_num_base)), _M0MP311moonbitlang4core3int3Int9to__int64(d));
              if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$4$(_tmp);
    } else {
      return _M0FP311moonbitlang4core7strconv11syntax__errGlE();
    }
  } else {
    return _M0FP311moonbitlang4core7strconv11syntax__errGlE();
  }
}
function _M0FP311moonbitlang4core7strconv17check__underscore(str) {
  let rest;
  if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(str.str, 1, str.start, str.end)) {
    const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(str.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 0, str.start, str.end));
    switch (_x) {
      case 43: {
        const _tmp = str.str;
        const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
        let _tmp$2;
        if (_bind === undefined) {
          _tmp$2 = str.end;
        } else {
          const _Some = _bind;
          _tmp$2 = _Some;
        }
        const _x$2 = { str: _tmp, start: _tmp$2, end: str.end };
        rest = _x$2;
        break;
      }
      case 45: {
        const _tmp$3 = str.str;
        const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
        let _tmp$4;
        if (_bind$2 === undefined) {
          _tmp$4 = str.end;
        } else {
          const _Some = _bind$2;
          _tmp$4 = _Some;
        }
        const _x$3 = { str: _tmp$3, start: _tmp$4, end: str.end };
        rest = _x$3;
        break;
      }
      default: {
        rest = str;
      }
    }
  } else {
    rest = str;
  }
  const _data = _M0MP311moonbitlang4core6string10StringView4data(rest);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(rest);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let _bind;
  _L: {
    if ((_cursor + 1 | 0) < _end) {
      const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
      _cursor = _cursor + 1 | 0;
      if (next_char === 48) {
        _L$2: {
          _L$3: {
            _L$4: {
              const next_char$2 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char$2 < 89) {
                if (next_char$2 < 79) {
                  if (next_char$2 === 66) {
                    break _L$2;
                  } else {
                    break _L;
                  }
                } else {
                  if (next_char$2 > 79) {
                    if (next_char$2 < 88) {
                      break _L;
                    } else {
                      break _L$4;
                    }
                  } else {
                    break _L$3;
                  }
                }
              } else {
                if (next_char$2 > 97) {
                  if (next_char$2 < 112) {
                    if (next_char$2 < 99) {
                      break _L$2;
                    } else {
                      if (next_char$2 > 110) {
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                  } else {
                    if (next_char$2 > 119) {
                      if (next_char$2 < 121) {
                        break _L$4;
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            }
            accept_state = 2;
            match_end = _cursor;
            break _L;
          }
          accept_state = 1;
          match_end = _cursor;
          break _L;
        }
        accept_state = 0;
        match_end = _cursor;
        break _L;
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  switch (accept_state) {
    case 2: {
      let rest$2;
      let _try_err;
      _L$2: {
        _L$3: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_end, _end);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            rest$2 = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err = _err._0;
            break _L$3;
          }
          break _L$2;
        }
        rest$2 = $panic();
      }
      _bind = { _0: rest$2, _1: true, _2: true };
      break;
    }
    case 1: {
      let rest$3;
      let _try_err$2;
      _L$3: {
        _L$4: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_end, _end);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            rest$3 = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err$2 = _err._0;
            break _L$4;
          }
          break _L$3;
        }
        rest$3 = $panic();
      }
      _bind = { _0: rest$3, _1: true, _2: false };
      break;
    }
    case 0: {
      let rest$4;
      let _try_err$3;
      _L$4: {
        _L$5: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_end, _end);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            rest$4 = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err$3 = _err._0;
            break _L$5;
          }
          break _L$4;
        }
        rest$4 = $panic();
      }
      _bind = { _0: rest$4, _1: true, _2: false };
      break;
    }
    default: {
      _bind = { _0: rest, _1: false, _2: false };
    }
  }
  const _rest = _bind._0;
  const _allow_underscore = _bind._1;
  const _hex = _bind._2;
  let _tmp = _rest;
  let _tmp$2 = _allow_underscore;
  let _tmp$3 = false;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    const _param_2 = _tmp$3;
    let rest$5;
    let c;
    let follow_underscore;
    _L$5: {
      if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_param_0.str, 0, _param_0.start, _param_0.end)) {
        return true;
      } else {
        if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            return false;
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = { str: _tmp$4, start: _tmp$5, end: _param_0.end };
            rest$5 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$5;
          }
        } else {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            if (_param_1 === false) {
              return false;
            } else {
              const _tmp$4 = _param_0.str;
              const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = _param_0.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _x$2 = { str: _tmp$4, start: _tmp$5, end: _param_0.end };
              _tmp = _x$2;
              _tmp$2 = false;
              _tmp$3 = true;
              continue;
            }
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = { str: _tmp$4, start: _tmp$5, end: _param_0.end };
            rest$5 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$5;
          }
        }
      }
    }
    if (c >= 48 && c <= 57 ? true : _hex && (c >= 97 && c <= 102 ? true : c >= 65 && c <= 70)) {
      _tmp = rest$5;
      _tmp$2 = true;
      _tmp$3 = false;
      continue;
    } else {
      if (follow_underscore) {
        return false;
      } else {
        _tmp = rest$5;
        _tmp$2 = false;
        _tmp$3 = false;
        continue;
      }
    }
  }
}
function _M0MP311moonbitlang4core7strconv7Decimal9new__priv() {
  return { digits: $makebytes(800, _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin7Default7default()), digits_num: 0, decimal_point: 0, negative: false, truncated: false };
}
function _M0MP311moonbitlang4core7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      _tmp = _M0IP311moonbitlang4core4byte4ByteP311moonbitlang4core7builtin2Eq5equal(_tmp$2[_tmp$3], 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FP311moonbitlang4core7strconv26parse__decimal__from__view(str) {
  const d = _M0MP311moonbitlang4core7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(str.str, 1, str.start, str.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(str.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 0, str.start, str.end));
        switch (_x) {
          case 45: {
            const _tmp = str.str;
            const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
            let _tmp$2;
            if (_bind === undefined) {
              _tmp$2 = str.end;
            } else {
              const _Some = _bind;
              _tmp$2 = _Some;
            }
            const _x$2 = { str: _tmp, start: _tmp$2, end: str.end };
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            const _tmp$3 = str.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
            let _tmp$4;
            if (_bind$2 === undefined) {
              _tmp$4 = str.end;
            } else {
              const _Some = _bind$2;
              _tmp$4 = _Some;
            }
            rest = { str: _tmp$3, start: _tmp$4, end: str.end };
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const _param = _tmp;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
      const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
      if (_x === 95) {
        const _tmp$2 = _param.str;
        const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
        let _tmp$3;
        if (_bind === undefined) {
          _tmp$3 = _param.end;
        } else {
          const _Some = _bind;
          _tmp$3 = _Some;
        }
        const _x$2 = { str: _tmp$2, start: _tmp$3, end: _param.end };
        _tmp = _x$2;
        continue;
      } else {
        if (_x === 46) {
          const _tmp$2 = _param.str;
          const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _x$2 = { str: _tmp$2, start: _tmp$3, end: _param.end };
          if (!has_dp) {
            has_dp = true;
            d.decimal_point = d.digits_num;
            _tmp = _x$2;
            continue;
          } else {
            const _bind$2 = _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core6string10StringViewE();
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              rest$2 = _ok._0;
              break;
            } else {
              return _bind$2;
            }
          }
        } else {
          if (_x >= 48 && _x <= 57) {
            const _tmp$2 = _param.str;
            const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _x$2 = { str: _tmp$2, start: _tmp$3, end: _param.end };
            has_digits = true;
            if (_x === 48 && d.digits_num === 0) {
              d.decimal_point = d.decimal_point - 1 | 0;
              _tmp = _x$2;
              continue;
            }
            if (d.digits_num < d.digits.length) {
              const _tmp$4 = d.digits;
              const _tmp$5 = d.digits_num;
              $bound_check(_tmp$4, _tmp$5);
              _tmp$4[_tmp$5] = (_x - 48 | 0) & 255;
              d.digits_num = d.digits_num + 1 | 0;
            } else {
              if (_x !== 48) {
                d.truncated = true;
              }
            }
            _tmp = _x$2;
            continue;
          } else {
            rest$2 = _param;
            break;
          }
        }
      }
    } else {
      rest$2 = _param;
      break;
    }
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(rest$2.str, 1, rest$2.start, rest$2.end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(rest$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 101: {
              const _tmp$2 = rest$2.str;
              const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$3;
              if (_bind === undefined) {
                _tmp$3 = rest$2.end;
              } else {
                const _Some = _bind;
                _tmp$3 = _Some;
              }
              const _x$2 = { str: _tmp$2, start: _tmp$3, end: rest$2.end };
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _tmp$4 = rest$2.str;
              const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = rest$2.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _x$3 = { str: _tmp$4, start: _tmp$5, end: rest$2.end };
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(rest$4.str, 1, rest$4.start, rest$4.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(rest$4.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$4.str, 0, rest$4.start, rest$4.end));
        switch (_x) {
          case 43: {
            const _tmp$2 = rest$4.str;
            const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = rest$4.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            rest$5 = { str: _tmp$2, start: _tmp$3, end: rest$4.end };
            break;
          }
          case 45: {
            const _tmp$4 = rest$4.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = rest$4.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = { str: _tmp$4, start: _tmp$5, end: rest$4.end };
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(rest$5.str, 1, rest$5.start, rest$5.end)) {
            const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(rest$5.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest$5.str, 0, rest$5.start, rest$5.end));
            if (_x >= 48 && _x <= 57) {
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const _param = _tmp$2;
                if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
                  const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
                  if (_x$2 === 95) {
                    const _tmp$3 = _param.str;
                    const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
                    let _tmp$4;
                    if (_bind === undefined) {
                      _tmp$4 = _param.end;
                    } else {
                      const _Some = _bind;
                      _tmp$4 = _Some;
                    }
                    const _x$3 = { str: _tmp$3, start: _tmp$4, end: _param.end };
                    _tmp$2 = _x$3;
                    continue;
                  } else {
                    if (_x$2 >= 48 && _x$2 <= 57) {
                      const _tmp$3 = _param.str;
                      const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
                      let _tmp$4;
                      if (_bind === undefined) {
                        _tmp$4 = _param.end;
                      } else {
                        const _Some = _bind;
                        _tmp$4 = _Some;
                      }
                      const _x$3 = { str: _tmp$3, start: _tmp$4, end: _param.end };
                      exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      rest$6 = _param;
                      break;
                    }
                  }
                } else {
                  rest$6 = _param;
                  break;
                }
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core6string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(rest$3.str, 0, rest$3.start, rest$3.end)) {
      _M0MP311moonbitlang4core7strconv7Decimal4trim(d);
      return new Result$Ok$10$(d);
    } else {
      return _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core7strconv7DecimalE();
    }
  } else {
    return _M0FP311moonbitlang4core7strconv11syntax__errGRP311moonbitlang4core7strconv7DecimalE();
  }
}
function _M0FP311moonbitlang4core7strconv20parse__decimal__priv(str) {
  return _M0FP311moonbitlang4core7strconv26parse__decimal__from__view(str);
}
function _M0FP311moonbitlang4core7strconv15parse__inf__nan(rest) {
  let _bind;
  let rest$2;
  _L: {
    _L$2: {
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(rest.str, 1, rest.start, rest.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(rest.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest.str, 0, rest.start, rest.end));
        switch (_x) {
          case 45: {
            const _tmp = rest.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest.str, 1, rest.start, rest.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = rest.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = { str: _tmp, start: _tmp$2, end: rest.end };
            _bind = { _0: false, _1: _x$2 };
            break;
          }
          case 43: {
            const _tmp$3 = rest.str;
            const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(rest.str, 1, rest.start, rest.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = rest.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = { str: _tmp$3, start: _tmp$4, end: rest.end };
            rest$2 = _x$3;
            break _L$2;
          }
          default: {
            rest$2 = rest;
            break _L$2;
          }
        }
      } else {
        rest$2 = rest;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: true, _1: rest$2 };
  }
  const _pos = _bind._0;
  const _rest = _bind._1;
  const _data = _M0MP311moonbitlang4core6string10StringView4data(_rest);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(_rest);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(_rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  _L$2: {
    _L$3: {
      if ((_cursor + 2 | 0) < _end) {
        _L$4: {
          _L$5: {
            const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 79) {
              if (next_char < 74) {
                if (next_char < 73) {
                  break _L$2;
                } else {
                  break _L$4;
                }
              } else {
                if (next_char > 77) {
                  break _L$5;
                } else {
                  break _L$2;
                }
              }
            } else {
              if (next_char > 104) {
                if (next_char < 110) {
                  if (next_char < 106) {
                    break _L$4;
                  } else {
                    break _L$2;
                  }
                } else {
                  if (next_char > 110) {
                    break _L$2;
                  } else {
                    break _L$5;
                  }
                }
              } else {
                break _L$2;
              }
            }
          }
          _L$6: {
            const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 66) {
              if (next_char < 65) {
                break _L$2;
              } else {
                break _L$6;
              }
            } else {
              if (next_char > 96) {
                if (next_char < 98) {
                  break _L$6;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          _L$7: {
            const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 79) {
              if (next_char < 78) {
                break _L$2;
              } else {
                break _L$7;
              }
            } else {
              if (next_char > 109) {
                if (next_char < 111) {
                  break _L$7;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          if (_cursor < _end) {
            break _L$2;
          } else {
            accept_state = 0;
            match_end = _cursor;
            break _L$2;
          }
        }
        _L$5: {
          const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char < 79) {
            if (next_char < 78) {
              break _L$2;
            } else {
              break _L$5;
            }
          } else {
            if (next_char > 109) {
              if (next_char < 111) {
                break _L$5;
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
        }
        _L$6: {
          const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char < 71) {
            if (next_char < 70) {
              break _L$2;
            } else {
              break _L$6;
            }
          } else {
            if (next_char > 101) {
              if (next_char < 103) {
                break _L$6;
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
        }
        if (_cursor < _end) {
          _L$7: {
            const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 74) {
              if (next_char < 73) {
                break _L$2;
              } else {
                break _L$7;
              }
            } else {
              if (next_char > 104) {
                if (next_char < 106) {
                  break _L$7;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          if ((_cursor + 3 | 0) < _end) {
            _L$8: {
              const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 79) {
                if (next_char < 78) {
                  break _L$2;
                } else {
                  break _L$8;
                }
              } else {
                if (next_char > 109) {
                  if (next_char < 111) {
                    break _L$8;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$9: {
              const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 74) {
                if (next_char < 73) {
                  break _L$2;
                } else {
                  break _L$9;
                }
              } else {
                if (next_char > 104) {
                  if (next_char < 106) {
                    break _L$9;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$10: {
              const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 85) {
                if (next_char < 84) {
                  break _L$2;
                } else {
                  break _L$10;
                }
              } else {
                if (next_char > 115) {
                  if (next_char < 117) {
                    break _L$10;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$11: {
              const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 90) {
                if (next_char < 89) {
                  break _L$2;
                } else {
                  break _L$11;
                }
              } else {
                if (next_char > 120) {
                  if (next_char < 122) {
                    break _L$11;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            if (_cursor < _end) {
              break _L$2;
            } else {
              break _L$3;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$3;
        }
      } else {
        break _L$2;
      }
    }
    accept_state = 1;
    match_end = _cursor;
    break _L$2;
  }
  switch (accept_state) {
    case 0: {
      return new Result$Ok$7$(_M0FP311moonbitlang4core6double14not__a__number);
    }
    case 1: {
      return _pos ? new Result$Ok$7$(_M0FP311moonbitlang4core6double8infinity) : new Result$Ok$7$(_M0FP311moonbitlang4core6double13neg__infinity);
    }
    default: {
      return _M0FP311moonbitlang4core7strconv11syntax__errGdE();
    }
  }
}
function _M0EP311moonbitlang4core6string10StringViewP311moonbitlang4core7strconv12fold__digitsGmE(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _x = { str: _tmp, start: _tmp$2, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function _M0EP311moonbitlang4core6string10StringViewP311moonbitlang4core7strconv12fold__digitsGlE(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _x = { str: _tmp, start: _tmp$2, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function _M0FP311moonbitlang4core7strconv13parse__digits(s, x) {
  return _M0EP311moonbitlang4core6string10StringViewP311moonbitlang4core7strconv12fold__digitsGmE(s, x, (digit, acc) => _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(acc, $10L), _M0MP311moonbitlang4core6uint646UInt6412extend__uint(digit)));
}
function _M0FP311moonbitlang4core7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 43: {
            const _tmp = _bind.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = _bind.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = { str: _tmp, start: _tmp$2, end: _bind.end };
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _tmp$3 = _bind.str;
            const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = _bind.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = { str: _tmp$3, start: _tmp$4, end: _bind.end };
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
      const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EP311moonbitlang4core6string10StringViewP311moonbitlang4core7strconv12fold__digitsGlE(s$2, _M0FP311moonbitlang4core7strconv34parse__scientific_2eexp__num_7c279, (digit, exp_num) => _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(exp_num, $65536L) ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul($10L, exp_num), _M0MP311moonbitlang4core3int3Int9to__int64(digit)) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Neg3neg(_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FP311moonbitlang4core7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const _param = _tmp;
    let s$2;
    _L: {
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
        if (_x >= 48 && _x <= 57) {
          const _tmp$2 = _param.str;
          const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _x$2 = { str: _tmp$2, start: _tmp$3, end: _param.end };
          if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGmE(x$2, _M0FP311moonbitlang4core7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(x$2, $10L), _M0MP311moonbitlang4core6uint646UInt6412extend__uint(_x - 48 | 0));
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _tmp$2 = _param.str;
            const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _x$2 = { str: _tmp$2, start: _tmp$3, end: _param.end };
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        }
      } else {
        s$2 = _param;
        break _L;
      }
    }
    return { _0: s$2, _1: x$2, _2: len };
  }
}
function _M0FP311moonbitlang4core7strconv13parse__number(s) {
  let _bind;
  let rest;
  _L: {
    _L$2: {
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(s.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
        switch (_x) {
          case 45: {
            const _tmp = s.str;
            const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(s.str, 1, s.start, s.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = s.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = { str: _tmp, start: _tmp$2, end: s.end };
            _bind = { _0: _x$2, _1: true };
            break;
          }
          case 43: {
            const _tmp$3 = s.str;
            const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(s.str, 1, s.start, s.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = s.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = { str: _tmp$3, start: _tmp$4, end: s.end };
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: rest, _1: false };
  }
  const _s = _bind._0;
  const _negative = _bind._1;
  if (_M0MP311moonbitlang4core6string10StringView9is__empty(_s)) {
    return new Result$Ok$8$(undefined);
  }
  const _bind$2 = _M0FP311moonbitlang4core7strconv13parse__digits(_s, $0L);
  const _s$2 = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$2 = _s$2;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = $0L;
  const _bind$3 = s$2;
  if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind$3.str, 1, _bind$3.start, _bind$3.end)) {
    const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind$3.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$3.str, 0, _bind$3.start, _bind$3.end));
    if (_x === 46) {
      const _tmp = _bind$3.str;
      const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$3.str, 1, _bind$3.start, _bind$3.end);
      let _tmp$2;
      if (_bind$4 === undefined) {
        _tmp$2 = _bind$3.end;
      } else {
        const _Some = _bind$4;
        _tmp$2 = _Some;
      }
      const _x$2 = { str: _tmp, start: _tmp$2, end: _bind$3.end };
      s$2 = _x$2;
      const _bind$5 = _M0FP311moonbitlang4core7strconv13parse__digits(s$2, mantissa);
      const _new_s = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      s$2 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Neg3neg(_M0MP311moonbitlang4core3int3Int9to__int64(n_after_dot));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new Result$Ok$8$(undefined);
  }
  let rest$2;
  _L$2: {
    _L$3: {
      const _bind$4 = s$2;
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind$4.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$4.str, 0, _bind$4.start, _bind$4.end));
        switch (_x) {
          case 101: {
            const _tmp = _bind$4.str;
            const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$2;
            if (_bind$5 === undefined) {
              _tmp$2 = _bind$4.end;
            } else {
              const _Some = _bind$5;
              _tmp$2 = _Some;
            }
            const _x$2 = { str: _tmp, start: _tmp$2, end: _bind$4.end };
            rest$2 = _x$2;
            break _L$3;
          }
          case 69: {
            const _tmp$3 = _bind$4.str;
            const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$4;
            if (_bind$6 === undefined) {
              _tmp$4 = _bind$4.end;
            } else {
              const _Some = _bind$6;
              _tmp$4 = _Some;
            }
            const _x$3 = { str: _tmp$3, start: _tmp$4, end: _bind$4.end };
            rest$2 = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = _M0FP311moonbitlang4core7strconv17parse__scientific(rest$2);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new Result$Ok$8$(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number = _bind$5._1;
    s$2 = _new_s;
    exponent = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(exponent, _exp_number);
  }
  const _bind$4 = s$2;
  if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_bind$4.str, 0, _bind$4.start, _bind$4.end)) {
    if (n_digits <= 19) {
      return new Result$Ok$8$({ exponent: exponent, mantissa: mantissa, negative: _negative, many_digits: false });
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const _param_str = _tmp;
      const _param_start = _tmp$2;
      const _param_end = _tmp$3;
      let rest$3;
      let ch;
      _L$4: {
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param_str, 1, _param_start, _param_end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_str, 0, _param_start, _param_end));
          switch (_x) {
            case 48: {
              const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_str, 1, _param_start, _param_end);
              let _tmp$4;
              if (_bind$5 === undefined) {
                _tmp$4 = _param_end;
              } else {
                const _Some = _bind$5;
                _tmp$4 = _Some;
              }
              const _x$2 = { str: _param_str, start: _tmp$4, end: _param_end };
              rest$3 = _x$2;
              ch = _x;
              break _L$4;
            }
            case 46: {
              const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_str, 1, _param_start, _param_end);
              let _tmp$5;
              if (_bind$6 === undefined) {
                _tmp$5 = _param_end;
              } else {
                const _Some = _bind$6;
                _tmp$5 = _Some;
              }
              const _x$3 = { str: _param_str, start: _tmp$5, end: _param_end };
              rest$3 = _x$3;
              ch = _x;
              break _L$4;
            }
            default: {
              break _L$3;
            }
          }
        } else {
          break;
        }
      }
      const _tmp$4 = n_digits;
      if (2 === 0) {
        $panic();
      }
      n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      continue;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = $0L;
      const _bind$5 = _M0FP311moonbitlang4core7strconv20try__parse__19digits(s, mantissa$2);
      const _s$3 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGmE(mantissa$2, _M0FP311moonbitlang4core7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_s$3.str, 1, _s$3.start, _s$3.end)) {
          const _tmp$5 = _s$3.str;
          const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_s$3.str, 1, _s$3.start, _s$3.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$3.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _x = { str: _tmp$5, start: _tmp$6, end: _s$3.end };
          const _bind$7 = _M0FP311moonbitlang4core7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new Result$Ok$8$(undefined);
        }
      }
      exponent = _M0MP311moonbitlang4core3int3Int9to__int64(_tmp$4);
      exponent = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(exponent, _M0FP311moonbitlang4core7strconv33parse__number_2eexp__number_7c260);
    }
    return new Result$Ok$8$({ exponent: exponent, mantissa: mantissa$2, negative: _negative, many_digits: many_digits });
  } else {
    return _M0FP311moonbitlang4core7strconv11syntax__errGORP311moonbitlang4core7strconv6NumberE();
  }
}
function _M0FP311moonbitlang4core7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FP311moonbitlang4core7strconv12double__info.bias | 0;
  let bits = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin6BitAnd4land(mantissa, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl($1L, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits), $1L));
  const exp_bits = _M0MP311moonbitlang4core3int3Int9to__int64(biased_exp & ((1 << _M0FP311moonbitlang4core7strconv12double__info.exponent_bits) - 1 | 0));
  bits = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin5BitOr3lor(bits, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl(exp_bits, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits));
  if (negative) {
    bits = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin5BitOr3lor(bits, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl($1L, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits), _M0FP311moonbitlang4core7strconv12double__info.exponent_bits));
  }
  return bits;
}
function _M0MP311moonbitlang4core7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function _M0MP311moonbitlang4core7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return $_1L;
  }
  let n = $0L;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(n, $10L);
      const _tmp$2 = self.digits;
      const _tmp$3 = i;
      $bound_check(_tmp$2, _tmp$3);
      n = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_tmp, _M0MP311moonbitlang4core4byte4Byte9to__int64(_tmp$2[_tmp$3]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(n, $10L);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0MP311moonbitlang4core7strconv7Decimal17should__round__up(self, self.decimal_point)) {
    n = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(n, $1L);
  }
  return n;
}
function _M0MP311moonbitlang4core7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MP311moonbitlang4core5array13ReadOnlyArray2atGUisEE(_M0FP311moonbitlang4core7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MP311moonbitlang4core5array13ReadOnlyArray2atGUisEE(_M0FP311moonbitlang4core7strconv19left__shift__cheats, s)._1;
  let less = false;
  const _end73 = cheat_num.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end73) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MP311moonbitlang4core7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MP311moonbitlang4core7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = $0L;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _M0MP311moonbitlang4core4byte4Byte9to__int64(_tmp[_tmp$2]);
      acc = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(acc, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl(d, s));
      const quo = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div(acc, $10L);
      const rem = _M0MP311moonbitlang4core5int645Int647to__int(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(acc, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(quo, $10L)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGlE(acc, $0L)) {
      const quo = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div(acc, $10L);
      const rem = _M0MP311moonbitlang4core5int645Int647to__int(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(acc, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul($10L, quo)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MP311moonbitlang4core7strconv7Decimal4trim(self);
}
function _M0MP311moonbitlang4core7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = $0L;
  while (true) {
    if (_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shr3shr(acc, s), $0L)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shr3shr(acc, s), $0L)) {
            acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(acc, $10L);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(acc, $10L), _M0MP311moonbitlang4core4byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Sub3sub(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shl3shl($1L, s), $1L);
  while (true) {
    if (read_index < self.digits_num) {
      const out = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shr3shr(acc, s);
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = _M0MP311moonbitlang4core6uint646UInt648to__byte(out);
      write_index = write_index + 1 | 0;
      acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin6BitAnd4land(acc, mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(acc, $10L), _M0MP311moonbitlang4core4byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGmE(acc, $0L)) {
      const out = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Shr3shr(acc, s);
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = _M0MP311moonbitlang4core6uint646UInt648to__byte(out);
        write_index = write_index + 1 | 0;
      } else {
        if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGmE(out, $0L)) {
          self.truncated = true;
        }
      }
      acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin6BitAnd4land(acc, mask);
      acc = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(acc, $10L);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MP311moonbitlang4core7strconv7Decimal4trim(self);
}
function _M0MP311moonbitlang4core7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MP311moonbitlang4core7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MP311moonbitlang4core7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MP311moonbitlang4core7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MP311moonbitlang4core7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MP311moonbitlang4core7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = $0L;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = $0L;
    exponent = _M0FP311moonbitlang4core7strconv12double__info.bias;
    const bits = _M0FP311moonbitlang4core7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new Result$Ok$7$(_M0MP311moonbitlang4core5int645Int6423reinterpret__as__double(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FP311moonbitlang4core7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MP311moonbitlang4core5array13ReadOnlyArray6lengthGiE(_M0FP311moonbitlang4core7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MP311moonbitlang4core5array13ReadOnlyArray2atGiE(_M0FP311moonbitlang4core7strconv6powtab, self.decimal_point);
      }
      _M0MP311moonbitlang4core7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MP311moonbitlang4core5array13ReadOnlyArray6lengthGiE(_M0FP311moonbitlang4core7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MP311moonbitlang4core5array13ReadOnlyArray2atGiE(_M0FP311moonbitlang4core7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MP311moonbitlang4core7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FP311moonbitlang4core7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FP311moonbitlang4core7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MP311moonbitlang4core7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FP311moonbitlang4core7strconv12double__info.bias | 0) >= ((1 << _M0FP311moonbitlang4core7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FP311moonbitlang4core7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MP311moonbitlang4core7strconv7Decimal11shift__priv(self, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MP311moonbitlang4core7strconv7Decimal16rounded__integer(self);
  if (_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin2Eq5equal(mantissa, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl($2L, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits))) {
    mantissa = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shr3shr(mantissa, 1);
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FP311moonbitlang4core7strconv12double__info.bias | 0) >= ((1 << _M0FP311moonbitlang4core7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FP311moonbitlang4core7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin2Eq5equal(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin6BitAnd4land(mantissa, _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Shl3shl($1L, _M0FP311moonbitlang4core7strconv12double__info.mantissa_bits)), $0L)) {
    exponent = _M0FP311moonbitlang4core7strconv12double__info.bias;
  }
  const bits = _M0FP311moonbitlang4core7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new Result$Ok$7$(_M0MP311moonbitlang4core5int645Int6423reinterpret__as__double(bits));
}
function _M0FP311moonbitlang4core7strconv12checked__mul(a, b) {
  if (_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(a, $0L) || _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(b, $0L)) {
    return _M0FP311moonbitlang4core7strconv28checked__mul_2econstr_2f1731;
  }
  if (_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(a, $1L)) {
    return b;
  }
  if (_M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin2Eq5equal(b, $1L)) {
    return a;
  }
  if (_M0MP311moonbitlang4core6uint646UInt643clz(b) === 0 || _M0MP311moonbitlang4core6uint646UInt643clz(a) === 0) {
    return undefined;
  }
  const quotient = _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Div3div(_M0FP311moonbitlang4core6uint6410max__value, b);
  if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGmE(a, quotient)) {
    return undefined;
  }
  return _M0IP311moonbitlang4core6uint646UInt64P311moonbitlang4core7builtin3Mul3mul(a, b);
}
function _M0FP311moonbitlang4core7strconv17pow10__fast__path(exponent) {
  return _M0MP311moonbitlang4core5array13ReadOnlyArray2atGdE(_M0FP311moonbitlang4core7strconv5table, exponent & 31);
}
function _M0MP311moonbitlang4core7strconv6Number14is__fast__path(self) {
  return _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(_M0FP311moonbitlang4core7strconv25min__exponent__fast__path, self.exponent) && (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(self.exponent, _M0FP311moonbitlang4core7strconv36max__exponent__disguised__fast__path) && (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGmE(self.mantissa, _M0FP311moonbitlang4core7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MP311moonbitlang4core7strconv6Number15try__fast__path(self) {
  if (_M0MP311moonbitlang4core7strconv6Number14is__fast__path(self)) {
    let value;
    if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(self.exponent, _M0FP311moonbitlang4core7strconv25max__exponent__fast__path)) {
      const value$2 = _M0MP311moonbitlang4core6double6Double15convert__uint64(self.mantissa);
      value = _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(self.exponent, $0L) ? value$2 / _M0FP311moonbitlang4core7strconv17pow10__fast__path(-_M0MP311moonbitlang4core5int645Int647to__int(self.exponent) | 0) : value$2 * _M0FP311moonbitlang4core7strconv17pow10__fast__path(_M0MP311moonbitlang4core5int645Int647to__int(self.exponent));
    } else {
      const shift = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(self.exponent, _M0FP311moonbitlang4core7strconv25max__exponent__fast__path);
      const _bind = _M0FP311moonbitlang4core7strconv12checked__mul(self.mantissa, _M0MP311moonbitlang4core5array13ReadOnlyArray2atGmE(_M0FP311moonbitlang4core7strconv10int__pow10, _M0MP311moonbitlang4core5int645Int647to__int(shift)));
      let mantissa;
      if (_bind === undefined) {
        return Option$None$11$;
      } else {
        const _Some = _bind;
        mantissa = _Some;
      }
      if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGmE(mantissa, _M0FP311moonbitlang4core7strconv25max__mantissa__fast__path)) {
        return Option$None$11$;
      }
      value = _M0MP311moonbitlang4core6double6Double15convert__uint64(mantissa) * _M0FP311moonbitlang4core7strconv17pow10__fast__path(_M0MP311moonbitlang4core5int645Int647to__int(_M0FP311moonbitlang4core7strconv25max__exponent__fast__path));
    }
    if (self.negative) {
      value = -value;
    }
    return new Option$Some$11$(value);
  } else {
    return Option$None$11$;
  }
}
function _M0FP311moonbitlang4core7strconv13parse__double(str) {
  if (_M0MP311moonbitlang4core6string10StringView6length(str) > 0) {
    if (_M0FP311moonbitlang4core7strconv17check__underscore(str)) {
      const _bind = _M0FP311moonbitlang4core7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FP311moonbitlang4core7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MP311moonbitlang4core7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new Result$Ok$7$(_value);
        } else {
          const _bind$4 = _M0FP311moonbitlang4core7strconv20parse__decimal__priv(str);
          let _tmp;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
          } else {
            return _bind$4;
          }
          return _M0MP311moonbitlang4core7strconv7Decimal16to__double__priv(_tmp);
        }
      }
    } else {
      return _M0FP311moonbitlang4core7strconv11syntax__errGdE();
    }
  } else {
    return _M0FP311moonbitlang4core7strconv11syntax__errGdE();
  }
}
function _M0IP311moonbitlang4core4json15JsonDecodeErrorP311moonbitlang4core7builtin4Show6output(_x_641, _x_642) {
  const _JsonDecodeError = _x_641;
  const _$42$arg_643 = _JsonDecodeError._0;
  _x_642.method_table.method_0(_x_642.self, "JsonDecodeError(");
  const _$42$x0_644 = _$42$arg_643._0;
  const _$42$x1_645 = _$42$arg_643._1;
  _x_642.method_table.method_0(_x_642.self, "(");
  _M0MP311moonbitlang4core7builtin6Logger13write__objectGRP311moonbitlang4core4json8JsonPathE(_x_642, _$42$x0_644);
  _x_642.method_table.method_0(_x_642.self, ", ");
  _M0MP311moonbitlang4core7builtin6Logger13write__objectGsE(_x_642, _$42$x1_645);
  _x_642.method_table.method_0(_x_642.self, ")");
  _x_642.method_table.method_0(_x_642.self, ")");
}
function _M0FP311moonbitlang4core4json20offset__to__position(input, offset) {
  let line = 1;
  let column = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < offset) {
      if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq5equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(input, i), 10)) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { line: line, column: column };
}
function _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core7builtin4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$12$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(_M0FP311moonbitlang4core4json20offset__to__position(ctx.input, offset), _M0MP311moonbitlang4core6option6Option10unwrap__orGcE(_M0MP311moonbitlang4core6string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$13$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(_M0FP311moonbitlang4core4json20offset__to__position(ctx.input, offset), _M0MP311moonbitlang4core6option6Option10unwrap__orGcE(_M0MP311moonbitlang4core6string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$14$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(_M0FP311moonbitlang4core4json20offset__to__position(ctx.input, offset), _M0MP311moonbitlang4core6option6Option10unwrap__orGcE(_M0MP311moonbitlang4core6string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGUdORP311moonbitlang4core6string10StringViewEE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$15$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(_M0FP311moonbitlang4core4json20offset__to__position(ctx.input, offset), _M0MP311moonbitlang4core6option6Option10unwrap__orGcE(_M0MP311moonbitlang4core6string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0IP311moonbitlang4core4json10ParseErrorP311moonbitlang4core7builtin4Show6output(self, logger) {
  switch (self.$tag) {
    case 6: {
      const _InvalidChar = self;
      const _x = _InvalidChar._0;
      const _line = _x.line;
      const _column = _x.column;
      const _c = _InvalidChar._1;
      logger.method_table.method_0(logger.self, "Invalid character ");
      logger.method_table.method_0(logger.self, _M0FP311moonbitlang4core7builtin4reprGcE(_c));
      logger.method_table.method_0(logger.self, " at line ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _line);
      logger.method_table.method_0(logger.self, ", column ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _column);
      return;
    }
    case 5: {
      logger.method_table.method_0(logger.self, "Unexpected end of file");
      return;
    }
    case 4: {
      const _InvalidNumber = self;
      const _x$2 = _InvalidNumber._0;
      const _line$2 = _x$2.line;
      const _column$2 = _x$2.column;
      const _s = _InvalidNumber._1;
      logger.method_table.method_0(logger.self, "Invalid number ");
      logger.method_table.method_0(logger.self, _s);
      logger.method_table.method_0(logger.self, " at line ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _line$2);
      logger.method_table.method_0(logger.self, ", column ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _column$2);
      return;
    }
    case 3: {
      const _InvalidIdentEscape = self;
      const _x$3 = _InvalidIdentEscape._0;
      const _line$3 = _x$3.line;
      const _column$3 = _x$3.column;
      logger.method_table.method_0(logger.self, "Invalid escape sequence in identifier at line ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _line$3);
      logger.method_table.method_0(logger.self, ", column ");
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _column$3);
      return;
    }
    default: {
      logger.method_table.method_0(logger.self, "Depth limit exceeded, please increase the max_nesting_depth parameter");
      return;
    }
  }
}
function _M0IP311moonbitlang4core4json4JsonP311moonbitlang4core7builtin4Show6output(self, logger) {
  switch (self.$tag) {
    case 0: {
      logger.method_table.method_0(logger.self, "Null");
      return;
    }
    case 1: {
      logger.method_table.method_0(logger.self, "True");
      return;
    }
    case 2: {
      logger.method_table.method_0(logger.self, "False");
      return;
    }
    case 3: {
      const _Number = self;
      const _n = _Number._0;
      const _repr = _Number._1;
      logger.method_table.method_0(logger.self, "Number(");
      _M0IP311moonbitlang4core6double6DoubleP311moonbitlang4core7builtin4Show6output(_n, logger);
      if (_repr === undefined) {
      } else {
        logger.method_table.method_0(logger.self, ", repr=");
        _M0IP311moonbitlang4core6option6OptionP311moonbitlang4core7builtin4Show6outputGsE(_repr, logger);
      }
      logger.method_table.method_0(logger.self, ")");
      return;
    }
    case 4: {
      const _String = self;
      const _s = _String._0;
      logger.method_table.method_0(logger.self, "String(");
      _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show6output(_s, logger);
      logger.method_table.method_0(logger.self, ")");
      return;
    }
    case 5: {
      const _Array = self;
      const _a = _Array._0;
      logger.method_table.method_0(logger.self, "Array(");
      _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin4Show6outputGRP311moonbitlang4core7builtin4JsonE(_a, logger);
      logger.method_table.method_0(logger.self, ")");
      return;
    }
    default: {
      const _Object = self;
      const _o = _Object._0;
      logger.method_table.method_0(logger.self, "Object(");
      _M0IP311moonbitlang4core7builtin3MapP311moonbitlang4core7builtin4Show6outputGsRP311moonbitlang4core7builtin4JsonE(_o, logger);
      logger.method_table.method_0(logger.self, ")");
      return;
    }
  }
}
function _M0FP311moonbitlang4core4json13decode__errorGsE(path, msg) {
  return new Result$Err$16$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function _M0FP311moonbitlang4core4json13decode__errorGRP311moonbitlang4core7builtin5ArrayGRP37trkbt107iconset5types10OutputSpecEE(path, msg) {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function _M0FP311moonbitlang4core4json13decode__errorGRP311moonbitlang4core7builtin5ArrayGiEE(path, msg) {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function _M0FP311moonbitlang4core4json13decode__errorGiE(path, msg) {
  return new Result$Err$17$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function _M0FP311moonbitlang4core4json13decode__errorGuE(path, msg) {
  return new Result$Err$18$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: msg }));
}
function _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx) {
  const rest = _M0MP311moonbitlang4core6string10StringView12view_2einner(ctx.input, ctx.offset, ctx.end_offset);
  const _data = _M0MP311moonbitlang4core6string10StringView4data(rest);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(rest);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  _L: {
    if (_cursor < _end) {
      _L$2: {
        const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
        _cursor = _cursor + 1 | 0;
        if (next_char < 13) {
          if (next_char >= 9 && next_char <= 10) {
            break _L$2;
          } else {
            break _L;
          }
        } else {
          if (next_char > 13) {
            if (next_char === 32) {
              break _L$2;
            } else {
              break _L;
            }
          } else {
            break _L$2;
          }
        }
      }
      while (true) {
        accept_state = 0;
        match_end = _cursor;
        if (_cursor < _end) {
          _L$3: {
            const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 13) {
              if (next_char >= 9 && next_char <= 10) {
                break _L$3;
              } else {
                break _L;
              }
            } else {
              if (next_char > 13) {
                if (next_char === 32) {
                  break _L$3;
                } else {
                  break _L;
                }
              } else {
                break _L$3;
              }
            }
          }
          continue;
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    let next;
    let _try_err;
    _L$2: {
      _L$3: {
        const _bind = _M0MP311moonbitlang4core6string6String3sub(_data, match_end, _end);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          next = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$3;
        }
        break _L$2;
      }
      next = $panic();
    }
    ctx.offset = ctx.end_offset - _M0MP311moonbitlang4core6string10StringView6length(next) | 0;
    return;
  } else {
    return;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext4make(input, max_nesting_depth) {
  return { offset: 0, input: input, end_offset: _M0MP311moonbitlang4core6string10StringView6length(input), remaining_available_depth: max_nesting_depth };
}
function _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const c1 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(ctx.input, ctx.offset);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new Result$Ok$14$(undefined);
  } else {
    return new Result$Err$14$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  }
}
function _M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, end) {
  const s = _M0MP311moonbitlang4core6string10StringView12view_2einner(ctx.input, start, end);
  if (!_M0MP311moonbitlang4core6string10StringView8contains(s, { str: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1072, start: 0, end: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1072.length }) && (!_M0MP311moonbitlang4core6string10StringView8contains(s, { str: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1073, start: 0, end: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1073.length }) && !_M0MP311moonbitlang4core6string10StringView8contains(s, { str: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1074, start: 0, end: _M0FP311moonbitlang4core4json33lex__number__end_2e_2abind_7c1074.length }))) {
    let parsed_int;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0FP311moonbitlang4core7strconv20parse__int64_2einner(s, 0);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        parsed_int = new Result$Ok$4$(_tmp);
        break _L;
      }
      parsed_int = new Result$Err$4$(_try_err);
    }
    _L$2: {
      if (parsed_int.$tag === 1) {
        const _Ok = parsed_int;
        const _i = _Ok._0;
        if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(_i, $9007199254740991L) && _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(_i, $_9007199254740991L)) {
          return { _0: _M0MP311moonbitlang4core5int645Int6410to__double(_i), _1: undefined };
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    _L$3: {
      if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
        const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(s.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
        if (_x === 45) {
          return { _0: _M0FP311moonbitlang4core6double13neg__infinity, _1: s };
        } else {
          break _L$3;
        }
      } else {
        break _L$3;
      }
    }
    return { _0: _M0FP311moonbitlang4core6double8infinity, _1: s };
  } else {
    let parsed_double;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0FP311moonbitlang4core7strconv13parse__double(s);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        parsed_double = new Result$Ok$7$(_tmp);
        break _L;
      }
      parsed_double = new Result$Err$7$(_try_err);
    }
    if (parsed_double.$tag === 1) {
      const _Ok = parsed_double;
      const _d = _Ok._0;
      return { _0: _d, _1: undefined };
    } else {
      _L$2: {
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(s.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
          if (_x === 45) {
            return { _0: _M0FP311moonbitlang4core6double13neg__infinity, _1: s };
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      return { _0: _M0FP311moonbitlang4core6double8infinity, _1: s };
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const c1 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(ctx.input, ctx.offset);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const c2 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(ctx.input, ctx.offset);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return _M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 48 && _c <= 57) {
          break _L;
        }
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
    continue;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$15$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    }
    ctx.offset = ctx.offset - 1 | 0;
    return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGUdORP311moonbitlang4core6string10StringViewEE(ctx, 0);
  }
}
function _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new Result$Err$15$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _L;
        }
        case 45: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          }
          ctx.offset = ctx.offset - 1 | 0;
          return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGUdORP311moonbitlang4core6string10StringViewEE(ctx, 0);
        }
      }
    }
  }
  const _bind = _M0MP311moonbitlang4core4json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$15$(_tmp);
}
function _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
        if (_bind === -1) {
          return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
      const _bind = _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$15$(_tmp);
    }
    continue;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$15$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    return _c >= 48 && _c <= 57 ? _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGUdORP311moonbitlang4core6string10StringViewEE(ctx, -1);
  }
}
function _M0MP311moonbitlang4core4json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
        if (_bind === -1) {
          return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 46: {
              const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext19lex__decimal__point(ctx, start);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$15$(_tmp);
            }
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
      const _bind = _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$15$(_tmp);
    }
    continue;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext16lex__hex__digits(ctx, n) {
  let r = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new Result$Err$19$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 65) {
          const d = ((_c & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          r = r << 4 | d;
        } else {
          if (_c >= 48) {
            const d = _c - 48 | 0;
            if (d > 9) {
              const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
            r = r << 4 | d;
          } else {
            const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$19$(r);
}
function _M0FP311moonbitlang4core4json25lex__string_2eflush_7c282(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    let _tmp;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0MP311moonbitlang4core6string10StringView11sub_2einner(ctx.input, start.val, end);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      _tmp = $panic();
    }
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(buf, _tmp);
    return;
  } else {
    return;
  }
}
function _M0MP311moonbitlang4core4json12ParseContext11lex__string(ctx) {
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  const start = { val: ctx.offset };
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
          if (_bind === -1) {
            return new Result$Err$20$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 34: {
                _M0FP311moonbitlang4core4json25lex__string_2eflush_7c282(_env, ctx.offset - 1 | 0);
                break _L;
              }
              case 10: {
                break _L$4;
              }
              case 13: {
                break _L$4;
              }
              case 92: {
                _M0FP311moonbitlang4core4json25lex__string_2eflush_7c282(_env, ctx.offset - 1 | 0);
                const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
                if (_bind$2 === -1) {
                  return new Result$Err$20$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                } else {
                  const _Some$2 = _bind$2;
                  const _x$2 = _Some$2;
                  switch (_x$2) {
                    case 98: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 8);
                      break;
                    }
                    case 102: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 12);
                      break;
                    }
                    case 110: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 10);
                      break;
                    }
                    case 114: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 13);
                      break;
                    }
                    case 116: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 9);
                      break;
                    }
                    case 34: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 34);
                      break;
                    }
                    case 92: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 92);
                      break;
                    }
                    case 47: {
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 47);
                      break;
                    }
                    case 117: {
                      const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext16lex__hex__digits(ctx, 4);
                      let c;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        c = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, c);
                      break;
                    }
                    default: {
                      const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _ok._0;
                      } else {
                        return _bind$4;
                      }
                    }
                  }
                }
                start.val = ctx.offset;
                break;
              }
              default: {
                if (_x < 32) {
                  const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  break _L$2;
                }
              }
            }
          }
          break _L$3;
        }
        const _bind = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      }
      break _L$2;
    }
    continue;
  }
  return new Result$Ok$20$(_M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf));
}
function _M0MP311moonbitlang4core4json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 46: {
          return _M0MP311moonbitlang4core4json12ParseContext19lex__decimal__point(ctx, start);
        }
        case 101: {
          break _L;
        }
        case 69: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            ctx.offset = ctx.offset - 1 | 0;
            const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, 0);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          ctx.offset = ctx.offset - 1 | 0;
          return new Result$Ok$15$(_M0MP311moonbitlang4core4json12ParseContext16lex__number__end(ctx, start, ctx.offset));
        }
      }
    }
  }
  return _M0MP311moonbitlang4core4json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MP311moonbitlang4core4json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$LBrace);
    } else {
      if (_x === 91) {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$LBracket);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
          } else {
            return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$Null);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$True);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MP311moonbitlang4core4json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$False);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4._0;
                      const _repr = _bind$4._1;
                      return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _M0MP311moonbitlang4core6option6Option3mapGRP311moonbitlang4core6string10StringViewsE(_repr, (repr) => _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4._0;
                        const _repr = _bind$4._1;
                        return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _M0MP311moonbitlang4core6option6Option3mapGRP311moonbitlang4core6string10StringViewsE(_repr, (repr) => _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(repr))));
                      }
                      return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3._0;
                    const _repr = _bind$3._1;
                    return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _M0MP311moonbitlang4core6option6Option3mapGRP311moonbitlang4core6string10StringViewsE(_repr, (repr) => _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3._0;
                      const _repr = _bind$3._1;
                      return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _M0MP311moonbitlang4core6option6Option3mapGRP311moonbitlang4core6string10StringViewsE(_repr, (repr) => _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
                      } else {
                        const shift = -_M0MP311moonbitlang4core4char4Char10utf16__len(_x) | 0;
                        return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext24lex__after__array__value(ctx) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
      }
      case 44: {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
      }
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext25lex__after__object__value(ctx) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 44: {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
      }
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext26lex__after__property__name(ctx) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$14$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new Result$Ok$14$(undefined);
    } else {
      return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext19lex__property__name(ctx) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$13$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 34: {
        const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
      }
      default: {
        return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
      }
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext20lex__property__name2(ctx) {
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$13$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
    } else {
      return _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core4json5TokenE(ctx, -1);
    }
  }
}
function _M0MP311moonbitlang4core4json12ParseContext12parse__value(ctx) {
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MP311moonbitlang4core4json12ParseContext13parse__value2(ctx, tok);
}
function _M0MP311moonbitlang4core4json12ParseContext13parse__value2(ctx, tok) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new Result$Ok$12$(_M0FP311moonbitlang4core7builtin4null);
      }
      case 1: {
        return new Result$Ok$12$(_M0MP311moonbitlang4core4json4Json7boolean(true));
      }
      case 2: {
        return new Result$Ok$12$(_M0MP311moonbitlang4core4json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new Result$Ok$12$(_M0MP311moonbitlang4core4json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new Result$Ok$12$(_M0MP311moonbitlang4core4json4Json6string(_s));
      }
      case 5: {
        return _M0MP311moonbitlang4core4json12ParseContext13parse__object(ctx);
      }
      case 7: {
        return _M0MP311moonbitlang4core4json12ParseContext12parse__array(ctx);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new Result$Ok$12$(_M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin4JsonE("unreachable", "@moonbitlang/core/json:parse.mbt:61:34-61:54"));
}
function _M0MP311moonbitlang4core4json12ParseContext12parse__array(ctx) {
  if (ctx.remaining_available_depth <= 0) {
    return new Result$Err$12$(Error$moonbitlang$47$core$47$json$46$ParseError$46$DepthLimitExceeded);
  }
  ctx.remaining_available_depth = ctx.remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MP311moonbitlang4core4json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    if (_param.$tag === 8) {
      ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
      _tmp = _M0MP311moonbitlang4core4json4Json5array(vec);
      break;
    } else {
      const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext13parse__value2(ctx, _param);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core7builtin4JsonE(vec, _tmp$4);
      const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
          _tmp = _M0MP311moonbitlang4core4json4Json5array(vec);
          break _L;
        }
        default: {
          _tmp = _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin4JsonE("unreachable", "@moonbitlang/core/json:parse.mbt:114:14-114:34");
          break _L;
        }
      }
    }
  }
  return new Result$Ok$12$(_tmp);
}
function _M0MP311moonbitlang4core4json12ParseContext13parse__object(ctx) {
  if (ctx.remaining_available_depth <= 0) {
    return new Result$Err$12$(Error$moonbitlang$47$core$47$json$46$ParseError$46$DepthLimitExceeded);
  }
  ctx.remaining_available_depth = ctx.remaining_available_depth - 1 | 0;
  const map = _M0MP311moonbitlang4core7builtin3Map11new_2einnerGsRP311moonbitlang4core7builtin4JsonE(8);
  let _tmp;
  const _bind = _M0MP311moonbitlang4core4json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    switch (_param.$tag) {
      case 6: {
        ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
        _tmp = _M0MP311moonbitlang4core4json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = _param;
        const _name = _String._0;
        const _bind$2 = _M0MP311moonbitlang4core4json12ParseContext26lex__after__property__name(ctx);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0MP311moonbitlang4core4json12ParseContext12parse__value(ctx);
        let _tmp$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$4 = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE(map, _name, _tmp$4);
        const _bind$4 = _M0MP311moonbitlang4core4json12ParseContext25lex__after__object__value(ctx);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        switch (_bind$5.$tag) {
          case 9: {
            const _bind$6 = _M0MP311moonbitlang4core4json12ParseContext20lex__property__name2(ctx);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$3 = _ok._0;
            } else {
              return _bind$6;
            }
            continue _L;
          }
          case 6: {
            ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
            _tmp = _M0MP311moonbitlang4core4json4Json6object(map);
            break _L;
          }
          default: {
            _tmp = _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin4JsonE("unreachable", "@moonbitlang/core/json:parse.mbt:86:14-86:34");
            break _L;
          }
        }
      }
      default: {
        _tmp = _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin4JsonE("unreachable", "@moonbitlang/core/json:parse.mbt:89:10-89:30");
        break _L;
      }
    }
  }
  return new Result$Ok$12$(_tmp);
}
function _M0FP311moonbitlang4core4json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MP311moonbitlang4core4json12ParseContext4make(input, max_nesting_depth);
  const _bind = _M0MP311moonbitlang4core4json12ParseContext12parse__value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MP311moonbitlang4core4json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new Result$Ok$12$(val) : _M0MP311moonbitlang4core4json12ParseContext21invalid__char_2einnerGRP311moonbitlang4core7builtin4JsonE(ctx, 0);
}
function _M0FP311moonbitlang4core4json6escape(str, escape_slash) {
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(str.length);
  const _it = _M0MP311moonbitlang4core6string6String4iter(str);
  while (true) {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGcE(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 34: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\/");
          } else {
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, _c);
          }
          break;
        }
        case 10: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\t");
          break;
        }
        default: {
          const code = _c;
          if (code === 12) {
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\f");
          } else {
            if (code < 32) {
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\\u00");
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0MP311moonbitlang4core4byte4Byte7to__hex(code & 255));
            } else {
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, _c);
            }
          }
        }
      }
      continue;
    }
  }
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
}
function _M0FP311moonbitlang4core4json11indent__str(level, indent) {
  if (indent === 0) {
    return "";
  } else {
    const spaces = Math.imul(indent, level) | 0;
    switch (spaces) {
      case 0: {
        return "\n";
      }
      case 1: {
        return "\n ";
      }
      case 2: {
        return "\n  ";
      }
      case 3: {
        return "\n   ";
      }
      case 4: {
        return "\n    ";
      }
      case 5: {
        return "\n     ";
      }
      case 6: {
        return "\n      ";
      }
      case 7: {
        return "\n       ";
      }
      case 8: {
        return "\n        ";
      }
      default: {
        return `\n${_M0MP311moonbitlang4core6string6String6repeat(" ", spaces)}`;
      }
    }
  }
}
function _M0MP311moonbitlang4core4json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MP311moonbitlang4core5array5Array2atGRP311moonbitlang4core7builtin4JsonE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 44);
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MP311moonbitlang4core5array5Array3popGRP311moonbitlang4core4json10WriteFrameE(stack);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGUsRP311moonbitlang4core7builtin4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MP311moonbitlang4core5array5Array3popGRP311moonbitlang4core4json10WriteFrameE(stack);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 44);
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            }
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 34);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json6escape(_k, escape_slash));
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 34);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = _param;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MP311moonbitlang4core7builtin3Map9is__emptyGsRP311moonbitlang4core7builtin4JsonE(_members)) {
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 123);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core4json10WriteFrameE(stack, new $64$moonbitlang$47$core$47$json$46$WriteFrame$Object(_M0MP311moonbitlang4core7builtin3Map4iterGsRP311moonbitlang4core7builtin4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MP311moonbitlang4core5array5Array9is__emptyGRP311moonbitlang4core7builtin4JsonE(_arr)) {
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 91);
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json11indent__str(depth, indent));
            _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core4json10WriteFrameE(stack, new $64$moonbitlang$47$core$47$json$46$WriteFrame$Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 34);
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _M0FP311moonbitlang4core4json6escape(_s, escape_slash));
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MP311moonbitlang4core7builtin13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
}
function _M0MP311moonbitlang4core4json8JsonPath8add__key(self, key) {
  return new $64$moonbitlang$47$core$47$json$46$JsonPath$Key(self, key);
}
function _M0FP311moonbitlang4core4json26output_2ebuild__path_7c182(path, logger) {
  switch (path.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _Key = path;
      const _parent = _Key._0;
      const _key = _Key._1;
      _M0FP311moonbitlang4core4json26output_2ebuild__path_7c182(_parent, logger);
      logger.method_table.method_3(logger.self, 47);
      if (!_M0MP311moonbitlang4core6string6String13contains__any(_key, { str: _M0FP311moonbitlang4core4json23output_2e_2abind_7c1389, start: 0, end: _M0FP311moonbitlang4core4json23output_2e_2abind_7c1389.length })) {
        logger.method_table.method_0(logger.self, _key);
        return;
      }
      const _it = _M0MP311moonbitlang4core6string6String4iter(_key);
      while (true) {
        const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          switch (_ch) {
            case 126: {
              logger.method_table.method_0(logger.self, "~0");
              break;
            }
            case 47: {
              logger.method_table.method_0(logger.self, "~1");
              break;
            }
            default: {
              logger.method_table.method_3(logger.self, _ch);
            }
          }
          continue;
        }
      }
    }
    default: {
      const _Index = path;
      const _parent$2 = _Index._0;
      const _index = _Index._1;
      _M0FP311moonbitlang4core4json26output_2ebuild__path_7c182(_parent$2, logger);
      logger.method_table.method_3(logger.self, 47);
      _M0MP311moonbitlang4core7builtin6Logger13write__objectGiE(logger, _index);
      return;
    }
  }
}
function _M0IP311moonbitlang4core4json8JsonPathP311moonbitlang4core7builtin4Show6output(self, logger) {
  _M0FP311moonbitlang4core4json26output_2ebuild__path_7c182(self, logger);
}
function _M0FP311moonbitlang4core4json18from__json_2einnerGRP37trkbt107iconset5types8ManifestE(json, path) {
  return _M0IP37trkbt107iconset5types8ManifestP311moonbitlang4core4json8FromJson10from__json(json, path);
}
function _M0FP311moonbitlang4core4json10from__jsonGRP37trkbt107iconset5types8ManifestE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = $64$moonbitlang$47$core$47$json$46$JsonPath$Root;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FP311moonbitlang4core4json18from__json_2einnerGRP37trkbt107iconset5types8ManifestE(json, path);
}
function _M0IP311moonbitlang4core3int3IntP311moonbitlang4core4json8FromJson10from__json(json, path) {
  _L: {
    if (json.$tag === 3) {
      const _Number = json;
      const _n = _Number._0;
      if (_n !== _M0FP311moonbitlang4core6double8infinity) {
        if (_n !== _M0FP311moonbitlang4core6double13neg__infinity) {
          if (_n > 2147483647 || _n < -2147483648) {
            const _bind = _M0FP311moonbitlang4core4json13decode__errorGuE(path, "Int::from_json: overflow");
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          return new Result$Ok$17$(_M0MP311moonbitlang4core6double6Double7to__int(_n));
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FP311moonbitlang4core4json13decode__errorGiE(path, "Int::from_json: expected number");
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core4json8FromJson10from__json(json, path) {
  if (json.$tag === 4) {
    const _String = json;
    const _a = _String._0;
    return new Result$Ok$16$(_a);
  } else {
    return _M0FP311moonbitlang4core4json13decode__errorGsE(path, "String::from_json: expected string");
  }
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core4json8FromJson10from__jsonGRP37trkbt107iconset5types10OutputSpecE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MP311moonbitlang4core5array5Array4mapiGRP311moonbitlang4core7builtin4JsonRP37trkbt107iconset5types10OutputSpecEHRP311moonbitlang4core4json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP37trkbt107iconset5types10OutputSpecP311moonbitlang4core4json8FromJson10from__json(x, _Index);
      });
    } else {
      return new Result$Ok$1$($panic());
    }
  } else {
    return _M0FP311moonbitlang4core4json13decode__errorGRP311moonbitlang4core7builtin5ArrayGRP37trkbt107iconset5types10OutputSpecEE(path, "Array::from_json: expected array");
  }
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core4json8FromJson10from__jsonGiE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new $64$moonbitlang$47$core$47$json$46$JsonPath$Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MP311moonbitlang4core5array5Array4mapiGRP311moonbitlang4core7builtin4JsoniEHRP311moonbitlang4core4json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP311moonbitlang4core3int3IntP311moonbitlang4core4json8FromJson10from__json(x, _Index);
      });
    } else {
      return new Result$Ok$2$($panic());
    }
  } else {
    return _M0FP311moonbitlang4core4json13decode__errorGRP311moonbitlang4core7builtin5ArrayGiEE(path, "Array::from_json: expected array");
  }
}
function _M0IP37trkbt107iconset5types8ManifestP311moonbitlang4core4json8FromJson10from__json(_x_35, _x_36) {
  const _de_outputs_38 = { val: Option$None$21$ };
  const _de_name_37 = { val: undefined };
  let _map;
  _L: {
    if (_x_35.$tag === 6) {
      const _Object = _x_35;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_36, _1: "Expected object to deserialize Manifest" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MP311moonbitlang4core7builtin3Map3getGsRP311moonbitlang4core7builtin4JsonE(_map, "name");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IP311moonbitlang4core6string6StringP311moonbitlang4core4json8FromJson10from__json(_v, _M0MP311moonbitlang4core4json8JsonPath8add__key(_x_36, "name"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_name_37.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MP311moonbitlang4core7builtin3Map3getGsRP311moonbitlang4core7builtin4JsonE(_map, "outputs");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core4json8FromJson10from__jsonGRP37trkbt107iconset5types10OutputSpecE(_v$2, _M0MP311moonbitlang4core4json8JsonPath8add__key(_x_36, "outputs"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_outputs_38.val = new Option$Some$21$(_tmp);
  }
  let _de_outputs_38$2;
  const _bind = _de_outputs_38.val;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _v$3 = _Some._0;
    _de_outputs_38$2 = _v$3;
  } else {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_36, _1: "Missing field outputs" }));
  }
  let _de_name_37$2;
  const _bind$2 = _de_name_37.val;
  if (_bind$2 === undefined) {
    return new Result$Err$22$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_36, _1: "Missing field name" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_name_37$2 = _v$3;
  }
  return new Result$Ok$22$({ name: _de_name_37$2, outputs: _de_outputs_38$2 });
}
function _M0IP37trkbt107iconset5types10OutputSpecP311moonbitlang4core4json8FromJson10from__json(_x_9, _x_10) {
  const _de_sizes_12 = { val: Option$None$23$ };
  const _de_format_11 = { val: undefined };
  let _map;
  _L: {
    if (_x_9.$tag === 6) {
      const _Object = _x_9;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new Result$Err$24$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_10, _1: "Expected object to deserialize OutputSpec" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MP311moonbitlang4core7builtin3Map3getGsRP311moonbitlang4core7builtin4JsonE(_map, "format");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IP37trkbt107iconset5types12OutputFormatP311moonbitlang4core4json8FromJson10from__json(_v, _M0MP311moonbitlang4core4json8JsonPath8add__key(_x_10, "format"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_format_11.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MP311moonbitlang4core7builtin3Map3getGsRP311moonbitlang4core7builtin4JsonE(_map, "sizes");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core4json8FromJson10from__jsonGiE(_v$2, _M0MP311moonbitlang4core4json8JsonPath8add__key(_x_10, "sizes"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_sizes_12.val = new Option$Some$23$(_tmp);
  }
  let _de_sizes_12$2;
  const _bind = _de_sizes_12.val;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _v$3 = _Some._0;
    _de_sizes_12$2 = _v$3;
  } else {
    return new Result$Err$24$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_10, _1: "Missing field sizes" }));
  }
  let _de_format_11$2;
  const _bind$2 = _de_format_11.val;
  if (_bind$2 === undefined) {
    return new Result$Err$24$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: _x_10, _1: "Missing field format" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_format_11$2 = _v$3;
  }
  return new Result$Ok$24$({ format: _de_format_11$2, sizes: _de_sizes_12$2 });
}
function _M0IP37trkbt107iconset5types12OutputFormatP311moonbitlang4core7builtin6ToJson8to__json(self) {
  switch (self) {
    case 0: {
      return _M0MP311moonbitlang4core4json4Json6string("png");
    }
    case 1: {
      return _M0MP311moonbitlang4core4json4Json6string("ico");
    }
    default: {
      return _M0MP311moonbitlang4core4json4Json6string("icns");
    }
  }
}
function _M0IP37trkbt107iconset5types12OutputFormatP311moonbitlang4core4json8FromJson10from__json(json, path) {
  let s;
  _L: {
    if (json.$tag === 4) {
      const _String = json;
      const _s = _String._0;
      s = _s;
      break _L;
    } else {
      return new Result$Err$25$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: `OutputFormat: expected string, got ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin4JsonE(json)}` }));
    }
  }
  switch (s) {
    case "png": {
      return new Result$Ok$25$(0);
    }
    case "ico": {
      return new Result$Ok$25$(1);
    }
    case "icns": {
      return new Result$Ok$25$(2);
    }
    default: {
      return new Result$Err$25$(new Error$moonbitlang$47$core$47$json$46$JsonDecodeError$46$JsonDecodeError({ _0: path, _1: `Unknown output format: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(s)}` }));
    }
  }
}
function _M0MP37trkbt107iconset4icns11IcnsContext3new() {
  return { entries: [] };
}
function _M0FP37trkbt107iconset4icns21type__code__for__size(size) {
  const _arr = _M0FP37trkbt107iconset4icns15standard__types;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = _arr[_i];
      if (t.pixel_size === size) {
        return new Result$Ok$26$(t.code);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Err$26$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(size, size));
}
function _M0MP37trkbt107iconset4icns11IcnsContext8add__png(self, pixel_size, png_data) {
  const _bind = _M0FP37trkbt107iconset4icns21type__code__for__size(pixel_size);
  let tc;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tc = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$27$(_M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset4icns9IcnsEntryE(self.entries, { type_code: tc, data: png_data }));
}
function _M0FP37trkbt107iconset4icns5build(ctx) {
  if (_M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset4icns9IcnsEntryE(ctx.entries)) {
    return new Result$Err$26$(Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EmptySizeList);
  }
  const total_size = { val: 8 };
  const _arr = ctx.entries;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entry = _arr[_i];
      total_size.val = (total_size.val + 8 | 0) + entry.data.length | 0;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const buf = _M0FP311moonbitlang4core6buffer11new_2einner(total_size.val);
  _M0MP311moonbitlang4core6buffer6Buffer12write__bytes(buf, _M0FP37trkbt107iconset4icns11icns__magic);
  _M0MP311moonbitlang4core6buffer6Buffer15write__uint__be(buf, total_size.val);
  const _arr$2 = ctx.entries;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const entry = _arr$2[_i];
      const entry_size = 8 + entry.data.length | 0;
      _M0MP311moonbitlang4core6buffer6Buffer12write__bytes(buf, entry.type_code);
      _M0MP311moonbitlang4core6buffer6Buffer15write__uint__be(buf, entry_size);
      _M0MP311moonbitlang4core6buffer6Buffer12write__bytes(buf, entry.data);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$26$(_M0MP311moonbitlang4core6buffer6Buffer9to__bytes(buf));
}
function _M0FP37trkbt107iconset4icns6encode(images) {
  const ctx = _M0MP37trkbt107iconset4icns11IcnsContext3new();
  const _arr = images;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const img = _arr[_i];
      const _bind = _M0MP37trkbt107iconset4icns11IcnsContext8add__png(ctx, img.width, img.png_data);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37trkbt107iconset4icns5build(ctx);
}
function _M0MP37trkbt107iconset3ico10IcoContext3new() {
  return { entries: [] };
}
function _M0MP37trkbt107iconset3ico10IcoContext8add__png(self, width, height, png_data) {
  _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset3ico8IcoEntryE(self.entries, { width: width, height: height, color_count: 0, planes: 1, bpp: 32, data: png_data });
}
function _M0FP37trkbt107iconset3ico5build(ctx) {
  if (_M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset3ico8IcoEntryE(ctx.entries)) {
    return new Result$Err$26$(Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EmptySizeList);
  }
  const buf = _M0FP311moonbitlang4core6buffer11new_2einner(1024);
  _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(buf, 0);
  _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(buf, 1);
  _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(buf, ctx.entries.length & 65535);
  const header_size = 6;
  const dir_entry_size = 16;
  const dir_total = Math.imul(dir_entry_size, ctx.entries.length) | 0;
  const data_offset = { val: header_size + dir_total | 0 };
  const _arr = ctx.entries;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entry = _arr[_i];
      const ico_w = entry.width >= 256 ? 0 : entry.width & 255;
      const ico_h = entry.height >= 256 ? 0 : entry.height & 255;
      _M0MP311moonbitlang4core6buffer6Buffer11write__byte(buf, ico_w);
      _M0MP311moonbitlang4core6buffer6Buffer11write__byte(buf, ico_h);
      _M0MP311moonbitlang4core6buffer6Buffer11write__byte(buf, entry.color_count & 255);
      _M0MP311moonbitlang4core6buffer6Buffer11write__byte(buf, 0);
      _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(buf, _M0MP311moonbitlang4core4uint4UInt10to__uint16(entry.planes));
      _M0MP311moonbitlang4core6buffer6Buffer17write__uint16__le(buf, _M0MP311moonbitlang4core4uint4UInt10to__uint16(entry.bpp));
      _M0MP311moonbitlang4core6buffer6Buffer15write__uint__le(buf, entry.data.length);
      _M0MP311moonbitlang4core6buffer6Buffer15write__uint__le(buf, data_offset.val);
      data_offset.val = data_offset.val + entry.data.length | 0;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = ctx.entries;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const entry = _arr$2[_i];
      _M0MP311moonbitlang4core6buffer6Buffer12write__bytes(buf, entry.data);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$26$(_M0MP311moonbitlang4core6buffer6Buffer9to__bytes(buf));
}
function _M0FP37trkbt107iconset3ico6encode(images) {
  const ctx = _M0MP37trkbt107iconset3ico10IcoContext3new();
  const _arr = images;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const img = _arr[_i];
      _M0MP37trkbt107iconset3ico10IcoContext8add__png(ctx, img.width, img.height, img.png_data);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37trkbt107iconset3ico5build(ctx);
}
function _M0IP37trkbt107iconset7catalog13ContainerSpecP311moonbitlang4core7builtin6ToJson8to__json(_x_172) {
  const _bind = [];
  const $36$map = _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP311moonbitlang4core7builtin4JsonE({ buf: _bind, start: 0, end: 0 });
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "format", _M0IP37trkbt107iconset5types12OutputFormatP311moonbitlang4core7builtin6ToJson8to__json(_x_172.format));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "filename", _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(_x_172.filename));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "directory", _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(_x_172.directory));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "sizes", _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGiE(_x_172.sizes));
  return _M0MP311moonbitlang4core4json4Json6object($36$map);
}
function _M0IP37trkbt107iconset7catalog15PlatformCatalogP311moonbitlang4core7builtin6ToJson8to__json(_x_137) {
  const _bind = [];
  const $36$map = _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP311moonbitlang4core7builtin4JsonE({ buf: _bind, start: 0, end: 0 });
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "platform", _M0IP37trkbt107iconset7catalog8PlatformP311moonbitlang4core7builtin6ToJson8to__json(_x_137.platform));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "description", _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(_x_137.description));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "containers", _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog13ContainerSpecE(_x_137.containers));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "icons", _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog9IconEntryE(_x_137.icons));
  return _M0MP311moonbitlang4core4json4Json6object($36$map);
}
function _M0IP37trkbt107iconset7catalog9IconEntryP311moonbitlang4core7builtin6ToJson8to__json(_x_126) {
  const _bind = [];
  const $36$map = _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP311moonbitlang4core7builtin4JsonE({ buf: _bind, start: 0, end: 0 });
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "pixel_size", _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin6ToJson8to__json(_x_126.pixel_size));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "filename", _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(_x_126.filename));
  _M0MP311moonbitlang4core7builtin3Map3setGsRP311moonbitlang4core7builtin4JsonE($36$map, "directory", _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin6ToJson8to__json(_x_126.directory));
  return _M0MP311moonbitlang4core4json4Json6object($36$map);
}
function _M0FP37trkbt107iconset7catalog16windows__catalog() {
  return { platform: 0, description: "Windows desktop (ICO) and UWP/MSIX app icons", containers: [{ format: 1, filename: "app.ico", directory: "", sizes: [16, 24, 32, 48, 256] }], icons: [{ pixel_size: 16, filename: "AppList.targetsize-16.png", directory: "Assets" }, { pixel_size: 24, filename: "AppList.targetsize-24.png", directory: "Assets" }, { pixel_size: 32, filename: "AppList.targetsize-32.png", directory: "Assets" }, { pixel_size: 48, filename: "AppList.targetsize-48.png", directory: "Assets" }, { pixel_size: 256, filename: "AppList.targetsize-256.png", directory: "Assets" }] };
}
function _M0FP37trkbt107iconset7catalog12web__catalog() {
  return { platform: 5, description: "Web favicons (favicon.ico + PNG + Apple Touch Icon)", containers: [{ format: 1, filename: "favicon.ico", directory: "", sizes: [16, 32, 48] }], icons: [{ pixel_size: 16, filename: "favicon-16x16.png", directory: "" }, { pixel_size: 32, filename: "favicon-32x32.png", directory: "" }, { pixel_size: 180, filename: "apple-touch-icon.png", directory: "" }, { pixel_size: 192, filename: "android-chrome-192x192.png", directory: "" }, { pixel_size: 512, filename: "android-chrome-512x512.png", directory: "" }] };
}
function _M0FP37trkbt107iconset7catalog15ubuntu__catalog() {
  return { platform: 4, description: "Linux freedesktop.org hicolor icon theme", containers: [], icons: [{ pixel_size: 16, filename: "app.png", directory: "hicolor/16x16/apps" }, { pixel_size: 24, filename: "app.png", directory: "hicolor/24x24/apps" }, { pixel_size: 32, filename: "app.png", directory: "hicolor/32x32/apps" }, { pixel_size: 48, filename: "app.png", directory: "hicolor/48x48/apps" }, { pixel_size: 64, filename: "app.png", directory: "hicolor/64x64/apps" }, { pixel_size: 128, filename: "app.png", directory: "hicolor/128x128/apps" }, { pixel_size: 256, filename: "app.png", directory: "hicolor/256x256/apps" }, { pixel_size: 512, filename: "app.png", directory: "hicolor/512x512/apps" }] };
}
function _M0FP37trkbt107iconset7catalog12pwa__catalog() {
  return { platform: 6, description: "PWA manifest icons (standard + maskable)", containers: [], icons: [{ pixel_size: 48, filename: "icon-48x48.png", directory: "icons" }, { pixel_size: 72, filename: "icon-72x72.png", directory: "icons" }, { pixel_size: 96, filename: "icon-96x96.png", directory: "icons" }, { pixel_size: 128, filename: "icon-128x128.png", directory: "icons" }, { pixel_size: 144, filename: "icon-144x144.png", directory: "icons" }, { pixel_size: 152, filename: "icon-152x152.png", directory: "icons" }, { pixel_size: 192, filename: "icon-192x192.png", directory: "icons" }, { pixel_size: 384, filename: "icon-384x384.png", directory: "icons" }, { pixel_size: 512, filename: "icon-512x512.png", directory: "icons" }, { pixel_size: 192, filename: "maskable-192x192.png", directory: "icons" }, { pixel_size: 512, filename: "maskable-512x512.png", directory: "icons" }] };
}
function _M0FP37trkbt107iconset7catalog21generate__webmanifest(name, icon_dir) {
  const prefix = icon_dir === "" ? "" : `${icon_dir}/`;
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "{\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `  \"name\": \"${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(name)}\",\n`);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `  \"short_name\": \"${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(name)}\",\n`);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "  \"start_url\": \"/\",\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "  \"display\": \"standalone\",\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "  \"background_color\": \"#ffffff\",\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "  \"theme_color\": \"#ffffff\",\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "  \"icons\": [\n");
  const standard_sizes = [48, 72, 96, 128, 144, 152, 192, 384, 512];
  const _arr = standard_sizes;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const i = _i;
      const size = _arr[_i];
      if (i > 0) {
        _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, ",\n");
      }
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    {\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `      \"src\": \"${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(prefix)}icon-${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}x${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}.png\",\n`);
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `      \"sizes\": \"${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}x${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}\",\n`);
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "      \"type\": \"image/png\",\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "      \"purpose\": \"any\"\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    }");
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const maskable_sizes = [192, 512];
  const _arr$2 = maskable_sizes;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const size = _arr$2[_i];
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, ",\n    {\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `      \"src\": \"${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(prefix)}maskable-${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}x${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}.png\",\n`);
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `      \"sizes\": \"${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}x${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(size)}\",\n`);
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "      \"type\": \"image/png\",\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "      \"purpose\": \"maskable\"\n");
      _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    }");
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "\n  ]\n}");
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
}
function _M0FP37trkbt107iconset7catalog14macos__catalog() {
  return { platform: 1, description: "macOS app icons (ICNS container + .iconset PNGs)", containers: [{ format: 2, filename: "AppIcon.icns", directory: "", sizes: [16, 32, 64, 128, 256, 512, 1024] }], icons: [{ pixel_size: 16, filename: "icon_16x16.png", directory: "AppIcon.iconset" }, { pixel_size: 32, filename: "icon_16x16@2x.png", directory: "AppIcon.iconset" }, { pixel_size: 32, filename: "icon_32x32.png", directory: "AppIcon.iconset" }, { pixel_size: 64, filename: "icon_32x32@2x.png", directory: "AppIcon.iconset" }, { pixel_size: 128, filename: "icon_128x128.png", directory: "AppIcon.iconset" }, { pixel_size: 256, filename: "icon_128x128@2x.png", directory: "AppIcon.iconset" }, { pixel_size: 256, filename: "icon_256x256.png", directory: "AppIcon.iconset" }, { pixel_size: 512, filename: "icon_256x256@2x.png", directory: "AppIcon.iconset" }, { pixel_size: 512, filename: "icon_512x512.png", directory: "AppIcon.iconset" }, { pixel_size: 1024, filename: "icon_512x512@2x.png", directory: "AppIcon.iconset" }] };
}
function _M0FP37trkbt107iconset7catalog12ios__catalog() {
  return { platform: 2, description: "iOS/iPadOS app icons (AppIcon.appiconset)", containers: [], icons: [{ pixel_size: 1024, filename: "AppIcon-1024.png", directory: "AppIcon.appiconset" }, { pixel_size: 40, filename: "Icon-App-20x20@2x.png", directory: "AppIcon.appiconset" }, { pixel_size: 60, filename: "Icon-App-20x20@3x.png", directory: "AppIcon.appiconset" }, { pixel_size: 58, filename: "Icon-App-29x29@2x.png", directory: "AppIcon.appiconset" }, { pixel_size: 87, filename: "Icon-App-29x29@3x.png", directory: "AppIcon.appiconset" }, { pixel_size: 80, filename: "Icon-App-40x40@2x.png", directory: "AppIcon.appiconset" }, { pixel_size: 120, filename: "Icon-App-40x40@3x.png", directory: "AppIcon.appiconset" }, { pixel_size: 120, filename: "Icon-App-60x60@2x.png", directory: "AppIcon.appiconset" }, { pixel_size: 180, filename: "Icon-App-60x60@3x.png", directory: "AppIcon.appiconset" }, { pixel_size: 20, filename: "Icon-App-20x20@1x.png", directory: "AppIcon.appiconset" }, { pixel_size: 29, filename: "Icon-App-29x29@1x.png", directory: "AppIcon.appiconset" }, { pixel_size: 40, filename: "Icon-App-40x40@1x.png", directory: "AppIcon.appiconset" }, { pixel_size: 76, filename: "Icon-App-76x76@1x.png", directory: "AppIcon.appiconset" }, { pixel_size: 152, filename: "Icon-App-76x76@2x.png", directory: "AppIcon.appiconset" }, { pixel_size: 167, filename: "Icon-App-83.5x83.5@2x.png", directory: "AppIcon.appiconset" }] };
}
function _M0FP37trkbt107iconset7catalog16android__catalog() {
  return { platform: 3, description: "Android launcher icons (mipmap density folders + Play Store)", containers: [], icons: [{ pixel_size: 48, filename: "ic_launcher.png", directory: "mipmap-mdpi" }, { pixel_size: 72, filename: "ic_launcher.png", directory: "mipmap-hdpi" }, { pixel_size: 96, filename: "ic_launcher.png", directory: "mipmap-xhdpi" }, { pixel_size: 144, filename: "ic_launcher.png", directory: "mipmap-xxhdpi" }, { pixel_size: 192, filename: "ic_launcher.png", directory: "mipmap-xxxhdpi" }, { pixel_size: 512, filename: "ic_launcher-playstore.png", directory: "" }] };
}
function _M0FP37trkbt107iconset7catalog12catalog__for(platform) {
  switch (platform) {
    case 0: {
      return _M0FP37trkbt107iconset7catalog16windows__catalog();
    }
    case 1: {
      return _M0FP37trkbt107iconset7catalog14macos__catalog();
    }
    case 2: {
      return _M0FP37trkbt107iconset7catalog12ios__catalog();
    }
    case 3: {
      return _M0FP37trkbt107iconset7catalog16android__catalog();
    }
    case 4: {
      return _M0FP37trkbt107iconset7catalog15ubuntu__catalog();
    }
    case 5: {
      return _M0FP37trkbt107iconset7catalog12web__catalog();
    }
    default: {
      return _M0FP37trkbt107iconset7catalog12pwa__catalog();
    }
  }
}
function _M0FP37trkbt107iconset7catalog23generate__adaptive__xml(bg_is_color, has_monochrome) {
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<adaptive-icon xmlns:android=\"http://schemas.android.com/apk/res/android\">\n");
  if (bg_is_color) {
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    <background android:drawable=\"@color/ic_launcher_background\" />\n");
  } else {
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    <background android:drawable=\"@drawable/ic_launcher_background\" />\n");
  }
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    <foreground android:drawable=\"@drawable/ic_launcher_foreground\" />\n");
  if (has_monochrome) {
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "    <monochrome android:drawable=\"@drawable/ic_launcher_monochrome\" />\n");
  }
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "</adaptive-icon>\n");
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
}
function _M0FP37trkbt107iconset7catalog32generate__background__color__xml(color) {
  const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<resources>\n");
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, `    <color name=\"ic_launcher_background\">${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(color)}</color>\n`);
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(buf, "</resources>\n");
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
}
function _M0FP37trkbt107iconset7catalog15required__sizes(catalog) {
  const _bind = [];
  const seen = _M0MP311moonbitlang4core7builtin3Map11from__arrayGiuE({ buf: _bind, start: 0, end: 0 });
  const sizes = [];
  const _arr = catalog.containers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const container = _arr[_i];
      const _arr$2 = container.sizes;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const size = _arr$2[_i$2];
          if (!_M0MP311moonbitlang4core7builtin3Map8containsGiuE(seen, size)) {
            _M0MP311moonbitlang4core7builtin3Map3setGiuE(seen, size, undefined);
            _M0MP311moonbitlang4core5array5Array4pushGiE(sizes, size);
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = catalog.icons;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const icon = _arr$2[_i];
      if (!_M0MP311moonbitlang4core7builtin3Map8containsGiuE(seen, icon.pixel_size)) {
        _M0MP311moonbitlang4core7builtin3Map3setGiuE(seen, icon.pixel_size, undefined);
        _M0MP311moonbitlang4core5array5Array4pushGiE(sizes, icon.pixel_size);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP311moonbitlang4core5array5Array4sortGiE(sizes);
  return sizes;
}
function _M0FP37trkbt107iconset7catalog20required__sizes__for(platforms) {
  const _bind = [];
  const seen = _M0MP311moonbitlang4core7builtin3Map11from__arrayGiuE({ buf: _bind, start: 0, end: 0 });
  const sizes = [];
  const _arr = platforms;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const platform = _arr[_i];
      const catalog = _M0FP37trkbt107iconset7catalog12catalog__for(platform);
      const platform_sizes = _M0FP37trkbt107iconset7catalog15required__sizes(catalog);
      const _arr$2 = platform_sizes;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const size = _arr$2[_i$2];
          if (!_M0MP311moonbitlang4core7builtin3Map8containsGiuE(seen, size)) {
            _M0MP311moonbitlang4core7builtin3Map3setGiuE(seen, size, undefined);
            _M0MP311moonbitlang4core5array5Array4pushGiE(sizes, size);
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP311moonbitlang4core5array5Array4sortGiE(sizes);
  return sizes;
}
function _M0FP37trkbt107iconset7catalog14all__platforms() {
  return [0, 1, 2, 3, 4, 5, 6];
}
function _M0IP37trkbt107iconset7catalog8PlatformP311moonbitlang4core7builtin6ToJson8to__json(self) {
  switch (self) {
    case 0: {
      return _M0MP311moonbitlang4core4json4Json6string("Windows");
    }
    case 1: {
      return _M0MP311moonbitlang4core4json4Json6string("MacOS");
    }
    case 2: {
      return _M0MP311moonbitlang4core4json4Json6string("IOS");
    }
    case 3: {
      return _M0MP311moonbitlang4core4json4Json6string("Android");
    }
    case 4: {
      return _M0MP311moonbitlang4core4json4Json6string("Ubuntu");
    }
    case 5: {
      return _M0MP311moonbitlang4core4json4Json6string("Web");
    }
    default: {
      return _M0MP311moonbitlang4core4json4Json6string("PWA");
    }
  }
}
function _M0FP37trkbt107iconset8manifest5parse(json_str) {
  let json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP311moonbitlang4core4json13parse_2einner({ str: json_str, start: 0, end: json_str.length }, 1024);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        json = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const e = _try_err;
    return new Result$Err$28$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`JSON parse error: ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core4json10ParseErrorE(e)}`));
  }
  let _try_err$2;
  _L$2: {
    const _bind = _M0FP311moonbitlang4core4json10from__jsonGRP37trkbt107iconset5types8ManifestE(json, undefined);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err$2 = _err._0;
      break _L$2;
    }
    return new Result$Ok$28$(_tmp);
  }
  const e = _try_err$2;
  return new Result$Err$28$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Schema error: ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core4json15JsonDecodeErrorE(e)}`));
}
function _M0FP37trkbt107iconset8manifest8validate(manifest) {
  if (manifest.name === "") {
    return new Result$Err$27$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest("Manifest name must not be empty"));
  }
  if (_M0MP311moonbitlang4core5array5Array9is__emptyGRP37trkbt107iconset5types10OutputSpecE(manifest.outputs)) {
    return new Result$Err$27$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest("Manifest must have at least one output"));
  }
  const _arr = manifest.outputs;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const output = _arr[_i];
      if (_M0MP311moonbitlang4core5array5Array9is__emptyGiE(output.sizes)) {
        return new Result$Err$27$(Error$trkbt10$47$iconset$47$types$46$IconsetError$46$EmptySizeList);
      }
      const _arr$2 = output.sizes;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const size = _arr$2[_i$2];
          if (size <= 0) {
            return new Result$Err$27$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(size, 0));
          }
          const _bind = output.format;
          switch (_bind) {
            case 1: {
              if (!_M0MP311moonbitlang4core5array5Array8containsGiE(_M0FP37trkbt107iconset8manifest17valid__ico__sizes, size)) {
                return new Result$Err$27$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(size, 0));
              }
              break;
            }
            case 2: {
              if (!_M0MP311moonbitlang4core5array5Array8containsGiE(_M0FP37trkbt107iconset8manifest18valid__icns__sizes, size)) {
                return new Result$Err$27$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(size, 0));
              }
              break;
            }
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$27$(undefined);
}
function _M0FP47trkbt107iconset3cmd4wasm19encode__ico__single(width, height, png_data) {
  return _M0FP37trkbt107iconset3ico6encode([{ width: width, height: height, png_data: png_data }]);
}
function _M0FP47trkbt107iconset3cmd4wasm20encode__icns__single(width, height, png_data) {
  return _M0FP37trkbt107iconset4icns6encode([{ width: width, height: height, png_data: png_data }]);
}
function _M0FP47trkbt107iconset3cmd4wasm18validate__manifest(json_str) {
  const _bind = _M0FP37trkbt107iconset8manifest5parse(json_str);
  let manifest;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    manifest = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP37trkbt107iconset8manifest8validate(manifest);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  return new Result$Ok$29$(manifest.name);
}
function _M0FP47trkbt107iconset3cmd4wasm15create__session() {
  const id = _M0FP47trkbt107iconset3cmd4wasm8sessions.length;
  const _bind = [];
  _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core7builtin3MapGizEE(_M0FP47trkbt107iconset3cmd4wasm8sessions, _M0MP311moonbitlang4core7builtin3Map11from__arrayGizE({ buf: _bind, start: 0, end: 0 }));
  return id;
}
function _M0FP47trkbt107iconset3cmd4wasm19session__add__image(id, size, png_data) {
  _M0MP311moonbitlang4core7builtin3Map3setGizE(_M0MP311moonbitlang4core5array5Array2atGRP311moonbitlang4core7builtin3MapGizEE(_M0FP47trkbt107iconset3cmd4wasm8sessions, id), size, png_data);
}
function _M0FP47trkbt107iconset3cmd4wasm17parse__int__array(json_str) {
  let json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP311moonbitlang4core4json13parse_2einner({ str: json_str, start: 0, end: json_str.length }, 1024);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        json = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new Result$Err$30$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Invalid JSON array: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(json_str)}`));
  }
  let arr;
  _L$2: {
    if (json.$tag === 5) {
      const _Array = json;
      const _arr = _Array._0;
      arr = _arr;
      break _L$2;
    } else {
      return new Result$Err$30$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Expected JSON array, got: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(json_str)}`));
    }
  }
  const result = [];
  const _arr = arr;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = _arr[_i];
      let n;
      _L$3: {
        if (item.$tag === 3) {
          const _Number = item;
          const _n = _Number._0;
          n = _n;
          break _L$3;
        } else {
          return new Result$Err$30$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Expected number in array, got: ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin4JsonE(item)}`));
        }
      }
      _M0MP311moonbitlang4core5array5Array4pushGiE(result, _M0MP311moonbitlang4core6double6Double7to__int(n));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$30$(result);
}
function _M0FP47trkbt107iconset3cmd4wasm24collect__session__images(id, sizes_json) {
  const _bind = _M0FP47trkbt107iconset3cmd4wasm17parse__int__array(sizes_json);
  let sizes;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    sizes = _ok._0;
  } else {
    return _bind;
  }
  const images = [];
  const session = _M0MP311moonbitlang4core5array5Array2atGRP311moonbitlang4core7builtin3MapGizEE(_M0FP47trkbt107iconset3cmd4wasm8sessions, id);
  const _arr = sizes;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const size = _arr[_i];
      let png_data;
      _L: {
        const _bind$2 = _M0MP311moonbitlang4core7builtin3Map3getGizE(session, size);
        if (_bind$2 === undefined) {
          return new Result$Err$31$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidImageSize(size, size));
        } else {
          const _Some = _bind$2;
          const _png_data = _Some;
          png_data = _png_data;
          break _L;
        }
      }
      _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset5types10SizedImageE(images, { width: size, height: size, png_data: png_data });
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$31$(images);
}
function _M0FP47trkbt107iconset3cmd4wasm20session__encode__ico(id, sizes_json) {
  const _bind = _M0FP47trkbt107iconset3cmd4wasm24collect__session__images(id, sizes_json);
  let images;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    images = _ok._0;
  } else {
    return _bind;
  }
  return _M0FP37trkbt107iconset3ico6encode(images);
}
function _M0FP47trkbt107iconset3cmd4wasm21session__encode__icns(id, sizes_json) {
  const _bind = _M0FP47trkbt107iconset3cmd4wasm24collect__session__images(id, sizes_json);
  let images;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    images = _ok._0;
  } else {
    return _bind;
  }
  return _M0FP37trkbt107iconset4icns6encode(images);
}
function _M0FP47trkbt107iconset3cmd4wasm16destroy__session(id) {
  const _bind = [];
  _M0MP311moonbitlang4core5array5Array3setGRP311moonbitlang4core7builtin3MapGizEE(_M0FP47trkbt107iconset3cmd4wasm8sessions, id, _M0MP311moonbitlang4core7builtin3Map11from__arrayGizE({ buf: _bind, start: 0, end: 0 }));
}
function _M0FP47trkbt107iconset3cmd4wasm19get__all__platforms() {
  return _M0MP311moonbitlang4core4json4Json17stringify_2einner(_M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGRP37trkbt107iconset7catalog8PlatformE(_M0FP37trkbt107iconset7catalog14all__platforms()), false, 0, undefined);
}
function _M0FP47trkbt107iconset3cmd4wasm23parse__single__platform(name) {
  _L: {
    _L$2: {
      _L$3: {
        switch (name) {
          case "Windows": {
            return new Result$Ok$32$(0);
          }
          case "MacOS": {
            break _L$3;
          }
          case "macOS": {
            break _L$3;
          }
          case "IOS": {
            break _L$2;
          }
          case "iOS": {
            break _L$2;
          }
          case "Android": {
            return new Result$Ok$32$(3);
          }
          case "Ubuntu": {
            break _L;
          }
          case "Linux": {
            break _L;
          }
          case "Web": {
            return new Result$Ok$32$(5);
          }
          case "PWA": {
            return new Result$Ok$32$(6);
          }
          default: {
            return new Result$Err$32$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Unknown platform: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(name)}`));
          }
        }
      }
      return new Result$Ok$32$(1);
    }
    return new Result$Ok$32$(2);
  }
  return new Result$Ok$32$(4);
}
function _M0FP47trkbt107iconset3cmd4wasm16parse__platforms(json_str) {
  let json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP311moonbitlang4core4json13parse_2einner({ str: json_str, start: 0, end: json_str.length }, 1024);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        json = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new Result$Err$33$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Invalid JSON: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(json_str)}`));
  }
  let arr;
  _L$2: {
    if (json.$tag === 5) {
      const _Array = json;
      const _arr = _Array._0;
      arr = _arr;
      break _L$2;
    } else {
      return new Result$Err$33$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Expected JSON array, got: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(json_str)}`));
    }
  }
  const platforms = [];
  const _arr = arr;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = _arr[_i];
      let s;
      _L$3: {
        if (item.$tag === 4) {
          const _String = item;
          const _s = _String._0;
          s = _s;
          break _L$3;
        } else {
          return new Result$Err$33$(new Error$trkbt10$47$iconset$47$types$46$IconsetError$46$InvalidManifest(`Expected string in platform array, got: ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin4JsonE(item)}`));
        }
      }
      const _bind = _M0FP47trkbt107iconset3cmd4wasm23parse__single__platform(s);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        return _bind;
      }
      _M0MP311moonbitlang4core5array5Array4pushGRP37trkbt107iconset7catalog8PlatformE(platforms, _tmp$2);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$33$(platforms);
}
function _M0FP47trkbt107iconset3cmd4wasm20get__required__sizes(platforms_json) {
  const _bind = _M0FP47trkbt107iconset3cmd4wasm16parse__platforms(platforms_json);
  let platforms;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    platforms = _ok._0;
  } else {
    return _bind;
  }
  const sizes = _M0FP37trkbt107iconset7catalog20required__sizes__for(platforms);
  return new Result$Ok$29$(_M0MP311moonbitlang4core4json4Json17stringify_2einner(_M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin6ToJson8to__jsonGiE(sizes), false, 0, undefined));
}
function _M0FP47trkbt107iconset3cmd4wasm18get__catalog__json(platform) {
  const _bind = _M0FP47trkbt107iconset3cmd4wasm23parse__single__platform(platform);
  let p;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    p = _ok._0;
  } else {
    return _bind;
  }
  const catalog = _M0FP37trkbt107iconset7catalog12catalog__for(p);
  return new Result$Ok$29$(_M0MP311moonbitlang4core4json4Json17stringify_2einner(_M0IP37trkbt107iconset7catalog15PlatformCatalogP311moonbitlang4core7builtin6ToJson8to__json(catalog), false, 0, undefined));
}
function _M0FP47trkbt107iconset3cmd4wasm27wasm__generate__webmanifest(name, icon_dir) {
  return _M0FP37trkbt107iconset7catalog21generate__webmanifest(name, icon_dir);
}
function _M0FP47trkbt107iconset3cmd4wasm29wasm__generate__adaptive__xml(bg_is_color, has_monochrome) {
  return _M0FP37trkbt107iconset7catalog23generate__adaptive__xml(bg_is_color, has_monochrome);
}
function _M0FP47trkbt107iconset3cmd4wasm30wasm__generate__bg__color__xml(color) {
  return _M0FP37trkbt107iconset7catalog32generate__background__color__xml(color);
}
(() => {
  _M0FP311moonbitlang4core7builtin7printlnGsE("iconset WASM module loaded");
})();
export { _M0FP47trkbt107iconset3cmd4wasm19encode__ico__single as encodeIcoSingle, _M0FP47trkbt107iconset3cmd4wasm20encode__icns__single as encodeIcnsSingle, _M0FP47trkbt107iconset3cmd4wasm18validate__manifest as validateManifest, _M0FP47trkbt107iconset3cmd4wasm15create__session as createSession, _M0FP47trkbt107iconset3cmd4wasm19session__add__image as sessionAddImage, _M0FP47trkbt107iconset3cmd4wasm20session__encode__ico as sessionEncodeIco, _M0FP47trkbt107iconset3cmd4wasm21session__encode__icns as sessionEncodeIcns, _M0FP47trkbt107iconset3cmd4wasm16destroy__session as destroySession, _M0FP47trkbt107iconset3cmd4wasm19get__all__platforms as getAllPlatforms, _M0FP47trkbt107iconset3cmd4wasm20get__required__sizes as getRequiredSizes, _M0FP47trkbt107iconset3cmd4wasm18get__catalog__json as getCatalogJson, _M0FP47trkbt107iconset3cmd4wasm27wasm__generate__webmanifest as generateWebmanifest, _M0FP47trkbt107iconset3cmd4wasm29wasm__generate__adaptive__xml as generateAdaptiveXml, _M0FP47trkbt107iconset3cmd4wasm30wasm__generate__bg__color__xml as generateBgColorXml }
//# sourceMappingURL=wasm.js.map
