function returnfunc() {
  const x = function () {
    let a = 1;
    console.log(a);
    const y = function () {
      console.log(a);
      const z = function () {
        console.log(a);
      };
      z();
    };
    a = 3;
    y();
  };
  x();
}
returnfunc();
