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

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.response);
        }
    };

    xhr.open('GET', filename, true);
    xhr.send();

}

describe('Helper', function() {

    describe('removes balance text for', function() {

        it('span tag', function() {
            var element = document.createElement('div');
            getTestFile('tests/spanRemove.html', function (response) {
                element.innerHTML = response;
                debugger;

                element = jQwrap(element);
                var result = removeTags(element);
                expect(element[0].getElementsByTagName('span').length).toBe(2);
            });
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