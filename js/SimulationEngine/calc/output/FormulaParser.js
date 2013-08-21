// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Library/WebServer/Documents/calc/Formula.g 2013-07-30 20:45:24

var FormulaParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    FormulaParser.superclass.constructor.call(this, input, state);

    this.dfa5 = new FormulaParser.DFA5(this);
    this.dfa55 = new FormulaParser.DFA55(this);
    this.dfa56 = new FormulaParser.DFA56(this);
    this.dfa63 = new FormulaParser.DFA63(this);
    this.dfa70 = new FormulaParser.DFA70(this);
    this.dfa83 = new FormulaParser.DFA83(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(FormulaParser, {
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
// public class variables
var EOF= -1,
    T__108= 108,
    T__109= 109,
    T__110= 110,
    T__111= 111,
    NEGATE= 4,
    ASSIGN= 5,
    FUNCALL= 6,
    MATERIAL= 7,
    UNIT= 8,
    POWER= 9,
    DEFAULTS= 10,
    PARAMS= 11,
    UNITCLUMP= 12,
    ARRAY= 13,
    LINES= 14,
    WHILE= 15,
    IFTHENELSE= 16,
    ELSE= 17,
    FOR= 18,
    FORIN= 19,
    FUNCTION= 20,
    ANONFUNCTION= 21,
    NUMBER= 22,
    LABEL= 23,
    RANGE= 24,
    INNER= 25,
    ASSIGNED= 26,
    SELECTOR= 27,
    DOTSELECTOR= 28,
    NEW= 29,
    NEWLINE= 30,
    W= 31,
    H= 32,
    I= 33,
    L= 34,
    E= 35,
    WHILESTATEMENT= 36,
    F= 37,
    O= 38,
    R= 39,
    FORSTATEMENT= 40,
    M= 41,
    FROMSTATEMENT= 42,
    N= 43,
    INSTATEMENT= 44,
    T= 45,
    TOSTATEMENT= 46,
    B= 47,
    Y= 48,
    BYSTATEMENT= 49,
    P= 50,
    LOOPSTATEMENT= 51,
    IFSTATEMENT= 52,
    THENSTATEMENT= 53,
    S= 54,
    ELSESTATEMENT= 55,
    U= 56,
    C= 57,
    FUNCTIONSTATEMENT= 58,
    D= 59,
    ENDBLOCK= 60,
    RETURNSTATEMENT= 61,
    NEWSTATEMENT= 62,
    IDENT= 63,
    EQUALS= 64,
    PRIMITIVE= 65,
    OR= 66,
    XOR= 67,
    X= 68,
    AND= 69,
    A= 70,
    NOTEQUALS= 71,
    LT= 72,
    LTEQ= 73,
    GT= 74,
    GTEQ= 75,
    PLUS= 76,
    MINUS= 77,
    MULT= 78,
    DIV= 79,
    MOD= 80,
    COLON= 81,
    POW= 82,
    NOT= 83,
    LARR= 84,
    RARR= 85,
    LCURL= 86,
    RCURL= 87,
    COMMA= 88,
    STRING= 89,
    INTEGER= 90,
    FLOAT= 91,
    TRUE= 92,
    FALSE= 93,
    PER= 94,
    CUBED= 95,
    SQUARED= 96,
    Q= 97,
    LBRACKET= 98,
    RBRACKET= 99,
    COMMENT= 100,
    LINE_COMMENT= 101,
    WS= 102,
    G= 103,
    J= 104,
    K= 105,
    V= 106,
    Z= 107;

// public instance methods/vars
org.antlr.lang.extend(FormulaParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return FormulaParser.tokenNames; },
    getGrammarFileName: function() { return "/Library/WebServer/Documents/calc/Formula.g"; }
});
org.antlr.lang.augmentObject(FormulaParser.prototype, {

    // inline static return class
    lines_return: (function() {
        FormulaParser.lines_return = function(){};
        org.antlr.lang.extend(FormulaParser.lines_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:42:1: lines : ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) ;
    // $ANTLR start "lines"
    lines: function() {
        var retval = new FormulaParser.lines_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWLINE1 = null;
        var NEWLINE3 = null;
        var EOF4 = null;
        var EOF5 = null;
         var expression2 = null;

        var NEWLINE1_tree=null;
        var NEWLINE3_tree=null;
        var EOF4_tree=null;
        var EOF5_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_EOF=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EOF");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:43:2: ( ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:43:4: ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF
            // /Library/WebServer/Documents/calc/Formula.g:43:4: ( NEWLINE )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==NEWLINE) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE1=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines154); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE1);



                    break;

                default :
                    break loop1;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:43:13: ( expression ( ( NEWLINE )+ | EOF ) )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==WHILESTATEMENT||LA4_0==FORSTATEMENT||LA4_0==IFSTATEMENT||LA4_0==FUNCTIONSTATEMENT||(LA4_0>=RETURNSTATEMENT && LA4_0<=IDENT)||LA4_0==PRIMITIVE||LA4_0==MINUS||(LA4_0>=NOT && LA4_0<=LARR)||LA4_0==LCURL||(LA4_0>=STRING && LA4_0<=FALSE)||LA4_0==108) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:43:14: expression ( ( NEWLINE )+ | EOF )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_lines158);
                    expression2=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression2.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:43:26: ( ( NEWLINE )+ | EOF )
                    var alt3=2;
                    var LA3_0 = this.input.LA(1);

                    if ( (LA3_0==NEWLINE) ) {
                        alt3=1;
                    }
                    else if ( (LA3_0==EOF) ) {
                        alt3=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                        throw nvae;
                    }
                    switch (alt3) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:43:27: ( NEWLINE )+
                            // /Library/WebServer/Documents/calc/Formula.g:43:27: ( NEWLINE )+
                            var cnt2=0;
                            loop2:
                            do {
                                var alt2=2;
                                var LA2_0 = this.input.LA(1);

                                if ( (LA2_0==NEWLINE) ) {
                                    alt2=1;
                                }


                                switch (alt2) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                    NEWLINE3=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines162); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE3);



                                    break;

                                default :
                                    if ( cnt2 >= 1 ) {
                                        break loop2;
                                    }
                                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                                        throw eee;
                                }
                                cnt2++;
                            } while (true);



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:43:36: EOF
                            EOF4=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines165); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EOF.add(EOF4);



                            break;

                    }



                    break;

                default :
                    break loop4;
                }
            } while (true);

            EOF5=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines170); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_EOF.add(EOF5);



            // AST REWRITE
            // elements: expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 43:47: -> ^( LINES ( expression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:43:50: ^( LINES ( expression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LINES, "LINES"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:43:58: ( expression )*
                while ( stream_expression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_expression.nextTree());

                }
                stream_expression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        FormulaParser.expression_return = function(){};
        org.antlr.lang.extend(FormulaParser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:106:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );
    // $ANTLR start "expression"
    expression: function() {
        var retval = new FormulaParser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var assignment6 = null;
         var logicalExpression7 = null;
         var whileLoop8 = null;
         var forLoop9 = null;
         var forInLoop10 = null;
         var ifThenElse11 = null;
         var functionDef12 = null;
         var returnExp13 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:107:2: ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp )
            var alt5=8;
            alt5 = this.dfa5.predict(this.input);
            switch (alt5) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:107:5: assignment
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_assignment_in_expression448);
                    assignment6=this.assignment();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment6.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:108:5: logicalExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_expression454);
                    logicalExpression7=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression7.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:109:5: whileLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_whileLoop_in_expression460);
                    whileLoop8=this.whileLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileLoop8.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:110:5: forLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forLoop_in_expression466);
                    forLoop9=this.forLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forLoop9.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:111:5: forInLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forInLoop_in_expression472);
                    forInLoop10=this.forInLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forInLoop10.getTree());


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:112:5: ifThenElse
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_ifThenElse_in_expression478);
                    ifThenElse11=this.ifThenElse();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifThenElse11.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:113:5: functionDef
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_functionDef_in_expression484);
                    functionDef12=this.functionDef();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionDef12.getTree());


                    break;
                case 8 :
                    // /Library/WebServer/Documents/calc/Formula.g:114:5: returnExp
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_returnExp_in_expression490);
                    returnExp13=this.returnExp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, returnExp13.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    returnExp_return: (function() {
        FormulaParser.returnExp_return = function(){};
        org.antlr.lang.extend(FormulaParser.returnExp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:117:1: returnExp : RETURNSTATEMENT logicalExpression ;
    // $ANTLR start "returnExp"
    returnExp: function() {
        var retval = new FormulaParser.returnExp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var RETURNSTATEMENT14 = null;
         var logicalExpression15 = null;

        var RETURNSTATEMENT14_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:118:2: ( RETURNSTATEMENT logicalExpression )
            // /Library/WebServer/Documents/calc/Formula.g:119:2: RETURNSTATEMENT logicalExpression
            root_0 = this.adaptor.nil();

            RETURNSTATEMENT14=this.match(this.input,RETURNSTATEMENT,FormulaParser.FOLLOW_RETURNSTATEMENT_in_returnExp502); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RETURNSTATEMENT14_tree = this.adaptor.create(RETURNSTATEMENT14);
            root_0 = this.adaptor.becomeRoot(RETURNSTATEMENT14_tree, root_0);
            }
            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_returnExp505);
            logicalExpression15=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression15.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    innerBlock_return: (function() {
        FormulaParser.innerBlock_return = function(){};
        org.antlr.lang.extend(FormulaParser.innerBlock_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:122:1: innerBlock : ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) ;
    // $ANTLR start "innerBlock"
    innerBlock: function() {
        var retval = new FormulaParser.innerBlock_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWLINE17 = null;
         var expression16 = null;

        var NEWLINE17_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:123:2: ( ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) )
            // /Library/WebServer/Documents/calc/Formula.g:123:4: ( expression ( ( NEWLINE )+ ) )*
            // /Library/WebServer/Documents/calc/Formula.g:123:4: ( expression ( ( NEWLINE )+ ) )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==WHILESTATEMENT||LA7_0==FORSTATEMENT||LA7_0==IFSTATEMENT||LA7_0==FUNCTIONSTATEMENT||(LA7_0>=RETURNSTATEMENT && LA7_0<=IDENT)||LA7_0==PRIMITIVE||LA7_0==MINUS||(LA7_0>=NOT && LA7_0<=LARR)||LA7_0==LCURL||(LA7_0>=STRING && LA7_0<=FALSE)||LA7_0==108) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:123:5: expression ( ( NEWLINE )+ )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_innerBlock518);
                    expression16=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression16.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:123:17: ( ( NEWLINE )+ )
                    // /Library/WebServer/Documents/calc/Formula.g:123:18: ( NEWLINE )+
                    // /Library/WebServer/Documents/calc/Formula.g:123:18: ( NEWLINE )+
                    var cnt6=0;
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==NEWLINE) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE17=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_innerBlock522); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE17);



                            break;

                        default :
                            if ( cnt6 >= 1 ) {
                                break loop6;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(6, this.input);
                                throw eee;
                        }
                        cnt6++;
                    } while (true);






                    break;

                default :
                    break loop7;
                }
            } while (true);



            // AST REWRITE
            // elements: expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 123:30: -> ^( LINES ( expression )+ )
            {
                // /Library/WebServer/Documents/calc/Formula.g:123:33: ^( LINES ( expression )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LINES, "LINES"), root_1);

                if ( !(stream_expression.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_expression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_expression.nextTree());

                }
                stream_expression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    whileLoop_return: (function() {
        FormulaParser.whileLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.whileLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:126:1: whileLoop : WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) ;
    // $ANTLR start "whileLoop"
    whileLoop: function() {
        var retval = new FormulaParser.whileLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WHILESTATEMENT18 = null;
        var NEWLINE20 = null;
        var ENDBLOCK22 = null;
        var LOOPSTATEMENT23 = null;
         var logicalExpression19 = null;
         var innerBlock21 = null;

        var WHILESTATEMENT18_tree=null;
        var NEWLINE20_tree=null;
        var ENDBLOCK22_tree=null;
        var LOOPSTATEMENT23_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_WHILESTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WHILESTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:127:2: ( WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:127:4: WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            WHILESTATEMENT18=this.match(this.input,WHILESTATEMENT,FormulaParser.FOLLOW_WHILESTATEMENT_in_whileLoop547); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_WHILESTATEMENT.add(WHILESTATEMENT18);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_whileLoop549);
            logicalExpression19=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression19.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:127:37: ( NEWLINE )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0==NEWLINE) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE20=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_whileLoop551); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE20);



                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_whileLoop554);
            innerBlock21=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock21.getTree());
            ENDBLOCK22=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_whileLoop557); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK22);

            LOOPSTATEMENT23=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_whileLoop559); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT23);



            // AST REWRITE
            // elements: logicalExpression, innerBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 127:81: -> ^( WHILE logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:127:84: ^( WHILE logicalExpression innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(WHILE, "WHILE"), root_1);

                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    forLoop_return: (function() {
        FormulaParser.forLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.forLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:130:1: forLoop : FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) ;
    // $ANTLR start "forLoop"
    forLoop: function() {
        var retval = new FormulaParser.forLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FORSTATEMENT24 = null;
        var IDENT25 = null;
        var FROMSTATEMENT26 = null;
        var TOSTATEMENT28 = null;
        var BYSTATEMENT30 = null;
        var NEWLINE32 = null;
        var ENDBLOCK34 = null;
        var LOOPSTATEMENT35 = null;
         var logicalExpression27 = null;
         var logicalExpression29 = null;
         var logicalExpression31 = null;
         var innerBlock33 = null;

        var FORSTATEMENT24_tree=null;
        var IDENT25_tree=null;
        var FROMSTATEMENT26_tree=null;
        var TOSTATEMENT28_tree=null;
        var BYSTATEMENT30_tree=null;
        var NEWLINE32_tree=null;
        var ENDBLOCK34_tree=null;
        var LOOPSTATEMENT35_tree=null;
        var stream_FORSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FORSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_FROMSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FROMSTATEMENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_TOSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token TOSTATEMENT");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_BYSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token BYSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:131:2: ( FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:131:4: FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT24=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forLoop580); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT24);

            IDENT25=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forLoop582); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT25);

            FROMSTATEMENT26=this.match(this.input,FROMSTATEMENT,FormulaParser.FOLLOW_FROMSTATEMENT_in_forLoop584); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FROMSTATEMENT.add(FROMSTATEMENT26);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop586);
            logicalExpression27=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression27.getTree());
            TOSTATEMENT28=this.match(this.input,TOSTATEMENT,FormulaParser.FOLLOW_TOSTATEMENT_in_forLoop588); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_TOSTATEMENT.add(TOSTATEMENT28);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop590);
            logicalExpression29=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression29.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:131:85: ( BYSTATEMENT logicalExpression )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==BYSTATEMENT) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:131:86: BYSTATEMENT logicalExpression
                    BYSTATEMENT30=this.match(this.input,BYSTATEMENT,FormulaParser.FOLLOW_BYSTATEMENT_in_forLoop593); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_BYSTATEMENT.add(BYSTATEMENT30);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop595);
                    logicalExpression31=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression31.getTree());


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:131:118: ( NEWLINE )+
            var cnt10=0;
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0==NEWLINE) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE32=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forLoop599); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE32);



                    break;

                default :
                    if ( cnt10 >= 1 ) {
                        break loop10;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(10, this.input);
                        throw eee;
                }
                cnt10++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forLoop602);
            innerBlock33=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock33.getTree());
            ENDBLOCK34=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forLoop605); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK34);

            LOOPSTATEMENT35=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forLoop607); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT35);



            // AST REWRITE
            // elements: innerBlock, IDENT, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 131:162: -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:131:165: ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FOR, "FOR"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:131:177: ^( PARAMS ( logicalExpression )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:131:186: ( logicalExpression )*
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    forInLoop_return: (function() {
        FormulaParser.forInLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.forInLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:134:1: forInLoop : FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) ;
    // $ANTLR start "forInLoop"
    forInLoop: function() {
        var retval = new FormulaParser.forInLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FORSTATEMENT36 = null;
        var IDENT37 = null;
        var INSTATEMENT38 = null;
        var NEWLINE40 = null;
        var ENDBLOCK42 = null;
        var LOOPSTATEMENT43 = null;
         var logicalExpression39 = null;
         var innerBlock41 = null;

        var FORSTATEMENT36_tree=null;
        var IDENT37_tree=null;
        var INSTATEMENT38_tree=null;
        var NEWLINE40_tree=null;
        var ENDBLOCK42_tree=null;
        var LOOPSTATEMENT43_tree=null;
        var stream_FORSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FORSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_INSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:135:2: ( FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:135:4: FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT36=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forInLoop635); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT36);

            IDENT37=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forInLoop637); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT37);

            INSTATEMENT38=this.match(this.input,INSTATEMENT,FormulaParser.FOLLOW_INSTATEMENT_in_forInLoop639); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_INSTATEMENT.add(INSTATEMENT38);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forInLoop641);
            logicalExpression39=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression39.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:135:53: ( NEWLINE )+
            var cnt11=0;
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==NEWLINE) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE40=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forInLoop643); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE40);



                    break;

                default :
                    if ( cnt11 >= 1 ) {
                        break loop11;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(11, this.input);
                        throw eee;
                }
                cnt11++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forInLoop646);
            innerBlock41=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock41.getTree());
            ENDBLOCK42=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forInLoop649); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK42);

            LOOPSTATEMENT43=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forInLoop651); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT43);



            // AST REWRITE
            // elements: innerBlock, IDENT, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 135:98: -> ^( FORIN IDENT logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:135:101: ^( FORIN IDENT logicalExpression innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FORIN, "FORIN"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    ifThenElse_return: (function() {
        FormulaParser.ifThenElse_return = function(){};
        org.antlr.lang.extend(FormulaParser.ifThenElse_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:138:1: ifThenElse : IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) ;
    // $ANTLR start "ifThenElse"
    ifThenElse: function() {
        var retval = new FormulaParser.ifThenElse_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IFSTATEMENT44 = null;
        var THENSTATEMENT46 = null;
        var NEWLINE47 = null;
        var ELSESTATEMENT49 = null;
        var IFSTATEMENT50 = null;
        var THENSTATEMENT52 = null;
        var NEWLINE53 = null;
        var ELSESTATEMENT55 = null;
        var NEWLINE56 = null;
        var ENDBLOCK58 = null;
        var IFSTATEMENT59 = null;
         var logicalExpression45 = null;
         var innerBlock48 = null;
         var logicalExpression51 = null;
         var innerBlock54 = null;
         var innerBlock57 = null;

        var IFSTATEMENT44_tree=null;
        var THENSTATEMENT46_tree=null;
        var NEWLINE47_tree=null;
        var ELSESTATEMENT49_tree=null;
        var IFSTATEMENT50_tree=null;
        var THENSTATEMENT52_tree=null;
        var NEWLINE53_tree=null;
        var ELSESTATEMENT55_tree=null;
        var NEWLINE56_tree=null;
        var ENDBLOCK58_tree=null;
        var IFSTATEMENT59_tree=null;
        var stream_IFSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IFSTATEMENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_ELSESTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ELSESTATEMENT");
        var stream_THENSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token THENSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:139:2: ( IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) )
            // /Library/WebServer/Documents/calc/Formula.g:139:4: IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT
            IFSTATEMENT44=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse676); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT44);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse678);
            logicalExpression45=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression45.getTree());
            THENSTATEMENT46=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse680); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT46);

            // /Library/WebServer/Documents/calc/Formula.g:139:49: ( NEWLINE )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( (LA12_0==NEWLINE) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE47=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse683); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE47);



                    break;

                default :
                    if ( cnt12 >= 1 ) {
                        break loop12;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                        throw eee;
                }
                cnt12++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse686);
            innerBlock48=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock48.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:139:70: ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( (LA14_0==ELSESTATEMENT) ) {
                    var LA14_1 = this.input.LA(2);

                    if ( (LA14_1==IFSTATEMENT) ) {
                        alt14=1;
                    }


                }


                switch (alt14) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:139:71: ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT49=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse690); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT49);

                    IFSTATEMENT50=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse692); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT50);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse694);
                    logicalExpression51=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression51.getTree());
                    THENSTATEMENT52=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse696); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT52);

                    // /Library/WebServer/Documents/calc/Formula.g:139:129: ( NEWLINE )+
                    var cnt13=0;
                    loop13:
                    do {
                        var alt13=2;
                        var LA13_0 = this.input.LA(1);

                        if ( (LA13_0==NEWLINE) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE53=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse698); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE53);



                            break;

                        default :
                            if ( cnt13 >= 1 ) {
                                break loop13;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(13, this.input);
                                throw eee;
                        }
                        cnt13++;
                    } while (true);

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse701);
                    innerBlock54=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock54.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:139:151: ( ELSESTATEMENT ( NEWLINE )+ innerBlock )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==ELSESTATEMENT) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:139:152: ELSESTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT55=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse706); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT55);

                    // /Library/WebServer/Documents/calc/Formula.g:139:166: ( NEWLINE )+
                    var cnt15=0;
                    loop15:
                    do {
                        var alt15=2;
                        var LA15_0 = this.input.LA(1);

                        if ( (LA15_0==NEWLINE) ) {
                            alt15=1;
                        }


                        switch (alt15) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE56=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse708); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE56);



                            break;

                        default :
                            if ( cnt15 >= 1 ) {
                                break loop15;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(15, this.input);
                                throw eee;
                        }
                        cnt15++;
                    } while (true);

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse711);
                    innerBlock57=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock57.getTree());


                    break;

            }

            ENDBLOCK58=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_ifThenElse715); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK58);

            IFSTATEMENT59=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse717); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT59);



            // AST REWRITE
            // elements: logicalExpression, innerBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 139:209: -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
            {
                // /Library/WebServer/Documents/calc/Formula.g:139:212: ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IFTHENELSE, "IFTHENELSE"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:139:225: ^( PARAMS ( logicalExpression )+ )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                if ( !(stream_logicalExpression.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:139:254: ^( PARAMS ( innerBlock )+ )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                if ( !(stream_innerBlock.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_innerBlock.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_innerBlock.nextTree());

                }
                stream_innerBlock.reset();

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    functionDef_return: (function() {
        FormulaParser.functionDef_return = function(){};
        org.antlr.lang.extend(FormulaParser.functionDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:142:1: functionDef : FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) ;
    // $ANTLR start "functionDef"
    functionDef: function() {
        var retval = new FormulaParser.functionDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FUNCTIONSTATEMENT60 = null;
        var IDENT61 = null;
        var char_literal62 = null;
        var IDENT63 = null;
        var EQUALS64 = null;
        var char_literal66 = null;
        var IDENT67 = null;
        var char_literal68 = null;
        var IDENT69 = null;
        var EQUALS70 = null;
        var char_literal72 = null;
        var NEWLINE73 = null;
        var ENDBLOCK75 = null;
        var FUNCTIONSTATEMENT76 = null;
         var defaultValue65 = null;
         var defaultValue71 = null;
         var innerBlock74 = null;

        var FUNCTIONSTATEMENT60_tree=null;
        var IDENT61_tree=null;
        var char_literal62_tree=null;
        var IDENT63_tree=null;
        var EQUALS64_tree=null;
        var char_literal66_tree=null;
        var IDENT67_tree=null;
        var char_literal68_tree=null;
        var IDENT69_tree=null;
        var EQUALS70_tree=null;
        var char_literal72_tree=null;
        var NEWLINE73_tree=null;
        var ENDBLOCK75_tree=null;
        var FUNCTIONSTATEMENT76_tree=null;
        var stream_FUNCTIONSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FUNCTIONSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:143:2: ( FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:143:4: FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT
            FUNCTIONSTATEMENT60=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef748); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT60);

            IDENT61=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef750); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT61);

            char_literal62=this.match(this.input,108,FormulaParser.FOLLOW_108_in_functionDef752); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_108.add(char_literal62);

            // /Library/WebServer/Documents/calc/Formula.g:143:32: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==IDENT) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:143:33: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                    IDENT63=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef755); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT63);

                    // /Library/WebServer/Documents/calc/Formula.g:143:40: ( EQUALS defaultValue | ( ',' IDENT )* )
                    var alt18=2;
                    var LA18_0 = this.input.LA(1);

                    if ( (LA18_0==EQUALS) ) {
                        alt18=1;
                    }
                    else if ( (LA18_0==COMMA||LA18_0==109) ) {
                        alt18=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                        throw nvae;
                    }
                    switch (alt18) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:143:41: EQUALS defaultValue
                            EQUALS64=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef759); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS64);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef762);
                            defaultValue65=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue65.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:143:64: ( ',' IDENT )*
                            // /Library/WebServer/Documents/calc/Formula.g:143:64: ( ',' IDENT )*
                            loop17:
                            do {
                                var alt17=2;
                                var LA17_0 = this.input.LA(1);

                                if ( (LA17_0==COMMA) ) {
                                    var LA17_1 = this.input.LA(2);

                                    if ( (LA17_1==IDENT) ) {
                                        var LA17_3 = this.input.LA(3);

                                        if ( (LA17_3==COMMA||LA17_3==109) ) {
                                            alt17=1;
                                        }


                                    }


                                }


                                switch (alt17) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:143:65: ',' IDENT
                                    char_literal66=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_functionDef767); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal66);

                                    IDENT67=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef769); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT67);



                                    break;

                                default :
                                    break loop17;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:143:79: ( ',' IDENT EQUALS defaultValue )*
                    loop19:
                    do {
                        var alt19=2;
                        var LA19_0 = this.input.LA(1);

                        if ( (LA19_0==COMMA) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:143:80: ',' IDENT EQUALS defaultValue
                            char_literal68=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_functionDef776); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal68);

                            IDENT69=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef778); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT69);

                            EQUALS70=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef780); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS70);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef782);
                            defaultValue71=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue71.getTree());


                            break;

                        default :
                            break loop19;
                        }
                    } while (true);



                    break;

            }

            char_literal72=this.match(this.input,109,FormulaParser.FOLLOW_109_in_functionDef789); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_109.add(char_literal72);

            // /Library/WebServer/Documents/calc/Formula.g:143:119: ( NEWLINE )+
            var cnt21=0;
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( (LA21_0==NEWLINE) ) {
                    alt21=1;
                }


                switch (alt21) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE73=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_functionDef791); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE73);



                    break;

                default :
                    if ( cnt21 >= 1 ) {
                        break loop21;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(21, this.input);
                        throw eee;
                }
                cnt21++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_functionDef794);
            innerBlock74=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock74.getTree());
            ENDBLOCK75=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_functionDef797); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK75);

            FUNCTIONSTATEMENT76=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef799); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT76);



            // AST REWRITE
            // elements: innerBlock, IDENT, defaultValue
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 143:167: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:143:170: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:143:181: ^( PARAMS ( IDENT )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:143:190: ( IDENT )*
                while ( stream_IDENT.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                }
                stream_IDENT.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:143:198: ^( DEFAULTS ( defaultValue )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:143:209: ( defaultValue )*
                while ( stream_defaultValue.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_defaultValue.nextTree());

                }
                stream_defaultValue.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    anonFunctionDef_return: (function() {
        FormulaParser.anonFunctionDef_return = function(){};
        org.antlr.lang.extend(FormulaParser.anonFunctionDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:146:1: anonFunctionDef : FUNCTIONSTATEMENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT ) | expression ) -> ^( ANONFUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) ( innerBlock )? ( expression )? ) ;
    // $ANTLR start "anonFunctionDef"
    anonFunctionDef: function() {
        var retval = new FormulaParser.anonFunctionDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FUNCTIONSTATEMENT77 = null;
        var char_literal78 = null;
        var IDENT79 = null;
        var EQUALS80 = null;
        var char_literal82 = null;
        var IDENT83 = null;
        var char_literal84 = null;
        var IDENT85 = null;
        var EQUALS86 = null;
        var char_literal88 = null;
        var NEWLINE89 = null;
        var ENDBLOCK91 = null;
        var FUNCTIONSTATEMENT92 = null;
         var defaultValue81 = null;
         var defaultValue87 = null;
         var innerBlock90 = null;
         var expression93 = null;

        var FUNCTIONSTATEMENT77_tree=null;
        var char_literal78_tree=null;
        var IDENT79_tree=null;
        var EQUALS80_tree=null;
        var char_literal82_tree=null;
        var IDENT83_tree=null;
        var char_literal84_tree=null;
        var IDENT85_tree=null;
        var EQUALS86_tree=null;
        var char_literal88_tree=null;
        var NEWLINE89_tree=null;
        var ENDBLOCK91_tree=null;
        var FUNCTIONSTATEMENT92_tree=null;
        var stream_FUNCTIONSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FUNCTIONSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:147:2: ( FUNCTIONSTATEMENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT ) | expression ) -> ^( ANONFUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) ( innerBlock )? ( expression )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:147:4: FUNCTIONSTATEMENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT ) | expression )
            FUNCTIONSTATEMENT77=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_anonFunctionDef833); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT77);

            char_literal78=this.match(this.input,108,FormulaParser.FOLLOW_108_in_anonFunctionDef836); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_108.add(char_literal78);

            // /Library/WebServer/Documents/calc/Formula.g:147:27: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==IDENT) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:147:28: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                    IDENT79=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_anonFunctionDef839); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT79);

                    // /Library/WebServer/Documents/calc/Formula.g:147:35: ( EQUALS defaultValue | ( ',' IDENT )* )
                    var alt23=2;
                    var LA23_0 = this.input.LA(1);

                    if ( (LA23_0==EQUALS) ) {
                        alt23=1;
                    }
                    else if ( (LA23_0==COMMA||LA23_0==109) ) {
                        alt23=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                        throw nvae;
                    }
                    switch (alt23) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:147:36: EQUALS defaultValue
                            EQUALS80=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_anonFunctionDef843); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS80);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_anonFunctionDef846);
                            defaultValue81=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue81.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:147:59: ( ',' IDENT )*
                            // /Library/WebServer/Documents/calc/Formula.g:147:59: ( ',' IDENT )*
                            loop22:
                            do {
                                var alt22=2;
                                var LA22_0 = this.input.LA(1);

                                if ( (LA22_0==COMMA) ) {
                                    var LA22_1 = this.input.LA(2);

                                    if ( (LA22_1==IDENT) ) {
                                        var LA22_3 = this.input.LA(3);

                                        if ( (LA22_3==COMMA||LA22_3==109) ) {
                                            alt22=1;
                                        }


                                    }


                                }


                                switch (alt22) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:147:60: ',' IDENT
                                    char_literal82=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_anonFunctionDef851); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal82);

                                    IDENT83=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_anonFunctionDef853); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT83);



                                    break;

                                default :
                                    break loop22;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:147:74: ( ',' IDENT EQUALS defaultValue )*
                    loop24:
                    do {
                        var alt24=2;
                        var LA24_0 = this.input.LA(1);

                        if ( (LA24_0==COMMA) ) {
                            alt24=1;
                        }


                        switch (alt24) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:147:75: ',' IDENT EQUALS defaultValue
                            char_literal84=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_anonFunctionDef860); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal84);

                            IDENT85=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_anonFunctionDef862); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT85);

                            EQUALS86=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_anonFunctionDef864); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS86);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_anonFunctionDef866);
                            defaultValue87=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue87.getTree());


                            break;

                        default :
                            break loop24;
                        }
                    } while (true);



                    break;

            }

            char_literal88=this.match(this.input,109,FormulaParser.FOLLOW_109_in_anonFunctionDef873); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_109.add(char_literal88);

            // /Library/WebServer/Documents/calc/Formula.g:147:114: ( ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT ) | expression )
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==NEWLINE) ) {
                alt27=1;
            }
            else if ( (LA27_0==WHILESTATEMENT||LA27_0==FORSTATEMENT||LA27_0==IFSTATEMENT||LA27_0==FUNCTIONSTATEMENT||(LA27_0>=RETURNSTATEMENT && LA27_0<=IDENT)||LA27_0==PRIMITIVE||LA27_0==MINUS||(LA27_0>=NOT && LA27_0<=LARR)||LA27_0==LCURL||(LA27_0>=STRING && LA27_0<=FALSE)||LA27_0==108) ) {
                alt27=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                throw nvae;
            }
            switch (alt27) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:147:116: ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT )
                    // /Library/WebServer/Documents/calc/Formula.g:147:116: ( ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT )
                    // /Library/WebServer/Documents/calc/Formula.g:147:117: ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT
                    // /Library/WebServer/Documents/calc/Formula.g:147:117: ( NEWLINE )+
                    var cnt26=0;
                    loop26:
                    do {
                        var alt26=2;
                        var LA26_0 = this.input.LA(1);

                        if ( (LA26_0==NEWLINE) ) {
                            alt26=1;
                        }


                        switch (alt26) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE89=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_anonFunctionDef878); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE89);



                            break;

                        default :
                            if ( cnt26 >= 1 ) {
                                break loop26;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(26, this.input);
                                throw eee;
                        }
                        cnt26++;
                    } while (true);

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_anonFunctionDef881);
                    innerBlock90=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock90.getTree());
                    ENDBLOCK91=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_anonFunctionDef884); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK91);

                    FUNCTIONSTATEMENT92=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_anonFunctionDef886); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT92);






                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:147:168: expression
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_anonFunctionDef891);
                    expression93=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression93.getTree());


                    break;

            }



            // AST REWRITE
            // elements: innerBlock, expression, defaultValue, IDENT
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 147:180: -> ^( ANONFUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) ( innerBlock )? ( expression )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:147:183: ^( ANONFUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) ( innerBlock )? ( expression )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ANONFUNCTION, "ANONFUNCTION"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:147:198: ^( PARAMS ( IDENT )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:147:207: ( IDENT )*
                while ( stream_IDENT.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                }
                stream_IDENT.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:147:215: ^( DEFAULTS ( defaultValue )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:147:226: ( defaultValue )*
                while ( stream_defaultValue.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_defaultValue.nextTree());

                }
                stream_defaultValue.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:147:241: ( innerBlock )?
                if ( stream_innerBlock.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                }
                stream_innerBlock.reset();
                // /Library/WebServer/Documents/calc/Formula.g:147:253: ( expression )?
                if ( stream_expression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_expression.nextTree());

                }
                stream_expression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_return: (function() {
        FormulaParser.assignment_return = function(){};
        org.antlr.lang.extend(FormulaParser.assignment_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:151:1: assignment : ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression ) );
    // $ANTLR start "assignment"
    assignment: function() {
        var retval = new FormulaParser.assignment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT94 = null;
        var char_literal95 = null;
        var IDENT96 = null;
        var EQUALS97 = null;
        var char_literal99 = null;
        var IDENT100 = null;
        var char_literal101 = null;
        var IDENT102 = null;
        var EQUALS103 = null;
        var char_literal105 = null;
        var string_literal106 = null;
        var PRIMITIVE108 = null;
        var char_literal110 = null;
        var PRIMITIVE111 = null;
        var string_literal113 = null;
         var defaultValue98 = null;
         var defaultValue104 = null;
         var logicalExpression107 = null;
         var assigned109 = null;
         var assigned112 = null;
         var logicalExpression114 = null;

        var IDENT94_tree=null;
        var char_literal95_tree=null;
        var IDENT96_tree=null;
        var EQUALS97_tree=null;
        var char_literal99_tree=null;
        var IDENT100_tree=null;
        var char_literal101_tree=null;
        var IDENT102_tree=null;
        var EQUALS103_tree=null;
        var char_literal105_tree=null;
        var string_literal106_tree=null;
        var PRIMITIVE108_tree=null;
        var char_literal110_tree=null;
        var PRIMITIVE111_tree=null;
        var string_literal113_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_110=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 110");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_PRIMITIVE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PRIMITIVE");
        var stream_assigned=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assigned");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:152:2: ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression ) )
            var alt35=2;
            var LA35_0 = this.input.LA(1);

            if ( (LA35_0==IDENT) ) {
                var LA35_1 = this.input.LA(2);

                if ( (LA35_1==108) ) {
                    alt35=1;
                }
                else if ( (LA35_1==LARR||LA35_1==LCURL||LA35_1==COMMA||(LA35_1>=110 && LA35_1<=111)) ) {
                    alt35=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 35, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA35_0==PRIMITIVE) ) {
                alt35=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 35, 0, this.input);

                throw nvae;
            }
            switch (alt35) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:153:2: IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression
                    IDENT94=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment933); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT94);

                    char_literal95=this.match(this.input,108,FormulaParser.FOLLOW_108_in_assignment935); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_108.add(char_literal95);

                    // /Library/WebServer/Documents/calc/Formula.g:153:12: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
                    var alt31=2;
                    var LA31_0 = this.input.LA(1);

                    if ( (LA31_0==IDENT) ) {
                        alt31=1;
                    }
                    switch (alt31) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:153:13: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                            IDENT96=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment938); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT96);

                            // /Library/WebServer/Documents/calc/Formula.g:153:20: ( EQUALS defaultValue | ( ',' IDENT )* )
                            var alt29=2;
                            var LA29_0 = this.input.LA(1);

                            if ( (LA29_0==EQUALS) ) {
                                alt29=1;
                            }
                            else if ( (LA29_0==COMMA||LA29_0==109) ) {
                                alt29=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                                throw nvae;
                            }
                            switch (alt29) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:153:21: EQUALS defaultValue
                                    EQUALS97=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment942); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS97);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment944);
                                    defaultValue98=this.defaultValue();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue98.getTree());


                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:153:43: ( ',' IDENT )*
                                    // /Library/WebServer/Documents/calc/Formula.g:153:43: ( ',' IDENT )*
                                    loop28:
                                    do {
                                        var alt28=2;
                                        var LA28_0 = this.input.LA(1);

                                        if ( (LA28_0==COMMA) ) {
                                            var LA28_1 = this.input.LA(2);

                                            if ( (LA28_1==IDENT) ) {
                                                var LA28_3 = this.input.LA(3);

                                                if ( (LA28_3==COMMA||LA28_3==109) ) {
                                                    alt28=1;
                                                }


                                            }


                                        }


                                        switch (alt28) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:153:44: ',' IDENT
                                            char_literal99=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment949); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal99);

                                            IDENT100=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment951); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT100);



                                            break;

                                        default :
                                            break loop28;
                                        }
                                    } while (true);



                                    break;

                            }

                            // /Library/WebServer/Documents/calc/Formula.g:153:58: ( ',' IDENT EQUALS defaultValue )*
                            loop30:
                            do {
                                var alt30=2;
                                var LA30_0 = this.input.LA(1);

                                if ( (LA30_0==COMMA) ) {
                                    alt30=1;
                                }


                                switch (alt30) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:153:59: ',' IDENT EQUALS defaultValue
                                    char_literal101=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment958); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal101);

                                    IDENT102=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment960); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT102);

                                    EQUALS103=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment962); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS103);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment964);
                                    defaultValue104=this.defaultValue();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue104.getTree());


                                    break;

                                default :
                                    break loop30;
                                }
                            } while (true);



                            break;

                    }

                    char_literal105=this.match(this.input,109,FormulaParser.FOLLOW_109_in_assignment971); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal105);

                    string_literal106=this.match(this.input,110,FormulaParser.FOLLOW_110_in_assignment973); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_110.add(string_literal106);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment975);
                    logicalExpression107=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression107.getTree());


                    // AST REWRITE
                    // elements: defaultValue, logicalExpression, IDENT
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 153:121: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:153:124: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:153:135: ^( PARAMS ( IDENT )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:153:144: ( IDENT )*
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }
                        // /Library/WebServer/Documents/calc/Formula.g:153:152: ^( DEFAULTS ( defaultValue )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:153:163: ( defaultValue )*
                        while ( stream_defaultValue.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_defaultValue.nextTree());

                        }
                        stream_defaultValue.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }
                        this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:154:2: ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression
                    // /Library/WebServer/Documents/calc/Formula.g:154:2: ( PRIMITIVE | assigned )
                    var alt32=2;
                    var LA32_0 = this.input.LA(1);

                    if ( (LA32_0==PRIMITIVE) ) {
                        alt32=1;
                    }
                    else if ( (LA32_0==IDENT) ) {
                        alt32=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 32, 0, this.input);

                        throw nvae;
                    }
                    switch (alt32) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:154:3: PRIMITIVE
                            PRIMITIVE108=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment1003); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE108);



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:154:15: assigned
                            this.pushFollow(FormulaParser.FOLLOW_assigned_in_assignment1007);
                            assigned109=this.assigned();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_assigned.add(assigned109.getTree());


                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:154:25: ( ',' ( PRIMITIVE | assigned ) )*
                    loop34:
                    do {
                        var alt34=2;
                        var LA34_0 = this.input.LA(1);

                        if ( (LA34_0==COMMA) ) {
                            alt34=1;
                        }


                        switch (alt34) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:154:26: ',' ( PRIMITIVE | assigned )
                            char_literal110=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment1011); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal110);

                            // /Library/WebServer/Documents/calc/Formula.g:154:30: ( PRIMITIVE | assigned )
                            var alt33=2;
                            var LA33_0 = this.input.LA(1);

                            if ( (LA33_0==PRIMITIVE) ) {
                                alt33=1;
                            }
                            else if ( (LA33_0==IDENT) ) {
                                alt33=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                                throw nvae;
                            }
                            switch (alt33) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:154:31: PRIMITIVE
                                    PRIMITIVE111=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment1014); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE111);



                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:154:43: assigned
                                    this.pushFollow(FormulaParser.FOLLOW_assigned_in_assignment1018);
                                    assigned112=this.assigned();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_assigned.add(assigned112.getTree());


                                    break;

                            }



                            break;

                        default :
                            break loop34;
                        }
                    } while (true);

                    string_literal113=this.match(this.input,110,FormulaParser.FOLLOW_110_in_assignment1024); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_110.add(string_literal113);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment1026);
                    logicalExpression114=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression114.getTree());


                    // AST REWRITE
                    // elements: PRIMITIVE, assigned, logicalExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 154:79: -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:154:82: ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGN, "ASSIGN"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:154:91: ( PRIMITIVE )*
                        while ( stream_PRIMITIVE.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_PRIMITIVE.nextNode());

                        }
                        stream_PRIMITIVE.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:154:102: ( assigned )*
                        while ( stream_assigned.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_assigned.nextTree());

                        }
                        stream_assigned.reset();
                        this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assigned_return: (function() {
        FormulaParser.assigned_return = function(){};
        org.antlr.lang.extend(FormulaParser.assigned_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:157:1: assigned : IDENT ( selector )? -> ^( ASSIGNED IDENT ( selector )? ) ;
    // $ANTLR start "assigned"
    assigned: function() {
        var retval = new FormulaParser.assigned_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT115 = null;
         var selector116 = null;

        var IDENT115_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_selector=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule selector");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:158:2: ( IDENT ( selector )? -> ^( ASSIGNED IDENT ( selector )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:158:4: IDENT ( selector )?
            IDENT115=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assigned1052); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT115);

            // /Library/WebServer/Documents/calc/Formula.g:158:10: ( selector )?
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0==LARR||LA36_0==LCURL||LA36_0==111) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: selector
                    this.pushFollow(FormulaParser.FOLLOW_selector_in_assigned1054);
                    selector116=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_selector.add(selector116.getTree());


                    break;

            }



            // AST REWRITE
            // elements: IDENT, selector
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 158:20: -> ^( ASSIGNED IDENT ( selector )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:158:23: ^( ASSIGNED IDENT ( selector )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNED, "ASSIGNED"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:158:40: ( selector )?
                if ( stream_selector.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_selector.nextTree());

                }
                stream_selector.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logicalExpression_return: (function() {
        FormulaParser.logicalExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.logicalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:162:1: logicalExpression : booleanXORExpression ( OR booleanXORExpression )* ;
    // $ANTLR start "logicalExpression"
    logicalExpression: function() {
        var retval = new FormulaParser.logicalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var OR118 = null;
         var booleanXORExpression117 = null;
         var booleanXORExpression119 = null;

        var OR118_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:163:2: ( booleanXORExpression ( OR booleanXORExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:163:4: booleanXORExpression ( OR booleanXORExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_booleanXORExpression_in_logicalExpression1080);
            booleanXORExpression117=this.booleanXORExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanXORExpression117.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:163:25: ( OR booleanXORExpression )*
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( (LA37_0==OR) ) {
                    var LA37_2 = this.input.LA(2);

                    if ( (this.synpred43_Formula()) ) {
                        alt37=1;
                    }


                }


                switch (alt37) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:163:26: OR booleanXORExpression
                    OR118=this.match(this.input,OR,FormulaParser.FOLLOW_OR_in_logicalExpression1083); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    OR118_tree = this.adaptor.create(OR118);
                    root_0 = this.adaptor.becomeRoot(OR118_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_booleanXORExpression_in_logicalExpression1086);
                    booleanXORExpression119=this.booleanXORExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanXORExpression119.getTree());


                    break;

                default :
                    break loop37;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    booleanXORExpression_return: (function() {
        FormulaParser.booleanXORExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.booleanXORExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:168:1: booleanXORExpression : booleanAndExpression ( XOR booleanAndExpression )* ;
    // $ANTLR start "booleanXORExpression"
    booleanXORExpression: function() {
        var retval = new FormulaParser.booleanXORExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var XOR121 = null;
         var booleanAndExpression120 = null;
         var booleanAndExpression122 = null;

        var XOR121_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:169:2: ( booleanAndExpression ( XOR booleanAndExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:169:4: booleanAndExpression ( XOR booleanAndExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_booleanXORExpression1116);
            booleanAndExpression120=this.booleanAndExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression120.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:169:25: ( XOR booleanAndExpression )*
            loop38:
            do {
                var alt38=2;
                var LA38_0 = this.input.LA(1);

                if ( (LA38_0==XOR) ) {
                    var LA38_2 = this.input.LA(2);

                    if ( (this.synpred44_Formula()) ) {
                        alt38=1;
                    }


                }


                switch (alt38) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:169:26: XOR booleanAndExpression
                    XOR121=this.match(this.input,XOR,FormulaParser.FOLLOW_XOR_in_booleanXORExpression1119); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    XOR121_tree = this.adaptor.create(XOR121);
                    root_0 = this.adaptor.becomeRoot(XOR121_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_booleanXORExpression1122);
                    booleanAndExpression122=this.booleanAndExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression122.getTree());


                    break;

                default :
                    break loop38;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    booleanAndExpression_return: (function() {
        FormulaParser.booleanAndExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.booleanAndExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:174:1: booleanAndExpression : equalityExpression ( AND equalityExpression )* ;
    // $ANTLR start "booleanAndExpression"
    booleanAndExpression: function() {
        var retval = new FormulaParser.booleanAndExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var AND124 = null;
         var equalityExpression123 = null;
         var equalityExpression125 = null;

        var AND124_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:175:2: ( equalityExpression ( AND equalityExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:175:4: equalityExpression ( AND equalityExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression1151);
            equalityExpression123=this.equalityExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression123.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:175:23: ( AND equalityExpression )*
            loop39:
            do {
                var alt39=2;
                var LA39_0 = this.input.LA(1);

                if ( (LA39_0==AND) ) {
                    var LA39_2 = this.input.LA(2);

                    if ( (this.synpred45_Formula()) ) {
                        alt39=1;
                    }


                }


                switch (alt39) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:175:24: AND equalityExpression
                    AND124=this.match(this.input,AND,FormulaParser.FOLLOW_AND_in_booleanAndExpression1154); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    AND124_tree = this.adaptor.create(AND124);
                    root_0 = this.adaptor.becomeRoot(AND124_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression1157);
                    equalityExpression125=this.equalityExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression125.getTree());


                    break;

                default :
                    break loop39;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    equalityExpression_return: (function() {
        FormulaParser.equalityExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.equalityExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:180:1: equalityExpression : relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* ;
    // $ANTLR start "equalityExpression"
    equalityExpression: function() {
        var retval = new FormulaParser.equalityExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set127 = null;
         var relationalExpression126 = null;
         var relationalExpression128 = null;

        var set127_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:181:2: ( relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:181:4: relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression1188);
            relationalExpression126=this.relationalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression126.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:181:25: ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            loop40:
            do {
                var alt40=2;
                var LA40_0 = this.input.LA(1);

                if ( (LA40_0==EQUALS||LA40_0==NOTEQUALS) ) {
                    var LA40_2 = this.input.LA(2);

                    if ( (this.synpred47_Formula()) ) {
                        alt40=1;
                    }


                }


                switch (alt40) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:181:26: ( EQUALS | NOTEQUALS ) relationalExpression
                   
                    set127=this.input.LT(1);
                    if ( this.input.LA(1)==EQUALS||this.input.LA(1)==NOTEQUALS ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set127), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression1198);
                    relationalExpression128=this.relationalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression128.getTree());


                    break;

                default :
                    break loop40;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relationalExpression_return: (function() {
        FormulaParser.relationalExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.relationalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:191:1: relationalExpression : additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* ;
    // $ANTLR start "relationalExpression"
    relationalExpression: function() {
        var retval = new FormulaParser.relationalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set130 = null;
         var additiveExpression129 = null;
         var additiveExpression131 = null;

        var set130_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:192:2: ( additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:192:4: additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1240);
            additiveExpression129=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression129.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:192:23: ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            loop41:
            do {
                var alt41=2;
                var LA41_0 = this.input.LA(1);

                if ( ((LA41_0>=LT && LA41_0<=GTEQ)) ) {
                    var LA41_2 = this.input.LA(2);

                    if ( (this.synpred51_Formula()) ) {
                        alt41=1;
                    }


                }


                switch (alt41) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:192:25: ( LT | LTEQ | GT | GTEQ ) additiveExpression
                   
                    set130=this.input.LT(1);
                    if ( (this.input.LA(1)>=LT && this.input.LA(1)<=GTEQ) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set130), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1255);
                    additiveExpression131=this.additiveExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression131.getTree());


                    break;

                default :
                    break loop41;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    additiveExpression_return: (function() {
        FormulaParser.additiveExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.additiveExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:200:1: additiveExpression : multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* ;
    // $ANTLR start "additiveExpression"
    additiveExpression: function() {
        var retval = new FormulaParser.additiveExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set133 = null;
         var multiplicativeExpression132 = null;
         var multiplicativeExpression134 = null;

        var set133_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:201:2: ( multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:201:4: multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1298);
            multiplicativeExpression132=this.multiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression132.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:201:29: ( ( PLUS | MINUS ) multiplicativeExpression )*
            loop42:
            do {
                var alt42=2;
                var LA42_0 = this.input.LA(1);

                if ( ((LA42_0>=PLUS && LA42_0<=MINUS)) ) {
                    var LA42_2 = this.input.LA(2);

                    if ( (this.synpred53_Formula()) ) {
                        alt42=1;
                    }


                }


                switch (alt42) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:201:31: ( PLUS | MINUS ) multiplicativeExpression
                    
                    set133=this.input.LT(1);
                    if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=MINUS) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set133), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1309);
                    multiplicativeExpression134=this.multiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression134.getTree());


                    break;

                default :
                    break loop42;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multiplicativeExpression_return: (function() {
        FormulaParser.multiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.multiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:207:1: multiplicativeExpression : arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )* ;
    // $ANTLR start "multiplicativeExpression"
    multiplicativeExpression: function() {
        var retval = new FormulaParser.multiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set136 = null;
         var arrayExpression135 = null;
         var arrayExpression137 = null;

        var set136_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:208:2: ( arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:208:4: arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_arrayExpression_in_multiplicativeExpression1339);
            arrayExpression135=this.arrayExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arrayExpression135.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:208:20: ( ( MULT | DIV | MOD ) arrayExpression )*
            loop43:
            do {
                var alt43=2;
                var LA43_0 = this.input.LA(1);

                if ( ((LA43_0>=MULT && LA43_0<=MOD)) ) {
                    var LA43_2 = this.input.LA(2);

                    if ( (this.synpred56_Formula()) ) {
                        alt43=1;
                    }


                }


                switch (alt43) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:208:22: ( MULT | DIV | MOD ) arrayExpression
                    
                    set136=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=MOD) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set136), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_arrayExpression_in_multiplicativeExpression1352);
                    arrayExpression137=this.arrayExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arrayExpression137.getTree());


                    break;

                default :
                    break loop43;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    arrayExpression_return: (function() {
        FormulaParser.arrayExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.arrayExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:215:1: arrayExpression : negationExpression ({...}? COLON {...}? negationExpression )? ({...}? COLON {...}? negationExpression )? -> ^( RANGE ( negationExpression )* ) ;
    // $ANTLR start "arrayExpression"
    arrayExpression: function() {
        var retval = new FormulaParser.arrayExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COLON139 = null;
        var COLON141 = null;
         var negationExpression138 = null;
         var negationExpression140 = null;
         var negationExpression142 = null;

        var COLON139_tree=null;
        var COLON141_tree=null;
        var stream_COLON=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COLON");
        var stream_negationExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule negationExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:216:2: ( negationExpression ({...}? COLON {...}? negationExpression )? ({...}? COLON {...}? negationExpression )? -> ^( RANGE ( negationExpression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:216:4: negationExpression ({...}? COLON {...}? negationExpression )? ({...}? COLON {...}? negationExpression )?
            this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_arrayExpression1398);
            negationExpression138=this.negationExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_negationExpression.add(negationExpression138.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:216:24: ({...}? COLON {...}? negationExpression )?
            var alt44=2;
            var LA44_0 = this.input.LA(1);

            if ( (LA44_0==COLON) ) {
                var LA44_1 = this.input.LA(2);

                if ( ((this.synpred57_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                    alt44=1;
                }
            }
            switch (alt44) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:216:25: {...}? COLON {...}? negationExpression
                    if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        throw new org.antlr.runtime.FailedPredicateException(this.input, "arrayExpression", " this.input.get(this.input.index()-1).getText()!=\" \"");
                    }
                    COLON139=this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_arrayExpression1404); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_COLON.add(COLON139);

                    if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        throw new org.antlr.runtime.FailedPredicateException(this.input, "arrayExpression", " this.input.get(this.input.index()-1).getText()!=\" \"");
                    }
                    this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_arrayExpression1408);
                    negationExpression140=this.negationExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_negationExpression.add(negationExpression140.getTree());


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:216:165: ({...}? COLON {...}? negationExpression )?
            var alt45=2;
            var LA45_0 = this.input.LA(1);

            if ( (LA45_0==COLON) ) {
                var LA45_1 = this.input.LA(2);

                if ( ((this.synpred58_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                    alt45=1;
                }
            }
            switch (alt45) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:216:167: {...}? COLON {...}? negationExpression
                    if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        throw new org.antlr.runtime.FailedPredicateException(this.input, "arrayExpression", " this.input.get(this.input.index()-1).getText()!=\" \"");
                    }
                    COLON141=this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_arrayExpression1417); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_COLON.add(COLON141);

                    if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        throw new org.antlr.runtime.FailedPredicateException(this.input, "arrayExpression", " this.input.get(this.input.index()-1).getText()!=\" \"");
                    }
                    this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_arrayExpression1421);
                    negationExpression142=this.negationExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_negationExpression.add(negationExpression142.getTree());


                    break;

            }



            // AST REWRITE
            // elements: negationExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 216:306: -> ^( RANGE ( negationExpression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:216:309: ^( RANGE ( negationExpression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(RANGE, "RANGE"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:216:317: ( negationExpression )*
                while ( stream_negationExpression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_negationExpression.nextTree());

                }
                stream_negationExpression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    negationExpression_return: (function() {
        FormulaParser.negationExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.negationExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:220:1: negationExpression : ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression );
    // $ANTLR start "negationExpression"
    negationExpression: function() {
        var retval = new FormulaParser.negationExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS143 = null;
         var powerExpression144 = null;
         var powerExpression145 = null;

        var MINUS143_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_powerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule powerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:221:2: ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression )
            var alt46=2;
            var LA46_0 = this.input.LA(1);

            if ( (LA46_0==MINUS) ) {
                alt46=1;
            }
            else if ( (LA46_0==FUNCTIONSTATEMENT||(LA46_0>=NEWSTATEMENT && LA46_0<=IDENT)||LA46_0==PRIMITIVE||(LA46_0>=NOT && LA46_0<=LARR)||LA46_0==LCURL||(LA46_0>=STRING && LA46_0<=FALSE)||LA46_0==108) ) {
                alt46=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 46, 0, this.input);

                throw nvae;
            }
            switch (alt46) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:221:4: MINUS powerExpression
                    MINUS143=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negationExpression1446); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS143);

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1448);
                    powerExpression144=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_powerExpression.add(powerExpression144.getTree());


                    // AST REWRITE
                    // elements: powerExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 221:26: -> ^( NEGATE powerExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:221:29: ^( NEGATE powerExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                        this.adaptor.addChild(root_1, stream_powerExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:222:3: powerExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1462);
                    powerExpression145=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, powerExpression145.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    powerExpression_return: (function() {
        FormulaParser.powerExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.powerExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:224:1: powerExpression : unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) ;
    // $ANTLR start "powerExpression"
    powerExpression: function() {
        var retval = new FormulaParser.powerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW147 = null;
         var unaryExpression146 = null;
         var unaryOrNegate148 = null;

        var POW147_tree=null;
        var stream_POW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token POW");
        var stream_unaryOrNegate=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryOrNegate");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:225:2: ( unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:225:4: unaryExpression ( POW unaryOrNegate )*
            this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_powerExpression1473);
            unaryExpression146=this.unaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression146.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:225:20: ( POW unaryOrNegate )*
            loop47:
            do {
                var alt47=2;
                var LA47_0 = this.input.LA(1);

                if ( (LA47_0==POW) ) {
                    var LA47_2 = this.input.LA(2);

                    if ( (this.synpred60_Formula()) ) {
                        alt47=1;
                    }


                }


                switch (alt47) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:225:21: POW unaryOrNegate
                    POW147=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_powerExpression1476); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_POW.add(POW147);

                    this.pushFollow(FormulaParser.FOLLOW_unaryOrNegate_in_powerExpression1478);
                    unaryOrNegate148=this.unaryOrNegate();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryOrNegate.add(unaryOrNegate148.getTree());


                    break;

                default :
                    break loop47;
                }
            } while (true);



            // AST REWRITE
            // elements: unaryExpression, unaryOrNegate
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 225:43: -> ^( POWER unaryExpression ( unaryOrNegate )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:225:47: ^( POWER unaryExpression ( unaryOrNegate )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(POWER, "POWER"), root_1);

                this.adaptor.addChild(root_1, stream_unaryExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:225:71: ( unaryOrNegate )*
                while ( stream_unaryOrNegate.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_unaryOrNegate.nextTree());

                }
                stream_unaryOrNegate.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryOrNegate_return: (function() {
        FormulaParser.unaryOrNegate_return = function(){};
        org.antlr.lang.extend(FormulaParser.unaryOrNegate_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:228:1: unaryOrNegate : ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) );
    // $ANTLR start "unaryOrNegate"
    unaryOrNegate: function() {
        var retval = new FormulaParser.unaryOrNegate_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS150 = null;
         var unaryExpression149 = null;
         var unaryExpression151 = null;

        var MINUS150_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:229:2: ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) )
            var alt48=2;
            var LA48_0 = this.input.LA(1);

            if ( (LA48_0==FUNCTIONSTATEMENT||(LA48_0>=NEWSTATEMENT && LA48_0<=IDENT)||LA48_0==PRIMITIVE||(LA48_0>=NOT && LA48_0<=LARR)||LA48_0==LCURL||(LA48_0>=STRING && LA48_0<=FALSE)||LA48_0==108) ) {
                alt48=1;
            }
            else if ( (LA48_0==MINUS) ) {
                alt48=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 48, 0, this.input);

                throw nvae;
            }
            switch (alt48) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:229:4: unaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1505);
                    unaryExpression149=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression149.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:230:3: MINUS unaryExpression
                    MINUS150=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unaryOrNegate1511); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS150);

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1513);
                    unaryExpression151=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression151.getTree());


                    // AST REWRITE
                    // elements: unaryExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 230:25: -> ^( NEGATE unaryExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:230:28: ^( NEGATE unaryExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                        this.adaptor.addChild(root_1, stream_unaryExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryExpression_return: (function() {
        FormulaParser.unaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:235:1: unaryExpression : ( NOT innerPrimaryExpression | innerPrimaryExpression );
    // $ANTLR start "unaryExpression"
    unaryExpression: function() {
        var retval = new FormulaParser.unaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NOT152 = null;
         var innerPrimaryExpression153 = null;
         var innerPrimaryExpression154 = null;

        var NOT152_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:236:2: ( NOT innerPrimaryExpression | innerPrimaryExpression )
            var alt49=2;
            var LA49_0 = this.input.LA(1);

            if ( (LA49_0==NOT) ) {
                alt49=1;
            }
            else if ( (LA49_0==FUNCTIONSTATEMENT||(LA49_0>=NEWSTATEMENT && LA49_0<=IDENT)||LA49_0==PRIMITIVE||LA49_0==LARR||LA49_0==LCURL||(LA49_0>=STRING && LA49_0<=FALSE)||LA49_0==108) ) {
                alt49=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 49, 0, this.input);

                throw nvae;
            }
            switch (alt49) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:236:4: NOT innerPrimaryExpression
                    root_0 = this.adaptor.nil();

                    NOT152=this.match(this.input,NOT,FormulaParser.FOLLOW_NOT_in_unaryExpression1541); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    NOT152_tree = this.adaptor.create(NOT152);
                    root_0 = this.adaptor.becomeRoot(NOT152_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_unaryExpression1544);
                    innerPrimaryExpression153=this.innerPrimaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, innerPrimaryExpression153.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:237:8: innerPrimaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_unaryExpression1553);
                    innerPrimaryExpression154=this.innerPrimaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, innerPrimaryExpression154.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    innerPrimaryExpression_return: (function() {
        FormulaParser.innerPrimaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.innerPrimaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:242:1: innerPrimaryExpression : selectionExpression -> ^( INNER selectionExpression ) ;
    // $ANTLR start "innerPrimaryExpression"
    innerPrimaryExpression: function() {
        var retval = new FormulaParser.innerPrimaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var selectionExpression155 = null;

        var stream_selectionExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule selectionExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:243:2: ( selectionExpression -> ^( INNER selectionExpression ) )
            // /Library/WebServer/Documents/calc/Formula.g:243:4: selectionExpression
            this.pushFollow(FormulaParser.FOLLOW_selectionExpression_in_innerPrimaryExpression1584);
            selectionExpression155=this.selectionExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_selectionExpression.add(selectionExpression155.getTree());


            // AST REWRITE
            // elements: selectionExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 243:24: -> ^( INNER selectionExpression )
            {
                // /Library/WebServer/Documents/calc/Formula.g:243:27: ^( INNER selectionExpression )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(INNER, "INNER"), root_1);

                this.adaptor.addChild(root_1, stream_selectionExpression.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selectionExpression_return: (function() {
        FormulaParser.selectionExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.selectionExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:246:1: selectionExpression : primaryExpression ({...}? ( selector | funCall ) )* ;
    // $ANTLR start "selectionExpression"
    selectionExpression: function() {
        var retval = new FormulaParser.selectionExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var primaryExpression156 = null;
         var selector157 = null;
         var funCall158 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:247:2: ( primaryExpression ({...}? ( selector | funCall ) )* )
            // /Library/WebServer/Documents/calc/Formula.g:247:4: primaryExpression ({...}? ( selector | funCall ) )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_primaryExpression_in_selectionExpression1604);
            primaryExpression156=this.primaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression156.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:247:22: ({...}? ( selector | funCall ) )*
            loop51:
            do {
                var alt51=2;
                switch ( this.input.LA(1) ) {
                case LARR:
                    var LA51_2 = this.input.LA(2);

                    if ( ((this.synpred64_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                        alt51=1;
                    }


                    break;
                case LCURL:
                    var LA51_3 = this.input.LA(2);

                    if ( ((this.synpred64_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                        alt51=1;
                    }


                    break;
                case 111:
                    var LA51_4 = this.input.LA(2);

                    if ( ((this.synpred64_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                        alt51=1;
                    }


                    break;
                case 108:
                    var LA51_5 = this.input.LA(2);

                    if ( ((this.synpred64_Formula()&&( this.input.get(this.input.index()-1).getText()!=" "))) ) {
                        alt51=1;
                    }


                    break;

                }

                switch (alt51) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:247:23: {...}? ( selector | funCall )
                    if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        throw new org.antlr.runtime.FailedPredicateException(this.input, "selectionExpression", " this.input.get(this.input.index()-1).getText()!=\" \"");
                    }
                    // /Library/WebServer/Documents/calc/Formula.g:247:79: ( selector | funCall )
                    var alt50=2;
                    var LA50_0 = this.input.LA(1);

                    if ( (LA50_0==LARR||LA50_0==LCURL||LA50_0==111) ) {
                        alt50=1;
                    }
                    else if ( (LA50_0==108) ) {
                        alt50=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 50, 0, this.input);

                        throw nvae;
                    }
                    switch (alt50) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:247:80: selector
                            this.pushFollow(FormulaParser.FOLLOW_selector_in_selectionExpression1610);
                            selector157=this.selector();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector157.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:247:89: funCall
                            this.pushFollow(FormulaParser.FOLLOW_funCall_in_selectionExpression1612);
                            funCall158=this.funCall();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, funCall158.getTree());


                            break;

                    }



                    break;

                default :
                    break loop51;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    funCall_return: (function() {
        FormulaParser.funCall_return = function(){};
        org.antlr.lang.extend(FormulaParser.funCall_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:250:1: funCall : '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL ( logicalExpression )* ) ;
    // $ANTLR start "funCall"
    funCall: function() {
        var retval = new FormulaParser.funCall_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal159 = null;
        var char_literal161 = null;
        var char_literal163 = null;
         var logicalExpression160 = null;
         var logicalExpression162 = null;

        var char_literal159_tree=null;
        var char_literal161_tree=null;
        var char_literal163_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:250:9: ( '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL ( logicalExpression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:251:2: '(' ( logicalExpression ( ',' logicalExpression )* )? ')'
            char_literal159=this.match(this.input,108,FormulaParser.FOLLOW_108_in_funCall1627); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_108.add(char_literal159);

            // /Library/WebServer/Documents/calc/Formula.g:251:6: ( logicalExpression ( ',' logicalExpression )* )?
            var alt53=2;
            var LA53_0 = this.input.LA(1);

            if ( (LA53_0==FUNCTIONSTATEMENT||(LA53_0>=NEWSTATEMENT && LA53_0<=IDENT)||LA53_0==PRIMITIVE||LA53_0==MINUS||(LA53_0>=NOT && LA53_0<=LARR)||LA53_0==LCURL||(LA53_0>=STRING && LA53_0<=FALSE)||LA53_0==108) ) {
                alt53=1;
            }
            switch (alt53) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:251:8: logicalExpression ( ',' logicalExpression )*
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funCall1631);
                    logicalExpression160=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression160.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:251:26: ( ',' logicalExpression )*
                    loop52:
                    do {
                        var alt52=2;
                        var LA52_0 = this.input.LA(1);

                        if ( (LA52_0==COMMA) ) {
                            alt52=1;
                        }


                        switch (alt52) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:251:27: ',' logicalExpression
                            char_literal161=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_funCall1634); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal161);

                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funCall1636);
                            logicalExpression162=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression162.getTree());


                            break;

                        default :
                            break loop52;
                        }
                    } while (true);



                    break;

            }

            char_literal163=this.match(this.input,109,FormulaParser.FOLLOW_109_in_funCall1643); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_109.add(char_literal163);



            // AST REWRITE
            // elements: logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 251:58: -> ^( FUNCALL ( logicalExpression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:251:61: ^( FUNCALL ( logicalExpression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCALL, "FUNCALL"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:251:71: ( logicalExpression )*
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primaryExpression_return: (function() {
        FormulaParser.primaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.primaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:254:1: primaryExpression : ( '(' logicalExpression ')' | value );
    // $ANTLR start "primaryExpression"
    primaryExpression: function() {
        var retval = new FormulaParser.primaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal164 = null;
        var char_literal166 = null;
         var logicalExpression165 = null;
         var value167 = null;

        var char_literal164_tree=null;
        var char_literal166_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:255:2: ( '(' logicalExpression ')' | value )
            var alt54=2;
            var LA54_0 = this.input.LA(1);

            if ( (LA54_0==108) ) {
                alt54=1;
            }
            else if ( (LA54_0==FUNCTIONSTATEMENT||(LA54_0>=NEWSTATEMENT && LA54_0<=IDENT)||LA54_0==PRIMITIVE||LA54_0==LARR||LA54_0==LCURL||(LA54_0>=STRING && LA54_0<=FALSE)) ) {
                alt54=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 54, 0, this.input);

                throw nvae;
            }
            switch (alt54) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:255:4: '(' logicalExpression ')'
                    root_0 = this.adaptor.nil();

                    char_literal164=this.match(this.input,108,FormulaParser.FOLLOW_108_in_primaryExpression1664); if (this.state.failed) return retval;
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_primaryExpression1667);
                    logicalExpression165=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression165.getTree());
                    char_literal166=this.match(this.input,109,FormulaParser.FOLLOW_109_in_primaryExpression1669); if (this.state.failed) return retval;


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:256:4: value
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_value_in_primaryExpression1675);
                    value167=this.value();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, value167.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    value_return: (function() {
        FormulaParser.value_return = function(){};
        org.antlr.lang.extend(FormulaParser.value_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:259:1: value : ( number | bool | string | material | IDENT | primitive | array | anonFunctionDef | newObject );
    // $ANTLR start "value"
    value: function() {
        var retval = new FormulaParser.value_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT172 = null;
         var number168 = null;
         var bool169 = null;
         var string170 = null;
         var material171 = null;
         var primitive173 = null;
         var array174 = null;
         var anonFunctionDef175 = null;
         var newObject176 = null;

        var IDENT172_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:260:2: ( number | bool | string | material | IDENT | primitive | array | anonFunctionDef | newObject )
            var alt55=9;
            alt55 = this.dfa55.predict(this.input);
            switch (alt55) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:260:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_value1689);
                    number168=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number168.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:261:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_value1695);
                    bool169=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool169.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:262:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_value1701);
                    string170=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string170.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:263:5: material
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_material_in_value1707);
                    material171=this.material();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, material171.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:264:4: IDENT
                    root_0 = this.adaptor.nil();

                    IDENT172=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_value1712); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENT172_tree = this.adaptor.create(IDENT172);
                    this.adaptor.addChild(root_0, IDENT172_tree);
                    }


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:265:4: primitive
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_primitive_in_value1717);
                    primitive173=this.primitive();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primitive173.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:266:4: array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_array_in_value1722);
                    array174=this.array();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, array174.getTree());


                    break;
                case 8 :
                    // /Library/WebServer/Documents/calc/Formula.g:267:4: anonFunctionDef
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_anonFunctionDef_in_value1727);
                    anonFunctionDef175=this.anonFunctionDef();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, anonFunctionDef175.getTree());


                    break;
                case 9 :
                    // /Library/WebServer/Documents/calc/Formula.g:268:4: newObject
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_newObject_in_value1732);
                    newObject176=this.newObject();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, newObject176.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    newObject_return: (function() {
        FormulaParser.newObject_return = function(){};
        org.antlr.lang.extend(FormulaParser.newObject_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:271:1: newObject : NEWSTATEMENT IDENT ( funCall )? -> ^( NEW IDENT ( funCall )? ) ;
    // $ANTLR start "newObject"
    newObject: function() {
        var retval = new FormulaParser.newObject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWSTATEMENT177 = null;
        var IDENT178 = null;
         var funCall179 = null;

        var NEWSTATEMENT177_tree=null;
        var IDENT178_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_NEWSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWSTATEMENT");
        var stream_funCall=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule funCall");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:272:1: ( NEWSTATEMENT IDENT ( funCall )? -> ^( NEW IDENT ( funCall )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:272:3: NEWSTATEMENT IDENT ( funCall )?
            NEWSTATEMENT177=this.match(this.input,NEWSTATEMENT,FormulaParser.FOLLOW_NEWSTATEMENT_in_newObject1742); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_NEWSTATEMENT.add(NEWSTATEMENT177);

            IDENT178=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_newObject1744); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT178);

            // /Library/WebServer/Documents/calc/Formula.g:272:22: ( funCall )?
            var alt56=2;
            alt56 = this.dfa56.predict(this.input);
            switch (alt56) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: funCall
                    this.pushFollow(FormulaParser.FOLLOW_funCall_in_newObject1746);
                    funCall179=this.funCall();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_funCall.add(funCall179.getTree());


                    break;

            }



            // AST REWRITE
            // elements: funCall, IDENT
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 272:31: -> ^( NEW IDENT ( funCall )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:272:34: ^( NEW IDENT ( funCall )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEW, "NEW"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:272:46: ( funCall )?
                if ( stream_funCall.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_funCall.nextTree());

                }
                stream_funCall.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    defaultValue_return: (function() {
        FormulaParser.defaultValue_return = function(){};
        org.antlr.lang.extend(FormulaParser.defaultValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:275:1: defaultValue : ( negnumber | number | bool | string | array );
    // $ANTLR start "defaultValue"
    defaultValue: function() {
        var retval = new FormulaParser.defaultValue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var negnumber180 = null;
         var number181 = null;
         var bool182 = null;
         var string183 = null;
         var array184 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:276:2: ( negnumber | number | bool | string | array )
            var alt57=5;
            switch ( this.input.LA(1) ) {
            case MINUS:
                alt57=1;
                break;
            case INTEGER:
            case FLOAT:
                alt57=2;
                break;
            case TRUE:
            case FALSE:
                alt57=3;
                break;
            case STRING:
                alt57=4;
                break;
            case LARR:
            case LCURL:
                alt57=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 57, 0, this.input);

                throw nvae;
            }

            switch (alt57) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:276:5: negnumber
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_negnumber_in_defaultValue1772);
                    negnumber180=this.negnumber();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, negnumber180.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:277:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_defaultValue1778);
                    number181=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number181.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:278:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_defaultValue1784);
                    bool182=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool182.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:279:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_defaultValue1790);
                    string183=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string183.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:280:5: array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_array_in_defaultValue1796);
                    array184=this.array();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, array184.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    array_return: (function() {
        FormulaParser.array_return = function(){};
        org.antlr.lang.extend(FormulaParser.array_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:283:1: array : ( LARR ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RARR -> ^( ARRAY ( label )* ) | LCURL ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RCURL -> ^( ARRAY ( label )* ) );
    // $ANTLR start "array"
    array: function() {
        var retval = new FormulaParser.array_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LARR185 = null;
        var NEWLINE186 = null;
        var NEWLINE188 = null;
        var char_literal189 = null;
        var NEWLINE190 = null;
        var NEWLINE192 = null;
        var NEWLINE193 = null;
        var RARR194 = null;
        var LCURL195 = null;
        var NEWLINE196 = null;
        var NEWLINE198 = null;
        var char_literal199 = null;
        var NEWLINE200 = null;
        var NEWLINE202 = null;
        var NEWLINE203 = null;
        var RCURL204 = null;
         var label187 = null;
         var label191 = null;
         var label197 = null;
         var label201 = null;

        var LARR185_tree=null;
        var NEWLINE186_tree=null;
        var NEWLINE188_tree=null;
        var char_literal189_tree=null;
        var NEWLINE190_tree=null;
        var NEWLINE192_tree=null;
        var NEWLINE193_tree=null;
        var RARR194_tree=null;
        var LCURL195_tree=null;
        var NEWLINE196_tree=null;
        var NEWLINE198_tree=null;
        var char_literal199_tree=null;
        var NEWLINE200_tree=null;
        var NEWLINE202_tree=null;
        var NEWLINE203_tree=null;
        var RCURL204_tree=null;
        var stream_LCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LCURL");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_RARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RARR");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_LARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LARR");
        var stream_RCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RCURL");
        var stream_label=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule label");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:284:2: ( LARR ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RARR -> ^( ARRAY ( label )* ) | LCURL ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RCURL -> ^( ARRAY ( label )* ) )
            var alt72=2;
            var LA72_0 = this.input.LA(1);

            if ( (LA72_0==LARR) ) {
                alt72=1;
            }
            else if ( (LA72_0==LCURL) ) {
                alt72=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 72, 0, this.input);

                throw nvae;
            }
            switch (alt72) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:285:2: LARR ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RARR
                    LARR185=this.match(this.input,LARR,FormulaParser.FOLLOW_LARR_in_array1810); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_LARR.add(LARR185);

                    // /Library/WebServer/Documents/calc/Formula.g:285:7: ( NEWLINE )*
                    loop58:
                    do {
                        var alt58=2;
                        var LA58_0 = this.input.LA(1);

                        if ( (LA58_0==NEWLINE) ) {
                            var LA58_2 = this.input.LA(2);

                            if ( (this.synpred81_Formula()) ) {
                                alt58=1;
                            }


                        }


                        switch (alt58) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE186=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1812); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE186);



                            break;

                        default :
                            break loop58;
                        }
                    } while (true);

                    // /Library/WebServer/Documents/calc/Formula.g:285:16: ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )?
                    var alt63=2;
                    alt63 = this.dfa63.predict(this.input);
                    switch (alt63) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:285:17: label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )*
                            this.pushFollow(FormulaParser.FOLLOW_label_in_array1816);
                            label187=this.label();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_label.add(label187.getTree());
                            // /Library/WebServer/Documents/calc/Formula.g:285:23: ( NEWLINE )*
                            loop59:
                            do {
                                var alt59=2;
                                var LA59_0 = this.input.LA(1);

                                if ( (LA59_0==NEWLINE) ) {
                                    var LA59_2 = this.input.LA(2);

                                    if ( (this.synpred82_Formula()) ) {
                                        alt59=1;
                                    }


                                }


                                switch (alt59) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                    NEWLINE188=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1818); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE188);



                                    break;

                                default :
                                    break loop59;
                                }
                            } while (true);

                            // /Library/WebServer/Documents/calc/Formula.g:285:32: ( ',' ( NEWLINE )* label ( NEWLINE )* )*
                            loop62:
                            do {
                                var alt62=2;
                                var LA62_0 = this.input.LA(1);

                                if ( (LA62_0==COMMA) ) {
                                    alt62=1;
                                }


                                switch (alt62) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:285:33: ',' ( NEWLINE )* label ( NEWLINE )*
                                    char_literal189=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_array1822); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal189);

                                    // /Library/WebServer/Documents/calc/Formula.g:285:37: ( NEWLINE )*
                                    loop60:
                                    do {
                                        var alt60=2;
                                        var LA60_0 = this.input.LA(1);

                                        if ( (LA60_0==NEWLINE) ) {
                                            var LA60_2 = this.input.LA(2);

                                            if ( (this.synpred83_Formula()) ) {
                                                alt60=1;
                                            }


                                        }


                                        switch (alt60) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                            NEWLINE190=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1824); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE190);



                                            break;

                                        default :
                                            break loop60;
                                        }
                                    } while (true);

                                    this.pushFollow(FormulaParser.FOLLOW_label_in_array1827);
                                    label191=this.label();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_label.add(label191.getTree());
                                    // /Library/WebServer/Documents/calc/Formula.g:285:52: ( NEWLINE )*
                                    loop61:
                                    do {
                                        var alt61=2;
                                        var LA61_0 = this.input.LA(1);

                                        if ( (LA61_0==NEWLINE) ) {
                                            var LA61_1 = this.input.LA(2);

                                            if ( (this.synpred84_Formula()) ) {
                                                alt61=1;
                                            }


                                        }


                                        switch (alt61) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                            NEWLINE192=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1829); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE192);



                                            break;

                                        default :
                                            break loop61;
                                        }
                                    } while (true);



                                    break;

                                default :
                                    break loop62;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:285:65: ( NEWLINE )*
                    loop64:
                    do {
                        var alt64=2;
                        var LA64_0 = this.input.LA(1);

                        if ( (LA64_0==NEWLINE) ) {
                            alt64=1;
                        }


                        switch (alt64) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE193=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1836); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE193);



                            break;

                        default :
                            break loop64;
                        }
                    } while (true);

                    RARR194=this.match(this.input,RARR,FormulaParser.FOLLOW_RARR_in_array1839); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_RARR.add(RARR194);



                    // AST REWRITE
                    // elements: label
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 285:79: -> ^( ARRAY ( label )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:285:82: ^( ARRAY ( label )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAY, "ARRAY"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:285:90: ( label )*
                        while ( stream_label.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_label.nextTree());

                        }
                        stream_label.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:286:4: LCURL ( NEWLINE )* ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )? ( NEWLINE )* RCURL
                    LCURL195=this.match(this.input,LCURL,FormulaParser.FOLLOW_LCURL_in_array1853); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_LCURL.add(LCURL195);

                    // /Library/WebServer/Documents/calc/Formula.g:286:10: ( NEWLINE )*
                    loop65:
                    do {
                        var alt65=2;
                        var LA65_0 = this.input.LA(1);

                        if ( (LA65_0==NEWLINE) ) {
                            var LA65_2 = this.input.LA(2);

                            if ( (this.synpred89_Formula()) ) {
                                alt65=1;
                            }


                        }


                        switch (alt65) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE196=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1855); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE196);



                            break;

                        default :
                            break loop65;
                        }
                    } while (true);

                    // /Library/WebServer/Documents/calc/Formula.g:286:19: ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )?
                    var alt70=2;
                    alt70 = this.dfa70.predict(this.input);
                    switch (alt70) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:286:20: label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )*
                            this.pushFollow(FormulaParser.FOLLOW_label_in_array1859);
                            label197=this.label();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_label.add(label197.getTree());
                            // /Library/WebServer/Documents/calc/Formula.g:286:26: ( NEWLINE )*
                            loop66:
                            do {
                                var alt66=2;
                                var LA66_0 = this.input.LA(1);

                                if ( (LA66_0==NEWLINE) ) {
                                    var LA66_2 = this.input.LA(2);

                                    if ( (this.synpred90_Formula()) ) {
                                        alt66=1;
                                    }


                                }


                                switch (alt66) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                    NEWLINE198=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1861); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE198);



                                    break;

                                default :
                                    break loop66;
                                }
                            } while (true);

                            // /Library/WebServer/Documents/calc/Formula.g:286:34: ( ',' ( NEWLINE )* label ( NEWLINE )* )*
                            loop69:
                            do {
                                var alt69=2;
                                var LA69_0 = this.input.LA(1);

                                if ( (LA69_0==COMMA) ) {
                                    alt69=1;
                                }


                                switch (alt69) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:286:35: ',' ( NEWLINE )* label ( NEWLINE )*
                                    char_literal199=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_array1864); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal199);

                                    // /Library/WebServer/Documents/calc/Formula.g:286:39: ( NEWLINE )*
                                    loop67:
                                    do {
                                        var alt67=2;
                                        var LA67_0 = this.input.LA(1);

                                        if ( (LA67_0==NEWLINE) ) {
                                            var LA67_2 = this.input.LA(2);

                                            if ( (this.synpred91_Formula()) ) {
                                                alt67=1;
                                            }


                                        }


                                        switch (alt67) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                            NEWLINE200=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1866); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE200);



                                            break;

                                        default :
                                            break loop67;
                                        }
                                    } while (true);

                                    this.pushFollow(FormulaParser.FOLLOW_label_in_array1869);
                                    label201=this.label();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_label.add(label201.getTree());
                                    // /Library/WebServer/Documents/calc/Formula.g:286:54: ( NEWLINE )*
                                    loop68:
                                    do {
                                        var alt68=2;
                                        var LA68_0 = this.input.LA(1);

                                        if ( (LA68_0==NEWLINE) ) {
                                            var LA68_1 = this.input.LA(2);

                                            if ( (this.synpred92_Formula()) ) {
                                                alt68=1;
                                            }


                                        }


                                        switch (alt68) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                                            NEWLINE202=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1871); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE202);



                                            break;

                                        default :
                                            break loop68;
                                        }
                                    } while (true);



                                    break;

                                default :
                                    break loop69;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:286:67: ( NEWLINE )*
                    loop71:
                    do {
                        var alt71=2;
                        var LA71_0 = this.input.LA(1);

                        if ( (LA71_0==NEWLINE) ) {
                            alt71=1;
                        }


                        switch (alt71) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE203=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_array1878); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE203);



                            break;

                        default :
                            break loop71;
                        }
                    } while (true);

                    RCURL204=this.match(this.input,RCURL,FormulaParser.FOLLOW_RCURL_in_array1881); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_RCURL.add(RCURL204);



                    // AST REWRITE
                    // elements: label
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 286:82: -> ^( ARRAY ( label )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:286:85: ^( ARRAY ( label )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAY, "ARRAY"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:286:93: ( label )*
                        while ( stream_label.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_label.nextTree());

                        }
                        stream_label.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selector_return: (function() {
        FormulaParser.selector_return = function(){};
        org.antlr.lang.extend(FormulaParser.selector_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:289:1: selector : ( minarray | dotselector ) -> ^( SELECTOR ( minarray )? ( dotselector )? ) ;
    // $ANTLR start "selector"
    selector: function() {
        var retval = new FormulaParser.selector_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var minarray205 = null;
         var dotselector206 = null;

        var stream_dotselector=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule dotselector");
        var stream_minarray=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule minarray");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:290:2: ( ( minarray | dotselector ) -> ^( SELECTOR ( minarray )? ( dotselector )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:290:4: ( minarray | dotselector )
            // /Library/WebServer/Documents/calc/Formula.g:290:4: ( minarray | dotselector )
            var alt73=2;
            var LA73_0 = this.input.LA(1);

            if ( (LA73_0==LARR||LA73_0==LCURL) ) {
                alt73=1;
            }
            else if ( (LA73_0==111) ) {
                alt73=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 73, 0, this.input);

                throw nvae;
            }
            switch (alt73) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:290:5: minarray
                    this.pushFollow(FormulaParser.FOLLOW_minarray_in_selector1902);
                    minarray205=this.minarray();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_minarray.add(minarray205.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:290:16: dotselector
                    this.pushFollow(FormulaParser.FOLLOW_dotselector_in_selector1906);
                    dotselector206=this.dotselector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_dotselector.add(dotselector206.getTree());


                    break;

            }



            // AST REWRITE
            // elements: minarray, dotselector
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 290:29: -> ^( SELECTOR ( minarray )? ( dotselector )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:290:32: ^( SELECTOR ( minarray )? ( dotselector )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(SELECTOR, "SELECTOR"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:290:43: ( minarray )?
                if ( stream_minarray.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_minarray.nextTree());

                }
                stream_minarray.reset();
                // /Library/WebServer/Documents/calc/Formula.g:290:53: ( dotselector )?
                if ( stream_dotselector.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_dotselector.nextTree());

                }
                stream_dotselector.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    minarray_return: (function() {
        FormulaParser.minarray_return = function(){};
        org.antlr.lang.extend(FormulaParser.minarray_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:293:1: minarray : ( LARR ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RARR | LCURL ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RCURL );
    // $ANTLR start "minarray"
    minarray: function() {
        var retval = new FormulaParser.minarray_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LARR207 = null;
        var MULT209 = null;
        var COMMA210 = null;
        var MULT212 = null;
        var RARR213 = null;
        var LCURL214 = null;
        var MULT216 = null;
        var COMMA217 = null;
        var MULT219 = null;
        var RCURL220 = null;
         var logicalExpression208 = null;
         var logicalExpression211 = null;
         var logicalExpression215 = null;
         var logicalExpression218 = null;

        var LARR207_tree=null;
        var MULT209_tree=null;
        var COMMA210_tree=null;
        var MULT212_tree=null;
        var RARR213_tree=null;
        var LCURL214_tree=null;
        var MULT216_tree=null;
        var COMMA217_tree=null;
        var MULT219_tree=null;
        var RCURL220_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:294:2: ( LARR ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RARR | LCURL ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RCURL )
            var alt80=2;
            var LA80_0 = this.input.LA(1);

            if ( (LA80_0==LARR) ) {
                alt80=1;
            }
            else if ( (LA80_0==LCURL) ) {
                alt80=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 80, 0, this.input);

                throw nvae;
            }
            switch (alt80) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:295:2: LARR ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RARR
                    root_0 = this.adaptor.nil();

                    LARR207=this.match(this.input,LARR,FormulaParser.FOLLOW_LARR_in_minarray1933); if (this.state.failed) return retval;
                    // /Library/WebServer/Documents/calc/Formula.g:295:9: ( logicalExpression | MULT )
                    var alt74=2;
                    var LA74_0 = this.input.LA(1);

                    if ( (LA74_0==FUNCTIONSTATEMENT||(LA74_0>=NEWSTATEMENT && LA74_0<=IDENT)||LA74_0==PRIMITIVE||LA74_0==MINUS||(LA74_0>=NOT && LA74_0<=LARR)||LA74_0==LCURL||(LA74_0>=STRING && LA74_0<=FALSE)||LA74_0==108) ) {
                        alt74=1;
                    }
                    else if ( (LA74_0==MULT) ) {
                        alt74=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 74, 0, this.input);

                        throw nvae;
                    }
                    switch (alt74) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:295:10: logicalExpression
                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1938);
                            logicalExpression208=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression208.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:295:28: MULT
                            MULT209=this.match(this.input,MULT,FormulaParser.FOLLOW_MULT_in_minarray1940); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            MULT209_tree = this.adaptor.create(MULT209);
                            this.adaptor.addChild(root_0, MULT209_tree);
                            }


                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:295:34: ( COMMA ( logicalExpression | MULT ) )*
                    loop76:
                    do {
                        var alt76=2;
                        var LA76_0 = this.input.LA(1);

                        if ( (LA76_0==COMMA) ) {
                            alt76=1;
                        }


                        switch (alt76) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:295:35: COMMA ( logicalExpression | MULT )
                            COMMA210=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_minarray1944); if (this.state.failed) return retval;
                            // /Library/WebServer/Documents/calc/Formula.g:295:42: ( logicalExpression | MULT )
                            var alt75=2;
                            var LA75_0 = this.input.LA(1);

                            if ( (LA75_0==FUNCTIONSTATEMENT||(LA75_0>=NEWSTATEMENT && LA75_0<=IDENT)||LA75_0==PRIMITIVE||LA75_0==MINUS||(LA75_0>=NOT && LA75_0<=LARR)||LA75_0==LCURL||(LA75_0>=STRING && LA75_0<=FALSE)||LA75_0==108) ) {
                                alt75=1;
                            }
                            else if ( (LA75_0==MULT) ) {
                                alt75=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 75, 0, this.input);

                                throw nvae;
                            }
                            switch (alt75) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:295:43: logicalExpression
                                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1948);
                                    logicalExpression211=this.logicalExpression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression211.getTree());


                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:295:61: MULT
                                    MULT212=this.match(this.input,MULT,FormulaParser.FOLLOW_MULT_in_minarray1950); if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) {
                                    MULT212_tree = this.adaptor.create(MULT212);
                                    this.adaptor.addChild(root_0, MULT212_tree);
                                    }


                                    break;

                            }



                            break;

                        default :
                            break loop76;
                        }
                    } while (true);

                    RARR213=this.match(this.input,RARR,FormulaParser.FOLLOW_RARR_in_minarray1957); if (this.state.failed) return retval;


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:296:4: LCURL ( logicalExpression | MULT ) ( COMMA ( logicalExpression | MULT ) )* RCURL
                    root_0 = this.adaptor.nil();

                    LCURL214=this.match(this.input,LCURL,FormulaParser.FOLLOW_LCURL_in_minarray1963); if (this.state.failed) return retval;
                    // /Library/WebServer/Documents/calc/Formula.g:296:12: ( logicalExpression | MULT )
                    var alt77=2;
                    var LA77_0 = this.input.LA(1);

                    if ( (LA77_0==FUNCTIONSTATEMENT||(LA77_0>=NEWSTATEMENT && LA77_0<=IDENT)||LA77_0==PRIMITIVE||LA77_0==MINUS||(LA77_0>=NOT && LA77_0<=LARR)||LA77_0==LCURL||(LA77_0>=STRING && LA77_0<=FALSE)||LA77_0==108) ) {
                        alt77=1;
                    }
                    else if ( (LA77_0==MULT) ) {
                        alt77=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 77, 0, this.input);

                        throw nvae;
                    }
                    switch (alt77) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:296:13: logicalExpression
                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1968);
                            logicalExpression215=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression215.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:296:31: MULT
                            MULT216=this.match(this.input,MULT,FormulaParser.FOLLOW_MULT_in_minarray1970); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            MULT216_tree = this.adaptor.create(MULT216);
                            this.adaptor.addChild(root_0, MULT216_tree);
                            }


                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:296:37: ( COMMA ( logicalExpression | MULT ) )*
                    loop79:
                    do {
                        var alt79=2;
                        var LA79_0 = this.input.LA(1);

                        if ( (LA79_0==COMMA) ) {
                            alt79=1;
                        }


                        switch (alt79) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:296:38: COMMA ( logicalExpression | MULT )
                            COMMA217=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_minarray1974); if (this.state.failed) return retval;
                            // /Library/WebServer/Documents/calc/Formula.g:296:45: ( logicalExpression | MULT )
                            var alt78=2;
                            var LA78_0 = this.input.LA(1);

                            if ( (LA78_0==FUNCTIONSTATEMENT||(LA78_0>=NEWSTATEMENT && LA78_0<=IDENT)||LA78_0==PRIMITIVE||LA78_0==MINUS||(LA78_0>=NOT && LA78_0<=LARR)||LA78_0==LCURL||(LA78_0>=STRING && LA78_0<=FALSE)||LA78_0==108) ) {
                                alt78=1;
                            }
                            else if ( (LA78_0==MULT) ) {
                                alt78=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 78, 0, this.input);

                                throw nvae;
                            }
                            switch (alt78) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:296:46: logicalExpression
                                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1978);
                                    logicalExpression218=this.logicalExpression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression218.getTree());


                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:296:64: MULT
                                    MULT219=this.match(this.input,MULT,FormulaParser.FOLLOW_MULT_in_minarray1980); if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) {
                                    MULT219_tree = this.adaptor.create(MULT219);
                                    this.adaptor.addChild(root_0, MULT219_tree);
                                    }


                                    break;

                            }



                            break;

                        default :
                            break loop79;
                        }
                    } while (true);

                    RCURL220=this.match(this.input,RCURL,FormulaParser.FOLLOW_RCURL_in_minarray1987); if (this.state.failed) return retval;


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    dotselector_return: (function() {
        FormulaParser.dotselector_return = function(){};
        org.antlr.lang.extend(FormulaParser.dotselector_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:298:1: dotselector : ( '.' arrayName )+ -> ^( DOTSELECTOR ( arrayName )+ ) ;
    // $ANTLR start "dotselector"
    dotselector: function() {
        var retval = new FormulaParser.dotselector_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal221 = null;
         var arrayName222 = null;

        var char_literal221_tree=null;
        var stream_111=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 111");
        var stream_arrayName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule arrayName");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:299:2: ( ( '.' arrayName )+ -> ^( DOTSELECTOR ( arrayName )+ ) )
            // /Library/WebServer/Documents/calc/Formula.g:299:4: ( '.' arrayName )+
            // /Library/WebServer/Documents/calc/Formula.g:299:4: ( '.' arrayName )+
            var cnt81=0;
            loop81:
            do {
                var alt81=2;
                var LA81_0 = this.input.LA(1);

                if ( (LA81_0==111) ) {
                    var LA81_2 = this.input.LA(2);

                    if ( (this.synpred104_Formula()) ) {
                        alt81=1;
                    }


                }


                switch (alt81) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:299:5: '.' arrayName
                    char_literal221=this.match(this.input,111,FormulaParser.FOLLOW_111_in_dotselector1999); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_111.add(char_literal221);

                    this.pushFollow(FormulaParser.FOLLOW_arrayName_in_dotselector2001);
                    arrayName222=this.arrayName();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_arrayName.add(arrayName222.getTree());


                    break;

                default :
                    if ( cnt81 >= 1 ) {
                        break loop81;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(81, this.input);
                        throw eee;
                }
                cnt81++;
            } while (true);



            // AST REWRITE
            // elements: arrayName
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 299:21: -> ^( DOTSELECTOR ( arrayName )+ )
            {
                // /Library/WebServer/Documents/calc/Formula.g:299:24: ^( DOTSELECTOR ( arrayName )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(DOTSELECTOR, "DOTSELECTOR"), root_1);

                if ( !(stream_arrayName.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_arrayName.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_arrayName.nextTree());

                }
                stream_arrayName.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    arrayName_return: (function() {
        FormulaParser.arrayName_return = function(){};
        org.antlr.lang.extend(FormulaParser.arrayName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:302:1: arrayName : ( IDENT | STRING | MULT );
    // $ANTLR start "arrayName"
    arrayName: function() {
        var retval = new FormulaParser.arrayName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set223 = null;

        var set223_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:303:2: ( IDENT | STRING | MULT )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set223=this.input.LT(1);
            if ( this.input.LA(1)==IDENT||this.input.LA(1)==MULT||this.input.LA(1)==STRING ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set223));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    label_return: (function() {
        FormulaParser.label_return = function(){};
        org.antlr.lang.extend(FormulaParser.label_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:306:1: label : ( arrayName ( NEWLINE )* COLON )? ( NEWLINE )* logicalExpression -> ^( LABEL logicalExpression ( arrayName )? ) ;
    // $ANTLR start "label"
    label: function() {
        var retval = new FormulaParser.label_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWLINE225 = null;
        var COLON226 = null;
        var NEWLINE227 = null;
         var arrayName224 = null;
         var logicalExpression228 = null;

        var NEWLINE225_tree=null;
        var COLON226_tree=null;
        var NEWLINE227_tree=null;
        var stream_COLON=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COLON");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_arrayName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule arrayName");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:306:7: ( ( arrayName ( NEWLINE )* COLON )? ( NEWLINE )* logicalExpression -> ^( LABEL logicalExpression ( arrayName )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:307:2: ( arrayName ( NEWLINE )* COLON )? ( NEWLINE )* logicalExpression
            // /Library/WebServer/Documents/calc/Formula.g:307:2: ( arrayName ( NEWLINE )* COLON )?
            var alt83=2;
            alt83 = this.dfa83.predict(this.input);
            switch (alt83) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:307:3: arrayName ( NEWLINE )* COLON
                    this.pushFollow(FormulaParser.FOLLOW_arrayName_in_label2039);
                    arrayName224=this.arrayName();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_arrayName.add(arrayName224.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:307:13: ( NEWLINE )*
                    loop82:
                    do {
                        var alt82=2;
                        var LA82_0 = this.input.LA(1);

                        if ( (LA82_0==NEWLINE) ) {
                            alt82=1;
                        }


                        switch (alt82) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                            NEWLINE225=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_label2041); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE225);



                            break;

                        default :
                            break loop82;
                        }
                    } while (true);

                    COLON226=this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_label2044); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_COLON.add(COLON226);



                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:307:30: ( NEWLINE )*
            loop84:
            do {
                var alt84=2;
                var LA84_0 = this.input.LA(1);

                if ( (LA84_0==NEWLINE) ) {
                    alt84=1;
                }


                switch (alt84) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                    NEWLINE227=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_label2048); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE227);



                    break;

                default :
                    break loop84;
                }
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_label2051);
            logicalExpression228=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression228.getTree());


            // AST REWRITE
            // elements: arrayName, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 307:57: -> ^( LABEL logicalExpression ( arrayName )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:307:60: ^( LABEL logicalExpression ( arrayName )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LABEL, "LABEL"), root_1);

                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:307:86: ( arrayName )?
                if ( stream_arrayName.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_arrayName.nextTree());

                }
                stream_arrayName.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    number_return: (function() {
        FormulaParser.number_return = function(){};
        org.antlr.lang.extend(FormulaParser.number_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:318:1: number : ( INTEGER | FLOAT );
    // $ANTLR start "number"
    number: function() {
        var retval = new FormulaParser.number_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set229 = null;

        var set229_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:318:8: ( INTEGER | FLOAT )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set229=this.input.LT(1);
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set229));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    negnumber_return: (function() {
        FormulaParser.negnumber_return = function(){};
        org.antlr.lang.extend(FormulaParser.negnumber_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:320:1: negnumber : '-' number -> ^( NEGATE number ) ;
    // $ANTLR start "negnumber"
    negnumber: function() {
        var retval = new FormulaParser.negnumber_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal230 = null;
         var number231 = null;

        var char_literal230_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_number=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule number");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:320:11: ( '-' number -> ^( NEGATE number ) )
            // /Library/WebServer/Documents/calc/Formula.g:320:13: '-' number
            char_literal230=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negnumber2127); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_MINUS.add(char_literal230);

            this.pushFollow(FormulaParser.FOLLOW_number_in_negnumber2129);
            number231=this.number();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_number.add(number231.getTree());


            // AST REWRITE
            // elements: number
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 320:24: -> ^( NEGATE number )
            {
                // /Library/WebServer/Documents/calc/Formula.g:320:27: ^( NEGATE number )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                this.adaptor.addChild(root_1, stream_number.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    bool_return: (function() {
        FormulaParser.bool_return = function(){};
        org.antlr.lang.extend(FormulaParser.bool_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:330:1: bool : ( TRUE | FALSE );
    // $ANTLR start "bool"
    bool: function() {
        var retval = new FormulaParser.bool_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set232 = null;

        var set232_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:331:2: ( TRUE | FALSE )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set232=this.input.LT(1);
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set232));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    material_return: (function() {
        FormulaParser.material_return = function(){};
        org.antlr.lang.extend(FormulaParser.material_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:343:1: material : LCURL additiveExpression {...}? unitMultiplicativeExpression RCURL -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) ;
    // $ANTLR start "material"
    material: function() {
        var retval = new FormulaParser.material_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LCURL233 = null;
        var RCURL236 = null;
         var additiveExpression234 = null;
         var unitMultiplicativeExpression235 = null;

        var LCURL233_tree=null;
        var RCURL236_tree=null;
        var stream_LCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LCURL");
        var stream_RCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RCURL");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        var stream_additiveExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule additiveExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:343:9: ( LCURL additiveExpression {...}? unitMultiplicativeExpression RCURL -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) )
            // /Library/WebServer/Documents/calc/Formula.g:343:12: LCURL additiveExpression {...}? unitMultiplicativeExpression RCURL
            LCURL233=this.match(this.input,LCURL,FormulaParser.FOLLOW_LCURL_in_material2281); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LCURL.add(LCURL233);

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_material2283);
            additiveExpression234=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_additiveExpression.add(additiveExpression234.getTree());
            if ( !(( this.input.get(this.input.index()-1).getText()==" ")) ) {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                throw new org.antlr.runtime.FailedPredicateException(this.input, "material", " this.input.get(this.input.index()-1).getText()==\" \"");
            }
            this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_material2287);
            unitMultiplicativeExpression235=this.unitMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression235.getTree());
            RCURL236=this.match(this.input,RCURL,FormulaParser.FOLLOW_RCURL_in_material2289); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_RCURL.add(RCURL236);



            // AST REWRITE
            // elements: additiveExpression, unitMultiplicativeExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 343:128: -> ^( MATERIAL unitMultiplicativeExpression additiveExpression )
            {
                // /Library/WebServer/Documents/calc/Formula.g:343:131: ^( MATERIAL unitMultiplicativeExpression additiveExpression )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(MATERIAL, "MATERIAL"), root_1);

                this.adaptor.addChild(root_1, stream_unitMultiplicativeExpression.nextTree());
                this.adaptor.addChild(root_1, stream_additiveExpression.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitMultiplicativeExpression_return: (function() {
        FormulaParser.unitMultiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitMultiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:350:1: unitMultiplicativeExpression : unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* ;
    // $ANTLR start "unitMultiplicativeExpression"
    unitMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PER238 = null;
         var unitInnerMultiplicativeExpression237 = null;
         var unitInnerMultiplicativeExpression239 = null;

        var PER238_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:351:2: ( unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:351:4: unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression2326);
            unitInnerMultiplicativeExpression237=this.unitInnerMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression237.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:351:38: ( PER unitInnerMultiplicativeExpression )*
            loop85:
            do {
                var alt85=2;
                var LA85_0 = this.input.LA(1);

                if ( (LA85_0==PER) ) {
                    alt85=1;
                }


                switch (alt85) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:351:40: PER unitInnerMultiplicativeExpression
                    PER238=this.match(this.input,PER,FormulaParser.FOLLOW_PER_in_unitMultiplicativeExpression2330); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    PER238_tree = this.adaptor.create(PER238);
                    root_0 = this.adaptor.becomeRoot(PER238_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression2333);
                    unitInnerMultiplicativeExpression239=this.unitInnerMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression239.getTree());


                    break;

                default :
                    break loop85;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitInnerMultiplicativeExpression_return: (function() {
        FormulaParser.unitInnerMultiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitInnerMultiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:354:1: unitInnerMultiplicativeExpression : unitClump ( ( MULT | DIV ) unitClump )* ;
    // $ANTLR start "unitInnerMultiplicativeExpression"
    unitInnerMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitInnerMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set241 = null;
         var unitClump240 = null;
         var unitClump242 = null;

        var set241_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:355:2: ( unitClump ( ( MULT | DIV ) unitClump )* )
            // /Library/WebServer/Documents/calc/Formula.g:355:4: unitClump ( ( MULT | DIV ) unitClump )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression2349);
            unitClump240=this.unitClump();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump240.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:355:14: ( ( MULT | DIV ) unitClump )*
            loop86:
            do {
                var alt86=2;
                var LA86_0 = this.input.LA(1);

                if ( ((LA86_0>=MULT && LA86_0<=DIV)) ) {
                    alt86=1;
                }


                switch (alt86) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:355:16: ( MULT | DIV ) unitClump
                    
                    set241=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=DIV) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set241), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression2360);
                    unitClump242=this.unitClump();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump242.getTree());


                    break;

                default :
                    break loop86;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitClump_return: (function() {
        FormulaParser.unitClump_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitClump_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:358:1: unitClump : ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) );
    // $ANTLR start "unitClump"
    unitClump: function() {
        var retval = new FormulaParser.unitClump_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INTEGER243 = null;
        var DIV244 = null;
        var CUBED246 = null;
        var SQUARED247 = null;
        var CUBED249 = null;
        var SQUARED250 = null;
         var unitPowerExpression245 = null;
         var unitPowerExpression248 = null;

        var INTEGER243_tree=null;
        var DIV244_tree=null;
        var CUBED246_tree=null;
        var SQUARED247_tree=null;
        var CUBED249_tree=null;
        var SQUARED250_tree=null;
        var stream_INTEGER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INTEGER");
        var stream_SQUARED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token SQUARED");
        var stream_DIV=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DIV");
        var stream_CUBED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token CUBED");
        var stream_unitPowerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitPowerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:359:2: ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) )
            var alt91=2;
            var LA91_0 = this.input.LA(1);

            if ( (LA91_0==INTEGER) ) {
                alt91=1;
            }
            else if ( (LA91_0==IDENT||LA91_0==108) ) {
                alt91=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 91, 0, this.input);

                throw nvae;
            }
            switch (alt91) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:359:4: ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )?
                    // /Library/WebServer/Documents/calc/Formula.g:359:4: ( INTEGER DIV )
                    // /Library/WebServer/Documents/calc/Formula.g:359:5: INTEGER DIV
                    INTEGER243=this.match(this.input,INTEGER,FormulaParser.FOLLOW_INTEGER_in_unitClump2376); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_INTEGER.add(INTEGER243);

                    DIV244=this.match(this.input,DIV,FormulaParser.FOLLOW_DIV_in_unitClump2378); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_DIV.add(DIV244);




                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump2381);
                    unitPowerExpression245=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression245.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:359:38: ( CUBED )?
                    var alt87=2;
                    var LA87_0 = this.input.LA(1);

                    if ( (LA87_0==CUBED) ) {
                        alt87=1;
                    }
                    switch (alt87) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: CUBED
                            CUBED246=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump2383); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED246);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:359:45: ( SQUARED )?
                    var alt88=2;
                    var LA88_0 = this.input.LA(1);

                    if ( (LA88_0==SQUARED) ) {
                        alt88=1;
                    }
                    switch (alt88) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: SQUARED
                            SQUARED247=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump2386); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED247);



                            break;

                    }



                    // AST REWRITE
                    // elements: CUBED, SQUARED, unitPowerExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 359:54: -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:359:57: ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        this.adaptor.addChild(root_1, this.adaptor.create(NEGATE, "NEGATE"));
                        // /Library/WebServer/Documents/calc/Formula.g:359:96: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:359:103: ( SQUARED )*
                        while ( stream_SQUARED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_SQUARED.nextNode());

                        }
                        stream_SQUARED.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:360:5: unitPowerExpression ( CUBED )? ( SQUARED )?
                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump2409);
                    unitPowerExpression248=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression248.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:360:25: ( CUBED )?
                    var alt89=2;
                    var LA89_0 = this.input.LA(1);

                    if ( (LA89_0==CUBED) ) {
                        alt89=1;
                    }
                    switch (alt89) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: CUBED
                            CUBED249=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump2411); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED249);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:360:32: ( SQUARED )?
                    var alt90=2;
                    var LA90_0 = this.input.LA(1);

                    if ( (LA90_0==SQUARED) ) {
                        alt90=1;
                    }
                    switch (alt90) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: SQUARED
                            SQUARED250=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump2414); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED250);



                            break;

                    }



                    // AST REWRITE
                    // elements: SQUARED, CUBED, unitPowerExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 360:41: -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:360:44: ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        // /Library/WebServer/Documents/calc/Formula.g:360:76: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:360:83: ( SQUARED )*
                        while ( stream_SQUARED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_SQUARED.nextNode());

                        }
                        stream_SQUARED.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitPowerExpression_return: (function() {
        FormulaParser.unitPowerExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitPowerExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:364:1: unitPowerExpression : unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* ;
    // $ANTLR start "unitPowerExpression"
    unitPowerExpression: function() {
        var retval = new FormulaParser.unitPowerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW252 = null;
        var MINUS253 = null;
        var set254 = null;
         var unit251 = null;

        var POW252_tree=null;
        var MINUS253_tree=null;
        var set254_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:365:2: ( unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* )
            // /Library/WebServer/Documents/calc/Formula.g:365:5: unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unit_in_unitPowerExpression2476);
            unit251=this.unit();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unit251.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:365:10: ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            loop93:
            do {
                var alt93=2;
                var LA93_0 = this.input.LA(1);

                if ( (LA93_0==POW) ) {
                    alt93=1;
                }


                switch (alt93) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:365:12: POW ( MINUS )? ( INTEGER | FLOAT )
                    POW252=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_unitPowerExpression2480); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    POW252_tree = this.adaptor.create(POW252);
                    root_0 = this.adaptor.becomeRoot(POW252_tree, root_0);
                    }
                    // /Library/WebServer/Documents/calc/Formula.g:365:17: ( MINUS )?
                    var alt92=2;
                    var LA92_0 = this.input.LA(1);

                    if ( (LA92_0==MINUS) ) {
                        alt92=1;
                    }
                    switch (alt92) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: MINUS
                            MINUS253=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unitPowerExpression2483); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            MINUS253_tree = this.adaptor.create(MINUS253);
                            this.adaptor.addChild(root_0, MINUS253_tree);
                            }


                            break;

                    }

                    set254=this.input.LT(1);
                    if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set254));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }



                    break;

                default :
                    break loop93;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unit_return: (function() {
        FormulaParser.unit_return = function(){};
        org.antlr.lang.extend(FormulaParser.unit_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:368:1: unit : ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) );
    // $ANTLR start "unit"
    unit: function() {
        var retval = new FormulaParser.unit_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT255 = null;
        var IDENT256 = null;
        var char_literal257 = null;
        var char_literal259 = null;
         var unitMultiplicativeExpression258 = null;

        var IDENT255_tree=null;
        var IDENT256_tree=null;
        var char_literal257_tree=null;
        var char_literal259_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:368:6: ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) )
            var alt95=2;
            var LA95_0 = this.input.LA(1);

            if ( (LA95_0==IDENT) ) {
                alt95=1;
            }
            else if ( (LA95_0==108) ) {
                alt95=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 95, 0, this.input);

                throw nvae;
            }
            switch (alt95) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:368:8: IDENT ( IDENT )*
                    IDENT255=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit2504); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT255);

                    // /Library/WebServer/Documents/calc/Formula.g:368:14: ( IDENT )*
                    loop94:
                    do {
                        var alt94=2;
                        var LA94_0 = this.input.LA(1);

                        if ( (LA94_0==IDENT) ) {
                            alt94=1;
                        }


                        switch (alt94) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:368:15: IDENT
                            IDENT256=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit2507); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT256);



                            break;

                        default :
                            break loop94;
                        }
                    } while (true);



                    // AST REWRITE
                    // elements: IDENT
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 368:23: -> ^( UNIT ( IDENT )+ )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:368:26: ^( UNIT ( IDENT )+ )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNIT, "UNIT"), root_1);

                        if ( !(stream_IDENT.hasNext()) ) {
                            throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                        }
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:369:5: '(' unitMultiplicativeExpression ')'
                    char_literal257=this.match(this.input,108,FormulaParser.FOLLOW_108_in_unit2524); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_108.add(char_literal257);

                    this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_unit2526);
                    unitMultiplicativeExpression258=this.unitMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression258.getTree());
                    char_literal259=this.match(this.input,109,FormulaParser.FOLLOW_109_in_unit2528); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal259);



                    // AST REWRITE
                    // elements: unitMultiplicativeExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 369:42: -> ^( UNITCLUMP unitMultiplicativeExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:369:45: ^( UNITCLUMP unitMultiplicativeExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitMultiplicativeExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primitive_return: (function() {
        FormulaParser.primitive_return = function(){};
        org.antlr.lang.extend(FormulaParser.primitive_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:382:1: primitive : PRIMITIVE ;
    // $ANTLR start "primitive"
    primitive: function() {
        var retval = new FormulaParser.primitive_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PRIMITIVE260 = null;

        var PRIMITIVE260_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:383:2: ( PRIMITIVE )
            // /Library/WebServer/Documents/calc/Formula.g:383:4: PRIMITIVE
            root_0 = this.adaptor.nil();

            PRIMITIVE260=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_primitive2597); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            PRIMITIVE260_tree = this.adaptor.create(PRIMITIVE260);
            this.adaptor.addChild(root_0, PRIMITIVE260_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    string_return: (function() {
        FormulaParser.string_return = function(){};
        org.antlr.lang.extend(FormulaParser.string_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:442:1: string : STRING ;
    // $ANTLR start "string"
    string: function() {
        var retval = new FormulaParser.string_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STRING261 = null;

        var STRING261_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:443:4: ( STRING )
            // /Library/WebServer/Documents/calc/Formula.g:443:7: STRING
            root_0 = this.adaptor.nil();

            STRING261=this.match(this.input,STRING,FormulaParser.FOLLOW_STRING_in_string3065); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            STRING261_tree = this.adaptor.create(STRING261);
            root_0 = this.adaptor.becomeRoot(STRING261_tree, root_0);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // $ANTLR start "synpred5_Formula"
    synpred5_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:107:5: ( assignment )
        // /Library/WebServer/Documents/calc/Formula.g:107:5: assignment
        this.pushFollow(FormulaParser.FOLLOW_assignment_in_synpred5_Formula448);
        this.assignment();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred5_Formula",

    // $ANTLR start "synpred6_Formula"
    synpred6_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:108:5: ( logicalExpression )
        // /Library/WebServer/Documents/calc/Formula.g:108:5: logicalExpression
        this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred6_Formula454);
        this.logicalExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_Formula",

    // $ANTLR start "synpred8_Formula"
    synpred8_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:110:5: ( forLoop )
        // /Library/WebServer/Documents/calc/Formula.g:110:5: forLoop
        this.pushFollow(FormulaParser.FOLLOW_forLoop_in_synpred8_Formula466);
        this.forLoop();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred8_Formula",

    // $ANTLR start "synpred9_Formula"
    synpred9_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:111:5: ( forInLoop )
        // /Library/WebServer/Documents/calc/Formula.g:111:5: forInLoop
        this.pushFollow(FormulaParser.FOLLOW_forInLoop_in_synpred9_Formula472);
        this.forInLoop();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred9_Formula",

    // $ANTLR start "synpred11_Formula"
    synpred11_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:113:5: ( functionDef )
        // /Library/WebServer/Documents/calc/Formula.g:113:5: functionDef
        this.pushFollow(FormulaParser.FOLLOW_functionDef_in_synpred11_Formula484);
        this.functionDef();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred11_Formula",

    // $ANTLR start "synpred43_Formula"
    synpred43_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:163:26: ( OR booleanXORExpression )
        // /Library/WebServer/Documents/calc/Formula.g:163:26: OR booleanXORExpression
        this.match(this.input,OR,FormulaParser.FOLLOW_OR_in_synpred43_Formula1083); if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_booleanXORExpression_in_synpred43_Formula1086);
        this.booleanXORExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred43_Formula",

    // $ANTLR start "synpred44_Formula"
    synpred44_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:169:26: ( XOR booleanAndExpression )
        // /Library/WebServer/Documents/calc/Formula.g:169:26: XOR booleanAndExpression
        this.match(this.input,XOR,FormulaParser.FOLLOW_XOR_in_synpred44_Formula1119); if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_synpred44_Formula1122);
        this.booleanAndExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred44_Formula",

    // $ANTLR start "synpred45_Formula"
    synpred45_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:175:24: ( AND equalityExpression )
        // /Library/WebServer/Documents/calc/Formula.g:175:24: AND equalityExpression
        this.match(this.input,AND,FormulaParser.FOLLOW_AND_in_synpred45_Formula1154); if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_synpred45_Formula1157);
        this.equalityExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred45_Formula",

    // $ANTLR start "synpred47_Formula"
    synpred47_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:181:26: ( ( EQUALS | NOTEQUALS ) relationalExpression )
        // /Library/WebServer/Documents/calc/Formula.g:181:26: ( EQUALS | NOTEQUALS ) relationalExpression
        if ( this.input.LA(1)==EQUALS||this.input.LA(1)==NOTEQUALS ) {
            this.input.consume();
            this.state.errorRecovery=false;this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            throw mse;
        }

        this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_synpred47_Formula1198);
        this.relationalExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred47_Formula",

    // $ANTLR start "synpred51_Formula"
    synpred51_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:192:25: ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )
        // /Library/WebServer/Documents/calc/Formula.g:192:25: ( LT | LTEQ | GT | GTEQ ) additiveExpression
        if ( (this.input.LA(1)>=LT && this.input.LA(1)<=GTEQ) ) {
            this.input.consume();
            this.state.errorRecovery=false;this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            throw mse;
        }

        this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_synpred51_Formula1255);
        this.additiveExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred51_Formula",

    // $ANTLR start "synpred53_Formula"
    synpred53_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:201:31: ( ( PLUS | MINUS ) multiplicativeExpression )
        // /Library/WebServer/Documents/calc/Formula.g:201:31: ( PLUS | MINUS ) multiplicativeExpression
        if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=MINUS) ) {
            this.input.consume();
            this.state.errorRecovery=false;this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            throw mse;
        }

        this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_synpred53_Formula1309);
        this.multiplicativeExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred53_Formula",

    // $ANTLR start "synpred56_Formula"
    synpred56_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:208:22: ( ( MULT | DIV | MOD ) arrayExpression )
        // /Library/WebServer/Documents/calc/Formula.g:208:22: ( MULT | DIV | MOD ) arrayExpression
        if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=MOD) ) {
            this.input.consume();
            this.state.errorRecovery=false;this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            throw mse;
        }

        this.pushFollow(FormulaParser.FOLLOW_arrayExpression_in_synpred56_Formula1352);
        this.arrayExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred56_Formula",

    // $ANTLR start "synpred57_Formula"
    synpred57_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:216:25: ({...}? COLON {...}? negationExpression )
        // /Library/WebServer/Documents/calc/Formula.g:216:25: {...}? COLON {...}? negationExpression
        if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            throw new org.antlr.runtime.FailedPredicateException(this.input, "synpred57_Formula", " this.input.get(this.input.index()-1).getText()!=\" \"");
        }
        this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_synpred57_Formula1404); if (this.state.failed) return ;
        if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            throw new org.antlr.runtime.FailedPredicateException(this.input, "synpred57_Formula", " this.input.get(this.input.index()-1).getText()!=\" \"");
        }
        this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_synpred57_Formula1408);
        this.negationExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred57_Formula",

    // $ANTLR start "synpred58_Formula"
    synpred58_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:216:167: ({...}? COLON {...}? negationExpression )
        // /Library/WebServer/Documents/calc/Formula.g:216:167: {...}? COLON {...}? negationExpression
        if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            throw new org.antlr.runtime.FailedPredicateException(this.input, "synpred58_Formula", " this.input.get(this.input.index()-1).getText()!=\" \"");
        }
        this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_synpred58_Formula1417); if (this.state.failed) return ;
        if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            throw new org.antlr.runtime.FailedPredicateException(this.input, "synpred58_Formula", " this.input.get(this.input.index()-1).getText()!=\" \"");
        }
        this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_synpred58_Formula1421);
        this.negationExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred58_Formula",

    // $ANTLR start "synpred60_Formula"
    synpred60_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:225:21: ( POW unaryOrNegate )
        // /Library/WebServer/Documents/calc/Formula.g:225:21: POW unaryOrNegate
        this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_synpred60_Formula1476); if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_unaryOrNegate_in_synpred60_Formula1478);
        this.unaryOrNegate();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred60_Formula",

    // $ANTLR start "synpred64_Formula"
    synpred64_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:247:23: ({...}? ( selector | funCall ) )
        // /Library/WebServer/Documents/calc/Formula.g:247:23: {...}? ( selector | funCall )
        if ( !(( this.input.get(this.input.index()-1).getText()!=" ")) ) {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            throw new org.antlr.runtime.FailedPredicateException(this.input, "synpred64_Formula", " this.input.get(this.input.index()-1).getText()!=\" \"");
        }
        // /Library/WebServer/Documents/calc/Formula.g:247:79: ( selector | funCall )
        var alt117=2;
        var LA117_0 = this.input.LA(1);

        if ( (LA117_0==LARR||LA117_0==LCURL||LA117_0==111) ) {
            alt117=1;
        }
        else if ( (LA117_0==108) ) {
            alt117=2;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var nvae =
                new org.antlr.runtime.NoViableAltException("", 117, 0, this.input);

            throw nvae;
        }
        switch (alt117) {
            case 1 :
                // /Library/WebServer/Documents/calc/Formula.g:247:80: selector
                this.pushFollow(FormulaParser.FOLLOW_selector_in_synpred64_Formula1610);
                this.selector();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;
            case 2 :
                // /Library/WebServer/Documents/calc/Formula.g:247:89: funCall
                this.pushFollow(FormulaParser.FOLLOW_funCall_in_synpred64_Formula1612);
                this.funCall();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

        }



    },
    // $ANTLR end "synpred64_Formula",

    // $ANTLR start "synpred71_Formula"
    synpred71_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:263:5: ( material )
        // /Library/WebServer/Documents/calc/Formula.g:263:5: material
        this.pushFollow(FormulaParser.FOLLOW_material_in_synpred71_Formula1707);
        this.material();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred71_Formula",

    // $ANTLR start "synpred74_Formula"
    synpred74_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:266:4: ( array )
        // /Library/WebServer/Documents/calc/Formula.g:266:4: array
        this.pushFollow(FormulaParser.FOLLOW_array_in_synpred74_Formula1722);
        this.array();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred74_Formula",

    // $ANTLR start "synpred76_Formula"
    synpred76_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:272:22: ( funCall )
        // /Library/WebServer/Documents/calc/Formula.g:272:22: funCall
        this.pushFollow(FormulaParser.FOLLOW_funCall_in_synpred76_Formula1746);
        this.funCall();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred76_Formula",

    // $ANTLR start "synpred81_Formula"
    synpred81_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:285:7: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:285:7: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred81_Formula1812); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred81_Formula",

    // $ANTLR start "synpred82_Formula"
    synpred82_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:285:23: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:285:23: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred82_Formula1818); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred82_Formula",

    // $ANTLR start "synpred83_Formula"
    synpred83_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:285:37: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:285:37: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred83_Formula1824); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred83_Formula",

    // $ANTLR start "synpred84_Formula"
    synpred84_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:285:52: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:285:52: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred84_Formula1829); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred84_Formula",

    // $ANTLR start "synpred89_Formula"
    synpred89_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:286:10: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:286:10: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred89_Formula1855); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred89_Formula",

    // $ANTLR start "synpred90_Formula"
    synpred90_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:286:26: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:286:26: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred90_Formula1861); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred90_Formula",

    // $ANTLR start "synpred91_Formula"
    synpred91_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:286:39: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:286:39: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred91_Formula1866); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred91_Formula",

    // $ANTLR start "synpred92_Formula"
    synpred92_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:286:54: ( NEWLINE )
        // /Library/WebServer/Documents/calc/Formula.g:286:54: NEWLINE
        this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred92_Formula1871); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred92_Formula",

    // $ANTLR start "synpred104_Formula"
    synpred104_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:299:5: ( '.' arrayName )
        // /Library/WebServer/Documents/calc/Formula.g:299:5: '.' arrayName
        this.match(this.input,111,FormulaParser.FOLLOW_111_in_synpred104_Formula1999); if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_arrayName_in_synpred104_Formula2001);
        this.arrayName();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred104_Formula",

    // $ANTLR start "synpred108_Formula"
    synpred108_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:307:3: ( arrayName ( NEWLINE )* COLON )
        // /Library/WebServer/Documents/calc/Formula.g:307:3: arrayName ( NEWLINE )* COLON
        this.pushFollow(FormulaParser.FOLLOW_arrayName_in_synpred108_Formula2039);
        this.arrayName();

        this.state._fsp--;
        if (this.state.failed) return ;
        // /Library/WebServer/Documents/calc/Formula.g:307:13: ( NEWLINE )*
        loop143:
        do {
            var alt143=2;
            var LA143_0 = this.input.LA(1);

            if ( (LA143_0==NEWLINE) ) {
                alt143=1;
            }


            switch (alt143) {
            case 1 :
                // /Library/WebServer/Documents/calc/Formula.g:0:0: NEWLINE
                this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_synpred108_Formula2041); if (this.state.failed) return ;


                break;

            default :
                break loop143;
            }
        } while (true);

        this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_synpred108_Formula2044); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred108_Formula"

    // Delegated rules



    synpred58_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred58_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred43_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred43_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred92_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred92_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred56_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred56_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred53_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred53_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred104_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred104_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred83_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred83_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred57_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred57_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred51_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred51_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred90_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred90_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred64_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred64_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred45_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred45_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred91_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred91_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred89_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred89_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred9_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred9_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred76_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred76_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred84_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred84_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred47_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred47_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred8_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred8_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred74_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred74_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred44_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred44_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred71_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred71_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred6_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred6_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred5_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred5_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred60_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred60_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred82_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred82_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred108_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred108_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred11_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred11_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred81_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred81_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(FormulaParser, {
    DFA5_eotS:
        "\u0015\uffff",
    DFA5_eofS:
        "\u0015\uffff",
    DFA5_minS:
        "\u0001\u0024\u0002\u0000\u0008\uffff\u0001\u0000\u0002\uffff\u0001"+
    "\u0000\u0006\uffff",
    DFA5_maxS:
        "\u0001\u006c\u0002\u0000\u0008\uffff\u0001\u0000\u0002\uffff\u0001"+
    "\u0000\u0006\uffff",
    DFA5_acceptS:
        "\u0003\uffff\u0001\u0002\u0009\uffff\u0001\u0003\u0001\uffff\u0001"+
    "\u0006\u0001\u0008\u0001\u0001\u0001\u0007\u0001\u0004\u0001\u0005",
    DFA5_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0008\uffff\u0001\u0002\u0002"+
    "\uffff\u0001\u0003\u0006\uffff}>",
    DFA5_transitionS: [
            "\u0001\u000d\u0003\uffff\u0001\u000e\u000b\uffff\u0001\u000f"+
            "\u0005\uffff\u0001\u000b\u0002\uffff\u0001\u0010\u0001\u0003"+
            "\u0001\u0001\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0003"+
            "\u0005\uffff\u0002\u0003\u0001\uffff\u0001\u0003\u0002\uffff"+
            "\u0005\u0003\u000e\uffff\u0001\u0003",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA5_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_eotS),
    DFA5_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_eofS),
    DFA5_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA5_minS),
    DFA5_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA5_maxS),
    DFA5_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_acceptS),
    DFA5_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_specialS),
    DFA5_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA5_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA5 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 5;
    this.eot = FormulaParser.DFA5_eot;
    this.eof = FormulaParser.DFA5_eof;
    this.min = FormulaParser.DFA5_min;
    this.max = FormulaParser.DFA5_max;
    this.accept = FormulaParser.DFA5_accept;
    this.special = FormulaParser.DFA5_special;
    this.transition = FormulaParser.DFA5_transition;
};

