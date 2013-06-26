/**
 * Wraps element in JQ if it is present
 * The same tests are used for both JQ an Vanilla version
 * some functions still require wrapped elements
 */
function jQwrap (element) {
    if (window.jQuery) {
        return $(element);
    }
    return element;
}

/**
 * Get and parse some template for tesing
 */
function getTestFile(filename, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename, false);
    xhr.send();

    if (xhr.status == 200) {
        return xhr.response;
    }
}

describe('Helper', function() {

    describe('removes balance text for', function() {

        it('span tag', function(done) {
            var element = document.createElement('div');
            element.innerHTML = getTestFile('tests/spanRemove.html');

            element = jQwrap(element);
            removeTags(element);

            expect(element[0].getElementsByTagName('span').length).toEqual(1);
            expect(element[0].getElementsByTagName('br').length).toEqual(1);
            expect(element[0].getElementsByTagName('b').length).toEqual(1);

        });

        it('br tag', function() {
            var element = document.createElement('div');


        });

    });

    it('checks if justification needs to be done', function() {
        var element = document.createElement('div');
        element = jQwrap(element);

        var result = isJustified(element);
    });

    it('adds whitespace after word to justify the string', function () {
        var element = document.createElement('div'),
            text = 'Lorem ?',
            containerWidth = 400;

        element = jQwrap(element);

        var result = justify(element, text, containerWidth);
    });
});