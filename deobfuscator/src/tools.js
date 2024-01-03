import beautify from "js-beautify";
import { Range } from "monaco-editor";

window.stackEval = [];


function colName(n) {
  var ordA = "a".charCodeAt(0);
  var ordZ = "z".charCodeAt(0);
  var len = ordZ - ordA + 1;

  var s = "";
  while (n >= 0) {
    s = String.fromCharCode((n % len) + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s;
}

function isBracketEven(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") count++;
    else if (str[i] === ")") count--;
    else if (str[i] === "[") count++;
    else if (str[i] === "]") count--;
    else if (str[i] === "{") count++;
    else if (str[i] === "}") count--;
  }
  return count === 0;
}

window.expandBracket = function () {
  editor.getAction("editor.action.selectToBracket").run();
};



window.selectAllVarDeclaration = function () {
  var text = utils.text;
  var r = /^\s*(var|let|const) [\w\W]+?(;\n|function|=>)/gm;
  var ranges = [];

  var m;
  while ((m = r.exec(text)) !== null) {
    var start = m.index;
    var end = start + m[0].length;
    if (isBracketEven(m[0]) && m[0].endsWith(";\n")) {
      ranges.push(utils.rangeFromOffset(start, end));
    }
  }
  utils.selectRangeList(ranges);
};

window.subtituteAllVarAssigment = function () {
  var fulltext = utils.text;
  utils.transformSelection(function (text) {
    // must be single var
    var r = /^(\s*var |\s*let |\s*const )(\w+)(;\s*)/gm;
    var m = r.exec(text);
    if (m) {
      var varname = m[2];
      var r2 = new RegExp(`(,|^)\\s*${varname}( = .+?)(,|;)`, "gm");
      var m2 = r2.exec(fulltext);
      if (m2) {        
        return m[1] + m[2] + m2[2] + m[3];
      }
    }
    else {
      return text;
    }
  });
}

window.syncVar = function () {
  var thevar = utils.selectedText;
  var text = utils.text;
  if (thevar.indexOf(" ") !== -1) {
    alert('Not a valid var!');
    return;
  }
  var text2 = text;
  while (true) {
    text2 = syncVarNested(thevar, text);
    if (text !== text2)
      text = text2;
    else
      break;
  }
  utils.text = text2;
};


window.syncVarNested = function (thevar, text) {
  var r = new RegExp(`^ *(var|let|const)? +(\\w+) += +${thevar}(;|,\\n)`, "gm");
  var alternates = [];
  var t = text.replace(r, function (_, p1, p2, sep) {
    alternates.push(p2);
    return ``;
  });
  alternates = alternates.filter((v, i, a) => a.indexOf(v) === i)
  console.log(alternates);
  alternates.forEach(w => {
    t = t.replace(new RegExp(`\\b${w}\\b`, "g"), thevar);
    t = window.syncVarNested(w, t);
  });
  return t;
};

function stringify(obj) {
  if (typeof obj == "function") return obj.toString();
  else if (obj === undefined) throw new Error("returned undefined");
  else return JSON.stringify(obj);
}

window.evalStr = function () {
  utils.transformSelection(function (text) {
    try {
      if (window.stackEval.length > 0) {
        return stringify(eval(`
          (function(){
            ${stackEval.slice(-1)[0]}
            return ${text};
          })();
        `));
      } else {
        return stringify(eval("(" + text + ")"));
      }
    } catch (error) {
      console.error(error);
      return text;
    }
  });
};

window.evalBareStr = function () {
  utils.transformSelection(function (text) {
    try {
      if (window.stackEval.length > 0) {
        return String(eval(`
          (function(){
            ${stackEval.slice(-1)[0]}
            return ${text};
          })();
        `));
      } else {
        return String(eval("(" + text + ")"));
      }
    } catch (error) {
      console.error(error);
      return text;
    }
  });
};

window.evalPush = function () {
  if (utils.startSelection != utils.endSelection) {
    window.stackEval.push(
      (window.stackEval.slice(-1)[0] || "") + utils.selectedText + "\n"
    );
    console.log("stackEval pushed, current evaluation:");
    console.log(window.stackEval.slice(-1)[0]);
  } else {
    console.log("Nothing selected");
  }
};

window.evalPop = function () {
  window.stackEval.pop();
  console.log("stackEval popped, current evaluation:");
  console.log(stackEval.slice(-1)[0]);
};

window.evalAuto = function () {
  utils.selectAllIfNone();
  var r = /(?:^|;)\s*(?:var|const|let)\s+(\w+)/gm,
    w,
    v = [],
    text = utils.selectedText;
  while ((w = r.exec(window.stackEval.slice(-1)[0])) !== null) v.push(w[1]);
  console.log("Captured variables:");
  console.log(v);
  v.forEach((t) => {
    text = text.replace(
      new RegExp("\b" + t + "(\\.\\w+)?(\\[.+?\\]|\\(.+?\\)|\\b)", "g"),
      function (token) {
        try {
          var result = eval(`
			(function(){
				${stackEval.slice(-1)[0]}
				return ${token};
			})();
		`);
          if (typeof result == "string" || typeof result == "number" || typeof result == "boolean" || result === null) {
            return JSON.stringify(result);
          } else {
            return token;
          }
        } catch (error) {
          return token;
        }
      }
    );
  });
  utils.selectedText = text;
};

window.evalAutoRegex = function (regex, outf) {
  utils.selectAllIfNone();
  var replaced = utils.selectedText.replace(r, function (o) {
    try {
      var result = outf.apply(null, arguments);
      if (typeof result == "string" || typeof result == "number") return result;
      else return o;
    } catch (e) {
      return o;
    }
  });
  utils.selectedText = replaced;
};

function splitNested(str) {
  let result = [], item = '', depth = 0;

  function push() { if (item) result.push(item); item = ''; }

  for (let i = 0, c; c = str[i], i < str.length; i++) {
    if (!depth && c === ',') push();
    else {
      item += c;
      if (c === '[') depth++;
      if (c === ']') depth--;
      if (c === '{') depth++;
      if (c === '}') depth--;
      if (c === '(') depth++;
      if (c === ')') depth--;
    }
  }

  push();
  return result;
}

window.splitVar = function () {
  utils.transformSelection(function (text) {
    return text.replace(/^(\s*)(var|let|const)\s+(.+?);/gsm, function (all, space, met, exp) {
      // assume nice formatted
      var vars = splitNested(exp);
      return vars.map(x => `${space}${met} ${x.trim()};\n`).join("");
    });
  });
};

/* Formatting Tools */

window.beautify = function () {
  utils.text = beautify(utils.text, { indent_size: 2 });
};

window.simplifyString = function () {
  utils.selectAllIfNone();
  var replaced = utils.selectedText
    .replace(/"(\\"|[^"])*?"/g, function (m) {
      return JSON.stringify(eval(m));
    })
    .replace(/'(\\"|[^'])*?'/g, function (m) {
      return JSON.stringify(eval(m));
    });
  utils.selectedText = replaced;
};

