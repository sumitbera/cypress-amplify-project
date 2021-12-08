 /// <reference types= "cypress" />

 describe("Login Test for gearbox",() =>{

    it("Login Test flow",() =>{
        
        cy.visit("https://dev-gearbox.trevo.my/");
        cy.get('.el-form > .font-bold').should('be.visible');
        cy.url().should("include","/login");
        cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner').type("sumit_test@socar.my");
        cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner').type("Password123!");
        cy.get('.el-button').invoke('text').as("linkText");
        
        cy.get("@linkText").then(($x)=>{
            expect($x).is.eq('Login');
        })
        
        cy.get('.el-button').click({force: true});
    })

    it("Logout Test Flow",() =>{
        cy.get('.truncate > .anticon > svg').click({force: true});
        cy.get('.ant-dropdown > .bg-white > .navbar-list').click();
    })

 })