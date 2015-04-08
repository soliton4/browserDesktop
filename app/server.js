(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
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
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "124deb0010f5f2edc69cc13b87e5d1e8" })){ return promiseland._getModule("124deb0010f5f2edc69cc13b87e5d1e8"); };
var PL$22/*console*/;try{PL$22/*console*/ = console;}catch(e){};
var PL$31/*Callback*/;try{PL$31/*Callback*/ = Callback;}catch(e){};
var PL$37/*Buffer*/;try{PL$37/*Buffer*/ = Buffer;}catch(e){};
var PL$41/*parseInt*/;try{PL$41/*parseInt*/ = parseInt;}catch(e){};
var PL$115/*promiseland*/;try{PL$115/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*Stream*/;
var PL$104/*local*/;
var _TPL$104/*local*/;

/* ---------------------------- */
/* type Stream */
var PL$2/*type:Stream*/ = classSystem._createProvisionalClass();
PL$3/*Stream*/ = PL$2/*type:Stream*/
var PL$4/*Stream-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:Stream*/).then(function(parType){
  PL$2/*type:Stream*/ = parType;
  PL$4/*Stream-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:Stream*/);
});
var PL$5/*type:Stream**/ = classSystem._createPromiseOfClass(PL$2/*type:Stream*/);
var PL$6/*Stream**/ = PL$5/*type:Stream**/;
var PL$7/*Stream*-constructor*/ = undefined;classSystem.readyPromise(PL$5/*type:Stream**/).then(function(parType){
  PL$5/*type:Stream**/ = parType;
  PL$7/*Stream*-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:Stream**/);
});
/* ---------------------------- */

