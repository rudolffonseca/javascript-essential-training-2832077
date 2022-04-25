class Book {
  constructor(name, topic, boughtAt) {
    this.name = name;
    this.topic = topic;
    this.boughtAt = boughtAt;
  }

  getName() {
    return this.name;
  }

  getTopic() {
    return this.topic;
  }

  getAge() {
    const currentDate = new Date();
    const boughtAt = new Date(this.boughtAt);
    const ageInMiliseconds = currentDate - boughtAt;
    const ageInDays = ageInMiliseconds / (1000 * 60 * 60 * 24 * 365);
    return ageInDays.toFixed(1);
  }
}

export default Book;
