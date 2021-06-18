
// describe('Form', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000')
//   })

//   const nameInput = () => cy.get('input[name=name]')

//   it('Sanity check to make sure tests work', () => {
//     expect(1+2).to.equal(3)
//     expect(2+2).not.to.equal(5)
//     expect({}).not.to.equal({})
//     expect({}).to.eql({})
//   })
  
//   it('test that you can add text to the box', () => {
//     nameInput()
//       .should('have.value', '')
//       .type('jordan')
//       .should('have.value', 'jordan')
//   })
// })