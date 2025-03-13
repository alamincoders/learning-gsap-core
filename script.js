var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    //  0% = animated div .. // full screen size 95%
    start: "0% 95%",
    end: "75% 50%",
    scrub: true,
    // markers: true,
  },
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    //  0% = animated div .. // full screen size 95%
    start: "0% 95%",
    end: "60% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "5%",
  },
  "orange"
);

tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "28%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "12%",
    top: "175%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "105%",
    rotate: "-60deg",
    left: "76%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "105%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

// third screen

tl2.fromTo(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "0",
    top: "115%",
  },
  {
    rotate: "0deg",
    left: "8.5%",
    top: "-3%",
  },
  "co"
);
tl2.fromTo(
  ".lemon3",
  {
    rotate: "-90deg",
    right: "0",
    top: "115%",
  },
  {
    rotate: "0deg",
    right: "9%",
    top: "-3%",
  },
  "co"
);

tl2.fromTo(
  "#cocacola",
  {
    rotate: "-0deg",
    left: "0",
    top: "115%",
  },
  {
    rotate: "0deg",
    width: "12%",
    left: "15%",
    top: "10%",
  },
  "co"
);
tl2.fromTo(
  "#pepsi",
  {
    rotate: "90deg",
    right: "0",
    top: "115%",
  },
  {
    rotate: "0deg",
    width: "18%",
    right: "11%",
    top: "6%",
  },
  "co"
);

//

tl2.to(
  "#fanta",
  {
    width: "30%",
    top: "213%",
    left: "35%",
  },
  "co"
);

tl2.to(
  "#orange-cut",
  {
    width: "20%",
    top: "205%",
    left: "40%",
  },
  "co"
);
