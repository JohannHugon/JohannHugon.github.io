// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-hello-world-welcome-to-my-fresh-new-website-i-will-mainly-use-it-to-share-my-research-but-it-may-evolve-over-time",
          title: 'Hello World! Welcome to my fresh new website. I will mainly use it...',
          description: "",
          section: "News",},{id: "news-i-m-excited-to-have-just-started-my-6-month-visit-to-the-university-of-chicago-where-i-ll-be-working-in-the-noise-lab-under-the-supervision-of-prof-feamster",
          title: 'I’m excited to have just started my 6-month visit to the University of...',
          description: "",
          section: "News",},{id: "news-i-was-delighted-to-have-the-opportunity-to-present-my-work-the-cost-of-packet-loss-on-ml-based-traffic-analysis-at-the-lanman-2025-conference-at-inria-lille",
          title: 'I was delighted to have the opportunity to present my work, “The Cost...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-announce-that-i-successfully-defended-my-thesis-system-constrained-feature-extraction-pipelines-for-network-traffic-monitoring",
          title: 'I am pleased to announce that I successfully defended my thesis “System-Constrained Feature...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%68%61%6E%6E.%68%75%67%6F%6E@%65%6E%73-%6C%79%6F%6E.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JohannHugon", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Johann-Hugon-2/", "_blank");
        },
      },{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/99660612903/", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/362/4843.html", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4398-3313", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
