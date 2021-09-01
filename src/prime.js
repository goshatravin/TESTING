const prime = (a) => {
    console.log('chslo', a);
    if( a > 1 && (a % 2 !== 0 && a % 3 !== 0) || a === 2 || a === 3  ) {
        return true
    }else {
        return false;
    }
}
export default  prime;
