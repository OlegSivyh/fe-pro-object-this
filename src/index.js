export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {
    0: {
      firstName: 'Bohdan',
      lastName: 'Rammfall',
      money: 40,
    },
  },

  getLength: function () {
    return Object.keys(this.guests).length;
  },

  getActualFreePlace: function () {
    return (this.quantityOfPlaces -= this.getLength());
  },

  paidPerPlace: function () {
    return (this.bankAccount += this.priceByPlace);
  },

  checkInGuest: function (firstName, lastName, money) {
    if (this.getActualFreePlace() === 0) {
      return 'Sorry, we have not free spaces';
    } else if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else {
      return (this.guests[this.getLength()] = {
        firstName,
        lastName,
        money: money - this.priceByPlace,
      });
      this.paidPerPlace();
    }
  },
};
