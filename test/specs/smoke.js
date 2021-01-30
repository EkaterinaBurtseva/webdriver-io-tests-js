describe('Website', () => {
    it('should be alive', () => {
        browser.url('/')
        const img = $('a[href="https://rozetka.com.ua"]')
        browser.pause(10000)
        if(!img.isExisting()){
            throw new Error('Website should be opened and image existed')
        }
    });
});