
function main(args, kwargs) {
  var count,goods,bads,midsummer,wordCount,goodCount,indexCount,badCount;
 document.getElementById('outputoffun').textContent = "meow";
 document.getElementById('outputoffun').textContent = "here 1";
  console.log("Hello there");
    try {
badCount = 0;
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 3: badCount = 0");
throw new RuntimeError("line 3: badCount = 0");

}
    try {
bads = __get__(bad, "__call__")();
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 4: bads = bad()");
throw new RuntimeError("line 4: bads = bad()");

}
    try {
goods = __get__(good, "__call__")();
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 5: goods = good()");
throw new RuntimeError("line 5: goods = good()");

}
    try {
midsummer = __get__(script, "__call__")();
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 6: midsummer = script()");
throw new RuntimeError("line 6: midsummer = script()");

}
    try {
goodCount = 0;
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 8: goodCount = 0");
throw new RuntimeError("line 8: goodCount = 0");

}
    try {
wordCount = 0;
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 9: wordCount = 0");
throw new RuntimeError("line 9: wordCount = 0");

}
    try {
count = 0;
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 10: count = 0");
throw new RuntimeError("line 10: count = 0");

}
  var line,__iterator__0;
  document.getElementById('outputoffun').textContent = "here 1";
  __iterator__0 = __get__(__get__(midsummer, "__iter__", "no iterator - line 11: for line in midsummer:"), "__call__")([], __NULL_OBJECT__);
  var __next__0;
  document.getElementById('outputoffun').textContent = "here 2";
  __next__0 = __get__(__iterator__0, "next");
  while (( __iterator__0.index ) < __iterator__0.length) {
    line = __next__0();
        try {
indexCount = 0;
    } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 12: indexCount = 0");
throw new RuntimeError("line 12: indexCount = 0");

}
    var word,__iterator__1;
    __iterator__1 = __get__(__get__(line, "__iter__", "no iterator - line 13: for word in line:"), "__call__")([], __NULL_OBJECT__);
    var __next__1;
    __next__1 = __get__(__iterator__1, "next");
    while (( __iterator__1.index ) < __iterator__1.length) {
      word = __next__1();
            try {
var __left0,__right1;
__left0 = wordCount;
__right1 = 1;
wordCount = ((( typeof(__left0) ) == "number") ? (__left0 + __right1) : __add_op(__left0, __right1));
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 14: wordCount = wordCount + 1");
throw new RuntimeError("line 14: wordCount = wordCount + 1");

}
      if (( __get__(__get__(goods, "count", "missing attribute `count` - line 15: if goods.count(word) > 0:"), "__call__")([word], __NULL_OBJECT__) ) > 0) {
        if (__test_if_true__(( indexCount ) > 0 && ( ((line instanceof Array) ? line[(indexCount - 1)] : __get__(line, "__getitem__", "line 16: if indexCount > 0 and line[indexCount-1] == \"not\" or line[indexCount-1] == \"no\" :")([(indexCount - 1)], __NULL_OBJECT__)) ) == "not" || ( ((line instanceof Array) ? line[(indexCount - 1)] : __get__(line, "__getitem__", "line 16: if indexCount > 0 and line[indexCount-1] == \"not\" or line[indexCount-1] == \"no\" :")([(indexCount - 1)], __NULL_OBJECT__)) ) == "no")) {
                    try {
var __left2,__right3;
__left2 = badCount;
__right3 = 1;
badCount = ((( typeof(__left2) ) == "number") ? (__left2 + __right3) : __add_op(__left2, __right3));
          } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 17: badCount = badCount + 1");
throw new RuntimeError("line 17: badCount = badCount + 1");

}
        } else {
                    try {
var __left4,__right5;
__left4 = goodCount;
__right5 = 1;
goodCount = ((( typeof(__left4) ) == "number") ? (__left4 + __right5) : __add_op(__left4, __right5));
          } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 19: goodCount = goodCount + 1");
throw new RuntimeError("line 19: goodCount = goodCount + 1");

}
        }
      }
      if (( __get__(__get__(bads, "count", "missing attribute `count` - line 20: if bads.count(word) > 0:"), "__call__")([word], __NULL_OBJECT__) ) > 0) {
        if (__test_if_true__(( indexCount ) > 0 && ( ((line instanceof Array) ? line[(indexCount - 1)] : __get__(line, "__getitem__", "line 21: if indexCount > 0 and line[indexCount-1] == \"not\" or line[indexCount-1] == \"no\" :")([(indexCount - 1)], __NULL_OBJECT__)) ) == "not" || ( ((line instanceof Array) ? line[(indexCount - 1)] : __get__(line, "__getitem__", "line 21: if indexCount > 0 and line[indexCount-1] == \"not\" or line[indexCount-1] == \"no\" :")([(indexCount - 1)], __NULL_OBJECT__)) ) == "no")) {
                    try {
var __left6,__right7;
__left6 = goodCount;
__right7 = 1;
goodCount = ((( typeof(__left6) ) == "number") ? (__left6 + __right7) : __add_op(__left6, __right7));
          } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 22: goodCount = goodCount + 1");
throw new RuntimeError("line 22: goodCount = goodCount + 1");

}
        } else {
                    try {
var __left8,__right9;
__left8 = badCount;
__right9 = 1;
badCount = ((( typeof(__left8) ) == "number") ? (__left8 + __right9) : __add_op(__left8, __right9));
          } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 24: badCount = badCount + 1");
throw new RuntimeError("line 24: badCount = badCount + 1");

}
        }
      }
            try {
var __left10,__right11;
__left10 = indexCount;
__right11 = 1;
indexCount = ((( typeof(__left10) ) == "number") ? (__left10 + __right11) : __add_op(__left10, __right11));
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 25: indexCount = indexCount + 1");
throw new RuntimeError("line 25: indexCount = indexCount + 1");

}
    }
  }
    document.getElementById('outputoffun').textContent = goodCount;


  console.log(["Good word count is: ", goodCount]);
  console.log(["Bad word count is: ", badCount]);
  console.log(["Erich Zann word count is: ", wordCount]);
    try {
__get__(calculate, "__call__")([goodCount, badCount, wordCount], __NULL_OBJECT__);
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 29: calculate(goodCount, badCount, wordCount)");
throw new RuntimeError("line 29: calculate(goodCount, badCount, wordCount)");

}
}
;main.is_wrapper = true;



