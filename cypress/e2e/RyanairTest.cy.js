describe('Teste de Pop-Up de Login', () => {
  it('TC01 - Teste de visibilidade de Pop-Up', () => {
    // Acessando o site e confirmando se o site está correto
    cy.visit('https://www.ryanair.com/pt/pt')
    cy.url().should('eq', 'https://www.ryanair.com/pt/pt')

    // Aceitando dados de cookie
    cy.get('[data-ref="cookie.accept-all"]').click()

    // Selecionando local para viagem
    cy.get('#input-button__destination').click()
    cy.get('#ry-tooltip-2 > div.tooltip-inner > hp-app-controls-tooltips > fsw-controls-tooltips-container > fsw-controls-tooltips > fsw-destination-container > fsw-airports > fsw-countries > div:nth-child(4) > div:nth-child(7) > span').click()
    cy.get('#ry-tooltip-2 > div.tooltip-inner > hp-app-controls-tooltips > fsw-controls-tooltips-container > fsw-controls-tooltips > fsw-destination-container > fsw-airports > div > fsw-airports-list > div.list__airports-container.ng-star-inserted > div.list__airports-scrollable-container.large-height > fsw-airport-item:nth-child(1) > span > span').click()

    // Selecionando data para viagem 
    cy.get(':nth-child(9) > .m-toggle__month').click()
    cy.get('.datepicker__calendar--left > calendar-body > :nth-child(3) > :nth-child(13) > .calendar-body__cell').click()
    cy.get('.datepicker__calendar--left > calendar-body > :nth-child(5) > :nth-child(7) > .calendar-body__cell').click()

    // Finalizando primeira página
    cy.get('.subscriber-widget__mail-wrapper').click()
    cy.get('.flight-search-widget__start-search-cta > .ng-tns-c983940023-3').click({force:true})

    // Selecionando vôo
    cy.get('.ng-tns-c2500699055-5.ng-tns-c2226206560-6 > .ry-spinner--large > [_ngcontent-ng-c2226206560=""][style=""] > .flight > .flight-card__wrapper > .flight-card__header').click()
    cy.get('.ng-tns-c2500699055-7.ng-tns-c2226206560-8 > .ry-spinner--large > [_ngcontent-ng-c2226206560=""][style=""] > .flight > .flight-card__wrapper > .flight-card__header').click()
    
    // Selecionando tarifa
    cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border').click()
 
    // Continuando com tarifa básica
    cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn').click()
 
    // Iniciando a sessão mais tarde
    cy.get('.login-touchpoint__login-later').click()
 
    // Inserindo dados do passageiro
    cy.get('.dropdown__toggle').click()
    cy.get('[data-ref="title-item-0"] > .dropdown-item__link').click()
    cy.get('[data-ref="pax-details__name"]').type('Rafael')
    cy.get('pax-details-form > .ngrx-forms-invalid').type('Oliveira')
    cy.get('.continue-flow__button').click()

    // Quantidade de malas
    cy.get('[data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-button').click()
    cy.get('.ry-button--gradient-yellow').click()

    // Selecionando assento
    cy.get('.passenger-carousel__cta').click({force:true})

    // Fechando pop-up de filas e ofertas
    cy.get('.enhanced-takeover-beta__product-dismiss-cta').click()
    cy.get('.airport-and-flight__cta').click()
    cy.get('.transport__cta').click()

    // Assertions para Pop-Up
    cy.get('.auth-popup').should('be.visible')
    .and('exist')
   })
 })