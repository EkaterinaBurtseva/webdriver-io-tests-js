class Counter{
}
let counter = new Counter();
describe('hooks',()=>{
beforeEach( () => {
    console.log(`Test number ${counter} executed`)
});


//DATA PROVIDER
let dataCollection =[1,2,3,4,5];
dataCollection.filter(data=>data!=4).map(data =>
    it(`Test for ${data}`), function() {
   //    console.log(`Test number ${data} executed`);
    });
});
