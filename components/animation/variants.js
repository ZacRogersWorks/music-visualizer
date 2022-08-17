export const indexVariants = {
  menuBtn: {
    initial: {},
    animate: {
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.2,
      },
    },
    hover: {
      scaleX: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  menuRules: {
    initial: { x: 300 },
    animate: {
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  },
  menuLinksParent: {
    initial: {},
    animate: { transition: {
        staggerChildren: .3,
        delayChildren: .7
    } 
},
  },
  menuLinksChildren: {
    initial: { opacity: 0},
    animate: { opacity: 1,
    transition: {
        duration: .6,
        ease: "easeOut"
    }
    }
  },
  socialLinks: {
    initial: {},
    animate: {
      transition: {
        delay: 1,
        staggerChildren: 0.3,
      },
    },
  },
  socialSVGs: {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      },
    },
  },
  headings: {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .4
        }
    }
  },
  headingSpans: {
    initial: {x: -80, opacity: 0},
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
  },
  headingRule: {
    initial: {
        scaleX: 0
    },
    animate: {
        scaleX: 1,
        transition: {
            duration: .6,
            ease: "easeOut",
            delay: .8
        }
    }
  },
  galleryDescription : {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            duration: .6,
            ease: "easeOut",
            delay: 1.2
        }
    }
  },
  galleryTrack: {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut",
            delay: 1.6
        }
    }
  },
  gallerySection : {
    initial: {},
    animate: {
      transition: {
        duration: .3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: .3,
        ease: "easeOut"
      }
    }
  },
  muteContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: .2,
        delayChildren: .4
      }
    }
  },
  muteBtns: {
    initial: {opacity: 0},
    animate: {opacity: 1,
    transition: {
      duration: .7,
      ease: "easeOut"
    }
    }
  }
};
