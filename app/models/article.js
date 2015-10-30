import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: '' }),
    description: DS.attr('string', { defaultValue: '' }),
    body: DS.attr('string', { defaultValue: '' }),
    bodyHTML: function() {
        var body = this.get('body').split(',').join('\n');
        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer({safe: true});
        var parsed = reader.parse(body); // parsed is a 'Node' tree

        return Ember.String.htmlSafe(writer.render(parsed));
    }.property('body')
});
