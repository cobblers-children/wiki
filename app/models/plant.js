import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: 'Unnamed plant' }),
    description: DS.attr('string', { defaultValue: '' }),
    kind: DS.belongsTo('group', { defaultValue: 'unknown'})
});
