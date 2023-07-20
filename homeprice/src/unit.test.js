const {
    setYearBuilt,
    setBath,
    setFloor,
    setLot,
    setRoof,
    setLiving,
    setBasement,
    setRenovated,
    setBedroom,
    getJsonData,
    year_built, 
    num_bath, 
    num_floor, 
    y_renovated, 
    num_bedroom, 
    sqft_roof, 
    sqft_basement, 
    sqft_living, 
    sqft_lot
} = require('./app/page'); 

describe('Test default values', () => {
  it('following variables should be 0 by default', () => {
    expect(year_built).toBe(0);
    expect(num_bath).toBe(0);
    expect(num_floor).toBe(0);
    expect(y_renovated).toBe(0);
    expect(num_bedroom).toBe(0);
    expect(sqft_roof).toBe(0);
    expect(sqft_basement).toBe(0);
    expect(sqft_living).toBe(0);
    expect(sqft_lot).toBe(0);
  });
});

describe('Test setYearBuilt function', () => {
    it('should set year_built correctly', () => {
      setYearBuilt('2022-07-19');
      const data = getJsonData(); // Get the updated data
      expect(data[7]).toBe('2022');
    });
    it('should set year_built to 0 if invalid date is passed', () => {
      setYearBuilt('invalid-date');
      const data = getJsonData();
      expect(data[7]).toBe("0");
    });
});
describe('Test setBath function', () => {
  it('should set num_bath correctly', () => {
    setBath(2);
    const data = getJsonData();
    expect(data[1]).toBe(2);
  });

  it('should set num_bath to 0 if a negative value is passed', () => {
    setBath(-2);
    const data = getJsonData();
    expect(data[1]).toBe(0);
  });
});
describe('Test setFloor function', () => {
  it('should set num_floor correctly', () => {
    setFloor(3);
    const data = getJsonData();
    expect(data[4]).toBe(3);
  });

  it('should set num_floor to 0 if a negative value is passed', () => {
    setFloor(-1500);
    const data = getJsonData();
    expect(data[4]).toBe(0);
  });
});
describe('Test setLot function', () => {
  it('should set sqft_lot correctly', () => {
    setLot(2000);
    const data = getJsonData();
    expect(data[3]).toBe(2000);
  });

  it('should set sqft_lot to 0 if a negative value is passed', () => {
    setLot(-1500);
    const data = getJsonData();
    expect(data[3]).toBe(0);
  });
});
describe('Test setRoof function', () => {
  it('should set sqft_roof correctly', () => {
    setRoof(1000);
    const data = getJsonData();
    expect(data[5]).toBe(1000);
  });

  it('should set sqft_roof to 0 if a negative value is passed', () => {
    setRoof(-1500);
    const data = getJsonData();
    expect(data[5]).toBe(0);
  });
});
describe('Test setLiving function', () => {
  it('should set sqft_living correctly', () => {
    setLiving(1500);
    const data = getJsonData();
    expect(data[2]).toBe(1500);
  });

  it('should set sqft_living to 0 if a negative value is passed', () => {
    setLiving(-1500);
    const data = getJsonData();
    expect(data[2]).toBe(0);
  });
});
describe('Test setBasement function', () => {
  it('should set sqft_basement correctly', () => {
    setBasement(500);
    const data = getJsonData();
    expect(data[6]).toBe(500);
  });

  it('should set sqft_basement to 0 if a negative value is passed', () => {
    setBasement(-1500);
    const data = getJsonData();
    expect(data[6]).toBe(0);
  });
});
describe('Test setRenovated function', () => {
  it('should set y_renovated correctly', () => {
    setRenovated('2022-07-19');
    const data = getJsonData(); // Get the updated data
    expect(data[8]).toBe(2022);
  });
  it('should set y_renovated to 0 if invalid date is passed', () => {
    setRenovated('invalid-date');
    const data = getJsonData();
    expect(data[8]).toBe(0);
  });
});
describe('Test setBedroom function', () => {
  it('should set num_bedroom correctly', () => {
    setBedroom(2);
    const data = getJsonData();
    expect(data[0]).toBe(2);
  });

  it('should set num_bedroom to 0 if a negative value is passed', () => {
    setBedroom(-1500);
    const data = getJsonData();
    expect(data[0]).toBe(0);
  });
});
describe('Test getJsonData function', () => {
  it('should return an array with all the correct values', () => {
    setYearBuilt('2022-07-19');
    setBath(2);
    setLiving(1500);
    setFloor(3);
    setLot(2000);
    setRoof(1000);
    setBasement(500);
    setRenovated('2022-07-19');
    setBedroom(2);
    const data = getJsonData();
    expect(data).toEqual([
      2,
      2,
      1500,
      2000,
      3,
      1000,
      500,
      "2022",
      2022,
    ]);
  });
});