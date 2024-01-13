"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{3182:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(5893),a=t(5675),r=t.n(a),o=t(6010);function s(e){var n=e.src,t=e.alt,a=e.width,s=e.height,l=e.caption,h=e.className;return(0,i.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,i.jsx)("span",{className:(0,o.Z)(h||"","overflow-hidden rounded-xl"),children:(0,i.jsx)(r(),{src:n,alt:t,width:a,height:s,placeholder:"blur",blurDataURL:n})}),l&&(0,i.jsx)("p",{className:"mt-2 mb-0 text-sm font-light text-gray-600 dark:text-gray-400",children:l})]})}},6525:function(e,n,t){t.r(n);var i=t(5893),a=t(1151),r=t(3182);function o(e){var n=Object.assign({hr:"hr",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,a.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{children:'slug: "recreate-apples-breathing-animation-in-swiftui-part-1"\ntitle: "Recreate Apple\u2019s Breathing Animation in SwiftUI - Part 1"\ndescription: "Learn SwiftUI core concepts while recreating Apple\'s famous Breathe UI"\npublishedAt: "2020-05-05"'}),"\n","\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/1.png",width:"1200",height:"674"}),"\n",(0,i.jsx)(n.p,{children:"You may have seen and played around with the breathing app from the Apple watch. This features a series of effects and transitions that result in a stunning experience."}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/2.gif",width:"300",height:"515"}),"\n",(0,i.jsx)(n.p,{children:"Today, we are going to recreate this using SwiftUI\u2019s basic modifiers in just under 100 lines of code!"}),"\n",(0,i.jsx)(n.p,{children:"We\u2019ll be breaking down the UI into the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FlowerView"}),": a reusable component that creates the flower and handles all the animation logic"]}),"\n",(0,i.jsxs)(n.li,{children:["iOS ",(0,i.jsx)(n.code,{children:"ContentView"}),": a control room for manipulating the states of the ",(0,i.jsx)(n.code,{children:"FlowerView"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note: Make sure you are using Dark Mode when testing because that is the environment where the animation is going to look most stunning."}),"\n",(0,i.jsx)(n.h2,{children:"Creating FlowerView"}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s start off by creating a new SwiftUI Xcode project along with a view called ",(0,i.jsx)(n.code,{children:"FlowerView"})," and add all of the necessary properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isMinimized"}),": a boolean value that keeps track of the animation\u2019s state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"numberOfPetals"}),": this variable is a Double in order to animate the addition/removal of petals"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"animationDuration"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"circleDiameter"}),": represents the size of each petal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"absolutePetalAngle"}),": the circle circumference divided by the number of petals results in the absolute angle each petal will be rotated"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You will also need to update ",(0,i.jsx)(n.code,{children:"FlowerView_Previews"})," and initialize your binding properties with constants for now."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct FlowerView: View {\n  @Binding var isMinimized: Bool\n  @Binding var numberOfPetals: Double\n\n  /// The duration of any animation performed to the flower.\n  @Binding var animationDuration: Double\n\n  /// The diameter of each petal.\n  let circleDiameter: CGFloat = 80\n\n  /// The color of each petal. It is recommended to also use opacity to create an overlap effect.\n  var color = Color(UIColor.cyan).opacity(0.6)\n\n  /// This represents the absolute amount of rotation needed for each petal\n  private var absolutePetalAngle: Double {\n    return 360 / numberOfPetals\n  }\n\n  var body: some View {\n    Text("Hello, World!")\n  }\n}\n\nstruct FlowerView_Previews: PreviewProvider {\n  static var previews: some View {\n    FlowerView(\n      isMinimized: .constant(false),\n      numberOfPetals: .constant(5),\n      animationDuration: .constant(4.2)\n    )\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Onwards to the body!"}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/3.png",width:"1183",height:"798"}),"\n",(0,i.jsxs)(n.p,{children:["The flower is made by adding multiple circles that rotate and intersect around the center point of the flower. We will create this by adding an array of circles with the help of ",(0,i.jsx)(n.code,{children:"ForEach"})," and embed it in a ",(0,i.jsx)(n.code,{children:"ZStack"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The magic part is that we are going to use the ",(0,i.jsx)(n.code,{children:".rotationEffect()"})," modifier and rotate the circle around it\u2019s leading anchor, which is the center of the flower."]}),"\n",(0,i.jsx)(n.p,{children:"The anchor point is the part of the view that should be fixed in place as the center of the rotation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"var body: some View {\n  ZStack() {\n    ForEach(0..<Int(numberOfPetals), id: \\.self) {\n      Circle()\n        .frame(width: self.circleDiameter, height: self.circleDiameter)\n        .foregroundColor(self.color)\n\n        // The color of the petal. It is recommended to also use opacity to create an overlap effect.\n        .foregroundColor(Color(UIColor.cyan).opacity(0.6))\n\n        // Rotate the petal around it's leading anchor to create the flower\n        .rotationEffect(.degrees(self.absolutePetalAngle * Double($0)),\n                        anchor: .leading)\n    }\n  }\n  // Center the view along the center of the Flower\n  .offset(x: isMinimized ? 0 : circleDiameter / 2)\n\n  // create a frame around the flower,\n  // helful for adding padding around the whole flower\n  .frame(width: circleDiameter * 2, height: circleDiameter * 2)\n\n  // smoothly animate any change to the Flower\n  .animation(.easeInOut(duration: animationDuration))\n\n  // This modifiers are optional\n  // The purpose of the code bellow is to align the orientation to perfectly match Apple's implementation\n  .rotationEffect(.degrees(-60))\n  .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))\n}\n"})}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/4.png",width:"917",height:"850"}),"\n",(0,i.jsxs)(n.p,{children:["Now we need to ",(0,i.jsx)(n.code,{children:".offset()"})," the ",(0,i.jsx)(n.code,{children:"ZStack"})," by the radius of the circle since we want to center the view based on the center of the flower and not the center of our initial circle."]}),"\n",(0,i.jsxs)(n.p,{children:["Before we move on, you will also need to add the ",(0,i.jsx)(n.code,{children:".animation()"})," modifier to make our views animated whenever we change a binding property."]}),"\n",(0,i.jsx)(n.h2,{children:"Update ContentView"}),"\n",(0,i.jsx)(n.p,{children:"Now we will work on the screen that lets us manipulate the flower properties and toggle the animation state. For the sake of simplicity and looks we are going to create a list and sections for each of our views:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"FlowerView"})}),"\n",(0,i.jsxs)(n.li,{children:["Slider for changing ",(0,i.jsx)(n.code,{children:"numberOfPetals"})]}),"\n",(0,i.jsxs)(n.li,{children:["Slider for changing the ",(0,i.jsx)(n.code,{children:"breathingDuration"})]}),"\n",(0,i.jsx)(n.li,{children:"Button for triggering the animation"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n  @State private var numberOfPetals: Double = 5\n  @State private var isMinimized = false\n  @State private var animationDuration = 0.5\n\n  /// Duration of the breathing animation\n  @State private var breathDuration = 4.2\n\n  var body: some View {\n    List {\n      // Flower\n      Section {\n        FlowerView(\n          isMinimized: $isMinimized,\n          numberOfPetals: $numberOfPetals,\n          animationDuration: $animationDuration\n        )\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // Number of Petals\n      Section(header: Text("Number of Petals: \\(Int(numberOfPetals))")) {\n        Slider(value: $numberOfPetals, in: 2...10) { onEditingChanged in\n          // detect when interaction with the slider is done and engage snapping to the closest petal\n          if !onEditingChanged {\n            self.numberOfPetals = self.numberOfPetals.rounded()\n          }\n        }\n      }\n\n      // Breathing Duration\n      Section(header: Text("Breathing Duration: \\(breathDuration)")) {\n        Slider(value: $breathDuration, in: 0...10, step: 0.1)\n      }\n\n      // Breath Button\n      Section {\n        // ...\n      }\n    }\n\n    // making the list look nice :]\n    .listStyle(GroupedListStyle())\n    .environment(\\.horizontalSizeClass, .regular)\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The first slider, for manipulating ",(0,i.jsx)(n.code,{children:"numberOfPetals"}),", checks the ",(0,i.jsx)(n.code,{children:"onEditingChanged"})," property and detects when the user finished dragging the slider. This allows us to ",(0,i.jsx)(n.code,{children:".round()"})," the ",(0,i.jsx)(n.code,{children:"numberOfPetals"}),", so we never end up with 2.5 petals or something similar."]}),"\n",(0,i.jsxs)(n.p,{children:["Regarding the button, my implementation is a bit finicky and consists of ",(0,i.jsx)(n.code,{children:"DispatchQueues"}),". The reason behind this is to immediately toggle ",(0,i.jsx)(n.code,{children:"isMinimized"})," after the flower finishes shrinking, making it expand back up."]}),"\n",(0,i.jsxs)(n.p,{children:["Feel free to create your own implementation; omitting the ",(0,i.jsx)(n.code,{children:"DispatchQueue"})," is perfectly fine."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'// Breath Button\nSection {\n  Button(action: {\n    self.animationDuration = self.breathDuration\n    self.isMinimized.toggle()\n\n    DispatchQueue.main.asyncAfter(deadline: .now() + self.animationDuration) {\n      self.isMinimized.toggle()\n    }\n  }) {\n    Text("Breath")\n      .frame(maxWidth: .infinity)\n  }\n}\n.buttonStyle(BorderlessButtonStyle())\n.foregroundColor(.white)\n.listRowBackground(Color(UIColor.systemBlue))\n'})}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/5.webp",width:"250",height:"498"}),"\n",(0,i.jsx)(n.h2,{children:"Breathing Animation"}),"\n",(0,i.jsx)(n.p,{children:"What we\u2019ve all been waiting for! This part is a bit more tricky, but don\u2019t worry \u2014 SwiftUI makes it a breeze."}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/6.gif",width:"640",height:"422"}),"\n",(0,i.jsx)(n.p,{children:"We will split up the animation into three parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The rotation of the flower view"}),"\n",(0,i.jsx)(n.li,{children:"The scale of the flower view"}),"\n",(0,i.jsx)(n.li,{children:"The rotation of each individual petal"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To achieve the first two parts, it\u2019s quite easy. We will use ",(0,i.jsx)(n.code,{children:".rotationEffect()"})," and ",(0,i.jsx)(n.code,{children:".scaleEffect()"})," modifiers along with ternary operators to change the values depending on the ",(0,i.jsx)(n.code,{children:"isMinimized"})," state."]}),"\n",(0,i.jsxs)(n.p,{children:["Add this above the ",(0,i.jsx)(n.code,{children:".animation()"})," modifier from ",(0,i.jsx)(n.code,{children:"FlowerView"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"\nstruct FlowerView: View {\n  // ...\n  var body: some View {\n    // ...\n    .rotationEffect(.degrees(isMinimized ? -90 : 0))\n    .scaleEffect(isMinimized ? 0.3 : 1)\n\n    // smoothly animate any change to the Flower\n    .animation(.easeInOut(duration: animationDuration))\n\n    // ...\n  }\n}\n"})}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/7.gif",width:"640",height:"432"}),"\n",(0,i.jsxs)(n.p,{children:["To create the effect of all the petals coming to the center, it is as simple as changing the anchor point to ",(0,i.jsx)(n.code,{children:".center"})," from the ",(0,i.jsx)(n.code,{children:".rotationEffect()"})," of each petal."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct FlowerView: View {\n  // ...\n  var body: some View {\n    ZStack() {\n      ForEach(0..<Int(numberOfPetals), id: \\.self) {\n        Circle() // Petal\n          // ...\n          // rotate the petal around it's leading anchor to create the flower\n          .rotationEffect(.degrees(self.absolutePetalAngle * Double($0)),\n                          anchor: self.isMinimized ? .center : .leading)\n      }\n    }\n    // ...\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Voil\xe0!"}),"\n",(0,i.jsx)(n.p,{children:"We have written less than 100 lines of code, and we already have something that looks incredibly similar to our target."}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/8.gif",width:"640",height:"433"}),"\n",(0,i.jsx)(n.h2,{children:"One more thing\u2026"}),"\n",(0,i.jsx)(n.p,{children:"There is one thing we could do to further improve this animation. If you look closely, whenever we add or remove a petal it instantly appears on the screen. Let\u2019s try to fix this."}),"\n",(0,i.jsx)(n.p,{children:"To quickly solve this issue, we are going to always have on display one extra petal that is ready to animate its opacity. There is a tiny bit of math involved for calculating the alpha based on the petal\u2019s position, but don\u2019t worry, I already have everything figured out for you."}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s make these changes to ",(0,i.jsx)(n.code,{children:"FlowerView"}),". Make sure to modify the range of the ",(0,i.jsx)(n.code,{children:"ForEach"})," from ",(0,i.jsx)(n.code,{children:"0<Int(numberOfPetals)"})," to ",(0,i.jsx)(n.code,{children:"0\u2026Int(numberOfPetals)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct FlowerView: View {\n  // ...\n  /**\n    Calculates the opacity for the petal that is being added/removed.\n    This is achieved by calculating the amount of travel in **degrees**\n    that the petal needs to travel in order to be completely added\n    to the flower and comparing it with the **nextAngle**.\n    Afterwards converting this to a 0 to 1 scale.\n    */\n  private var opacityPercentage: Double {\n    let numberOfPetals = self.numberOfPetals.rounded(.down)\n    let nextAngle = 360 / (numberOfPetals + 1)\n    let currentAbsoluteAngle = 360 / numberOfPetals\n\n    let totalTravel = currentAbsoluteAngle - nextAngle\n    let currentProgress = absolutePetalAngle - nextAngle\n    let percentage = currentProgress / totalTravel\n\n    return 1 - percentage\n  }\n\n  var body: some View {\n    ZStack() {\n      /**\n        Intentionally showing an extra petal by using 0...Count, instead of 0..<Count\n        This allows for the following actions:\n          - Instantly animate opacity change to the extra petal\n          - Snap to the next or current petal\n        */\n      ForEach(0...Int(numberOfPetals), id: \\.self) {\n        Circle() // Petal\n          //...\n\n          // animate opacity only to the petal being added/removed\n          .opacity($0 == Int(self.numberOfPetals) ? self.opacityPercentage : 1)\n      }\n    }\n    // ...\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s also add to ",(0,i.jsx)(n.code,{children:"ContentView"})," a dedicated ",(0,i.jsx)(n.code,{children:"petalDuration"})," property that is intended only for this subtle animation. To make sure this works properly, you will need to dynamically switch between ",(0,i.jsx)(n.code,{children:"breathDuration"})," and ",(0,i.jsx)(n.code,{children:"petalDuration"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct ContentView: View {\n  // ...\n  @State private var animationDuration = petalDuration\n\n  /// Duration of addition/removal animation for petals\n  static let petalDuration = 0.5\n\n  var body: some View {\n    List {\n      // ...\n      // Breath Button\n      Section {\n        Button(action: {\n          self.animationDuration = self.breathDuration\n          self.isMinimized.toggle()\n\n          DispatchQueue.main.asyncAfter(deadline: .now() + self.animationDuration) {\n            self.isMinimized.toggle()\n          }\n\n          // Add this\n          DispatchQueue.main.asyncAfter(deadline: .now() + 2 * self.animationDuration) {\n            self.animationDuration = ContentView.petalDuration\n          }\n        }) // ...\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(r.Z,{src:"/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/9.gif",width:"640",height:"432"}),"\n",(0,i.jsx)(n.h2,{children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"I made this project to demonstrate how simple it is to get started with SwiftUI and animations. This crazy amount of power comes from the functional programming paradigm and data bindings that work in perfect harmony to keep your code updated and liquid-smooth!"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to go even further with this project, you can check out the ",(0,i.jsx)(n.a,{href:"/journal/recreate-apples-breathing-animation-in-swiftui-part-2",children:"second part"})," of this tutorial, where we explore how to create the bleeding blur effect and talk about view transitions."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are only interested in the source code, here\u2019s the ",(0,i.jsx)(n.a,{href:"https://github.com/Pondorasti/WatchOSBreathingAnimation",children:"GitHub repo"}),"."]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.a)(),e.components),t=n.wrapper;return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);