window.simplifyNumber = function () {
  utils.selectAllIfNone();
  var replaced = utils.selectedText.replace(
    /\b0x[a-fA-F0-9]+\b/g,
    function (m) {
      return JSON.stringify(eval(m));
    }
  );
  utils.selectedText = replaced;
};

window.simplifyNumberExp = function () {
  utils.selectAllIfNone();
  var replaced = utils.selectedText.replace(
    /(\b|-)(-?[\d\.]+ ?[-*+/%^] ?)+(-?[\d\.]+)\b/g,
    function (m) {
      try {
        var r = eval(m);
        return typeof r == "number" ? JSON.stringify(r) : m;
      } catch (error) {
        return m;
      }
    }
  );
  utils.selectedText = replaced;
};

window.simplifyStringExp = function () {
  utils.selectAllIfNone();
  var replaced = utils.selectedText.replace(/"[\w" \+]+"/g, function (m) {
    try {
      var r = eval(m);
      return typeof r == "string" ? JSON.stringify(r) : m;
    } catch (error) {
      return m;
    }
  });
  utils.selectedText = replaced;
};

window.simplifyAccess = function () {
  utils.selectAllIfNone();
  utils.selectedText = utils.selectedText
    .replace(/\["([\w][\w\d_]*?)"\]/g, ".$1")
    .replace(/\['([\w][\w\d_]*?)'\]/g, ".$1");
};

window.simplifyVar = function () {
  utils.selectAllIfNone();
  // This function dissasemble var chain. Can't figure save way to do it yet.
  console.log("Coming Soon!");
};

window.simplifyHex = function () {
  utils.selectAllIfNone();
  var letters = {};
  var letc = 0;
  var s = utils.selectedText;
  var replaced = s.replace(/\b_0x[a-fA-F0-9]+\b/g, function (m) {
    if (letters[m]) return letters[m];
    else {
      var x;
      while ((x = colName(letc++)))
        if (!s.match(new RegExp("\\b" + x + "\\b", "i")))
          if (
            !["do", "if", "in", "for", "let", "new", "var", "try"].includes(x)
          )
            break;

      letters[m] = x;
      return x;
    }
  });
  utils.selectedText = replaced;
};

window.gotoRepo = function () {
  window.open("https://cdn.motren.id/deobfuscator/", "_blank");
};
