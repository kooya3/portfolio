"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{3182:function(e,n,i){i.d(n,{Z:function(){return s}});var t=i(5893),a=i(5675),r=i.n(a),o=i(6010);function s(e){var n=e.src,i=e.alt,a=e.width,s=e.height,l=e.caption,c=e.className;return(0,t.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,t.jsx)("span",{className:(0,o.Z)(c||"","overflow-hidden rounded-xl"),children:(0,t.jsx)(r(),{src:n,alt:i,width:a,height:s,placeholder:"blur",blurDataURL:n})}),l&&(0,t.jsx)("p",{className:"mt-2 mb-0 text-sm font-light text-gray-600 dark:text-gray-400",children:l})]})}},2742:function(e,n,i){i.r(n);var t=i(5893),a=i(1151),r=i(3182);function o(e){var n=Object.assign({hr:"hr",h2:"h2",p:"p",a:"a",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul"},(0,a.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{children:'slug: "recreate-apples-breathing-animation-in-swiftui-part-2"\ntitle: "Recreate Apple\u2019s Breathing Animation in SwiftUI - Part 2"\ndescription: "Explore how to create the blur effect that happens when you start breathing"\npublishedAt: "2020-05-06"'}),"\n","\n",(0,t.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/1.png",alt:"Blur-fade effect",caption:"Blur-fade effect",width:"1031",height:"669"}),"\n",(0,t.jsxs)(n.p,{children:["If you are interested in how we created the flower and breathing animation, you can check out the ",(0,t.jsx)(n.a,{href:"/journal/recreate-apples-breathing-animation-in-swiftui-part-1",children:"first part"})," of this tutorial."]}),"\n",(0,t.jsx)(n.p,{children:"To achieve this stunning effect, we are going to split the problem into two parts. We will need to do the following two things:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a mask around the flower view"}),"\n",(0,t.jsx)(n.li,{children:"Create a blur-fade effect"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you are a bit confused about what we are doing and why, just hold on for a second. It will start to make a lot of sense near the end."}),"\n",(0,t.jsx)(n.h2,{children:"Create a Mask Around the Flower View"}),"\n",(0,t.jsxs)(n.p,{children:["You would think that this is relatively easy \u2014 just add a ",(0,t.jsx)(n.code,{children:".background()"})," modifier to the flower view and call it a day, but\u2026"]}),"\n",(0,t.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/2.png",alt:"Mask using background modifier",caption:"Mask using background modifier",width:"1087",height:"671"}),"\n",(0,t.jsx)(n.p,{children:"As you can see, this doesn\u2019t quite solve the problem. Because the flower view is composed of multiple circles, the simplest way to create a background for the flower view would be with a whole other flower view that is in sync with the animation."}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s implement this by embedding our original ",(0,t.jsx)(n.code,{children:"FlowerView"})," in a ",(0,t.jsx)(n.code,{children:"ZStack"})," and add the secondary ",(0,t.jsx)(n.code,{children:"FlowerView"})," that acts as a background. Make these changes to ",(0,t.jsx)(n.code,{children:"ContentView"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"struct ContentView: View {\n  // ...\n  var body: some View {\n    List {\n      // Flower\n      Section {\n        ZStack {\n          // This FlowerView creates a mask around the Main FlowerView\n          FlowerView(\n            isMinimized: $isMinimized,\n            numberOfPetals: $numberOfPetals,\n            animationDuration: $animationDuration,\n            color: Color(UIColor.black)\n          )\n\n          // Main FlowerView\n          FlowerView(\n            isMinimized: $isMinimized,\n            numberOfPetals: $numberOfPetals,\n            animationDuration: $animationDuration\n          )\n        }\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // ...\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/3.gif",alt:"Side by side example of animated flowers",caption:"Side by side example",width:"640",height:"396"}),"\n",(0,t.jsx)(n.h2,{children:"Blur-Fade Effect"}),"\n",(0,t.jsx)(n.p,{children:"If we look closely, the blur-fade animation has three key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Blur effect"}),"\n",(0,t.jsx)(n.li,{children:"Opacity change from 1 to 0"}),"\n",(0,t.jsx)(n.li,{children:"Lagging behind compared to the original shrinking animation"}),"\n"]}),"\n",(0,t.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/4.gif",alt:"BlurFade Effect",caption:"BlurFade Effect",width:"640",height:"419"}),"\n",(0,t.jsxs)(n.p,{children:["It should come as no surprise to you that we are going to achieve this by adding another ",(0,t.jsx)(n.code,{children:"FlowerView"})," to the ",(0,t.jsx)(n.code,{children:"ZStack"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This time we are going to hide and show our third ",(0,t.jsx)(n.code,{children:"FlowerView"})," based on the ",(0,t.jsx)(n.code,{children:"isMinimized"})," property and create a custom transition modifier that should create the blur-fade effect when shrinking."]}),"\n",(0,t.jsxs)(n.p,{children:["Create a new Swift file or add this after ",(0,t.jsx)(n.code,{children:"ContentView"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"extension AnyTransition {\n  static var blurFade: AnyTransition {\n    get {\n      AnyTransition.modifier(\n        active: BlurFadeModifier(isActive: true),\n        identity: BlurFadeModifier(isActive: false)\n      )\n    }\n  }\n}\n\nstruct BlurFadeModifier: ViewModifier {\n  let isActive: Bool\n\n  func body(content: Content) -> some View {\n    content\n      .scaleEffect(isActive ? 1.5 : 1) // lagging behind effect\n      .blur(radius: isActive ? 8 : 0)\n      .opacity(isActive ? 0 : 0.7)\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Almost done! Now let\u2019s add the final ",(0,t.jsx)(n.code,{children:"FlowerView"}),". We will also create a ",(0,t.jsx)(n.code,{children:"fadeDuration"})," property that is based on the ",(0,t.jsx)(n.code,{children:"breathingAnimation"})," duration."]}),"\n",(0,t.jsx)(n.p,{children:"Note that we are using an asymmetric transition because we don\u2019t want the blur-fade effect both ways."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"struct ContentView: View {\n  // ...\n  /// Duration of the BlurFade transition based on the **breathingAnimation**\n  private var fadeDuration: Double {\n    return breathDuration * 0.6\n  }\n\n  var body: some View {\n    List {\n      Section {\n        // Flower\n        ZStack {\n          if !isMinimized { // second lil' hack\n            FlowerView(\n              isMinimized: $isMinimized,\n              numberOfPetals: $numberOfPetals,\n              animationDuration: $animationDuration\n            ).transition(\n              AnyTransition.asymmetric(\n                insertion: AnyTransition.opacity.animation(Animation.default.delay(animationDuration)),\n                removal: AnyTransition.blurFade.animation(Animation.easeIn(duration: fadeDuration))\n              )\n              /**\n                General Observation - use real devices for best results\n                Asymmetric Transitions are sometimes buggy, this includes:\n                  - animationDuration is not always updated prior to a change\n                  - the removal transition is used for an insertion\n              */\n            )\n          }\n\n          // ...\n        }\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // ...\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/5.gif",alt:"Final product showcase",caption:"Final product",width:"1280",height:"720"}),"\n",(0,t.jsx)(n.h2,{children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"As you can see, by using simple built-in shapes and animations, we managed to compose a pretty complex animation."}),"\n",(0,t.jsx)(n.p,{children:"If you are feeling brave enough, now I encourage you to try and make your own animations! PS: Make sure you tweet about it and let me know."}),"\n",(0,t.jsxs)(n.p,{children:["Here\u2019s the ",(0,t.jsx)(n.a,{href:"https://github.com/Pondorasti/WatchOSBreathingAnimation",children:"GitHub repo"})," with the complete project."]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.a)(),e.components),i=n.wrapper;return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);