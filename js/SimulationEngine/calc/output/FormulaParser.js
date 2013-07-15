// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Library/WebServer/Documents/calc/Formula.g 2013-07-07 07:58:20

var FormulaParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    FormulaParser.superclass.constructor.call(this, input, state);

    this.dfa5 = new FormulaParser.DFA5(this);
    this.dfa52 = new FormulaParser.DFA52(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(FormulaParser, {
    EOF: -1,
    T__101: 101,
    T__102: 102,
    T__103: 103,
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
    NUMBER: 21,
    LABEL: 22,
    MINARRAY: 23,
    INNER: 24,
    ASSIGNED: 25,
    NEWLINE: 26,
    W: 27,
    H: 28,
    I: 29,
    L: 30,
    E: 31,
    WHILESTATEMENT: 32,
    F: 33,
    O: 34,
    R: 35,
    FORSTATEMENT: 36,
    M: 37,
    FROMSTATEMENT: 38,
    N: 39,
    INSTATEMENT: 40,
    T: 41,
    TOSTATEMENT: 42,
    B: 43,
    Y: 44,
    BYSTATEMENT: 45,
    P: 46,
    LOOPSTATEMENT: 47,
    IFSTATEMENT: 48,
    THENSTATEMENT: 49,
    S: 50,
    ELSESTATEMENT: 51,
    U: 52,
    C: 53,
    FUNCTIONSTATEMENT: 54,
    D: 55,
    ENDBLOCK: 56,
    RETURNSTATEMENT: 57,
    IDENT: 58,
    EQUALS: 59,
    PRIMITIVE: 60,
    OR: 61,
    XOR: 62,
    X: 63,
    AND: 64,
    A: 65,
    NOTEQUALS: 66,
    LT: 67,
    LTEQ: 68,
    GT: 69,
    GTEQ: 70,
    PLUS: 71,
    MINUS: 72,
    MULT: 73,
    DIV: 74,
    MOD: 75,
    COLON: 76,
    POW: 77,
    NOT: 78,
    LARR: 79,
    RARR: 80,
    COMMA: 81,
    STRING: 82,
    LCURL: 83,
    RCURL: 84,
    INTEGER: 85,
    FLOAT: 86,
    TRUE: 87,
    FALSE: 88,
    PER: 89,
    CUBED: 90,
    SQUARED: 91,
    Q: 92,
    COMMENT: 93,
    LINE_COMMENT: 94,
    WS: 95,
    G: 96,
    J: 97,
    K: 98,
    V: 99,
    Z: 100
});

(function(){
// public class variables
var EOF= -1,
    T__101= 101,
    T__102= 102,
    T__103= 103,
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
    NUMBER= 21,
    LABEL= 22,
    MINARRAY= 23,
    INNER= 24,
    ASSIGNED= 25,
    NEWLINE= 26,
    W= 27,
    H= 28,
    I= 29,
    L= 30,
    E= 31,
    WHILESTATEMENT= 32,
    F= 33,
    O= 34,
    R= 35,
    FORSTATEMENT= 36,
    M= 37,
    FROMSTATEMENT= 38,
    N= 39,
    INSTATEMENT= 40,
    T= 41,
    TOSTATEMENT= 42,
    B= 43,
    Y= 44,
    BYSTATEMENT= 45,
    P= 46,
    LOOPSTATEMENT= 47,
    IFSTATEMENT= 48,
    THENSTATEMENT= 49,
    S= 50,
    ELSESTATEMENT= 51,
    U= 52,
    C= 53,
    FUNCTIONSTATEMENT= 54,
    D= 55,
    ENDBLOCK= 56,
    RETURNSTATEMENT= 57,
    IDENT= 58,
    EQUALS= 59,
    PRIMITIVE= 60,
    OR= 61,
    XOR= 62,
    X= 63,
    AND= 64,
    A= 65,
    NOTEQUALS= 66,
    LT= 67,
    LTEQ= 68,
    GT= 69,
    GTEQ= 70,
    PLUS= 71,
    MINUS= 72,
    MULT= 73,
    DIV= 74,
    MOD= 75,
    COLON= 76,
    POW= 77,
    NOT= 78,
    LARR= 79,
    RARR= 80,
    COMMA= 81,
    STRING= 82,
    LCURL= 83,
    RCURL= 84,
    INTEGER= 85,
    FLOAT= 86,
    TRUE= 87,
    FALSE= 88,
    PER= 89,
    CUBED= 90,
    SQUARED= 91,
    Q= 92,
    COMMENT= 93,
    LINE_COMMENT= 94,
    WS= 95,
    G= 96,
    J= 97,
    K= 98,
    V= 99,
    Z= 100;

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

    // /Library/WebServer/Documents/calc/Formula.g:38:1: lines : ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:39:2: ( ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:39:4: ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF
            // /Library/WebServer/Documents/calc/Formula.g:39:4: ( NEWLINE )*
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
                    NEWLINE1=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines138); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE1);



                    break;

                default :
                    break loop1;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:39:13: ( expression ( ( NEWLINE )+ | EOF ) )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==WHILESTATEMENT||LA4_0==FORSTATEMENT||LA4_0==IFSTATEMENT||LA4_0==FUNCTIONSTATEMENT||(LA4_0>=RETURNSTATEMENT && LA4_0<=IDENT)||LA4_0==PRIMITIVE||LA4_0==MINUS||(LA4_0>=NOT && LA4_0<=LARR)||(LA4_0>=STRING && LA4_0<=LCURL)||(LA4_0>=INTEGER && LA4_0<=FALSE)||LA4_0==101) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:39:14: expression ( ( NEWLINE )+ | EOF )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_lines142);
                    expression2=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression2.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:39:26: ( ( NEWLINE )+ | EOF )
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
                            // /Library/WebServer/Documents/calc/Formula.g:39:27: ( NEWLINE )+
                            // /Library/WebServer/Documents/calc/Formula.g:39:27: ( NEWLINE )+
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
                                    NEWLINE3=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines146); if (this.state.failed) return retval; 
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
                            // /Library/WebServer/Documents/calc/Formula.g:39:36: EOF
                            EOF4=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines149); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EOF.add(EOF4);



                            break;

                    }



                    break;

                default :
                    break loop4;
                }
            } while (true);

            EOF5=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines154); if (this.state.failed) return retval; 
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
            // 39:47: -> ^( LINES ( expression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:39:50: ^( LINES ( expression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LINES, "LINES"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:39:58: ( expression )*
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

    // /Library/WebServer/Documents/calc/Formula.g:98:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );
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
            // /Library/WebServer/Documents/calc/Formula.g:99:2: ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp )
            var alt5=8;
            alt5 = this.dfa5.predict(this.input);
            switch (alt5) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:99:5: assignment
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_assignment_in_expression416);
                    assignment6=this.assignment();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment6.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:100:5: logicalExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_expression422);
                    logicalExpression7=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression7.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:101:5: whileLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_whileLoop_in_expression428);
                    whileLoop8=this.whileLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileLoop8.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:102:5: forLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forLoop_in_expression434);
                    forLoop9=this.forLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forLoop9.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:103:5: forInLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forInLoop_in_expression440);
                    forInLoop10=this.forInLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forInLoop10.getTree());


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:104:5: ifThenElse
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_ifThenElse_in_expression446);
                    ifThenElse11=this.ifThenElse();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifThenElse11.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:105:5: functionDef
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_functionDef_in_expression452);
                    functionDef12=this.functionDef();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionDef12.getTree());


                    break;
                case 8 :
                    // /Library/WebServer/Documents/calc/Formula.g:106:5: returnExp
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_returnExp_in_expression458);
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

    // /Library/WebServer/Documents/calc/Formula.g:109:1: returnExp : RETURNSTATEMENT logicalExpression ;
    // $ANTLR start "returnExp"
    returnExp: function() {
        var retval = new FormulaParser.returnExp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var RETURNSTATEMENT14 = null;
         var logicalExpression15 = null;

        var RETURNSTATEMENT14_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:110:2: ( RETURNSTATEMENT logicalExpression )
            // /Library/WebServer/Documents/calc/Formula.g:111:2: RETURNSTATEMENT logicalExpression
            root_0 = this.adaptor.nil();

            RETURNSTATEMENT14=this.match(this.input,RETURNSTATEMENT,FormulaParser.FOLLOW_RETURNSTATEMENT_in_returnExp470); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RETURNSTATEMENT14_tree = this.adaptor.create(RETURNSTATEMENT14);
            root_0 = this.adaptor.becomeRoot(RETURNSTATEMENT14_tree, root_0);
            }
            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_returnExp473);
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

    // /Library/WebServer/Documents/calc/Formula.g:114:1: innerBlock : ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:115:2: ( ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) )
            // /Library/WebServer/Documents/calc/Formula.g:115:4: ( expression ( ( NEWLINE )+ ) )*
            // /Library/WebServer/Documents/calc/Formula.g:115:4: ( expression ( ( NEWLINE )+ ) )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==WHILESTATEMENT||LA7_0==FORSTATEMENT||LA7_0==IFSTATEMENT||LA7_0==FUNCTIONSTATEMENT||(LA7_0>=RETURNSTATEMENT && LA7_0<=IDENT)||LA7_0==PRIMITIVE||LA7_0==MINUS||(LA7_0>=NOT && LA7_0<=LARR)||(LA7_0>=STRING && LA7_0<=LCURL)||(LA7_0>=INTEGER && LA7_0<=FALSE)||LA7_0==101) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:115:5: expression ( ( NEWLINE )+ )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_innerBlock486);
                    expression16=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression16.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:115:17: ( ( NEWLINE )+ )
                    // /Library/WebServer/Documents/calc/Formula.g:115:18: ( NEWLINE )+
                    // /Library/WebServer/Documents/calc/Formula.g:115:18: ( NEWLINE )+
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
                            NEWLINE17=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_innerBlock490); if (this.state.failed) return retval; 
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
            // 115:30: -> ^( LINES ( expression )+ )
            {
                // /Library/WebServer/Documents/calc/Formula.g:115:33: ^( LINES ( expression )+ )
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

    // /Library/WebServer/Documents/calc/Formula.g:118:1: whileLoop : WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:119:2: ( WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:119:4: WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            WHILESTATEMENT18=this.match(this.input,WHILESTATEMENT,FormulaParser.FOLLOW_WHILESTATEMENT_in_whileLoop515); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_WHILESTATEMENT.add(WHILESTATEMENT18);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_whileLoop517);
            logicalExpression19=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression19.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:119:37: ( NEWLINE )+
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
                    NEWLINE20=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_whileLoop519); if (this.state.failed) return retval; 
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

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_whileLoop522);
            innerBlock21=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock21.getTree());
            ENDBLOCK22=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_whileLoop525); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK22);

            LOOPSTATEMENT23=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_whileLoop527); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT23);



            // AST REWRITE
            // elements: innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 119:81: -> ^( WHILE logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:119:84: ^( WHILE logicalExpression innerBlock )
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

    // /Library/WebServer/Documents/calc/Formula.g:122:1: forLoop : FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:123:2: ( FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:123:4: FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT24=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forLoop548); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT24);

            IDENT25=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forLoop550); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT25);

            FROMSTATEMENT26=this.match(this.input,FROMSTATEMENT,FormulaParser.FOLLOW_FROMSTATEMENT_in_forLoop552); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FROMSTATEMENT.add(FROMSTATEMENT26);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop554);
            logicalExpression27=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression27.getTree());
            TOSTATEMENT28=this.match(this.input,TOSTATEMENT,FormulaParser.FOLLOW_TOSTATEMENT_in_forLoop556); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_TOSTATEMENT.add(TOSTATEMENT28);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop558);
            logicalExpression29=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression29.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:123:85: ( BYSTATEMENT logicalExpression )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==BYSTATEMENT) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:123:86: BYSTATEMENT logicalExpression
                    BYSTATEMENT30=this.match(this.input,BYSTATEMENT,FormulaParser.FOLLOW_BYSTATEMENT_in_forLoop561); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_BYSTATEMENT.add(BYSTATEMENT30);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop563);
                    logicalExpression31=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression31.getTree());


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:123:118: ( NEWLINE )+
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
                    NEWLINE32=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forLoop567); if (this.state.failed) return retval; 
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

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forLoop570);
            innerBlock33=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock33.getTree());
            ENDBLOCK34=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forLoop573); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK34);

            LOOPSTATEMENT35=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forLoop575); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT35);



            // AST REWRITE
            // elements: IDENT, innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 123:162: -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:123:165: ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FOR, "FOR"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:123:177: ^( PARAMS ( logicalExpression )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:123:186: ( logicalExpression )*
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

    // /Library/WebServer/Documents/calc/Formula.g:126:1: forInLoop : FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:127:2: ( FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:127:4: FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT36=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forInLoop603); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT36);

            IDENT37=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forInLoop605); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT37);

            INSTATEMENT38=this.match(this.input,INSTATEMENT,FormulaParser.FOLLOW_INSTATEMENT_in_forInLoop607); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_INSTATEMENT.add(INSTATEMENT38);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forInLoop609);
            logicalExpression39=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression39.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:127:53: ( NEWLINE )+
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
                    NEWLINE40=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forInLoop611); if (this.state.failed) return retval; 
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

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forInLoop614);
            innerBlock41=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock41.getTree());
            ENDBLOCK42=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forInLoop617); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK42);

            LOOPSTATEMENT43=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forInLoop619); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT43);



            // AST REWRITE
            // elements: innerBlock, logicalExpression, IDENT
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 127:98: -> ^( FORIN IDENT logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:127:101: ^( FORIN IDENT logicalExpression innerBlock )
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

    // /Library/WebServer/Documents/calc/Formula.g:130:1: ifThenElse : IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) ;
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
            // /Library/WebServer/Documents/calc/Formula.g:131:2: ( IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) )
            // /Library/WebServer/Documents/calc/Formula.g:131:4: IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT
            IFSTATEMENT44=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse644); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT44);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse646);
            logicalExpression45=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression45.getTree());
            THENSTATEMENT46=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse648); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT46);

            // /Library/WebServer/Documents/calc/Formula.g:131:49: ( NEWLINE )+
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
                    NEWLINE47=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse651); if (this.state.failed) return retval; 
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

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse654);
            innerBlock48=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock48.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:131:70: ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )*
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
                    // /Library/WebServer/Documents/calc/Formula.g:131:71: ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT49=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse658); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT49);

                    IFSTATEMENT50=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse660); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT50);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse662);
                    logicalExpression51=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression51.getTree());
                    THENSTATEMENT52=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse664); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT52);

                    // /Library/WebServer/Documents/calc/Formula.g:131:129: ( NEWLINE )+
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
                            NEWLINE53=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse666); if (this.state.failed) return retval; 
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

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse669);
                    innerBlock54=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock54.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:131:151: ( ELSESTATEMENT ( NEWLINE )+ innerBlock )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==ELSESTATEMENT) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:131:152: ELSESTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT55=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse674); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT55);

                    // /Library/WebServer/Documents/calc/Formula.g:131:166: ( NEWLINE )+
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
                            NEWLINE56=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse676); if (this.state.failed) return retval; 
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

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse679);
                    innerBlock57=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock57.getTree());


                    break;

            }

            ENDBLOCK58=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_ifThenElse683); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK58);

            IFSTATEMENT59=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse685); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT59);



            // AST REWRITE
            // elements: innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 131:209: -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
            {
                // /Library/WebServer/Documents/calc/Formula.g:131:212: ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IFTHENELSE, "IFTHENELSE"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:131:225: ^( PARAMS ( logicalExpression )+ )
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
                // /Library/WebServer/Documents/calc/Formula.g:131:254: ^( PARAMS ( innerBlock )+ )
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

    // /Library/WebServer/Documents/calc/Formula.g:134:1: functionDef : FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) ;
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
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_101=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 101");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:135:2: ( FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:135:4: FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT
            FUNCTIONSTATEMENT60=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef716); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT60);

            IDENT61=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef718); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT61);

            char_literal62=this.match(this.input,101,FormulaParser.FOLLOW_101_in_functionDef720); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_101.add(char_literal62);

            // /Library/WebServer/Documents/calc/Formula.g:135:32: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==IDENT) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:135:33: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                    IDENT63=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef723); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT63);

                    // /Library/WebServer/Documents/calc/Formula.g:135:40: ( EQUALS defaultValue | ( ',' IDENT )* )
                    var alt18=2;
                    var LA18_0 = this.input.LA(1);

                    if ( (LA18_0==EQUALS) ) {
                        alt18=1;
                    }
                    else if ( (LA18_0==COMMA||LA18_0==102) ) {
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
                            // /Library/WebServer/Documents/calc/Formula.g:135:41: EQUALS defaultValue
                            EQUALS64=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef727); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS64);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef730);
                            defaultValue65=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue65.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:135:64: ( ',' IDENT )*
                            // /Library/WebServer/Documents/calc/Formula.g:135:64: ( ',' IDENT )*
                            loop17:
                            do {
                                var alt17=2;
                                var LA17_0 = this.input.LA(1);

                                if ( (LA17_0==COMMA) ) {
                                    var LA17_1 = this.input.LA(2);

                                    if ( (LA17_1==IDENT) ) {
                                        var LA17_3 = this.input.LA(3);

                                        if ( (LA17_3==COMMA||LA17_3==102) ) {
                                            alt17=1;
                                        }


                                    }


                                }


                                switch (alt17) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:135:65: ',' IDENT
                                    char_literal66=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_functionDef735); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal66);

                                    IDENT67=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef737); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT67);



                                    break;

                                default :
                                    break loop17;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:135:79: ( ',' IDENT EQUALS defaultValue )*
                    loop19:
                    do {
                        var alt19=2;
                        var LA19_0 = this.input.LA(1);

                        if ( (LA19_0==COMMA) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:135:80: ',' IDENT EQUALS defaultValue
                            char_literal68=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_functionDef744); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal68);

                            IDENT69=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef746); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT69);

                            EQUALS70=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef748); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS70);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef750);
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

            char_literal72=this.match(this.input,102,FormulaParser.FOLLOW_102_in_functionDef757); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal72);

            // /Library/WebServer/Documents/calc/Formula.g:135:119: ( NEWLINE )+
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
                    NEWLINE73=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_functionDef759); if (this.state.failed) return retval; 
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

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_functionDef762);
            innerBlock74=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock74.getTree());
            ENDBLOCK75=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_functionDef765); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK75);

            FUNCTIONSTATEMENT76=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef767); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT76);



            // AST REWRITE
            // elements: defaultValue, IDENT, innerBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 135:167: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:135:170: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:135:181: ^( PARAMS ( IDENT )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:135:190: ( IDENT )*
                while ( stream_IDENT.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                }
                stream_IDENT.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:135:198: ^( DEFAULTS ( defaultValue )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:135:209: ( defaultValue )*
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
    assignment_return: (function() {
        FormulaParser.assignment_return = function(){};
        org.antlr.lang.extend(FormulaParser.assignment_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:138:1: assignment : ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression ) );
    // $ANTLR start "assignment"
    assignment: function() {
        var retval = new FormulaParser.assignment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT77 = null;
        var char_literal78 = null;
        var IDENT79 = null;
        var EQUALS80 = null;
        var char_literal82 = null;
        var IDENT83 = null;
        var char_literal84 = null;
        var IDENT85 = null;
        var EQUALS86 = null;
        var char_literal88 = null;
        var string_literal89 = null;
        var PRIMITIVE91 = null;
        var char_literal93 = null;
        var PRIMITIVE94 = null;
        var string_literal96 = null;
         var defaultValue81 = null;
         var defaultValue87 = null;
         var logicalExpression90 = null;
         var assigned92 = null;
         var assigned95 = null;
         var logicalExpression97 = null;

        var IDENT77_tree=null;
        var char_literal78_tree=null;
        var IDENT79_tree=null;
        var EQUALS80_tree=null;
        var char_literal82_tree=null;
        var IDENT83_tree=null;
        var char_literal84_tree=null;
        var IDENT85_tree=null;
        var EQUALS86_tree=null;
        var char_literal88_tree=null;
        var string_literal89_tree=null;
        var PRIMITIVE91_tree=null;
        var char_literal93_tree=null;
        var PRIMITIVE94_tree=null;
        var string_literal96_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_PRIMITIVE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PRIMITIVE");
        var stream_103=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 103");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_101=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 101");
        var stream_assigned=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assigned");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:139:2: ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression ) )
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==IDENT) ) {
                var LA29_1 = this.input.LA(2);

                if ( (LA29_1==101) ) {
                    alt29=1;
                }
                else if ( (LA29_1==LARR||LA29_1==COMMA||LA29_1==103) ) {
                    alt29=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 29, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA29_0==PRIMITIVE) ) {
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
                    // /Library/WebServer/Documents/calc/Formula.g:140:2: IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression
                    IDENT77=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment802); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT77);

                    char_literal78=this.match(this.input,101,FormulaParser.FOLLOW_101_in_assignment804); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_101.add(char_literal78);

                    // /Library/WebServer/Documents/calc/Formula.g:140:12: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
                    var alt25=2;
                    var LA25_0 = this.input.LA(1);

                    if ( (LA25_0==IDENT) ) {
                        alt25=1;
                    }
                    switch (alt25) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:140:13: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                            IDENT79=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment807); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT79);

                            // /Library/WebServer/Documents/calc/Formula.g:140:20: ( EQUALS defaultValue | ( ',' IDENT )* )
                            var alt23=2;
                            var LA23_0 = this.input.LA(1);

                            if ( (LA23_0==EQUALS) ) {
                                alt23=1;
                            }
                            else if ( (LA23_0==COMMA||LA23_0==102) ) {
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
                                    // /Library/WebServer/Documents/calc/Formula.g:140:21: EQUALS defaultValue
                                    EQUALS80=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment811); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS80);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment813);
                                    defaultValue81=this.defaultValue();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue81.getTree());


                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:140:43: ( ',' IDENT )*
                                    // /Library/WebServer/Documents/calc/Formula.g:140:43: ( ',' IDENT )*
                                    loop22:
                                    do {
                                        var alt22=2;
                                        var LA22_0 = this.input.LA(1);

                                        if ( (LA22_0==COMMA) ) {
                                            var LA22_1 = this.input.LA(2);

                                            if ( (LA22_1==IDENT) ) {
                                                var LA22_3 = this.input.LA(3);

                                                if ( (LA22_3==COMMA||LA22_3==102) ) {
                                                    alt22=1;
                                                }


                                            }


                                        }


                                        switch (alt22) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:140:44: ',' IDENT
                                            char_literal82=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment818); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal82);

                                            IDENT83=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment820); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT83);



                                            break;

                                        default :
                                            break loop22;
                                        }
                                    } while (true);



                                    break;

                            }

                            // /Library/WebServer/Documents/calc/Formula.g:140:58: ( ',' IDENT EQUALS defaultValue )*
                            loop24:
                            do {
                                var alt24=2;
                                var LA24_0 = this.input.LA(1);

                                if ( (LA24_0==COMMA) ) {
                                    alt24=1;
                                }


                                switch (alt24) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:140:59: ',' IDENT EQUALS defaultValue
                                    char_literal84=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment827); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal84);

                                    IDENT85=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment829); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT85);

                                    EQUALS86=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment831); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS86);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment833);
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

                    char_literal88=this.match(this.input,102,FormulaParser.FOLLOW_102_in_assignment840); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal88);

                    string_literal89=this.match(this.input,103,FormulaParser.FOLLOW_103_in_assignment842); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_103.add(string_literal89);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment844);
                    logicalExpression90=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression90.getTree());


                    // AST REWRITE
                    // elements: logicalExpression, IDENT, defaultValue
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 140:121: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:140:124: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:140:135: ^( PARAMS ( IDENT )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:140:144: ( IDENT )*
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }
                        // /Library/WebServer/Documents/calc/Formula.g:140:152: ^( DEFAULTS ( defaultValue )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:140:163: ( defaultValue )*
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
                    // /Library/WebServer/Documents/calc/Formula.g:141:2: ( PRIMITIVE | assigned ) ( ',' ( PRIMITIVE | assigned ) )* '<-' logicalExpression
                    // /Library/WebServer/Documents/calc/Formula.g:141:2: ( PRIMITIVE | assigned )
                    var alt26=2;
                    var LA26_0 = this.input.LA(1);

                    if ( (LA26_0==PRIMITIVE) ) {
                        alt26=1;
                    }
                    else if ( (LA26_0==IDENT) ) {
                        alt26=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 26, 0, this.input);

                        throw nvae;
                    }
                    switch (alt26) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:141:3: PRIMITIVE
                            PRIMITIVE91=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment872); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE91);



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:141:15: assigned
                            this.pushFollow(FormulaParser.FOLLOW_assigned_in_assignment876);
                            assigned92=this.assigned();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_assigned.add(assigned92.getTree());


                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:141:25: ( ',' ( PRIMITIVE | assigned ) )*
                    loop28:
                    do {
                        var alt28=2;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0==COMMA) ) {
                            alt28=1;
                        }


                        switch (alt28) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:141:26: ',' ( PRIMITIVE | assigned )
                            char_literal93=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_assignment880); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal93);

                            // /Library/WebServer/Documents/calc/Formula.g:141:30: ( PRIMITIVE | assigned )
                            var alt27=2;
                            var LA27_0 = this.input.LA(1);

                            if ( (LA27_0==PRIMITIVE) ) {
                                alt27=1;
                            }
                            else if ( (LA27_0==IDENT) ) {
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
                                    // /Library/WebServer/Documents/calc/Formula.g:141:31: PRIMITIVE
                                    PRIMITIVE94=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment883); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE94);



                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:141:43: assigned
                                    this.pushFollow(FormulaParser.FOLLOW_assigned_in_assignment887);
                                    assigned95=this.assigned();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_assigned.add(assigned95.getTree());


                                    break;

                            }



                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    string_literal96=this.match(this.input,103,FormulaParser.FOLLOW_103_in_assignment893); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_103.add(string_literal96);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment895);
                    logicalExpression97=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression97.getTree());


                    // AST REWRITE
                    // elements: logicalExpression, assigned, PRIMITIVE
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 141:79: -> ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:141:82: ^( ASSIGN ( PRIMITIVE )* ( assigned )* logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGN, "ASSIGN"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:141:91: ( PRIMITIVE )*
                        while ( stream_PRIMITIVE.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_PRIMITIVE.nextNode());

                        }
                        stream_PRIMITIVE.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:141:102: ( assigned )*
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

    // /Library/WebServer/Documents/calc/Formula.g:144:1: assigned : IDENT ( minarray )? -> ^( ASSIGNED IDENT ( minarray )? ) ;
    // $ANTLR start "assigned"
    assigned: function() {
        var retval = new FormulaParser.assigned_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT98 = null;
         var minarray99 = null;

        var IDENT98_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_minarray=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule minarray");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:145:2: ( IDENT ( minarray )? -> ^( ASSIGNED IDENT ( minarray )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:145:4: IDENT ( minarray )?
            IDENT98=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assigned921); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT98);

            // /Library/WebServer/Documents/calc/Formula.g:145:10: ( minarray )?
            var alt30=2;
            var LA30_0 = this.input.LA(1);

            if ( (LA30_0==LARR) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: minarray
                    this.pushFollow(FormulaParser.FOLLOW_minarray_in_assigned923);
                    minarray99=this.minarray();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_minarray.add(minarray99.getTree());


                    break;

            }



            // AST REWRITE
            // elements: IDENT, minarray
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 145:20: -> ^( ASSIGNED IDENT ( minarray )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:145:23: ^( ASSIGNED IDENT ( minarray )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNED, "ASSIGNED"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:145:40: ( minarray )?
                if ( stream_minarray.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_minarray.nextTree());

                }
                stream_minarray.reset();

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

    // /Library/WebServer/Documents/calc/Formula.g:149:1: logicalExpression : booleanXORExpression ( OR booleanXORExpression )* ;
    // $ANTLR start "logicalExpression"
    logicalExpression: function() {
        var retval = new FormulaParser.logicalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var OR101 = null;
         var booleanXORExpression100 = null;
         var booleanXORExpression102 = null;

        var OR101_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:150:2: ( booleanXORExpression ( OR booleanXORExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:150:4: booleanXORExpression ( OR booleanXORExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_booleanXORExpression_in_logicalExpression949);
            booleanXORExpression100=this.booleanXORExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanXORExpression100.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:150:25: ( OR booleanXORExpression )*
            loop31:
            do {
                var alt31=2;
                var LA31_0 = this.input.LA(1);

                if ( (LA31_0==OR) ) {
                    alt31=1;
                }


                switch (alt31) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:150:26: OR booleanXORExpression
                    OR101=this.match(this.input,OR,FormulaParser.FOLLOW_OR_in_logicalExpression952); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    OR101_tree = this.adaptor.create(OR101);
                    root_0 = this.adaptor.becomeRoot(OR101_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_booleanXORExpression_in_logicalExpression955);
                    booleanXORExpression102=this.booleanXORExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanXORExpression102.getTree());


                    break;

                default :
                    break loop31;
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

    // /Library/WebServer/Documents/calc/Formula.g:155:1: booleanXORExpression : booleanAndExpression ( XOR booleanAndExpression )* ;
    // $ANTLR start "booleanXORExpression"
    booleanXORExpression: function() {
        var retval = new FormulaParser.booleanXORExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var XOR104 = null;
         var booleanAndExpression103 = null;
         var booleanAndExpression105 = null;

        var XOR104_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:156:2: ( booleanAndExpression ( XOR booleanAndExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:156:4: booleanAndExpression ( XOR booleanAndExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_booleanXORExpression985);
            booleanAndExpression103=this.booleanAndExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression103.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:156:25: ( XOR booleanAndExpression )*
            loop32:
            do {
                var alt32=2;
                var LA32_0 = this.input.LA(1);

                if ( (LA32_0==XOR) ) {
                    alt32=1;
                }


                switch (alt32) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:156:26: XOR booleanAndExpression
                    XOR104=this.match(this.input,XOR,FormulaParser.FOLLOW_XOR_in_booleanXORExpression988); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    XOR104_tree = this.adaptor.create(XOR104);
                    root_0 = this.adaptor.becomeRoot(XOR104_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_booleanXORExpression991);
                    booleanAndExpression105=this.booleanAndExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression105.getTree());


                    break;

                default :
                    break loop32;
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

    // /Library/WebServer/Documents/calc/Formula.g:161:1: booleanAndExpression : equalityExpression ( AND equalityExpression )* ;
    // $ANTLR start "booleanAndExpression"
    booleanAndExpression: function() {
        var retval = new FormulaParser.booleanAndExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var AND107 = null;
         var equalityExpression106 = null;
         var equalityExpression108 = null;

        var AND107_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:162:2: ( equalityExpression ( AND equalityExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:162:4: equalityExpression ( AND equalityExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression1020);
            equalityExpression106=this.equalityExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression106.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:162:23: ( AND equalityExpression )*
            loop33:
            do {
                var alt33=2;
                var LA33_0 = this.input.LA(1);

                if ( (LA33_0==AND) ) {
                    alt33=1;
                }


                switch (alt33) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:162:24: AND equalityExpression
                    AND107=this.match(this.input,AND,FormulaParser.FOLLOW_AND_in_booleanAndExpression1023); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    AND107_tree = this.adaptor.create(AND107);
                    root_0 = this.adaptor.becomeRoot(AND107_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression1026);
                    equalityExpression108=this.equalityExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression108.getTree());


                    break;

                default :
                    break loop33;
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

    // /Library/WebServer/Documents/calc/Formula.g:167:1: equalityExpression : relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* ;
    // $ANTLR start "equalityExpression"
    equalityExpression: function() {
        var retval = new FormulaParser.equalityExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set110 = null;
         var relationalExpression109 = null;
         var relationalExpression111 = null;

        var set110_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:168:2: ( relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:168:4: relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression1057);
            relationalExpression109=this.relationalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression109.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:168:25: ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( (LA34_0==EQUALS||LA34_0==NOTEQUALS) ) {
                    alt34=1;
                }


                switch (alt34) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:168:26: ( EQUALS | NOTEQUALS ) relationalExpression
                    
                    set110=this.input.LT(1);
                    if ( this.input.LA(1)==EQUALS||this.input.LA(1)==NOTEQUALS ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set110), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression1067);
                    relationalExpression111=this.relationalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression111.getTree());


                    break;

                default :
                    break loop34;
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

    // /Library/WebServer/Documents/calc/Formula.g:178:1: relationalExpression : additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* ;
    // $ANTLR start "relationalExpression"
    relationalExpression: function() {
        var retval = new FormulaParser.relationalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set113 = null;
         var additiveExpression112 = null;
         var additiveExpression114 = null;

        var set113_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:179:2: ( additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:179:4: additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1109);
            additiveExpression112=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression112.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:179:23: ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( ((LA35_0>=LT && LA35_0<=GTEQ)) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:179:25: ( LT | LTEQ | GT | GTEQ ) additiveExpression
                    
                    set113=this.input.LT(1);
                    if ( (this.input.LA(1)>=LT && this.input.LA(1)<=GTEQ) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set113), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1124);
                    additiveExpression114=this.additiveExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression114.getTree());


                    break;

                default :
                    break loop35;
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

    // /Library/WebServer/Documents/calc/Formula.g:187:1: additiveExpression : multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* ;
    // $ANTLR start "additiveExpression"
    additiveExpression: function() {
        var retval = new FormulaParser.additiveExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set116 = null;
         var multiplicativeExpression115 = null;
         var multiplicativeExpression117 = null;

        var set116_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:188:2: ( multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:188:4: multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1167);
            multiplicativeExpression115=this.multiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression115.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:188:29: ( ( PLUS | MINUS ) multiplicativeExpression )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( ((LA36_0>=PLUS && LA36_0<=MINUS)) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:188:31: ( PLUS | MINUS ) multiplicativeExpression
                   
                    set116=this.input.LT(1);
                    if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=MINUS) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set116), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1178);
                    multiplicativeExpression117=this.multiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression117.getTree());


                    break;

                default :
                    break loop36;
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

    // /Library/WebServer/Documents/calc/Formula.g:194:1: multiplicativeExpression : arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )* ;
    // $ANTLR start "multiplicativeExpression"
    multiplicativeExpression: function() {
        var retval = new FormulaParser.multiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set119 = null;
         var arrayExpression118 = null;
         var arrayExpression120 = null;

        var set119_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:195:2: ( arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:195:4: arrayExpression ( ( MULT | DIV | MOD ) arrayExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_arrayExpression_in_multiplicativeExpression1208);
            arrayExpression118=this.arrayExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arrayExpression118.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:195:20: ( ( MULT | DIV | MOD ) arrayExpression )*
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( ((LA37_0>=MULT && LA37_0<=MOD)) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:195:22: ( MULT | DIV | MOD ) arrayExpression
                    
                    set119=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=MOD) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set119), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_arrayExpression_in_multiplicativeExpression1221);
                    arrayExpression120=this.arrayExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arrayExpression120.getTree());


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
    arrayExpression_return: (function() {
        FormulaParser.arrayExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.arrayExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:202:1: arrayExpression : negationExpression ( COLON negationExpression )? -> ^( MINARRAY ( negationExpression )* ) ;
    // $ANTLR start "arrayExpression"
    arrayExpression: function() {
        var retval = new FormulaParser.arrayExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COLON122 = null;
         var negationExpression121 = null;
         var negationExpression123 = null;

        var COLON122_tree=null;
        var stream_COLON=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COLON");
        var stream_negationExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule negationExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:203:2: ( negationExpression ( COLON negationExpression )? -> ^( MINARRAY ( negationExpression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:203:4: negationExpression ( COLON negationExpression )?
            this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_arrayExpression1267);
            negationExpression121=this.negationExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_negationExpression.add(negationExpression121.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:203:23: ( COLON negationExpression )?
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==COLON) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:203:24: COLON negationExpression
                    COLON122=this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_arrayExpression1270); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_COLON.add(COLON122);

                    this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_arrayExpression1272);
                    negationExpression123=this.negationExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_negationExpression.add(negationExpression123.getTree());


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
            // 203:51: -> ^( MINARRAY ( negationExpression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:203:54: ^( MINARRAY ( negationExpression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(MINARRAY, "MINARRAY"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:203:65: ( negationExpression )*
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

    // /Library/WebServer/Documents/calc/Formula.g:207:1: negationExpression : ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression );
    // $ANTLR start "negationExpression"
    negationExpression: function() {
        var retval = new FormulaParser.negationExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS124 = null;
         var powerExpression125 = null;
         var powerExpression126 = null;

        var MINUS124_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_powerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule powerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:208:2: ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression )
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==MINUS) ) {
                alt39=1;
            }
            else if ( (LA39_0==IDENT||LA39_0==PRIMITIVE||(LA39_0>=NOT && LA39_0<=LARR)||(LA39_0>=STRING && LA39_0<=LCURL)||(LA39_0>=INTEGER && LA39_0<=FALSE)||LA39_0==101) ) {
                alt39=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 39, 0, this.input);

                throw nvae;
            }
            switch (alt39) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:208:4: MINUS powerExpression
                    MINUS124=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negationExpression1297); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS124);

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1299);
                    powerExpression125=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_powerExpression.add(powerExpression125.getTree());


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
                    // 208:26: -> ^( NEGATE powerExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:208:29: ^( NEGATE powerExpression )
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
                    // /Library/WebServer/Documents/calc/Formula.g:209:3: powerExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1313);
                    powerExpression126=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, powerExpression126.getTree());


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

    // /Library/WebServer/Documents/calc/Formula.g:211:1: powerExpression : unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) ;
    // $ANTLR start "powerExpression"
    powerExpression: function() {
        var retval = new FormulaParser.powerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW128 = null;
         var unaryExpression127 = null;
         var unaryOrNegate129 = null;

        var POW128_tree=null;
        var stream_POW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token POW");
        var stream_unaryOrNegate=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryOrNegate");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:212:2: ( unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:212:4: unaryExpression ( POW unaryOrNegate )*
            this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_powerExpression1324);
            unaryExpression127=this.unaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression127.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:212:20: ( POW unaryOrNegate )*
            loop40:
            do {
                var alt40=2;
                var LA40_0 = this.input.LA(1);

                if ( (LA40_0==POW) ) {
                    alt40=1;
                }


                switch (alt40) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:212:21: POW unaryOrNegate
                    POW128=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_powerExpression1327); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_POW.add(POW128);

                    this.pushFollow(FormulaParser.FOLLOW_unaryOrNegate_in_powerExpression1329);
                    unaryOrNegate129=this.unaryOrNegate();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryOrNegate.add(unaryOrNegate129.getTree());


                    break;

                default :
                    break loop40;
                }
            } while (true);



            // AST REWRITE
            // elements: unaryOrNegate, unaryExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 212:43: -> ^( POWER unaryExpression ( unaryOrNegate )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:212:47: ^( POWER unaryExpression ( unaryOrNegate )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(POWER, "POWER"), root_1);

                this.adaptor.addChild(root_1, stream_unaryExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:212:71: ( unaryOrNegate )*
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

    // /Library/WebServer/Documents/calc/Formula.g:215:1: unaryOrNegate : ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) );
    // $ANTLR start "unaryOrNegate"
    unaryOrNegate: function() {
        var retval = new FormulaParser.unaryOrNegate_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS131 = null;
         var unaryExpression130 = null;
         var unaryExpression132 = null;

        var MINUS131_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:216:2: ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) )
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==IDENT||LA41_0==PRIMITIVE||(LA41_0>=NOT && LA41_0<=LARR)||(LA41_0>=STRING && LA41_0<=LCURL)||(LA41_0>=INTEGER && LA41_0<=FALSE)||LA41_0==101) ) {
                alt41=1;
            }
            else if ( (LA41_0==MINUS) ) {
                alt41=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 41, 0, this.input);

                throw nvae;
            }
            switch (alt41) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:216:4: unaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1356);
                    unaryExpression130=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression130.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:217:3: MINUS unaryExpression
                    MINUS131=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unaryOrNegate1362); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS131);

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1364);
                    unaryExpression132=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression132.getTree());


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
                    // 217:25: -> ^( NEGATE unaryExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:217:28: ^( NEGATE unaryExpression )
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

    // /Library/WebServer/Documents/calc/Formula.g:222:1: unaryExpression : ( NOT primaryExpression | primaryExpression );
    // $ANTLR start "unaryExpression"
    unaryExpression: function() {
        var retval = new FormulaParser.unaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NOT133 = null;
         var primaryExpression134 = null;
         var primaryExpression135 = null;

        var NOT133_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:223:2: ( NOT primaryExpression | primaryExpression )
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( (LA42_0==NOT) ) {
                alt42=1;
            }
            else if ( (LA42_0==IDENT||LA42_0==PRIMITIVE||LA42_0==LARR||(LA42_0>=STRING && LA42_0<=LCURL)||(LA42_0>=INTEGER && LA42_0<=FALSE)||LA42_0==101) ) {
                alt42=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 42, 0, this.input);

                throw nvae;
            }
            switch (alt42) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:223:4: NOT primaryExpression
                    root_0 = this.adaptor.nil();

                    NOT133=this.match(this.input,NOT,FormulaParser.FOLLOW_NOT_in_unaryExpression1392); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    NOT133_tree = this.adaptor.create(NOT133);
                    root_0 = this.adaptor.becomeRoot(NOT133_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_primaryExpression_in_unaryExpression1395);
                    primaryExpression134=this.primaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression134.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:225:8: primaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_primaryExpression_in_unaryExpression1407);
                    primaryExpression135=this.primaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression135.getTree());


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
    primaryExpression_return: (function() {
        FormulaParser.primaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.primaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:230:1: primaryExpression : innerPrimaryExpression ( minarray )? -> ^( INNER innerPrimaryExpression ( minarray )? ) ;
    // $ANTLR start "primaryExpression"
    primaryExpression: function() {
        var retval = new FormulaParser.primaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var innerPrimaryExpression136 = null;
         var minarray137 = null;

        var stream_innerPrimaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerPrimaryExpression");
        var stream_minarray=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule minarray");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:231:2: ( innerPrimaryExpression ( minarray )? -> ^( INNER innerPrimaryExpression ( minarray )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:231:4: innerPrimaryExpression ( minarray )?
            this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_primaryExpression1438);
            innerPrimaryExpression136=this.innerPrimaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerPrimaryExpression.add(innerPrimaryExpression136.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:231:27: ( minarray )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==LARR) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:231:28: minarray
                    this.pushFollow(FormulaParser.FOLLOW_minarray_in_primaryExpression1441);
                    minarray137=this.minarray();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_minarray.add(minarray137.getTree());


                    break;

            }



            // AST REWRITE
            // elements: minarray, innerPrimaryExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 231:39: -> ^( INNER innerPrimaryExpression ( minarray )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:231:42: ^( INNER innerPrimaryExpression ( minarray )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(INNER, "INNER"), root_1);

                this.adaptor.addChild(root_1, stream_innerPrimaryExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:231:73: ( minarray )?
                if ( stream_minarray.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_minarray.nextTree());

                }
                stream_minarray.reset();

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
    innerPrimaryExpression_return: (function() {
        FormulaParser.innerPrimaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.innerPrimaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:235:1: innerPrimaryExpression : ( '(' logicalExpression ')' | value );
    // $ANTLR start "innerPrimaryExpression"
    innerPrimaryExpression: function() {
        var retval = new FormulaParser.innerPrimaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal138 = null;
        var char_literal140 = null;
         var logicalExpression139 = null;
         var value141 = null;

        var char_literal138_tree=null;
        var char_literal140_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:236:2: ( '(' logicalExpression ')' | value )
            var alt44=2;
            var LA44_0 = this.input.LA(1);

            if ( (LA44_0==101) ) {
                alt44=1;
            }
            else if ( (LA44_0==IDENT||LA44_0==PRIMITIVE||LA44_0==LARR||(LA44_0>=STRING && LA44_0<=LCURL)||(LA44_0>=INTEGER && LA44_0<=FALSE)) ) {
                alt44=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 44, 0, this.input);

                throw nvae;
            }
            switch (alt44) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:236:4: '(' logicalExpression ')'
                    root_0 = this.adaptor.nil();

                    char_literal138=this.match(this.input,101,FormulaParser.FOLLOW_101_in_innerPrimaryExpression1468); if (this.state.failed) return retval;
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_innerPrimaryExpression1471);
                    logicalExpression139=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression139.getTree());
                    char_literal140=this.match(this.input,102,FormulaParser.FOLLOW_102_in_innerPrimaryExpression1473); if (this.state.failed) return retval;


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:237:4: value
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_value_in_innerPrimaryExpression1479);
                    value141=this.value();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, value141.getTree());


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

    // /Library/WebServer/Documents/calc/Formula.g:240:1: value : ( number | bool | string | material | funOrIdent | primitive | array );
    // $ANTLR start "value"
    value: function() {
        var retval = new FormulaParser.value_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var number142 = null;
         var bool143 = null;
         var string144 = null;
         var material145 = null;
         var funOrIdent146 = null;
         var primitive147 = null;
         var array148 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:241:2: ( number | bool | string | material | funOrIdent | primitive | array )
            var alt45=7;
            switch ( this.input.LA(1) ) {
            case INTEGER:
            case FLOAT:
                alt45=1;
                break;
            case TRUE:
            case FALSE:
                alt45=2;
                break;
            case STRING:
                alt45=3;
                break;
            case LCURL:
                alt45=4;
                break;
            case IDENT:
                alt45=5;
                break;
            case PRIMITIVE:
                alt45=6;
                break;
            case LARR:
                alt45=7;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 45, 0, this.input);

                throw nvae;
            }

            switch (alt45) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:241:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_value1493);
                    number142=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number142.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:242:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_value1499);
                    bool143=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool143.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:243:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_value1505);
                    string144=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string144.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:244:5: material
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_material_in_value1511);
                    material145=this.material();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, material145.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:245:4: funOrIdent
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_funOrIdent_in_value1516);
                    funOrIdent146=this.funOrIdent();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, funOrIdent146.getTree());


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:246:4: primitive
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_primitive_in_value1521);
                    primitive147=this.primitive();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primitive147.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:247:4: array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_array_in_value1526);
                    array148=this.array();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, array148.getTree());


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
    defaultValue_return: (function() {
        FormulaParser.defaultValue_return = function(){};
        org.antlr.lang.extend(FormulaParser.defaultValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:251:1: defaultValue : ( negnumber | number | bool | string );
    // $ANTLR start "defaultValue"
    defaultValue: function() {
        var retval = new FormulaParser.defaultValue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var negnumber149 = null;
         var number150 = null;
         var bool151 = null;
         var string152 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:252:2: ( negnumber | number | bool | string )
            var alt46=4;
            switch ( this.input.LA(1) ) {
            case MINUS:
                alt46=1;
                break;
            case INTEGER:
            case FLOAT:
                alt46=2;
                break;
            case TRUE:
            case FALSE:
                alt46=3;
                break;
            case STRING:
                alt46=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 46, 0, this.input);

                throw nvae;
            }

            switch (alt46) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:252:5: negnumber
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_negnumber_in_defaultValue1542);
                    negnumber149=this.negnumber();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, negnumber149.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:253:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_defaultValue1548);
                    number150=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number150.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:254:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_defaultValue1554);
                    bool151=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool151.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:255:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_defaultValue1560);
                    string152=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string152.getTree());


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

    // /Library/WebServer/Documents/calc/Formula.g:258:1: array : LARR ( label ( ',' label )* )? RARR -> ^( ARRAY ( label )* ) ;
    // $ANTLR start "array"
    array: function() {
        var retval = new FormulaParser.array_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LARR153 = null;
        var char_literal155 = null;
        var RARR157 = null;
         var label154 = null;
         var label156 = null;

        var LARR153_tree=null;
        var char_literal155_tree=null;
        var RARR157_tree=null;
        var stream_RARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RARR");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_LARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LARR");
        var stream_label=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule label");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:259:2: ( LARR ( label ( ',' label )* )? RARR -> ^( ARRAY ( label )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:260:2: LARR ( label ( ',' label )* )? RARR
            LARR153=this.match(this.input,LARR,FormulaParser.FOLLOW_LARR_in_array1574); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LARR.add(LARR153);

            // /Library/WebServer/Documents/calc/Formula.g:260:7: ( label ( ',' label )* )?
            var alt48=2;
            var LA48_0 = this.input.LA(1);

            if ( (LA48_0==IDENT||LA48_0==PRIMITIVE||LA48_0==MINUS||(LA48_0>=NOT && LA48_0<=LARR)||(LA48_0>=STRING && LA48_0<=LCURL)||(LA48_0>=INTEGER && LA48_0<=FALSE)||LA48_0==101) ) {
                alt48=1;
            }
            switch (alt48) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:260:8: label ( ',' label )*
                    this.pushFollow(FormulaParser.FOLLOW_label_in_array1577);
                    label154=this.label();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_label.add(label154.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:260:14: ( ',' label )*
                    loop47:
                    do {
                        var alt47=2;
                        var LA47_0 = this.input.LA(1);

                        if ( (LA47_0==COMMA) ) {
                            alt47=1;
                        }


                        switch (alt47) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:260:15: ',' label
                            char_literal155=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_array1580); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal155);

                            this.pushFollow(FormulaParser.FOLLOW_label_in_array1582);
                            label156=this.label();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_label.add(label156.getTree());


                            break;

                        default :
                            break loop47;
                        }
                    } while (true);



                    break;

            }

            RARR157=this.match(this.input,RARR,FormulaParser.FOLLOW_RARR_in_array1589); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_RARR.add(RARR157);



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
            // 260:35: -> ^( ARRAY ( label )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:260:38: ^( ARRAY ( label )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAY, "ARRAY"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:260:46: ( label )*
                while ( stream_label.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_label.nextTree());

                }
                stream_label.reset();

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

    // /Library/WebServer/Documents/calc/Formula.g:263:1: minarray : LARR ( logicalExpression )? ( COMMA ( logicalExpression )? )* RARR ;
    // $ANTLR start "minarray"
    minarray: function() {
        var retval = new FormulaParser.minarray_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LARR158 = null;
        var COMMA160 = null;
        var RARR162 = null;
         var logicalExpression159 = null;
         var logicalExpression161 = null;

        var LARR158_tree=null;
        var COMMA160_tree=null;
        var RARR162_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:264:2: ( LARR ( logicalExpression )? ( COMMA ( logicalExpression )? )* RARR )
            // /Library/WebServer/Documents/calc/Formula.g:265:2: LARR ( logicalExpression )? ( COMMA ( logicalExpression )? )* RARR
            root_0 = this.adaptor.nil();

            LARR158=this.match(this.input,LARR,FormulaParser.FOLLOW_LARR_in_minarray1612); if (this.state.failed) return retval;
            // /Library/WebServer/Documents/calc/Formula.g:265:9: ( logicalExpression )?
            var alt49=2;
            var LA49_0 = this.input.LA(1);

            if ( (LA49_0==IDENT||LA49_0==PRIMITIVE||LA49_0==MINUS||(LA49_0>=NOT && LA49_0<=LARR)||(LA49_0>=STRING && LA49_0<=LCURL)||(LA49_0>=INTEGER && LA49_0<=FALSE)||LA49_0==101) ) {
                alt49=1;
            }
            switch (alt49) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:0:0: logicalExpression
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1616);
                    logicalExpression159=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression159.getTree());


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:265:28: ( COMMA ( logicalExpression )? )*
            loop51:
            do {
                var alt51=2;
                var LA51_0 = this.input.LA(1);

                if ( (LA51_0==COMMA) ) {
                    alt51=1;
                }


                switch (alt51) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:265:29: COMMA ( logicalExpression )?
                    COMMA160=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_minarray1620); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    COMMA160_tree = this.adaptor.create(COMMA160);
                    this.adaptor.addChild(root_0, COMMA160_tree);
                    }
                    // /Library/WebServer/Documents/calc/Formula.g:265:35: ( logicalExpression )?
                    var alt50=2;
                    var LA50_0 = this.input.LA(1);

                    if ( (LA50_0==IDENT||LA50_0==PRIMITIVE||LA50_0==MINUS||(LA50_0>=NOT && LA50_0<=LARR)||(LA50_0>=STRING && LA50_0<=LCURL)||(LA50_0>=INTEGER && LA50_0<=FALSE)||LA50_0==101) ) {
                        alt50=1;
                    }
                    switch (alt50) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: logicalExpression
                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_minarray1622);
                            logicalExpression161=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression161.getTree());


                            break;

                    }



                    break;

                default :
                    break loop51;
                }
            } while (true);

            RARR162=this.match(this.input,RARR,FormulaParser.FOLLOW_RARR_in_minarray1629); if (this.state.failed) return retval;



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

    // /Library/WebServer/Documents/calc/Formula.g:268:1: label : ( STRING COLON )? logicalExpression -> ^( LABEL logicalExpression ( STRING )? ) ;
    // $ANTLR start "label"
    label: function() {
        var retval = new FormulaParser.label_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STRING163 = null;
        var COLON164 = null;
         var logicalExpression165 = null;

        var STRING163_tree=null;
        var COLON164_tree=null;
        var stream_COLON=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COLON");
        var stream_STRING=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token STRING");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:268:7: ( ( STRING COLON )? logicalExpression -> ^( LABEL logicalExpression ( STRING )? ) )
            // /Library/WebServer/Documents/calc/Formula.g:269:2: ( STRING COLON )? logicalExpression
            // /Library/WebServer/Documents/calc/Formula.g:269:2: ( STRING COLON )?
            var alt52=2;
            alt52 = this.dfa52.predict(this.input);
            switch (alt52) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:269:3: STRING COLON
                    STRING163=this.match(this.input,STRING,FormulaParser.FOLLOW_STRING_in_label1643); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_STRING.add(STRING163);

                    COLON164=this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_label1645); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_COLON.add(COLON164);



                    break;

            }

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_label1649);
            logicalExpression165=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression165.getTree());


            // AST REWRITE
            // elements: STRING, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 269:36: -> ^( LABEL logicalExpression ( STRING )? )
            {
                // /Library/WebServer/Documents/calc/Formula.g:269:39: ^( LABEL logicalExpression ( STRING )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LABEL, "LABEL"), root_1);

                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:269:65: ( STRING )?
                if ( stream_STRING.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_STRING.nextNode());

                }
                stream_STRING.reset();

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

    // /Library/WebServer/Documents/calc/Formula.g:280:1: number : ( INTEGER | FLOAT );
    // $ANTLR start "number"
    number: function() {
        var retval = new FormulaParser.number_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set166 = null;

        var set166_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:280:8: ( INTEGER | FLOAT )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set166=this.input.LT(1);
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set166));
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

    // /Library/WebServer/Documents/calc/Formula.g:282:1: negnumber : '-' number -> ^( NEGATE number ) ;
    // $ANTLR start "negnumber"
    negnumber: function() {
        var retval = new FormulaParser.negnumber_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal167 = null;
         var number168 = null;

        var char_literal167_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_number=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule number");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:282:11: ( '-' number -> ^( NEGATE number ) )
            // /Library/WebServer/Documents/calc/Formula.g:282:13: '-' number
            char_literal167=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negnumber1725); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_MINUS.add(char_literal167);

            this.pushFollow(FormulaParser.FOLLOW_number_in_negnumber1727);
            number168=this.number();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_number.add(number168.getTree());


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
            // 282:24: -> ^( NEGATE number )
            {
                // /Library/WebServer/Documents/calc/Formula.g:282:27: ^( NEGATE number )
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

    // /Library/WebServer/Documents/calc/Formula.g:292:1: bool : ( TRUE | FALSE );
    // $ANTLR start "bool"
    bool: function() {
        var retval = new FormulaParser.bool_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set169 = null;

        var set169_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:293:2: ( TRUE | FALSE )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set169=this.input.LT(1);
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set169));
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

    // /Library/WebServer/Documents/calc/Formula.g:305:1: material : LCURL additiveExpression unitMultiplicativeExpression RCURL -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) ;
    // $ANTLR start "material"
    material: function() {
        var retval = new FormulaParser.material_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LCURL170 = null;
        var RCURL173 = null;
         var additiveExpression171 = null;
         var unitMultiplicativeExpression172 = null;

        var LCURL170_tree=null;
        var RCURL173_tree=null;
        var stream_LCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LCURL");
        var stream_RCURL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RCURL");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        var stream_additiveExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule additiveExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:305:9: ( LCURL additiveExpression unitMultiplicativeExpression RCURL -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) )
            // /Library/WebServer/Documents/calc/Formula.g:305:12: LCURL additiveExpression unitMultiplicativeExpression RCURL
            LCURL170=this.match(this.input,LCURL,FormulaParser.FOLLOW_LCURL_in_material1879); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LCURL.add(LCURL170);

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_material1881);
            additiveExpression171=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_additiveExpression.add(additiveExpression171.getTree());
            this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_material1883);
            unitMultiplicativeExpression172=this.unitMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression172.getTree());
            RCURL173=this.match(this.input,RCURL,FormulaParser.FOLLOW_RCURL_in_material1885); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_RCURL.add(RCURL173);



            // AST REWRITE
            // elements: unitMultiplicativeExpression, additiveExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 305:72: -> ^( MATERIAL unitMultiplicativeExpression additiveExpression )
            {
                // /Library/WebServer/Documents/calc/Formula.g:305:75: ^( MATERIAL unitMultiplicativeExpression additiveExpression )
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

    // /Library/WebServer/Documents/calc/Formula.g:312:1: unitMultiplicativeExpression : unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* ;
    // $ANTLR start "unitMultiplicativeExpression"
    unitMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PER175 = null;
         var unitInnerMultiplicativeExpression174 = null;
         var unitInnerMultiplicativeExpression176 = null;

        var PER175_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:313:2: ( unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:313:4: unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1922);
            unitInnerMultiplicativeExpression174=this.unitInnerMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression174.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:313:38: ( PER unitInnerMultiplicativeExpression )*
            loop53:
            do {
                var alt53=2;
                var LA53_0 = this.input.LA(1);

                if ( (LA53_0==PER) ) {
                    alt53=1;
                }


                switch (alt53) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:313:40: PER unitInnerMultiplicativeExpression
                    PER175=this.match(this.input,PER,FormulaParser.FOLLOW_PER_in_unitMultiplicativeExpression1926); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    PER175_tree = this.adaptor.create(PER175);
                    root_0 = this.adaptor.becomeRoot(PER175_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1929);
                    unitInnerMultiplicativeExpression176=this.unitInnerMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression176.getTree());


                    break;

                default :
                    break loop53;
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

    // /Library/WebServer/Documents/calc/Formula.g:316:1: unitInnerMultiplicativeExpression : unitClump ( ( MULT | DIV ) unitClump )* ;
    // $ANTLR start "unitInnerMultiplicativeExpression"
    unitInnerMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitInnerMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set178 = null;
         var unitClump177 = null;
         var unitClump179 = null;

        var set178_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:317:2: ( unitClump ( ( MULT | DIV ) unitClump )* )
            // /Library/WebServer/Documents/calc/Formula.g:317:4: unitClump ( ( MULT | DIV ) unitClump )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1945);
            unitClump177=this.unitClump();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump177.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:317:14: ( ( MULT | DIV ) unitClump )*
            loop54:
            do {
                var alt54=2;
                var LA54_0 = this.input.LA(1);

                if ( ((LA54_0>=MULT && LA54_0<=DIV)) ) {
                    alt54=1;
                }


                switch (alt54) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:317:16: ( MULT | DIV ) unitClump
                   
                    set178=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=DIV) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set178), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1956);
                    unitClump179=this.unitClump();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump179.getTree());


                    break;

                default :
                    break loop54;
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

    // /Library/WebServer/Documents/calc/Formula.g:320:1: unitClump : ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) );
    // $ANTLR start "unitClump"
    unitClump: function() {
        var retval = new FormulaParser.unitClump_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INTEGER180 = null;
        var DIV181 = null;
        var CUBED183 = null;
        var SQUARED184 = null;
        var CUBED186 = null;
        var SQUARED187 = null;
         var unitPowerExpression182 = null;
         var unitPowerExpression185 = null;

        var INTEGER180_tree=null;
        var DIV181_tree=null;
        var CUBED183_tree=null;
        var SQUARED184_tree=null;
        var CUBED186_tree=null;
        var SQUARED187_tree=null;
        var stream_INTEGER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INTEGER");
        var stream_SQUARED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token SQUARED");
        var stream_DIV=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DIV");
        var stream_CUBED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token CUBED");
        var stream_unitPowerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitPowerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:321:2: ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) )
            var alt59=2;
            var LA59_0 = this.input.LA(1);

            if ( (LA59_0==INTEGER) ) {
                alt59=1;
            }
            else if ( (LA59_0==IDENT||LA59_0==101) ) {
                alt59=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 59, 0, this.input);

                throw nvae;
            }
            switch (alt59) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:321:4: ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )?
                    // /Library/WebServer/Documents/calc/Formula.g:321:4: ( INTEGER DIV )
                    // /Library/WebServer/Documents/calc/Formula.g:321:5: INTEGER DIV
                    INTEGER180=this.match(this.input,INTEGER,FormulaParser.FOLLOW_INTEGER_in_unitClump1972); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_INTEGER.add(INTEGER180);

                    DIV181=this.match(this.input,DIV,FormulaParser.FOLLOW_DIV_in_unitClump1974); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_DIV.add(DIV181);




                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump1977);
                    unitPowerExpression182=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression182.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:321:38: ( CUBED )?
                    var alt55=2;
                    var LA55_0 = this.input.LA(1);

                    if ( (LA55_0==CUBED) ) {
                        alt55=1;
                    }
                    switch (alt55) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: CUBED
                            CUBED183=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump1979); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED183);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:321:45: ( SQUARED )?
                    var alt56=2;
                    var LA56_0 = this.input.LA(1);

                    if ( (LA56_0==SQUARED) ) {
                        alt56=1;
                    }
                    switch (alt56) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: SQUARED
                            SQUARED184=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump1982); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED184);



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
                    // 321:54: -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:321:57: ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        this.adaptor.addChild(root_1, this.adaptor.create(NEGATE, "NEGATE"));
                        // /Library/WebServer/Documents/calc/Formula.g:321:96: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:321:103: ( SQUARED )*
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
                    // /Library/WebServer/Documents/calc/Formula.g:322:5: unitPowerExpression ( CUBED )? ( SQUARED )?
                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump2005);
                    unitPowerExpression185=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression185.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:322:25: ( CUBED )?
                    var alt57=2;
                    var LA57_0 = this.input.LA(1);

                    if ( (LA57_0==CUBED) ) {
                        alt57=1;
                    }
                    switch (alt57) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: CUBED
                            CUBED186=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump2007); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED186);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:322:32: ( SQUARED )?
                    var alt58=2;
                    var LA58_0 = this.input.LA(1);

                    if ( (LA58_0==SQUARED) ) {
                        alt58=1;
                    }
                    switch (alt58) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: SQUARED
                            SQUARED187=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump2010); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED187);



                            break;

                    }



                    // AST REWRITE
                    // elements: unitPowerExpression, SQUARED, CUBED
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 322:41: -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:322:44: ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        // /Library/WebServer/Documents/calc/Formula.g:322:76: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:322:83: ( SQUARED )*
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

    // /Library/WebServer/Documents/calc/Formula.g:326:1: unitPowerExpression : unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* ;
    // $ANTLR start "unitPowerExpression"
    unitPowerExpression: function() {
        var retval = new FormulaParser.unitPowerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW189 = null;
        var MINUS190 = null;
        var set191 = null;
         var unit188 = null;

        var POW189_tree=null;
        var MINUS190_tree=null;
        var set191_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:327:2: ( unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* )
            // /Library/WebServer/Documents/calc/Formula.g:327:5: unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unit_in_unitPowerExpression2072);
            unit188=this.unit();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unit188.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:327:10: ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            loop61:
            do {
                var alt61=2;
                var LA61_0 = this.input.LA(1);

                if ( (LA61_0==POW) ) {
                    alt61=1;
                }


                switch (alt61) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:327:12: POW ( MINUS )? ( INTEGER | FLOAT )
                    POW189=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_unitPowerExpression2076); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    POW189_tree = this.adaptor.create(POW189);
                    root_0 = this.adaptor.becomeRoot(POW189_tree, root_0);
                    }
                    // /Library/WebServer/Documents/calc/Formula.g:327:17: ( MINUS )?
                    var alt60=2;
                    var LA60_0 = this.input.LA(1);

                    if ( (LA60_0==MINUS) ) {
                        alt60=1;
                    }
                    switch (alt60) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:0:0: MINUS
                            MINUS190=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unitPowerExpression2079); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            MINUS190_tree = this.adaptor.create(MINUS190);
                            this.adaptor.addChild(root_0, MINUS190_tree);
                            }


                            break;

                    }

                    set191=this.input.LT(1);
                    if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set191));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }



                    break;

                default :
                    break loop61;
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

    // /Library/WebServer/Documents/calc/Formula.g:330:1: unit : ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) );
    // $ANTLR start "unit"
    unit: function() {
        var retval = new FormulaParser.unit_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT192 = null;
        var IDENT193 = null;
        var char_literal194 = null;
        var char_literal196 = null;
         var unitMultiplicativeExpression195 = null;

        var IDENT192_tree=null;
        var IDENT193_tree=null;
        var char_literal194_tree=null;
        var char_literal196_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_101=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 101");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:330:6: ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) )
            var alt63=2;
            var LA63_0 = this.input.LA(1);

            if ( (LA63_0==IDENT) ) {
                alt63=1;
            }
            else if ( (LA63_0==101) ) {
                alt63=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 63, 0, this.input);

                throw nvae;
            }
            switch (alt63) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:330:8: IDENT ( IDENT )*
                    IDENT192=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit2100); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT192);

                    // /Library/WebServer/Documents/calc/Formula.g:330:14: ( IDENT )*
                    loop62:
                    do {
                        var alt62=2;
                        var LA62_0 = this.input.LA(1);

                        if ( (LA62_0==IDENT) ) {
                            alt62=1;
                        }


                        switch (alt62) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:330:15: IDENT
                            IDENT193=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit2103); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT193);



                            break;

                        default :
                            break loop62;
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
                    // 330:23: -> ^( UNIT ( IDENT )+ )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:330:26: ^( UNIT ( IDENT )+ )
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
                    // /Library/WebServer/Documents/calc/Formula.g:331:5: '(' unitMultiplicativeExpression ')'
                    char_literal194=this.match(this.input,101,FormulaParser.FOLLOW_101_in_unit2120); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_101.add(char_literal194);

                    this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_unit2122);
                    unitMultiplicativeExpression195=this.unitMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression195.getTree());
                    char_literal196=this.match(this.input,102,FormulaParser.FOLLOW_102_in_unit2124); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal196);



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
                    // 331:42: -> ^( UNITCLUMP unitMultiplicativeExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:331:45: ^( UNITCLUMP unitMultiplicativeExpression )
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
    funOrIdent_return: (function() {
        FormulaParser.funOrIdent_return = function(){};
        org.antlr.lang.extend(FormulaParser.funOrIdent_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:339:1: funOrIdent : ( ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL IDENT ( logicalExpression )* ) | IDENT );
    // $ANTLR start "funOrIdent"
    funOrIdent: function() {
        var retval = new FormulaParser.funOrIdent_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT197 = null;
        var char_literal198 = null;
        var char_literal200 = null;
        var char_literal202 = null;
        var IDENT203 = null;
         var logicalExpression199 = null;
         var logicalExpression201 = null;

        var IDENT197_tree=null;
        var char_literal198_tree=null;
        var char_literal200_tree=null;
        var char_literal202_tree=null;
        var IDENT203_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_101=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 101");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:340:2: ( ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL IDENT ( logicalExpression )* ) | IDENT )
            var alt66=2;
            var LA66_0 = this.input.LA(1);

            if ( (LA66_0==IDENT) ) {
                var LA66_1 = this.input.LA(2);

                if ( (this.synpred90_Formula()) ) {
                    alt66=1;
                }
                else if ( (true) ) {
                    alt66=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 66, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 66, 0, this.input);

                throw nvae;
            }
            switch (alt66) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:340:4: ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')'
                    IDENT197=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_funOrIdent2170); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT197);

                    char_literal198=this.match(this.input,101,FormulaParser.FOLLOW_101_in_funOrIdent2172); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_101.add(char_literal198);

                    // /Library/WebServer/Documents/calc/Formula.g:340:79: ( logicalExpression ( ',' logicalExpression )* )?
                    var alt65=2;
                    var LA65_0 = this.input.LA(1);

                    if ( (LA65_0==IDENT||LA65_0==PRIMITIVE||LA65_0==MINUS||(LA65_0>=NOT && LA65_0<=LARR)||(LA65_0>=STRING && LA65_0<=LCURL)||(LA65_0>=INTEGER && LA65_0<=FALSE)||LA65_0==101) ) {
                        alt65=1;
                    }
                    switch (alt65) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:340:81: logicalExpression ( ',' logicalExpression )*
                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funOrIdent2176);
                            logicalExpression199=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression199.getTree());
                            // /Library/WebServer/Documents/calc/Formula.g:340:99: ( ',' logicalExpression )*
                            loop64:
                            do {
                                var alt64=2;
                                var LA64_0 = this.input.LA(1);

                                if ( (LA64_0==COMMA) ) {
                                    alt64=1;
                                }


                                switch (alt64) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:340:100: ',' logicalExpression
                                    char_literal200=this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_funOrIdent2179); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_COMMA.add(char_literal200);

                                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funOrIdent2181);
                                    logicalExpression201=this.logicalExpression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression201.getTree());


                                    break;

                                default :
                                    break loop64;
                                }
                            } while (true);



                            break;

                    }

                    char_literal202=this.match(this.input,102,FormulaParser.FOLLOW_102_in_funOrIdent2188); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal202);



                    // AST REWRITE
                    // elements: IDENT, logicalExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 340:131: -> ^( FUNCALL IDENT ( logicalExpression )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:340:134: ^( FUNCALL IDENT ( logicalExpression )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCALL, "FUNCALL"), root_1);

                        this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                        // /Library/WebServer/Documents/calc/Formula.g:340:150: ( logicalExpression )*
                        while ( stream_logicalExpression.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        }
                        stream_logicalExpression.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:341:5: IDENT
                    root_0 = this.adaptor.nil();

                    IDENT203=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_funOrIdent2205); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENT203_tree = this.adaptor.create(IDENT203);
                    this.adaptor.addChild(root_0, IDENT203_tree);
                    }


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

    // /Library/WebServer/Documents/calc/Formula.g:349:1: primitive : PRIMITIVE ;
    // $ANTLR start "primitive"
    primitive: function() {
        var retval = new FormulaParser.primitive_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PRIMITIVE204 = null;

        var PRIMITIVE204_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:350:2: ( PRIMITIVE )
            // /Library/WebServer/Documents/calc/Formula.g:350:4: PRIMITIVE
            root_0 = this.adaptor.nil();

            PRIMITIVE204=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_primitive2261); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            PRIMITIVE204_tree = this.adaptor.create(PRIMITIVE204);
            this.adaptor.addChild(root_0, PRIMITIVE204_tree);
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

    // /Library/WebServer/Documents/calc/Formula.g:402:1: string : STRING ;
    // $ANTLR start "string"
    string: function() {
        var retval = new FormulaParser.string_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STRING205 = null;

        var STRING205_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:403:4: ( STRING )
            // /Library/WebServer/Documents/calc/Formula.g:403:7: STRING
            root_0 = this.adaptor.nil();

            STRING205=this.match(this.input,STRING,FormulaParser.FOLLOW_STRING_in_string2706); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            STRING205_tree = this.adaptor.create(STRING205);
            root_0 = this.adaptor.becomeRoot(STRING205_tree, root_0);
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
        // /Library/WebServer/Documents/calc/Formula.g:99:5: ( assignment )
        // /Library/WebServer/Documents/calc/Formula.g:99:5: assignment
        this.pushFollow(FormulaParser.FOLLOW_assignment_in_synpred5_Formula416);
        this.assignment();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred5_Formula",

    // $ANTLR start "synpred6_Formula"
    synpred6_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:100:5: ( logicalExpression )
        // /Library/WebServer/Documents/calc/Formula.g:100:5: logicalExpression
        this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred6_Formula422);
        this.logicalExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_Formula",

    // $ANTLR start "synpred8_Formula"
    synpred8_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:102:5: ( forLoop )
        // /Library/WebServer/Documents/calc/Formula.g:102:5: forLoop
        this.pushFollow(FormulaParser.FOLLOW_forLoop_in_synpred8_Formula434);
        this.forLoop();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred8_Formula",

    // $ANTLR start "synpred9_Formula"
    synpred9_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:103:5: ( forInLoop )
        // /Library/WebServer/Documents/calc/Formula.g:103:5: forInLoop
        this.pushFollow(FormulaParser.FOLLOW_forInLoop_in_synpred9_Formula440);
        this.forInLoop();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred9_Formula",

    // $ANTLR start "synpred72_Formula"
    synpred72_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:269:3: ( STRING COLON )
        // /Library/WebServer/Documents/calc/Formula.g:269:3: STRING COLON
        this.match(this.input,STRING,FormulaParser.FOLLOW_STRING_in_synpred72_Formula1643); if (this.state.failed) return ;
        this.match(this.input,COLON,FormulaParser.FOLLOW_COLON_in_synpred72_Formula1645); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred72_Formula",

    // $ANTLR start "synpred90_Formula"
    synpred90_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:340:4: ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )
        // /Library/WebServer/Documents/calc/Formula.g:340:5: IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')'
        this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_synpred90_Formula2149); if (this.state.failed) return ;
        this.match(this.input,101,FormulaParser.FOLLOW_101_in_synpred90_Formula2151); if (this.state.failed) return ;
        // /Library/WebServer/Documents/calc/Formula.g:340:15: ( logicalExpression ( ',' logicalExpression )* )?
        var alt92=2;
        var LA92_0 = this.input.LA(1);

        if ( (LA92_0==IDENT||LA92_0==PRIMITIVE||LA92_0==MINUS||(LA92_0>=NOT && LA92_0<=LARR)||(LA92_0>=STRING && LA92_0<=LCURL)||(LA92_0>=INTEGER && LA92_0<=FALSE)||LA92_0==101) ) {
            alt92=1;
        }
        switch (alt92) {
            case 1 :
                // /Library/WebServer/Documents/calc/Formula.g:340:17: logicalExpression ( ',' logicalExpression )*
                this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred90_Formula2155);
                this.logicalExpression();

                this.state._fsp--;
                if (this.state.failed) return ;
                // /Library/WebServer/Documents/calc/Formula.g:340:35: ( ',' logicalExpression )*
                loop91:
                do {
                    var alt91=2;
                    var LA91_0 = this.input.LA(1);

                    if ( (LA91_0==COMMA) ) {
                        alt91=1;
                    }


                    switch (alt91) {
                    case 1 :
                        // /Library/WebServer/Documents/calc/Formula.g:340:36: ',' logicalExpression
                        this.match(this.input,COMMA,FormulaParser.FOLLOW_COMMA_in_synpred90_Formula2158); if (this.state.failed) return ;
                        this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred90_Formula2160);
                        this.logicalExpression();

                        this.state._fsp--;
                        if (this.state.failed) return ;


                        break;

                    default :
                        break loop91;
                    }
                } while (true);



                break;

        }

        this.match(this.input,102,FormulaParser.FOLLOW_102_in_synpred90_Formula2167); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred90_Formula"

    // Delegated rules



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
    synpred72_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred72_Formula_fragment(); // can never throw exception
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
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(FormulaParser, {
    DFA5_eotS:
        "\u0013\uffff",
    DFA5_eofS:
        "\u0013\uffff",
    DFA5_minS:
        "\u0001\u0020\u0002\u0000\u0009\uffff\u0001\u0000\u0006\uffff",
    DFA5_maxS:
        "\u0001\u0065\u0002\u0000\u0009\uffff\u0001\u0000\u0006\uffff",
    DFA5_acceptS:
        "\u0003\uffff\u0001\u0002\u0007\uffff\u0001\u0003\u0001\uffff\u0001"+
    "\u0006\u0001\u0007\u0001\u0008\u0001\u0001\u0001\u0004\u0001\u0005",
    DFA5_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0009\uffff\u0001\u0002\u0006"+
    "\uffff}>",
    DFA5_transitionS: [
            "\u0001\u000b\u0003\uffff\u0001\u000c\u000b\uffff\u0001\u000d"+
            "\u0005\uffff\u0001\u000e\u0002\uffff\u0001\u000f\u0001\u0001"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0003\u0005\uffff"+
            "\u0002\u0003\u0002\uffff\u0002\u0003\u0001\uffff\u0004\u0003"+
            "\u000c\uffff\u0001\u0003",
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
        return "98:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );";
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
                            if ( (this.synpred5_Formula()) ) {s = 16;}

                            else if ( (this.synpred6_Formula()) ) {s = 3;}

                             
                            input.seek(index5_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA5_2 = input.LA(1);

                             
                            var index5_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_Formula()) ) {s = 16;}

                            else if ( (this.synpred6_Formula()) ) {s = 3;}

                             
                            input.seek(index5_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA5_12 = input.LA(1);

                             
                            var index5_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_Formula()) ) {s = 17;}

                            else if ( (this.synpred9_Formula()) ) {s = 18;}

                             
                            input.seek(index5_12);
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
    DFA52_eotS:
        "\u000c\uffff",
    DFA52_eofS:
        "\u000c\uffff",
    DFA52_minS:
        "\u0001\u003a\u0001\u0000\u000a\uffff",
    DFA52_maxS:
        "\u0001\u0065\u0001\u0000\u000a\uffff",
    DFA52_acceptS:
        "\u0002\uffff\u0001\u0002\u0008\uffff\u0001\u0001",
    DFA52_specialS:
        "\u0001\uffff\u0001\u0000\u000a\uffff}>",
    DFA52_transitionS: [
            "\u0001\u0002\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002"+
            "\u0005\uffff\u0002\u0002\u0002\uffff\u0001\u0001\u0001\u0002"+
            "\u0001\uffff\u0004\u0002\u000c\uffff\u0001\u0002",
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
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA52_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA52_eotS),
    DFA52_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA52_eofS),
    DFA52_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA52_minS),
    DFA52_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA52_maxS),
    DFA52_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA52_acceptS),
    DFA52_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA52_specialS),
    DFA52_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA52_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA52_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA52 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 52;
    this.eot = FormulaParser.DFA52_eot;
    this.eof = FormulaParser.DFA52_eof;
    this.min = FormulaParser.DFA52_min;
    this.max = FormulaParser.DFA52_max;
    this.accept = FormulaParser.DFA52_accept;
    this.special = FormulaParser.DFA52_special;
    this.transition = FormulaParser.DFA52_transition;
};