var PL$23/*x11Geo*/ = (function(f){
promiseland.registerRemote("server", "124deb0010f5f2edc69cc13b87e5d1e8", "PL$43", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("124deb0010f5f2edc69cc13b87e5d1e8", "PL$43", arguments);
}
};
})(function (PL$24/*session*/){
var PL$25 = new __Promise();
var PL$27/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$25.reject(e);
    };
  };
};
var PL$28/*catch rejected*/ = function(e){
  PL$25.reject(e);
};
var PL$29/*params*/;
var PL$30/*cb*/;
var PL$32/*dataAr*/;
var PL$33/*runner*/;
var PL$36/*s*/;
var PL$38/*ar*/;
var PL$39/*value*/;
var PL$40/*y*/;
var PL$42/*x*/;
PL$27/*promiseland exception catcher*/(function(){

  ;
  PL$29/*params*/ = [
    "-root", 
    "_NET_DESKTOP_GEOMETRY"
  ];
  PL$30/*cb*/ = new PL$31/*Callback*/();
  PL$32/*dataAr*/ = [
    
  ];
  PL$33/*runner*/ = new PL$8/*Runner*/({
    "cmd": "xprop",
    "parameter": PL$29/*params*/,
    "onStdout": (function(PL$34/*data*/){
    
      ;
      PL$32/*dataAr*/["push"](PL$34/*data*/);
      ;}),
    "onExit": (function(){
    
      ;
      PL$30/*cb*/();
      ;})
  });
  PL$30/*cb*/["promise"].then(PL$27/*promiseland exception catcher*/(function(PL$35){PL$35;
  PL$36/*s*/ = PL$37/*Buffer*/["concat"](PL$32/*dataAr*/)["toString"]("utf8");
  PL$38/*ar*/ = PL$36/*s*/["split"]("=");
  PL$39/*value*/ = PL$38/*ar*/[(PL$38/*ar*/["length"] - 1)];
  PL$38/*ar*/ = PL$39/*value*/["split"](",");
  PL$40/*y*/ = PL$41/*parseInt*/(PL$38/*ar*/["pop"](), 10);
  PL$42/*x*/ = PL$41/*parseInt*/(PL$38/*ar*/["pop"](), 10);
  PL$25.resolve({
    "x": PL$42/*x*/,
    "y": PL$40/*y*/
  }); return;
  PL$25.resolve(); return;}), PL$28/*catch rejected*/);
  ;
})();return PL$25;
});
var PL$105/*getStream*/ = (function(f){
promiseland.registerRemote("server", "124deb0010f5f2edc69cc13b87e5d1e8", "PL$109", f, (classSystem.createFunctionType({ "return": PL$5/*type:Stream**/, arguments: [classSystem.getBuiltinType("var")]})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("124deb0010f5f2edc69cc13b87e5d1e8", "PL$109", arguments);
}
};
})((function(t){return t;})(function (PL$24/*session*/, PL$44/*par*/){
var PL$106;
var _TPL$106;
(function(){ var vAr = new PL$7/*Stream*-constructor*/(); PL$106 = vAr[0]; _TPL$106 = vAr[1]; })();var PL$107/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      if (_TPL$42/*x*/){ _TPL$42/*x*/();};PL$106.reject(e);
    };
  };
};
var PL$108/*catch rejected*/ = function(e){
  if (_TPL$42/*x*/){ _TPL$42/*x*/();};PL$106.reject(e);
};
var PL$42/*x*/;
var _TPL$42/*x*/;
PL$107/*promiseland exception catcher*/(function(){

  ;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$42/*x*/){ _TPL$42/*x*/(); };
    if(vAr){
      var v = vAr[0];
      PL$42/*x*/ = v;
      _TPL$42/*x*/ = vAr[1];
      return v;
    }else{
      PL$42/*x*/ = undefined; 
      _TPL$42/*x*/ = undefined;
      return;
    };
  })(new PL$4/*Stream-constructor*/(PL$44/*par*/))/*end temp assign*/;
  PL$106.resolve((function(ret){ if (_TPL$42/*x*/){ _TPL$42/*x*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$42/*x*/))); return;;
  if (_TPL$42/*x*/){ _TPL$42/*x*/();};PL$106.resolve(); return;;
})();return [PL$106, _TPL$106];
}));
var PL$110/*readFile*/ = (function(f){
promiseland.registerRemote("server", "124deb0010f5f2edc69cc13b87e5d1e8", "PL$117", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("124deb0010f5f2edc69cc13b87e5d1e8", "PL$117", arguments);
}
};
})(function (PL$24/*session*/){
var PL$111 = new __Promise();
var PL$113/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$111.reject(e);
    };
  };
};
var PL$114/*catch rejected*/ = function(e){
  PL$111.reject(e);
};
var PL$30/*cb*/;
PL$113/*promiseland exception catcher*/(function(){

  ;
  PL$30/*cb*/ = new PL$115/*promiseland*/["CallbackErrorFirst"]();
  PL$10/*fs*/["readFile"]("spreedmovie.hevc", PL$30/*cb*/);
  PL$30/*cb*/["promise"].then(PL$113/*promiseland exception catcher*/(function(PL$116){PL$111.resolve(PL$116["toString"]("base64")); return;
  PL$111.resolve(); return;}), PL$114/*catch rejected*/);
  ;
})();return PL$111;
});

  ;
  var PL$8/*Runner*/;
  ;
  var PL$9/*isServer*/ = false;
  ;
  var PL$10/*fs*/;
  ;
  (function(){
  if (!promiseland.profileHas("server")){
  var p = new __Promise();
  p.reject({id: 14, msg: "function does not execute in this frame."});
  return p;
  };
  var PL$11 = new __Promise();
  var PL$13/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$11.reject(e);
      };
    };
  };
  var PL$14/*catch rejected*/ = function(e){
    PL$11.reject(e);
  };
  PL$13/*promiseland exception catcher*/(function(){
  
    ;
    var PL$15 = new __Promise();
    var PL$16 = new __Promise();
    var PL$17/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.resolve(e); }; }; };
    var PL$18 = function(e){ PL$16.resolve(e); };
    PL$17/*try catch*/(function(){
      PL$9/*isServer*/ = true;
      __requireFun("./runner").then(PL$17/*try catch*/(function(PL$19){PL$8/*Runner*/ = PL$19;
      __requireFun("fs").then(PL$17/*try catch*/(function(PL$20){PL$10/*fs*/ = PL$20;
      PL$15.resolve();}), PL$18);
    ;}), PL$18);
    ;})();
    PL$16.then(PL$13/*promiseland exception catcher*/(function(PL$21/*e*/){
      PL$22/*console*/["log"](PL$21/*e*/);
      PL$15.resolve();;}));
    PL$15.then(PL$13/*promiseland exception catcher*/(function(){;
    PL$11.resolve(); return;}), PL$14/*catch rejected*/)
  })();return PL$11;
  })();
  /* function x11Geo (){} - hoisted */;
  ;
  classSystem._resolveProvisional(PL$2/*type:Stream*/, classSystem.createClass({className: "Stream",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"codec","type":classSystem.getBuiltinType("var")},{"name":"getCmd","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"getPreCmd","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"getPreParameter","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"getParameter","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"start","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"dataFun","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":75,"column":12,"offset":2250}, "hashStr": "124deb0010f5f2edc69cc13b87e5d1e8", "name": "Stream"}, {"constructor": (function(PL$44/*par*/){
  
    ;
    PL$44/*par*/ = (PL$44/*par*/ || {
      
    });
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(this, (PL$44/*par*/["codec"] || "h265"));
    this[5]["dataCallback"] = PL$44/*par*/["dataCallback"];
    ;}), "codec": "h265", "getCmd": (function(){
  
    ;
    if((this[9] == "h264")){
      return "avconv";
    };
    ;
    return "ffmpeg";
    ;}), "getPreCmd": (function(){
  
    ;
    if((this[9] == "h265")){
      return "ffmpeg";
    };
    ;
    ;}), "getPreParameter": ((function(t){return t;})(function(){
  var PL$79 = new __Promise();
  var PL$81/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$79.reject(e);
      };
    };
  };
  var PL$82/*catch rejected*/ = function(e){
    PL$79.reject(e);
  };
  var PL$49/*geo*/;
  var PL$29/*params*/;
  var PL$51/*addParam*/;
  var PL$54/*p*/;
  var PL$56/*i*/;
  var PL$57/*cmdStr*/;
  var PL$84/*this*/ = this;
  PL$81/*promiseland exception catcher*/(function(){
  
    ;
    PL$23/*x11Geo*/().then(PL$81/*promiseland exception catcher*/(function(PL$83){PL$49/*geo*/ = PL$83;
    PL$29/*params*/ = [
      
    ];
    PL$51/*addParam*/ = (function(PL$52/*par1*/, PL$53/*par2*/){
    
      ;
      PL$29/*params*/["push"](PL$52/*par1*/);
      if(PL$53/*par2*/){
        PL$29/*params*/["push"](PL$53/*par2*/);
      };
      ;
      ;});
    PL$54/*p*/ = PL$51/*addParam*/;
    if((PL$84/*this*/[9] == "h265")){
      PL$54/*p*/("-f", "x11grab");
      PL$54/*p*/("-r", "30");
      PL$54/*p*/("-s", ((("" + PL$49/*geo*/["x"]) + "x") + PL$49/*geo*/["y"]));
      PL$54/*p*/("-i", ":0+0,0");
      PL$54/*p*/("-an");
      PL$54/*p*/("-pix_fmt", "yuv420p");
      PL$54/*p*/("-f", "rawvideo");
      PL$54/*p*/("-");
    }else{
    PL$79.resolve(); return;
    };
    ;
    PL$56/*i*/ = 0;
    PL$57/*cmdStr*/ = "";
    for(PL$56/*i*/ = 0;(PL$56/*i*/ < PL$29/*params*/["length"]);++PL$56/*i*/){{
      PL$57/*cmdStr*/ += (" " + PL$29/*params*/[PL$56/*i*/]);}};
    ;
    PL$22/*console*/["log"](PL$57/*cmdStr*/);
    PL$79.resolve(PL$29/*params*/); return;
    PL$79.resolve(); return;}), PL$82/*catch rejected*/);
    ;
  })();return PL$79;
  })), "getParameter": ((function(t){return t;})(function(){
  var PL$85 = new __Promise();
  var PL$87/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$85.reject(e);
      };
    };
  };
  var PL$88/*catch rejected*/ = function(e){
    PL$85.reject(e);
  };
  var PL$49/*geo*/;
  var PL$29/*params*/;
  var PL$51/*addParam*/;
  var PL$54/*p*/;
  var PL$56/*i*/;
  var PL$57/*cmdStr*/;
  var PL$90/*this*/ = this;
  PL$87/*promiseland exception catcher*/(function(){
  
    ;
    PL$23/*x11Geo*/().then(PL$87/*promiseland exception catcher*/(function(PL$89){PL$49/*geo*/ = PL$89;
    PL$29/*params*/ = [
      
    ];
    PL$51/*addParam*/ = (function(PL$52/*par1*/, PL$53/*par2*/){
    
      ;
      PL$29/*params*/["push"](PL$52/*par1*/);
      if(PL$53/*par2*/){
        PL$29/*params*/["push"](PL$53/*par2*/);
      };
      ;
      ;});
    PL$54/*p*/ = PL$51/*addParam*/;
    if((PL$90/*this*/[9] == "h264")){
      PL$54/*p*/("-f", "x11grab");
      PL$54/*p*/("-r", "45");
      PL$54/*p*/("-s", ((("" + PL$49/*geo*/["x"]) + "x") + PL$49/*geo*/["y"]));
      PL$54/*p*/("-i", ":0+0,0");
      PL$54/*p*/("-vcodec", "libx264");
      PL$54/*p*/("-bt", "4M");
      PL$54/*p*/("-pass", "1");
      PL$54/*p*/("-coder", "0");
      PL$54/*p*/("-preset", "ultrafast");
      PL$54/*p*/("-b:v", "1m");
      PL$54/*p*/("-maxrate", "1m");
      PL$54/*p*/("-bufsize");
      PL$54/*p*/("4000k");
      PL$54/*p*/("-bf", "0");
      PL$54/*p*/("-flags");
      PL$54/*p*/("-loop");
      PL$54/*p*/("-tune", "zerolatency");
      PL$54/*p*/("-an");
      PL$54/*p*/("-f", "h264");
      PL$54/*p*/("-s", ((("" + PL$49/*geo*/["x"]) + "x") + PL$49/*geo*/["y"]));
      PL$54/*p*/("-");
    };
    ;
    if((PL$90/*this*/[9] == "h265")){
      PL$54/*p*/("-f", "rawvideo");
      PL$54/*p*/("-vcodec", "rawvideo");
      PL$54/*p*/("-s", ((("" + PL$49/*geo*/["x"]) + "x") + PL$49/*geo*/["y"]));
      PL$54/*p*/("-pix_fmt", "yuv420p");
      PL$54/*p*/("-i", "-");
      PL$54/*p*/("-vcodec", "libx265");
      PL$54/*p*/("-an");
      PL$54/*p*/("-preset", "ultrafast");
      PL$54/*p*/("-f", "hevc");
      PL$54/*p*/("-s", ((("" + PL$49/*geo*/["x"]) + "x") + PL$49/*geo*/["y"]));
      PL$54/*p*/("-tune", "zerolatency");
      PL$54/*p*/("-pass", "1");
      PL$54/*p*/("-threads", "4");
      PL$54/*p*/("-bufsize", "4000k");
      PL$54/*p*/("-g", "-1");
      PL$54/*p*/("-i_qoffset", "800");
      PL$54/*p*/("-intra");
      PL$54/*p*/("-bf", "0");
      PL$54/*p*/("-");
    };
    ;
    PL$56/*i*/ = 0;
    PL$57/*cmdStr*/ = "";
    for(PL$56/*i*/ = 0;(PL$56/*i*/ < PL$29/*params*/["length"]);++PL$56/*i*/){{
      PL$57/*cmdStr*/ += (" " + PL$29/*params*/[PL$56/*i*/]);}};
    ;
    PL$22/*console*/["log"](PL$57/*cmdStr*/);
    PL$85.resolve(PL$29/*params*/); return;
    PL$85.resolve(); return;}), PL$88/*catch rejected*/);
    ;
  })();return PL$85;
  })), "start": ((function(t){return t;})(function(){
  var PL$91 = new __Promise();
  var PL$93/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        if (_TPL$68/*self*/){ _TPL$68/*self*/();};PL$91.reject(e);
      };
    };
  };
  var PL$94/*catch rejected*/ = function(e){
    if (_TPL$68/*self*/){ _TPL$68/*self*/();};PL$91.reject(e);
  };
  var PL$68/*self*/;
  var _TPL$68/*self*/;
  var PL$71/*preCmd*/;
  var PL$95/*this*/ = this;
  PL$93/*promiseland exception catcher*/(function(){
  
    ;
    PL$22/*console*/["log"]("start ...");
    /*tracked assign*/(function(v){
    if (_TPL$68/*self*/){ _TPL$68/*self*/(); };
    PL$68/*self*/ = v;
    if (v){
    _TPL$68/*self*/ = v[2]();
    }else{
    _TPL$68/*self*/ = undefined;
    };
    return v;
    })(PL$95/*this*/)/*end assign*/
    ;
    if(PL$95/*this*/[5]["destroying"]){
      if (_TPL$68/*self*/){ _TPL$68/*self*/();};PL$91.resolve(); return;;
    };
    ;
    
    var PL$96 = new __Promise();if(PL$8/*Runner*/){
      PL$71/*preCmd*/ = PL$95/*this*/[13]();
      
      var PL$97 = new __Promise();if(PL$95/*this*/[5]["_proc"]){
        PL$95/*this*/[5]["_proc"]["start"]();
        PL$97.resolve();;
      }else{
      PL$22/*console*/["log"]("creating runner");
      PL$95/*this*/[17]().then(PL$93/*promiseland exception catcher*/(function(PL$98){PL$95/*this*/[5]["_proc"] = new PL$8/*Runner*/({
        "cmd": PL$95/*this*/[11](),
        "parameter": PL$98,
        "onStdout": (function(PL$34/*data*/){
        
          ;
          PL$68/*self*/[21](PL$34/*data*/["toString"]("base64"));
          ;})
      });
      PL$97.resolve();;}), PL$94/*catch rejected*/);
      ;
      };PL$97.then(PL$93/*promiseland exception catcher*/(function(PL$99){PL$99;;
      ;
      
      var PL$100 = new __Promise();if(PL$71/*preCmd*/){
        PL$95/*this*/[15]().then(PL$93/*promiseland exception catcher*/(function(PL$101){PL$95/*this*/[5]["_preProc"] = new PL$8/*Runner*/({
          "cmd": PL$71/*preCmd*/,
          "parameter": PL$101,
          "onStdout": (function(PL$34/*data*/){
          
            ;
            try
            {
              PL$68/*self*/[5]["_proc"]["writeStdin"](PL$34/*data*/);}catch(PL$21/*e*/){
              PL$22/*console*/["log"](PL$21/*e*/);};
            ;
            ;})
        });
        PL$100.resolve();;}), PL$94/*catch rejected*/);
        ;
      }else{PL$100.resolve();
      };PL$100.then(PL$93/*promiseland exception catcher*/(function(PL$102){PL$102;;
      ;
      PL$96.resolve();;}), PL$94/*catch rejected*/);
      ;}), PL$94/*catch rejected*/);
      ;
    }else{PL$96.resolve();
    };PL$96.then(PL$93/*promiseland exception catcher*/(function(PL$103){PL$103;;
    ;
    if (_TPL$68/*self*/){ _TPL$68/*self*/();};PL$91.resolve(); return;;}), PL$94/*catch rejected*/);
    ;
  })();return PL$91;
  })), "dataFun": (function(PL$34/*data*/){
  
    ;
    if(this[5]["dataCallback"]){
      this[5]["dataCallback"](PL$34/*data*/);
    };
    ;
    ;}), "destroy": (function(){
  
    ;
    this[5]["destroying"] = true;
    if(this[5]["_proc"]){
      this[5]["_proc"]["kill"]();
    };
    ;
    ;})}));PL$3/*Stream*/;
  PL$104/*local*/;
  /* function getStream (){} - hoisted */;
  ;
  /* function readFile (){} - hoisted */;
  var PL$118/*server*/ = {
    "getStream": (function(PL$44/*par*/){
    var PL$119 = new __Promise();
    var PL$121/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$119.reject(e);
        };
      };
    };
    var PL$122/*catch rejected*/ = function(e){
      PL$119.reject(e);
    };
    var PL$123/*dataCallback*/;
    PL$121/*promiseland exception catcher*/(function(){
    
      ;
      PL$123/*dataCallback*/ = PL$44/*par*/["dataCallback"];
      PL$44/*par*/["dataCallback"] = undefined;
      /*temptracked promise*/(function(vAr){
      var r = vAr[0].thenReuse(vAr[1], PL$121/*promiseland exception catcher*/(function(PL$124){/*temp tracked assign*/(function(vAr){
        if (_TPL$104/*local*/){ _TPL$104/*local*/(); };
        if(vAr){
          var v = vAr[0];
          PL$104/*local*/ = v;
          _TPL$104/*local*/ = vAr[1];
          return v;
        }else{
          PL$104/*local*/ = undefined; 
          _TPL$104/*local*/ = undefined;
          return;
        };
      })(PL$124)/*end temp assign*/;
      PL$104/*local*/[5]["dataCallback"] = PL$123/*dataCallback*/;
      PL$104/*local*/[19]();
      PL$119.resolve(); return;}), PL$122/*catch rejected*/);
      return r;
      })(PL$105/*getStream*/(PL$44/*par*/));/*temptracked promise end*/
      ;
    })();return PL$119;
    }),
    "getGeo": (function(){
    var PL$125 = new __Promise();
    var PL$127/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$125.reject(e);
        };
      };
    };
    var PL$128/*catch rejected*/ = function(e){
      PL$125.reject(e);
    };
    PL$127/*promiseland exception catcher*/(function(){
    
      ;
      PL$23/*x11Geo*/().then(PL$127/*promiseland exception catcher*/(function(PL$129){PL$125.resolve(PL$129); return;
      PL$125.resolve(); return;}), PL$128/*catch rejected*/);
      ;
    })();return PL$125;
    })
  };
  ;
  return PL$118/*server*/;
  ;})();
;return PL$1;
};
  
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
