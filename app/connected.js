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
    if (promiseland._hasModule({ hashStr: "33d7cdfd930f3496d88a42c1cf8bcc98" })){ return promiseland._getModule("33d7cdfd930f3496d88a42c1cf8bcc98"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "33d7cdfd930f3496d88a42c1cf8bcc98", "module": PL$1, promising: true });
var PL$7/*console*/;try{PL$7/*console*/ = console;}catch(e){};
var PL$11/*window*/;try{PL$11/*window*/ = window;}catch(e){};
var PL$17/*Uint8Array*/;try{PL$17/*Uint8Array*/ = Uint8Array;}catch(e){};
var PL$18/*ArrayBuffer*/;try{PL$18/*ArrayBuffer*/ = ArrayBuffer;}catch(e){};
var PL$27/*document*/;try{PL$27/*document*/ = document;}catch(e){};
var PL$45/*setTimeout*/;try{PL$45/*setTimeout*/ = setTimeout;}catch(e){};
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
var PL$5/*server*/;
var PL$9/*libde265*/;
var PL$12/*toUint8Array*/;
var PL$20/*concatUint8*/;
var PL$26/*canvas*/;
var PL$28/*ctx*/;
var PL$29/*bufferAr*/;
var PL$30/*busy*/;
var PL$31/*image_data*/;
var PL$32/*decoder*/;
var PL$38/*decode*/;
var PL$46/*_handle_onload*/;
var PL$47/*x*/;
var PL$49/*Player*/;
var PL$51/*player*/;
var PL$52/*decodeRaw*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./server").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*server*/ = PL$6;
  PL$5/*server*/["getGeo"]().then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*console*/["log"](PL$8);
  __requireFun("libde265.js/lib/libde265").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*libde265*/ = PL$10;
  PL$9/*libde265*/ = (PL$9/*libde265*/ || PL$11/*window*/["libde265"]);
  PL$7/*console*/["log"](PL$9/*libde265*/);
  PL$12/*toUint8Array*/ = (function(PL$13/*parStr*/){
  
    ;
    var PL$14/*raw*/ = PL$11/*window*/["atob"](PL$13/*parStr*/);
    ;
    var PL$15/*rawLength*/ = PL$14/*raw*/["length"];
    ;
    var PL$16/*array*/ = new PL$17/*Uint8Array*/(new PL$18/*ArrayBuffer*/(PL$15/*rawLength*/));
    ;
    var PL$19/*i*/;
    ;
    for(PL$19/*i*/ = 0;(PL$19/*i*/ < PL$15/*rawLength*/);PL$19/*i*/++){{
      PL$16/*array*/[PL$19/*i*/] = PL$14/*raw*/["charCodeAt"](PL$19/*i*/);}};
    return PL$16/*array*/;
    ;});
  PL$20/*concatUint8*/ = (function(PL$21/*parAr*/){
  
    ;
    if((! PL$21/*parAr*/ || ! PL$21/*parAr*/["length"])){
      return new PL$17/*Uint8Array*/(0);
    };
    ;
    if((PL$21/*parAr*/["length"] === 1)){
      return PL$21/*parAr*/[0];
    };
    ;
    var PL$22/*completeLength*/ = 0;
    ;
    var PL$19/*i*/ = 0;
    ;
    var PL$23/*l*/ = PL$21/*parAr*/["length"];
    ;
    for(PL$19/*i*/;(PL$19/*i*/ < PL$23/*l*/);++PL$19/*i*/){{
      PL$22/*completeLength*/ += PL$21/*parAr*/[PL$19/*i*/]["byteLength"];}};
    ;
    var PL$24/*res*/ = new PL$17/*Uint8Array*/(PL$22/*completeLength*/);
    ;
    var PL$25/*filledLength*/ = 0;
    ;
    for(PL$19/*i*/ = 0;(PL$19/*i*/ < PL$23/*l*/);++PL$19/*i*/){{
      PL$24/*res*/["set"](new PL$17/*Uint8Array*/(PL$21/*parAr*/[PL$19/*i*/]), PL$25/*filledLength*/);
      PL$25/*filledLength*/ += PL$21/*parAr*/[PL$19/*i*/]["byteLength"];}};
    ;
    return PL$24/*res*/;
    ;});
  PL$26/*canvas*/ = PL$27/*document*/["createElement"]("canvas");
  PL$27/*document*/["body"]["appendChild"](PL$26/*canvas*/);
  PL$28/*ctx*/ = PL$26/*canvas*/["getContext"]("2d");
  PL$29/*bufferAr*/ = [
    
  ];
  PL$30/*busy*/ = false;
  PL$31/*image_data*/;
  PL$32/*decoder*/ = new PL$9/*libde265*/["Decoder"]();
  PL$32/*decoder*/["set_image_callback"]((function(PL$33/*image*/){
  var PL$19/*i*/;
  
    ;
    var PL$34/*w*/ = PL$33/*image*/["get_width"]();
    ;
    var PL$35/*h*/ = PL$33/*image*/["get_height"]();
    ;
    if((((PL$34/*w*/ != PL$26/*canvas*/["width"]) || (PL$35/*h*/ != PL$26/*canvas*/["height"])) || ! PL$31/*image_data*/)){
      PL$26/*canvas*/["width"] = PL$34/*w*/;
      PL$26/*canvas*/["height"] = PL$35/*h*/;
      PL$31/*image_data*/ = PL$28/*ctx*/["createImageData"](PL$34/*w*/, PL$35/*h*/);
      var PL$36/*idata*/ = PL$31/*image_data*/["data"];
      ;
      for(PL$19/*i*/ = 0;(PL$19/*i*/ < (PL$34/*w*/ * PL$35/*h*/));PL$19/*i*/++){{
        PL$36/*idata*/[((PL$19/*i*/ * 4) + 3)] = 255;}};
      ;
    };
    PL$33/*image*/["display"](PL$31/*image_data*/, (function(PL$37/*display_image_data*/){
    
      ;
      PL$28/*ctx*/["putImageData"](PL$37/*display_image_data*/, 0, 0);
      ;}));
    PL$33/*image*/["free"]();
    ;}));
  PL$38/*decode*/ = (function(){
  
    ;
    var PL$39/*err*/;
    ;
    var PL$23/*l*/ = 4096;
    ;
    if(! PL$29/*bufferAr*/["length"]){
      PL$30/*busy*/ = false;
      return;
    };
    ;
    PL$29/*bufferAr*/ = [
      PL$20/*concatUint8*/(PL$29/*bufferAr*/)
    ];
    var PL$40/*tmp*/ = PL$29/*bufferAr*/[0];
    ;
    if((PL$40/*tmp*/["length"] < PL$23/*l*/)){
      PL$30/*busy*/ = false;
      return;
    };
    ;
    var PL$41/*byteLen*/ = PL$40/*tmp*/["length"];
    ;
    var PL$42/*buf*/ = PL$40/*tmp*/["buffer"];
    ;
    var PL$43/*tmp2*/ = new PL$17/*Uint8Array*/(PL$42/*buf*/, 0, PL$23/*l*/);
    ;
    var PL$44/*tmp3*/ = new PL$17/*Uint8Array*/(PL$41/*byteLen*/);
    ;
    PL$44/*tmp3*/["set"](new PL$17/*Uint8Array*/(PL$42/*buf*/, PL$23/*l*/), 0);
    PL$29/*bufferAr*/ = [
      PL$44/*tmp3*/
    ];
    PL$39/*err*/ = PL$32/*decoder*/["push_data"](PL$43/*tmp2*/);
    if(! PL$9/*libde265*/["de265_isOK"](PL$39/*err*/)){
      debugger;
      PL$7/*console*/["log"](PL$39/*err*/);
      PL$7/*console*/["log"](PL$9/*libde265*/["de265_get_error_text"](PL$39/*err*/));
      return;
    };
    ;
    PL$32/*decoder*/["decode"]((function(PL$39/*err*/){
    
      ;
      switch (PL$39/*err*/){
        case PL$9/*libde265*/["DE265_ERROR_WAITING_FOR_INPUT_DATA"]:
          
          PL$30/*busy*/ = true;
          PL$45/*setTimeout*/(PL$38/*decode*/, 0);
          return;
        default:
          
          if(! PL$9/*libde265*/["de265_isOK"](PL$39/*err*/)){
            debugger;
            PL$7/*console*/["log"](PL$39/*err*/);
            PL$7/*console*/["log"](PL$9/*libde265*/["de265_get_error_text"](PL$39/*err*/));
            return;
          };
          ;
        
      };
      ;
      PL$30/*busy*/ = true;
      PL$45/*setTimeout*/(PL$38/*decode*/, 0);
      return;
      ;}));
    ;});
  PL$46/*_handle_onload*/ = (function(){
  
    ;
    if(PL$30/*busy*/){
      return;
    };
    ;
    PL$30/*busy*/ = true;
    PL$45/*setTimeout*/(PL$38/*decode*/, 0);
    ;});
  PL$47/*x*/ = 0;
  PL$5/*server*/["getStream"]({
    "dataCallback": (function(PL$48/*parDataStr*/){
    
      ;
      PL$7/*console*/["log"]("x");
      PL$47/*x*/ += 1;
      PL$29/*bufferAr*/["push"](PL$12/*toUint8Array*/(PL$48/*parDataStr*/));
      PL$47/*x*/ = 0;
      PL$46/*_handle_onload*/();
      ;})
  });
  PL$1.resolve(); return;
  __requireFun("Broadway/Player/Player").then(PL$3/*promiseland exception catcher*/(function(PL$50){PL$49/*Player*/ = PL$50;
  PL$51/*player*/ = new PL$49/*Player*/({
    "useWorker": false,
    "workerFile": "Broadway/Player/Decoder.js"
  });
  PL$27/*document*/["body"]["appendChild"](PL$51/*player*/["canvas"]);
  PL$52/*decodeRaw*/ = (function(PL$53/*data*/){
  
    ;
    if(! (PL$53/*data*/ && PL$53/*data*/["length"])){
      return;
    };
    ;
    var PL$54/*hit*/ = (function(PL$55/*subarray*/){
    
      ;
      if(PL$55/*subarray*/){
        PL$29/*bufferAr*/["push"](PL$55/*subarray*/);
      };
      ;
      PL$51/*player*/["decode"](PL$20/*concatUint8*/(PL$29/*bufferAr*/));
      PL$7/*console*/["log"]("paint frame");
      PL$29/*bufferAr*/ = [
        
      ];
      ;});
    ;
    var PL$56/*startOffset*/ = 0;
    ;
    var PL$57/*b*/ = 0;
    ;
    var PL$58/*lastStart*/ = 0;
    ;
    var PL$23/*l*/ = PL$53/*data*/["length"];
    ;
    var PL$59/*zeroCnt*/ = 0;
    ;
    for(PL$57/*b*/ = 0;(PL$57/*b*/ < PL$23/*l*/);++PL$57/*b*/){{
      if((PL$53/*data*/[PL$57/*b*/] === 0)){
        PL$59/*zeroCnt*/++;
      }else{
      if((PL$53/*data*/[PL$57/*b*/] == 1)){
        if((PL$59/*zeroCnt*/ >= 3)){
          if((PL$58/*lastStart*/ < (PL$57/*b*/ - 3))){
            PL$54/*hit*/(PL$53/*data*/["subarray"](PL$58/*lastStart*/, (PL$57/*b*/ - 3)));
            PL$58/*lastStart*/ = (PL$57/*b*/ - 3);
          }else{
          if(PL$29/*bufferAr*/["length"]){
            PL$54/*hit*/();
          };
          };
        };
        ;
      };
      ;
      PL$59/*zeroCnt*/ = 0;
      };
      ;}};
    ;
    if((PL$58/*lastStart*/ < PL$53/*data*/["length"])){
      PL$29/*bufferAr*/["push"](PL$53/*data*/["subarray"](PL$58/*lastStart*/));
    };
    ;
    ;});
  PL$5/*server*/["getStream"]({
    "dataCallback": (function(PL$48/*parDataStr*/){
    
      ;
      PL$7/*console*/["log"]("x");
      var PL$60/*bin*/ = PL$12/*toUint8Array*/(PL$48/*parDataStr*/);
      ;
      PL$52/*decodeRaw*/(PL$60/*bin*/);
      ;})
  });
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
