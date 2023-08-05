const stats=require('./stats');

describe('stats',()=>{
    it('gets maximum stats',()=>{
        let array=[1,2,3,4,5]
        expect(stats.maxNum(array)).toBe(5)
        expect(stats.maxNum([1,2,3])).toBe(3)
    })
    it('get minimun stats',()=>{
        let array=[5,4,3,2,1];
        expect(stats.minNum(array)).toBe(1);
        expect(stats.minNum([3,2,1])).toBe(1);
    })
})