org.antlr.lang.extend(FormulaParser.DFA5, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "106:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA5_1 = input.LA(1);

                             
                            var index5_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_Formula()) ) {s = 17;}

                            else if ( (this.synpred6_Formula()) ) {s = 3;}

                             
                            input.seek(index5_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA5_2 = input.LA(1);

                             
                            var index5_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_Formula()) ) {s = 17;}

                            else if ( (this.synpred6_Formula()) ) {s = 3;}

                             
                            input.seek(index5_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA5_11 = input.LA(1);

                             
                            var index5_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_Formula()) ) {s = 3;}

                            else if ( (this.synpred11_Formula()) ) {s = 18;}

                             
                            input.seek(index5_11);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA5_14 = input.LA(1);

                             
                            var index5_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_Formula()) ) {s = 19;}

                            else if ( (this.synpred9_Formula()) ) {s = 20;}

                             
                            input.seek(index5_14);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 5, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA55_eotS:
        "\u000b\uffff",
    DFA55_eofS:
        "\u000b\uffff",
    DFA55_minS:
        "\u0001\u003a\u0003\uffff\u0001\u0000\u0006\uffff",
    DFA55_maxS:
        "\u0001\u005d\u0003\uffff\u0001\u0000\u0006\uffff",
    DFA55_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\uffff\u0001"+
    "\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u0004",
    DFA55_specialS:
        "\u0004\uffff\u0001\u0000\u0006\uffff}>",
    DFA55_transitionS: [
            "\u0001\u0008\u0003\uffff\u0001\u0009\u0001\u0005\u0001\uffff"+
            "\u0001\u0006\u0012\uffff\u0001\u0007\u0001\uffff\u0001\u0004"+
            "\u0002\uffff\u0001\u0003\u0002\u0001\u0002\u0002",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA55_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA55_eotS),
    DFA55_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA55_eofS),
    DFA55_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA55_minS),
    DFA55_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA55_maxS),
    DFA55_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA55_acceptS),
    DFA55_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA55_specialS),
    DFA55_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA55_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA55_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA55 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 55;
    this.eot = FormulaParser.DFA55_eot;
    this.eof = FormulaParser.DFA55_eof;
    this.min = FormulaParser.DFA55_min;
    this.max = FormulaParser.DFA55_max;
    this.accept = FormulaParser.DFA55_accept;
    this.special = FormulaParser.DFA55_special;
    this.transition = FormulaParser.DFA55_transition;
};

