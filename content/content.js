const { version } = require("react");

const content = {
  nav_items: {
    about: {
      text: "About",
      route: "/about",
    },
    songs: {
      text: "Songs",
      route: "/songs",
    },
    performances: {
      text: "Performances",
      route: "/#performances",
    },
    reach_out: {
      text: "Reach out",
      route: "/#reach-out",
    },
  },
  songs: {
    song_1: {
      cover: "/images/hitOchcham_acoustic.png",
      name: "HithOchcham",
      ver: "acoustic",
      id: 1,
      mp3File: "/music/hithOchcham_acoustic.mp3",
    },
    song_2: {
      cover: "/images/hithOchcham.jpg",
      name: "HithOchcham",
      ver: "original",
      id: 2,
      mp3File: "/music/hithOchcham.mp3",
    },
    song_3: {
      cover: "/images/sali_sali.jpg",
      name: "Sali Sali",
      ver: "original",
      id: 3,
      mp3File: "/music/sali_sali.mp3",
    },
    song_4: {
      cover: "/images/dathin_allan.jpeg",
      name: "Dathin Allan",
      ver: "original",
      id: 4,
      mp3File: "/music/dathin_allan.mp3",
    },
  },
  performances: {
    performance_1: {
      name: "premadari",
      type: "cinematic musical concert",
      date: 16,
      month: "march",
      year: 2024,
      description:
        "Premadari, a mesmerizing cinematic musical concert, took place on March 16th, showcasing a diverse lineup of talented artists including Me. The evening unfolded with spellbinding performances blending genres from lo-fi beats to soulful ballads, each artist bringing their unique style to the stage. The atmosphere was electric as attendees immersed themselves in the ethereal melodies and captivating visuals, creating an unforgettable experience that resonated long after the final note faded. Premadari, meaning lover of melodies in an ancient tongue, enchanted audiences with its fusion of music and visual storytelling, leaving all who attended inspired and uplifted by the power of music.",
      image_main: "/",
      images: {
        image_1: "/",
        image_2: "/",
        image_3: "/",
      },
    },
  },
  socials: {
    instagram: {
      logo: "/icons/instagram.svg",
      link: "https://www.instagram.com/______lashan_herath_/",
    },
    facebook: {
      logo: "/icons/facebook.svg",
      link: "https://web.facebook.com/wizard.6000/?_rdc=1&_rdr",
    },
    youtube: {
      logo: "/icons/youtube.svg",
      link: "https://www.youtube.com/channel/UCOVJ5R_XeTs4TU0FohaXG6w",
    },
    spotify: {
      logo: "/icons/spotify.svg",
      link: "https://open.spotify.com/artist/2GKt5532rbjOVlrGyvVHcC?si=SivOnKxnSjSBxNG3wHBDZg",
    },
  },
  marquee_images: {
    image1: "/images/marquee/m1.jpg",
    image2: "/images/marquee/m2.jpg",
    image3: "/images/marquee/m3.jpeg",
    image4: "/images/marquee/m4.jpg",
    image5: "/images/marquee/m5.jpeg",
    image6: "/images/marquee/m6.jpg",
    image7: "/images/marquee/m7.jpg",
    image8: "/images/marquee/m8.jpg",
    image9: "/images/marquee/m9.jpg",
  },
};

export default content;
