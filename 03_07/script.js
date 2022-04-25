const computer = {
  brand: "Apple",
  color: "silver",
  isOn: false,
  charging: true,
  pluggedOnPower: true,
  powerSwitch: function () {
    this.isOn = !this.isOn;
  },
  changeColor: function (color) {
    this.color = color;
  },
};

console.log("computer:", computer);