function calculate(args, kwargs) {
  
  var __sig__,__args__;
  __sig__ = { kwargs:{},args:["goodCount", "badCount", "wordCount"] };
  if (args instanceof Array && ( Object.prototype.toString.call(kwargs) ) == "[object Object]" && ( arguments.length ) == 2) {
    /*pass*/
  } else {
    args = Array.prototype.slice.call(arguments, 0, __sig__.args.length);
    kwargs = {};
  }
  __args__ = __getargs__("calculate", __sig__, args, kwargs);
  var goodCount = __args__['goodCount'];
  var badCount = __args__['badCount'];
  var wordCount = __args__['wordCount'];
  if (( goodCount ) > badCount) {
    var __left12,__right13;
    __left12 = goodCount;
    __right13 = badCount;
    console.log(["The chosen work is ", __get__(round, "__call__")([__mul_op((goodCount / ((( typeof(__left12) ) == "number") ? (__left12 + __right13) : __add_op(__left12, __right13))), 100), 2], __NULL_OBJECT__), " % positive"]);
  }
  if (( badCount ) > goodCount) {
    var __left14,__right15;
    __left14 = goodCount;
    __right15 = badCount;
    console.log(["The chosen work is ", __get__(round, "__call__")([__mul_op((badCount / ((( typeof(__left14) ) == "number") ? (__left14 + __right15) : __add_op(__left14, __right15))), 100), 2], __NULL_OBJECT__), "% negative"]);
  }
}
;calculate.is_wrapper = true;



function script(args, kwargs) {
  var midsummer,newWords,fIn,words,newword;
    try {
midsummer = [];
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 36: midsummer = []");
throw new RuntimeError("line 36: midsummer = []");

}
    try {
fIn = __get__(__open__, "__call__")(["hunger.txt", "r"], __NULL_OBJECT__);
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 37: fIn = open(\"hunger.txt\", 'r')");
throw new RuntimeError("line 37: fIn = open(\"hunger.txt\", 'r')");

}
  var line,__iterator__2;
  __iterator__2 = __get__(__get__(fIn, "__iter__", "no iterator - line 38: for line in fIn:"), "__call__")([], __NULL_OBJECT__);
  var __next__2;
  __next__2 = __get__(__iterator__2, "next");
  while (( __iterator__2.index ) < __iterator__2.length) {
    line = __next__2();
        try {
words = __split_method(line, " ");
    } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 39: words = line.split(' ')");
throw new RuntimeError("line 39: words = line.split(' ')");

}
        try {
newWords = [];
    } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 40: newWords = []");
throw new RuntimeError("line 40: newWords = []");

}
    var word,__iterator__3;
    __iterator__3 = __get__(__get__(words, "__iter__", "no iterator - line 41: for word in words:"), "__call__")([], __NULL_OBJECT__);
    var __next__3;
    __next__3 = __get__(__iterator__3, "next");
    while (( __iterator__3.index ) < __iterator__3.length) {
      word = __next__3();
            try {
newword = __get__(__get__(word, "strip", "missing attribute `strip` - line 42: newword = word.strip([',' ';' ':' '.' '/\"'])"), "__call__")([[",;:./\""]], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 42: newword = word.strip([',' ';' ':' '.' '/\"'])");
throw new RuntimeError("line 42: newword = word.strip([',' ';' ':' '.' '/\"'])");

}
            try {
__get__(__get__(newWords, "append", "missing attribute `append` - line 43: newWords.append(newword)"), "__call__")([newword], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 43: newWords.append(newword)");
throw new RuntimeError("line 43: newWords.append(newword)");

}
    }
        try {
__get__(__get__(midsummer, "append", "missing attribute `append` - line 44: midsummer.append(newWords)"), "__call__")([newWords], __NULL_OBJECT__);
    } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 44: midsummer.append(newWords)");
throw new RuntimeError("line 44: midsummer.append(newWords)");

}
  }
  return midsummer;
}
;script.is_wrapper = true;