org.antlr.lang.extend(FormulaParser.DFA55, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "259:1: value : ( number | bool | string | material | IDENT | primitive | array | anonFunctionDef | newObject );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA55_4 = input.LA(1);

                             
                            var index55_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred71_Formula()) ) {s = 10;}

                            else if ( (this.synpred74_Formula()) ) {s = 7;}

                             
                            input.seek(index55_4);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 55, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA56_eotS:
        "\u001a\uffff",
    DFA56_eofS:
        "\u0001\u0002\u0019\uffff",
    DFA56_minS:
        "\u0001\u001e\u0001\u0000\u0018\uffff",
    DFA56_maxS:
        "\u0001\u006f\u0001\u0000\u0018\uffff",
    DFA56_acceptS:
        "\u0002\uffff\u0001\u0002\u0016\uffff\u0001\u0001",
    DFA56_specialS:
        "\u0001\uffff\u0001\u0000\u0018\uffff}>",
    DFA56_transitionS: [
            "\u0001\u0002\u000f\uffff\u0001\u0002\u0002\uffff\u0001\u0002"+
            "\u0003\uffff\u0001\u0002\u0009\uffff\u0002\u0002\u0001\uffff"+
            "\u0002\u0002\u0001\uffff\u0001\u0002\u0001\uffff\u000c\u0002"+
            "\u0001\uffff\u0005\u0002\u0001\uffff\u0001\u0002\u0011\uffff"+
            "\u0001\u0001\u0001\u0002\u0001\uffff\u0001\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA56_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA56_eotS),
    DFA56_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA56_eofS),
    DFA56_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA56_minS),
    DFA56_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA56_maxS),
    DFA56_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA56_acceptS),
    DFA56_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA56_specialS),
    DFA56_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA56_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA56_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA56 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 56;
    this.eot = FormulaParser.DFA56_eot;
    this.eof = FormulaParser.DFA56_eof;
    this.min = FormulaParser.DFA56_min;
    this.max = FormulaParser.DFA56_max;
    this.accept = FormulaParser.DFA56_accept;
    this.special = FormulaParser.DFA56_special;
    this.transition = FormulaParser.DFA56_transition;
};

