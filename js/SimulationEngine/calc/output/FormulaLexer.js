// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Library/WebServer/Documents/calc/Formula.g 2013-07-30 20:45:33

var FormulaLexer = function(input, state) {
// alternate constructor @todo
// public FormulaLexer(CharStream input)
// public FormulaLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa30 = new FormulaLexer.DFA30(this);
    FormulaLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(FormulaLexer, {
    EOF: -1,
    T__108: 108,
    T__109: 109,
    T__110: 110,
    T__111: 111,
    NEGATE: 4,
    ASSIGN: 5,
    FUNCALL: 6,
    MATERIAL: 7,
    UNIT: 8,
    POWER: 9,
    DEFAULTS: 10,
    PARAMS: 11,
    UNITCLUMP: 12,
    ARRAY: 13,
    LINES: 14,
    WHILE: 15,
    IFTHENELSE: 16,
    ELSE: 17,
    FOR: 18,
    FORIN: 19,
    FUNCTION: 20,
    ANONFUNCTION: 21,
    NUMBER: 22,
    LABEL: 23,
    RANGE: 24,
    INNER: 25,
    ASSIGNED: 26,
    SELECTOR: 27,
    DOTSELECTOR: 28,
    NEW: 29,
    NEWLINE: 30,
    W: 31,
    H: 32,
    I: 33,
    L: 34,
    E: 35,
    WHILESTATEMENT: 36,
    F: 37,
    O: 38,
    R: 39,
    FORSTATEMENT: 40,
    M: 41,
    FROMSTATEMENT: 42,
    N: 43,
    INSTATEMENT: 44,
    T: 45,
    TOSTATEMENT: 46,
    B: 47,
    Y: 48,
    BYSTATEMENT: 49,
    P: 50,
    LOOPSTATEMENT: 51,
    IFSTATEMENT: 52,
    THENSTATEMENT: 53,
    S: 54,
    ELSESTATEMENT: 55,
    U: 56,
    C: 57,
    FUNCTIONSTATEMENT: 58,
    D: 59,
    ENDBLOCK: 60,
    RETURNSTATEMENT: 61,
    NEWSTATEMENT: 62,
    IDENT: 63,
    EQUALS: 64,
    PRIMITIVE: 65,
    OR: 66,
    XOR: 67,
    X: 68,
    AND: 69,
    A: 70,
    NOTEQUALS: 71,
    LT: 72,
    LTEQ: 73,
    GT: 74,
    GTEQ: 75,
    PLUS: 76,
    MINUS: 77,
    MULT: 78,
    DIV: 79,
    MOD: 80,
    COLON: 81,
    POW: 82,
    NOT: 83,
    LARR: 84,
    RARR: 85,
    LCURL: 86,
    RCURL: 87,
    COMMA: 88,
    STRING: 89,
    INTEGER: 90,
    FLOAT: 91,
    TRUE: 92,
    FALSE: 93,
    PER: 94,
    CUBED: 95,
    SQUARED: 96,
    Q: 97,
    LBRACKET: 98,
    RBRACKET: 99,
    COMMENT: 100,
    LINE_COMMENT: 101,
    WS: 102,
    G: 103,
    J: 104,
    K: 105,
    V: 106,
    Z: 107
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(FormulaLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__108 : 108,
    T__109 : 109,
    T__110 : 110,
    T__111 : 111,
    NEGATE : 4,
    ASSIGN : 5,
    FUNCALL : 6,
    MATERIAL : 7,
    UNIT : 8,
    POWER : 9,
    DEFAULTS : 10,
    PARAMS : 11,
    UNITCLUMP : 12,
    ARRAY : 13,
    LINES : 14,
    WHILE : 15,
    IFTHENELSE : 16,
    ELSE : 17,
    FOR : 18,
    FORIN : 19,
    FUNCTION : 20,
    ANONFUNCTION : 21,
    NUMBER : 22,
    LABEL : 23,
    RANGE : 24,
    INNER : 25,
    ASSIGNED : 26,
    SELECTOR : 27,
    DOTSELECTOR : 28,
    NEW : 29,
    NEWLINE : 30,
    W : 31,
    H : 32,
    I : 33,
    L : 34,
    E : 35,
    WHILESTATEMENT : 36,
    F : 37,
    O : 38,
    R : 39,
    FORSTATEMENT : 40,
    M : 41,
    FROMSTATEMENT : 42,
    N : 43,
    INSTATEMENT : 44,
    T : 45,
    TOSTATEMENT : 46,
    B : 47,
    Y : 48,
    BYSTATEMENT : 49,
    P : 50,
    LOOPSTATEMENT : 51,
    IFSTATEMENT : 52,
    THENSTATEMENT : 53,
    S : 54,
    ELSESTATEMENT : 55,
    U : 56,
    C : 57,
    FUNCTIONSTATEMENT : 58,
    D : 59,
    ENDBLOCK : 60,
    RETURNSTATEMENT : 61,
    NEWSTATEMENT : 62,
    IDENT : 63,
    EQUALS : 64,
    PRIMITIVE : 65,
    OR : 66,
    XOR : 67,
    X : 68,
    AND : 69,
    A : 70,
    NOTEQUALS : 71,
    LT : 72,
    LTEQ : 73,
    GT : 74,
    GTEQ : 75,
    PLUS : 76,
    MINUS : 77,
    MULT : 78,
    DIV : 79,
    MOD : 80,
    COLON : 81,
    POW : 82,
    NOT : 83,
    LARR : 84,
    RARR : 85,
    LCURL : 86,
    RCURL : 87,
    COMMA : 88,
    STRING : 89,
    INTEGER : 90,
    FLOAT : 91,
    TRUE : 92,
    FALSE : 93,
    PER : 94,
    CUBED : 95,
    SQUARED : 96,
    Q : 97,
    LBRACKET : 98,
    RBRACKET : 99,
    COMMENT : 100,
    LINE_COMMENT : 101,
    WS : 102,
    G : 103,
    J : 104,
    K : 105,
    V : 106,
    Z : 107,
    getGrammarFileName: function() { return "/Library/WebServer/Documents/calc/Formula.g"; }
});
org.antlr.lang.augmentObject(FormulaLexer.prototype, {
    // $ANTLR start T__108
    mT__108: function()  {
        try {
            var _type = this.T__108;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:7:8: ( '(' )
            // /Library/WebServer/Documents/calc/Formula.g:7:10: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__108",

    // $ANTLR start T__109
    mT__109: function()  {
        try {
            var _type = this.T__109;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:8:8: ( ')' )
            // /Library/WebServer/Documents/calc/Formula.g:8:10: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__109",

    // $ANTLR start T__110
    mT__110: function()  {
        try {
            var _type = this.T__110;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:9:8: ( '<-' )
            // /Library/WebServer/Documents/calc/Formula.g:9:10: '<-'
            this.match("<-"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__110",

    // $ANTLR start T__111
    mT__111: function()  {
        try {
            var _type = this.T__111;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:10:8: ( '.' )
            // /Library/WebServer/Documents/calc/Formula.g:10:10: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__111",

    // $ANTLR start NEWLINE
    mNEWLINE: function()  {
        try {
            var _type = this.NEWLINE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:47:2: ( ( ( '\\r' )? '\\n' ) )
            // /Library/WebServer/Documents/calc/Formula.g:47:4: ( ( '\\r' )? '\\n' )
            // /Library/WebServer/Documents/calc/Formula.g:47:4: ( ( '\\r' )? '\\n' )
            // /Library/WebServer/Documents/calc/Formula.g:47:5: ( '\\r' )? '\\n'
            // /Library/WebServer/Documents/calc/Formula.g:47:5: ( '\\r' )?
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0=='\r') ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:47:5: '\\r'
                    this.match('\r'); 


                    break;

            }

            this.match('\n'); 






            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEWLINE",

    // $ANTLR start WHILESTATEMENT
    mWHILESTATEMENT: function()  {
        try {
            var _type = this.WHILESTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:51:2: ( W H I L E )
            // /Library/WebServer/Documents/calc/Formula.g:51:4: W H I L E
            this.mW(); 
            this.mH(); 
            this.mI(); 
            this.mL(); 
            this.mE(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHILESTATEMENT",

    // $ANTLR start FORSTATEMENT
    mFORSTATEMENT: function()  {
        try {
            var _type = this.FORSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:55:2: ( F O R )
            // /Library/WebServer/Documents/calc/Formula.g:55:4: F O R
            this.mF(); 
            this.mO(); 
            this.mR(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FORSTATEMENT",

    // $ANTLR start FROMSTATEMENT
    mFROMSTATEMENT: function()  {
        try {
            var _type = this.FROMSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:59:2: ( F R O M )
            // /Library/WebServer/Documents/calc/Formula.g:59:4: F R O M
            this.mF(); 
            this.mR(); 
            this.mO(); 
            this.mM(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FROMSTATEMENT",

    // $ANTLR start INSTATEMENT
    mINSTATEMENT: function()  {
        try {
            var _type = this.INSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:63:2: ( I N )
            // /Library/WebServer/Documents/calc/Formula.g:63:4: I N
            this.mI(); 
            this.mN(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INSTATEMENT",

    // $ANTLR start TOSTATEMENT
    mTOSTATEMENT: function()  {
        try {
            var _type = this.TOSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:67:2: ( T O )
            // /Library/WebServer/Documents/calc/Formula.g:67:4: T O
            this.mT(); 
            this.mO(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TOSTATEMENT",

    // $ANTLR start BYSTATEMENT
    mBYSTATEMENT: function()  {
        try {
            var _type = this.BYSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:71:2: ( B Y )
            // /Library/WebServer/Documents/calc/Formula.g:71:4: B Y
            this.mB(); 
            this.mY(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BYSTATEMENT",

    // $ANTLR start LOOPSTATEMENT
    mLOOPSTATEMENT: function()  {
        try {
            var _type = this.LOOPSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:75:2: ( L O O P )
            // /Library/WebServer/Documents/calc/Formula.g:75:4: L O O P
            this.mL(); 
            this.mO(); 
            this.mO(); 
            this.mP(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOOPSTATEMENT",

    // $ANTLR start IFSTATEMENT
    mIFSTATEMENT: function()  {
        try {
            var _type = this.IFSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:79:2: ( I F )
            // /Library/WebServer/Documents/calc/Formula.g:79:4: I F
            this.mI(); 
            this.mF(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IFSTATEMENT",

    // $ANTLR start THENSTATEMENT
    mTHENSTATEMENT: function()  {
        try {
            var _type = this.THENSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:83:2: ( T H E N )
            // /Library/WebServer/Documents/calc/Formula.g:83:4: T H E N
            this.mT(); 
            this.mH(); 
            this.mE(); 
            this.mN(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THENSTATEMENT",

    // $ANTLR start ELSESTATEMENT
    mELSESTATEMENT: function()  {
        try {
            var _type = this.ELSESTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:87:2: ( E L S E )
            // /Library/WebServer/Documents/calc/Formula.g:87:4: E L S E
            this.mE(); 
            this.mL(); 
            this.mS(); 
            this.mE(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSESTATEMENT",

    // $ANTLR start FUNCTIONSTATEMENT
    mFUNCTIONSTATEMENT: function()  {
        try {
            var _type = this.FUNCTIONSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:91:2: ( F U N C T I O N )
            // /Library/WebServer/Documents/calc/Formula.g:91:4: F U N C T I O N
            this.mF(); 
            this.mU(); 
            this.mN(); 
            this.mC(); 
            this.mT(); 
            this.mI(); 
            this.mO(); 
            this.mN(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FUNCTIONSTATEMENT",

    // $ANTLR start ENDBLOCK
    mENDBLOCK: function()  {
        try {
            var _type = this.ENDBLOCK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:95:2: ( E N D )
            // /Library/WebServer/Documents/calc/Formula.g:95:4: E N D
            this.mE(); 
            this.mN(); 
            this.mD(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ENDBLOCK",

    // $ANTLR start RETURNSTATEMENT
    mRETURNSTATEMENT: function()  {
        try {
            var _type = this.RETURNSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:99:2: ( R E T U R N )
            // /Library/WebServer/Documents/calc/Formula.g:99:4: R E T U R N
            this.mR(); 
            this.mE(); 
            this.mT(); 
            this.mU(); 
            this.mR(); 
            this.mN(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RETURNSTATEMENT",

    // $ANTLR start NEWSTATEMENT
    mNEWSTATEMENT: function()  {
        try {
            var _type = this.NEWSTATEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:103:2: ( N E W )
            // /Library/WebServer/Documents/calc/Formula.g:103:4: N E W
            this.mN(); 
            this.mE(); 
            this.mW(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEWSTATEMENT",

    // $ANTLR start OR
    mOR: function()  {
        try {
            var _type = this.OR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:166:5: ( '||' | O R )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='|') ) {
                alt2=1;
            }
            else if ( (LA2_0=='O'||LA2_0=='o') ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:166:8: '||'
                    this.match("||"); 



                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:166:15: O R
                    this.mO(); 
                    this.mR(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OR",

    // $ANTLR start XOR
    mXOR: function()  {
        try {
            var _type = this.XOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:172:6: ( X O R )
            // /Library/WebServer/Documents/calc/Formula.g:172:9: X O R
            this.mX(); 
            this.mO(); 
            this.mR(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "XOR",

    // $ANTLR start AND
    mAND: function()  {
        try {
            var _type = this.AND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:178:5: ( '&&' | A N D )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0=='&') ) {
                alt3=1;
            }
            else if ( (LA3_0=='A'||LA3_0=='a') ) {
                alt3=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:178:8: '&&'
                    this.match("&&"); 



                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:178:15: A N D
                    this.mA(); 
                    this.mN(); 
                    this.mD(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AND",

    // $ANTLR start EQUALS
    mEQUALS: function()  {
        try {
            var _type = this.EQUALS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:185:2: ( '=' | '==' )
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0=='=') ) {
                var LA4_1 = this.input.LA(2);

                if ( (LA4_1=='=') ) {
                    alt4=2;
                }
                else {
                    alt4=1;}
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:185:4: '='
                    this.match('='); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:185:10: '=='
                    this.match("=="); 



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQUALS",

    // $ANTLR start NOTEQUALS
    mNOTEQUALS: function()  {
        try {
            var _type = this.NOTEQUALS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:188:2: ( '!=' | '<>' )
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='!') ) {
                alt5=1;
            }
            else if ( (LA5_0=='<') ) {
                alt5=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:188:4: '!='
                    this.match("!="); 



                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:188:11: '<>'
                    this.match("<>"); 



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOTEQUALS",

    // $ANTLR start LT
    mLT: function()  {
        try {
            var _type = this.LT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:195:4: ( '<' )
            // /Library/WebServer/Documents/calc/Formula.g:195:6: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LT",

    // $ANTLR start LTEQ
    mLTEQ: function()  {
        try {
            var _type = this.LTEQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:196:6: ( '<=' )
            // /Library/WebServer/Documents/calc/Formula.g:196:8: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LTEQ",

    // $ANTLR start GT
    mGT: function()  {
        try {
            var _type = this.GT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:197:4: ( '>' )
            // /Library/WebServer/Documents/calc/Formula.g:197:6: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GT",

    // $ANTLR start GTEQ
    mGTEQ: function()  {
        try {
            var _type = this.GTEQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:198:6: ( '>=' )
            // /Library/WebServer/Documents/calc/Formula.g:198:8: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GTEQ",

    // $ANTLR start PLUS
    mPLUS: function()  {
        try {
            var _type = this.PLUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:204:6: ( '+' )
            // /Library/WebServer/Documents/calc/Formula.g:204:8: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PLUS",

    // $ANTLR start MINUS
    mMINUS: function()  {
        try {
            var _type = this.MINUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:205:7: ( '-' )
            // /Library/WebServer/Documents/calc/Formula.g:205:9: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MINUS",

    // $ANTLR start MULT
    mMULT: function()  {
        try {
            var _type = this.MULT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:211:6: ( '*' )
            // /Library/WebServer/Documents/calc/Formula.g:211:8: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULT",

    // $ANTLR start DIV
    mDIV: function()  {
        try {
            var _type = this.DIV;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:212:5: ( '/' )
            // /Library/WebServer/Documents/calc/Formula.g:212:7: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIV",

    // $ANTLR start MOD
    mMOD: function()  {
        try {
            var _type = this.MOD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:213:5: ( '%' | M O D )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0=='%') ) {
                alt6=1;
            }
            else if ( (LA6_0=='M'||LA6_0=='m') ) {
                alt6=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:213:7: '%'
                    this.match('%'); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:213:13: M O D
                    this.mM(); 
                    this.mO(); 
                    this.mD(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MOD",

    // $ANTLR start POW
    mPOW: function()  {
        try {
            var _type = this.POW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:233:5: ( '^' )
            // /Library/WebServer/Documents/calc/Formula.g:233:7: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POW",

    // $ANTLR start NOT
    mNOT: function()  {
        try {
            var _type = this.NOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:240:5: ( '!' | N O T )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0=='!') ) {
                alt7=1;
            }
            else if ( (LA7_0=='N'||LA7_0=='n') ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:240:7: '!'
                    this.match('!'); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:240:13: N O T
                    this.mN(); 
                    this.mO(); 
                    this.mT(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT",

    // $ANTLR start LARR
    mLARR: function()  {
        try {
            var _type = this.LARR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:312:6: ( '\\u00AB' | '<<' )
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0=='\u00AB') ) {
                alt8=1;
            }
            else if ( (LA8_0=='<') ) {
                alt8=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                throw nvae;
            }
            switch (alt8) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:312:8: '\\u00AB'
                    this.match('\u00AB'); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:312:19: '<<'
                    this.match("<<"); 



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LARR",

    // $ANTLR start RARR
    mRARR: function()  {
        try {
            var _type = this.RARR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:313:6: ( '\\u00BB' | '>>' )
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0=='\u00BB') ) {
                alt9=1;
            }
            else if ( (LA9_0=='>') ) {
                alt9=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:313:8: '\\u00BB'
                    this.match('\u00BB'); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:313:19: '>>'
                    this.match(">>"); 



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RARR",

    // $ANTLR start LCURL
    mLCURL: function()  {
        try {
            var _type = this.LCURL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:315:8: ( '{' )
            // /Library/WebServer/Documents/calc/Formula.g:315:10: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LCURL",

    // $ANTLR start RCURL
    mRCURL: function()  {
        try {
            var _type = this.RCURL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:316:7: ( '}' )
            // /Library/WebServer/Documents/calc/Formula.g:316:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RCURL",

    // $ANTLR start INTEGER
    mINTEGER: function()  {
        try {
            var _type = this.INTEGER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:323:2: ( ( '0' .. '9' )+ ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )? )
            // /Library/WebServer/Documents/calc/Formula.g:323:5: ( '0' .. '9' )+ ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )?
            // /Library/WebServer/Documents/calc/Formula.g:323:5: ( '0' .. '9' )+
            var cnt10=0;
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( ((LA10_0>='0' && LA10_0<='9')) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:323:6: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt10 >= 1 ) {
                        break loop10;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(10, this.input);
                        throw eee;
                }
                cnt10++;
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:323:17: ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0=='e') ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:323:18: 'e' ( '+' | '-' )? ( '0' .. '9' )*
                    this.match('e'); 
                    // /Library/WebServer/Documents/calc/Formula.g:323:22: ( '+' | '-' )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0=='+'||LA11_0=='-') ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:
                            if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:323:33: ( '0' .. '9' )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:323:34: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop12;
                        }
                    } while (true);



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTEGER",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:327:2: ( ( '0' .. '9' )* '.' ( '0' .. '9' )+ ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )? )
            // /Library/WebServer/Documents/calc/Formula.g:327:5: ( '0' .. '9' )* '.' ( '0' .. '9' )+ ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )?
            // /Library/WebServer/Documents/calc/Formula.g:327:5: ( '0' .. '9' )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( ((LA14_0>='0' && LA14_0<='9')) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:327:6: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    break loop14;
                }
            } while (true);

            this.match('.'); 
            // /Library/WebServer/Documents/calc/Formula.g:327:21: ( '0' .. '9' )+
            var cnt15=0;
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='0' && LA15_0<='9')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:327:22: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt15 >= 1 ) {
                        break loop15;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(15, this.input);
                        throw eee;
                }
                cnt15++;
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:327:33: ( 'e' ( '+' | '-' )? ( '0' .. '9' )* )?
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0=='e') ) {
                alt18=1;
            }
            switch (alt18) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:327:34: 'e' ( '+' | '-' )? ( '0' .. '9' )*
                    this.match('e'); 
                    // /Library/WebServer/Documents/calc/Formula.g:327:38: ( '+' | '-' )?
                    var alt16=2;
                    var LA16_0 = this.input.LA(1);

                    if ( (LA16_0=='+'||LA16_0=='-') ) {
                        alt16=1;
                    }
                    switch (alt16) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:
                            if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:327:49: ( '0' .. '9' )*
                    loop17:
                    do {
                        var alt17=2;
                        var LA17_0 = this.input.LA(1);

                        if ( ((LA17_0>='0' && LA17_0<='9')) ) {
                            alt17=1;
                        }


                        switch (alt17) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:327:50: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop17;
                        }
                    } while (true);



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:336:2: ( T R U E )
            // /Library/WebServer/Documents/calc/Formula.g:336:4: T R U E
            this.mT(); 
            this.mR(); 
            this.mU(); 
            this.mE(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TRUE",

    // $ANTLR start FALSE
    mFALSE: function()  {
        try {
            var _type = this.FALSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:340:2: ( F A L S E )
            // /Library/WebServer/Documents/calc/Formula.g:340:5: F A L S E
            this.mF(); 
            this.mA(); 
            this.mL(); 
            this.mS(); 
            this.mE(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FALSE",

    // $ANTLR start PER
    mPER: function()  {
        try {
            var _type = this.PER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:347:2: ( P E R )
            // /Library/WebServer/Documents/calc/Formula.g:347:4: P E R
            this.mP(); 
            this.mE(); 
            this.mR(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PER",

    // $ANTLR start SQUARED
    mSQUARED: function()  {
        try {
            var _type = this.SQUARED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:362:9: ( S Q U A R E D )
            // /Library/WebServer/Documents/calc/Formula.g:362:12: S Q U A R E D
            this.mS(); 
            this.mQ(); 
            this.mU(); 
            this.mA(); 
            this.mR(); 
            this.mE(); 
            this.mD(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SQUARED",

    // $ANTLR start CUBED
    mCUBED: function()  {
        try {
            var _type = this.CUBED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:363:7: ( C U B E D )
            // /Library/WebServer/Documents/calc/Formula.g:363:9: C U B E D
            this.mC(); 
            this.mU(); 
            this.mB(); 
            this.mE(); 
            this.mD(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CUBED",

    // $ANTLR start IDENT
    mIDENT: function()  {
        try {
            var _type = this.IDENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:379:2: ( ( 'a' .. 'z' | 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )* )
            // /Library/WebServer/Documents/calc/Formula.g:379:4: ( 'a' .. 'z' | 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Library/WebServer/Documents/calc/Formula.g:379:26: ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            loop19:
            do {
                var alt19=2;
                var LA19_0 = this.input.LA(1);

                if ( ((LA19_0>='0' && LA19_0<='9')||(LA19_0>='A' && LA19_0<='Z')||LA19_0=='_'||(LA19_0>='a' && LA19_0<='z')) ) {
                    alt19=1;
                }


                switch (alt19) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop19;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENT",

    // $ANTLR start PRIMITIVE
    mPRIMITIVE: function()  {
        try {
            var _type = this.PRIMITIVE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:387:2: ( LBRACKET ~ LBRACKET ( . )* RBRACKET | LBRACKET LBRACKET ( . )* RBRACKET RBRACKET )
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0=='[') ) {
                var LA22_1 = this.input.LA(2);

                if ( ((LA22_1>='\u0000' && LA22_1<='Z')||(LA22_1>='\\' && LA22_1<='\uFFFF')) ) {
                    alt22=1;
                }
                else if ( (LA22_1=='[') ) {
                    alt22=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 22, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 22, 0, this.input);

                throw nvae;
            }
            switch (alt22) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:387:4: LBRACKET ~ LBRACKET ( . )* RBRACKET
                    this.mLBRACKET(); 
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='a')||(this.input.LA(1)>='c' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}

                    // /Library/WebServer/Documents/calc/Formula.g:387:24: ( . )*
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( (LA20_0==']') ) {
                            alt20=2;
                        }
                        else if ( ((LA20_0>='\u0000' && LA20_0<='\\')||(LA20_0>='^' && LA20_0<='\uFFFF')) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:387:24: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop20;
                        }
                    } while (true);

                    this.mRBRACKET(); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:388:5: LBRACKET LBRACKET ( . )* RBRACKET RBRACKET
                    this.mLBRACKET(); 
                    this.mLBRACKET(); 
                    // /Library/WebServer/Documents/calc/Formula.g:388:24: ( . )*
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( (LA21_0==']') ) {
                            alt21=2;
                        }
                        else if ( ((LA21_0>='\u0000' && LA21_0<='\\')||(LA21_0>='^' && LA21_0<='\uFFFF')) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:388:24: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop21;
                        }
                    } while (true);

                    this.mRBRACKET(); 
                    this.mRBRACKET(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRIMITIVE",

    // $ANTLR start LBRACKET
    mLBRACKET: function()  {
        try {
            var _type = this.LBRACKET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:392:2: ( '[' )
            // /Library/WebServer/Documents/calc/Formula.g:392:5: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LBRACKET",

    // $ANTLR start RBRACKET
    mRBRACKET: function()  {
        try {
            var _type = this.RBRACKET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:395:2: ( ']' )
            // /Library/WebServer/Documents/calc/Formula.g:395:4: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RBRACKET",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:398:5: ( '/*' ( options {greedy=false; } : . )* '*/' )
            // /Library/WebServer/Documents/calc/Formula.g:398:9: '/*' ( options {greedy=false; } : . )* '*/'
            this.match("/*"); 

            // /Library/WebServer/Documents/calc/Formula.g:398:14: ( options {greedy=false; } : . )*
            loop23:
            do {
                var alt23=2;
                var LA23_0 = this.input.LA(1);

                if ( (LA23_0=='*') ) {
                    var LA23_1 = this.input.LA(2);

                    if ( (LA23_1=='/') ) {
                        alt23=2;
                    }
                    else if ( ((LA23_1>='\u0000' && LA23_1<='.')||(LA23_1>='0' && LA23_1<='\uFFFF')) ) {
                        alt23=1;
                    }


                }
                else if ( ((LA23_0>='\u0000' && LA23_0<=')')||(LA23_0>='+' && LA23_0<='\uFFFF')) ) {
                    alt23=1;
                }


                switch (alt23) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:398:42: .
                    this.matchAny(); 


                    break;

                default :
                    break loop23;
                }
            } while (true);

            this.match("*/"); 

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start LINE_COMMENT
    mLINE_COMMENT: function()  {
        try {
            var _type = this.LINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:402:5: ( ( '//' | '#' ) (~ ( '\\n' | '\\r' ) )* )
            // /Library/WebServer/Documents/calc/Formula.g:402:7: ( '//' | '#' ) (~ ( '\\n' | '\\r' ) )*
            // /Library/WebServer/Documents/calc/Formula.g:402:7: ( '//' | '#' )
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0=='/') ) {
                alt24=1;
            }
            else if ( (LA24_0=='#') ) {
                alt24=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 24, 0, this.input);

                throw nvae;
            }
            switch (alt24) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:402:8: '//'
                    this.match("//"); 



                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:402:13: '#'
                    this.match('#'); 


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:402:18: (~ ( '\\n' | '\\r' ) )*
            loop25:
            do {
                var alt25=2;
                var LA25_0 = this.input.LA(1);

                if ( ((LA25_0>='\u0000' && LA25_0<='\t')||(LA25_0>='\u000B' && LA25_0<='\f')||(LA25_0>='\u000E' && LA25_0<='\uFFFF')) ) {
                    alt25=1;
                }


                switch (alt25) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:402:19: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop25;
                }
            } while (true);

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LINE_COMMENT",

    // $ANTLR start COLON
    mCOLON: function()  {
        try {
            var _type = this.COLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:405:2: ( ':' )
            // /Library/WebServer/Documents/calc/Formula.g:405:4: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLON",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:411:2: ( ( ' ' | '\\t' | '\\u000C' )+ )
            // /Library/WebServer/Documents/calc/Formula.g:411:5: ( ' ' | '\\t' | '\\u000C' )+
            // /Library/WebServer/Documents/calc/Formula.g:411:5: ( ' ' | '\\t' | '\\u000C' )+
            var cnt26=0;
            loop26:
            do {
                var alt26=2;
                var LA26_0 = this.input.LA(1);

                if ( (LA26_0=='\t'||LA26_0=='\f'||LA26_0==' ') ) {
                    alt26=1;
                }


                switch (alt26) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:
                    if ( this.input.LA(1)=='\t'||this.input.LA(1)=='\f'||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt26 >= 1 ) {
                        break loop26;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(26, this.input);
                        throw eee;
                }
                cnt26++;
            } while (true);

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start A
    mA: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:415:11: ( ( 'a' | 'A' ) )
            // /Library/WebServer/Documents/calc/Formula.g:415:12: ( 'a' | 'A' )
            if ( this.input.LA(1)=='A'||this.input.LA(1)=='a' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "A",

    // $ANTLR start B
    mB: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:416:11: ( ( 'b' | 'B' ) )
            // /Library/WebServer/Documents/calc/Formula.g:416:12: ( 'b' | 'B' )
            if ( this.input.LA(1)=='B'||this.input.LA(1)=='b' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "B",

    // $ANTLR start C
    mC: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:417:11: ( ( 'c' | 'C' ) )
            // /Library/WebServer/Documents/calc/Formula.g:417:12: ( 'c' | 'C' )
            if ( this.input.LA(1)=='C'||this.input.LA(1)=='c' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "C",

    // $ANTLR start D
    mD: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:418:11: ( ( 'd' | 'D' ) )
            // /Library/WebServer/Documents/calc/Formula.g:418:12: ( 'd' | 'D' )
            if ( this.input.LA(1)=='D'||this.input.LA(1)=='d' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "D",

    // $ANTLR start E
    mE: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:419:11: ( ( 'e' | 'E' ) )
            // /Library/WebServer/Documents/calc/Formula.g:419:12: ( 'e' | 'E' )
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "E",

    // $ANTLR start F
    mF: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:420:11: ( ( 'f' | 'F' ) )
            // /Library/WebServer/Documents/calc/Formula.g:420:12: ( 'f' | 'F' )
            if ( this.input.LA(1)=='F'||this.input.LA(1)=='f' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "F",

    // $ANTLR start G
    mG: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:421:11: ( ( 'g' | 'G' ) )
            // /Library/WebServer/Documents/calc/Formula.g:421:12: ( 'g' | 'G' )
            if ( this.input.LA(1)=='G'||this.input.LA(1)=='g' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "G",

    // $ANTLR start H
    mH: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:422:11: ( ( 'h' | 'H' ) )
            // /Library/WebServer/Documents/calc/Formula.g:422:12: ( 'h' | 'H' )
            if ( this.input.LA(1)=='H'||this.input.LA(1)=='h' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "H",

    // $ANTLR start I
    mI: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:423:11: ( ( 'i' | 'I' ) )
            // /Library/WebServer/Documents/calc/Formula.g:423:12: ( 'i' | 'I' )
            if ( this.input.LA(1)=='I'||this.input.LA(1)=='i' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "I",

    // $ANTLR start J
    mJ: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:424:11: ( ( 'j' | 'J' ) )
            // /Library/WebServer/Documents/calc/Formula.g:424:12: ( 'j' | 'J' )
            if ( this.input.LA(1)=='J'||this.input.LA(1)=='j' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "J",

    // $ANTLR start K
    mK: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:425:11: ( ( 'k' | 'K' ) )
            // /Library/WebServer/Documents/calc/Formula.g:425:12: ( 'k' | 'K' )
            if ( this.input.LA(1)=='K'||this.input.LA(1)=='k' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "K",

    // $ANTLR start L
    mL: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:426:11: ( ( 'l' | 'L' ) )
            // /Library/WebServer/Documents/calc/Formula.g:426:12: ( 'l' | 'L' )
            if ( this.input.LA(1)=='L'||this.input.LA(1)=='l' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "L",

    // $ANTLR start M
    mM: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:427:11: ( ( 'm' | 'M' ) )
            // /Library/WebServer/Documents/calc/Formula.g:427:12: ( 'm' | 'M' )
            if ( this.input.LA(1)=='M'||this.input.LA(1)=='m' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "M",

    // $ANTLR start N
    mN: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:428:11: ( ( 'n' | 'N' ) )
            // /Library/WebServer/Documents/calc/Formula.g:428:12: ( 'n' | 'N' )
            if ( this.input.LA(1)=='N'||this.input.LA(1)=='n' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "N",

    // $ANTLR start O
    mO: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:429:11: ( ( 'o' | 'O' ) )
            // /Library/WebServer/Documents/calc/Formula.g:429:12: ( 'o' | 'O' )
            if ( this.input.LA(1)=='O'||this.input.LA(1)=='o' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "O",

    // $ANTLR start P
    mP: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:430:11: ( ( 'p' | 'P' ) )
            // /Library/WebServer/Documents/calc/Formula.g:430:12: ( 'p' | 'P' )
            if ( this.input.LA(1)=='P'||this.input.LA(1)=='p' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "P",

    // $ANTLR start Q
    mQ: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:431:11: ( ( 'q' | 'Q' ) )
            // /Library/WebServer/Documents/calc/Formula.g:431:12: ( 'q' | 'Q' )
            if ( this.input.LA(1)=='Q'||this.input.LA(1)=='q' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "Q",

    // $ANTLR start R
    mR: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:432:11: ( ( 'r' | 'R' ) )
            // /Library/WebServer/Documents/calc/Formula.g:432:12: ( 'r' | 'R' )
            if ( this.input.LA(1)=='R'||this.input.LA(1)=='r' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "R",

    // $ANTLR start S
    mS: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:433:11: ( ( 's' | 'S' ) )
            // /Library/WebServer/Documents/calc/Formula.g:433:12: ( 's' | 'S' )
            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "S",

    // $ANTLR start T
    mT: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:434:11: ( ( 't' | 'T' ) )
            // /Library/WebServer/Documents/calc/Formula.g:434:12: ( 't' | 'T' )
            if ( this.input.LA(1)=='T'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "T",

    // $ANTLR start U
    mU: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:435:11: ( ( 'u' | 'U' ) )
            // /Library/WebServer/Documents/calc/Formula.g:435:12: ( 'u' | 'U' )
            if ( this.input.LA(1)=='U'||this.input.LA(1)=='u' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "U",

    // $ANTLR start V
    mV: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:436:11: ( ( 'v' | 'V' ) )
            // /Library/WebServer/Documents/calc/Formula.g:436:12: ( 'v' | 'V' )
            if ( this.input.LA(1)=='V'||this.input.LA(1)=='v' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "V",

    // $ANTLR start W
    mW: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:437:11: ( ( 'w' | 'W' ) )
            // /Library/WebServer/Documents/calc/Formula.g:437:12: ( 'w' | 'W' )
            if ( this.input.LA(1)=='W'||this.input.LA(1)=='w' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "W",

    // $ANTLR start X
    mX: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:438:11: ( ( 'x' | 'X' ) )
            // /Library/WebServer/Documents/calc/Formula.g:438:12: ( 'x' | 'X' )
            if ( this.input.LA(1)=='X'||this.input.LA(1)=='x' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "X",

    // $ANTLR start Y
    mY: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:439:11: ( ( 'y' | 'Y' ) )
            // /Library/WebServer/Documents/calc/Formula.g:439:12: ( 'y' | 'Y' )
            if ( this.input.LA(1)=='Y'||this.input.LA(1)=='y' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "Y",

    // $ANTLR start Z
    mZ: function()  {
        try {
            // /Library/WebServer/Documents/calc/Formula.g:440:11: ( ( 'z' | 'Z' ) )
            // /Library/WebServer/Documents/calc/Formula.g:440:12: ( 'z' | 'Z' )
            if ( this.input.LA(1)=='Z'||this.input.LA(1)=='z' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "Z",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:447:1: ( ',' )
            // /Library/WebServer/Documents/calc/Formula.g:447:3: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Library/WebServer/Documents/calc/Formula.g:450:8: ( '\\'' ( . )* '\\'' | '\"' ( '\\\\\\\"' | ~ '\\\"' )* '\"' )
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0=='\'') ) {
                alt29=1;
            }
            else if ( (LA29_0=='\"') ) {
                alt29=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }
            switch (alt29) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:451:1: '\\'' ( . )* '\\''
                    this.match('\''); 
                    // /Library/WebServer/Documents/calc/Formula.g:451:6: ( . )*
                    loop27:
                    do {
                        var alt27=2;
                        var LA27_0 = this.input.LA(1);

                        if ( (LA27_0=='\'') ) {
                            alt27=2;
                        }
                        else if ( ((LA27_0>='\u0000' && LA27_0<='&')||(LA27_0>='(' && LA27_0<='\uFFFF')) ) {
                            alt27=1;
                        }


                        switch (alt27) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:451:6: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop27;
                        }
                    } while (true);

                    this.match('\''); 


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:452:6: '\"' ( '\\\\\\\"' | ~ '\\\"' )* '\"'
                    this.match('\"'); 
                    // /Library/WebServer/Documents/calc/Formula.g:452:10: ( '\\\\\\\"' | ~ '\\\"' )*
                    loop28:
                    do {
                        var alt28=3;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0=='\\') ) {
                            var LA28_2 = this.input.LA(2);

                            if ( (LA28_2=='\"') ) {
                                var LA28_4 = this.input.LA(3);

                                if ( ((LA28_4>='\u0000' && LA28_4<='\uFFFF')) ) {
                                    alt28=1;
                                }

                                else {
                                    alt28=2;
                                }

                            }
                            else if ( ((LA28_2>='\u0000' && LA28_2<='!')||(LA28_2>='#' && LA28_2<='\uFFFF')) ) {
                                alt28=2;
                            }


                        }
                        else if ( ((LA28_0>='\u0000' && LA28_0<='!')||(LA28_0>='#' && LA28_0<='[')||(LA28_0>=']' && LA28_0<='\uFFFF')) ) {
                            alt28=2;
                        }


                        switch (alt28) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:452:11: '\\\\\\\"'
                            this.match("\\\""); 



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:452:18: ~ '\\\"'
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    mTokens: function() {
        // /Library/WebServer/Documents/calc/Formula.g:1:8: ( T__108 | T__109 | T__110 | T__111 | NEWLINE | WHILESTATEMENT | FORSTATEMENT | FROMSTATEMENT | INSTATEMENT | TOSTATEMENT | BYSTATEMENT | LOOPSTATEMENT | IFSTATEMENT | THENSTATEMENT | ELSESTATEMENT | FUNCTIONSTATEMENT | ENDBLOCK | RETURNSTATEMENT | NEWSTATEMENT | OR | XOR | AND | EQUALS | NOTEQUALS | LT | LTEQ | GT | GTEQ | PLUS | MINUS | MULT | DIV | MOD | POW | NOT | LARR | RARR | LCURL | RCURL | INTEGER | FLOAT | TRUE | FALSE | PER | SQUARED | CUBED | IDENT | PRIMITIVE | LBRACKET | RBRACKET | COMMENT | LINE_COMMENT | COLON | WS | COMMA | STRING )
        var alt30=56;
        alt30 = this.dfa30.predict(this.input);
        switch (alt30) {
            case 1 :
                // /Library/WebServer/Documents/calc/Formula.g:1:10: T__108
                this.mT__108(); 


                break;
            case 2 :
                // /Library/WebServer/Documents/calc/Formula.g:1:17: T__109
                this.mT__109(); 


                break;
            case 3 :
                // /Library/WebServer/Documents/calc/Formula.g:1:24: T__110
                this.mT__110(); 


                break;
            case 4 :
                // /Library/WebServer/Documents/calc/Formula.g:1:31: T__111
                this.mT__111(); 


                break;
            case 5 :
                // /Library/WebServer/Documents/calc/Formula.g:1:38: NEWLINE
                this.mNEWLINE(); 


                break;
            case 6 :
                // /Library/WebServer/Documents/calc/Formula.g:1:46: WHILESTATEMENT
                this.mWHILESTATEMENT(); 


                break;
            case 7 :
                // /Library/WebServer/Documents/calc/Formula.g:1:61: FORSTATEMENT
                this.mFORSTATEMENT(); 


                break;
            case 8 :
                // /Library/WebServer/Documents/calc/Formula.g:1:74: FROMSTATEMENT
                this.mFROMSTATEMENT(); 


                break;
            case 9 :
                // /Library/WebServer/Documents/calc/Formula.g:1:88: INSTATEMENT
                this.mINSTATEMENT(); 


                break;
            case 10 :
                // /Library/WebServer/Documents/calc/Formula.g:1:100: TOSTATEMENT
                this.mTOSTATEMENT(); 


                break;
            case 11 :
                // /Library/WebServer/Documents/calc/Formula.g:1:112: BYSTATEMENT
                this.mBYSTATEMENT(); 


                break;
            case 12 :
                // /Library/WebServer/Documents/calc/Formula.g:1:124: LOOPSTATEMENT
                this.mLOOPSTATEMENT(); 


                break;
            case 13 :
                // /Library/WebServer/Documents/calc/Formula.g:1:138: IFSTATEMENT
                this.mIFSTATEMENT(); 


                break;
            case 14 :
                // /Library/WebServer/Documents/calc/Formula.g:1:150: THENSTATEMENT
                this.mTHENSTATEMENT(); 


                break;
            case 15 :
                // /Library/WebServer/Documents/calc/Formula.g:1:164: ELSESTATEMENT
                this.mELSESTATEMENT(); 


                break;
            case 16 :
                // /Library/WebServer/Documents/calc/Formula.g:1:178: FUNCTIONSTATEMENT
                this.mFUNCTIONSTATEMENT(); 


                break;
            case 17 :
                // /Library/WebServer/Documents/calc/Formula.g:1:196: ENDBLOCK
                this.mENDBLOCK(); 


                break;
            case 18 :
                // /Library/WebServer/Documents/calc/Formula.g:1:205: RETURNSTATEMENT
                this.mRETURNSTATEMENT(); 


                break;
            case 19 :
                // /Library/WebServer/Documents/calc/Formula.g:1:221: NEWSTATEMENT
                this.mNEWSTATEMENT(); 


                break;
            case 20 :
                // /Library/WebServer/Documents/calc/Formula.g:1:234: OR
                this.mOR(); 


                break;
            case 21 :
                // /Library/WebServer/Documents/calc/Formula.g:1:237: XOR
                this.mXOR(); 


                break;
            case 22 :
                // /Library/WebServer/Documents/calc/Formula.g:1:241: AND
                this.mAND(); 


                break;
            case 23 :
                // /Library/WebServer/Documents/calc/Formula.g:1:245: EQUALS
                this.mEQUALS(); 


                break;
            case 24 :
                // /Library/WebServer/Documents/calc/Formula.g:1:252: NOTEQUALS
                this.mNOTEQUALS(); 


                break;
            case 25 :
                // /Library/WebServer/Documents/calc/Formula.g:1:262: LT
                this.mLT(); 


                break;
            case 26 :
                // /Library/WebServer/Documents/calc/Formula.g:1:265: LTEQ
                this.mLTEQ(); 


                break;
            case 27 :
                // /Library/WebServer/Documents/calc/Formula.g:1:270: GT
                this.mGT(); 


                break;
            case 28 :
                // /Library/WebServer/Documents/calc/Formula.g:1:273: GTEQ
                this.mGTEQ(); 


                break;
            case 29 :
                // /Library/WebServer/Documents/calc/Formula.g:1:278: PLUS
                this.mPLUS(); 


                break;
            case 30 :
                // /Library/WebServer/Documents/calc/Formula.g:1:283: MINUS
                this.mMINUS(); 


                break;
            case 31 :
                // /Library/WebServer/Documents/calc/Formula.g:1:289: MULT
                this.mMULT(); 


                break;
            case 32 :
                // /Library/WebServer/Documents/calc/Formula.g:1:294: DIV
                this.mDIV(); 


                break;
            case 33 :
                // /Library/WebServer/Documents/calc/Formula.g:1:298: MOD
                this.mMOD(); 


                break;
            case 34 :
                // /Library/WebServer/Documents/calc/Formula.g:1:302: POW
                this.mPOW(); 


                break;
            case 35 :
                // /Library/WebServer/Documents/calc/Formula.g:1:306: NOT
                this.mNOT(); 


                break;
            case 36 :
                // /Library/WebServer/Documents/calc/Formula.g:1:310: LARR
                this.mLARR(); 


                break;
            case 37 :
                // /Library/WebServer/Documents/calc/Formula.g:1:315: RARR
                this.mRARR(); 


                break;
            case 38 :
                // /Library/WebServer/Documents/calc/Formula.g:1:320: LCURL
                this.mLCURL(); 


                break;
            case 39 :
                // /Library/WebServer/Documents/calc/Formula.g:1:326: RCURL
                this.mRCURL(); 


                break;
            case 40 :
                // /Library/WebServer/Documents/calc/Formula.g:1:332: INTEGER
                this.mINTEGER(); 


                break;
            case 41 :
                // /Library/WebServer/Documents/calc/Formula.g:1:340: FLOAT
                this.mFLOAT(); 


                break;
            case 42 :
                // /Library/WebServer/Documents/calc/Formula.g:1:346: TRUE
                this.mTRUE(); 


                break;
            case 43 :
                // /Library/WebServer/Documents/calc/Formula.g:1:351: FALSE
                this.mFALSE(); 


                break;
            case 44 :
                // /Library/WebServer/Documents/calc/Formula.g:1:357: PER
                this.mPER(); 


                break;
            case 45 :
                // /Library/WebServer/Documents/calc/Formula.g:1:361: SQUARED
                this.mSQUARED(); 


                break;
            case 46 :
                // /Library/WebServer/Documents/calc/Formula.g:1:369: CUBED
                this.mCUBED(); 


                break;
            case 47 :
                // /Library/WebServer/Documents/calc/Formula.g:1:375: IDENT
                this.mIDENT(); 


                break;
            case 48 :
                // /Library/WebServer/Documents/calc/Formula.g:1:381: PRIMITIVE
                this.mPRIMITIVE(); 


                break;
            case 49 :
                // /Library/WebServer/Documents/calc/Formula.g:1:391: LBRACKET
                this.mLBRACKET(); 


                break;
            case 50 :
                // /Library/WebServer/Documents/calc/Formula.g:1:400: RBRACKET
                this.mRBRACKET(); 


                break;
            case 51 :
                // /Library/WebServer/Documents/calc/Formula.g:1:409: COMMENT
                this.mCOMMENT(); 


                break;
            case 52 :
                // /Library/WebServer/Documents/calc/Formula.g:1:417: LINE_COMMENT
                this.mLINE_COMMENT(); 


                break;
            case 53 :
                // /Library/WebServer/Documents/calc/Formula.g:1:430: COLON
                this.mCOLON(); 


                break;
            case 54 :
                // /Library/WebServer/Documents/calc/Formula.g:1:436: WS
                this.mWS(); 


                break;
            case 55 :
                // /Library/WebServer/Documents/calc/Formula.g:1:439: COMMA
                this.mCOMMA(); 


                break;
            case 56 :
                // /Library/WebServer/Documents/calc/Formula.g:1:445: STRING
                this.mSTRING(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(FormulaLexer, {
    DFA30_eotS:
        "\u0003\uffff\u0001\u0031\u0001\u0032\u0001\uffff\u0009\u0026\u0001"+
    "\uffff\u0002\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0001\u0048\u0001"+
    "\u004a\u0003\uffff\u0001\u004c\u0001\uffff\u0001\u0026\u0005\uffff\u0001"+
    "\u004e\u0003\u0026\u0001\uffff\u0001\u0052\u000c\uffff\u0005\u0026\u0001"+
    "\u0059\u0001\u005a\u0001\u005b\u0002\u0026\u0001\u005e\u0006\u0026\u0001"+
    "\u000f\u0002\u0026\u0005\uffff\u0001\u0026\u0001\uffff\u0003\u0026\u0002"+
    "\uffff\u0001\u0026\u0001\u006c\u0003\u0026\u0003\uffff\u0002\u0026\u0001"+
    "\uffff\u0002\u0026\u0001\u0074\u0001\u0026\u0001\u0076\u0001\u0048\u0001"+
    "\u0077\u0001\u0012\u0001\u001b\u0001\u0078\u0003\u0026\u0001\uffff\u0001"+
    "\u007c\u0002\u0026\u0001\u007f\u0001\u0080\u0001\u0081\u0001\u0082\u0001"+
    "\uffff\u0001\u0026\u0003\uffff\u0002\u0026\u0001\u0086\u0001\uffff\u0001"+
    "\u0026\u0001\u0088\u0004\uffff\u0002\u0026\u0001\u008b\u0001\uffff\u0001"+
    "\u0026\u0001\uffff\u0001\u008d\u0001\u0026\u0001\uffff\u0001\u0026\u0001"+
    "\uffff\u0001\u0090\u0001\u0091\u0002\uffff",
    DFA30_eofS:
        "\u0092\uffff",
    DFA30_minS:
        "\u0001\u0009\u0002\uffff\u0001\u002d\u0001\u0030\u0001\uffff\u0001"+
    "\u0048\u0001\u0041\u0001\u0046\u0001\u0048\u0001\u0059\u0001\u004f\u0001"+
    "\u004c\u0002\u0045\u0001\uffff\u0001\u0052\u0001\u004f\u0001\uffff\u0001"+
    "\u004e\u0001\uffff\u0002\u003d\u0003\uffff\u0001\u002a\u0001\uffff\u0001"+
    "\u004f\u0005\uffff\u0001\u002e\u0001\u0045\u0001\u0051\u0001\u0055\u0001"+
    "\uffff\u0001\u0000\u000c\uffff\u0001\u0049\u0001\u0052\u0001\u004f\u0001"+
    "\u004e\u0001\u004c\u0003\u0030\u0001\u0045\u0001\u0055\u0001\u0030\u0001"+
    "\u004f\u0001\u0053\u0001\u0044\u0001\u0054\u0001\u0057\u0001\u0054\u0001"+
    "\u0030\u0001\u0052\u0001\u0044\u0005\uffff\u0001\u0044\u0001\uffff\u0001"+
    "\u0052\u0001\u0055\u0001\u0042\u0002\uffff\u0001\u004c\u0001\u0030\u0001"+
    "\u004d\u0001\u0043\u0001\u0053\u0003\uffff\u0001\u004e\u0001\u0045\u0001"+
    "\uffff\u0001\u0050\u0001\u0045\u0001\u0030\u0001\u0055\u0006\u0030\u0001"+
    "\u0041\u0002\u0045\u0001\uffff\u0001\u0030\u0001\u0054\u0001\u0045\u0004"+
    "\u0030\u0001\uffff\u0001\u0052\u0003\uffff\u0001\u0052\u0001\u0044\u0001"+
    "\u0030\u0001\uffff\u0001\u0049\u0001\u0030\u0004\uffff\u0001\u004e\u0001"+
    "\u0045\u0001\u0030\u0001\uffff\u0001\u004f\u0001\uffff\u0001\u0030\u0001"+
    "\u0044\u0001\uffff\u0001\u004e\u0001\uffff\u0002\u0030\u0002\uffff",
    DFA30_maxS:
        "\u0001\u00bb\u0002\uffff\u0001\u003e\u0001\u0039\u0001\uffff\u0001"+
    "\u0068\u0001\u0075\u0001\u006e\u0001\u0072\u0001\u0079\u0001\u006f\u0001"+
    "\u006e\u0001\u0065\u0001\u006f\u0001\uffff\u0001\u0072\u0001\u006f\u0001"+
    "\uffff\u0001\u006e\u0001\uffff\u0001\u003d\u0001\u003e\u0003\uffff\u0001"+
    "\u002f\u0001\uffff\u0001\u006f\u0005\uffff\u0001\u0039\u0001\u0065\u0001"+
    "\u0071\u0001\u0075\u0001\uffff\u0001\uffff\u000c\uffff\u0001\u0069\u0001"+
    "\u0072\u0001\u006f\u0001\u006e\u0001\u006c\u0003\u007a\u0001\u0065\u0001"+
    "\u0075\u0001\u007a\u0001\u006f\u0001\u0073\u0001\u0064\u0001\u0074\u0001"+
    "\u0077\u0001\u0074\u0001\u007a\u0001\u0072\u0001\u0064\u0005\uffff\u0001"+
    "\u0064\u0001\uffff\u0001\u0072\u0001\u0075\u0001\u0062\u0002\uffff\u0001"+
    "\u006c\u0001\u007a\u0001\u006d\u0001\u0063\u0001\u0073\u0003\uffff\u0001"+
    "\u006e\u0001\u0065\u0001\uffff\u0001\u0070\u0001\u0065\u0001\u007a\u0001"+
    "\u0075\u0006\u007a\u0001\u0061\u0002\u0065\u0001\uffff\u0001\u007a\u0001"+
    "\u0074\u0001\u0065\u0004\u007a\u0001\uffff\u0001\u0072\u0003\uffff\u0001"+
    "\u0072\u0001\u0064\u0001\u007a\u0001\uffff\u0001\u0069\u0001\u007a\u0004"+
    "\uffff\u0001\u006e\u0001\u0065\u0001\u007a\u0001\uffff\u0001\u006f\u0001"+
    "\uffff\u0001\u007a\u0001\u0064\u0001\uffff\u0001\u006e\u0001\uffff\u0002"+
    "\u007a\u0002\uffff",
    DFA30_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0002\uffff\u0001\u0005\u0009"+
    "\uffff\u0001\u0014\u0002\uffff\u0001\u0016\u0001\uffff\u0001\u0017\u0002"+
    "\uffff\u0001\u001d\u0001\u001e\u0001\u001f\u0001\uffff\u0001\u0021\u0001"+
    "\uffff\u0001\u0022\u0001\u0024\u0001\u0025\u0001\u0026\u0001\u0027\u0004"+
    "\uffff\u0001\u002f\u0001\uffff\u0001\u0032\u0001\u0034\u0001\u0035\u0001"+
    "\u0036\u0001\u0037\u0001\u0038\u0001\u0003\u0001\u0018\u0001\u001a\u0001"+
    "\u0019\u0001\u0004\u0001\u0029\u0014\uffff\u0001\u0023\u0001\u001c\u0001"+
    "\u001b\u0001\u0033\u0001\u0020\u0001\uffff\u0001\u0028\u0003\uffff\u0001"+
    "\u0031\u0001\u0030\u0005\uffff\u0001\u0009\u0001\u000d\u0001\u000a\u0002"+
    "\uffff\u0001\u000b\u000d\uffff\u0001\u0007\u0007\uffff\u0001\u0011\u0001"+
    "\uffff\u0001\u0013\u0001\u0015\u0001\u002c\u0003\uffff\u0001\u0008\u0002"+
    "\uffff\u0001\u000e\u0001\u002a\u0001\u000c\u0001\u000f\u0003\uffff\u0001"+
    "\u0006\u0001\uffff\u0001\u002b\u0002\uffff\u0001\u002e\u0001\uffff\u0001"+
    "\u0012\u0002\uffff\u0001\u002d\u0001\u0010",
    DFA30_specialS:
        "\u0027\uffff\u0001\u0000\u006a\uffff}>",
    DFA30_transitionS: [
            "\u0001\u002b\u0001\u0005\u0001\uffff\u0001\u002b\u0001\u0005"+
            "\u0012\uffff\u0001\u002b\u0001\u0015\u0001\u002d\u0001\u0029"+
            "\u0001\uffff\u0001\u001b\u0001\u0012\u0001\u002d\u0001\u0001"+
            "\u0001\u0002\u0001\u0019\u0001\u0017\u0001\u002c\u0001\u0018"+
            "\u0001\u0004\u0001\u001a\u000a\u0022\u0001\u002a\u0001\uffff"+
            "\u0001\u0003\u0001\u0014\u0001\u0016\u0002\uffff\u0001\u0013"+
            "\u0001\u000a\u0001\u0025\u0001\u0026\u0001\u000c\u0001\u0007"+
            "\u0002\u0026\u0001\u0008\u0002\u0026\u0001\u000b\u0001\u001c"+
            "\u0001\u000e\u0001\u0010\u0001\u0023\u0001\u0026\u0001\u000d"+
            "\u0001\u0024\u0001\u0009\u0002\u0026\u0001\u0006\u0001\u0011"+
            "\u0002\u0026\u0001\u0027\u0001\uffff\u0001\u0028\u0001\u001d"+
            "\u0002\uffff\u0001\u0013\u0001\u000a\u0001\u0025\u0001\u0026"+
            "\u0001\u000c\u0001\u0007\u0002\u0026\u0001\u0008\u0002\u0026"+
            "\u0001\u000b\u0001\u001c\u0001\u000e\u0001\u0010\u0001\u0023"+
            "\u0001\u0026\u0001\u000d\u0001\u0024\u0001\u0009\u0002\u0026"+
            "\u0001\u0006\u0001\u0011\u0002\u0026\u0001\u0020\u0001\u000f"+
            "\u0001\u0021\u002d\uffff\u0001\u001e\u000f\uffff\u0001\u001f",
            "",
            "",
            "\u0001\u002e\u000e\uffff\u0001\u001e\u0001\u0030\u0001\u002f",
            "\u000a\u0033",
            "",
            "\u0001\u0034\u001f\uffff\u0001\u0034",
            "\u0001\u0038\u000d\uffff\u0001\u0035\u0002\uffff\u0001\u0036"+
            "\u0002\uffff\u0001\u0037\u000b\uffff\u0001\u0038\u000d\uffff"+
            "\u0001\u0035\u0002\uffff\u0001\u0036\u0002\uffff\u0001\u0037",
            "\u0001\u003a\u0007\uffff\u0001\u0039\u0017\uffff\u0001\u003a"+
            "\u0007\uffff\u0001\u0039",
            "\u0001\u003c\u0006\uffff\u0001\u003b\u0002\uffff\u0001\u003d"+
            "\u0015\uffff\u0001\u003c\u0006\uffff\u0001\u003b\u0002\uffff"+
            "\u0001\u003d",
            "\u0001\u003e\u001f\uffff\u0001\u003e",
            "\u0001\u003f\u001f\uffff\u0001\u003f",
            "\u0001\u0040\u0001\uffff\u0001\u0041\u001d\uffff\u0001\u0040"+
            "\u0001\uffff\u0001\u0041",
            "\u0001\u0042\u001f\uffff\u0001\u0042",
            "\u0001\u0043\u0009\uffff\u0001\u0044\u0015\uffff\u0001\u0043"+
            "\u0009\uffff\u0001\u0044",
            "",
            "\u0001\u0045\u001f\uffff\u0001\u0045",
            "\u0001\u0046\u001f\uffff\u0001\u0046",
            "",
            "\u0001\u0047\u001f\uffff\u0001\u0047",
            "",
            "\u0001\u002f",
            "\u0001\u0049\u0001\u001f",
            "",
            "",
            "",
            "\u0001\u004b\u0004\uffff\u0001\u0029",
            "",
            "\u0001\u004d\u001f\uffff\u0001\u004d",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0033\u0001\uffff\u000a\u0022",
            "\u0001\u004f\u001f\uffff\u0001\u004f",
            "\u0001\u0050\u001f\uffff\u0001\u0050",
            "\u0001\u0051\u001f\uffff\u0001\u0051",
            "",
            "\u0000\u0053",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0054\u001f\uffff\u0001\u0054",
            "\u0001\u0055\u001f\uffff\u0001\u0055",
            "\u0001\u0056\u001f\uffff\u0001\u0056",
            "\u0001\u0057\u001f\uffff\u0001\u0057",
            "\u0001\u0058\u001f\uffff\u0001\u0058",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u005c\u001f\uffff\u0001\u005c",
            "\u0001\u005d\u001f\uffff\u0001\u005d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u005f\u001f\uffff\u0001\u005f",
            "\u0001\u0060\u001f\uffff\u0001\u0060",
            "\u0001\u0061\u001f\uffff\u0001\u0061",
            "\u0001\u0062\u001f\uffff\u0001\u0062",
            "\u0001\u0063\u001f\uffff\u0001\u0063",
            "\u0001\u0064\u001f\uffff\u0001\u0064",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0065\u001f\uffff\u0001\u0065",
            "\u0001\u0066\u001f\uffff\u0001\u0066",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0067\u001f\uffff\u0001\u0067",
            "",
            "\u0001\u0068\u001f\uffff\u0001\u0068",
            "\u0001\u0069\u001f\uffff\u0001\u0069",
            "\u0001\u006a\u001f\uffff\u0001\u006a",
            "",
            "",
            "\u0001\u006b\u001f\uffff\u0001\u006b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u006d\u001f\uffff\u0001\u006d",
            "\u0001\u006e\u001f\uffff\u0001\u006e",
            "\u0001\u006f\u001f\uffff\u0001\u006f",
            "",
            "",
            "",
            "\u0001\u0070\u001f\uffff\u0001\u0070",
            "\u0001\u0071\u001f\uffff\u0001\u0071",
            "",
            "\u0001\u0072\u001f\uffff\u0001\u0072",
            "\u0001\u0073\u001f\uffff\u0001\u0073",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0075\u001f\uffff\u0001\u0075",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0079\u001f\uffff\u0001\u0079",
            "\u0001\u007a\u001f\uffff\u0001\u007a",
            "\u0001\u007b\u001f\uffff\u0001\u007b",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u007d\u001f\uffff\u0001\u007d",
            "\u0001\u007e\u001f\uffff\u0001\u007e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0083\u001f\uffff\u0001\u0083",
            "",
            "",
            "",
            "\u0001\u0084\u001f\uffff\u0001\u0084",
            "\u0001\u0085\u001f\uffff\u0001\u0085",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0087\u001f\uffff\u0001\u0087",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "",
            "",
            "\u0001\u0089\u001f\uffff\u0001\u0089",
            "\u0001\u008a\u001f\uffff\u0001\u008a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u008c\u001f\uffff\u0001\u008c",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u008e\u001f\uffff\u0001\u008e",
            "",
            "\u0001\u008f\u001f\uffff\u0001\u008f",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaLexer, {
    DFA30_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaLexer.DFA30_eotS),
    DFA30_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaLexer.DFA30_eofS),
    DFA30_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaLexer.DFA30_minS),
    DFA30_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaLexer.DFA30_maxS),
    DFA30_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaLexer.DFA30_acceptS),
    DFA30_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaLexer.DFA30_specialS),
    DFA30_transition: (function() {
        var a = [],
            i,
            numStates = FormulaLexer.DFA30_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaLexer.DFA30_transitionS[i]));
        }
        return a;
    })()
});

FormulaLexer.DFA30 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 30;
    this.eot = FormulaLexer.DFA30_eot;
    this.eof = FormulaLexer.DFA30_eof;
    this.min = FormulaLexer.DFA30_min;
    this.max = FormulaLexer.DFA30_max;
    this.accept = FormulaLexer.DFA30_accept;
    this.special = FormulaLexer.DFA30_special;
    this.transition = FormulaLexer.DFA30_transition;
};

org.antlr.lang.extend(FormulaLexer.DFA30, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__108 | T__109 | T__110 | T__111 | NEWLINE | WHILESTATEMENT | FORSTATEMENT | FROMSTATEMENT | INSTATEMENT | TOSTATEMENT | BYSTATEMENT | LOOPSTATEMENT | IFSTATEMENT | THENSTATEMENT | ELSESTATEMENT | FUNCTIONSTATEMENT | ENDBLOCK | RETURNSTATEMENT | NEWSTATEMENT | OR | XOR | AND | EQUALS | NOTEQUALS | LT | LTEQ | GT | GTEQ | PLUS | MINUS | MULT | DIV | MOD | POW | NOT | LARR | RARR | LCURL | RCURL | INTEGER | FLOAT | TRUE | FALSE | PER | SQUARED | CUBED | IDENT | PRIMITIVE | LBRACKET | RBRACKET | COMMENT | LINE_COMMENT | COLON | WS | COMMA | STRING );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA30_39 = input.LA(1);

                            s = -1;
                            if ( ((LA30_39>='\u0000' && LA30_39<='\uFFFF')) ) {s = 83;}

                            else s = 82;

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 30, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();