function check(str) {
    let regexp = /^[CPA]+[0-9]{4}([GHIKLM])/
    if (regexp.test(str)) console.log('Ma lop hoc hop le');
    else console.log('Ma lop hoc khong hop le');
}

check('C0319H');
check('C031G');
check('M0318G');
check('P0323A');