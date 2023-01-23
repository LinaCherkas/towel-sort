
module.exports = function towelSort (matrix) {
    return (matrix===undefined)?[]:matrix.map((item, index) => (index%2!==0)?item.reverse():item).flat(Infinity)
}