org.antlr.lang.extend(FormulaParser.DFA52, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "269:2: ( STRING COLON )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA52_1 = input.LA(1);

                             
                            var index52_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred72_Formula()) ) {s = 11;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index52_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 52, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(FormulaParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEGATE", "ASSIGN", "FUNCALL", "MATERIAL", "UNIT", "POWER", "DEFAULTS", "PARAMS", "UNITCLUMP", "ARRAY", "LINES", "WHILE", "IFTHENELSE", "ELSE", "FOR", "FORIN", "FUNCTION", "NUMBER", "LABEL", "MINARRAY", "INNER", "ASSIGNED", "NEWLINE", "W", "H", "I", "L", "E", "WHILESTATEMENT", "F", "O", "R", "FORSTATEMENT", "M", "FROMSTATEMENT", "N", "INSTATEMENT", "T", "TOSTATEMENT", "B", "Y", "BYSTATEMENT", "P", "LOOPSTATEMENT", "IFSTATEMENT", "THENSTATEMENT", "S", "ELSESTATEMENT", "U", "C", "FUNCTIONSTATEMENT", "D", "ENDBLOCK", "RETURNSTATEMENT", "IDENT", "EQUALS", "PRIMITIVE", "OR", "XOR", "X", "AND", "A", "NOTEQUALS", "LT", "LTEQ", "GT", "GTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "COLON", "POW", "NOT", "LARR", "RARR", "COMMA", "STRING", "LCURL", "RCURL", "INTEGER", "FLOAT", "TRUE", "FALSE", "PER", "CUBED", "SQUARED", "Q", "COMMENT", "LINE_COMMENT", "WS", "G", "J", "K", "V", "Z", "'('", "')'", "'<-'"],
    FOLLOW_NEWLINE_in_lines138: new org.antlr.runtime.BitSet([0x04000000, 0x16410011,0x01ECC100, 0x00000020]),
    FOLLOW_expression_in_lines142: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_lines146: new org.antlr.runtime.BitSet([0x04000000, 0x16410011,0x01ECC100, 0x00000020]),
    FOLLOW_EOF_in_lines149: new org.antlr.runtime.BitSet([0x00000000, 0x16410011,0x01ECC100, 0x00000020]),
    FOLLOW_EOF_in_lines154: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_in_expression416: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalExpression_in_expression422: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileLoop_in_expression428: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forLoop_in_expression434: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInLoop_in_expression440: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifThenElse_in_expression446: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionDef_in_expression452: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_returnExp_in_expression458: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_RETURNSTATEMENT_in_returnExp470: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_returnExp473: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_innerBlock486: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_innerBlock490: new org.antlr.runtime.BitSet([0x04000002, 0x16410011,0x01ECC100, 0x00000020]),
    FOLLOW_WHILESTATEMENT_in_whileLoop515: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_whileLoop517: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_whileLoop519: new org.antlr.runtime.BitSet([0x04000000, 0x17410011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_whileLoop522: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_ENDBLOCK_in_whileLoop525: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_LOOPSTATEMENT_in_whileLoop527: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forLoop548: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_forLoop550: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_FROMSTATEMENT_in_forLoop552: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_forLoop554: new org.antlr.runtime.BitSet([0x00000000, 0x00000400]),
    FOLLOW_TOSTATEMENT_in_forLoop556: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_forLoop558: new org.antlr.runtime.BitSet([0x04000000, 0x00002000]),
    FOLLOW_BYSTATEMENT_in_forLoop561: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_forLoop563: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_forLoop567: new org.antlr.runtime.BitSet([0x04000000, 0x17410011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_forLoop570: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_ENDBLOCK_in_forLoop573: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_LOOPSTATEMENT_in_forLoop575: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forInLoop603: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_forInLoop605: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_INSTATEMENT_in_forInLoop607: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_forInLoop609: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_forInLoop611: new org.antlr.runtime.BitSet([0x04000000, 0x17410011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_forInLoop614: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_ENDBLOCK_in_forInLoop617: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_LOOPSTATEMENT_in_forInLoop619: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse644: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_ifThenElse646: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse648: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse651: new org.antlr.runtime.BitSet([0x04000000, 0x17490011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_ifThenElse654: new org.antlr.runtime.BitSet([0x00000000, 0x01080000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse658: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse660: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_ifThenElse662: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse664: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse666: new org.antlr.runtime.BitSet([0x04000000, 0x17490011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_ifThenElse669: new org.antlr.runtime.BitSet([0x00000000, 0x01080000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse674: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse676: new org.antlr.runtime.BitSet([0x04000000, 0x17410011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_ifThenElse679: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_ENDBLOCK_in_ifThenElse683: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse685: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef716: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_functionDef718: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000020]),
    FOLLOW_101_in_functionDef720: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00000000, 0x00000040]),
    FOLLOW_IDENT_in_functionDef723: new org.antlr.runtime.BitSet([0x00000000, 0x08000000,0x00020000, 0x00000040]),
    FOLLOW_EQUALS_in_functionDef727: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01E40100, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef730: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_functionDef735: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_functionDef737: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_functionDef744: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_functionDef746: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_EQUALS_in_functionDef748: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01E40100, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef750: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_102_in_functionDef757: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_NEWLINE_in_functionDef759: new org.antlr.runtime.BitSet([0x04000000, 0x17410011,0x01ECC100, 0x00000020]),
    FOLLOW_innerBlock_in_functionDef762: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_ENDBLOCK_in_functionDef765: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef767: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_assignment802: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000020]),
    FOLLOW_101_in_assignment804: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00000000, 0x00000040]),
    FOLLOW_IDENT_in_assignment807: new org.antlr.runtime.BitSet([0x00000000, 0x08000000,0x00020000, 0x00000040]),
    FOLLOW_EQUALS_in_assignment811: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01E40100, 0x00000000]),
    FOLLOW_defaultValue_in_assignment813: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_assignment818: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_assignment820: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_assignment827: new org.antlr.runtime.BitSet([0x00000000, 0x04000000]),
    FOLLOW_IDENT_in_assignment829: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_EQUALS_in_assignment831: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01E40100, 0x00000000]),
    FOLLOW_defaultValue_in_assignment833: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_102_in_assignment840: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000080]),
    FOLLOW_103_in_assignment842: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_assignment844: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_assignment872: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000080]),
    FOLLOW_assigned_in_assignment876: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000080]),
    FOLLOW_COMMA_in_assignment880: new org.antlr.runtime.BitSet([0x00000000, 0x14000000]),
    FOLLOW_PRIMITIVE_in_assignment883: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000080]),
    FOLLOW_assigned_in_assignment887: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000080]),
    FOLLOW_103_in_assignment893: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_assignment895: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_assigned921: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00008000, 0x00000000]),
    FOLLOW_minarray_in_assigned923: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanXORExpression_in_logicalExpression949: new org.antlr.runtime.BitSet([0x00000002, 0x20000000]),
    FOLLOW_OR_in_logicalExpression952: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_booleanXORExpression_in_logicalExpression955: new org.antlr.runtime.BitSet([0x00000002, 0x20000000]),
    FOLLOW_booleanAndExpression_in_booleanXORExpression985: new org.antlr.runtime.BitSet([0x00000002, 0x40000000]),
    FOLLOW_XOR_in_booleanXORExpression988: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_booleanAndExpression_in_booleanXORExpression991: new org.antlr.runtime.BitSet([0x00000002, 0x40000000]),
    FOLLOW_equalityExpression_in_booleanAndExpression1020: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_AND_in_booleanAndExpression1023: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_equalityExpression_in_booleanAndExpression1026: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_relationalExpression_in_equalityExpression1057: new org.antlr.runtime.BitSet([0x00000002, 0x08000000,0x00000004, 0x00000000]),
    FOLLOW_set_in_equalityExpression1060: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_relationalExpression_in_equalityExpression1067: new org.antlr.runtime.BitSet([0x00000002, 0x08000000,0x00000004, 0x00000000]),
    FOLLOW_additiveExpression_in_relationalExpression1109: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000078, 0x00000000]),
    FOLLOW_set_in_relationalExpression1113: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_additiveExpression_in_relationalExpression1124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000078, 0x00000000]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1167: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000180, 0x00000000]),
    FOLLOW_set_in_additiveExpression1171: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1178: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000180, 0x00000000]),
    FOLLOW_arrayExpression_in_multiplicativeExpression1208: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000E00, 0x00000000]),
    FOLLOW_set_in_multiplicativeExpression1212: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_arrayExpression_in_multiplicativeExpression1221: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000E00, 0x00000000]),
    FOLLOW_negationExpression_in_arrayExpression1267: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_COLON_in_arrayExpression1270: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_negationExpression_in_arrayExpression1272: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_negationExpression1297: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_powerExpression_in_negationExpression1299: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_powerExpression_in_negationExpression1313: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpression_in_powerExpression1324: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_POW_in_powerExpression1327: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_unaryOrNegate_in_powerExpression1329: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_unaryExpression_in_unaryOrNegate1356: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_unaryOrNegate1362: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_unaryExpression_in_unaryOrNegate1364: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NOT_in_unaryExpression1392: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_primaryExpression_in_unaryExpression1395: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpression_in_unaryExpression1407: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_innerPrimaryExpression_in_primaryExpression1438: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00008000, 0x00000000]),
    FOLLOW_minarray_in_primaryExpression1441: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_101_in_innerPrimaryExpression1468: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_innerPrimaryExpression1471: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_innerPrimaryExpression1473: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_innerPrimaryExpression1479: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_value1493: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_value1499: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_value1505: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_material_in_value1511: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funOrIdent_in_value1516: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primitive_in_value1521: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_value1526: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_negnumber_in_defaultValue1542: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_defaultValue1548: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_defaultValue1554: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_defaultValue1560: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LARR_in_array1574: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01EDC100, 0x00000020]),
    FOLLOW_label_in_array1577: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00030000, 0x00000000]),
    FOLLOW_COMMA_in_array1580: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_label_in_array1582: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00030000, 0x00000000]),
    FOLLOW_RARR_in_array1589: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LARR_in_minarray1612: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01EFC100, 0x00000020]),
    FOLLOW_logicalExpression_in_minarray1616: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00030000, 0x00000000]),
    FOLLOW_COMMA_in_minarray1620: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01EFC100, 0x00000020]),
    FOLLOW_logicalExpression_in_minarray1622: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00030000, 0x00000000]),
    FOLLOW_RARR_in_minarray1629: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_label1643: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_COLON_in_label1645: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_label1649: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_number0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_negnumber1725: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_number_in_negnumber1727: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_bool0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LCURL_in_material1879: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_additiveExpression_in_material1881: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00200000, 0x00000020]),
    FOLLOW_unitMultiplicativeExpression_in_material1883: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00100000, 0x00000000]),
    FOLLOW_RCURL_in_material1885: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1922: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_PER_in_unitMultiplicativeExpression1926: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00200000, 0x00000020]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1929: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1945: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000600, 0x00000000]),
    FOLLOW_set_in_unitInnerMultiplicativeExpression1949: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00200000, 0x00000020]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1956: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000600, 0x00000000]),
    FOLLOW_INTEGER_in_unitClump1972: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_DIV_in_unitClump1974: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00200000, 0x00000020]),
    FOLLOW_unitPowerExpression_in_unitClump1977: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0C000000, 0x00000000]),
    FOLLOW_CUBED_in_unitClump1979: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_SQUARED_in_unitClump1982: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitPowerExpression_in_unitClump2005: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x0C000000, 0x00000000]),
    FOLLOW_CUBED_in_unitClump2007: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_SQUARED_in_unitClump2010: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unit_in_unitPowerExpression2072: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_POW_in_unitPowerExpression2076: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00600100, 0x00000000]),
    FOLLOW_MINUS_in_unitPowerExpression2079: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_set_in_unitPowerExpression2082: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_IDENT_in_unit2100: new org.antlr.runtime.BitSet([0x00000002, 0x04000000]),
    FOLLOW_IDENT_in_unit2103: new org.antlr.runtime.BitSet([0x00000002, 0x04000000]),
    FOLLOW_101_in_unit2120: new org.antlr.runtime.BitSet([0x00000000, 0x04000000,0x00200000, 0x00000020]),
    FOLLOW_unitMultiplicativeExpression_in_unit2122: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_unit2124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_funOrIdent2170: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000020]),
    FOLLOW_101_in_funOrIdent2172: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000060]),
    FOLLOW_logicalExpression_in_funOrIdent2176: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_funOrIdent2179: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_funOrIdent2181: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_102_in_funOrIdent2188: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_funOrIdent2205: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_primitive2261: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_string2706: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_in_synpred5_Formula416: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalExpression_in_synpred6_Formula422: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forLoop_in_synpred8_Formula434: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInLoop_in_synpred9_Formula440: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_synpred72_Formula1643: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_COLON_in_synpred72_Formula1645: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_synpred90_Formula2149: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000020]),
    FOLLOW_101_in_synpred90_Formula2151: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000060]),
    FOLLOW_logicalExpression_in_synpred90_Formula2155: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_COMMA_in_synpred90_Formula2158: new org.antlr.runtime.BitSet([0x00000000, 0x14000000,0x01ECC100, 0x00000020]),
    FOLLOW_logicalExpression_in_synpred90_Formula2160: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00020000, 0x00000040]),
    FOLLOW_102_in_synpred90_Formula2167: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();