import "cypress-localstorage-commands";

describe('Start testing',()=>
{
    it('Testing Cypres',()=>
    {
        expect(true).to.equal(true);
    })
})
//====================
describe('visiting Registration Page', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/register");
    })
    
    it('check for Submit button',()=>{
        cy.get('#formFirstName').type('Kalaivani');
        cy.get('#formLastName').type('Anandan');
        cy.get('#formBasicEmail').type('kalai@gmail.com');
        cy.get('#formBasicPassword').type('password');
        cy.get('#formConfirmPassword').type('password');
       
        cy.wait(2000);
        cy.get('.btn-primary').click();
       
    })
})
//======================
describe('visiting News app', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    
    it('check for Submit button',()=>{
       // cy.wait(6000);
        // cy.get('Button[id=Submitbutton]').contains('Submit')
        cy.get('.btn-primary').contains('Submit');
        cy.setLocalStorage("isAuthenticated", "true");
    })
})
//=====================
describe('Testing login page',()=>{

    it('should enter loginid and password ',()=>{
        cy.get('input[id=userid]').type('admin');
        cy.get('input[id=password]').type('password');
        cy.wait(2000);
        cy.get('.btn-primary').click();
        cy.location().should( (location)=> expect(location.href).to.eq('http://localhost:3000/Dashboard'));
         
    })
})

describe('Select News Category',()=>{
    it('should enable category as Business',()=>{
        cy.get('[type="radio"]').check('business')
    
    cy.wait(6000);    
    
    })
    describe('Adding News to ReadLater list',()=>{
        it('should click on Read Later button',()=>{
           cy.get('#ReadLaterBtn').click();           
        
        cy.wait(2000);    
        
        })
    
     })
    })
    describe('Opening ReadLater list',()=>{
        it('should click on Read Later link on Header',()=>{
        cy.get('#ReadNowlink').click();  
        cy.visit('http://localhost:3000/ReadNow', {
            onBeforeLoad: function (window) {
                window.localStorage.setItem("isAuthenticated", "true");
            }
        })
        //cy.request('http://localhost:3001/api/v1/news')
        cy.location().should( (location)=> expect(location.href).to.eq('http://localhost:3000/ReadNow'));
          
        
        })
    
     })