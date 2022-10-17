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
  SecondComponentData: {
    itemsData: [
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      },
      {
        title: "Title will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      },
    ],
  },
  ThirdComponentData: {
    sliderData: [
      {
        slideNum: 1,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3,
          },
        ],
      },
      {
        slideNum: 2,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3,
          },
        ],
      },
      {
        slideNum: 3,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3,
          },
        ],
      },
      {
        slideNum: 4,
        header: "Numeric data (specification)",
        image: "house.png",
        textItems: [
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 1,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 2,
          },
          {
            title: "Title will be here",
            text: "Hybrid balloon framing provides additional rigidity",
            num: 3,
          },
        ],
      },
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
      centerPadding: "0px",
    },
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
          left: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
          right: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
        },
      },
      {
        slideNum: "02",
        header: "project name will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipea consequat. ",
        image: "house.png",
        btnText: "Enquire now",
        textItems: {
          left: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
          right: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
        },
      },
      {
        slideNum: "03",
        header: "project name will be here",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipea consequat. ",
        image: "house.png",
        btnText: "Enquire now",
        textItems: {
          left: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
          right: ["€1920 / м²", "€1920 / м²", "€1920 / м²"],
        },
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
    },
    slidersCount: function () {
      let a = state.FourthComponentData.sliderData.length;
      if (a < 10) {
        a = "0" + a;
      }
      return a;
    },
  },
  FifthComponentData: {
    itemData: [
      {
        title: "Name of the service",
        num: "01",
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        isActive: true,
        image: "house.png",
      },
      {
        title: "Name of the service",
        num: "02",
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        isActive: false,
        image: "house2.png",
      },
      {
        title: "Name of the service",
        num: "03",
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        isActive: false,
        image: "house2.png",
      },
      {
        title: "Name of the service",
        num: "04",
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        isActive: false,
        image: "house.png",
      },
      {
        title: "Name of the service",
        num: "05",
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        isActive: false,
        image: "house2.png",
      },
    ],
    sliderSpeed: 3000, //Set on ms
  },
  SixthComponentData: {
    itemsData: [
      {
        name: "project name",
        image: "photo_1.png",
        onStart: true,
      },
      {
        name: "project name",
        image: "photo_2.png",
        onStart: false,
      },
      {
        name: "project name",
        image: "photo_3.png",
        onStart: false,
      },
      {
        name: "project name",
        image: "photo_1.png",
        onStart: false,
      },
    ],
    sliderSettings: {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
    },
  },
  SeventhComponentData: {
    right: {
      map: "map.png",
      items: [
        {
          image: "pointer.svg",
          text: "Adress will be here",
        },
        {
          image: "tel.svg",
          text: "+1 344 3453 554",
        },
        {
          image: "mail.svg",
          text: "makh@email.com",
        },
      ],
    },
    left: {
      header: "Get in Touch",
      send: {
        service: "service_9b1ee76",
        template: "template_vwp3ebc",
        apiKey: "x83h9vQo2Y8LkIeVk",
      },
      inputs: [
        {
          text: "First Name",
          typeIs: "text",
          name: "firstname",
        },
        {
          text: "Email",
          typeIs: "email",
          name: "email",
        },
        {
          text: "Phone number",
          typeIs: "tel",
          name: "phone",
        },
      ],
      taxtarea: {
        text: "Your Message",
        name: "message",
      },
    },
  },
  FooterData: {
    state: {
      stateTop: {
        text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      stateCenter: {
        leftState: [
          {
            to: "11",
            text: "About us",
          },
          {
            to: "22",
            text: "Services",
          },
          {
            to: "33",
            text: "Projects",
          },
          {
            to: "44",
            text: "Contact us",
          },
        ],
        rightState: [
          {
            to: "55",
            text: "/ Facebook",
          },
          {
            to: "66",
            text: "/ Twitter",
          },
          {
            to: "77",
            text: "/ LinkedIn",
          },
        ],
      },
      stateBottom: {
        alRight: "© 2021 All Rights Reserved",
        ppolicy: "Privacy Policy",
      },
    },
  },
};
