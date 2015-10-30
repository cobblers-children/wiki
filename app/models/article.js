import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: '' }),
    description: DS.attr('string', { defaultValue: '' }),
    body: DS.attr('string', { defaultValue: '' }),
    bodyLines: function() {
        return this.get('body').split(',').join('\n');
    }.property('body')
});
