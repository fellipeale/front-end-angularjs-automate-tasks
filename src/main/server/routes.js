module.exports = (app) => {
  app.get('/people', (req, res) => {
    res.json(generateFakeList());
  });
};

function generateFakeList() {
  let names = ['Adam', 'Abe', 'Maria', 'Rose', 'Mario', 'Luigi'];
  let surnames = ['Lincoln', 'Franklin', 'Jackson', 'Miyazaki', 'M\'bebe'];
  let disclosableInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini' +
    'm veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c' +
    'onsequat.';
  let peopleList = [];

  for (let i = 0; i < 12; i++) {
    let person = {
      id: i,
      name: names[getRandom(names.length)] + ' ' + surnames[getRandom(surnames.length)],
      disclosableInfo
    }
    peopleList.push(person);
  }

  return peopleList;
}

function getRandom(length) {
  return Math.floor(Math.random() * length);
}
