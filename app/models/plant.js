import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: 'Unnamed plant' }),
    description: DS.attr('string', { defaultValue: '' }),
    group: DS.belongsTo('group', { defaultValue: 'unknown'}),
    intro: function() {
        var description = this.get('description');
        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer({safe: true});
        var parsed = reader.parse(description); // parsed is a 'Node' tree

        return Ember.String.htmlSafe(writer.render(parsed));
    }.property('description')
});
