class Computer {
  constructor(brand, color, isOn, isPlugged, batteryPercent) {
    this.brand = brand;
    this.color = color;
    this.isOn = isOn;
    this.isPlugged = isPlugged;
    this.batteryPercent = batteryPercent;
    this.createdAt = new Date();
  }

  setColor(color) {
    this.color = color;
  }

  powerSwitch() {
    this.isOn = !this.isOn;
  }
}

export default Computer;
