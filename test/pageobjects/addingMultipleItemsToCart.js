import { $ } from '@wdio/globals'
import myPage from './thesigningInPage.js'

class multipleOfAddToCartBtns extends myPage {
    get sauceLabsBikeLightAddToCartBtn () {
        return $('button[data-test="add-to-cart-sauce-labs-bike-light"]');
    };
    async clickSauceLabsBikeLightAddToCartBtn () {
            // If bike light is already in cart, add button won't exist, so don't fail test.
            if (await this.sauceLabsBikeLightAddToCartBtn.isExisting()) {
                await this.sauceLabsBikeLightAddToCartBtn.waitForClickable({ timeout: 10000 });
                await this.sauceLabsBikeLightAddToCartBtn.click();
                return;
            }

            if (await this.removeSauceLabsBikeLightBtn.isExisting()) {
                return;
            }

            await this.sauceLabsBikeLightAddToCartBtn.waitForExist({ timeout: 5000 });
        }
    get removeSauceLabsBikeLightBtn () {
        return $('button[data-test="remove-sauce-labs-bike-light"]');
    }
    async clickRemoveSauceLabsBikeLightBtn () {
            await this.removeSauceLabsBikeLightBtn.waitForExist({ timeout: 5000 });
            await this.removeSauceLabsBikeLightBtn.waitForClickable({ timeout: 10000 });
            await this.removeSauceLabsBikeLightBtn.click();
        }

    get sauceLabsBoltTShirtBtn () {
        return $('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    async clickSauceLabsBoltTShirtBtn () {
            await this.sauceLabsBoltTShirtBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsBoltTShirtBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsBoltTShirtBtn.click();
        }
    get removeSauceLabsBoltTShirtBtn () {
        return $('button[data-test="remove-sauce-labs-bolt-t-shirt"]');
    }
    async clickRemoveSauceLabsBoltTShirtBtn () {
            await this.removeSauceLabsBoltTShirtBtn.waitForExist({ timeout: 5000 });
            await this.removeSauceLabsBoltTShirtBtn.waitForClickable({ timeout: 10000 });
            await this.removeSauceLabsBoltTShirtBtn.click();
        }

    get sauceLabsFleeceJacketBtn () {
        return $('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }
    async clickSauceLabsFleeceJacketBtn () {
            await this.sauceLabsFleeceJacketBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsFleeceJacketBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsFleeceJacketBtn.click();
        }
    get removeSauceLabsFleeceJacketBtn () {
        return $('button[data-test="remove-sauce-labs-fleece-jacket"]');
    }
    async clickRemoveSauceLabsFleeceJacketBtn () {
            await this.removeSauceLabsFleeceJacketBtn.waitForExist({ timeout: 5000 });
            await this.removeSauceLabsFleeceJacketBtn.waitForClickable({ timeout: 10000 });
            await this.removeSauceLabsFleeceJacketBtn.click();
        }

    get sauceLabsOnesieBtn () {
        return $('button[data-test="add-to-cart-sauce-labs-onesie"]');
    }
    async clickSauceLabsOnesieBtn () {
            await this.sauceLabsOnesieBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsOnesieBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsOnesieBtn.click();
        }
    get removeSauceLabsOnesieBtn () {
        return $('button[data-test="remove-sauce-labs-onesie"]');
    }
    async clickRemoveSauceLabsOnesieBtn () {
            await this.removeSauceLabsOnesieBtn.waitForExist({ timeout: 5000 });
            await this.removeSauceLabsOnesieBtn.waitForClickable({ timeout: 10000 });
            await this.removeSauceLabsOnesieBtn.click();
        }

    get sauceLabsRedTShirtBtn () {
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    async clickSauceLabsRedTShirtBtn () {
            await this.sauceLabsRedTShirtBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsRedTShirtBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsRedTShirtBtn.click();
        }
    get removeSauceLabsRedTShirtBtn () {
        return $('button[data-test="remove-test.allthethings()-t-shirt-(red)"]');
    }
    async clickRemoveSauceLabsRedTShirtBtn () {
            await this.removeSauceLabsRedTShirtBtn.waitForExist({ timeout: 5000 });
            await this.removeSauceLabsRedTShirtBtn.waitForClickable({ timeout: 10000 });
            await this.removeSauceLabsRedTShirtBtn.click();
        }


    get sauceLabsShoppingCartIconBtn () {
        return $('.shopping_cart_link');
    }
    async clickSauceLabsShoppingCartIconBtn () {
            await this.sauceLabsShoppingCartIconBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsShoppingCartIconBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsShoppingCartIconBtn.click();
        }


    get sauceLabsContinueShoppingBtn () {
        return $('button[data-test="continue-shopping"]');
    }
    async clickContinueShoppingBtn () {
            await this.sauceLabsContinueShoppingBtn.waitForExist({ timeout: 5000 });
            await this.sauceLabsContinueShoppingBtn.waitForClickable({ timeout: 10000 });
            await this.sauceLabsContinueShoppingBtn.click();
        }
}

export default new multipleOfAddToCartBtns();
