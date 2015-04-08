(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "b854c981cb0dd8611eabe3ede749713b" })){ return promiseland._getModule("b854c981cb0dd8611eabe3ede749713b"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b854c981cb0dd8611eabe3ede749713b", "module": PL$1, promising: true });
var PL$16/*console*/;try{PL$16/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*cp*/;
var PL$7/*spawn*/;
var PL$20/*Runner*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("child_process").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*cp*/ = PL$6;
  PL$7/*spawn*/ = PL$5/*cp*/["spawn"];
  try
  {
    PL$20/*Runner*/ = (function(){var PL$8/*inherited*/ = {};
    var res = promiseland.createClass({
      "constructor": (function(PL$9/*par*/){
      
        ;
        this["options"] = PL$9/*par*/;
        this["start"]();
        ;}),
      "start": (function(){
      
        ;
        try
        {
          var PL$10/*self*/ = this;
          ;
          if(this["running"]){
            this["kill"]();
          };
          ;
          var PL$11/*stdoutFun*/ = (this["options"]["onStdout"] || (function(){
          
            ;
            ;}));
          ;
          var PL$12/*stderrFun*/ = (this["options"]["onStderr"] || (function(){
          
            ;
            ;}));
          ;
          var PL$13/*exitFun*/ = (this["options"]["onExit"] || (function(){
          
            ;
            ;}));
          ;
          if(this["options"]["cmd"]){
            var PL$14/*cmd*/ = this["options"]["cmd"];
            ;
            var PL$15/*params*/ = (this["options"]["parameter"] || [
              
            ]);
            ;
            this["running"] = true;
            this["_process"] = PL$7/*spawn*/(PL$14/*cmd*/, PL$15/*params*/);
            PL$16/*console*/["log"]("spawn ...");
            if(this["_process"]){
              if(this["_process"]["stdout"]){
                this["_process"]["stdout"]["on"]("data", PL$11/*stdoutFun*/);
                this["_process"]["stdout"]["on"]("error", PL$12/*stderrFun*/);
              };
              ;
              if(this["_process"]["stderr"]){
                this["_process"]["stderr"]["on"]("data", PL$12/*stderrFun*/);
                this["_process"]["stderr"]["on"]("error", PL$12/*stderrFun*/);
              };
              ;
              this["_process"]["on"]("close", (function(PL$17/*code*/){
              
                ;
                PL$16/*console*/["log"]("process close");
                PL$10/*self*/["exitCode"] = PL$17/*code*/;
                PL$10/*self*/["running"] = false;
                PL$10/*self*/["_process"] = undefined;
                PL$13/*exitFun*/(PL$17/*code*/);
                ;}));
            };
            ;
          };
          ;}catch(PL$18/*e*/){
          PL$16/*console*/["log"](PL$18/*e*/);};
        ;}),
      "writeStdin": (function(PL$19/*parData*/){
      
        ;
        this["_process"]["stdin"]["write"](PL$19/*parData*/);
        ;}),
      "kill": (function(){
      
        ;
        if((this["running"] && this["_process"])){
          this["running"] = false;
          this["_process"]["kill"]();
        };
        ;
        ;})
    }, [], PL$8/*inherited*/);
    return res; })();PL$20/*Runner*/;}catch(PL$18/*e*/){
    PL$16/*console*/["log"](PL$18/*e*/);};
  ;
  PL$16/*console*/["log"](PL$20/*Runner*/);
  PL$1.resolve(PL$20/*Runner*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
