void function () {
	// check env
	if (typeof window === 'undefined') {
		console.error('[Sample] Open test.html in browsers to run tests!')
		return
	}

	describe('Util', function () {
		describe('sample.__util()', function () {
			it('does basic functionality', function () {
				expect(true).to.be.true
			})
		})
	})

	describe('APIs', function () {
		describe('sample.sample1()', function () {
			it('does basic functionality', function () {
				expect(true).to.be.true
			})
		})
		describe('sample.sample2()', function () {
			it('does basic functionality', function () {
				expect(true).to.be.true
			})
		})
	})

}()
