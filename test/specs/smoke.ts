import { assert } from "console";

describe('Website', () => {
    it('should be alive', () => {
        browser.url('/')
        const img = $('a[href="http://automationpractice.com/"]')
        
        browser.pause(2000)
        assert
        if(!img.isExisting()){
            throw new Error('Website should be opened and image existed')
        }
    });
});