org.antlr.lang.extend(FormulaParser.DFA56, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "272:22: ( funCall )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA56_1 = input.LA(1);

                             
                            var index56_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred76_Formula()) ) {s = 25;}

                            else if ( ((( this.input.get(this.input.index()-1).getText()==" ")||( this.input.get(this.input.index()-1).getText()!=" "))) ) {s = 2;}

                             
                            input.seek(index56_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 56, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA63_eotS:
        "\u0004\uffff",
    DFA63_eofS:
        "\u0004\uffff",
    DFA63_minS:
        "\u0001\u001e\u0001\uffff\u0001\u001e\u0001\uffff",
    DFA63_maxS:
        "\u0001\u006c\u0001\uffff\u0001\u006c\u0001\uffff",
    DFA63_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0002",
    DFA63_specialS:
        "\u0004\uffff}>",
    DFA63_transitionS: [
            "\u0001\u0002\u001b\uffff\u0001\u0001\u0003\uffff\u0002\u0001"+
            "\u0001\uffff\u0001\u0001\u000b\uffff\u0002\u0001\u0004\uffff"+
            "\u0002\u0001\u0001\u0003\u0001\u0001\u0002\uffff\u0005\u0001"+
            "\u000e\uffff\u0001\u0001",
            "",
            "\u0001\u0002\u001b\uffff\u0001\u0001\u0003\uffff\u0002\u0001"+
            "\u0001\uffff\u0001\u0001\u000b\uffff\u0001\u0001\u0005\uffff"+
            "\u0002\u0001\u0001\u0003\u0001\u0001\u0002\uffff\u0005\u0001"+
            "\u000e\uffff\u0001\u0001",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA63_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA63_eotS),
    DFA63_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA63_eofS),
    DFA63_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA63_minS),
    DFA63_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA63_maxS),
    DFA63_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA63_acceptS),
    DFA63_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA63_specialS),
    DFA63_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA63_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA63_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA63 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 63;
    this.eot = FormulaParser.DFA63_eot;
    this.eof = FormulaParser.DFA63_eof;
    this.min = FormulaParser.DFA63_min;
    this.max = FormulaParser.DFA63_max;
    this.accept = FormulaParser.DFA63_accept;
    this.special = FormulaParser.DFA63_special;
    this.transition = FormulaParser.DFA63_transition;
};

