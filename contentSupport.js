// http://book.mixu.net/node/ch6.html
function Foo(inAttrs) {
  var theJoined = '(' + inAttrs.terms.join('|') + ')';
  this.regex = new RegExp( inAttrs.ignoreWordBoundaries ? theJoined : ('\\b' + theJoined + '\\b'), ( inAttrs.caseInsensitive == null || inAttrs.caseInsensitive) ? "i" : "");
  this.title = inAttrs.title || '';
}

Foo.prototype.getRegex = function() {
  return this.regex
};

Foo.prototype.getTitle = function() {
  return this.title
};

exports.TermSet = Foo;

exports.optDashes = function(inStr) { // Hard-working, Hard working, or Hardworking
    return replaceAll( inStr, '-', '(-| |)');
}

function replaceAll(string,text,by) {  // http://www.irt.org/script/771.htm
// Replaces text with by in string
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0,i) + by;

    if (i+txtLength < strLength)
        newstr += replaceAll(string.substring(i+txtLength,strLength),text,by);

    return newstr;
}

exports.optPrefixes = function() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), true);
}

exports.reqdPrefixes = function() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), false);
}

exports.optSuffixes = function() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), true);
}

exports.reqdSuffixes = function() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), false);
}

function handlePrefixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += inArray[i] + ' ';
    }

    return theStr += ( inIsOptional ? ')?' : ')') + inArray[0];
}

function handleSuffixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = inArray[0] + '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += ' ' + inArray[i];
    }

    return theStr + ( inIsOptional ? ')?' : ')');
}

exports.someWords = function( inMinNum, inMaxNum) {
    if ( inMinNum > inMaxNum || inMaxNum <= 0) {
        alert('Error: bad inputs to someWords(<min>,<max>)');
        return '';
    }
    return '( \\S+){' + inMinNum + ',' + inMaxNum + '}';
}

exports.andOr = function( in1stWord, in2ndWord) {
    return '(' +  in1stWord + ' and ' + in2ndWord + '|' + in1stWord + '|' + in2ndWord + ')';
}

exports.andOrEither = function( in1stWord, in2ndWord) {
    return '(' +  in1stWord + ' and ' + in2ndWord + '|' + in2ndWord + ' and ' + in1stWord + '|' + in1stWord + '|' + in2ndWord + ')';
}

exports.quoted = function(inStr) {
    return '"' + inStr + '"';
}
