const {sum,sumOf} = require('./sum')

test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
});
it("1+2=3",()=>{
    expect(sum(1,2)).toBe(3);
});
it('1+2+3+4',()=>{
    expect(sumOf([1,2,3,4])).toBe(10);
})
it('1+2+3+4+5',()=>{
    const array=[1,2,3,4,5]
    expect(sumOf(array)).toBe(15)
})