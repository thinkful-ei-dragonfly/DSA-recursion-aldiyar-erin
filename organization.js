/* eslint-disable strict */
let organization = {
  'Zuckerberg': {
    'Schroepfer': {
      'Bosworth': {
        'Steve': {},
        'Kyle': {},
        'Andra': {}
      },
      'Zhao': {
        'Richie': {},
        'Sofia': {},
        'Jen': {}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina': {},
        'Michelle': {},
        'Josh': {}
      },
      'Swain': {
        'Blanch': {},
        'Tom': {},
        'Joe': {}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie': {},
        'Julie': {},
        'Annie': {}
      },
      'Hernandez': {
        'Rowi': {},
        'Inga': {},
        'Morgan': {}
      },
      'Moissinac': {
        'Amy': {},
        'Chuck': {},
        'Vinni': {}
      },
      'Kelley': {
        'Eric': {},
        'Ana': {},
        'Wes': {}
      }
    }
  }
};

 
const organize = function (object, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(object).forEach(key => {
    console.log(indent + key);
    organize(object[key], depth + 1);
  });
};

console.log(organize(organization));