function bad(args, kwargs) {
  var bads,fIn,out;
    try {
bads = [];
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 48: bads = []");
throw new RuntimeError("line 48: bads = []");

}
    try {
fIn = __get__(__open__, "__call__")(["bad_words.txt", "r"], __NULL_OBJECT__);
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 49: fIn = open(\"bad_words.txt\", 'r')");
throw new RuntimeError("line 49: fIn = open(\"bad_words.txt\", 'r')");

}
  var line,__iterator__4;
  __iterator__4 = __get__(__get__(fIn, "__iter__", "no iterator - line 50: for line in fIn:"), "__call__")([], __NULL_OBJECT__);
  var __next__4;
  __next__4 = __get__(__iterator__4, "next");
  while (( __iterator__4.index ) < __iterator__4.length) {
    line = __next__4();
    if (( ((line instanceof Array) ? line[0] : __get__(line, "__getitem__", "line 51: if line[0] != ';':")([0], __NULL_OBJECT__)) ) != ";") {
            try {
__get__(__get__(line, "strip", "missing attribute `strip` - line 52: line.strip()"), "__call__")();
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 52: line.strip()");
throw new RuntimeError("line 52: line.strip()");

}
            try {
out = __get__(__get__(line, "strip", "missing attribute `strip` - line 53: out = line.strip('\
')"), "__call__")(["\
"], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 53: out = line.strip('\
')");
throw new RuntimeError("line 53: out = line.strip('\
')");

}
            try {
__get__(__get__(bads, "append", "missing attribute `append` - line 54: bads.append(out)"), "__call__")([out], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 54: bads.append(out)");
throw new RuntimeError("line 54: bads.append(out)");

}
    }
  }
  return bads;
}
;bad.is_wrapper = true;





function good(args, kwargs) {
  var goods,fIn,out;
    try {
goods = [];
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 57: goods = []");
throw new RuntimeError("line 57: goods = []");

}
    try {
fIn = __get__(__open__, "__call__")(["good_words.txt", "r"], __NULL_OBJECT__);
  } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 58: fIn = open(\"good_words.txt\", 'r')");
throw new RuntimeError("line 58: fIn = open(\"good_words.txt\", 'r')");

}
  var line,__iterator__5;
  __iterator__5 = __get__(__get__(fIn, "__iter__", "no iterator - line 59: for line in fIn:"), "__call__")([], __NULL_OBJECT__);
  var __next__5;
  __next__5 = __get__(__iterator__5, "next");
  while (( __iterator__5.index ) < __iterator__5.length) {
    line = __next__5();
    if (( ((line instanceof Array) ? line[0] : __get__(line, "__getitem__", "line 60: if line[0] != ';':")([0], __NULL_OBJECT__)) ) != ";") {
            try {
__get__(__get__(line, "strip", "missing attribute `strip` - line 61: line.strip()"), "__call__")();
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 61: line.strip()");
throw new RuntimeError("line 61: line.strip()");

}
            try {
out = __get__(__get__(line, "strip", "missing attribute `strip` - line 62: out = line.strip('\
')"), "__call__")(["\
"], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 62: out = line.strip('\
')");
throw new RuntimeError("line 62: out = line.strip('\
')");

}
            try {
__get__(__get__(goods, "append", "missing attribute `append` - line 63: goods.append(out)"), "__call__")([out], __NULL_OBJECT__);
      } catch(__exception__) {
console.trace();
console.error(__exception__, __exception__.message);
console.error("line 63: goods.append(out)");
throw new RuntimeError("line 63: goods.append(out)");

}
    }
  }
  return goods;
}
;good.is_wrapper = true;


