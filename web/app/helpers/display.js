/* globals commonmark */
import Ember from 'ember';

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer( {safe: true} );

export function display(params/*, hash*/) {
    var parsed = reader.parse(params[0]); // parsed is a 'Node' tree

    return Ember.String.htmlSafe(writer.render(parsed));
}

export default Ember.Helper.helper(display);
