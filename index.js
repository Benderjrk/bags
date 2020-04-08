function createPackage(small, big, goal) {
  let totalKilo = goal;

    if(totalKilo - big*5 > 0) {

      totalKilo = totalKilo - (big * 5);

      for (var i = 0; i < small; i++) {
        console.log(totalKilo);
        totalKilo = totalKilo - 1;

        if (totalKilo === 0) {
          return i+1;
        }
      }

      if (totalKilo > 0) {
        return -1;
      }

    } else if (totalKilo - big*5 < 0) {

      for (var i = 0; i < big; i++) {
        totalKilo = totalKilo - 5;

        if (totalKilo - 5 > 0) {

          for (var t = 0; t < small; t++) {
            console.log(totalKilo);
            totalKilo = totalKilo - 1;

            if (totalKilo === 0) {
              return t+1;
            }
          }

        }
      }

    } else if (totalKilo - big*5 === 0) {
      return 0;
    }
}

let thing = createPackage(4, 1, 9);
console.log(thing);