org.antlr.lang.extend(FormulaParser.DFA63, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "285:16: ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA70_eotS:
        "\u0004\uffff",
    DFA70_eofS:
        "\u0004\uffff",
    DFA70_minS:
        "\u0001\u001e\u0001\uffff\u0001\u001e\u0001\uffff",
    DFA70_maxS:
        "\u0001\u006c\u0001\uffff\u0001\u006c\u0001\uffff",
    DFA70_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0002",
    DFA70_specialS:
        "\u0004\uffff}>",
    DFA70_transitionS: [
            "\u0001\u0002\u001b\uffff\u0001\u0001\u0003\uffff\u0002\u0001"+
            "\u0001\uffff\u0001\u0001\u000b\uffff\u0002\u0001\u0004\uffff"+
            "\u0002\u0001\u0001\uffff\u0001\u0001\u0001\u0003\u0001\uffff"+
            "\u0005\u0001\u000e\uffff\u0001\u0001",
            "",
            "\u0001\u0002\u001b\uffff\u0001\u0001\u0003\uffff\u0002\u0001"+
            "\u0001\uffff\u0001\u0001\u000b\uffff\u0001\u0001\u0005\uffff"+
            "\u0002\u0001\u0001\uffff\u0001\u0001\u0001\u0003\u0001\uffff"+
            "\u0005\u0001\u000e\uffff\u0001\u0001",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA70_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA70_eotS),
    DFA70_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA70_eofS),
    DFA70_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA70_minS),
    DFA70_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA70_maxS),
    DFA70_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA70_acceptS),
    DFA70_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA70_specialS),
    DFA70_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA70_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA70_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA70 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 70;
    this.eot = FormulaParser.DFA70_eot;
    this.eof = FormulaParser.DFA70_eof;
    this.min = FormulaParser.DFA70_min;
    this.max = FormulaParser.DFA70_max;
    this.accept = FormulaParser.DFA70_accept;
    this.special = FormulaParser.DFA70_special;
    this.transition = FormulaParser.DFA70_transition;
};

