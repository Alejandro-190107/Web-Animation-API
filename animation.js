var t1 = just.animate({
    targets: ".ball-1",
    duration: 1300,
    props: {
      innerHTML: ['ONE', 'ANIMATION'] },
  
    web: {
      transform: [
      { offset: 0, value: "scale(1, 1)" },
      { offset: 0.3, value: "scale(1.25, .75)" },
      { offset: 0.4, value: "scale(.75, 1.25)" },
      { offset: 0.5, value: "scale(1.15, .85)" },
      { offset: 0.65, value: "scale(.95, 1.05)" },
      { offset: 0.75, value: "scale(1.05, .95)" },
      { offset: 1, value: "scale(1, 1)" }] } });
/* ------------------------------------------------------------------------------------------------ */
var t2 = just.animate({
    targets: ".ball-2",
    duration: 3500,
    props: {
      innerHTML: ['SECOND', 'ANIMATION'] },
  
      web: {
        x: [300, 0],
        y: [200, 0],
        opacity: [1, 0],
        opacity: [0, 1]
    }
 });
/* ------------------------------------------------------------------------------------------------ */
var t3 = just.animate({
    targets: ".ball-3",
    duration: 3500,
    props: {
      innerHTML: ['THIRD', 'ANIMATION'] },
  
      web: {
        x: [300, 0],
        borderTopLeftRadius: [500],
        rotate: [40,500]
    }
 });
/* ------------------------------------------------------------------------------------------------ */
var t4 = just.animate({
    targets: ".ball-4",
    duration: 3500,
    props: {
      innerHTML: ['FOUR', 'ANIMATION'] },
  
      web: {
        x: [300, 0],
        marginLeft: [0,50],
        rotateY: [20,1200]
    }
 });
/* ------------------------------------------------------------------------------------------------ */
var t5 = just.animate({
    targets: ".ball-5",
    duration: 3500,
    props: {
      innerHTML: ['FIVE', 'ANIMATION'] },
  
      web: {
        scale: [1, 1.2, 1],
        letterSpacing: [20,5]

    }
 });
/* ------------------------------------------------------------------------------------------------ */
var t6 = just.animate({
    targets: ".ball-6",
    duration: 3500,
    props: {
      innerHTML: ['SIX', 'ANIMATION'] },
  
      web: {
        y: [0, 20, 0, 1],
         scale: [2, 
            { offset: 1.5, value: 1.5 }
        ]
    }
 });
/* ------------------------------------------------------------------------------------------------ */

var t7 = just.animate({
    targets: ".ball-7",
    duration: 3500,
    props: {
      innerHTML: ['SEVEN', 'ANIMATION'] },
      web: {
        transform: [
           { offset: 0.5, value: "scale(1.5, 1.2)" },
           { offset: 0.10, value: "scale(2, 1.2)" },
           { offset: 1.4, value: "scale(1, 1.2)"},
           { offset: 1.5, value: "scale(1, 1)" },
           { offset: 1, value: "scale(1, 1)" }
        ]
     }
  });
/* ------------------------------------------------------------------------------------------------ */
var t8 = just.animate({
    targets: ".ball-8",
    duration: 3500,
    props: {
      innerHTML: ['EIGHT', 'ANIMATION'] },

      web: {
        rotate: [30,2000],
        value: [0, 50],
        rotateX: [-10, 0],
      rotateY: [20, 0]
    }
 });
 /* ------------------------------------------------------------------------------------------------ */

 var t9 = just.animate({
    targets: ".ball-9",
    duration: 3500,
    props: {
      innerHTML: ['NINE', 'ANIMATION'] },
  
      web: {
    transform: [
           { offset: 0.3, value: "scale(.5, .5)" },
           { offset: 0.4, value: "scale(.5, .5)" },
           { offset: 0.5, value: "scale(.15, .55)" },
           { offset: 1, value: "scale(1, 1)" }
         ]
         }
  });
 /* ------------------------------------------------------------------------------------------------ */

 var t10 = just.animate({
    targets: ".ball-10",
    duration: 3500,
    props: {
      innerHTML: ['TEN', 'ANIMATION'] },
  
      web: {
        transform: ['translateX(200px)', 
        'translatey(50px)',
        'translateX(-100px)',
        'translateY(-50px)'
    ]
     }
  });
 /* ------------------------------------------------------------------------------------------------ */
