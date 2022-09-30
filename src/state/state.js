export const state = {
  HeaderData: {
    navItems: [
      {
        name: "About us",
        href: "/about",
      },
      {
        name: "Services",
        href: "/services",
      },
      {
        name: "Projects",
        href: "/projects",
      },
      {
        name: "Contact us",
        href: "/contact",
      },
    ],
    mobileNavItems: [
      {
        name: "About",
        href: "/1",
      },
      {
        name: "Specifications",
        href: "/2",
      },
      {
        name: "Previous Projects",
        href: "/3",
      },
      {
        name: "services",
        href: "/4",
      },
      {
        name: "ongoing projects",
        href: "/5",
      },
      {
        name: "contacts",
        href: "/6",
      },
    ],
    socMedia: [
      {
        name: "/ Facebook",
        href: "https://www.facebook.com",
      },
      {
        name: "/ Twitter",
        href: "https://www.twitter.com",
      },
      {
        name: "/ LinkedIn",
        href: "https://www.linkedin.com",
      },
    ],
    lang: [
      {
        name: "English",
        smallName: "En",
      },
      {
        name: "Español",
        smallName: "Esp",
      },
      {
        name: "Deutsch",
        smallName: "De",
      },
    ],
  },
  SecondComponentData:{
    itemsData:[
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
      }
    ]
  },
  ThirdComponentData:{
    sliderData:[
      {
        slideNum: 1,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3
          },
        ]
      },
      {
        slideNum: 2,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3
          },
        ]
      },
      {
        slideNum: 3,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3
          },
        ]
      },
      {
        slideNum: 4,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2
          },
          {
            title:"Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3
          },
        ]
      }
    ],
    sliderSettings: {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      centerMode: true,
      centerPadding: "0px"
    }
  },
  FourthComponentData: {
    sliderData: [
      {
        slideNum: "01",
        header: "project name will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipea consequat. ",
        image: "house.png",
        btnText: "Enquire now",
        textItems: {
          left: [
              "€1920 / м²",
              "€1920 / м²",
              "€1920 / м²"
          ],
          right: [
              "€1920 / м²",
              "€1920 / м²",
              "€1920 / м²"
          ]
        }
      },
      {
          slideNum: "02",
          header: "project name will be here",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipea consequat. ",
          image: "house.png",
          btnText: "Enquire now",
          textItems: {
            left: [
                "€1920 / м²",
                "€1920 / м²",
                "€1920 / м²"
            ],
            right: [
                "€1920 / м²",
                "€1920 / м²",
                "€1920 / м²"
            ]
          }
      },
      {
      slideNum: "03",
      header: "project name will be here",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipea consequat. ",
      image: "house.png",
      btnText: "Enquire now",
      textItems: {
          left: [
              "€1920 / м²",
              "€1920 / м²",
              "€1920 / м²"
          ],
          right: [
              "€1920 / м²",
              "€1920 / м²",
              "€1920 / м²"
          ]
      }
      },
          
    ],
    sliderSettings: {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
    }
  }
};

export function slidersCount(){
  let a = state.FourthComponentData.sliderData.length
  if(a<10){
    a = "0" + a
  }
  return a
}