org.antlr.lang.extend(FormulaParser.DFA70, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "286:19: ( label ( NEWLINE )* ( ',' ( NEWLINE )* label ( NEWLINE )* )* )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA83_eotS:
        "\u000f\uffff",
    DFA83_eofS:
        "\u000f\uffff",
    DFA83_minS:
        "\u0001\u001e\u0001\u0000\u0006\uffff\u0001\u0000\u0006\uffff",
    DFA83_maxS:
        "\u0001\u006c\u0001\u0000\u0006\uffff\u0001\u0000\u0006\uffff",
    DFA83_acceptS:
        "\u0002\uffff\u0001\u0002\u0007\uffff\u0001\u0001\u0004\uffff",
    DFA83_specialS:
        "\u0001\uffff\u0001\u0000\u0006\uffff\u0001\u0001\u0006\uffff}>",
    DFA83_transitionS: [
            "\u0001\u0002\u001b\uffff\u0001\u0002\u0003\uffff\u0001\u0002"+
            "\u0001\u0008\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002"+
            "\u0001\u000a\u0004\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0002\uffff\u0001\u0001\u0004\u0002\u000e\uffff\u0001\u0002",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA83_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA83_eotS),
    DFA83_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA83_eofS),
    DFA83_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA83_minS),
    DFA83_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA83_maxS),
    DFA83_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA83_acceptS),
    DFA83_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA83_specialS),
    DFA83_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA83_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA83_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA83 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 83;
    this.eot = FormulaParser.DFA83_eot;
    this.eof = FormulaParser.DFA83_eof;
    this.min = FormulaParser.DFA83_min;
    this.max = FormulaParser.DFA83_max;
    this.accept = FormulaParser.DFA83_accept;
    this.special = FormulaParser.DFA83_special;
    this.transition = FormulaParser.DFA83_transition;
};

