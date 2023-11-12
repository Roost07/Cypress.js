describe('Покупка аватара', function () {
    it('Tест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('roost07@mail.ru')
         cy.get('#password').type('Rfgbnfk43');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(7) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1226');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Roost Anoyatwoev');
         cy.wait(3000);
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
         cy.wait(3000);
         cy.get('.header__container > .header__id').click();
    })
})