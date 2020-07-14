import './directory.html';

// add links for new levels here
const links = [
  {
    number: "unit 1",
    week: [
      {
        title: 'level 0: bacterial cell division',
        url: '/level0',
      },
      {
        title: 'level 1: animal cell division',
        url: '/level1',
      },
      {
        title: 'level 2: cellular respiration',
        url: '/level2',
      },
      {
        title: 'level 3: photosynthesis',
        url: '/level3',
      },
      {
        title: 'checkpoint',
        url: '/checkpoint1',
      },
      {
        title: 'compete!',
        url: '/comp1',
      },
    ]
  },
  {
    number: "unit 2",
    week: [
      {
        title: 'level 4: salinity and solutions',
        url: '/level4',
      },
      {
        title: 'level 5: plasma membrane',
        url: '/level5',
      },
      {
        title: 'level 6: protein structures',
        url: '/level6',
      },
      {
        title: 'level 7: protein engineering',
        url: '/level7',
      },
      {
        title: 'checkpoint',
        url: '/checkpoint2',
      },
      {
        title: 'compete!',
        url: '/comp2',
      },
    ],
  },
  {
    number: "unit 3",
    week: [
      {
        title: 'level 8: cell motility',
        url: '/level8',
      },
      {
        title: 'level 9: bacterial chemotaxis',
        url: '/level9',
      },
      {
        title: 'level 10: eukaryotic chemotaxis',
        url: '/level10',
      },
      {
        title: 'level 11: chemotaxis and regulation',
        url: '/level11',
      },
      {
        title: 'checkpoint',
        url: '/checkpoint3',
      },
      {
        title: 'compete!',
        url: '/comp3',
      },
    ],
  },
  {
    number: "unit 4",
    week: [
      {
        title: 'level 12: mendelian traits',
        url: '/level12',
      },
      {
        title: 'level 13: mendelian genetic disorders',
        url: '/level13',
      },
      {
        title: 'level 14: non-mendelian traits',
        url: '/level14',
      },
      {
        title: 'level 15: genetic mutations and drift',
        url: '/level15',
      },
      {
        title: 'checkpoint',
        url: '/checkpoint4',
      },
      {
        title: 'compete!',
        url: '/comp4',
      },
    ],
  },
  {
    number: "unit 5",
    week: [
      {
        title: 'level 16: cell-cell interactions',
        url: '/level16',
      },
      {
        title: 'level 17: stimuli and stress',
        url: '/level17',
      },
      {
        title: 'level 18: immune system',
        url: '/level18',
      },
      {
        title: 'level 19: nervous system',
        url: '/level19',
      },
      {
        title: 'checkpoint',
        url: '/checkpoint5',
      },
      {
        title: 'compete!',
        url: '/comp5',
      },
    ],
  },
  {
    number: "unit 6",
    week: [
      {
        title: 'checkpoint',
        url: '/checkpoint6',
      },
      {
        title: 'compete!',
        url: '/comp6',
      },
    ],
  },

];

Template.directory.helpers({
  links() {
    return links; 
  }
});
