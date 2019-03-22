export Class Birthday {
  const (month, day, year){
    this.month = month;
    this.day = day;
    this.year = year;
  }

  static birthDate(birthday)
  {
  const birthDate = ["month", "day", "year"];
   let birthDate = new date(birthday.month + 1, birthday.today, birthday.year);
   return birthDate;
  }

  state getAge(birthday)
  {
    const currentDay =  new date();
    let age = (currentDay - Birthday.birthDate(birthday));
    return age;
  }

  static getVenusAge(age)
  {
    age = age/(0.24);
    return age;
  }

  static getMarsAge(age)
  {
    age = age/(0.62);
    return age;
  }

  static getMarsAge(age)
  {
    age = age/(1.88);
    return age;
  }

  static getJupiterAge(age)
  {
    age= age/(11.86);
    return age;
  }

  static getLifeToSeconds(age)
  {
    const convertedAge = Math.floor(age * 31556952);
    return convertedAge;
  }

  static yearsLeft(age, lifeExpectancy) {
      const lifeExpectancy = (expectancy * 31556952);
      const yearsLeft = expectancy - age;
      return yearsLeft;
  }
  }

  static getLifeExpectancy( age, lifeExpectancy)
 }

 static yearsPastLifeExpectance
