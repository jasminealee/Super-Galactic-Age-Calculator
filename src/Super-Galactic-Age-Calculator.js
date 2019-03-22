export class Birthday {
  const (month, day, year){
    this.month = month;
    this.day = day;
    this.year = year;
  }

  static birthLifeLongDate(birthday)
  {
  const birthLifeLongDate = ["month", "day", "year"];
   let birthDay = new date(birthday.month + 1, birthday.currentDay, birthday.year);
   return birthDay;
  }

  static getAge(birthday)
  {
    const currentDay =  new date();
    let age = (currentDay - Birthday.birthDay(birthday));
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

  static ageConverter(age)
  {
    const ageConvert = Math.Floor(age/ 365);
    return ageConvert;
  }
}