org.antlr.lang.extend(FormulaParser.DFA83, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "307:2: ( arrayName ( NEWLINE )* COLON )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA83_1 = input.LA(1);

                             
                            var index83_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred108_Formula()) ) {s = 10;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index83_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA83_8 = input.LA(1);

                             
                            var index83_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred108_Formula()) ) {s = 10;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index83_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 83, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(FormulaParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEGATE", "ASSIGN", "FUNCALL", "MATERIAL", "UNIT", "POWER", "DEFAULTS", "PARAMS", "UNITCLUMP", "ARRAY", "LINES", "WHILE", "IFTHENELSE", "ELSE", "FOR", "FORIN", "FUNCTION", "ANONFUNCTION", "NUMBER", "LABEL", "RANGE", "INNER", "ASSIGNED", "SELECTOR", "DOTSELECTOR", "NEW", "NEWLINE", "W", "H", "I", "L", "E", "WHILESTATEMENT", "F", "O", "R", "FORSTATEMENT", "M", "FROMSTATEMENT", "N", "INSTATEMENT", "T", "TOSTATEMENT", "B", "Y", "BYSTATEMENT", "P", "LOOPSTATEMENT", "IFSTATEMENT", "THENSTATEMENT", "S", "ELSESTATEMENT", "U", "C", "FUNCTIONSTATEMENT", "D", "ENDBLOCK", "RETURNSTATEMENT", "NEWSTATEMENT", "IDENT", "EQUALS", "PRIMITIVE", "OR", "XOR", "X", "AND", "A", "NOTEQUALS", "LT", "LTEQ", "GT", "GTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "COLON", "POW", "NOT", "LARR", "RARR", "LCURL", "RCURL", "COMMA", "STRING", "INTEGER", "FLOAT", "TRUE", "FALSE", "PER", "CUBED", "SQUARED", "Q", "LBRACKET", "RBRACKET", "COMMENT", "LINE_COMMENT", "WS", "G", "J", "K", "V", "Z", "'('", "')'", "'<-'", "'.'"],
    FOLLOW_NEWLINE_in_lines154: new org.antlr.runtime.BitSet([0x40000000, 0xE4100110,0x3E582002, 0x00001000]),
    FOLLOW_expression_in_lines158: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_lines162: new org.antlr.runtime.BitSet([0x40000000, 0xE4100110,0x3E582002, 0x00001000]),
    FOLLOW_EOF_in_lines165: new org.antlr.runtime.BitSet([0x00000000, 0xE4100110,0x3E582002, 0x00001000]),
    FOLLOW_EOF_in_lines170: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_in_expression448: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalExpression_in_expression454: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileLoop_in_expression460: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forLoop_in_expression466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInLoop_in_expression472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifThenElse_in_expression478: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionDef_in_expression484: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_returnExp_in_expression490: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_RETURNSTATEMENT_in_returnExp502: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_returnExp505: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_innerBlock518: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_innerBlock522: new org.antlr.runtime.BitSet([0x40000002, 0xE4100110,0x3E582002, 0x00001000]),
    FOLLOW_WHILESTATEMENT_in_whileLoop547: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_whileLoop549: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_whileLoop551: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_whileLoop554: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_whileLoop557: new org.antlr.runtime.BitSet([0x00000000, 0x00080000]),
    FOLLOW_LOOPSTATEMENT_in_whileLoop559: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forLoop580: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_forLoop582: new org.antlr.runtime.BitSet([0x00000000, 0x00000400]),
    FOLLOW_FROMSTATEMENT_in_forLoop584: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_forLoop586: new org.antlr.runtime.BitSet([0x00000000, 0x00004000]),
    FOLLOW_TOSTATEMENT_in_forLoop588: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_forLoop590: new org.antlr.runtime.BitSet([0x40000000, 0x00020000]),
    FOLLOW_BYSTATEMENT_in_forLoop593: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_forLoop595: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_forLoop599: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_forLoop602: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_forLoop605: new org.antlr.runtime.BitSet([0x00000000, 0x00080000]),
    FOLLOW_LOOPSTATEMENT_in_forLoop607: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forInLoop635: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_forInLoop637: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_INSTATEMENT_in_forInLoop639: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_forInLoop641: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_forInLoop643: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_forInLoop646: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_forInLoop649: new org.antlr.runtime.BitSet([0x00000000, 0x00080000]),
    FOLLOW_LOOPSTATEMENT_in_forInLoop651: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse676: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_ifThenElse678: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse680: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse683: new org.antlr.runtime.BitSet([0x40000000, 0xF4900110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_ifThenElse686: new org.antlr.runtime.BitSet([0x00000000, 0x10800000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse690: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse692: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_ifThenElse694: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse696: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse698: new org.antlr.runtime.BitSet([0x40000000, 0xF4900110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_ifThenElse701: new org.antlr.runtime.BitSet([0x00000000, 0x10800000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse706: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse708: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_ifThenElse711: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_ifThenElse715: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse717: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef748: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_functionDef750: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001000]),
    FOLLOW_108_in_functionDef752: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x00000000, 0x00002000]),
    FOLLOW_IDENT_in_functionDef755: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000001, 0x00002000]),
    FOLLOW_EQUALS_in_functionDef759: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef762: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_functionDef767: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_functionDef769: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_functionDef776: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_functionDef778: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_EQUALS_in_functionDef780: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef782: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_109_in_functionDef789: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_NEWLINE_in_functionDef791: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_functionDef794: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_functionDef797: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef799: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_anonFunctionDef833: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001000]),
    FOLLOW_108_in_anonFunctionDef836: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x00000000, 0x00002000]),
    FOLLOW_IDENT_in_anonFunctionDef839: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000001, 0x00002000]),
    FOLLOW_EQUALS_in_anonFunctionDef843: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_anonFunctionDef846: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_anonFunctionDef851: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_anonFunctionDef853: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_anonFunctionDef860: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_anonFunctionDef862: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_EQUALS_in_anonFunctionDef864: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_anonFunctionDef866: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_109_in_anonFunctionDef873: new org.antlr.runtime.BitSet([0x40000000, 0xE4100110,0x3E582002, 0x00001000]),
    FOLLOW_NEWLINE_in_anonFunctionDef878: new org.antlr.runtime.BitSet([0x40000000, 0xF4100110,0x3E582002, 0x00001000]),
    FOLLOW_innerBlock_in_anonFunctionDef881: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_ENDBLOCK_in_anonFunctionDef884: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_anonFunctionDef886: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_anonFunctionDef891: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_assignment933: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001000]),
    FOLLOW_108_in_assignment935: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x00000000, 0x00002000]),
    FOLLOW_IDENT_in_assignment938: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000001, 0x00002000]),
    FOLLOW_EQUALS_in_assignment942: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_assignment944: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_assignment949: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_assignment951: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_assignment958: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_assignment960: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_EQUALS_in_assignment962: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x3E502000, 0x00000000]),
    FOLLOW_defaultValue_in_assignment964: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_109_in_assignment971: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00004000]),
    FOLLOW_110_in_assignment973: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_assignment975: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_assignment1003: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00004000]),
    FOLLOW_assigned_in_assignment1007: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00004000]),
    FOLLOW_COMMA_in_assignment1011: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_assignment1014: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00004000]),
    FOLLOW_assigned_in_assignment1018: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00004000]),
    FOLLOW_110_in_assignment1024: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_assignment1026: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_assigned1052: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00500000, 0x00008000]),
    FOLLOW_selector_in_assigned1054: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanXORExpression_in_logicalExpression1080: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000004, 0x00000000]),
    FOLLOW_OR_in_logicalExpression1083: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_booleanXORExpression_in_logicalExpression1086: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000004, 0x00000000]),
    FOLLOW_booleanAndExpression_in_booleanXORExpression1116: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000008, 0x00000000]),
    FOLLOW_XOR_in_booleanXORExpression1119: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_booleanAndExpression_in_booleanXORExpression1122: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000008, 0x00000000]),
    FOLLOW_equalityExpression_in_booleanAndExpression1151: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_AND_in_booleanAndExpression1154: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_equalityExpression_in_booleanAndExpression1157: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_relationalExpression_in_equalityExpression1188: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000081, 0x00000000]),
    FOLLOW_set_in_equalityExpression1191: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_relationalExpression_in_equalityExpression1198: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000081, 0x00000000]),
    FOLLOW_additiveExpression_in_relationalExpression1240: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000F00, 0x00000000]),
    FOLLOW_set_in_relationalExpression1244: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_additiveExpression_in_relationalExpression1255: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000F00, 0x00000000]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1298: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00003000, 0x00000000]),
    FOLLOW_set_in_additiveExpression1302: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1309: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00003000, 0x00000000]),
    FOLLOW_arrayExpression_in_multiplicativeExpression1339: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0001C000, 0x00000000]),
    FOLLOW_set_in_multiplicativeExpression1343: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_arrayExpression_in_multiplicativeExpression1352: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0001C000, 0x00000000]),
    FOLLOW_negationExpression_in_arrayExpression1398: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_COLON_in_arrayExpression1404: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_negationExpression_in_arrayExpression1408: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_COLON_in_arrayExpression1417: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_negationExpression_in_arrayExpression1421: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_negationExpression1446: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_powerExpression_in_negationExpression1448: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_powerExpression_in_negationExpression1462: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpression_in_powerExpression1473: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_POW_in_powerExpression1476: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_unaryOrNegate_in_powerExpression1478: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_unaryExpression_in_unaryOrNegate1505: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_unaryOrNegate1511: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_unaryExpression_in_unaryOrNegate1513: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NOT_in_unaryExpression1541: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_innerPrimaryExpression_in_unaryExpression1544: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_innerPrimaryExpression_in_unaryExpression1553: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selectionExpression_in_innerPrimaryExpression1584: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpression_in_selectionExpression1604: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00500000, 0x00009000]),
    FOLLOW_selector_in_selectionExpression1610: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00500000, 0x00009000]),
    FOLLOW_funCall_in_selectionExpression1612: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00500000, 0x00009000]),
    FOLLOW_108_in_funCall1627: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00003000]),
    FOLLOW_logicalExpression_in_funCall1631: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_COMMA_in_funCall1634: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_funCall1636: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00002000]),
    FOLLOW_109_in_funCall1643: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_108_in_primaryExpression1664: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_primaryExpression1667: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00002000]),
    FOLLOW_109_in_primaryExpression1669: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_primaryExpression1675: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_value1689: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_value1695: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_value1701: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_material_in_value1707: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_value1712: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primitive_in_value1717: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_value1722: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_anonFunctionDef_in_value1727: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_newObject_in_value1732: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWSTATEMENT_in_newObject1742: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_IDENT_in_newObject1744: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00500000, 0x00009000]),
    FOLLOW_funCall_in_newObject1746: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_negnumber_in_defaultValue1772: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_defaultValue1778: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_defaultValue1784: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_defaultValue1790: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_defaultValue1796: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LARR_in_array1810: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E786002, 0x00001000]),
    FOLLOW_NEWLINE_in_array1812: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E786002, 0x00001000]),
    FOLLOW_label_in_array1816: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1818: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_COMMA_in_array1822: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_NEWLINE_in_array1824: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_label_in_array1827: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1829: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1836: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00200000, 0x00000000]),
    FOLLOW_RARR_in_array1839: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LCURL_in_array1853: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3ED86002, 0x00001000]),
    FOLLOW_NEWLINE_in_array1855: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3ED86002, 0x00001000]),
    FOLLOW_label_in_array1859: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1861: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_COMMA_in_array1864: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_NEWLINE_in_array1866: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_label_in_array1869: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1871: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_NEWLINE_in_array1878: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_RCURL_in_array1881: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_minarray_in_selector1902: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_dotselector_in_selector1906: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LARR_in_minarray1933: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_logicalExpression_in_minarray1938: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_MULT_in_minarray1940: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_COMMA_in_minarray1944: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_logicalExpression_in_minarray1948: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_MULT_in_minarray1950: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01200000, 0x00000000]),
    FOLLOW_RARR_in_minarray1957: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LCURL_in_minarray1963: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_logicalExpression_in_minarray1968: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_MULT_in_minarray1970: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_COMMA_in_minarray1974: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E586002, 0x00001000]),
    FOLLOW_logicalExpression_in_minarray1978: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_MULT_in_minarray1980: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01800000, 0x00000000]),
    FOLLOW_RCURL_in_minarray1987: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_dotselector1999: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x02004000, 0x00000000]),
    FOLLOW_arrayName_in_dotselector2001: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00008000]),
    FOLLOW_set_in_arrayName0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_arrayName_in_label2039: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_NEWLINE_in_label2041: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_COLON_in_label2044: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_NEWLINE_in_label2048: new org.antlr.runtime.BitSet([0x40000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_logicalExpression_in_label2051: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_number0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_negnumber2127: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x0C000000, 0x00000000]),
    FOLLOW_number_in_negnumber2129: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_bool0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LCURL_in_material2281: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_additiveExpression_in_material2283: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x04000000, 0x00001000]),
    FOLLOW_unitMultiplicativeExpression_in_material2287: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_RCURL_in_material2289: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression2326: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_PER_in_unitMultiplicativeExpression2330: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x04000000, 0x00001000]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression2333: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression2349: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0000C000, 0x00000000]),
    FOLLOW_set_in_unitInnerMultiplicativeExpression2353: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x04000000, 0x00001000]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression2360: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0000C000, 0x00000000]),
    FOLLOW_INTEGER_in_unitClump2376: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00008000, 0x00000000]),
    FOLLOW_DIV_in_unitClump2378: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x04000000, 0x00001000]),
    FOLLOW_unitPowerExpression_in_unitClump2381: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x80000000, 0x00000001]),
    FOLLOW_CUBED_in_unitClump2383: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000001]),
    FOLLOW_SQUARED_in_unitClump2386: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitPowerExpression_in_unitClump2409: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x80000000, 0x00000001]),
    FOLLOW_CUBED_in_unitClump2411: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000001]),
    FOLLOW_SQUARED_in_unitClump2414: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unit_in_unitPowerExpression2476: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_POW_in_unitPowerExpression2480: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x0C002000, 0x00000000]),
    FOLLOW_MINUS_in_unitPowerExpression2483: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x0C000000, 0x00000000]),
    FOLLOW_set_in_unitPowerExpression2486: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENT_in_unit2504: new org.antlr.runtime.BitSet([0x00000002, 0x80000000]),
    FOLLOW_IDENT_in_unit2507: new org.antlr.runtime.BitSet([0x00000002, 0x80000000]),
    FOLLOW_108_in_unit2524: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x04000000, 0x00001000]),
    FOLLOW_unitMultiplicativeExpression_in_unit2526: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00002000]),
    FOLLOW_109_in_unit2528: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_primitive2597: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_string3065: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_in_synpred5_Formula448: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalExpression_in_synpred6_Formula454: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forLoop_in_synpred8_Formula466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInLoop_in_synpred9_Formula472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionDef_in_synpred11_Formula484: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_OR_in_synpred43_Formula1083: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_booleanXORExpression_in_synpred43_Formula1086: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_XOR_in_synpred44_Formula1119: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_booleanAndExpression_in_synpred44_Formula1122: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_AND_in_synpred45_Formula1154: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_equalityExpression_in_synpred45_Formula1157: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_synpred47_Formula1191: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_relationalExpression_in_synpred47_Formula1198: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_synpred51_Formula1244: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_additiveExpression_in_synpred51_Formula1255: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_synpred53_Formula1302: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_multiplicativeExpression_in_synpred53_Formula1309: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_synpred56_Formula1343: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_arrayExpression_in_synpred56_Formula1352: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_COLON_in_synpred57_Formula1404: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_negationExpression_in_synpred57_Formula1408: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_COLON_in_synpred58_Formula1417: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_negationExpression_in_synpred58_Formula1421: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_POW_in_synpred60_Formula1476: new org.antlr.runtime.BitSet([0x00000000, 0xC4000000,0x3E582002, 0x00001000]),
    FOLLOW_unaryOrNegate_in_synpred60_Formula1478: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_synpred64_Formula1610: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funCall_in_synpred64_Formula1612: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_material_in_synpred71_Formula1707: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_synpred74_Formula1722: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funCall_in_synpred76_Formula1746: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred81_Formula1812: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred82_Formula1818: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred83_Formula1824: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred84_Formula1829: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred89_Formula1855: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred90_Formula1861: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred91_Formula1866: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred92_Formula1871: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_synpred104_Formula1999: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x02004000, 0x00000000]),
    FOLLOW_arrayName_in_synpred104_Formula2001: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_arrayName_in_synpred108_Formula2039: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_NEWLINE_in_synpred108_Formula2041: new org.antlr.runtime.BitSet([0x40000000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_COLON_in_synpred108_Formula2044: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();