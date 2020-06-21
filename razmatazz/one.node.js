var conditions = [
    s => s === 'z' ? 'zazz' : s,
    s => s === 't' ? 'tazz' : s,
    s => s === 'r' ? 'razmatazz' : s,
]

function razmatazz(input) {
    return input.split('')
        .map(ch => conditions.reduce((out, fn) => fn(out), ch))
        .join('')
}

module.exports = razmatazz

/* sample output
 * > f('r')
 * 'razmatazz'
 * > f('t')
 * 'tazz'
 * > f('z')
 * 'zazz'
 * > f(f('r'))
 * 'razmatazzazazzmatazzazazzzazz'
 * > f(f('t'))
 * 'tazzazazzzazz'
 * > f(f('z'))
 * 'zazzazazzzazz'
 * */

